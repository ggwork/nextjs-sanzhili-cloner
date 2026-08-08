# AboutSubBanner Specification

## Overview
- **Target file:** `src/components/about-sub-banner.tsx`
- **Screenshot:** `docs/design-references/about-banner-viewport.png`
- **Interaction model:** static (AOS fade-zoom-in on the `.font` wrapper)
- **Source class:** `.banner` (inner-page sub-banner; body class is `home`, so header renders transparent over it — same as homepage)

## DOM Structure
`.banner` (relative, full-bleed)
  └─ `<img>` (the banner photo, static, full width, natural aspect)
  └─ `.font` (absolute, centered overlay)
       └─ `.en` ("About Us")
       └─ `.cn` ("关于我们")

## Computed Styles (exact)

### `.banner`
- width: 100% (1425px at 1440 viewport); **no overlay** (confirmed: no `::before`/`::after`, no btnBg bg, no text-shadow). White text sits directly on the photo (wind turbines).
- The visible banner = the `<img>` at its natural aspect **1920×749** → ~555px tall at 1440 width. (A `padding-bottom: 431px` exists in source from the Swiper container but is an invisible artifact — ignore; secnav follows immediately.)

### `<img>`
- width: 100%, height: auto (maintains 1920:749). object-fit: fill. Mobile: source inflates to ~200–318px; use a mobile min-height so the title has room.

### `.font` (overlay)
- position: absolute; centered both axes (flex column, items-center, justify-center). text-align: center. whiteSpace: nowrap.
- Reveal: AOS `fade-zoom-in` (opacity 0→1, scale 0.6→1).

### `.en` ("About Us")
- font-family: `ITCAVANTGARDESTD` (custom, not web-available → fall back to font-sans), text-transform: uppercase, color: #fff
- Desktop: fontSize **54px**, lineHeight 81px
- Mobile (390px): fontSize **18px**, lineHeight 27px

### `.cn` ("关于我们")
- font-family: PingFang SC stack, color: #fff, text-align center
- Desktop: fontSize **45px**, lineHeight 67.5px
- Mobile: fontSize **20px**, lineHeight 30px (note: on mobile CN is slightly larger than EN)
- AOS delay 0.2s relative to EN

## Assets
- Background photo: `public/images/about-banner.jpg` (1920×749), downloaded from `upload/img/20210311145816.jpg`

## Text Content (verbatim)
- en: "About Us"
- cn: "关于我们"

## Responsive Behavior
- Desktop: full-width image (~555px tall), title centered, EN 54px / CN 45px stacked.
- Mobile: image ~240px (use min-height), EN 18px / CN 20px.
- NO dark overlay at any breakpoint (match source exactly).
