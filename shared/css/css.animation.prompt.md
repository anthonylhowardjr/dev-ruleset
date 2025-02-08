# CSS Animation Generation Ruleset for AI Agents: Quality & Best Practices

**Objective:** To provide a concise ruleset for AI agents to generate *high-quality*, *performant*, *accessible*, and *user-centric* CSS animations. Adhere to these guidelines for every animation generated.

**I. Performance & Efficiency Rules:**

1.  **Prioritize `transform` and `opacity`:** **ALWAYS** favor animating `transform` properties (e.g., `translate`, `scale`, `rotate`) and `opacity` over layout-triggering properties. These are hardware-accelerated and significantly more performant. **Rationale:**  Ensures smooth animations, especially on lower-powered devices.

2.  **Minimize Layout Shifts & Repaints:** **AVOID** animating properties that cause layout reflow (e.g., `width`, `height`, `margin`, `padding`, `position` in most cases). If layout changes are necessary, explore `transform` alternatives or less frequent adjustments. **Rationale:** Prevents performance bottlenecks and jank by reducing browser layout recalculations.

3.  **Judicious `will-change` Usage (Expert Level):** **USE `will-change` SPARINGLY and ONLY when profiling identifies a clear performance benefit.** Target specific `transform` or `opacity` properties for elements that are about to be animated intensely. **Rationale:** Avoids potential memory overhead and relies on modern browser optimization unless profiling indicates a need. Overuse is detrimental.

4.  **Optimize Animation Complexity:**  **KEEP ANIMATIONS REASONABLY SIMPLE, especially for mobile.** Avoid excessively long durations or overly intricate animations if performance becomes an issue. **Rationale:** Simpler animations often translate to smoother performance and better user experience, especially on resource-constrained devices.

5.  **Test Performance Across Devices:** **ALWAYS TEST animations on a range of devices and browsers**, including mobile and lower-powered hardware.  Profile animation performance using browser developer tools. **Rationale:** Ensures animations are performant and smooth for a wider audience, not just on development machines.

**II. Accessibility Rules:**

6.  **Implement `prefers-reduced-motion` ALWAYS:** **ALWAYS** include a `@media (prefers-reduced-motion: reduce)` block to disable animations and transitions for users who have specified this preference in their operating system. Use `animation: none !important;` and `transition: none !important;` to ensure disabling. **Rationale:**  Crucial for respecting user preferences and making websites accessible to users with vestibular disorders, motion sensitivity, or cognitive load concerns.

7.  **Avoid Flashing & Strobing:** **NEVER GENERATE animations with rapid flashing or strobing effects.** **Rationale:**  These patterns can trigger seizures in photosensitive individuals and are a severe accessibility violation.

8.  **Reasonable Animation Duration & Motion:** **KEEP ANIMATION DURATIONS MODERATE and MOTION SMOOTH.**  Avoid extremely short or excessively long animations that can be disorienting. Favor gradual, eased motion. **Rationale:**  Reduces cognitive load and avoids potentially jarring or uncomfortable experiences for users.

9.  **Meaningful & Purposeful Animation:** **ENSURE ALL animations are MEANINGFUL and SERVE A CLEAR PURPOSE** to enhance user experience (UI feedback, guidance, visual hierarchy). **AVOID purely decorative animations that are distracting or confusing.**  **Rationale:** Animations should improve usability, not detract from it. Decorative animations can be accessibility barriers and unnecessary distractions.

10. **Keyboard Accessibility Preservation:** **ENSURE animations NEVER interfere with keyboard navigation or focus states.** Interactive elements that are animated must remain fully keyboard accessible.  **Rationale:** Keyboard accessibility is fundamental. Animations must not break or hinder keyboard interaction.

**III. Design & User Experience Rules:**

11. **Master Easing for Natural Motion:** **UTILIZE `animation-timing-function` and `cubic-bezier()` EXTENSIVELY to create natural, engaging, and appropriate motion.** Avoid `linear` easing in most cases, as it often feels robotic. **Rationale:** Easing significantly impacts the perceived quality and feel of animations.  Expert easing makes animations more polished and user-friendly.

12. **Use Subtle Animations for UI Feedback:** For UI feedback and micro-interactions, **FAVOR SUBTLE and REFINED ANIMATIONS.**  Small, quick animations are often more effective and less distracting than large or elaborate ones. **Rationale:** Subtlety in UI feedback keeps the user interface clean and focused.

13. **Animation Storytelling & Visual Hierarchy (When Appropriate):** For decorative or onboarding animations (use sparingly and with accessibility in mind), **CONSIDER how animation can contribute to visual storytelling and guide user attention.** But prioritize clarity and purpose over excessive visual flair. **Rationale:** Animation can be a powerful communication tool when used intentionally and thoughtfully.

14. **Contextual Animation Relevance:**  **ENSURE animations are CONTEXTUALLY RELEVANT to the element and its function.**  Animation style should align with the UI element's purpose and overall design language. **Rationale:** Incongruous or inappropriate animations can be jarring and unprofessional.

**IV. Code Quality & Maintainability Rules:**

15. **Organize `@keyframes` and Animation Styles Logically:** **GROUP `@keyframes` rules and related animation styles together in your CSS.** Use clear and descriptive names for `@keyframes` and classes. **Rationale:** Improves code readability, maintainability, and makes it easier to manage animations within stylesheets.

16. **Utilize CSS Variables for Reusability:** **LEVERAGE CSS VARIABLES to manage animation durations, easing curves, colors, or other animation parameters that might be reused or themed.** **Rationale:**  Promotes consistency and simplifies animation adjustments and theming across projects.

17. **Comment Complex Animations:** **COMMENT CSS code for complex animations, particularly for custom `cubic-bezier()` easing functions or multi-step keyframe animations.** Explain the animation's purpose and key design decisions. **Rationale:**  Improves code understanding and maintainability for other developers (or future AI iterations).

18. **Consider JavaScript for Advanced Interaction (When Needed):** **USE JavaScript for DYNAMIC CONTROL over animations and for complex interactive scenarios** (e.g., triggering animations based on user actions, data changes, or sequencing animations). Rely on CSS Animations for core animation logic and performance. **Rationale:**  Balances the strengths of CSS Animations for performance and JavaScript for dynamic control, using each tool where it excels. Avoid overusing JavaScript when CSS-only solutions are sufficient.

**By diligently following these CSS Animation Generation Rules, the AI agent will produce high-quality animations that are performant, accessible, user-friendly, and well-structured, embodying expert-level CSS animation practices.**