---
name: Kinetic Commerce Dark
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#bfcab9'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#899485'
  outline-variant: '#40493d'
  surface-tint: '#82db7e'
  primary: '#82db7e'
  on-primary: '#00390a'
  primary-container: '#4da24e'
  on-primary-container: '#003207'
  inverse-primary: '#106d20'
  secondary: '#90d792'
  on-secondary: '#003911'
  secondary-container: '#0b551f'
  on-secondary-container: '#82c985'
  tertiary: '#ffb1c8'
  on-tertiary: '#640333'
  tertiary-container: '#df6a94'
  on-tertiary-container: '#58002c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#9df898'
  primary-fixed-dim: '#82db7e'
  on-primary-fixed: '#002204'
  on-primary-fixed-variant: '#005312'
  secondary-fixed: '#abf4ac'
  secondary-fixed-dim: '#90d792'
  on-secondary-fixed: '#002107'
  on-secondary-fixed-variant: '#07521d'
  tertiary-fixed: '#ffd9e2'
  tertiary-fixed-dim: '#ffb1c8'
  on-tertiary-fixed: '#3e001d'
  on-tertiary-fixed-variant: '#822049'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The design system transitions into a high-performance dark environment, optimized for "Kinetic Commerce"—a high-velocity retail and logistics context. The brand personality is efficient, authoritative, and precise. 

The style utilizes a **Modern Corporate** aesthetic with a lean toward **Minimalism**. By using a deep charcoal foundation, we reduce eye strain for power users while allowing the primary green to act as a high-visibility beacon for conversion and status. The interface prioritizes clarity and speed, evoking a sense of technological sophistication and reliability.

## Colors
The palette is engineered for high contrast in low-light environments. 

- **Primary Green (#388E3C):** Reserved for primary actions, success states, and critical "kinetic" indicators. 
- **Secondary Green (#81C784):** Used for accents, subtle highlights, and interactive hover states to ensure depth.
- **Base Surfaces:** The main background is a deep charcoal (#121212). Elevated surfaces (cards, modals) use #1E1E1E to create visual separation without losing the dark aesthetic.
- **Typography:** Pure white is used for headings to maximize readability, while secondary text uses a desaturated grey (#B0B0B0) to maintain hierarchy.

## Typography
The typographic system balances modern sans-serif readability with technical precision. 

- **Headlines:** Hanken Grotesk provides a sharp, contemporary feel for large displays.
- **Body:** Inter is utilized for its exceptional legibility in dark mode across all screen densities.
- **Labels:** JetBrains Mono is used for data points, SKU numbers, and status labels to reinforce the "Kinetic" and technical nature of the commerce platform.

Use tight tracking on larger headlines to maintain a compact, high-energy feel. Increase line-height slightly for body text in dark mode to prevent "halonation" (blurring of white text on dark backgrounds).

## Layout & Spacing
This design system employs a **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

- **Rhythm:** An 8px base unit drives all dimensions. 
- **Density:** The layout is high-density. Information is packed efficiently but separated by clear tonal changes rather than heavy whitespace.
- **Breakpoints:** 
  - Mobile: < 600px (16px margins)
  - Tablet: 600px - 1024px (24px margins)
  - Desktop: > 1024px (40px margins, max-width 1440px)

## Elevation & Depth
In this dark mode environment, depth is communicated through **Tonal Layering** rather than traditional shadows.

1.  **Level 0 (Base):** #121212 - Main application background.
2.  **Level 1 (Card/Surface):** #1E1E1E - Primary containers and list items.
3.  **Level 2 (Overlay/Menu):** #2C2C2C - Popovers, dropdowns, and modals.

**Outlines:** Use a subtle 1px border (#333333) on all Level 1 surfaces to define edges against the deep black background. 
**Shadows:** When necessary for high-level modals, use a large, soft black shadow with 40% opacity to "lift" the element without introducing grey muddiness.

## Shapes
The shape language is **Soft** and professional. 

- **Corners:** A 4px (0.25rem) radius is the standard for most components, creating a disciplined but modern look. 
- **Buttons:** Use 4px for standard buttons; use the "Pill" (999px) treatment only for status tags or specialized chips to distinguish them from actionable buttons.
- **Inputs:** Maintain square-ish 4px corners to align with the technical grid.

## Components
- **Buttons:** 
  - Primary: Solid #388E3C with white text. 
  - Secondary: Outlined #333333 with white text; turns #388E3C on hover.
- **Input Fields:** Background #1E1E1E, 1px border #333333. Focus state uses a 1px #388E3C border and a subtle green outer glow.
- **Chips/Status:** Use low-opacity fills. For example, a "Success" chip uses #388E3C at 15% opacity with a solid #81C784 text color.
- **Lists:** Separated by 1px solid #333333 borders. Interactive list items should use a #252525 background on hover.
- **Cards:** Background #1E1E1E, no shadow, 1px border #333333. 
- **Data Tables:** Header background #181818 with text-label-caps. Row background #1E1E1E with zebra striping using #252525 for every second row.