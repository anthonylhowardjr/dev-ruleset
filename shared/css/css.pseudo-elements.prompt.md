# Pseudo-elements - Concise Guide & Best Practices

## a) Content & Decoration Pseudo-elements:

### `::before`

1.  **Definition:** Creates a virtual element *before* element content. Requires `content` property.
2.  **When to Use It:**
    *   Decorative elements: icons, shapes.
    *   Adding prefixes or symbols.
    *   Visual separators.
3.  **Best Practices:**
    *   **Accessibility:** Decorative content; not crucial info (use ARIA if needed). Don't use for structural content.
    *   **Specificity:** Moderate.
    *   **Maintainability:** Keep content simple; for decoration primarily.

### `::after`

1.  **Definition:** Creates a virtual element *after* element content. Requires `content` property.
2.  **When to Use It:**
    *   Decorative elements: icons, shapes.
    *   Adding suffixes or symbols.
    *   Visual separators, clear floats.
3.  **Best Practices:**
    *   **Accessibility:** Decorative content, same as `::before`.
    *   **Specificity:** Moderate.
    *   **Maintainability:** Keep content simple; for decoration primarily.

### `::first-letter`

1.  **Definition:** Styles the first letter of the first line of a block-level element's text.
2.  **When to Use It:**
    *   Initial caps for paragraphs.
    *   Typographic emphasis on first letter.
3.  **Best Practices:**
    *   **Readability:**  Use for subtle typographic effects; avoid overdoing it.
    *   **Specificity:** Moderate.
    *   **Context:** Primarily block-level elements.

### `::first-line`

1.  **Definition:** Styles the first line of text in a block-level element.
2.  **When to Use It:**
    *   Dropped caps effect (in combination with `::first-letter`).
    *   Subtle typographic emphasis on first line.
3.  **Best Practices:**
    *   **Readability:** Subtle effects; ensure readability remains.
    *   **Specificity:** Moderate.
    *   **Context:** Block-level elements.

### `::marker`

1.  **Definition:** Styles the marker box of list items, `<summary>`, etc. (bullet points, numbers).
2.  **When to Use It:**
    *   Custom list bullet points or numbers.
    *   Styling disclosure triangles for `<summary>`.
3.  **Best Practices:**
    *   **Accessibility:** Ensure marker remains visually clear and distinguishable.
    *   **Specificity:** Moderate.
    *   **Keep Simple:** For basic marker styling.

### `::placeholder`

1.  **Definition:** Styles placeholder text in form inputs.
2.  **When to Use It:**
    *   Customizing placeholder text appearance.
    *   Subtle styling to differentiate placeholder text.
3.  **Best Practices:**
    *   **Accessibility:** Ensure placeholder text contrast is sufficient. Don't rely on placeholders as labels.
    *   **Specificity:**  Moderate (use vendor prefixes for older browsers if needed).
    *   **Subtlety:** Keep placeholder styles subtle.

### `::selection`

1.  **Definition:** Styles text selected/highlighted by the user.
2.  **When to Use It:**
    *   Branding - custom selection colors.
    *   Improved readability of selected text (contrast).
3.  **Best Practices:**
    *   **Accessibility:** Ensure sufficient contrast between selection background and text colors.
    *   **Specificity:**  Moderate (browser defaults are often easily overridden).
    *   **Subtlety or Branding:** Balance branding with readability.

### `::backdrop`

1.  **Definition:** Styles the backdrop behind fullscreen elements (modals, dialogs).
2.  **When to Use It:**
    *   Styling modal/dialog backgrounds.
    *   Creating visual separation for fullscreen content.
3.  **Best Practices:**
    *   **Accessibility:** Ensure backdrop doesn't obscure content or cause contrast issues.
    *   **Specificity:**  Generally applies to root-level backdrops; moderate specificity within that context.
    *   **Subtlety or Emphasis:**  Control backdrop opacity for desired effect.

### `::grammar-error`

1.  **Definition:** Styles grammar errors marked by the browser (experimental).
2.  **When to Use It:**
    *   Customizing grammar error appearance.
    *   Consistent error styling (with caveat of browser support).
3.  **Best Practices:**
    *   **Experimental:** Browser support is not universal. Use cautiously.
    *   **Accessibility:** Ensure error indicators are still clear, even with custom styling.
    *   **Specificity:** Moderate.

### `::spelling-error`

1.  **Definition:** Styles spelling errors marked by the browser (experimental).
2.  **When to Use It:**
    *   Customizing spelling error appearance.
    *   Consistent error styling (browser support caveat).
3.  **Best Practices:**
    *   **Experimental:** Browser support not universal. Use cautiously.
    *   **Accessibility:** Ensure error indicators are still clear, even with custom styling.
    *   **Specificity:** Moderate.

### `::highlight(range-name)`

1.  **Definition:** Styles programmatically highlighted text ranges (CSS Text Decoration Level 4).
2.  **When to Use It:**
    *   Programmatically highlighting search terms, specific phrases via JavaScript.
    *   Dynamic text emphasis based on JavaScript logic.
3.  **Best Practices:**
    *   **Newer Feature:** Check browser support.
    *   **JavaScript Integration:** Requires JavaScript API to define highlight ranges.
    *   **Accessibility:** Ensure highlight contrast; maintain text readability.

### b) Input & Form Control Pseudo-elements:

### `::file-selector-button`

1.  **Definition:** Styles the button part of `<input type="file">` elements.
2.  **When to Use It:**
    *   Customizing "Browse" or "Choose File" button appearance.
    *   Consistent styling across file input buttons.
3.  **Best Practices:**
    *   **Accessibility:** Ensure button remains recognizable as interactive.
    *   **Specificity:** Moderate to target button specifically.
    *   **Consistency:** Style consistently with other buttons if applicable.

### c) Shadow DOM & Component Pseudo-elements:

### `::part(part-name)`

1.  **Definition:** Styles specific parts of a web component, exposed via `part` attribute in Shadow DOM.
2.  **When to Use It:**
    *   Styling specific elements *within* a web component *from outside* the Shadow DOM.
    *   Component theming and customization.
3.  **Best Practices:**
    *   **Web Components:** Primarily for web component styling.
    *   **Encapsulation:**  Respects Shadow DOM boundaries; controlled external styling.
    *   **Naming Conventions:** Use clear, semantic `part` names in component design.

### `::slotted(selector)`

1.  **Definition:** Styles elements slotted into a web component's `<slot>` in Shadow DOM.
2.  **When to Use It:**
    *   Styling content *projected into* a web component from outside.
    *   Adapting slotted content style within component's Shadow DOM.
3.  **Best Practices:**
    *   **Web Components:** For web component styling; targeting slotted content.
    *   **Encapsulation:** Styles only *slotted* content; not component's internal parts unless slotted.
    *   **Selector Specificity:**  Be aware of selector context within Shadow DOM.
