# AboutCounters Specification (source `.pro-three`)

## Overview
- **Target file:** `src/components/about-counters.tsx`
- **Screenshot:** `docs/design-references/about-desktop-fullpage.png`
- **Interaction model:** static + AOS fade-up on wrapper.

## DOM Structure
`.pro-three` (bg #f9f9f9, padding 45px 0)  — AOS fade-up
  └─ `ul.numul.content` (83.33% width)
       └─ `li` ×3, each:
            └─ `.center` (absolute, vertically centered in li)
                 ├─ `.va` (big orange value)  +  `.zi` (small suffix, e.g. "年")
                 └─ `.fo` (description below)

## Computed Styles (exact, desktop)

### `.pro-three`
- background **#f9f9f9**; padding **45px 0**; AOS fade-up.

### `ul.numul`
- width 83.333% (`.container-content`); height 100px.

### `li`
- display inline-block; width **~33.3%** (391.8px); height 100px; position relative; vertical-align top.

### `.center`
- absolute; centered in li (top 50%, translateY -50%); text-align center.

### `.va` (value)
- fontSize **clamp(32px, 3vw, 41.4px)** (desktop 41.4px, mobile 32.2px); color **#f39800**; display inline; fontWeight 400.

### `.zi` (suffix)
- fontSize 16px; color #666; margin-left 10px; display inline.

### `.fo` (description)
- fontSize **16px** (mobile 14px); lineHeight 24px/21px; color **#333**; display block; max-width ~329px; centered; margin-top small.

## Per-item Content (verbatim)
1. va: "2020"  / zi: "年"  / fo: "苏州三之立成立于2020年"
2. va: "专注" / zi: ""    / fo: "专注于化工产品及新材料的生产和经营，为客户提供优质的产品、贴心的服务"
3. va: "可信" / zi: ""    / fo: "同国内外知名厂商建立了稳定的货源供应体系，并建立了良好的长期合作关系。"

## Responsive Behavior
- Desktop: 3 equal columns (inline-block ~33%), big value 41.4px orange + description below.
- Mobile (390px): 2 columns (li 183px ≈50%), value 32.2px; 3rd item wraps to next row (left-aligned). fontSize 14px for fo.
- Implementation: `grid grid-cols-2 md:grid-cols-3`, text-center per cell.
