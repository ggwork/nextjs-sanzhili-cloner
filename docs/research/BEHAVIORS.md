# Behaviors — sanzhili-pm.com homepage

Every interaction discovered on the live page, with trigger, before/after state, and transition. Source = inline `<script>` in index.html + AOS + Swiper + SuperSlide + Luxy configs.

## Global

### Smooth (inertia) scroll — Luxy.js
- **Trigger:** page load, only when `viewport width > 1200px` (and not IE)
- **Mechanism:** `luxy.init({ wrapper: '#luxy', targets: '.luxy_el', wrapperSpeed: 0.08 })`
- **Effect:** weighted/inertia scrolling on the whole page
- **Clone:** Lenis, desktop >1200px only (`SmoothScroll` component)

### Scroll-reveal — AOS
- **Config:** `AOS.init({ duration: 800, once: true, disable: 'mobile' })`
- **Trigger:** element enters viewport (~10% margin)
- **Effect:** opacity 0→1 + transform (translate/scale) → 0, 800ms, ease-out-cubic
- **Variants used:** `fade-up`, `fade-down`, `fade-left`, `fade-right`, `fade-zoom-in`, `zoom-in`, `zoom-out`; some with `aos-delay` (200/300/500 ms)
- **Mobile:** disabled (renders immediately)
- **Clone:** `Reveal` component (framer-motion whileInView, once, mobile-off)

## Header

### Scroll state
- **Trigger:** `window.onscroll`, `scrollTop >= 1`
- **Source intent:** `.header` gains `.fixed`/`.act` → bg transparent→white, `transition: background .3s`
- **Note:** source JS targets `.head` (element is `.header`) — appears buggy; design intent (`.header.fixed` rules + `.home .header` transparent) is clearly "transparent over hero → white after scroll". **Clone implements the intent.**
- State A (top): `background: transparent`, no shadow
- State B (scrolled): `background: #fff`, subtle shadow/border
- **Transition:** 0.3s

### Nav dropdowns (desktop)
- **Trigger:** hover on `<li>` with `.addrop`
- **Effect:** `.addrop` `display: none → block`, full-width white panel under item
- Items: 企业介绍/经营理念/公司使命 (关于我们), 原料树脂 (产品中心), 公司新闻/行业新闻 (新闻中心)

### Mobile menu
- **Trigger:** click `.navBtn` (hamburger)
- **Effect:** `.nav` toggles `.open` → slide-in nav panel

## Hero Banner

### Carousel
- **Config:** Swiper, `autoplay: true, loop: true, speed: 600`, clickable pagination
- **Pagination:** vertical bullets, right side (`right: 35px`), flex column, bullet-active 12×12px white
- **Pause on hover:** `onmouseenter` → `autoplay.stop()`; `onmouseleave` → `autoplay.start()`

### Scroll-down arrow
- **Animation:** `bounce-down1` keyframes — `translateY` ±3px, 1s linear infinite
- **Click:** `$('html,body').animate({ scrollTop: bannerHeight }, 800)` — smooth scroll to about section

## Application Fields (`.wel-two`)

### Carousel
- **Config:** Swiper, `loop: true, speed: 600, centeredSlides: true, initialSlide: 1`, autoplay (`disableOnInteraction: false`), draggable scrollbar
- **Responsive slidesPerView:** 1.2 (base) → 3.5 (≥750, gap 40) → 3.5 (≥1400, gap 60)
- **Scrollbar:** bottom 40px, 32% wide, centered, 2px track rgba(255,255,255,0.3), 4px white drag

### Card hover
- `.pic:after` overlay `rgba(0,0,0,0.5)` opacity 1 → 0 (image reveals)
- `.box` bg `#263d4f` → `#f39800` (orange)
- `.de p` opacity 0.6 → 1
- `.more` bg #f39800→#fff, color #fff→#f39800, arrow swaps to light variant
- **Transition:** 0.5s all

## Product Center (`.busi`)

### Card hover
- `.pic span` (bg image) `scale(1)` → `scale(1.1)` (0.5s)
- `p` title bar bg `#fff` → `#263d4f`, color #333 → #fff (0.5s)

## News Center (`.wel-three`)

### Marquee
- **Config:** SuperSlide `topMarquee`, `vis: 5, interTime: 100, autoPlay: true` — continuous vertical scroll
- **Pause on hover:** (standard SuperSlide behavior)
- Two independent columns (公司新闻 / 行业新闻)
- **Clone:** CSS `@keyframes marquee-up` (translateY 0 → -50%) with duplicated list; pause on hover

### List item hover
- underline / color shift (standard link hover)

## Slogan (`.wel-four`)

### Video button
- **Hover:** v1/v2 play icon images swap / rotate (`transition: 0.6s ease`)
- **Click:** `.cover` `fadeIn` + `.act` → video plays; close button (`.cha`) → `fadeOut`, pause, reset currentTime
- **Modal:** full-screen rgba(0,0,0,0.5) overlay; video scales 0.6→1 + opacity 0→1 (0.5s)

## Contact Form

### Submit (mock)
- **Validation:** name, phone (regex 13/15/18/17/19 + 9 digits), email, country, remarks all required → alerts on empty/invalid
- **On success:** `alert("提交成功")` + reload (clone: client-only, no backend)

## Floating box (`.floatBox`)

- Fixed `bottom: 2%`, right side. 3 stacked items: 邮箱咨询 (mailto), 咨询电话 (reveals number), 返回顶部 (scroll to top)
- Hover reveal behavior (standard 腾云 widget)

## Footer

### Friendly links (友情链接)
- **Click:** `.footer .link` toggles `.act` → `.link .a` `slideToggle` (expand/collapse link list)

## Responsive breakpoints

- `1600 / 1400 / 1200 / 996 / 768` px — root font-size + container width + layout shifts
- Mobile (≤768): header collapses to hamburger, sections stack/pad, carousels reduce slidesPerView, marquee continues
