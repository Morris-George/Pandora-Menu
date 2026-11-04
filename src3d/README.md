# 360° view (`/b3d.js`)

`src3d/b3d.js` is the source of the 360° bracelet view opened from **Your list → View in 360°**.
It is bundled with three.js into the minified `/b3d.js`, which the menu loads only when a customer opens the view.

Rebuild after editing (three.js r187, Bun):

```
bun build src3d/b3d.js --minify --format esm --outfile b3d.js
```

- Each charm becomes a 3D solid made from its own product photo: background removed, rounded thickness, photo on both faces.
- Charms are threaded on the customer's bracelet from the list. If there is none, a snake chain from the catalogue in the charms' metal is used and offered as "+ Add to my list".
- Clips sit on the two threads, dangles swing, and the clasp opens and closes (barrel, heart or bangle ball).
- Photos come straight from Shopify's CDN. `/api/img` is a fallback for when the browser can't read them directly.
