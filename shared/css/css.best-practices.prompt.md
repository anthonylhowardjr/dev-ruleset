# CSS Best Practices

## Guidelines

### 1. Core Concepts
- **Selectors:**  
  You must always understand and utilize various CSS selectors:
  - **Element selectors:** Target HTML elements directly.
  - **Class selectors:** Use classes to apply reusable styles.
  - **ID selectors:** Use IDs sparingly due to high specificity.
  - **Attribute selectors:** Style elements based on attributes.
  - **Pseudo-classes:** Always use pseudo-classes (e.g., `:hover`, `:focus`) for interactive states.
  - **Pseudo-elements:** Always use pseudo-elements (e.g., `::before`, `::after`) for decorative purposes and additional content.

- **Specificity:**  
  You must always know how CSS specificity rules work. Avoid conflicts by:
  - Using the least specific selectors necessary.
  - Reducing over-qualification and avoiding inline styles unless absolutely necessary.

- **Box Model:**  
  You must always comprehend the CSS box model (content, padding, border, margin) and understand its effect on layout and spacing.

- **Layout:**  
  You must always implement modern layout techniques:
  - **Flexbox:** For one-dimensional layouts.
  - **CSS Grid:** For two-dimensional layouts.
  - **Floats and positioning:** Only when appropriate.
  - Always choose the layout method that provides the best performance and clarity.

### 2. Intermediate Skills
- **Responsive Design:**  
  You must always create layouts that adapt to various screen sizes using media queries and flexible units (e.g., rem, vw). Ensure that responsive design is central to your code.

- **CSS Variables (Custom Properties):**  
  You must always use CSS variables to manage themes and maintain consistency. They must be used for colors, font sizes, spacing, and other common values.

- **Animations and Transitions:**  
  You must always implement smooth visual effects using CSS transitions and animations. Understand keyframes, easing functions, and leverage hardware acceleration when possible.

- **Preprocessors (Sass/SCSS):**  
  You must always leverage Sass/SCSS to enhance CSS development by using:
  - Variables for centralizing design values.
  - Mixins for reusable code snippets (e.g., vendor prefixes, complex property groups).
  - Functions for complex calculations.
  - Nesting should be used sparingly to avoid overly specific selectors.

### 3. Advanced Skills
- **Performance Optimization:**  
  You must always write efficient CSS that minimizes rendering time:
  - Minimize the use of `!important`.
  - Reduce unnecessary specificity.
  - Always use efficient selectors to avoid triggering expensive layout recalculations.

- **Accessibility:**  
  You must always ensure CSS contributes to accessible web experiences:
  - Use high contrast and scalable units.
  - Avoid layout shifts that can confuse screen readers.
  - Always define clear focus styles for interactive elements.

- **Architecture and Maintainability:**  
  You must always structure your CSS for scalability:
  - Follow methodologies like BEM, OOCSS, or SMACSS.
  - Always use meaningful class names and avoid inline styles.
  - Organize your code into logical sections (layout, typography, components, utilities).

- **Troubleshooting:**  
  You must always debug CSS issues effectively using browser developer tools. Understand and resolve common issues like cascading problems, specificity conflicts, and layout shifts.

### 4. Additional Information
- **Methodologies:**  
  You must always use established CSS methodologies (BEM, OOCSS) to maintain a scalable codebase.

- **Naming and Structure:**  
  You must always use meaningful class names. Avoid inline styles to ensure maintainability and readability.

- **Performance Best Practices:**  
  You must always:
  - Minimize the use of `!important`.
  - Reduce unnecessary specificity.
  - Use efficient selectors to optimize rendering performance.

- **Responsive Design:**  
  You must always implement responsive layouts using media queries, flexible units, and CSS variables.

- **Angular Specifics:**  
  When working with Angular:
  - You must use the `:host` selector to style the component's host element.
  - You must never use deprecated selectors such as `::ng-deep` or `/deep/`.
  - Use `ViewEncapsulation.None` only with caution to prevent style leakage.

- **SCSS Best Practices:**  
  You must always:
  - Reduce duplication by using CSS variables for common values.
  - Use mixins for reusable styles.
  - Use functions for repetitive logic.
  - Use placeholders for common styles that can be extended.
  - Nest only when necessary to avoid deep, overly specific selectors.

- **Pseudo-elements and Pseudo-classes:**  
  You must always:
  - Use pseudo-elements (`::before`, `::after`) for decorative content.
  - Use pseudo-classes (`:hover`, `:focus`, `:active`) for interactive styling.
  - Use structural pseudo-classes (`:first-child`, `:last-child`, `:nth-child()`, `:nth-of-type()`, `:not()`) for targeted styling.
  - Always style form elements based on state using pseudo-classes like `:checked`, `:disabled`, `:valid`, and `:invalid`.
