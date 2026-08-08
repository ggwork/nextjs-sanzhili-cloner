# AboutPhilosophy Specification (source `.pro-five`)

## Overview
- **Target file:** `src/components/about-philosophy.tsx`
- **Screenshot:** `docs/design-references/about-desktop-fullpage.png`
- **Interaction model:** static + AOS fade-up on the `.zi` card.

## DOM Structure
`.pro-five` (relative; margin-top 198px desktop)  — AOS fade-up
  ├─ `.bgb` → `<img.bg>` (full-width background photo 1920×510)
  └─ `.zi.content` (absolute white card, overlapping bottom-center)  — AOS fade-up
       └─ philosophy paragraph

## Computed Styles (exact, desktop)

### `.pro-five`
- position relative; margin-top **198px** (desktop) / 0 (mobile); height ~378px.

### `.bgb` / `<img.bg>`
- `<img>`: full width (1425px), height 378px (1920×510 aspect scaled). object-fit cover. Mobile: height ~300px.

### `.zi` (white card)
- position absolute; horizontally centered (left 50%, translateX -50%); **bottom: 52.5px** (overlaps lower part of image + extends below); width 83.333% (`.container-content` ≈1187px).
- background **#fff**; padding **99px 199.5px** (desktop) / **30px** (mobile); boxShadow **1px 1px 20px #dedede**; text-align center.
- fontSize **16px**; lineHeight **32px**; color **#666**.

## Text Content (verbatim)
"公司坚持以"绿色、高效、智能互联"为核心定位，以核心技术、核心人才以及行业资源整合能力为依托，坚持贯通新能源领域上下游产业链，以国内国外并行发展、贸易与金融融合发展为举措，深耕新能源电站、电力生产和电气设备制造三大产业，努力打造卓越的清洁能源平台，为社会提供多元化、智能化、综合化的能源互联服务。"

## Assets
- Background photo: `/images/about-philosophy-bg.jpg` (upload/img/20210118095151.jpg, 1920×510).

## Responsive Behavior
- Desktop: full-width photo (~378px), white card 83% wide centered, overlapping bottom (bottom 52px), big side padding 199.5px, shadow. Section has 198px top margin (creates separation from counters).
- Mobile (390px): photo ~300px; card ~94% width, padding 30px, still centered/overlapping; fontSize 16px / lh 32px / #666 / center. Reduce top margin.
