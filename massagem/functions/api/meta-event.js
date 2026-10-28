import { tracking } from '../../src/config/tracking.ts'

const json = (body, status) => new Response(JSON.stringify(body), {
  status,
  headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
})

export async function onRequestPost({ request, env }) {
  const token = env.META_CAPI_ACCESS_TOKEN
  const pixelId = tracking.metaPixelId
  if (!token || !/^\d+$/.test(pixelId)) return json({ error: 'Tracking indisponível.' }, 503)

  const origin = request.headers.get('Origin')
  const requestOrigin = new URL(request.url).origin
  if (origin && origin !== requestOrigin) return json({ error: 'Origem inválida.' }, 403)
  if (Number(request.headers.get('Content-Length') || 0) > 4096) return json({ error: 'Requisição muito grande.' }, 413)

  let input
  try {
    input = await request.json()
  } catch {
    return json({ error: 'JSON inválido.' }, 400)
  }

  const eventId = typeof input.event_id === 'string' ? input.event_id : ''
  const eventUrl = typeof input.event_source_url === 'string' ? input.event_source_url : ''
  if (!/^[A-Za-z0-9._:-]{1,100}$/.test(eventId)) return json({ error: 'Identificador inválido.' }, 400)
  try {
    if (new URL(eventUrl).origin !== requestOrigin) return json({ error: 'URL inválida.' }, 400)
  } catch {
    return json({ error: 'URL inválida.' }, 400)
  }

  const cookieId = value => typeof value === 'string' && value.length <= 300 && /^[A-Za-z0-9._:-]+$/.test(value) ? value : undefined
  const userData = { client_user_agent: request.headers.get('User-Agent') || '' }
  const clientIp = request.headers.get('CF-Connecting-IP') || request.headers.get('X-Forwarded-For')?.split(',')[0]?.trim()
  if (clientIp && !['127.0.0.1', '::1'].includes(clientIp)) userData.client_ip_address = clientIp
  if (cookieId(input.fbp)) userData.fbp = input.fbp
  if (cookieId(input.fbc)) userData.fbc = input.fbc

  const graphVersion = env.META_GRAPH_API_VERSION || 'v26.0'
  const response = await fetch(`https://graph.facebook.com/${graphVersion}/${pixelId}/events?access_token=${encodeURIComponent(token)}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      data: [{
        event_name: 'PageView',
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        event_source_url: eventUrl,
        action_source: 'website',
        user_data: userData,
      }],
    }),
  })

  if (!response.ok) {
    const result = await response.json().catch(() => null)
    const error = result?.error
    console.error('Meta Conversions API request failed:', response.status, error?.code, error?.error_subcode, error?.message)
    return json({ error: 'Não foi possível enviar o evento.' }, 502)
  }
  return new Response(null, { status: 204, headers: { 'Cache-Control': 'no-store' } })
}
