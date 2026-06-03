---
name: Kinetic Commerce
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#424754'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0ef'
  outline: '#727786'
  outline-variant: '#c2c6d6'
  surface-tint: '#0059c8'
  primary: '#0056c3'
  on-primary: '#ffffff'
  primary-container: '#1f6feb'
  on-primary-container: '#fefcff'
  inverse-primary: '#afc6ff'
  secondary: '#a73a00'
  on-secondary: '#ffffff'
  secondary-container: '#fd661d'
  on-secondary-container: '#571b00'
  tertiary: '#0b6b1d'
  on-tertiary: '#ffffff'
  tertiary-container: '#2e8534'
  on-tertiary-container: '#f7fff1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9e2ff'
  primary-fixed-dim: '#afc6ff'
  on-primary-fixed: '#001944'
  on-primary-fixed-variant: '#004299'
  secondary-fixed: '#ffdbce'
  secondary-fixed-dim: '#ffb599'
  on-secondary-fixed: '#370e00'
  on-secondary-fixed-variant: '#7f2b00'
  tertiary-fixed: '#9df898'
  tertiary-fixed-dim: '#82db7e'
  on-tertiary-fixed: '#002204'
  on-tertiary-fixed-variant: '#005312'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 14px
  label-sm:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 12px
  margin-mobile: 16px
  margin-desktop: 24px
---

## Brand & Style

The design system is engineered for high-velocity mobile commerce, prioritizing trust, efficiency, and vibrant energy. The aesthetic balances a systematic, corporate reliability with high-contrast accents that drive user conversion and engagement.

The design style follows a **Modern / Corporate** approach with a heavy emphasis on **Card-based Layouts**. This ensures that dense product information remains digestible through clear containerization. Subtle shadows and a rigorous grid structure create a sense of organized abundance, evoking an emotional response of security and speed. Visual clutter is minimized to keep the focus on product imagery and actionable price points.

## Colors

The palette is anchored by a high-energy **Electric Blue** as the primary brand driver, symbolizing trust and institutional stability. **Action Orange** serves as the secondary high-contrast color, reserved strictly for critical conversion points like "Add to Cart" or limited-time offers to create a sense of urgency.

A tertiary **Success Green** (#388E3C) is utilized for ratings, stock availability, and price drops to reinforce positive shopping signals. The neutral scale relies on a series of cool grays to maintain a clean, professional environment that lets product photography take center stage. The default color mode is light to maximize readability in various lighting conditions typical for mobile users.

## Typography

The design system utilizes **Inter** across all levels to ensure maximum legibility and a systematic, modern feel. The type hierarchy is strictly defined to help users scan product details, prices, and specifications rapidly.

- **Headlines:** Use Semi-Bold weights for section titles and product names to establish clear hierarchy.
- **Body:** Standardized at 14px and 16px for optimal reading density on mobile screens.
- **Labels:** Strategic use of Medium and Bold weights at smaller sizes (10px-12px) for secondary metadata like ratings, delivery estimates, and badge text.
- **Price Display:** Always use a heavier weight (Bold/700) to ensure the cost is the most prominent text element on product cards.

## Layout & Spacing

The layout follows a **Fluid Grid** model optimized for mobile-first consumption. It utilizes an 8px spatial system to maintain consistent rhythm and alignment across all views.

- **Mobile View:** A 4-column layout with 16px outer margins and 12px gutters. This provides enough breathing room while maximizing screen real estate for product imagery.
- **Product Tiles:** Designed to fit in 1-column (full width) or 2-column (side-by-side) configurations depending on the category depth.
- **Safe Areas:** Adhere to hardware-specific safe areas for notch and home indicator offsets. 
- **Horizontal Scrolling:** Used extensively for category circles and "Customers also viewed" sections to reduce vertical scrolling fatigue.

## Elevation & Depth

This design system employs **Ambient Shadows** to create a clear sense of depth and interactability. Shadows are intentionally soft and diffused to avoid a "dirty" look on white backgrounds.

- **Level 0 (Surface):** The main background of the app, using a very light gray (#F1F3F6) to provide contrast for white cards.
- **Level 1 (Cards):** Product tiles and list items use white backgrounds with a subtle 4px blur, 5% opacity black shadow.
- **Level 2 (Navigation & Search):** Sticky headers and search bars use a slightly more pronounced shadow (8px blur) to appear "closer" to the user as they scroll.
- **Level 3 (Modals & Bottom Sheets):** These use high-diffusion shadows and a 40% opacity black backdrop overlay to focus user attention on transactional tasks.

## Shapes

The shape language is **Soft**, striking a balance between the precision of a professional tool and the approachability of a retail experience. 

- **Containers:** Product cards and input fields use a 4px (0.25rem) corner radius.
- **Category Circles:** Category icons are strictly 100% rounded (circular) to distinguish them visually from product tiles.
- **Buttons:** Primary action buttons use a 2px radius for a sharper, more "urgent" look, while secondary buttons may use a slightly softer 4px radius.
- **Badges:** Rating tags and "New" badges use a 2px radius to fit within tight typography constraints.

## Components

### Buttons
- **Primary Call-to-Action:** Solid #FB641B (Orange) with white text, Bold 14px. Used for "Buy Now" and "Add to Cart."
- **Secondary Action:** Solid #2874F0 (Blue) or ghost-style with a blue outline for navigation-based actions.

### Search Bar
- A full-width, sticky component at the top of the viewport. It features a light gray background, subtle interior shadow, and a prominent search icon. The placeholder text should be descriptive (e.g., "Search for Products, Brands and More").

### Category Circles
- Circular image containers with a 64px diameter. The label is placed directly below the circle using `label-md` typography. These are grouped in a horizontal scroll container.

### Product Tiles
- Card-based containers. Each tile must include:
    1. A fixed-aspect ratio image (1:1).
    2. A product title (max 2 lines).
    3. A green rating badge (e.g., 4.2 ★).
    4. Current price (Bold) and original price (strikethrough gray).
    5. Discount percentage in green.

### Input Fields
- Outlined boxes with a 1px #E0E0E0 border. Upon focus, the border transitions to Primary Blue with a 2px stroke. Label text floats or disappears on input.

### Bottom Navigation
- Fixed at the base of the screen. Uses active/inactive states with Primary Blue for the active icon and label. Icons are simple, geometric line art.