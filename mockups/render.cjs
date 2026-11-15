/**
 * Renders the illustrative website visuals used by the launch edition.
 * Each entry opens a page from sites/ in headless Chromium and saves a JPEG into ../src/assets/images/.
 * Usage: npm install && npm run render   (run from this folder)
 */
const path = require('path');
const { pathToFileURL } = require('url');
const { chromium } = require('playwright');

const OUT = path.join(__dirname, '..', 'src', 'assets', 'images');

/** file: output name. page: source in sites/. w/h: CSS viewport. scale: device pixel ratio (output = w*scale by h*scale). */
const SHOTS = [
  { file: 'launch-resort.jpg', page: 'resort.html', w: 1440, h: 1080, scale: 1600 / 1440 },
  { file: 'launch-wellness.jpg', page: 'wellness.html', w: 1440, h: 1080, scale: 1600 / 1440 },
  { file: 'launch-realty.jpg', page: 'realty.html', w: 1440, h: 1080, scale: 1600 / 1440 },
  { file: 'launch-retreat.jpg', page: 'retreat.html', w: 1440, h: 1080, scale: 1600 / 1440 },
  { file: 'launch-directory.jpg', page: 'directory-home.html', w: 1440, h: 1080, scale: 1600 / 1440 },
  { file: 'launch-cs-main.jpg', page: 'directory-home.html', w: 1440, h: 960, scale: 2400 / 1440 },
  { file: 'launch-cs-search.jpg', page: 'directory-search.html', w: 1440, h: 1230, scale: 1600 / 1440 },
  { file: 'launch-cs-mobile.jpg', page: 'directory-listing-mobile.html', w: 375, h: 667, scale: 2 },
];

(async () => {
  const only = process.argv.slice(2);
  const browser = await chromium.launch();
  for (const shot of SHOTS) {
    if (only.length && !only.some((o) => shot.file.includes(o))) continue;
    const context = await browser.newContext({
      viewport: { width: shot.w, height: shot.h },
      deviceScaleFactor: shot.scale,
    });
    const page = await context.newPage();
    const failed = [];
    page.on('requestfailed', (r) => failed.push(r.url()));
    await page.goto(pathToFileURL(path.join(__dirname, 'sites', shot.page)).href, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    const broken = await page.evaluate(() =>
      [...document.images].filter((i) => !i.complete || i.naturalWidth === 0).map((i) => i.getAttribute('src')),
    );
    if (failed.length || broken.length) {
      throw new Error(`${shot.page}: missing files ${JSON.stringify([...failed, ...broken])}`);
    }
    await page.screenshot({ path: path.join(OUT, shot.file), type: 'jpeg', quality: 86 });
    await context.close();
    console.log('rendered', shot.file);
  }
  await browser.close();
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
