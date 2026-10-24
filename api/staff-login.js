// Staff PIN check. The PIN belongs to one store, so it also decides which store's orders the tablet can see.
//   POST /api/staff-login {pin}  ->  {ok, store, token}
// After 5 wrong PINs from one address the address is paused for 5 minutes.
const { redis, send, readBody, ip, pinStore, makeToken } = require('./_lib');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return send(res, 405, { ok: false, error: 'POST only' });
  if (!process.env.STAFF_PINS || !process.env.STAFF_SECRET) return send(res, 503, { ok: false, error: 'Staff sign-in is not set up yet.' });
  try {
    const fk = 'pm:pinfail:' + ip(req);
    const fails = Number(await redis(['GET', fk])) || 0;
    if (fails >= 5) return send(res, 429, { ok: false, error: 'Too many wrong PINs. Try again in 5 minutes.' });
    const b = await readBody(req);
    const pin = String(b.pin || '').replace(/\D/g, '').slice(0, 12);
    const store = pin ? pinStore(pin) : null;
    if (!store) {
      const n = await redis(['INCR', fk]);
      if (n === 1) await redis(['EXPIRE', fk, 300]);
      return send(res, 401, { ok: false, error: 'Wrong PIN.' });
    }
    await redis(['DEL', fk]);
    return send(res, 200, { ok: true, store, token: makeToken(store) });
  } catch (e) {
    return send(res, e.status || 502, { ok: false, error: 'Could not check the PIN. Try again.' });
  }
};
