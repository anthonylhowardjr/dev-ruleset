# CSS Pseudo-classes and Pseudo-elements: Concise Guide & Best Practices

## Part 1: Pseudo-classes - Concise Guide & Best Practices

Pseudo-classes style elements based on state or position, indicated by `:`.

---

### a) User Action & State Pseudo-classes:

#### `:hover`

1.  **Definition:** Styles element when the user's pointer is over it.
2.  **When to Use It:**
    *   Interactive feedback for links, buttons.
    *   Reveal tooltips/sub-menus.
    *   Subtle visual enhancements on interaction.
3.  **Best Practices:**
    *   **Specificity:** Keep low.
    *   **Accessibility:** Pair with `:focus` for keyboard users; ensure sufficient contrast.
    *   **Performance:** Keep simple to avoid jank.

#### `:active`

1.  **Definition:** Styles element during active interaction (e.g., mouse click down).
2.  **When to Use It:**
    *   Click/tap feedback on buttons/links.
    *   Button "depress" effects.
    *   Visual confirmation of interaction.
3.  **Best Practices:**
    *   **Specificity:** Keep low.
    *   **Accessibility:** Ensure sufficient contrast.
    *   **Performance:** Keep simple.

#### `:focus`

1.  **Definition:** Styles element with keyboard focus.
2.  **When to Use It:**
    *   Keyboard navigation indication.
    *   Form field highlighting on focus.
    *   Accessibility for keyboard users.
3.  **Best Practices:**
    *   **Specificity:** Moderate.
    *   **Accessibility:** *Essential* for keyboard users; clear, high-contrast indicators.
    *   **Performance:** Minimal impact.

#### `:focus-visible`

1.  **Definition:** Styles focus only when visually indicated by browser (typically keyboard focus).
2.  **When to Use It:**
    *   Refined focus styling; focus outlines only when needed (keyboard).
    *   Improved aesthetics by hiding focus on mouse clicks.
    *   Context-aware focus.
3.  **Best Practices:**
    *   **Specificity:** Similar to `:focus`.
    *   **Accessibility:** Use as refinement, ensure clear keyboard focus indication is *always* present (via `:focus-visible` or `:focus`).

#### `:focus-within`

1.  **Definition:** Styles element if it or its descendants have focus.
2.  **When to Use It:**
    *   Highlighting form sections when inputs are focused.
    *   Menu highlighting while submenu is active.
    *   Container-level focus indication.
3.  **Best Practices:**
    *   **Specificity:** Be mindful of cascade.
    *   **Accessibility:** Complementary to `:focus`, not a replacement. Ensure focused element *also* has `:focus` styles.

#### `:visited`

1.  **Definition:** Styles visited `<a>` links (limited styling due to privacy).
2.  **When to Use It:**
    *   Differentiating visited links visually.
    *   Historical context within navigation.
3.  **Best Practices:**
    *   **Specificity:** Low, target `a:visited`.
    *   **Accessibility:**  Highly limited styling options (privacy); ensure contrast.

#### `:link`

1.  **Definition:** Styles unvisited `<a>` links.
2.  **When to Use It:**
    *   Styling default link appearance.
    *   Establishing link visual identity.
3.  **Best Practices:**
    *   **Specificity:** Base level, `a:link`.
    *   **Accessibility:** Clear visual distinction for links; prioritize color contrast and consider underlines.

#### `:target`

1.  **Definition:** Styles element whose ID matches URL fragment (#).
2.  **When to Use It:**
    *   Deep linking emphasis.
    *   On-page navigation cues.
    *   SPA section highlighting.
3.  **Best Practices:**
    *   **Specificity:** Moderate.
    *   **Accessibility:** Subtle but noticeable highlighting.

---

### b) Structural Pseudo-classes:

#### `:first-child`

1.  **Definition:** First child element of parent.
2.  **When to Use It:**
    *   First list item styling.
    *   First table row styling.
3.  **Best Practices:**
    *   **Specificity:** Element/class selectors.
    *   **Accessibility:** Visual enhancement.

#### `:last-child`

1.  **Definition:** Last child element of parent.
2.  **When to Use It:**
    *   Last list item styling.
    *   Form spacing adjustments.
    *   Layout adjustments for last items.
3.  **Best Practices:**
    *   **Specificity:** Element/class selectors.
    *   **Accessibility:** Visual enhancement.

#### `:nth-child(n)`

1.  **Definition:** Elements based on position (formula `n`).
2.  **When to Use It:**
    *   Table row striping.
    *   List item striping.
    *   Grid patterning.
3.  **Best Practices:**
    *   **Specificity:** Element/class selectors; keep formulas simple.
    *   **Accessibility:** Visual patterns for readability, not essential info.

#### `:nth-last-child(n)`

1.  **Definition:** Like `:nth-child`, but counts from the end.
2.  **When to Use It:**
    *   Styling items from list end.
    *   Styling table bottom rows.
3.  **Best Practices:**
    *   **Specificity:** Similar to `:nth-child`.
    *   **Accessibility:** Visual enhancement.

#### `:first-of-type`

1.  **Definition:** First element of a specific type among siblings.
2.  **When to Use It:**
    *   First paragraph styling in container.
    *   First image styling in section.
3.  **Best Practices:**
    *   **Specificity:** Element/class selectors.
    *   **Accessibility:** Visual enhancement.

#### `:last-of-type`

1.  **Definition:** Last element of a specific type among siblings.
2.  **When to Use It:**
    *   Last paragraph in section.
    *   Last image in container.
3.  **Best Practices:**
    *   **Specificity:** Similar to `:first-of-type`.
    *   **Accessibility:** Visual enhancement.

#### `:nth-of-type(n)`

1.  **Definition:** Elements of type, based on type position (formula `n`).
2.  **When to Use It:**
    *   Paragraph striping (by type).
    *   Patterned type-specific styling.
3.  **Best Practices:**
    *   **Specificity:** Element type selectors.
    *   **Accessibility:** Visual enhancement.

#### `:nth-last-of-type(n)`

1.  **Definition:** Like `:nth-of-type`, counts from end of same-type siblings.
2.  **When to Use It:**
    *   Last paragraphs by type.
    *   Type-specific styling from end.
3.  **Best Practices:**
    *   **Specificity:** Similar to `:nth-of-type`.
    *   **Accessibility:** Visual enhancement.

#### `:only-child`

1.  **Definition:** Element is only child of parent.
2.  **When to Use It:**
    *   Standalone element styling in containers.
    *   Special styling for sole items.
3.  **Best Practices:**
    *   **Specificity:** Moderate.
    *   **Accessibility:** Visual enhancement.

#### `:only-of-type`

1.  **Definition:** Element is only child of its type among siblings.
2.  **When to Use It:**
    *   Single image in section.
    *   Unique item type styling.
3.  **Best Practices:**
    *   **Specificity:** Similar to `:only-child`.
    *   **Accessibility:** Visual enhancement.

#### `:empty`

1.  **Definition:** Element with no children.
2.  **When to Use It:**
    *   Hiding empty containers.
    *   Styling empty table cells.
    *   Indicating content absence.
3.  **Best Practices:**
    *   **Specificity:** Element/class selectors.
    *   **Accessibility:** Provide meaningful feedback for empty states; avoid just hiding completely if semantically important.

---

### c) Form Pseudo-classes:

#### `:enabled`

1.  **Definition:** Enabled form controls (default state).
2.  **When to Use It:**
    *   Styling default enabled controls.
    *   Distinguishing from `:disabled` (indirectly).
3.  **Best Practices:**
    *   **Specificity:** Moderate.
    *   **Accessibility:** Visual distinction from `:disabled`.

#### `:disabled`

1.  **Definition:** Disabled form controls (with `disabled` attribute).
2.  **When to Use It:**
    *   Visual indication of disabled state.
    *   Consistent disabled appearance.
3.  **Best Practices:**
    *   **Specificity:** Moderate.
    *   **Accessibility:** Clear visual distinction; avoid color alone; ensure not focusable.

#### `:checked`

1.  **Definition:** Checked checkboxes/radio buttons.
2.  **When to Use It:**
    *   Custom checkbox/radio styling.
    *   Visual feedback for selection.
3.  **Best Practices:**
    *   **Specificity:** Moderate.
    *   **Accessibility:** Clear visual difference; maintain default accessibility; ensure contrast.

#### `:required`

1.  **Definition:** Form controls with `required` attribute.
2.  **When to Use It:**
    *   Visual marking of required fields.
    *   Improving form usability.
3.  **Best Practices:**
    *   **Specificity:** Moderate.
    *   **Accessibility:** Clear, unambiguous indication; textual cue too; consistent placement.

#### `:optional`

1.  **Definition:** Form controls without `required` attribute.
2.  **When to Use It:**
    *   (Optional) Visual marking of optional fields.
    *   Form clarity (subtle indication).
3.  **Best Practices:**
    *   **Specificity:** Moderate.
    *   **Accessibility:** Less critical, avoid clutter.

#### `:valid`

1.  **Definition:** Form controls with valid input.
2.  **When to Use It:**
    *   Real-time visual feedback for valid input.
    *   Improved UX, reduced errors.
3.  **Best Practices:**
    *   **Specificity:** Moderate.
    *   **Accessibility:** Clear positive indication; pair with `:invalid`; don't rely only on color.

#### `:invalid`

1.  **Definition:** Form controls with invalid input.
2.  **When to Use It:**
    *   Real-time visual error feedback.
    *   Guide users to correct input.
3.  **Best Practices:**
    *   **Specificity:** Moderate.
    *   **Accessibility:** Clear error indication; pair with `:valid`; *always* provide text error messages (JavaScript/ARIA).

#### `:in-range`

1.  **Definition:** Numeric input values within `min`/`max` range.
2.  **When to Use It:**
    *   Range slider/numeric input validity confirmation.
    *   Range-based styling (subtle use).
3.  **Best Practices:**
    *   **Specificity:** Moderate.
    *   **Accessibility:** Subtle feedback often enough.

#### `:out-of-range`

1.  **Definition:** Numeric input values outside `min`/`max` range.
2.  **When to Use It:**
    *   Visual error for range limits.
    *   Range boundary indication.
3.  **Best Practices:**
    *   **Specificity:** Moderate.
    *   **Accessibility:** Clear error indication; pair with text error messages (JavaScript/ARIA).

#### `:read-only`

1.  **Definition:** Read-only form controls (`readonly` attribute).
2.  **When to Use It:**
    *   Visual distinction for read-only fields.
    *   Indicating non-editable status.
3.  **Best Practices:**
    *   **Specificity:** Moderate.
    *   **Accessibility:** Clear visual separation from editable fields; `aria-readonly="true"`; avoid `:disabled` for read-only semantics.

#### `:read-write`

1.  **Definition:** Editable form controls (not `read-only`).
2.  **When to Use It:**
    *   Styling editable fields (often implicitly via base styles).
    *   Contrasting with `:read-only`.
3.  **Best Practices:**
    *   **Specificity:** Low to moderate.
    *   **Accessibility:** Ensure both `:read-write` and `:read-only` are visually distinct.

#### `:placeholder-shown`

1.  **Definition:** Input with placeholder text currently displayed.
2.  **When to Use It:**
    *   Styling inputs while placeholder is shown (subtly).
    *   Conditional styling based on placeholder visibility.
3.  **Best Practices:**
    *   **Specificity:** Moderate.
    *   **Accessibility:** Placeholders aren't replacements for labels; ensure placeholder contrast; subtle styling if input is styled with `:placeholder-shown`.

#### `:default`

1.  **Definition:** Default form elements (submit button, initially checked radio/checkbox, selected dropdown option).
2.  **When to Use It:**
    *   Highlighting default submit button.
    *   Default radio/checkbox indication.
3.  **Best Practices:**
    *   **Specificity:** Moderate.
    *   **Accessibility:** Subtle emphasis usually sufficient.

---

### d) Language & Directionality Pseudo-classes:

#### `:dir(ltr)` and `:dir(rtl)`

1.  **Definition:** Selects elements based on text direction (left-to-right or right-to-left).
2.  **When to Use It:**
    *   Layout adjustments for RTL languages.
    *   Text-specific adjustments for different scripts.
3.  **Best Practices:**
    *   **Specificity:** Moderate.
    *   **Accessibility:** *Essential* for RTL support; thorough RTL testing; use logical properties primarily.

#### `:lang(language-code)`

1.  **Definition:** Selects elements based on `lang` attribute.
2.  **When to Use It:**
    *   Font adjustments for different scripts/languages.
    *   Language-appropriate quotation marks.
    *   Hyphenation/word-breaking rules.
3.  **Best Practices:**
    *   **Specificity:** Moderate.
    *   **Accessibility:** Font optimization for readability in different scripts; semantic `lang` attributes.

---

### e) Tree-Structural Pseudo-classes:

#### `:root`

1.  **Definition:** The root element (usually `<html>`).
2.  **When to Use It:**
    *   Defining global CSS variables (custom properties).
    *   Global styles/defaults (primarily variables best practice).
3.  **Best Practices:**
    *   **Specificity:** Type selector level.
    *   **Maintainability:** Centralize global CSS variables in `:root`.

#### `:scope`

1.  **Definition:** Depends on context; Shadow DOM host or element with inline style. Primarily Shadow DOM.
2.  **When to Use It:**
    *   Shadow DOM encapsulation - styling web component's host from shadow styles.
3.  **Best Practices:**
    *   **Specificity:** Shadow DOM context relevance.
    *   **Encapsulation:** Essential for component styling within Shadow DOM.

#### `:has()`

1.  **Definition:** Selects element if it *has* descendants matching selector (CSS Selectors Level 4).
2.  **When to Use It:**
    *   Styling parent based on child presence (e.g., style div if it contains an image).
    *   Conditional layout based on content.
3.  **Best Practices:**
    *   **Specificity:** Can be high depending on selectors.
    *   **Performance:** Monitor if complex, especially on large DOM. Browser support improving (check compatibility).

#### `:not(selector-list)`

1.  **Definition:** Selects elements that do *not* match the selector list.
2.  **When to Use It:**
    *   Excluding specific elements from a general style rule.
    *   Targeting everything *except* certain items.
3.  **Best Practices:**
    *   **Specificity:** Can increase specificity, manage carefully.
    *   **Readability:** Use judiciously to avoid overly complex negative selections.

#### `:where(selector-list)`

1.  **Definition:** Similar to `:not`, but specificity of zero (CSS Selectors Level 4).
2.  **When to Use It:**
    *   Base styles with lowest specificity for easy overrides.
    *   Creating default styles that are easily customized.
3.  **Best Practices:**
    *   **Specificity:** Zero specificity; use for base-level, easily overridden styles.
    *   **Control:** Good for specificity management.
