# CSS Transform Generation Ruleset for AI Agents: Performance, Precision & Purpose

**Objective:** To provide a concise ruleset for AI agents to generate *high-quality*, *performant*, *accessible*, *purposeful*, and *maintainable* CSS transforms. Adhere to these guidelines for every transform implementation.

**I. Core Transform Principles & Performance Rules:**

1.  **Prioritize `transform` for Motion & Visual Effects:** **ALWAYS favor using CSS `transform` for animations, transitions, and visual effects that involve movement, scaling, rotation, or skewing elements.**  `transform` is hardware-accelerated and highly performant for these types of visual changes. **Rationale:**  `transform` leverages GPU acceleration for smooth and efficient rendering of visual transformations.

2.  **Hardware-Accelerated Properties First:** **PREFER animating `transform` and `opacity` properties whenever possible for motion effects.** These properties are often composited and hardware-accelerated, leading to smoother animations and reduced CPU load. **Rationale:** Optimizes animation performance by utilizing browser's GPU rendering pipeline.

3.  **Minimize Layout Impact:** **UNDERSTAND that `transform` (in most cases) performs visual changes *without* affecting document layout or flow.**  Changes via `transform` generally do not trigger layout reflow.  This is a key performance advantage.  **Rationale:**  Avoids performance-intensive layout recalculations caused by animating properties that directly impact document flow.

4.  **Optimize Transform Complexity:** **KEEP TRANSFORM OPERATIONS REASONABLY SIMPLE for performance, especially on mobile devices.**  Avoid overly complex or deeply nested transform chains if performance suffers. **Rationale:**  Although `transform` is performant, excessive complexity can still introduce rendering overhead, particularly on less powerful devices.

5.  **Test Transform Performance Across Devices:** **ALWAYS TEST transforms on a range of devices and browsers**, including mobile and lower-powered hardware, to ensure smooth rendering.  Profile performance if complex transforms are used. **Rationale:** Cross-device testing is crucial for validating transform performance across different rendering engines and hardware capabilities.

**II. Transform Function Usage & Precision Rules:**

6.  **Use Specific Transform Functions for Clarity:** **EMPLOY SPECIFIC TRANSFORM FUNCTIONS (`translate()`, `rotate()`, `scale()`, `skew()`) whenever possible for clear intent.** Avoid relying heavily on the more general `matrix()` function unless genuinely needed for complex matrix-based transformations. **Rationale:**  Specific functions enhance code readability and make the intended transformation easily understandable.

7.  **`translate()` for Movement:** **USE `translate(x, y)`, `translateX(x)`, or `translateY(y)` for element repositioning without layout shift.** Choose the appropriate function based on whether you need 2D translation or single-axis translation. Use units (pixels, percentages, viewport units) as required. **Rationale:** `translate` is the primary function for moving elements visually while maintaining document flow.

8.  **`rotate()` for Rotation:** **USE `rotate(angle)`, `rotateX(angle)`, `rotateY(angle)`, or `rotateZ(angle)` for element rotation.**  Specify angles in degrees (`deg`), radians (`rad`), or turns (`turn`). Use `rotateZ()` for 2D rotations (rotation in the XY plane). `rotateX()` and `rotateY()` for 3D rotations. **Rationale:** `rotate` functions enable element rotation around different axes, creating rotation effects.

9.  **`scale()` for Resizing:** **USE `scale(factor)`, `scaleX(factor)`, `scaleY(factor)`, or `scaleZ(factor)` for element scaling.** Use numerical factors (e.g., `1.2` for 120% size, `0.8` for 80% size). `scale()` scales uniformly; `scaleX`/`scaleY`/`scaleZ` for directional scaling.  `scaleZ` (while less visually apparent in 2D layouts) is relevant in 3D contexts. **Rationale:** `scale` functions control element size visually.

10. **`skew()` for Tilting:** **USE `skew(angleY, angleX)`, `skewX(angle)`, or `skewY(angle)` for skewing (tilting) elements.** Specify skew angles in degrees (`deg`). `skew()` skews in both X and Y; `skewX`/`skewY` for directional skewing.  Be mindful of readability when applying skew transformations to text. **Rationale:** `skew` functions create oblique or tilted visual effects. Use judiciously for specific design purposes.

11. **`matrix()` for Complex or Combined Transforms (Use Sparingly):** **RESERVE `matrix(a, b, c, d, tx, ty)` for complex transformations or when combining multiple transformations into a single matrix for advanced effects.** Understand matrix transformation math when using `matrix()`. For simpler cases, favor using individual `translate()`, `rotate()`, `scale()`, `skew()` functions which are easier to read and manage. **Rationale:** `matrix()` provides ultimate flexibility but can be less readable than specific transform functions. Use only when needed for intricate operations or efficiency in combining transforms.

**III. Transform Properties & Context Rules:**

12. **`transform-origin` for Control Point Adjustment:** **USE `transform-origin: x-offset y-offset z-offset;` to CONTROL the point around which transformations are applied.**  Understand that `transform-origin` defaults to the center of the element (`50% 50%`). Adjust `transform-origin` for specific rotation points, scaling origins, or translation behaviors. Use keywords ( `top`, `bottom`, `left`, `right`, `center` ) or pixel/percentage values for offsets. **Rationale:** `transform-origin` is crucial for controlling the *pivot point* of transformations, significantly impacting the visual effect of `rotate()`, `scale()`, and some `translate()` operations.

13. **`transform-style: preserve-3d;` for 3D Space:** **USE `transform-style: preserve-3d;` on parent elements to ENABLE 3D transformations on child elements.** Without `preserve-3d`, nested 3D transforms will flatten. Be mindful of performance implications of excessive 3D rendering, especially on mobile. **Rationale:** `transform-style: preserve-3d;` is necessary to create hierarchical 3D transformations and allow children to exist in 3D space relative to their parent.

14. **`perspective` for 3D Depth:** **USE `perspective: length;` on parent elements to ESTABLISH a 3D perspective viewport for child elements with 3D transforms (e.g., `rotateX`, `rotateY`, `rotateZ`, `translateZ`, `perspective()`).**  `perspective` value sets the distance from the viewer to the Z=0 plane, affecting the depth of 3D effects. Experiment with different `perspective` values. **Rationale:** `perspective` creates the illusion of depth and 3D space for transformed elements, making 3D rotations and translations visually meaningful in a 2D browser context.

15. **`backface-visibility: hidden;` for Backface Culling (3D Rotations):** **USE `backface-visibility: hidden;` on elements undergoing 3D rotations (especially `rotateY` or `rotateX`) to HIDE the back face of the element when it rotates away from the viewer.**  This avoids visual artifacts and improves rendering performance for 3D rotations. **Rationale:** `backface-visibility: hidden;` is often essential for clean 3D rotation effects, preventing the reversed back side of an element from being visible when rotated.

16. **`perspective()` Transform Function (for Element-Level Perspective):** **USE `perspective(length)` as a *transform function* (e.g., `transform: perspective(500px) rotateY(45deg);`) on individual elements to apply perspective directly to *that element only* and its children, without affecting sibling elements.** This differs from setting `perspective` as a property on the parent container, which affects all descendants. **Rationale:** `perspective()` as a transform function provides more localized perspective control, applicable to specific elements and their children without altering the perspective of other parts of the layout.

**IV. Accessibility & Purpose Rules:**

17. **Purposeful Transforms Enhance User Experience:** **ENSURE all `transform` usage is PURPOSEFUL and ENHANCES USER EXPERIENCE (UI feedback, visual hierarchy, subtle motion).** Avoid purely decorative or excessive transformations that are distracting or unnecessary.  **Rationale:** Transforms should improve usability and visual communication, not just be eye-catching animations without function.

18. **Subtle Transforms for UI Feedback (Micro-interactions):** For UI interactions and micro-interactions, **FAVOR SUBTLE and REFINED `transform` effects.** Small, quick transformations are often more effective and less distracting for user feedback.  **Rationale:** Subtlety in UI transforms makes interactions feel responsive and polished without being overwhelming.

19. **Accessibility Considerations (Motion & `prefers-reduced-motion`):** **INTEGRATE `transform`-based animations and transitions with accessibility considerations, particularly `prefers-reduced-motion` media query (as covered in Animation Rules).** Disable motion for users who prefer reduced motion.  Ensure interactive elements remain keyboard accessible despite transforms. **Rationale:** Accessibility guidelines for motion and animations apply directly to CSS transforms used for motion effects.

20. **Avoid Transform-Based Layout Hacks (Unless Necessary):** **AVOID using `transform` as a layout hack to solve basic layout problems that are better addressed with Flexbox, Grid, or standard CSS layout properties.** `transform` is primarily for visual transformations, not as a general layout tool. Use layout modules for layout tasks. **Rationale:** Overusing `transform` for layout purposes can lead to less semantic and potentially less maintainable CSS. Utilize layout modules for layout needs, and `transform` for visual effects on top of layouts.

**V. Code Quality & Maintainability Rules:**

21. **Group Related Transforms:** **GROUP related `transform` functions within a single `transform` property value for readability and efficiency.**  `transform: translateX(20px) rotate(15deg) scale(1.1);` (Example of combined transforms). **Rationale:**  Combining transforms in one property improves code conciseness and is often more performant than separate transform rules.

22. **Use CSS Variables for Reusable Transform Values:** **LEVERAGE CSS VARIABLES to manage reusable transform values (e.g., animation distances, rotation angles, scale factors).** This simplifies theming and consistent transform usage. **Rationale:**  CSS variables promote consistency and simplify adjustments to transform values across a project.

23. **Comment Complex Transforms (Especially `matrix()`):** **COMMENT CSS code for complex transform operations, especially when using `matrix()` or less immediately obvious transform combinations.** Explain the intended visual effect and purpose of complex transforms. **Rationale:** Clear comments are essential for understanding and maintaining complex transform code, especially `matrix()` transformations which are not always intuitively readable.

24. **Transform Origin Documentation:** **DOCUMENT the `transform-origin` if it is not the default center point.** Explain why a specific `transform-origin` is chosen if it's crucial to the visual effect (e.g., "Rotation origin set to bottom center for hinge-like effect"). **Rationale:**  `transform-origin` significantly alters transform behavior; documenting non-default origins improves code understandability.
