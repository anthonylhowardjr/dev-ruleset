# GitHub Copilot Custom Instructions

## General Practices

- **Write Clean Code:** Ensure code is clean, maintainable, and efficient to facilitate easy understanding and future modifications.
- **Descriptive Naming:** Use descriptive and clear variable, function, and class names to enhance readability and comprehension.
- **Minimal Comments:** Avoid adding code comments unless necessary to explain complex workflows. Strive for self-explanatory code through clear structure and naming.
- **Favor Composition Over Inheritance:** Promote flexibility and reduce coupling by using composition instead of inheritance.
- **Single Responsibility Principle:** Ensure each module or class has one, and only one, reason to change, promoting modularity and ease of maintenance.
- **Open/Closed Principle:** Design modules that are open for extension but closed for modification, allowing new functionality without altering existing code.
- **Low Cyclomatic Complexity:** Aim for low cyclomatic complexity in functions and methods to enhance readability and maintainability.
- **Testable Code:** Ensure all code is testable, facilitating robust unit testing and integration testing.

## TypeScript

- **Enable Strict Type-Checking:** Set `"strict": true` in `tsconfig.json` for comprehensive type-checking.
- **Avoid `any` Type:** Use precise types or generics instead of the `any` type to maintain type safety.
- **Explicit Typing:** Always specify return types for functions and types for parameters to enhance clarity and maintainability.
- **Interface Naming Conventions:**
  - Prefix interfaces with an uppercase 'I' (e.g., `IUser`).
  - Suffix interface files with `.interface.ts` (e.g., `user.interface.ts`).
- **Leverage ES6 Features:** Utilize arrow functions, modules, and destructuring for cleaner and more modern code.
- **Consistent Naming Conventions:** Maintain uniform naming conventions for variables, functions, and classes to ensure readability.
- **Import Management:** Regularly organize and remove unused imports to keep the codebase tidy.
- **Encapsulation with Private Fields:** Use hard private fields (prefixed with `#`) in classes to enforce encapsulation.
- **Immutability:**
  - **Default Immutability:** Treat objects, arguments, and data structures as immutable by default.
  - **Readonly Parameters:** Mark function arguments as `readonly` where possible to prevent mutations.
  - **Deep Immutability:** Apply `readonly` recursively to nested objects and arrays to enforce deep immutability.
  - **Readonly Return Types:** Use `readonly` for return types when the returned data should remain unmodified.
- **Reactive Programming:**
  - **Prefer Signals:** Favor signals over observables for reactive patterns.
  - **Manage Observables:** Use async pipes or proper unsubscription techniques (e.g., `takeUntil` with a `Subject`) to manage observables effectively.
- **Documentation:**
  - **JSDoc Comments:** Document methods and functions using JSDoc for clarity on purpose, parameters, and return values.
  - **Self-Explanatory Code:** Write clear and self-explanatory code to minimize the need for logic comments.
- **Generics:** Utilize generics to enhance code reusability and type safety across components, functions, and classes.

## Angular

- **File Separation:** Keep HTML, SCSS, and TypeScript in separate files to maintain a clear separation of concerns.
- **Self-Closing Tags:** Use self-closing tags for Angular components without content to reduce markup verbosity.
- **Semantic HTML:** Prefer semantic HTML elements over `<div>` tags; use `<div>` sparingly to enhance readability and accessibility.
- **Accessibility Best Practices:**
  - Incorporate appropriate ARIA attributes and roles.
  - Ensure keyboard navigability and screen reader compatibility.
- **Organized Code Structure:** Maintain a clean and well-organized code structure adhering to the latest Angular coding standards.
- **Logic Separation:** Keep complex logic out of HTML templates; use TypeScript to handle logic, promoting maintainability and testability.
- **Performance Enhancements:**
  - **Lazy Loading:** Favor lazy loading for modules and components to enhance performance by reducing initial load times.
  - **Deferred Rendering:** Implement deferred rendering to dynamically inject presentations, improving responsiveness.
  - **Change Detection Strategy:** Use the `OnPush` change detection strategy where possible to optimize performance by minimizing unnecessary checks.
  - **Optimized Data Handling:** Make the code as performant as possible by avoiding redundant operations and optimizing data handling.
- **Advanced Configurations:** Utilize advanced Angular configurations for building applications, leveraging features like environment-specific settings and build optimizations.
- **Dependency Management:**
  - Scope dependencies at the component level or appropriately.
  - Avoid providing services in the root unless necessary to prevent unnecessary memory usage.
- **Signal Inputs:** Use signal inputs for components to manage data flow efficiently and reactively.
- **Access Modifiers:** Prefer `protected` access modifiers over `public` where applicable to encapsulate component internals.
- **Avoid Using IDs in Templates:** Refrain from creating IDs on elements to prevent potential conflicts and promote reusable components. Use classes or Angular's template references instead.
- **Appropriate ARIA Attributes and Roles**: Incorporate necessary ARIA attributes and roles to enhance accessibility.
- **Avoid Redundant ARIA Roles**: Do not add ARIA roles to semantic HTML elements that already imply them.

## CSS and SCSS Practices

- **Utilize Latest Features:** Leverage the latest CSS and SCSS features to write clean, maintainable, and efficient styles.
- **SCSS Nesting:** Use SCSS nesting judiciously to organize styles logically and reduce redundancy without over-nesting, which can lead to specificity issues. Aim for a maximum nesting depth of 3 levels.
- **Style Encapsulation in Angular:**
  - In Angular applications, place style variables within the `:host` block of the component's CSS to encapsulate styles effectively.
  - Example:
    ```scss
    :host {
      --color-primary: #3498db;
      --spacing-large: 16px;
    }
    ```
- **CSS Variables:** Use CSS variables for shared properties like colors, spacing, and typography instead of hard-coded values. Define these variables within `:host` to ensure encapsulation and reusability.
- **Descriptive Color Naming:**
  - Name all colors descriptively (e.g., `--color-primary`, `--color-secondary`).
  - Define colors as variables when using hex codes or other formats to maintain consistency and ease of updates.
- **Grouped Variables:** Organize variables by category (e.g., colors, spacing, typography) for better organization and maintainability.
- **BEM Naming Convention:**
  - Organize styles using the BEM (Block Element Modifier) naming convention to enhance readability and maintainability.
  - Example:
    ```scss
    .block {
      &__element {
        &--modifier {
          // styles
        }
      }
    }
    ```
- **Performance Optimization:**
  - **Efficient Selectors:** Avoid unnecessary selectors and reduce specificity to optimize performance and prevent style conflicts.
  - **Optimized Properties:** Use efficient CSS properties that minimize rendering overhead and promote smoother performance.
- **Reusable Styles:**
  - **%Placeholders:** Define extendable styles using `%placeholders` in SCSS for reuse across components, adhering to DRY (Don't Repeat Yourself) principles.
    ```scss
    %button-base {
      padding: var(--spacing-medium);
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    ```
  - **Mixins and Functions:** Utilize SCSS mixins and functions to create reusable snippets of code for common styling patterns.
    ```scss
    @mixin flex-center {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    ```
- **Style Redundancy Elimination:** Combine styles where possible to eliminate redundancy and maintain cleanliness.
- **Avoid Code Comments:** Refrain from adding code comments within CSS and SCSS files; rely on clear naming conventions and structured code to convey intent.
- **Consistent Structure:** Maintain a consistent and logical structure in stylesheets to enhance readability and maintainability.
- **Responsive Design:**
  - **Media Queries:** Implement responsive design principles using media queries to ensure styles adapt seamlessly across different screen sizes and devices.
  - **Mobile-First Approach:** Adopt a mobile-first strategy, designing styles for smaller screens before scaling up to larger devices.
- **Accessibility:**
  - **Color Contrast:** Ensure sufficient color contrast between text and backgrounds.
  - **Focus Indicators:** Provide clear focus indicators for interactive elements to enhance keyboard navigation.
  - **Visually Hidden Content:** Use techniques to include content for screen readers without displaying it visually.
- **Modular Stylesheets:**
  - **Break Down Stylesheets:** Break down large stylesheets into smaller, modular files (e.g., `_variables.scss`, `_mixins.scss`, `_components.scss`) and import them as needed to enhance maintainability and scalability.
  - **Logical Directory Structure:** Organize modular files in a logical directory structure (e.g., `styles/`, `styles/components/`, `styles/layout/`) for streamlined access and management.

## Code Review Guidelines

- **Purpose of Code Reviews:**

  - **Improve Codebase Health:** Ensure each code change enhances the overall health and quality of the codebase.
  - **Balance Quality and Progress:** Maintain a balance between enforcing code quality and allowing developers to make timely progress.

- **Key Review Aspects:**

  - **Design:** Assess the soundness of the code's design and its integration with the existing system.
  - **Functionality:** Verify that the code behaves as intended and meets user requirements.
  - **Complexity:** Ensure the code remains as simple as possible, avoiding unnecessary complexity.
  - **Tests:** Confirm that the code is adequately tested with reliable and meaningful tests.
  - **Naming:** Check that all names are descriptive, clear, and adhere to the project's naming conventions.
  - **Comments:** Ensure comments are clear, necessary, and provide valuable insights without cluttering the code.
  - **Style:** Verify that the code adheres to the project's style guidelines for consistency and readability.

- **Review Speed:**

  - **Timely Feedback:** Provide prompt reviews to maintain team productivity and momentum.
  - **Impact on Quality:** Recognize that swift reviews contribute to higher code quality and enhance developer satisfaction.

- **Providing Feedback:**

  - **Focus on the Code:** Address the code itself rather than the individual who wrote it.
  - **Constructive Suggestions:** Offer specific, actionable suggestions for improvement.
    - _Example:_ Instead of saying "This function is bad," say "Consider breaking this function into smaller, more focused functions to enhance readability."
  - **Respectful Tone:** Maintain a respectful and collaborative tone to foster a positive review environment.

- **Handling Disagreements:**

  - **Open Discussions:** Be open to discussions and consider the developer's perspective during disagreements.
  - **Advocate for Improvements:** Support changes that enhance code health with clear and logical explanations.
  - **Seek Consensus:** Aim for consensus, understanding that improving code health is a gradual and collaborative process.

- **Types of Changes:**
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semi-colons, etc.)
- `refactor`: Code refactoring without adding features or fixing bugs
- `perf`: Performance improvements
- `test`: Adding or modifying tests
- `chore`: Maintenance tasks (e.g., dependencies, build scripts)

- **Guidelines:**
- **Subject Line:**

  - Combine type, scope, and a brief description.
  - Use imperative mood (e.g., "Add" not "Added").
  - Limit to 50 characters.
  - Capitalize the first letter.
  - No period at the end.
  - **Example:** `feat(auth): add JWT authentication`

- **Body (Optional):**

  - Separate from the subject with a blank line.
  - Explain the "what" and "why" of changes, not the "how."
  - Wrap at 72 characters.
  - Use informal yet technical language.
  - Include context and background information.
  - **Example:**

    ```
    Added JWT authentication to enhance security for user sessions.

    This allows users to authenticate using JSON Web Tokens, providing a more secure and scalable solution compared to traditional session-based authentication.
    ```

- **Breaking Changes (If applicable):**

  - Start this section with "BREAKING CHANGE:"
  - Explain the breaking change, its impact, and migration steps.
  - **Example:**
    ```
    BREAKING CHANGE: Removed support for OAuth1. Users must migrate to OAuth2.
    ```

- **Footer (Optional):**
  - Reference related issues or pull requests.
  - Use keywords like "Fixes", "Closes", or "Relates to."
  - **Example:** `Fixes #123` or `Closes PR #456`
