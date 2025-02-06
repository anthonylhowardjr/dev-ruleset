# CSS Skills

This document outlines the expected CSS skills for software engineers.

## Core Concepts

- **Selectors:** Understanding and utilizing various CSS selectors (e.g., element, class, ID, attribute, pseudo-classes, pseudo-elements).
- **Specificity:**  Knowing how CSS specificity rules determine which styles are applied.
- **Box Model:**  Comprehending the CSS box model (content, padding, border, margin) and how it affects layout.
- **Layout:** Implementing different layout techniques (e.g., Flexbox, Grid, floats, positioning).

## Intermediate Skills

- **Responsive Design:** Creating layouts that adapt to different screen sizes using media queries.
- **CSS Variables (Custom Properties):**  Using CSS variables for theming and maintainability.
- **Animations and Transitions:**  Implementing smooth visual effects using CSS transitions and animations.
- **Preprocessors (Sass/SCSS):**  Leveraging preprocessors for enhanced CSS development (variables, mixins, functions, nesting).

## Advanced Skills

- **Performance Optimization:**  Writing efficient CSS to minimize rendering time and improve website performance.
- **Accessibility:**  Ensuring CSS contributes to accessible web experiences.
- **Architecture and Maintainability:**  Structuring CSS in a scalable and maintainable way (e.g., BEM, OOCSS).
- **Troubleshooting:**  Debugging CSS issues effectively using browser developer tools.

## Additional Information

Important: Must use CSS methodologies like BEM (Block Element Modifier) or OOCSS (Object-Oriented CSS) to maintain scalable and maintainable CSS codebases.

Important: Must use meaningful class names and avoid inline styles to enhance code readability and maintainability.

Important: Must follow best practices for CSS performance optimization, such as minimizing the use of `!important`, reducing unnecessary specificity, and avoiding inefficient selectors.

Important: Must understand the importance of responsive design and be able to create responsive layouts using media queries and other techniques.

Important: In Angular, use the :host selector to apply styles to the component's host element.

Important: In Angular, do not use ::ng-deep or /deep/ to style child components, as these are deprecated and may be removed in the future.

Important: In Angular, use ViewEncapsulation.None with caution, as it can lead to style leakage and conflicts.

Important: In SCSS, reduce duplication by using css variables for colors, font sizes, and other common values.

Important: In SCSS, reduce duplication by using mixins for reusable styles, such as vendor prefixes or complex property combinations.

Important: In SCSS, use nesting sparingly to avoid overly specific selectors and improve maintainability.

Important: In SCSS, use functions for complex calculations or repetitive logic to enhance code readability and maintainability.

Important: In SCSS, reduce duplication by using placeholders for common styles that can be extended by other selectors.

Important: Don't use !important unless absolutely necessary, as it can lead to specificity issues and make styles harder to override.

Important: Avoid using inline styles, as they can make it difficult to maintain and update styles across the codebase.

Important: Use pseudo-elements (::before, ::after) for decorative elements or additional content that is not part of the HTML structure.

Important: Use pseudo-classes (:hover, :focus, :active) to style elements based on user interaction or state changes.

Important: Use pseudo-classes (:first-child, :last-child) to target specific elements within a parent container.

Important: Use pseudo-classes :nth-child(), :nth-of-type(), :not() to target elements based on their position or attributes.

Important: Use pseudo-classes :checked, :disabled, :valid, :invalid to style form elements based on their state.
