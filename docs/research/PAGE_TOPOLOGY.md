# Page Topology — sanzhili-pm.com homepage

Single scrolling page (no route changes). Sections top→bottom. All flow content except header (fixed) and floating box (fixed overlay).

| # | Section | Source class | Interaction model | Notes |
|---|---|---|---|---|
| 0 | **Header / Nav** | `.header` (fixed) | click + hover + scroll | Transparent over hero → white on scroll. Dropdowns on hover (desktop). Hamburger → slide-in menu (mobile). Phone top-right. |
| 1 | **Hero Banner** | `.welban` | time-driven + click | Swiper: 3 slides, autoplay, loop, speed 600. Vertical pagination bullets (right side). Animated scroll-down arrow (bounces; click scrolls to about). AOS `fade-zoom-in`. |
| 2 | **About** | `.wel-one` | scroll-reveal | Section title + justified body text (2em indent) + "了解更多" button + world-map image. Faint bg (`o4.jpg`). AOS fade-up / fade-right / zoom-out. |
| 3 | **Application Fields** | `.wel-two` | time-driven + hover | Dark navy bg (`#001425`) + bg image. Swiper: 5 cards, centeredSlides, loop, autoplay, draggable scrollbar. Each card: image + dark overlay + slate box (#263d4f) with title/desc/"了解更多". Hover: overlay clears, box→orange, text opacity 1. AOS fade-zoom-in. |
| 4 | **Product Center** | `.nei.busi` | scroll-reveal + hover | Light gray bg (`#f9f9f9`). 3 cards (31.5% width, gap 2.7%): bg-image pic (270px tall) + title bar. Hover: title bar→slate, image zoom. AOS fade-up. |
| 5 | **News Center** | `.wel-three` | time-driven (marquee) + hover | Section title. Two columns (公司新闻 / 行业新闻), each: heading + "更多" + continuous vertical marquee list (SuperSlide topMarquee, vis 5, autoplay). Pause on hover. "了解更多" button below. |
| 6 | **Slogan** | `.wel-four` | scroll-reveal + click | Full-width bg image. Left: big slogan + subtitle. Right: circular video play button (v1/v2 icons) + "智行合一" label. Click opens video modal. AOS fade-down / zoom-in. |
| 7 | **Contact Form** | `.addform` | form (client mock) | Left: image. Right: h1 + 4 inputs (姓名/电话/邮箱/国家) + textarea + 提交 button. Submit validates + alerts (mock, no backend). |
| 8 | **CTA band** | `.foo-top` | static (link) | Centered: title + body + "联系我们 / Contact us" button with double arrows. |
| 9 | **Footer** | `.footer` | hover (links) | Dark (#2f2f2f). Top: nav links (left) + 友情链接 dropdown (right). Bot: address/phone/email (left). Last: copyright + ICP + 网站地图. |
| — | **Floating box** | `.floatBox` (fixed) | click | Fixed bottom-right. 3 stacked buttons: 邮箱咨询 (mailto), 咨询电话 + number, 返回顶部 (scroll top). |
| — | **Video modal** | `.cover` (hidden) | click | Full-screen overlay (rgba(0,0,0,0.5)). Video centered, scales in on open. Close button (cha.png). Opened by slogan video button. |

## Z-index layers

1. Normal flow content
2. Header (fixed) — `z-index: 9`
3. Floating box — fixed, `bottom: 2%`
4. Video modal `.cover` — `z-index` very high (fixed full-screen overlay)

## Layout

- Single column, full-width sections stacked vertically
- Content constrained to `.content` (83.33%) or `.inner` (1400px header)
- Banner images full-bleed (1920px wide)
- No sidebar; no grid system beyond inline-block / flex
