---
name: Kinetic Commerce
colors:
  surface: '#f3faff'
  surface-dim: '#c7dde9'
  surface-bright: '#f3faff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#e6f6ff'
  surface-container: '#dbf1fe'
  surface-container-high: '#d5ecf8'
  surface-container-highest: '#cfe6f2'
  on-surface: '#071e27'
  on-surface-variant: '#40493d'
  inverse-surface: '#1e333c'
  inverse-on-surface: '#dff4ff'
  outline: '#707a6c'
  outline-variant: '#bfcab9'
  surface-tint: '#106d20'
  primary: '#0b6b1d'
  on-primary: '#ffffff'
  primary-container: '#2e8534'
  on-primary-container: '#f7fff1'
  inverse-primary: '#82db7e'
  secondary: '#005faf'
  on-secondary: '#ffffff'
  secondary-container: '#54a0fe'
  on-secondary-container: '#003567'
  tertiary: '#845000'
  on-tertiary: '#ffffff'
  tertiary-container: '#a56600'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#9df898'
  primary-fixed-dim: '#82db7e'
  on-primary-fixed: '#002204'
  on-primary-fixed-variant: '#005312'
  secondary-fixed: '#d4e3ff'
  secondary-fixed-dim: '#a5c8ff'
  on-secondary-fixed: '#001c3a'
  on-secondary-fixed-variant: '#004786'
  tertiary-fixed: '#ffddba'
  tertiary-fixed-dim: '#ffb865'
  on-tertiary-fixed: '#2b1700'
  on-tertiary-fixed-variant: '#663d00'
  background: '#f3faff'
  on-background: '#071e27'
  surface-variant: '#cfe6f2'
typography:
  display-lg:
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
  label-md:
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
  margin-desktop: 32px
---

## Brand & Style
The design system is engineered for high-velocity retail and dynamic commerce environments. It prioritizes clarity, movement, and decisive action, targeting a professional audience that values efficiency and reliability. 

The aesthetic is **Corporate / Modern** with a focus on high-performance utility. It leverages a clean, structured interface with generous whitespace to ensure that product imagery and data-rich dashboards remain the focal point. The emotional response should be one of confidence and streamlined productivity, utilizing subtle transitions and crisp edges to convey a sense of technological precision.

## Colors
The palette is led by a commanding **Primary Green (#388E3C)**, signaling growth, stability, and successful transactions. This color is the exclusive driver for primary actions, success states, and brand-critical highlights.

- **Primary**: Used for the most important call-to-action buttons, active navigation states, and progress indicators.
- **Secondary**: A deep blue used for supporting information, secondary actions, and interactive components that require distinction from the primary flow.
- **Tertiary**: An accent amber reserved for warnings, highlights, or promotional badges that require immediate visual attention without the weight of a primary action.
- **Neutral**: A sophisticated slate used for typography, borders, and background layering to maintain a professional, grounded atmosphere.

## Typography
The typographic scale is designed for legibility in complex data environments. **Hanken Grotesk** provides a sharp, contemporary edge for headlines, suggesting forward-thinking design. **Inter** handles the bulk of the interface for its neutral and highly readable characteristics. For technical data points, SKUs, and status codes, **JetBrains Mono** is utilized to provide a distinct, developer-friendly utility look.

## Layout & Spacing
The design system employs a **12-column fluid grid** for desktop and a **4-column grid** for mobile. The layout philosophy is built on an 8px base unit, ensuring all components and containers scale proportionally.

- **Desktop**: 12 columns, 24px gutters, 32px side margins. Max-width container of 1440px.
- **Tablet**: 8 columns, 16px gutters, 24px side margins.
- **Mobile**: 4 columns, 16px gutters, 16px side margins.

Horizontal spacing should follow the defined increments to maintain a rigorous rhythm. Vertical rhythm is driven by the 8px grid to ensure consistent stack heights across different page templates.

## Elevation & Depth
This design system utilizes **Tonal Layers** and **Low-Contrast Outlines** to define hierarchy. Depth is not communicated through heavy shadows, but through subtle shifts in surface color and 1px borders.

- **Level 0 (Base)**: The main background, using the lightest neutral tint.
- **Level 1 (Card)**: Raised surfaces using a white fill with a subtle 1px border (#E0E6E9).
- **Level 2 (Overlay)**: Modals and dropdowns use a very soft, highly diffused ambient shadow (10% opacity, 16px blur) to suggest a physical lift from the base layer.
- **Active State**: Primary elements do not use elevation for "active" states; instead, they use a high-contrast color fill (Primary Green) to denote interaction.

## Shapes
The shape language is **Soft (0.25rem)**, emphasizing precision and a "pro-tool" feel. While pure sharp corners feel too aggressive, a 4px radius provides just enough approachability without losing the rigorous, corporate aesthetic.

- **Standard Buttons & Inputs**: 4px (0.25rem).
- **Cards & Containers**: 8px (0.5rem).
- **Modals & Large Sheets**: 12px (0.75rem).
- **Icons**: Contained within square or circular frames with minimal internal padding.

## Components
Consistent implementation of components is critical for maintaining the professional tone of the design system.

- **Buttons**: Primary buttons are solid **#388E3C** with white text. Secondary buttons use a 1px border of the primary color with primary color text. Text is always centered and uppercase for high-visibility labels.
- **Input Fields**: Use a 1px neutral border. On focus, the border transitions to Primary Green with a soft 2px outer glow of the same color at 20% opacity.
- **Chips**: Small, 4px rounded containers used for status. "Success" uses a light tint of Primary Green with dark green text; "Error" uses a soft red tint.
- **Lists**: Clean rows with 1px bottom dividers. Active list items are signaled by a 4px vertical bar of Primary Green on the far left edge.
- **Cards**: Minimalist containers with 8px corner radius and a 1px neutral border. No shadow unless the card is draggable or interactive.
- **Progress Indicators**: Linear bars using Primary Green for the fill and a light neutral for the track.