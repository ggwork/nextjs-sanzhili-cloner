# AboutIntro Specification (source `.pro-one`)

## Overview
- **Target file:** `src/components/about-intro.tsx`
- **Screenshot:** `docs/design-references/about-desktop-fullpage.png`
- **Interaction model:** static + AOS (`.img` zoom-in scale 0.6→1; `.font` fade-up)

## DOM Structure
`.pro-one` (full-width, dark bg image)  — backgroundImage: `pro1.jpg`
  └─ `.content` (83.33%, position relative, height 272px desktop)
       ├─ `.font` (text half, left ~55%)
       │    └─ `<p>` (intro paragraph, white 80%)
       └─ `.img` (image half, absolute right ~45%)
            └─ `<img>` (400×267 photo)

## Computed Styles (exact, desktop)

### `.pro-one`
- full width; backgroundImage: `url("/images/about-intro-bg.jpg")` (pro1.jpg — dark photo, hence white text); background-size cover; AOS fade-up on wrapper.

### `.content`
- width 83.333% (`.container-content`); position relative; height 272px.

### `.font` (text)
- width ~55% (653px of 1187); padding **72px 0**; fontSize **16px**; lineHeight **32px**; color **rgba(255,255,255,0.8)** (white 80%); text-align left; text-indent 32px (2em).
- AOS fade-up.

### `.img` / `<img>`
- `.img`: position absolute; right half (left 653px, width 534px ≈45%, height 272px); AOS zoom-in (scale 0.6→1).
- `<img>`: 400×267, displayed ~240×160; object-fit cover; vertical-align middle.

## Text Content (verbatim — identical to homepage ABOUT_TEXT)
"苏州三之立高分子材料有限公司成立于2020年，为一家主要从事特种工程塑料销售的企业，公司主要产品为PEEK、PPS、PPA及高抗冲击ABS系列，产品应用于汽车、消费电子产品、小型家用电器和体育安防等领域，可提供特殊材料个性化定制服务，满足客户对特种材料的不同需求。"

## Assets
- Section bg: `/images/about-intro-bg.jpg` (pro1.jpg) — dark photo, white text reads on it.
- Side photo: `/images/about-intro-photo.jpg` (upload/img/20210722162620.jpg, 400×267).

## Layout (responsive)
- Desktop (md+): two-column — TEXT left (55%, white, padding 72px vertical), IMAGE right (45%). Use `flex flex-col md:flex-row-reverse` with DOM order [image, text] so mobile = image-top/text-bottom and desktop = text-left/image-right.
- Mobile (390px): stacks — image on top (full width, ~235px tall, position static), text below. text fontSize 14px, lineHeight 28px, color white/80, padding-bottom 20px, text-indent 2em. Section bg remains dark.
