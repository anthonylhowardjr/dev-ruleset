# AI CSS/SCSS Ruleset (Modern, Beautiful, Best Practices)

## 1. Angular-Specific & Scoped Styling
1. **MUST** define all custom properties (design tokens) in `:host { ... }`.
   ```scss
   :host {
     --component-primary-color: var(--theme-color-primary, #3f51b5);
     --component-spacing: var(--theme-spacing-md, 16px);
   }
   ```
2. **MUST** apply theme/environment overrides via `:host-context()`:
   ```scss
   :host-context(.dark-theme) {
     --component-primary-color: var(--theme-dark-primary, #7986cb);
   }
   ```
3. **MUST NOT** use deprecated `::ng-deep` or `/deep/`; use `::ng-deep` with `:host` scoping only as last resort.
4. **MUST** use `@Component({ encapsulation: ViewEncapsulation.None })` only when absolutely necessary.

## 2. Maintainable File Organization
1. **MUST** adopt a 7-1 pattern for SCSS organization:
   - `_variables.scss`: Design tokens and variables
   - `_mixins.scss`: Reusable style patterns
   - `_functions.scss`: Computational helpers
   - `_base.scss`: Base element styling
   - `_typography.scss`: Font definitions
   - `_animations.scss`: Keyframes and transitions
   - `_themes.scss`: Theme variations
2. **MUST** import partials using index files to maintain clean imports:
   ```scss
   @import 'abstracts/index';  // Contains variables, mixins, functions
   ```
3. **MUST** use meaningful comments to explain complex styling decisions only; avoid obvious comments.

## 3. Modern Design Language & Aesthetics
1. **MUST** maintain visual hierarchy with purposeful spacing:
   ```scss
   .content-section {
     display: grid;
     gap: var(--content-spacing, 24px);
     padding-block: clamp(1.5rem, 5vw, 3rem);
   }
   ```
2. **MUST** use subtle shadows for elevation:
   ```scss
   .card {
     box-shadow: 
       0 2px 5px rgba(0,0,0,0.05), 
       0 1px 2px rgba(0,0,0,0.08);
     transition: box-shadow 0.2s ease-in-out;
     
     &:hover {
       box-shadow: 
         0 5px 15px rgba(0,0,0,0.08), 
         0 3px 5px rgba(0,0,0,0.12);
     }
   }
   ```
3. **MUST** use intentional, subtle border radii consistently:
   ```scss
   :host {
     --border-radius-sm: 4px;
     --border-radius-md: 8px;
     --border-radius-lg: 12px;
     --border-radius-pill: 9999px;
   }
   ```
4. **MUST** implement color schemes with consistent contrast ratios (4.5:1 minimum).

## 4. Modern CSS Features
1. **MUST** use CSS logical properties for internationalization:
   ```scss
   .content {
     margin-inline: auto;   // Instead of margin-left/right
     padding-block: 2rem;   // Instead of padding-top/bottom
   }
   ```
2. **MUST** use CSS Container Queries for component-based responsiveness:
   ```scss
   .card-container {
     container-type: inline-size;
     container-name: card;
   }
   
   @container card (min-width: 400px) {
     .card__content {
       display: grid;
       grid-template-columns: auto 1fr;
     }
   }
   ```
3. **MUST** use `aspect-ratio` for maintaining proportions:
   ```scss
   .image-wrapper {
     aspect-ratio: 16 / 9;
   }
   ```
4. **MUST** use `clamp()`, `min()`, `max()` for responsive values:
   ```scss
   .heading {
     font-size: clamp(1.5rem, 5vw, 2.5rem);
     line-height: 1.2;
   }
   ```

## 5. Descriptive Naming Conventions
1. **MUST** use meaningful custom property names that describe semantic purpose:
   ```scss
   :host {
     --btn-primary-bg: var(--theme-color-accent, #2196f3);
     --btn-primary-text: var(--theme-color-on-accent, #ffffff);
   }
   ```
2. **MUST** choose block/element class names that convey function:
   ```scss
   .product-card__image-gallery {}
   .user-profile__action-menu {}
   ```
3. **MUST** use specific, intention-revealing modifiers:
   ```scss
   .btn--elevated {}    // Better than .btn--style1
   .card--interactive {} // Better than .card--clickable
   ```

## 6. Strict Nested BEM Structure
1. **MUST** define a **Block** as a top-level class with descriptive name.
2. **MUST** nest Elements and Modifiers within the block using SCSS nesting:
   ```scss
   .feature-card {
     border-radius: var(--border-radius-md);
     
     &__header {
       padding: var(--spacing-md);
       
       &--highlighted {
         background-color: var(--color-accent-subtle);
       }
     }
     
     &__content {
       // content styles
     }
     
     &--featured {
       border: 2px solid var(--color-accent);
     }
   }
   ```
3. **MUST** limit nesting depth to **three levels** maximum.
4. **MUST** avoid selector chains and descendant selectors; use BEM nesting instead.

## 7. Design Token System with CSS Variables
1. **MUST** create a complete design token system:
   ```scss
   :root {
     // Colors
     --color-primary-50: #e3f2fd;
     --color-primary-100: #bbdefb;
     --color-primary-500: #2196f3;
     --color-primary-900: #0d47a1;
     
     // Semantic colors
     --color-surface: #ffffff;
     --color-on-surface: #333333;
     
     // Spacing scale
     --spacing-xs: 4px;
     --spacing-sm: 8px;
     --spacing-md: 16px;
     --spacing-lg: 24px;
     --spacing-xl: 32px;
     
     // Typography
     --font-size-body: 1rem;
     --font-size-h1: 2rem;
     --line-height-body: 1.5;
     --font-weight-normal: 400;
     --font-weight-bold: 700;
   }
   ```
2. **MUST** reference token values with CSS variables:
   ```scss
   .component {
     padding: var(--spacing-md);
     color: var(--color-on-surface);
     font-size: var(--font-size-body);
   }
   ```
3. **MUST** use semantic variable names to connect purpose to visual style:
   ```scss
   :host {
     --input-border-color: var(--color-neutral-300);
     --input-focus-border-color: var(--color-primary-500);
   }
   ```

## 8. Modern Layout Techniques
1. **MUST** use CSS Grid for two-dimensional layouts with named areas:
   ```scss
   .dashboard {
     display: grid;
     grid-template-columns: repeat(12, 1fr);
     grid-template-areas:
       "header header header header header header header header header header header header"
       "sidebar sidebar main main main main main main main main main main"
       "footer footer footer footer footer footer footer footer footer footer footer footer";
     gap: var(--spacing-lg);
     
     &__header { grid-area: header; }
     &__sidebar { grid-area: sidebar; }
     &__main { grid-area: main; }
     &__footer { grid-area: footer; }
   }
   ```
2. **MUST** use CSS Grid subgrid for alignment inheritance:
   ```scss
   .product-grid {
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
     gap: var(--spacing-lg);
     
     &__item {
       display: grid;
       grid-template-rows: auto 1fr auto;
       gap: var(--spacing-sm);
     }
   }
   ```
3. **MUST** use Flexbox for one-dimensional layouts:
   ```scss
   .action-bar {
     display: flex;
     align-items: center;
     gap: var(--spacing-md);
     
     &__spacer {
       flex: 1;
     }
   }
   ```
4. **MUST** use `gap` instead of margins for spacing between elements.

## 9. Advanced Responsive Design
1. **MUST** use a mobile-first approach with strategic breakpoints:
   ```scss
   .component {
     // Mobile styles first (default)
     
     @media (min-width: 768px) {
       // Tablet styles
     }
     
     @media (min-width: 1024px) {
       // Desktop styles
     }
   }
   ```
2. **MUST** use container queries for component-level responsiveness:
   ```scss
   .card-container {
     container-type: inline-size;
   }
   
   @container (min-width: 350px) {
     .card {
       flex-direction: row;
     }
   }
   ```
3. **MUST** use `clamp()` for fluid typography and spacing:
   ```scss
   h1 {
     font-size: clamp(2rem, 5vw + 1rem, 4rem);
     margin-block-end: clamp(1rem, 3vw, 2rem);
   }
   ```
4. **SHOULD** test layouts with variable content lengths and languages.

## 10. Accessibility Excellence
1. **MUST** respect user preferences:
   ```scss
   @media (prefers-reduced-motion: reduce) {
     * {
       transition-duration: 0.01ms !important;
       animation-duration: 0.01ms !important;
     }
   }
   
   @media (prefers-color-scheme: dark) {
     // Dark mode styles if not using classes
   }
   ```
2. **MUST** ensure focus states are clearly visible:
   ```scss
   .interactive-element:focus-visible {
     outline: 2px solid var(--color-focus);
     outline-offset: 2px;
   }
   ```
3. **MUST** provide sufficient text contrast (minimum 4.5:1 ratio):
   ```scss
   :host {
     --text-color-on-light: #333333; // 12:1 on white
     --text-color-on-dark: #f0f0f0;  // 15:1 on #121212
   }
   ```
4. **MUST** size touch targets appropriately (minimum 44×44px):
   ```scss
   .button {
     min-width: 44px;
     min-height: 44px;
     padding: var(--spacing-sm) var(--spacing-md);
   }
   ```

## 11. Beautiful Animation Principles
1. **MUST** use purposeful, subtle motion:
   ```scss
   .card {
     transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
     
     &:hover {
       transform: translateY(-4px);
       box-shadow: var(--shadow-elevated);
     }
   }
   ```
2. **MUST** animate only transform/opacity properties when possible:
   ```scss
   @keyframes fadeIn {
     from { opacity: 0; transform: translateY(10px); }
     to { opacity: 1; transform: translateY(0); }
   }
   ```
3. **MUST** use appropriate easing functions:
   ```scss
   :host {
     --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
     --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
   }
   
   .button {
     transition: all 0.2s var(--ease-out-expo);
   }
   ```
4. **MUST** sequence complex animations with appropriate timing:
   ```scss
   .menu-item {
     opacity: 0;
     transform: translateY(8px);
     animation: menuItemEnter 0.3s var(--ease-out-expo) forwards;
     
     @for $i from 1 through 10 {
       &:nth-child(#{$i}) {
         animation-delay: #{$i * 0.05}s;
       }
     }
   }
   ```

## 12. Visual Refinement Techniques
1. **MUST** use subtle gradients for depth:
   ```scss
   .card {
     background: linear-gradient(
       to bottom,
       var(--card-gradient-start),
       var(--card-gradient-end)
     );
   }
   ```
2. **MUST** apply consistent border treatments:
   ```scss
   .input {
     border: 1px solid var(--color-border);
     border-radius: var(--border-radius-sm);
     transition: border-color 0.2s ease;
     
     &:focus {
       border-color: var(--color-primary);
       box-shadow: 0 0 0 2px var(--color-primary-transparent);
     }
   }
   ```
3. **MUST** use subtle texture for depth when appropriate:
   ```scss
   .card {
     background-color: var(--color-surface);
     background-image: url("data:image/svg+xml,%3Csvg...%3E");
     background-size: 200px 200px;
     background-blend-mode: overlay;
     opacity: 0.03;
   }
   ```

## 13. Code Quality & Optimization
1. **MUST** avoid specificity wars by using flat selectors:
   ```scss
   // Avoid
   .card .card__title .title-text {}
   
   // Prefer
   .card__title-text {}
   ```
2. **MUST NOT** use `!important` except for utility classes:
   ```scss
   .u-visually-hidden {
     position: absolute !important;
     width: 1px !important;
     height: 1px !important;
     overflow: hidden !important;
   }
   ```
3. **MUST** group media queries by component, not in separate files.
4. **MUST** minimize browser repaints by animating composited properties.

## 14. Educational Pushback (Discouraged Approaches)
1. **MUST** warn against and refactor:
   - Descendant selectors that fight component encapsulation
   - CSS property values without variables
   - Magic numbers without explanation
   - Overly complex nesting (beyond 3 levels)
   - Non-semantic class names (`box1`, `left-col`)
2. **MUST** explain why patterns are discouraged and provide modern alternatives:
   ```scss
   // Discouraged:
   .sidebar {
     float: left;
     width: 300px;
   }
   
   // Preferred:
   .layout {
     display: grid;
     grid-template-columns: var(--sidebar-width) 1fr;
     gap: var(--layout-gap);
   }
   ```

## 15. Output Requirements
1. **MUST** produce code that is:
   - Properly nested using BEM
   - Based on design tokens (CSS variables)
   - Responsive with mobile-first approach
   - Accessible with proper contrast and focus states
   - Self-documenting through naming
   - Minimal with reduced specificity
2. **MUST** use progressive enhancement for modern CSS features.
3. **MUST** test output in multiple contexts (light/dark theme, mobile/desktop).
4. **MUST** ensure CSS doesn't cause layout shifts or performance issues.
