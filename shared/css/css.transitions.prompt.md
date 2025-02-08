# CSS Transition Generation Ruleset for AI Agents: Smoothness, Responsiveness & Best Practices

**Objective:** To provide a concise ruleset for AI agents to generate *high-quality*, *performant*, *accessible*, *user-centric*, and *maintainable* CSS transitions. Adhere to these guidelines for every transition implementation.

**I. Core Transition Principles & Performance Rules:**

1.  **Use Transitions for State Changes & UI Feedback:** **PRIMARILY use CSS Transitions to smoothly animate changes between *distinct states* of an element or for subtle *UI feedback* on user interactions (like hover, focus, active states).** Transitions are ideal for making UI feel more responsive and visually refined on state changes. **Rationale:** Transitions excel at animating state-based visual changes, enhancing user interaction and visual clarity.

2.  **Hardware-Accelerated Properties (Transitions & Animations):** **FAVOR transitioning `transform` and `opacity` properties for optimal performance.** Like animations, transitioning these properties leverages GPU acceleration for smoother rendering. **Rationale:** Prioritize hardware-accelerated properties for transition performance, minimizing CPU load and maximizing smoothness.

3.  **Minimize Layout Shifts During Transitions:** **AVOID transitioning properties that cause layout reflow (e.g., `width`, `height`, `margin`, `padding`, `position` in most cases) if performance is critical, especially on complex layouts or mobile devices.** If layout changes are necessary, consider if `transform`-based techniques can achieve a visually similar effect with better performance. **Rationale:**  Layout reflows are performance bottlenecks. Minimize layout changes during transitions to maintain smoothness.

4.  **Keep Transition Durations Short & Purposeful:** **USE SHORT, PURPOSEFUL TRANSITION DURATIONS (typically under 1 second, often much shorter for micro-interactions).** Avoid excessively long transitions that can feel sluggish or delay user interaction. Transitions should be quick and responsive. **Rationale:** Short durations make UI feel snappier and more responsive, enhancing user experience.

5.  **Test Transition Performance Across Devices:** **ALWAYS TEST transitions on a range of devices and browsers**, especially mobile devices, to ensure they are smooth and performant across different hardware capabilities. **Rationale:** Cross-device testing is essential to validate transition performance across different rendering environments.

**II. Transition Property & Timing Rules:**

6.  **Specify `transition-property` Clearly:** **EXPLICITLY define the CSS properties you intend to transition using `transition-property`.**  List specific properties (e.g., `transition-property: opacity, transform, background-color;`) or use `transition-property: all;` (use with caution for performance – better to list specific properties). **Rationale:** Explicitly listing transitioned properties improves code clarity and performance (avoids accidentally transitioning unintended properties with `all`).

7.  **Define `transition-duration` - Always Required:** **ALWAYS set `transition-duration` to specify the length of the transition effect.**  Use time units (seconds `s` or milliseconds `ms`). Duration is *required* for a transition to occur. **Rationale:** `transition-duration` is the core parameter controlling the timing of the transition effect.

8.  **Utilize `transition-timing-function` for Easing (Smoothness):** **EMPLOY `transition-timing-function` to control the easing curve of the transition.** Choose appropriate easing functions (keywords like `ease`, `ease-in-out`, `ease-out`, `ease-in`, `linear`, or custom `cubic-bezier()`) to create desired motion styles. (Refer to Animation Easing Rules for timing function best practices). **Rationale:** Easing functions are crucial for creating smooth and natural-feeling transitions.

9.  **`transition-delay` for Staggered or Delayed Transitions:** **USE `transition-delay` to add a delay *before* the transition effect starts.**  Useful for creating staggered transitions or timed effects triggered after an event. **Rationale:** `transition-delay` adds temporal control to transitions, enabling sequenced or delayed effects.

10. **`transition` Shorthand Property for Conciseness:** **UTILIZE the `transition` shorthand property for combining `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay` into a single, more concise rule.** `transition: property duration timing-function delay;` **Rationale:** Shorthand `transition` property makes transition definitions more compact and readable when setting multiple transition parameters together.

**III. State-Based Transitions & Triggering Rules:**

11. **Define Transitions in Base Styles or States (Not Trigger States):** **DEFINE `transition` properties within the *base styles* of an element or in the *default state* rulesets, NOT directly within the `:hover`, `:focus`, `:active` or other *trigger state* rulesets.** This ensures transitions are applied *when entering AND exiting* states. **Rationale:** Placing `transition` in base styles ensures smooth transitions both *to* and *from* a state change, creating a more polished and consistent user experience.

12. **Trigger Transitions with Pseudo-classes or JavaScript:** **TRIGGER transitions by changing element states using CSS pseudo-classes (`:hover`, `:focus`, `:active`, `:checked`, etc.) OR by dynamically adding/removing CSS classes or inline styles via JavaScript.** Transitions automatically activate when the transitioned CSS property value changes due to these state changes or class/style modifications. **Rationale:** Transitions are inherently state-driven. Pseudo-classes and JavaScript provide the mechanisms to trigger state changes that initiate the defined transitions.

13. **State Changes Should be Clear and Purposeful:** **ENSURE the STATE CHANGES that trigger transitions are CLEAR, PURPOSEFUL, and USER-INITIATED (or clearly system-initiated).** Avoid transitions triggered by obscure or unintended state changes. **Rationale:** Transitions should enhance UI clarity and feedback on user interactions or system events, not occur unexpectedly or confusingly.

**IV. Accessibility & Purpose Rules for Transitions:**

14. **Subtle Transitions for UI Enhancement (Accessibility Focus):** **FAVOR SUBTLE and REFINED TRANSITIONS for UI enhancement, especially for accessibility.** Use transitions to provide gentle visual feedback, improve visual hierarchy, and make interactions feel more polished without being distracting. **Rationale:** Transitions should enhance accessibility and usability, not detract from them. Subtlety is often key to accessible motion.

15. **Respect `prefers-reduced-motion` (Accessibility):** **INTEGRATE transitions with accessibility considerations, especially `prefers-reduced-motion` media query (as with Animations).** Disable transitions or reduce their intensity for users who prefer reduced motion. **Rationale:**  Accessibility for motion preferences applies to both animations and transitions. Users should have control over motion effects.

16. **Meaningful Transitions Enhance User Understanding:** **ENSURE transitions are MEANINGFUL and enhance user understanding of UI changes.** Transitions should visually connect states and make UI transformations more comprehensible. **Rationale:** Transitions should contribute to clarity and user comprehension, not just be decorative effects.

17. **Avoid Transitions for Critical Information Delivery (Use Alternatives):** **AVOID relying *solely* on transitions to convey critical information or instructions.** Transitions are visual enhancements, but important information should be accessible even without CSS or for users who prefer reduced motion. Provide alternative, non-motion based cues if essential information is associated with a transition. **Rationale:** Accessibility principle: critical information should not be solely dependent on visual motion effects.

**V. Code Quality & Maintainability Rules:**

18. **Define Transitions Close to Base Styles:** **DEFINE `transition` properties in close proximity to the *base styles* of the element or in a dedicated "transitions" section of your CSS for organizational clarity.** This makes it easy to see which elements have transitions applied and how they are configured. **Rationale:** Proximity and clear organization improve code readability and maintainability of transition definitions.

19. **Use CSS Variables for Reusable Transition Values:** **LEVERAGE CSS VARIABLES to manage reusable transition durations, easing curves, or transitioned properties.** This promotes consistency and simplifies adjustments to transitions across a project. **Rationale:** CSS variables enhance consistency and simplify theming or adjustments of transition timings and easing functions.

20. **Comment Complex or Non-Obvious Transitions:** **COMMENT CSS code for transitions that are not immediately obvious in their purpose or configuration (e.g., less common easing curves, longer delays, transitions on less frequently transitioned properties).** Explain the intended visual effect and rationale behind specific transition choices. **Rationale:** Clear comments are essential for code maintainability, especially for less conventional transition setups.

21. **Consistent Transition Language Across Project:** **STRIVE for a CONSISTENT "transition language" or style across your project.**  Use similar easing curves, duration ranges, and transitioned properties for similar types of UI elements and interactions to create a visually cohesive and predictable experience. **Rationale:** Consistent transition styling contributes to a polished and professional visual identity for a website or application.
