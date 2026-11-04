# "See it on your bracelet" (`/b3d.js`)

`src3d/b3d.js` makes the still picture opened from **Your list → See it on your bracelet**. It has no dependencies and loads only when a customer opens it.

Rebuild after editing:

```
bun build src3d/b3d.js --minify --format esm --outfile b3d.js
```

Then bump `?v=` on the `import("/b3d.js?v=N")` line in `index.html`.

- It uses the real bracelet photo (`_1`) with the white background removed, finds the chain's oval and the clasp, and places each charm's real photo on the front of the chain. The charms go either side of the clasp, and dangles hang from their loop.
- If the list has charms but no bracelet, a catalogue snake chain in the charms' metal is used and offered as "+ Add to my list".
- Other pieces (rings, earrings, necklaces) are shown as their own photos. Swipe or tap the dots to see each photo angle; on-model photos are skipped.
- Save picture exports a transparent PNG.
- `/api/img` is a fallback for reading photos if Shopify's CDN blocks the browser from reading them.
