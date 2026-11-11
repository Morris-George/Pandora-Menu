// Staff sign-in: the store is chosen from a list and its password is typed.
//   POST /api/staff-login {store, password}  ->  {ok, store, token}
// After 5 wrong tries from one address the address is paused for 5 minutes.
const { redis, send, readBody, ip, pinStore, makeToken } = require('./_lib');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return send(res, 405, { ok: false, error: 'POST only' });
  if (!process.env.STAFF_PINS || !process.env.STAFF_SECRET) return send(res, 503, { ok: false, error: 'Staff sign-in is not set up yet.' });
  try {
    const fk = 'pm:pinfail:' + ip(req);
    const fails = Number(await redis(['GET', fk])) || 0;
    if (fails >= 5) return send(res, 429, { ok: false, error: 'Too many wrong tries. Try again in 5 minutes.' });
    const b = await readBody(req);
    const password = String(b.password == null ? '' : b.password).trim().slice(0, 200);
    const store = password ? pinStore(password, String(b.store || '').slice(0, 60)) : null;
    if (!store) {
      const n = await redis(['INCR', fk]);
      if (n === 1) await redis(['EXPIRE', fk, 300]);
      return send(res, 401, { ok: false, error: 'Wrong store or password.' });
    }
    await redis(['DEL', fk]);
    return send(res, 200, { ok: true, store, token: makeToken(store) });
  } catch (e) {
    return send(res, e.status || 502, { ok: false, error: 'Could not sign in. Try again.' });
  }
};
