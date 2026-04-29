# Champion Digital Media — Design System

> **Still at speed.** The calm of quiet contemplation at 35,000 feet while moving at 500mph.
> **For brands that move.**

Champion Digital is a creative marketing studio with a handmade sensibility and an editorial voice. The work is digital; the sensibility is handmade. The brand runs on a paradox — composed energy, refined structure with an organic surface, machine speed with a thumbprint. The studio embraces every tool available, including AI and automation, but never surrenders craft, intentionality, or the mark of the human hand.

This design system is the source of truth for every design and code decision at Champion Digital. It is **alive** — a starting point, not a cage. Add to it; refine it.

---

## Sources

- **Master spec:** `uploads/champion-digital-design-system-260428a.md` (v1.2) — the canonical written guide. Treat it as ultimate authority over anything in this README.
- **Figma file:** "CDM - Design System.fig" — mounted as VFS, page `/Brand-Guidelines` with five frames: Logo-Variations, Typography, Color-Palette, Headlines, Asset-Library.
- **Logo SVGs:** `uploads/CHAMPION LOGO SVG VERSIONS.txt` — five lockups in dark + pale variants.
- **Fonts (real files):** `uploads/AzeretMono-VariableFont_wght.ttf`, `uploads/AzeretMono-Italic-VariableFont_wght.ttf` (copied to `/fonts/`).
- **Live site:** championdigitalmedia.com — vanilla HTML/CSS/JS, 1440px design canvas with JS transform-scaling.

---

## Content fundamentals

**Voice in one line.** Composed, not cold. Specific, not clever. Confident, not loud. Human, not hand‑wavy.

**Cadence.** Short. Then longer. Then short again. The rhythm should feel like breath, not a drumbeat. No exclamation points. No emoji. Em‑dashes and periods do most of the work.

**Pronouns.** "We" for the studio, "you" for the reader/client. First person plural is collective and quiet, not boastful.

**Casing.**
- Display & headlines → ALL CAPS by default.
- UI labels, eyebrows, navigation, button text → ALL CAPS, tracked ≥ 0.08em.
- Long‑form body → sentence case. Long‑form ALL CAPS body is forbidden — unreadable.
- Microcopy and conversational CTAs → sentence case or lowercase ("let's talk", "see the work").

**Verb diet.** Crafted, shaped, written, drawn, directed, made. Never *built by machine*, *AI‑generated*, *AI‑powered* (as a lead claim), *automated creativity*, *let the algorithm decide*. AI is one of many tools — the decisions stay ours.

**Examples.**
- Display: `STILL AT (SPEED).` · `FOR BRANDS THAT (MOVE).` · `WE WORK IN THE QUIET BEFORE THE LAUNCH.`
- Body: "We use every tool we have. The decisions stay ours."
- Micro / CTA: `let's talk` · `see the work` · `get in touch`
- Eyebrow: `CASE STUDY 03 / 12` · `WORK · 2024`

**Three‑question filter, before shipping.**
1. Does it feel **still at speed**?
2. Does it show the **human hand** somewhere?
3. Would a calmer version be stronger?

---

## Visual foundations

**Color.** Pale `#F7F3E9` is the default narrative ground — warm, the air the brand breathes. Anchor `#141414` is gravity (type, lines, dark sections). Yellow `#FF9900` is the loudest color — **one focal moment per section, never more**. Highlight `#F9AC24` is a quieter warm accent. White `#FFFFFF` is reserved (logo on photo, dense UI, clinical print) — never a default. Pure black `#000` is forbidden as type. Blues `#062D51 → #0BAED3` exist as a secondary cool family for data viz, photo overlays, atmospheric sections. Usage ratio in warm contexts: pale 60–70 / anchor 20–25 / yellow 5–10 / highlight 1–5.

**Type.** Display: PODIUM Sharp Italic, ALL CAPS, 0–0.01em tracking, line‑height 0.95–1.1. Body & UI: Azeret Mono, three weights (regular / semibold / bold), in two cases — ALL CAPS for labels (tracking 0.08em, line-height 1.3–1.5) and sentence case for paragraphs (line-height 1.5–1.6). Roman (non-italic) PODIUM is held in reserve.

**The signature gesture.** A PODIUM Sharp Italic headline in ALL CAPS, with one or two words bolded and circled by a hand‑drawn yellow oval. Examples: `FOR BRANDS THAT (MOVE)` · `STILL AT (SPEED)`. One per headline, two per page max. The oval is loose, hand‑drawn (not a perfect ellipse), extends generously beyond the word, drawn in one breath.

**Backgrounds.** Pale surfaces dominate, often dressed with subtle photographic texture (paper grain, ink wash, scan, photocopy) at multiply blend mode and 0.1–0.25 opacity — never tiled visibly, never procedural noise. Dark `#141414` sections punctuate as breath between major scrolls; they host quotes, manifesto copy, weight before a CTA. Photography lives in a warm‑cool duotone zone (amber + blue), atmospheric, cinematic, with generous negative space.

**Hand‑drawn elements.** Brush strokes, ovals, arrows, squiggles. Used **sparingly, never as a protagonist** — they support the message, never carry it. Yellow by default; dark only when seriousness is the point. Stretch‑to‑fit strokes (underlines) require `preserveAspectRatio="none"` (or background‑size:100% 100%) — non‑negotiable, recurring trap. One major hand‑drawn gesture per section.

**Animation.** Motion mirrors the brand: confident, measured, never bouncy. Default ease: `cubic-bezier(0.2, 0.8, 0.2, 1)`. Durations: fast 150ms, medium 400ms, slow 800ms. Scroll-driven reveals are fade + 20px rise, children stagger 60–80ms. **No spring/bounce. No parallax.** No infinite loops in the frame. No autoplaying audio.

**Hover states.** Buttons: subtle scale to 1.02 + color shift. Images: brief `translateY(-4px)` + small shadow lift. Text links: underline fade-in (or opacity 0.65) — never color change alone. All hover transitions ≤ 300ms.

**Press states.** Subtle inverse — scale to 0.98, no color flash.

**Borders.** Hairlines `rgba(20,20,20,0.12)` on pale; `rgba(247,243,233,0.15)` on dark. Form fields are underline-only, not boxed; underline shifts to yellow on focus.

**Shadows.** Almost none. The brand is composed; drop shadows on type are forbidden. The only common shadow is a small translateY+blur on image hover. Inner shadows are not part of the system.

**Protection / capsules.** Type-on-image uses the `::before` overlay approach — `rgba(20,20,20,0.4)` filling the parent, content elevated to z-index 2 — so darkening the image doesn't darken the text. Capsule pills are reserved for tags / chips, not for body text.

**Layout.** 1440px fixed design canvas, 12-column grid, 80px margins, 24px gutters, 1280px content width. Section spacing 128–192px, occasional 256px breaks. The CTA button straddles section boundaries via negative margins + z-index:10 — a brand-recognizable pattern.

**Transparency & blur.** Used rarely. Photo overlays use solid rgba black at 0.4. Backdrop-filter blur is not part of the system — the brand wants surface, not glass.

**Imagery vibe.** Warm-cool dusk grading. Amber highlights, blue shadows. Slight haze, depth of field, blur as deliberate choice. Cinematic aspect ratios, generous negative space. Three subject lanes: vehicles in motion, figures in transit, atmospheric stillness — pick whichever earns it; the brand isn't *about* aviation, the imagery serves the feeling.

**Corner radii.** The brand barely curves. Default radius is 0–4px. The exception is the `pill` (999px) for tags. Cards have hairline borders, not rounded shadows.

**Card pattern.** Pale surface, optional 1px hairline, no shadow, no rounded corners (or 2–4px max). Image-on-top, eyebrow, then headline, then short body. The card itself is composed; the photo and the words do the work.

---

## Iconography

**The brand is not icon-driven.** There is no built-in icon font, no Material/Lucide install, no emoji in the system. The visual vocabulary is **typography + photography + hand-drawn marks** — brush strokes, ovals, arrows, squiggles. Where most brands reach for an icon, Champion Digital reaches for a verb in PODIUM Italic, a brushstroke, or a hand-drawn arrow.

**What we ship locally:**
- **Logos** — `assets/logos/` — five inline-SVG variants from the canonical SVG file. Use `cdm-symbol.svg` for the standalone bug; `cdm-symbol-champion.svg` for the icon + CHAMPION wordmark; the full lockup is composed from `Vector.svg` (icon) + `champion-wordmark.svg` + `digital-media-wordmark.svg`.
- **Brush strokes / ovals** — `assets/brushes/` — extracted from the Figma "Headlines" and "Asset Library" frames. `oval-speed.svg` and `oval-move.svg` are the signature circle‑a‑word strokes. `brush-01..07.svg` are general-purpose underlines, smears, and arrow strokes for emphasis. **All require `preserveAspectRatio="none"` (or CSS `background-size:100% 100%`) when stretched.**
- **Fonts** — `fonts/AzeretMono-*.ttf` — variable, real files.

**Where we substitute (CDN, with disclosure):**
- We have not been given an icon set, and the system explicitly does not lean on icons. If a UI absolutely needs a UI icon (close-X, hamburger, arrow on a CTA), draw it inline in SVG with `currentColor` and a stroke weight of ~1.5–2px, OR pull a single icon from **Lucide** (`https://unpkg.com/lucide-static@latest/icons/`) at 1.5px stroke. **Flag any icon use to the brand team — the brand defaults to no icon.**
- Carousel arrows on the live site exist as base64-encoded SVGs. Don't regenerate or re-encode; either reuse the existing strings or write them as fresh inline `<svg>` markup with `currentColor`.

**Forbidden in iconography.**
- ❌ Emoji, anywhere in product UI or marketing copy.
- ❌ Stock icon packs that visibly read as Material Design / iOS SF / Bootstrap.
- ❌ Multicolor icons. The icon, if it exists, is mono and inherits `currentColor`.
- ❌ Icons inside the signature circled-word gesture — the gesture is words, not symbols.

---

## Font substitution disclosure

**PODIUM Sharp Italic** is a paid display face from Pangram Pangram Foundry. We do not have web font files for it. The system currently substitutes **Big Shoulders Display Italic** (Google Fonts) with Antonio Italic as fallback — the closest free condensed editorial italic. **This is not a perfect match** and rendering of the signature headline will look *related* but not *right* until the licensed PODIUM Sharp web font is added. Drop the licensed `.woff2` files into `/fonts/` and update the `@font-face` rule in `colors_and_type.css`.

**Azeret Mono** is shipping with the real variable font files — no substitution.

---

## Index

- **`README.md`** — this file. Always read first.
- **`SKILL.md`** — Agent Skill manifest, makes this folder portable as a Claude Code skill.
- **`colors_and_type.css`** — token CSS (vars + semantic element styles). Import this in every artifact.
- **`fonts/`** — Azeret Mono variable .ttf files (real).
- **`assets/logos/`** — five logo SVGs from the Figma file (icon, icon+wordmark, full lockup parts).
- **`assets/brushes/`** — hand-drawn ovals and brush strokes extracted from Figma.
- **`preview/`** — small HTML cards that populate the Design System tab. Each one is a standalone fragment showing one sub-concept (a swatch, a type specimen, a state cluster).
- **`ui_kits/website/`** — high-fidelity recreation of the championdigitalmedia.com marketing site, broken into reusable components. `index.html` is the click-thru.

---

## Caveats & open questions

- **PODIUM Sharp** is substituted (see above).
- **Photography** — none was provided. Where a real photo would go, the kit ships pale placeholder blocks with a duotone gradient hint. **Real photography needs to be supplied** before any production page ships.
- **The carousel arrows / contact button base64 SVGs** from the live site weren't included. The kit's contact button uses a fresh inline-SVG hand-drawn oval; visually correct, but the live‑site asset will swap in cleanly.
- **The Figma "Asset Library"** contains far more brush strokes (~80 items, ~75 vector marks, plus 194 sub-vectors in one node and 80 generic Items) than the seven we extracted. Adding more is a fast follow when specific shapes are needed.
- **Photographic textures** (paper grain, ink wash, blue tape, scan artifacts) are referenced in the spec and the Figma "Textures" frame but were not extracted as image files; they need to be supplied as PNG/JPG and dropped into `assets/textures/`.
