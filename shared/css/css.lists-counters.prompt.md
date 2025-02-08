# CSS List & Counter Generation Ruleset for AI Agents: Semantic & Stylistic Mastery

**Objective:** To provide a concise ruleset for AI agents to generate *semantically correct*, *accessible*, *stylistically appropriate*, and *maintainable* CSS lists and counters. Adhere to these guidelines for every list and counter implementation.

**I. Semantic HTML List Structure Rules:**

1.  **Choose the Right List Element:** **ALWAYS SELECT the semantically appropriate HTML list element:**
    *   **`<ul>` (Unordered List):** Use for lists where item order *does not* matter (bulleted lists, navigation menus, lists of links, etc.).
    *   **`<ol>` (Ordered List):** Use for lists where item order *is* significant (numbered lists, steps in a process, rankings, etc.).
    *   **`<dl>` (Description List):** Use for lists of terms and their descriptions (glossaries, metadata lists). **DO NOT use `<dl>` for simple bulleted/numbered lists - that's semantically incorrect.** **Rationale:** Semantic HTML provides structure and meaning to lists, crucial for accessibility and SEO. Choosing the correct list element is the first step towards semantic correctness.

2.  **Proper List Item Nesting:** **ENSURE correct nesting of list items:**
    *   `<ul>` and `<ol>` **MUST** contain only `<li>` (list item) elements as direct children.
    *   `<dl>` **MUST** contain `<dt>` (description term) and `<dd>` (description detail) pairs, and potentially grouped within `<div`> elements.
    *   Nesting lists *within* list items (`<li>`) is allowed and semantically correct for hierarchical lists (sub-menus, nested lists). **Rationale:** Correct nesting ensures valid HTML structure, crucial for browser rendering and assistive technology interpretation.

3.  **Meaningful List Content within `<li>`, `<dt>`, `<dd>`:** **PLACE the actual list *content* DIRECTLY within `<li>` elements for `<ul>` and `<ol>`, and within `<dt>` and `<dd>` for `<dl>`.** Avoid adding unnecessary wrapper `<div>` or `<span>` elements *inside* list item elements unless semantically justified (e.g., for specific content grouping within a list item). **Rationale:** Keeping content directly within list item elements keeps the HTML semantic structure clear and simplifies CSS styling.

**II. Accessibility Rules for Lists:**

4.  **Semantic List Structure for Screen Readers:** **RELY on semantic HTML list structure (`<ul>`, `<ol>`, `<dl>`, `<li>`, `<dt>`, `<dd>`) to convey list information to screen readers.** Screen readers understand and announce list structure based on these elements. **Rationale:** Semantic HTML is the primary way to make list content accessible to users who rely on screen readers.

5.  **Logical List Item Order (Ordered Lists):** For `<ol>` (ordered lists), **ENSURE the order of `<li>` elements is logically meaningful.** Screen readers will announce list item numbers in the order they appear in the HTML. **Rationale:**  Order matters in `<ol>` lists for sequential content. Logical ordering ensures screen reader users receive information in the intended sequence.

6.  **Description Lists for Term-Definition Pairs:** **USE `<dl>` CORRECTLY for term-definition pairs.**  `<dt>` should contain the term, and `<dd>` should contain its description. This semantic association is crucial for screen reader interpretation of description lists. **Rationale:** `<dl>` structure is specifically designed for screen readers to understand term-definition relationships, making glossaries and similar content accessible.

7.  **Avoid Layout-Abuse of Lists:** **DO NOT use `<ul>` or `<ol>` solely for layout purposes if the content is not semantically a list of items.**  For purely visual layouts, use `<div>` elements and layout modules like Flexbox or Grid instead. **Rationale:** Misusing list elements for layout devalues their semantic meaning and can confuse assistive technologies, harming accessibility.

**III. Basic CSS List Styling Rules:**

8.  **Control List Markers with `list-style-type`:** **USE `list-style-type` to customize bullet points or numbering styles for `<ul>` and `<ol>` lists.**  Explore standard values ( `disc`, `circle`, `square`, `decimal`, `lower-alpha`, `upper-roman`, etc.) and choose styles appropriate for the context. **Rationale:** `list-style-type` provides easy control over basic list marker styles, enhancing visual presentation without compromising semantics.

9.  **`list-style-position` for Marker Placement:** **UTILIZE `list-style-position` to control whether list markers are inside (`inside`) or outside (`outside`) the list item content box.** `outside` (default) is typically preferred for text-heavy lists to avoid marker overlap. **Rationale:** `list-style-position` influences list item layout and visual alignment, affecting readability.

10. **`list-style-image` for Custom Bullet Images:** **USE `list-style-image` to replace default bullet points with custom images for `<ul>` lists.** Provide clear, visually distinct, and relevant images if using custom bullets.  **Rationale:** `list-style-image` allows for visually branded or more decorative bullet points.

11. **Remove Default List Styling when Needed:** **USE `list-style: none;` to REMOVE default bullet points or numbers when styling lists as navigation menus or other non-traditional list presentations.** When removing markers, ensure you provide alternative visual cues for list items if they are interactive (e.g., for navigation). **Rationale:** Removing default list styles allows for more design flexibility in cases where standard list markers are not desired visually, but always maintain accessibility if interactive lists are involved.

12. **Consistent List Spacing & Padding:** **APPLY consistent `padding` and `margin` to `<ul>`, `<ol>`, and `<li>` elements to control list spacing and visual rhythm.** Adjust these values to suit the overall design and content density. **Rationale:** Consistent spacing improves list readability and visual harmony within the layout.

**IV. Advanced CSS Counter Rules (for Ordered Lists and Beyond):**

13. **CSS Counters for Ordered Lists - Implicit & Customizable:** **UNDERSTAND that `<ol>` elements *implicitly* use CSS counters named "list-item".** You can access and style these default counters using `counter()` in `::marker` pseudo-element for `<li>` in `<ol>`. **Rationale:** `<ol>` default numbering is inherently based on CSS counters, allowing for customization beyond basic `list-style-type`.

14. **`counter-reset` for Counter Initialization:** **USE `counter-reset: <counter-name> <initial-value>;` to *create* and *reset* CSS counters.**  Typically, reset counters on the parent list element (`<ol>` or `<ul>` if creating custom numbered lists with `<ul>`).  Initial value defaults to `0` if not specified. **Rationale:** `counter-reset` sets up the counter, defining its name and starting point.

15. **`counter-increment` for Counter Progression:** **USE `counter-increment: <counter-name> <increment-value>;` to *increment* the counter value.**  Usually increment on list items (`<li>`). Increment value defaults to `1` if not specified.  Negative values can decrement counters. **Rationale:** `counter-increment` dictates how the counter value changes for each list item, driving the numbering/lettering sequence.

16. **`counter()` and `counters()` for Displaying Counter Values:** **USE `counter(<counter-name>, <list-style-type>)` function within `::marker` (for list markers) or `::before`/`::after` (for generated content) to *display* the current value of a CSS counter.**  `counters()` function is used for nested lists to display hierarchical counter strings (e.g., "1.2.1"). **Rationale:** `counter()` and `counters()` are the functions that *output* the current counter value for visual representation in CSS generated content or list markers. `list-style-type` in `counter()` allows styling the counter *format* (decimal, alpha, roman, etc.).

17. **Custom Counter Styling with `::marker`:** **PREFER styling list markers for `<ol>` and custom numbered `<ul>` lists using the `::marker` pseudo-element for list items.**  `::marker` is designed specifically for styling list markers and offers improved control.  Use `counter()` within `::marker` to display counter values. **Rationale:** `::marker` is the modern, dedicated way to style list markers, providing more specific and optimized styling for these visual elements.

18. **Counters Beyond Lists - For Numbering Sections & Content:** **UTILIZE CSS counters *beyond* just ordered lists.** You can use counters to number sections, steps in a process, figures, or any content where sequential numbering is desired, even outside of semantic list elements.  Apply `counter-reset`, `counter-increment`, and `counter()` in `::before` or `::after` of relevant elements (e.g., section headings, figure captions). **Rationale:** CSS counters are a powerful tool for general content numbering and sequencing, not just limited to HTML lists.

**V. Style & Maintainability Rules for Lists & Counters:**

19. **Consistent List Styling Across Website:** **MAINTAIN CONSISTENT list styling throughout your website or application.** Define base styles for `<ul>`, `<ol>`, and `<dl>` to create a visually unified list presentation. Use CSS variables to manage reusable list styling values (marker color, spacing, font styles, etc.). **Rationale:** Consistent styling enhances visual harmony and brand identity across a website.

20. **Contextual List Style Variations (Use Classes):** **USE CSS CLASSES to create *variations* in list styles for specific contexts (e.g., navigation menus, numbered steps, ingredient lists).**  Avoid overly generic selectors that might unintentionally style lists in unwanted contexts.  Apply specific classes to lists requiring unique styles. **Rationale:** CSS classes provide targeted styling, allowing for diverse list presentations while maintaining overall style consistency and avoiding unintended style conflicts.

21. **Comment Custom Counter Implementations:** **COMMENT CSS code for any *custom* counter implementations (beyond basic ordered lists).** Explain the purpose of counters, how they are incremented and displayed, and any specific styling considerations. **Rationale:**  Clear comments improve code understanding and maintainability, especially for less common or more complex CSS counter setups.

22. **Test List Rendering and Accessibility:** **ALWAYS TEST lists across different browsers and devices to ensure consistent visual rendering.** **TEST list accessibility with screen readers to verify semantic structure is correctly interpreted.** **Rationale:** Cross-browser testing ensures lists are rendered correctly visually. Accessibility testing confirms lists are usable for all users, especially those using assistive technologies.
