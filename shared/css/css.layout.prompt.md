# CSS Layout Generation Ruleset for AI Agents: Grid & Flexbox Mastery

**Objective:** To provide a concise ruleset for AI agents to generate *high-quality*, *responsive*, *accessible*, *performant*, and *maintainable* CSS layouts using Grid and Flexbox. Adhere to these guidelines for every layout generated.

**I. General Layout Principles (Grid & Flexbox):**

1.  **Semantic HTML First:** **ALWAYS start with semantically correct and well-structured HTML.** Use appropriate HTML elements for content structure before applying Grid or Flexbox for layout.  **Rationale:** Semantic HTML is crucial for accessibility and maintainability, providing a solid foundation for layout styling.

2.  **Choose the Right Layout Module:** **SELECT the most appropriate layout module (Grid or Flexbox) based on the *layout problem*.** Understand their core strengths (see Section III: Grid vs. Flexbox). **Rationale:** Using the right tool for the job leads to cleaner, more efficient, and semantically appropriate layouts.

3.  **Responsiveness is Paramount:** **DESIGN LAYOUTS TO BE INHERENTLY RESPONSIVE.** Use media queries, viewport units, and intrinsic sizing techniques in conjunction with Grid and Flexbox to adapt layouts across different screen sizes. **Rationale:** Ensures optimal user experience across all devices and viewport sizes, a fundamental principle of modern web design.

4.  **Accessibility Considerations Integrated:** **INTEGRATE ACCESSIBILITY CONSIDERATIONS from the outset of layout design.**  Ensure keyboard navigation, logical content order, sufficient contrast, and ARIA attributes (if needed for complex layouts) are considered alongside visual layout. **Rationale:** Accessibility is not an afterthought; it's a core design constraint for creating inclusive web experiences.

5.  **Performance-Conscious Layout:** **AIM for performant layouts.** Minimize layout complexity and over-nesting. Leverage browser layout optimizations inherent in Grid and Flexbox. **Rationale:** Efficient layouts contribute to faster page load times and smoother user interactions, especially on less powerful devices.

6.  **Maintainable & Readable Code:** **WRITE CLEAN, WELL-ORGANIZED, and COMMENTED CSS code for Grid and Flexbox layouts.** Use descriptive class names and structure your CSS logically for easy understanding and modification. **Rationale:** Maintainable code is essential for long-term project success and collaboration. Clear layouts are easier to understand and debug.

**II. Grid Layout Rules:**

7.  **Use Grid for Two-Dimensional Layouts:** **RESERVE CSS Grid for layouts that require TWO-DIMENSIONAL control - rows AND columns simultaneously.** Think page layouts, complex component grids, and designs where items need precise placement in both dimensions. **Rationale:** Grid's power lies in its two-dimensional nature. Using it for simpler one-dimensional layouts might be overkill.

8.  **Define Grid Container and Items Clearly:** **ESTABLISH a clear Grid container element (`display: grid;` or `display: inline-grid;`) and Grid items (direct children of the container).** Use Grid properties directly on the container and its immediate children. **Rationale:**  Proper container and item setup is the foundation of any Grid layout.

9.  **Utilize Grid Template Properties:** **MASTER `grid-template-rows`, `grid-template-columns`, and `grid-template-areas` for defining the Grid's structure.**  Choose the most appropriate method for your layout complexity (explicit track sizes, named areas for complex layouts, etc.). **Rationale:** These properties are the core of Grid layout definition, allowing for flexible and precise track sizing and area assignment.

10. **Leverage Grid Placement Properties:** **EMPLOY `grid-row-start`, `grid-row-end`, `grid-column-start`, `grid-column-end`, and `grid-area` to place items within the Grid.** Understand the different placement methods (line numbers, named lines, named areas, span keyword). **Rationale:** Grid placement properties provide fine-grained control over item positioning and spanning across Grid tracks.

11.  **Grid Gap for Spacing:** **USE `row-gap`, `column-gap`, and `gap` properties to define spacing between Grid tracks (rows and columns).** Avoid using margins on Grid items for inter-item spacing within a Grid layout - gaps are Grid's intended spacing mechanism. **Rationale:** Grid gaps provide a cleaner and more layout-focused way to control spacing within Grid layouts, specifically designed for track separation.

12.  **Intrinsic and Flexible Grid Sizing:** **COMBINE fixed, percentage, `fr` units, `min-content`, `max-content`, `auto`, and `minmax()` for flexible and robust Grid track sizing.**  Utilize `fr` unit for proportional track sizing, and intrinsic keywords for content-based sizing.  **Rationale:** Grid's strength lies in its flexible track sizing, allowing for content-aware and responsive layouts.

13. **Grid for Component-Level and Page Layouts:** **APPROPRIATELY use Grid for both macro-layouts (overall page structure) and micro-layouts (complex component structures).** Understand when Grid's 2D power is needed at different scales of layout complexity. **Rationale:** Grid's versatility makes it suitable for layouts ranging from entire page grids to intricate component designs.

**III. Flexbox Layout Rules:**

14. **Use Flexbox for One-Dimensional Layouts (Primarily):** **RESERVE CSS Flexbox primarily for ONE-DIMENSIONAL layouts - either in a row OR a column.** Think component layouts, navigation menus, toolbars, and scenarios where content flow in a single direction is dominant. **Rationale:** Flexbox is designed for effective distribution and alignment of items along a single axis.

15. **Define Flex Container and Items Clearly:** **ESTABLISH a clear Flex container element (`display: flex;` or `display: inline-flex;`) and Flex items (direct children of the container).**  Apply Flexbox properties to the container to control item arrangement. **Rationale:** Proper container and item setup is fundamental for Flexbox layouts.

16. **Master `flex-direction` and `flex-wrap`:** **USE `flex-direction` ( `row`, `column`, `row-reverse`, `column-reverse` ) to define the main axis direction and `flex-wrap` (`nowrap`, `wrap`, `wrap-reverse`) to control item wrapping behavior.** These are foundational for Flexbox layout control. **Rationale:** `flex-direction` and `flex-wrap` define the primary flow and multi-line behavior of Flexbox items.

17. **Utilize Flex Item Properties (`flex-grow`, `flex-shrink`, `flex-basis`, `flex`):** **LEVERAGE `flex-grow`, `flex-shrink`, and `flex-basis` (often using the `flex` shorthand) to control how Flex items grow, shrink, and size along the main axis.** Understand how these properties distribute space and handle varying content sizes. **Rationale:** Flex item properties are the core of Flexbox item distribution and responsiveness within the Flex container.

18. **Flexbox Alignment Properties for Distribution & Positioning:** **EMPLOY Flexbox alignment properties (`justify-content`, `align-items`, `align-self`, `align-content`) for distributing space between items and aligning items within the Flex container and along the cross axis.** Understand the different alignment options ( `center`, `space-between`, `flex-start`, etc.) and their effects. **Rationale:** Flexbox alignment properties control item positioning and space distribution within the Flex container, crucial for visual balance.

19. **Flexbox Gap for Spacing (Consider Browser Support):** **USE `gap`, `row-gap`, `column-gap` properties for spacing between Flex items (similar to Grid gaps).** Be mindful of older browser support for Flexbox gaps and consider fallback strategies if needed.  **Rationale:** Flexbox gaps provide a cleaner and more layout-centric approach to item spacing compared to margins on items within a Flex container.

20. **Flexbox for Component Layouts and Content Distribution:** **APPROPRIATELY use Flexbox for layout of components (navigation, cards, form elements, etc.) where primary layout concern is arranging items in a row or column and controlling their distribution and alignment.**  Recognize Flexbox's strength in content-centric layouts and distributing available space. **Rationale:** Flexbox is particularly well-suited for component-level layouts and situations where content distribution along a single axis is the main focus.

**IV. Grid vs. Flexbox: Choosing the Right Tool Rules:**

21. **Two-Dimensional vs. One-Dimensional Choice:** **ASK: Is the layout primarily two-dimensional (rows AND columns needing simultaneous control) OR one-dimensional (primarily row OR column-based flow)?** Choose Grid for 2D, Flexbox for 1D scenarios as a starting point. **Rationale:**  This is the fundamental differentiator.  Grid for complex, two-way layouts, Flexbox for simpler, linear arrangements.

22. **Content vs. Layout-Driven Design:** **CONSIDER: Is the layout driven by precise item placement in a grid-like structure (layout-driven - Grid), or is it about distributing and aligning content within a container (content-driven - Flexbox)?** Grid excels at layout-driven designs, Flexbox at content-driven flow and distribution. **Rationale:** This highlights the core philosophy of each layout module and guides selection based on design intent.

23. **Complex vs. Simpler Component Layouts:** **FOR COMPLEX PAGE LAYOUTS and component grids (dashboards, complex forms), GRID is often the more powerful and suitable choice.** FOR SIMPLER COMPONENT LAYOUTS (navigation, toolbars, cards), FLEXBOX may be sufficient and simpler to implement. **Rationale:** Grid handles complexity and 2D structures more effectively, while Flexbox is often ideal for straightforward component arrangements.

24. **Nested Layouts & Module Combination:** **RECOGNIZE that Grid and Flexbox are often USED TOGETHER – nesting Flexbox layouts within Grid areas, or vice-versa, to achieve complex and flexible designs.** Understand how to combine these modules for more elaborate layout scenarios. **Rationale:**  They are complementary, not mutually exclusive. Combining them unlocks a wider range of layout possibilities.

25. **Start Simple, Iterate, and Refine:** **BEGIN with the simplest layout approach (Flexbox if possible). Only use Grid if two-dimensional control is genuinely required.**  Iterate and refine your layout based on design complexity and responsiveness needs. **Rationale:**  Avoid over-engineering. Start with the simplest effective solution and increase complexity only when necessary.

**By consistently applying these CSS Layout Generation Rules, the AI agent will generate high-quality, responsive, accessible, performant, and maintainable layouts using CSS Grid and Flexbox, demonstrating expert-level layout design capabilities.**