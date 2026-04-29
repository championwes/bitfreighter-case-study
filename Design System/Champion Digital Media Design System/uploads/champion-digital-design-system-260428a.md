# Champion Digital — Design System

**Version 1.2** · Source of truth for every design and code decision at Champion Digital.
When building a new asset, paste this file into the chat before anything else.

> **This is a starting point, not a cage.** The brand is alive. New brush strokes, textures, photography, and patterns can — and should — be added as the work evolves. The principles in this document are durable; the asset library is meant to grow. When in doubt, follow the spirit (still at speed, handmade-meets-machine, composed energy) over the letter.

---

## Table of contents

1. [Brand foundation](#1-brand-foundation)
2. [Voice & tone](#2-voice--tone)
3. [Logo](#3-logo)
4. [Typography system](#4-typography-system) ★ deep
5. [Color system](#5-color-system) ★ deep
6. [Texture, grain & hand-drawn elements](#6-texture-grain--hand-drawn-elements) ★ deep
7. [Imagery & photography](#7-imagery--photography)
8. [Layout & grid](#8-layout--grid)
9. [Components](#9-components)
10. [Motion & interaction](#10-motion--interaction)
11. [Applications](#11-applications)

Sections marked ★ are anchor sections. The remaining sections carry enough detail to work from and will deepen as the brand matures.

---

## 1. Brand foundation

### 1.1 Positioning

Champion Digital is a creative marketing studio. The work is digital, but the sensibility is handmade. The brand runs on a paradox:

> **Still at speed.** The calm of quiet contemplation at 35,000 feet while moving at 500mph.

A second mantra sits alongside it:

> **For brands that move.**

The studio embraces every tool available, including AI and automation, but never surrenders craft, intentionality, or the mark of the human hand.

### 1.2 Core tensions (the brand lives in these)

| Tension | The brand's answer |
|---|---|
| Fast vs. considered | **Patient in a fast machine.** |
| Instant vs. deliberate | **Deliberate in an instant medium.** |
| Machine vs. handmade | Use every tool; leave a thumbprint. |
| Polish vs. texture | Refined structure, organic surface. |
| Loud vs. composed | Confidence without volume. |

### 1.3 What the brand is not

- Not a tech-bro AI shop. The brand does not lead with "powered by AI."
- Not minimalist-for-its-own-sake. Minimalism here is *composure*, not emptiness.
- Not a "built by machine" brand. That phrase — and adjacent phrasing — is forbidden in copy (see §2.4).

### 1.4 On the jet/vehicle imagery

Vehicles in motion (jets, trucks, ships, transit) are **one valid visual lane** within the brand. They literalize the *still at speed* idea and they appear in the asset library on purpose. But the brand is not *about* aviation or transportation. The imagery is in service of a feeling — motion held inside composure — not the subject itself. Use vehicles when they earn it. Use abstract motion, figures in transit, or atmospheric stillness when they earn it more.

### 1.5 Decision filter

Before shipping any asset, ask:

1. Does it feel **still at speed**?
2. Does it show the **human hand** somewhere — in texture, word choice, pacing, or gesture?
3. Would a calmer version be stronger?

---

## 2. Voice & tone

### 2.1 Principles

- **Composed, not cold.** The voice is warm but never chatty.
- **Specific, not clever.** Precision beats wordplay.
- **Confident, not loud.** Short sentences. No exclamation points.
- **Human, not hand-wavy.** Real verbs. Avoid hedging.

### 2.2 Registers

```
Display / headline    → Declarative. Often aphoristic. 3–8 words.
                        Default case: ALL CAPS.
                        Examples: "STILL AT SPEED." · "FOR BRANDS THAT MOVE."

Body / narrative      → Measured. Complete sentences. One idea per sentence.
                        Default case: sentence case.
                        Example: "We work at the pace of the medium without
                        moving at its pace."

Micro / UI / CTA      → Quiet verbs. 1–3 words.
                        Default case: sentence case or lowercase.
                        Example: "let's talk" · "see the work"
```

### 2.3 Cadence

Short. Then longer. Then short again. The rhythm should feel like breath, not a drumbeat.

### 2.4 Forbidden phrasing

Avoid anything that implies the work is automatic, generated, or produced without human intention:

- ❌ "built by machine"
- ❌ "AI-generated" / "AI-powered" (as a lead claim)
- ❌ "automated creativity"
- ❌ "let the algorithm decide"

Preferred verbs: *crafted, shaped, written, drawn, directed, made.*

### 2.5 Examples

| Not this | This |
|---|---|
| "We leverage cutting-edge AI to deliver results." | "We use every tool we have. The decisions stay ours." |
| "Amazing creative work for ambitious brands!" | "FOR BRANDS THAT MOVE." |
| "Let's jump on a call!" | "let's talk" |

---

## 3. Logo

### 3.1 Marks in the system

Three marks are currently in rotation:

1. **CHAMPION wordmark** — italic, all caps, paired with the icon to the left. Use as the primary lockup when only "Champion" identification is needed.
2. **CHAMPION DIGITAL MEDIA lockup** — full studio name with the icon. Use as the formal signature: footers, contracts, business cards, full-page brand introductions.
3. **Icon mark** — the chrome-finished, stylized "C" / shield. Use as a standalone bug for avatars, favicons, watermarks, and small-format applications where a wordmark won't read.

### 3.2 Color treatments

| Background | Mark color | Notes |
|---|---|---|
| Pale `#F7F3E9` | Anchor `#141414` | Default. |
| Anchor `#141414` | Pale `#F7F3E9` or white `#FFFFFF` | Inverted. |
| Yellow `#FF9900` | Anchor `#141414` | Use when the brand needs to lead with energy. |
| Photography | Pale `#F7F3E9` or white `#FFFFFF` | Place over the calmest part of the frame. |

### 3.3 Clear space & minimum size

- Clear space around any mark: at least the height of the icon on all sides.
- Minimum size for the icon mark: 24px wide on screen, 12mm in print.
- Minimum size for the wordmark: 80px wide on screen, 25mm in print.

### 3.4 Don't

- ❌ Don't recolor outside the approved palette.
- ❌ Don't rotate, skew, or distort the marks.
- ❌ Don't apply drop shadows or glows.
- ❌ Don't place the icon mark over busy areas of photography — find the calm.

---

## 4. Typography system ★

### 4.1 Type stack

```css
/* Display — PODIUM Sharp (italic by default) */
--font-display: "podium-sharp-variable", "PODIUM Sharp", serif;

/* Body & UI — Azeret Mono */
--font-body: "Azeret Mono", "JetBrains Mono", ui-monospace, monospace;
```

**Why this pairing.** PODIUM Sharp Italic is the brand voice at full volume — editorial, sharp, leaning forward (the italic itself is motion held in type). Azeret Mono is the studio's working surface — the monospaced grid where ideas are drafted and code is written. Together they say: *sharp thinking, carefully built.*

### 4.2 PODIUM Sharp — display use

PODIUM Sharp is used **in italic by default** for display and headline copy. Two weights are in active rotation:

| Style | Use |
|---|---|
| **PODIUM Sharp Italic Regular** | Default headline weight. Most display copy. |
| **PODIUM Sharp Italic Bold** | Emphasis within a headline (one or two words per phrase). |

Roman (non-italic) PODIUM is held in reserve — not currently part of the active system.

### 4.3 Azeret Mono — body & UI

Azeret Mono runs in three weights, in two cases:

| Style | Case | Use |
|---|---|---|
| **Regular** | ALL CAPS | Labels, eyebrow text above sections, metadata. |
| **Semibold** | ALL CAPS | UI labels with emphasis, button text, navigation. |
| **Bold** | ALL CAPS | Strong UI emphasis. Use sparingly. |
| **Regular** | sentence case ("as typed") | Long-form body copy, paragraphs. |
| **Semibold** | sentence case | Inline emphasis within body. |
| **Bold** | sentence case | Strong emphasis within body. Rare. |

### 4.4 Case rules

- **Display (PODIUM)** → ALL CAPS by default. Long editorial pull-quotes can drop to sentence case when the line is over ~10 words and caps would feel shouty.
- **Headlines (Azeret semibold/bold)** → ALL CAPS by default.
- **UI labels, eyebrows, navigation** → ALL CAPS, with tracking ≥ 0.08em.
- **Long-form body copy** → sentence case. ALL CAPS body text is hostile to read.
- **Microcopy and conversational CTAs** → sentence case or lowercase ("let's talk").

### 4.5 The typographic scale

Based on a 1.25 ratio.

| Token | Size | Line-height | Use |
|---|---|---|---|
| `--type-display-xl` | 144px / 9rem | 0.95 | Hero only. One per page. |
| `--type-display-lg` | 96px / 6rem | 1.0 | Section openers. |
| `--type-display-md` | 72px / 4.5rem | 1.05 | Large headlines. |
| `--type-display-sm` | 56px / 3.5rem | 1.1 | Secondary headlines. |
| `--type-heading-lg` | 40px / 2.5rem | 1.15 | Page headings. |
| `--type-heading-md` | 32px / 2rem | 1.2 | Sub-headings. |
| `--type-heading-sm` | 24px / 1.5rem | 1.3 | Card titles, labels at scale. |
| `--type-body-lg` | 20px / 1.25rem | 1.5 | Lead paragraphs. |
| `--type-body-md` | 16px / 1rem | 1.6 | Default body. |
| `--type-body-sm` | 14px / 0.875rem | 1.55 | Secondary body, captions. |
| `--type-micro` | 12px / 0.75rem | 1.5 | UI labels, footnotes. |
| `--type-nano` | 10px / 0.625rem | 1.5 | Legal, metadata only. |

```css
:root {
  --type-display-xl: 9rem;
  --type-display-lg: 6rem;
  --type-display-md: 4.5rem;
  --type-display-sm: 3.5rem;
  --type-heading-lg: 2.5rem;
  --type-heading-md: 2rem;
  --type-heading-sm: 1.5rem;
  --type-body-lg: 1.25rem;
  --type-body-md: 1rem;
  --type-body-sm: 0.875rem;
  --type-micro: 0.75rem;
  --type-nano: 0.625rem;
}
```

### 4.6 The signature headline treatment

The brand's most recognizable typographic gesture: **a PODIUM Sharp Italic headline in ALL CAPS, with one or two words emphasized via bold weight AND a hand-drawn oval drawn around them in yellow/orange.**

```
FOR BRANDS THAT (MOVE)        ← MOVE is bold + circled
STILL AT (SPEED)              ← SPEED is bold + circled
```

Rules for the gesture:
- One circled phrase per headline. Two on a single page maximum.
- The circled word(s) carry the bold weight. The rest stays regular.
- The oval is hand-drawn (not a perfect ellipse), in `--color-yellow` or `--color-highlight`.
- The oval extends slightly beyond the word — generous, loose, never tight to the letterforms.
- The stroke is loose and energetic. It should look drawn in one breath.

This is the brand's "thumbprint" on type. Use it on hero moments, manifesto lines, and section openers — not on every headline.

### 4.7 Tracking (letter-spacing)

| Context | Tracking |
|---|---|
| PODIUM display ALL CAPS | `0` to `0.01em` |
| Azeret ALL CAPS labels | `0.08em` |
| Azeret sentence-case body | `0` (default) |
| Micro / nano | `0.04em` |

### 4.8 Line-height rules

- Display text (>48px): tight — 0.95 to 1.1.
- Body text: comfortable — 1.5 to 1.6.
- ALL CAPS labels: 1.3 to 1.5 — caps need slightly more breathing room than mixed case.

### 4.9 Do / don't

✅ Default to ALL CAPS for display and headlines.
✅ Use the circled-word treatment as a signature gesture.
✅ Let display text be big. Don't shrink it to be safe.
❌ Don't set body paragraphs in ALL CAPS — unreadable.
❌ Don't use drop shadows on type.
❌ Don't combine italic + bold + circle on more than one phrase per headline.
❌ Don't use roman (non-italic) PODIUM unless the system formally adds it later.

---

## 5. Color system ★

### 5.1 Primary palette

```css
:root {
  --color-dark:       #141414;  /* Anchor             */
  --color-white:      #FFFFFF;  /* Pure white         */
  --color-pale:       #F7F3E9;  /* Calm ground        */
  --color-highlight:  #F9AC24;  /* Accent / highlight */
  --color-yellow:     #FF9900;  /* Primary energy     */
}
```

### 5.2 Secondary palette (blues)

```css
:root {
  --color-blue-darkest: #062D51;
  --color-blue-dark:    #005686;
  --color-blue-mid:     #1F81A5;
  --color-blue-bright:  #0BAED3;
}
```

The blues are a secondary range used to expand the palette into cooler territory — useful for data visualization, photography overlays, video grading reference, and section backgrounds where the warm primary palette would feel too uniform. They share a tonal logic (dusk-to-day at altitude) and should generally be used as a family rather than individually.

### 5.3 Extensions (derived)

```css
:root {
  --color-pale-warm:  #EFE8D6;  /* Pale one step down */
  --color-ink:        #2A2A2A;  /* Softer dark for body text */
  --color-muted:      #7A7670;  /* Secondary text on pale */
  --color-line:       rgba(20, 20, 20, 0.12); /* Hairlines */
}
```

### 5.4 Roles (this is the actual system)

Hex values are not the system. **Roles** are.

| Role | Token | When it appears |
|---|---|---|
| **Primary energy** | `--color-yellow` #FF9900 | CTAs, hero accents, hand-drawn ovals around emphasized words. One focal element per section. |
| **Highlight** | `--color-highlight` #F9AC24 | Inline emphasis, hover states, secondary accents. Same family as yellow, slightly warmer. |
| **Calm ground** | `--color-pale` #F7F3E9 | The default warm background. The "air" the brand breathes in. |
| **White** | `--color-white` #FFFFFF | Logo applications on dark or photographic backgrounds; clinical UI surfaces; print. Use intentionally — pale is warmer for most narrative contexts. |
| **Anchor** | `--color-dark` #141414 | Type, hairlines, dark sections, the gravity of the page. |
| **Ink** | `--color-ink` #2A2A2A | Long-form body text. Softer than anchor. |
| **Muted** | `--color-muted` #7A7670 | Metadata, captions, disabled states. |
| **Cool range** | blues `#062D51` → `#0BAED3` | Data viz, photography tints, atmospheric sections. |

### 5.5 Pale vs. white

Both are in the system; they are not interchangeable.

- **Pale `#F7F3E9`** is the default narrative background — for marketing pages, manifesto layouts, brand-led communication. It carries warmth.
- **White `#FFFFFF`** is the right call for: logo applications over photography, dense UI / dashboard surfaces, print material where pale would muddy reproduction, and any context that should feel clinical or neutral rather than warm.

When in doubt, use pale. White is a deliberate choice, not a default.

### 5.6 Usage ratios (warm/primary contexts)

```
Calm ground (pale):    60–70 parts   → the background
Anchor (dark):         20–25 parts   → type, lines, dark sections
Yellow (primary):       5–10 parts   → focal points, CTAs, circles
Highlight:              1–5 parts    → inline emphasis
```

**The yellow rule.** Yellow is the loudest color in the system. Use it once, not everywhere. The hand-drawn oval around a word counts as the yellow moment for that section.

### 5.7 Forbidden combinations

- ❌ Yellow text on pale background (fails contrast: 2.1:1).
- ❌ Highlight #F9AC24 on yellow #FF9900 (too close — mud).
- ❌ Pure black (#000) as type. Use anchor #141414 or ink #2A2A2A.
- ❌ Gradients between yellow and highlight (reads as a printing error).
- ❌ Mixing the warm and cool palettes within a small area without intent. Yellow + bright blue side-by-side is loud — make sure it's a choice, not an accident.

### 5.8 Accessibility

| Pairing | Ratio | WCAG |
|---|---|---|
| Anchor on pale | 14.8:1 | AAA ✅ |
| Anchor on white | 17.4:1 | AAA ✅ |
| Ink on pale | 11.2:1 | AAA ✅ |
| Muted on pale | 4.6:1 | AA (body) |
| Pale on anchor | 14.8:1 | AAA ✅ |
| Yellow on anchor | 8.1:1 | AAA ✅ |
| Anchor on yellow | 8.1:1 | AAA ✅ |
| White on blue-darkest | 13.6:1 | AAA ✅ |

Never use yellow for body text on pale or white. Yellow is for surfaces, shapes, and hand-drawn elements only.

### 5.9 Dark sections

Dark sections (anchor background) act as a breath within the scroll. Use them to separate major page sections, host quotes or manifesto copy, and create visual weight before a CTA.

- Body type becomes pale or white.
- Yellow accents work, but lean on highlight `#F9AC24` for inline emphasis on dark.
- Hairlines: `rgba(247, 243, 233, 0.15)`.

---

## 6. Texture, grain & hand-drawn elements ★

### 6.1 Philosophy

Texture, brush strokes, and hand-drawn marks are the brand's thumbprint — how the brand admits there's a human behind the machine. They prove the work was *made.*

> **Use sparingly. Never as a protagonist.**
>
> These elements support the message; they don't carry it. A brush stroke under a word adds emphasis. A page full of brush strokes becomes a sticker pack.

> **Encoding rule.** SVGs in this system live as inline `<svg>` markup or as separate `.svg` files referenced by URL — **never as base64-encoded strings inside HTML or JS**. Base64 inflates file size, prevents CSS theming, and is unreadable. The existing codebase has some base64 holdovers; leave them where they work, but don't generate new ones.

### 6.2 The asset library is open

The library currently includes:
- Hand-drawn ovals (open, closed, layered)
- Underlines and highlights (single-stroke and scribbled)
- Arrows (hundreds — straight, curved, doubled-back, sketchy)
- Squiggles, swirls, callouts
- Photographic textures (paper grain, ink wash, photocopy, blue tape, scan artifacts)

**This library will grow.** When a project needs a new gesture — a different arrow, a new texture, a fresh stroke — make it, use it, and add it to the library. The system documents principles for *how* these elements behave, not a fixed inventory.

### 6.3 Treatments and where they live

| Treatment | Use it for | Don't use it for |
|---|---|---|
| **Photographic textures** (grain, paper, ink wash, scans) | Page backgrounds, large surfaces, video color grading reference, atmospheric overlays | Small UI elements, buttons, body type backgrounds |
| **Brush strokes** (underlines, highlights, dividers) | Section dividers, emphasis under display words | Body text, icons, decorative filler |
| **Hand-drawn ovals & circles** | Circling 1–2 emphasized words per page (the signature treatment) | More than one per major section |
| **Arrows** | Pointing between concepts, indicating flow, callout annotations | Functional UI navigation (use proper nav patterns) |
| **Squiggles & swirls** | Atmosphere in editorial/manifesto layouts, transitional accents | Anywhere that already has a brush stroke or oval |

### 6.4 Photographic textures

The texture library uses real photographic textures (paper, scans, ink, tape) rather than procedurally generated noise. They carry a specific quality — printed, photocopied, weathered — that procedural grain can't replicate.

```css
.surface-textured {
  background-color: var(--color-pale);
  background-image: url(<texture-asset.jpg>);
  background-size: cover;
  background-blend-mode: multiply;
  /* opacity overlay tuned per asset: 0.1 to 0.25 */
}
```

Rules:
- Multiply blend mode on pale surfaces.
- Overlay opacity is a judgment call per asset — high-contrast textures (blue tape, dark scans) need lower opacity than soft textures (paper grain).
- Never let a texture compete with type. If body copy gets harder to read, the texture is too loud.
- Lighter textures on pale, darker textures on anchor sections.

### 6.5 Color rules for hand-drawn elements

| Element | Color |
|---|---|
| Brush stroke / oval / underline (highlight) | `--color-yellow` #FF9900, opacity 0.85–1.0 |
| Brush stroke / oval (warm accent) | `--color-highlight` #F9AC24, opacity 1.0 |
| Brush stroke (divider on pale) | `--color-dark` #141414, opacity 0.6 |
| Hand-drawn shapes on dark surfaces | `--color-yellow` or `--color-pale` |
| Photographic textures | Multiply onto whatever surface is beneath |

Hand-drawn elements are almost always yellow or highlight. Dark hand-drawn marks read as serious; yellow ones read as energetic — and the brand defaults to energetic.

### 6.6 Scale rules

- **Photographic textures**: scale to cover, never tile visibly. Tiled textures read as web 1.0.
- **Brush strokes (stretch-to-fit underlines)**: `preserveAspectRatio="none"` on the SVG — without it, the stroke distorts unpredictably across widths. This is a recurring issue and not optional.
- **Hand-drawn shapes (ovals, arrows)**: scale proportionally. Distorting them reveals them as fake.

### 6.7 Opacity & blending

```css
/* Brush stroke under a word, on pale */
.brush-underline {
  mix-blend-mode: multiply;
  opacity: 0.9;
}

/* On dark backgrounds */
.surface-dark .brush-underline {
  mix-blend-mode: screen;
  opacity: 0.85;
}
```

### 6.8 The "never as a protagonist" test

Before placing any hand-drawn element, ask:
1. Is the message still legible without it?
2. Is there already another hand-drawn element in the same field of view?
3. Could one stronger gesture replace two weaker ones?

If the answer to #1 is no, the gesture is doing too much. If the answer to #2 is yes, remove one. If the answer to #3 is yes, do that.

### 6.9 Do / don't

✅ One major hand-drawn gesture per section.
✅ Yellow is the default color for these elements.
✅ Add new strokes, arrows, and textures to the library as projects need them.
✅ Photographic textures over generated noise.
❌ Don't fill empty space with arrows and squiggles. Empty space is doing work.
❌ Don't animate hand-drawn shapes as if they're being drawn in real time. The gesture is past tense.
❌ Don't use stock grunge textures from generic libraries.
❌ Don't let a brush stroke or texture upstage the words it's supporting.

---

## 7. Imagery & photography

### 7.1 Visual direction

Champion Digital photography lives in a specific zone:

- **Motion held in stillness.** Long-exposure feeling. Subjects move; the frame stays calm.
- **Warm-cool tonality.** Dusk light, blue shadows, amber highlights. Rarely fully neutral.
- **Atmospheric.** Slight haze, depth of field, blur as a deliberate choice.
- **Cinematic, not editorial.** Wide aspect ratios, generous negative space, color graded.

### 7.2 Subject lanes

Three lanes work for the brand. Mix them as the project demands.

| Lane | What it shows | Why it works |
|---|---|---|
| **Vehicles in motion** | Jets, trucks, ships, transit at speed | Literal "still at speed." Use when the brand needs to be on-the-nose. |
| **Figures in transit** | A person at an airport gate, a silhouette walking toward a runway, hands on a wheel | The human inside the machine. Use for warmth and identification. |
| **Atmospheric stillness** | Window seats, jet interiors, empty terminals, sky from altitude, blurred landscapes | The "calm at 35,000 feet." Use when the message is reflective. |

Vehicles are one valid lane — not the brand's identity. Don't default to jets when atmosphere or a figure would carry the message better.

### 7.3 Treatment rules

- Color graded toward warm-cool duotone feeling (amber + blue), not purely natural.
- Generous negative space — frames should breathe.
- Overlay opacity for type-on-image: `rgba(20, 20, 20, 0.4)` via `::before` (see §9.5).
- Photography is its own texture; don't add grain or brush strokes to a photograph.

### 7.4 What to avoid

- ❌ Stock photography that reads as stock (corporate handshakes, generic city skylines, lens-flare hero shots).
- ❌ Heavy filters or Instagram presets.
- ❌ Photography with hard saturated colors that fight the brand palette.
- ❌ AI-generated imagery presented as photography. If AI is used, it should look intentionally illustrative, not pretending to be a photo.

### 7.5 The library will grow

Current photography is a starting point. As the brand evolves, the library should expand into:
- Studio still life (objects, materials, hands working)
- Behind-the-scenes documentary
- Abstract motion (light trails, blurred forms)
- Whatever future projects demand

The visual *direction* (motion, stillness, warm-cool, cinematic) holds. The subject library grows.

---

## 8. Layout & grid

### 8.1 Canvas

Champion Digital's site uses a **1440px fixed-width design canvas** with a JS transform-scaling system to adapt to viewport width. All HTML is authored at 1440px.

```css
.canvas {
  width: 1440px;
  transform-origin: top center;
  transform: scale(var(--scale-factor));
}
```

### 8.2 Column grid

12-column grid, 80px margins, 24px gutters. 1280px content width.

### 8.3 Spacing scale

Based on an 8px base unit.

```css
:root {
  --space-1:  8px;
  --space-2:  16px;
  --space-3:  24px;
  --space-4:  32px;
  --space-5:  48px;
  --space-6:  64px;
  --space-7:  96px;
  --space-8:  128px;
  --space-9:  192px;
  --space-10: 256px;
}
```

### 8.4 Section rhythm

Vertical section spacing should feel like breath: generous, slightly irregular. Aim for 128–192px between major sections, with occasional 256px breaks for emphasis.

### 8.5 The straddling CTA pattern

The contact button CTA straddles section boundaries using negative margins with `z-index:10` — it appears to float between sections rather than sit inside one.

```css
.cta-straddle {
  margin-top: -40px;
  margin-bottom: -40px;
  position: relative;
  z-index: 10;
}
```

---

## 9. Components

### 9.1 Contact button

Primary CTA. Inline `<svg>` markup with a hand-drawn circle around "Let's talk" copy. Yellow fill on hover. States: default, hover, pressed, disabled. Subtle rotation on hover (max 2deg).

> **Note on encoding.** The existing site uses a base64-encoded version of this SVG. That's fine to keep where it lives, but new builds should use inline `<svg>` markup with raw paths — base64 inflates file size and is opaque to read or edit.

### 9.2 Contact modal

Triggered by any contact CTA. Pale background, anchor type, single-column form. Dismisses on Esc, backdrop click, or close icon. Form fields use Azeret Mono. Submit button inherits contact button styling.

### 9.3 Carousels

Horizontally scrolling content blocks. Arrow size: 48px hit target. Scroll snap enabled. Show 2.5 items on desktop as a visual cue.

**Arrow assets.** The existing site uses arrows stored as base64 strings, recolored by decoding → swapping fill → re-encoding. New builds should use inline `<svg>` markup with a `currentColor` fill (or a CSS variable on the path) so theme color shifts happen via CSS, not encoding gymnastics.

### 9.4 Buttons (general)

| Tier | Use |
|---|---|
| Primary (yellow fill) | One per section. The main action. |
| Secondary (anchor outline) | Alternative actions. |
| Tertiary (text + arrow) | Inline links, "read more" affordances. |

### 9.5 Interactive image sections

Use the `::before` overlay approach to darken images independently of text:

```css
.image-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(20, 20, 20, 0.4);
  z-index: 1;
}
.image-section > * {
  position: relative;
  z-index: 2;
}
```

### 9.6 Form fields

Underline style, not boxed. Azeret Mono ALL CAPS label, anchor-colored underline, focus state shifts underline to yellow.

---

## 10. Motion & interaction

### 10.1 Principle

Motion reflects the brand: **still at speed.** Movements are confident, measured, never bouncy. Default to ease-out curves and medium durations.

### 10.2 Timing

```css
:root {
  --ease-default: cubic-bezier(0.2, 0.8, 0.2, 1);
  --ease-enter:   cubic-bezier(0.16, 1, 0.3, 1);
  --ease-exit:    cubic-bezier(0.7, 0, 0.84, 0);

  --duration-fast:   150ms;
  --duration-medium: 400ms;
  --duration-slow:   800ms;
}
```

### 10.3 Scroll behavior

- Scroll-driven reveals for major sections (fade + 20px rise).
- Stagger children by 60–80ms for grouped reveals.
- No parallax by default — parallax fights the "stillness" feeling.

### 10.4 Hover states

- Buttons: subtle scale (max 1.02) + color shift.
- Images: brief lift `translateY(-4px)` + shadow increase.
- Text links: underline fade-in, never color change alone.

### 10.5 Don'ts

❌ No spring/bounce easing.
❌ No hover effects longer than 300ms.
❌ No auto-playing videos with sound.
❌ No infinite loops of motion anywhere in the frame.

---

## 11. Applications

### 11.1 Web

Primary canvas. 1440px fixed, textured pale background, full type system.

### 11.2 Social

Square (1080×1080) and vertical (1080×1350 / 1080×1920).
- Type scale reduced proportionally from display tokens.
- Textures stay on. Hand-drawn elements scale down but remain present.
- Yellow reserved for one element per post.
- Signature circled-word treatment works especially well in social.

### 11.3 Video

Covered by the "Still at Speed" manifesto direction.
- Sentence-case or ALL CAPS supers in PODIUM Italic, anchor or pale depending on footage.
- No drop shadows on supers — use a brief background plate if contrast fails.
- Cut on beats of breath, not beats of music.

### 11.4 Print

- PODIUM runs larger in print. Scale up display tokens by 1.25×.
- Photographic textures reproduce well at 300 DPI if rendered at 600 DPI source.
- Yellow: use Pantone 144 C or a calibrated spot for consistency.
- Use white over pale for contracts and clinical documents; pale for narrative print.

### 11.5 Documents & decks

- Default background: pale with subtle texture.
- Headings PODIUM Italic ALL CAPS, body Azeret Mono sentence case.
- One yellow element per slide. Never more.

---

## Appendix: Quick-reference token file

```css
:root {
  /* Fonts */
  --font-display: "podium-sharp-variable", serif;
  --font-body: "Azeret Mono", monospace;

  /* Primary colors */
  --color-dark: #141414;
  --color-white: #FFFFFF;
  --color-pale: #F7F3E9;
  --color-highlight: #F9AC24;
  --color-yellow: #FF9900;

  /* Secondary colors (blues) */
  --color-blue-darkest: #062D51;
  --color-blue-dark: #005686;
  --color-blue-mid: #1F81A5;
  --color-blue-bright: #0BAED3;

  /* Extensions */
  --color-ink: #2A2A2A;
  --color-muted: #7A7670;
  --color-pale-warm: #EFE8D6;
  --color-line: rgba(20, 20, 20, 0.12);

  /* Type scale */
  --type-display-xl: 9rem;
  --type-display-lg: 6rem;
  --type-display-md: 4.5rem;
  --type-display-sm: 3.5rem;
  --type-heading-lg: 2.5rem;
  --type-heading-md: 2rem;
  --type-heading-sm: 1.5rem;
  --type-body-lg: 1.25rem;
  --type-body-md: 1rem;
  --type-body-sm: 0.875rem;
  --type-micro: 0.75rem;
  --type-nano: 0.625rem;

  /* Spacing */
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-5: 48px;
  --space-6: 64px;
  --space-7: 96px;
  --space-8: 128px;
  --space-9: 192px;
  --space-10: 256px;

  /* Motion */
  --ease-default: cubic-bezier(0.2, 0.8, 0.2, 1);
  --ease-enter: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-exit: cubic-bezier(0.7, 0, 0.84, 0);
  --duration-fast: 150ms;
  --duration-medium: 400ms;
  --duration-slow: 800ms;
}
```

---

*End of document. The library and this system are both alive — keep adding, keep refining, bump the version when you do.*
