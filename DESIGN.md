# Design System - El Bajón de los Tíos

## Visual World: Urban Street Craft
- **Theme:** Warm Dark Mode (ideal para la noche, ambiente de food truck, bajo reflejo y alto contraste).
- **Surface Palette:**
  - Base canvas: `#0d0f12` (Off-black con toque cálido carbón)
  - Surface cards: `#15181e`
  - Elevated / Interactive: `#1c2028`
  - Hover states: `#252b36`
- **Brand Accents:**
  - Fire Red: `#d9252d` (Marca, badges y foco)
  - Golden Mustard: `#f59e0b` / `#fbbf24` (Precios, promociones, destacados)
  - WhatsApp Emerald: `#22c55e` (Conversión de pedido)
- **Typography:**
  - Headlines: `'Bebas Neue', sans-serif` (tight tracking, punchy)
  - UI / Body: `'Plus Jakarta Sans', system-ui, sans-serif` (legibilidad, números tabulares `tabular-nums`)
- **Interaction Dynamics (Emil Kowalski guidelines):**
  - Instant tactile feedback: `:active { transform: scale(0.96); }`
  - Easing: `cubic-bezier(0.23, 1, 0.32, 1)`
  - Durations: 120ms - 200ms
  - Quick Drawer modal for customer cart summary with backdrop blur.
