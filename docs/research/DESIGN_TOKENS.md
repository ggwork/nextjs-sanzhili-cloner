# Design Tokens — sanzhili-pm.com

Extracted from source CSS (`style.css`, `add.css`, `res.css`) + `getComputedStyle`-equivalent readings. This is a CMS site (腾云建站/Tengyun), so source CSS is authoritative.

## Colors

| Token | Hex | Usage |
|---|---|---|
| brand (orange) | `#f39800` | Primary accent — section title underline, `.more` buttons, hover states, counters |
| brand-ink (blue) | `#1a689a` | Contact submit button hover bg |
| navy | `#001425` | Application-fields section background |
| slate | `#263d4f` | Card boxes (`.wel-two .box`), product-card hover bar, wel-five overlay |
| slate-80 | `rgba(38,61,79,0.8)` | Translucent slate overlay |
| ink | `#333` | Headings, nav text, strong text |
| ink-2 | `#555` | Nav default link color, dropdown links |
| body | `#666` | Body paragraph text |
| caption | `#999` | Dates, captions |
| footer-link | `#888` | Footer widget links |
| footer-faint | `#6e6e6e` | Footer page-list separators |
| footer-bg | `#2f2f2f` | Footer background |
| footer-border | `#3b3b3b` | Footer dividers |
| alt | `#f9f9f9` | Product-center section bg, foo-top bg |
| line | `#cccccc` | Hairline borders (inputs, news list) |
| shadow | `#dedede` | Card box-shadows (`1px 1px 20px #dedede`) |
| white | `#fff` | — |

## Typography

- **Font stack:** `"PingFang SC", "Source Han Sans CN", "Noto Sans SC", "黑体", "宋体", sans-serif`
- **Base:** 14px / line-height 1.5 (body), justified (`text-align: justify`)
- **Weights used:** 400 (body/titles), 600 (strong spans)
- Counter font: `'BEBAS'` (not present on homepage)

| Element | Size | Color | Notes |
|---|---|---|---|
| Section title `.title` | 0.36rem (≈36px) | #333 / #fff on dark | centered; underline `::after` 3px×40px #f39800, mt 10px |
| Body paragraph (about) | 16px | #666 | line-height 2.2, text-indent 2em |
| Field card title `.ti` | 24px | #fff | underline 40px×2px #fff, margin 20px auto |
| Field card desc `.de` | 15–16px | #fff | opacity 0.6 → 1 on hover |
| Product title `p` | 0.18rem (≈18px) | #333 | centered, ellipsis |
| News list item `a` | 20px | (link) | bordered list |
| News date | 14px | #999 | — |
| `.more` button | 14px | #fff | 160×45px, bg #f39800 |
| `.addformright h1` | 25px | #777 | — |
| Slogan `.ti` | 0.28rem (≈28px) | #fff | font-weight 100 |
| Slogan `.de` | 0.34rem (≈34px) | #fff | — |
| CTA `.ti` | 0.3rem (≈30px) | #333 | — |
| Footer widget h3 | 18px | #fff | weight normal |

## rem Scaling (responsive root font-size)

The source sets `html { font-size }` by viewport; **1rem = that many px**:
- `> 1600px` → 100px
- `≤ 1600px` → 90px
- `≤ 1400px` → 80px
- `≤ 1200px` → 70px

**Clone approach:** keep browser root default (so Tailwind utilities stay correct) and translate the site's rem values to px / `clamp()` per component.

## Containers / Spacing

- `.inner` (header): **1400px** max-width, centered
- `.content` (sections): **83.333%** width → 88% (≤1355px) → 94% (≤996px)
- Card shadow: `1px 1px 20px #dedede`
- Section padding-top: 60–80px (varies)
- Hairline border: `1px solid #cccccc`

## Radii

The site is essentially **square** (radius 0) — buttons, cards, inputs all have `border-radius: 0`. shadcn `--radius` set to `0` in clone to match.

## Global CSS / JS patterns

- `scroll-behavior: smooth` (native, for down-arrow / anchors)
- `body { text-align: justify }` on `<p>`
- Swiper carousels (hero + app fields)
- AOS scroll animations: `duration: 800, once: true, disable: 'mobile'`
- Luxy.js inertia scroll (desktop >1200px) → **Lenis** in clone
- SuperSlide `topMarquee` continuous vertical scroll (news) → CSS `@keyframes` in clone
