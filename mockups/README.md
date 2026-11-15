# Illustrative website visuals

The launch edition of the site does not name clients or show their real websites. Instead, the Work page,
the homepage and the case study show illustrative designs for each type of project. Those images are made here.

- `sites/` holds one small HTML page per design (resort, wellness studio, real estate agency, retreat centre
  with a phone view, a solar company, an advisory firm, and three views of a jobs and services directory),
  plus the share image (`og-image.html`).
- `photos/` holds the photographs used inside them. They are AI-generated, so there are no licences to track
  and no real places or people in them.
- `render.cjs` opens each page in headless Chromium and saves a JPEG into `../src/assets/images/`.

All brand names in these designs are fictional. Do not present them as real clients.

## Re-rendering

```bash
cd mockups
npm install
npm run render
```

Render one image by passing part of its file name, for example `node render.cjs retreat`.
Needs Playwright with Chromium available to Node. To change a photo, replace the file in `photos/`
(keep the same name) and render again.
