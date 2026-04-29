---
name: champion-digital-design
description: Use this skill to generate well-branded interfaces and assets for Champion Digital Media — a creative marketing studio with a handmade sensibility and an editorial voice ("still at speed" · "for brands that move"). Contains essential design guidelines, colors, type, fonts, logos, hand-drawn brush assets, and a website UI kit for prototyping or production work.
user-invocable: true
---

Read the `README.md` file within this skill before anything else — it carries the brand foundation, content fundamentals, visual foundations, and iconography rules. Then explore:

- `colors_and_type.css` — drop-in CSS variables and semantic element styles.
- `fonts/` — real Azeret Mono variable files. **PODIUM Sharp is substituted** with Big Shoulders Display Italic; flag this if it matters.
- `assets/logos/` — five logo SVG variants.
- `assets/brushes/` — hand-drawn oval and brush-stroke SVGs. Stretch-to-fit strokes need `preserveAspectRatio="none"`.
- `preview/` — small HTML cards demonstrating each sub-concept.
- `ui_kits/website/` — modular React/JSX components that recreate championdigitalmedia.com. Lift these for hi-fi mocks.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out of this skill and produce static HTML files for the user to view. If working on production code, read the rules here, copy assets, and act as an expert designer. The brand is alive — add new brushes, textures, photography as the work demands. Spirit over letter: still at speed, handmade-meets-machine, composed energy.

If invoked without other guidance, ask the user what they want to build, ask focused questions (audience, surface, copy direction, whether the signature circled-word gesture is in play), and act as an expert designer outputting HTML artifacts or production code as needed.

**Hard rules that override everything:**
- Yellow `#FF9900` — one focal element per section, never more.
- Hand-drawn elements — sparingly, never as a protagonist.
- ALL CAPS body copy is forbidden.
- Pure black `#000` as type is forbidden — use `#141414` or `#2A2A2A`.
- Never write "built by machine" / "AI-generated" / "AI-powered" / "automated creativity". Preferred verbs: crafted, shaped, written, drawn, directed, made.
