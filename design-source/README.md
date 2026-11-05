# Design source (reference only, do not edit)

`KS_LAUNCH_PILOT.zip` is the original Claude Design export, unchanged
(SHA-256 `e9fab8030f893a8bbbfd9b27e865f9710016334b21c090d8e9f51685c87a84cf`).
`claude-design-export/` is the same archive extracted as-is, for browsing.

These files are the visual and content source of truth for the production site in `src/`.
They are not part of the build.

| Files | Status |
|---|---|
| `Launchpilot Home`, `Services`, `Work`, `About`, `Case Study`, `Contact` (`.dc.html`) | **Approved** Group A pages, implemented in `src/pages/` |
| `Launchpilot Home v1 (portfolio-first).dc.html` | Alternative homepage, reference only |
| `KS Home`, `KS Services`, `KS Work`, `KS Studio`, `KS Contact` | Group B, earlier version, excluded from production |
| `Home`, `Kenny`, `Shrey`, `Road` | Group C, Balance and Baggage (different brand), excluded from production |
| `support.js`, `image-slot.js` | Claude Design runtime, not used by the production site |

The `.dc.html` pages only render inside the Claude Design runtime (React and Babel loaded from unpkg.com).
