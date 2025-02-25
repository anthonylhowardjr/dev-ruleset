# AI CSS/SCSS Ruleset (Nested BEM, Angular, Advanced Pseudos)

## 1. Angular-Specific & Scoped Styling
1. **MUST** define all custom properties (design tokens) in `:host { ... }`.
2. **MUST** apply theme/environment overrides via `:host-context(.DarkMode)` (or other theme classes).
3. **MUST NOT** use deprecated `::ng-deep` or `/deep/`.
4. **MUST** keep each component’s SCSS self-contained, with no style leakage.

## 2. Maintainability & File Organization
1. **MUST** adopt partials (e.g., `_variables.scss`, `_themes.scss`, `_mixins.scss`) to avoid duplication.
2. **MUST** unify repeated code (colors, layouts) in partials or mixins.
3. **MUST** produce minimal comments; rely on naming for clarity.
4. **MUST** ensure code is self-documenting with explicit names and minimal nesting.

## 3. Descriptive Naming Conventions
1. **MUST** use meaningful custom property names (e.g., `--theme-color-background`) that describe usage.
2. **MUST** choose block/element class names that convey function (e.g., `.checkout-form__input-row`).
3. **MUST** avoid unnecessary abbreviations (`.pg-elm`) unless widely recognized.
4. **SHOULD** reflect domain purpose in naming, so code is self-explanatory.

## 4. Strict Nested BEM Structure
1. **MUST** define a **Block** as a top-level class (e.g., `.component-block`).  
2. **MUST** nest Elements and Modifiers within the block, e.g.:
   ```scss
   .component-block {
     &__element {
       // element styles
       &--modifier {
         // modifier styles for that element
       }
     }
   }
   ```
3. **MUST** limit nesting depth to **three levels**.  
4. **MUST** keep block-level styling in the outer scope, element-level in nested scopes, and modifiers within elements.

## 5. CSS Variables for Theming
1. **MUST** store repeated values in `:host` as custom properties (e.g., `--theme-gap-column`).
2. **MUST** reference them with `var(--theme-gap-column)` instead of SCSS `$` variables for repeated values.
3. **MUST** override them in `:host-context(...)` for different themes (e.g., `.DarkMode`).
4. **SHOULD** name them clearly (e.g., `--theme-color-accent`, `--theme-spacing-sm`).

## 6. Performance & Accessibility
1. **MUST** respect `@media (prefers-reduced-motion: reduce)` for transitions/animations.
2. **MUST** preserve WCAG contrast in all themes.
3. **MUST** define focus states (`:focus`, `:focus-visible`) with clear visuals.
4. **SHOULD** test in multiple browsers/devices and older environments if relevant.

## 7. Grid & Flex Layout
1. **MUST** use **Grid** for two-dimensional layouts; **Flex** for single-axis.
2. **MUST** rely on `gap` (var-based) for spacing instead of repeated margins.
3. **SHOULD** adopt a mobile-first approach with `@media (min-width: ...)`.
4. **MUST** unify layout logic in partials if repeated across components.

## 8. Advanced Pseudo-Classes & Pseudo-Elements
1. **MUST** handle user interaction states (`:hover`, `:focus-visible`, `:active`, etc.) and form states (`:disabled`, `:checked`).
2. **MUST** seek to use advanced pseudo-classes (`:focus-within`, `:has()`) if widely supported and beneficial.
3. **MUST** utilize advanced pseudo-elements (`::marker`, `::selection`) for refined visuals when relevant.
4. **SHOULD** ensure cross-browser fallback or gracefully degrade if advanced features are not supported.

## 9. Lists & Counters
1. **MUST** use `<ul>`, `<ol>`, `<dl>` only for semantic lists.
2. **SHOULD** customize marker style (`list-style-type`, `::marker`) or counters for advanced numbering.
3. **MUST** preserve semantic meaning (e.g., don’t remove bullets unless replaced).
4. **SHOULD** unify repeated list styling in partials.

## 10. Animations & Transitions
1. **MUST** animate only hardware-accelerated properties (`transform`, `opacity`) when possible.
2. **MUST** avoid strobing or purely decorative effects that distract or cause user discomfort.
3. **SHOULD** keep transitions around 0.2s–0.5s, use easing (`ease`, `cubic-bezier`) for smoothness.
4. **MAY** store repeated keyframes in `_animations.scss` if multiple components share them.

## 11. Transforms
1. **MUST** prefer `translate()`, `rotate()`, `scale()`, `skew()` over `matrix()` unless truly needed.
2. **MAY** employ 3D transforms (`perspective`, `transform-style: preserve-3d;`) with thorough testing on mobile.
3. **SHOULD** define `transform-origin` if not centered.
4. **MUST** avoid deeply nested 3D transforms for performance reasons.

## 12. At-Rules & Imports
1. **MUST** keep `@media` queries near related base styles or a dedicated responsive file.
2. **SHOULD** use `@supports` for progressive enhancement with fallback outside.
3. **SHOULD** keep `@font-face` in a fonts or global SCSS file.
4. **MUST** maintain ordering: Imports → Variables → Mixins → Base → Components → Utilities → Media queries.

## 13. Duplication Avoidance
1. **MUST** unify repeated color sets, layouts, or animations in partials or mixins.
2. **MUST** never replicate the same SCSS block across different files; reference a single source partial.
3. **SHOULD** store repeated animations in `_animations.scss`.
4. **MAY** create SCSS mixins/functions for repeated logic (like `@mixin center-flex { ... }`).

## 14. Educational Pushback (Discouraged Approaches)
1. **MUST** warn if user attempts:
   - Over-nesting beyond 3 levels
   - Using `!important` without solid justification
   - Hardcoding repeated numeric values
   - Misusing semantic tags (`<ul>` for layout)
   - Adding unhelpful or excessive comments
2. **MUST** explain **why** it’s discouraged and propose a nested BEM or variable-based alternative.
3. **SHOULD** provide a concise, improved example for clarity.

## 15. Enforced Refactoring & Output
1. **MUST** **reformat and refactor** code to:
   - Use **nested BEM** as shown in Section 4
   - MUST Employ CSS variables from `:host` (and overrides in `:host-context`)
   - Always reduce duplication by introducing CSS variables
   - Maintain minimal nesting, minimal/no comments, and descriptive naming
   - Possibly integrate advanced pseudo-classes/elements
2. **MUST** pass lint checks (e.g., stylelint).
3. **SHOULD** test final SCSS in multiple theme contexts (`.DarkMode`, `.HighContrast`, etc.).
4. **MUST** produce code easily extended to new themes or states, consistent with nested BEM.
