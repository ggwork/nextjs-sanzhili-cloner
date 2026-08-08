# AboutSecNav Specification

## Overview
- **Target file:** `src/components/about-sec-nav.tsx`
- **Screenshot:** `docs/design-references/about-desktop-fullpage.png` (band directly under banner)
- **Interaction model:** static + hover (AOS: `.left` fade-right, `.right` fade-left)
- **Source class:** `.nav.ntwo.secnav`

## DOM Structure
`.secnav` (full-width band)
  └─ `.content` (83.33% width → `.container-content`)  — uses clearfix, two floated halves
       ├─ `.left`  (breadcrumb): `<img.nav1>` + `<a>关于我们</a>` + `<img.nav2>` + `<a>企业介绍</a>`
       └─ `.right` (sub-tabs):    `<a class=act>企业介绍</a>` `<a>经营理念</a>` `<a>公司使命</a>`

## Computed Styles (exact, desktop)

### `.secnav`
- height: **70px**; line-height 70px; border-bottom: **1px solid #dedede**; background transparent.

### `.content`
- width: 83.333% (`.container-content`); display block; clearfix (`.left` floats left, `.right` floats right).

### `.left` (breadcrumb)
- float left; AOS `fade-right` (translateX 60 → 0). Items inline, line-height 70px, color #333, fontSize 14px.
- `<img.nav1>`: home icon 30×23 (`/images/icon-home.png`), vertical-align middle.
- `<img.nav2>`: chevron 6×11 (`/images/icon-chevron-right.png`), separator between crumbs, margin ~0 8px.

### `.right` (sub-tabs)
- float right; AOS `fade-left` (translateX -60 → 0).
- Each `<a>`: display inline-block; fontSize **18px**; line-height 70px; **margin-left 30px**; position relative.
  - active (`.act`): color **#f39800** (brand orange)
  - inactive: color **#666** (body)
  - transition 0.5s; on hover inactive → #f39800.

## States & Behaviors
- Active tab (企业介绍): orange text. This is per-page state (passed via props).
- Hover on inactive tab: color 666 → #f39800, 0.5s.

## Assets
- `/images/icon-home.png` (nav1.png, 30×23)
- `/images/icon-chevron-right.png` (nav2.png, 6×11)

## Text Content (verbatim)
- Breadcrumb: "关于我们" › "企业介绍"
- Tabs: "企业介绍"(active) / "经营理念" / "公司使命"

## Responsive Behavior
- Desktop: 70px band; breadcrumb left, tabs right (18px).
- Mobile (390px): band stays 70px, line-height 70px; content 94% width; tabs shrink to 14px, breadcrumb 14px. Keep breadcrumb + tabs in one row (flex justify-between); allow smaller gap. Tabs: active orange, others #666.
