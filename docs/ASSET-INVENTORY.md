# Image asset inventory

The Claude Design export contains image placeholders only, with no image files. Every placeholder is listed
below by its original slot ID. Until a real image is supplied, each slot renders as a neutral block at the
correct size, so layouts stay intact.

**How to add an image:** put the file in `src/assets/images/`, then set `file` and `alt` for that ID in
`src/data/images.ts`. The build creates responsive WebP versions automatically and fails if `alt` is missing.

**Do not use** random stock photography or generated or mock-up client screenshots. Use real photos and real
screenshots of the delivered projects only.

| # | Slot ID | Description (from the design) | Page and location | Aspect ratio | Recommended source size | Essential for launch |
|---|---|---|---|---|---|---|
| 1 | `lp-w-baanpufa` | Baan Pufa Resort, homepage screenshot | Home: Selected experience (16:10 crop); Work: grid (4:3 crop) | 4:3 (also 16:10) | 1600 × 1200, key content centred | Yes |
| 2 | `lp-w-zenida` | Zenida Wellbeing, homepage screenshot | Home: Selected experience; Work: grid | 4:3 (also 16:10) | 1600 × 1200 | Yes |
| 3 | `lp-w-ffjn` | Felon Friendly Jobs Now, directory / homepage screenshot | Home: Selected experience; Work: grid | 4:3 (also 16:10) | 1600 × 1200 | Yes |
| 4 | `lp-w-carmine` | Carmine Realty, homepage screenshot | Work: grid | 4:3 | 1600 × 1200 | Yes |
| 5 | `lp-w-harihara` | Hariharalaya, homepage screenshot | Work: grid | 4:3 | 1600 × 1200 | Yes |
| 6 | `lp-w-montecielo` | Monte Cielo, homepage screenshot | Work: grid | 4:3 | 1600 × 1200 | Yes |
| 7 | `lp-w-vista` | Vista Montego Bay, homepage screenshot | Work: grid | 4:3 | 1600 × 1200 | Yes |
| 8 | `lp-w-retreatguru` | Retreat Guru, homepage screenshot | Work: grid | 4:3 | 1600 × 1200 | Yes |
| 9 | `lp-w-adrenalynx` | Adrenalynx, homepage screenshot | Work: grid | 4:3 | 1600 × 1200 | Yes |
| 10 | `lp-cs-main` | Full-width desktop screenshot: homepage (Felon Friendly Jobs Now) | Case study: top visual, in browser frame | 3:2 (see note) | 2400 × 1600 | Yes |
| 11 | `lp-cs-2` | Search results with category filters (Felon Friendly Jobs Now) | Case study: second row, wide | 16:10 | 1600 × 1000 | Yes |
| 12 | `lp-cs-3` | Listing page, mobile (Felon Friendly Jobs Now) | Case study: second row, narrow | 9:16 | 750 × 1334 (phone screenshot) | Yes |
| 13 | `lp-about-shrey` | Shrey, professional headshot, natural light | About: Founders | 4:5 | 1040 × 1300 | Yes |
| 14 | `lp-about-kenny` | Kenny, professional headshot, natural light | About: Founders | 4:5 | 1040 × 1300 | Yes |
| 15 | `lp-shrey` | Shrey headshot | Home: The studio (88 px thumbnail) | 1:1 | 400 × 400 (may reuse the About photo) | No |
| 16 | `lp-kenny` | Kenny headshot | Home: The studio (88 px thumbnail) | 1:1 | 400 × 400 (may reuse the About photo) | No |

**Notes**
- Project screenshots 1–3 appear twice: at 4:3 on Work and at 16:10 on Home. Supply 4:3 with the important
  content centred, so the 16:10 crop on Home still reads well.
- `lp-cs-main` is coded as 16:8 in the design file, but Claude Design rendered it at 3:2. The site matches the
  rendered (approved) look.
- The Open Graph share image (`public/og-image.png`) and the favicons are built from the design's own
  "KS" logo mark and homepage headline. Replace them if you have official brand files.
