# CSS Skills

This document outlines the expected CSS skills for software engineers. It is designed to serve as a comprehensive guide for writing scalable, maintainable, and performance-optimized CSS. These practices are applicable to any modern web development project, including Angular applications.

## 1. Core Concepts

- **Selectors:**  
  Understand and utilize various CSS selectors, including:
  - Element selectors
  - Class selectors
  - ID selectors
  - Attribute selectors
  - Pseudo-classes (e.g., `:hover`, `:focus`)
  - Pseudo-elements (e.g., `::before`, `::after`)

- **Specificity:**  
  Know how CSS specificity rules determine which styles are applied. This includes understanding the weight of selectors and avoiding conflicts.

- **Box Model:**  
  Comprehend the CSS box model (content, padding, border, margin) and how it affects layout and spacing.

- **Layout:**  
  Implement different layout techniques such as:
  - Flexbox
  - CSS Grid
  - Floats and positioning
  - Other modern layout techniques

---

## 2. Intermediate Skills

- **Responsive Design:**  
  Create layouts that adapt to different screen sizes using media queries and flexible units (e.g., rem, vw).

- **CSS Variables (Custom Properties):**  
  Use CSS variables to manage themes and ensure maintainability across your codebase.

- **Animations and Transitions:**  
  Implement smooth visual effects using CSS transitions and animations. Understand keyframes, easing functions, and hardware acceleration.

- **Preprocessors (Sass/SCSS):**  
  Leverage preprocessors to enhance CSS development by using:
  - Variables
  - Mixins
  - Functions
  - Nesting (used sparingly to avoid overly specific selectors)

---

## 3. Advanced Skills

- **Performance Optimization:**  
  Write efficient CSS to minimize rendering time and improve website performance. Best practices include:
  - Minimizing the use of `!important`
  - Reducing unnecessary specificity
  - Avoiding inefficient selectors that trigger expensive layout recalculations

- **Accessibility:**  
  Ensure CSS contributes to accessible web experiences by:
  - Using high contrast and scalable units
  - Avoiding layout shifts that can confuse screen readers
  - Ensuring that focus styles are clear and consistent

- **Architecture and Maintainability:**  
  Structure CSS in a scalable and maintainable way using methodologies such as:
  - BEM (Block Element Modifier)
  - OOCSS (Object-Oriented CSS)
  - SMACSS (Scalable and Modular Architecture for CSS)
  
  Use meaningful class names and avoid inline styles to enhance code readability.

- **Troubleshooting:**  
  Debug CSS issues effectively using browser developer tools. Understand common pitfalls such as cascading issues, specificity conflicts, and layout shifts.

---

## 4. Additional Information

- **Methodologies:**  
  Must use CSS methodologies like BEM or OOCSS to maintain scalable and maintainable codebases.

- **Naming and Structure:**  
  Use meaningful class names and avoid inline styles to ensure code readability and maintainability.

- **Performance Best Practices:**  
  - Minimize the use of `!important`.
  - Reduce unnecessary specificity.
  - Use efficient selectors.
  
- **Responsive Design:**  
  Understand and implement responsive layouts using media queries and other techniques.

- **Angular Specifics:**  
  - **:host Selector:** Use the `:host` selector in Angular to apply styles to a component's host element.
  - **Avoid Deprecated Selectors:** Do not use `::ng-deep` or `/deep/` for styling child components; these are deprecated.
  - **ViewEncapsulation:** Use `ViewEncapsulation.None` only with caution, as it can lead to style leakage.
  
- **SCSS Best Practices:**  
  - Reduce duplication by using CSS variables for colors, font sizes, and other common values.
  - Use mixins for reusable styles (e.g., vendor prefixes, complex property combinations).
  - Use nesting sparingly to avoid overly specific selectors.
  - Use functions for complex calculations or repetitive logic.
  - Use placeholders for common styles that can be extended by other selectors.

- **Pseudo-elements and Pseudo-classes:**  
  - Use pseudo-elements (`::before`, `::after`) for decorative elements or additional content.
  - Use pseudo-classes (`:hover`, `:focus`, `:active`) for styling based on user interactions.
  - Use structural pseudo-classes (`:first-child`, `:last-child`, `:nth-child()`, `:nth-of-type()`, `:not()`) for targeted styling.
  - Style form elements based on their state using pseudo-classes like `:checked`, `:disabled`, `:valid`, and `:invalid`.

---

## 5. Reflective Questions

1. **Selectors and Specificity:**  
   How does understanding CSS specificity help you manage conflicting styles in your projects? Can you give an example where specificity issues were resolved by reorganizing selectors?

2. **Responsive Design:**  
   What strategies do you use to create responsive layouts? How do CSS variables and media queries contribute to maintainable responsive design?

3. **Performance Optimization:**  
   How do you optimize CSS for performance, and what techniques do you use to minimize rendering time (e.g., efficient selectors, reducing use of `!important`)?

4. **CSS Architecture:**  
   Which CSS methodologies (e.g., BEM, OOCSS) have you implemented in your projects, and what benefits have they provided in terms of scalability and maintainability?

5. **SCSS Practices:**  
   How do mixins, functions, and placeholders in SCSS reduce duplication and improve code readability? Can you describe a scenario where these techniques saved you time during maintenance?
