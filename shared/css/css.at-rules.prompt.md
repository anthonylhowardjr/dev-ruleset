# CSS At-Rules: Concise Guide & Best Practices (Widely Available)

At-rules are CSS statements that provide instructions or organizational information to the CSS engine. They start with an at symbol (`@`). This guide covers widely available at-rules with concise descriptions and best practices.

---

## `@charset`

1.  **Definition:** Specifies the character encoding used in the stylesheet. Must be the very first rule in the stylesheet.
2.  **When to Use It:**
    *   To declare the character set, primarily when using encodings other than UTF-8, or for older browser compatibility if necessary.
    *   Rarely needed now, as UTF-8 is the overwhelmingly common and recommended encoding.
3.  **Best Practices:**
    *   **Placement:** Must be the absolute first line.
    *   **Encoding:** Strongly recommended to use UTF-8 for modern web development; if so, `@charset` is often implicitly assumed and can be omitted.
    *   **Redundancy:** Declaring `@charset "UTF-8";` explicitly, while sometimes seen, is generally redundant for UTF-8 encoded stylesheets in modern contexts.

---

## `@import`

1.  **Definition:** Includes external stylesheets into the current stylesheet.
2.  **When to Use It:**
    *   Organizing CSS into multiple files for better structure.
    *   Including external CSS libraries or frameworks.
    *   Conditional inclusion based on media queries (less common now).
3.  **Best Practices:**
    *   **Placement:** Place `@import` rules at the very top of your stylesheet, before any other rules except `@charset`.
    *   **Performance:** `@import` can be render-blocking and can negatively impact page load performance.  *Prefer using `<link>` elements in HTML* for including stylesheets for better performance due to parallel loading and non-blocking behavior.
    *   **Maintainability:** Can aid CSS organization, but consider build processes and CSS bundling for production.
    *   **Alternatives:** For better performance, use `<link>` tags in HTML; consider CSS preprocessor `@use` or JavaScript-based module loading for component styling if applicable.

---

## `@media`

1.  **Definition:** Applies styles conditionally based on media types or media features (e.g., screen size, orientation, print).
2.  **When to Use It:**
    *   Responsive web design – adapting styles for different screen sizes and devices.
    *   Applying print-specific styles for printing web pages.
    *   Adjusting styles based on user preferences (e.g., prefers-reduced-motion).
3.  **Best Practices:**
    *   **Organization:** Group media queries logically, often near the base styles they modify or in dedicated sections for responsiveness.
    *   **Mobile-First:**  Consider a mobile-first approach – writing base styles for mobile, then using `@media (min-width: ...)` for larger screens.
    *   **Media Features:** Use relevant media features; common ones include `min-width`, `max-width`, `orientation`, `prefers-reduced-motion`, `prefers-color-scheme`.
    *   **Performance:** Keep media query styles efficient; avoid redundant styles.
    *   **Accessibility:** Use media queries to enhance accessibility (e.g., larger font sizes on smaller screens, reduced motion for motion sensitivity).

---

## `@font-face`

1.  **Definition:** Allows you to embed custom fonts that are not web-safe or installed on user systems.
2.  **When to Use It:**
    *   Using custom typography to enhance branding and visual design.
    *   Ensuring consistent font rendering across different platforms and browsers.
3.  **Best Practices:**
    *   **Font Formats:** Provide font files in multiple formats (`woff2`, `woff`, `ttf`, `eot` - with `woff2` being highly recommended for modern browsers due to compression and browser support).
    *   **Font Weight & Style:** Define `@font-face` rules for different font weights (`font-weight`) and styles (`font-style`) to have separate control (e.g., regular, bold, italic).
    *   **Performance:** Optimize font files – use compression (e.g., Brotli), subset fonts if possible (reduce character set), and consider font loading strategies (font-display).
    *   **Accessibility:** Choose fonts with good legibility; ensure sufficient contrast with background colors.  Provide fallback web-safe fonts in your CSS `font-family` property.

---

## `@keyframes`

1.  **Definition:** Defines animation sequences by specifying styles at different points in the animation timeline. Used with the `animation` property.
2.  **When to Use It:**
    *   Creating CSS animations for UI feedback, transitions, or decorative effects.
    *   Animating elements based on states or user interactions.
3.  **Best Practices:**
    *   **Performance:** Keep animations performant; favor `transform` and `opacity` for smoother animations, minimizing layout shifts and repaints.
    *   **Accessibility:**  Respect user preferences (`prefers-reduced-motion` media query); avoid excessive or distracting animations. Provide alternative interaction methods if animations are essential.
    *   **Organization:** Group `@keyframes` rules logically, often near the elements they animate. Use descriptive animation names.
    *   **Animation Properties:**  Use animation properties (`animation-duration`, `animation-timing-function`, `animation-iteration-count`, etc.) effectively to control animation behavior.

---

## `@supports`

1.  **Definition:**  Conditionally applies styles only if the browser supports specific CSS features. Feature queries.
2.  **When to Use It:**
    *   Progressive enhancement - using newer CSS features where supported, while providing fallback styles for older browsers without those features.
    *   Applying styles dependent on specific browser capabilities.
3.  **Best Practices:**
    *   **Feature Detection:** Query for specific CSS properties and values (`@supports (property: value)`).
    *   **Fallback Styles:** Define default styles *outside* `@supports` for broad browser compatibility; use `@supports` to *enhance* for supporting browsers.
    *   **Specificity:**  Manage specificity when combining `@supports` rules with other selectors.
    *   **Maintainability:** Keep `@supports` blocks focused on specific feature enhancements; avoid excessive feature query complexity.

---

## `@container`

1.  **Definition:** (Relatively newer, but increasingly widely available)  Container queries. Applies styles based on the *size or style* of a *container* element, rather than viewport size (like `@media`).
2.  **When to Use It:**
    *   Component-level responsiveness - adapting styles of components based on the space available within their containers, independent of the viewport.
    *   Creating more flexible and reusable components that adapt to various layout contexts.
3.  **Best Practices:**
    *   **Container Definition:**  Explicitly set container context on parent elements using `container-type` (e.g., `container-type: inline-size`, `container-type: size`) and `container-name` (optional, for naming containers).
    *   **Container Query Features:** Query container size with features like `min-width`, `max-width`, etc., similar to media queries but relative to the container.
    *   **Organization:** Place `@container` rules close to the component styles they affect.
    *   **Specificity:** Be mindful of specificity when container queries interact with regular CSS selectors.
    *   **Browser Support:** Check browser support, while widely increasing, some older browsers may not fully support container queries yet.

---

## Viewport-Related At-Rules (e.g., `@viewport`, `@-ms-viewport`, `@-o-viewport`)

1.  **Definition:** Control viewport properties, mainly relevant for mobile devices and older browsers (some using vendor prefixes). Standardized as Viewport Meta element in HTML and CSS properties (viewport descriptor in `@viewport`).
2.  **When to Use It:**
    *   Setting initial viewport scale, width, and other viewport behavior for mobile responsiveness.
    *   Addressing specific viewport issues in older browsers (less frequent now).
    *   In modern practice, viewport settings are largely handled by the `<meta name="viewport">` tag in HTML and CSS viewport units (vw, vh, etc.).
3.  **Best Practices:**
    *   **HTML Meta Viewport:** *Prefer using the `<meta name="viewport">` tag in HTML* for standard viewport settings like initial-scale and width (e.g., `<meta name="viewport" content="width=device-width, initial-scale=1.0">`). This is the most widely supported and recommended approach.
    *   **CSS Viewport Units:**  Use CSS viewport units (vw, vh, vmin, vmax) for sizing elements relative to the viewport size.
    *   **Vendor Prefixes (Older Contexts):**  Vendor prefixed `@-ms-viewport`, `@-o-viewport` rules might be encountered in legacy stylesheets for targeting specific older browsers (e.g., Internet Explorer, Opera Mobile). In most modern web development, focusing on standard `<meta viewport>` and CSS viewport units is sufficient.  If supporting very old browsers is a strict requirement, understand specific browser's viewport at-rule support (e.g., `-ms-viewport`).

---

## `@counter-style`

1.  **Definition:** Defines custom counter styles for CSS list markers and generated content counters, allowing for complex and visually unique list numbering or lettering.
2.  **When to Use It:**
    *   Creating visually custom and elaborate list markers beyond standard bullet points or simple numeric/alphabetic lists.
    *   Implementing non-Western numbering systems or unique counter presentations.
3.  **Best Practices:**
    *   **Clarity:** Design custom counter styles to be clear and easily distinguishable if conveying sequential information.
    *   **Accessibility:** Ensure custom counter styles are still semantically understandable as list markers; consider screen reader implications if using highly visual, non-standard counters.
    *   **Naming:** Use descriptive names for your `@counter-style` rules.
    *   **`system` descriptor:**  Choose appropriate `system` descriptor (`cyclic`, `numeric`, `alphabetic`, `symbolic`, `fixed`, `additive`) to define counter behavior.
    *   **`symbols` descriptor:** Define symbols or images used for the counter with the `symbols` descriptor.

---

## `@page`

1.  **Definition:** Defines styles specifically for paged media, primarily when printing web pages. Allows control over page margins, size, headers/footers, and page breaks for printed output.
2.  **When to Use It:**
    *   Creating print-friendly stylesheets to control how web pages are printed.
    *   Setting page margins, page size, and orientation for printed documents.
    *   Adding page numbers, headers, or footers to printed pages.
    *   Controlling page breaks within content to avoid splitting important sections across pages.
3.  **Best Practices:**
    *   **Media Queries for Print:** Typically used within `@media print { ... }` block to apply print-specific styles only when printing.
    *   **Page Size and Margins:** Use `size` and `margin` properties within `@page` to control page dimensions and margins.
    *   **`marks` and `bleed`:**  For professional print output, use `marks` (crop marks, registration marks) and `bleed` properties if needed.
    *   **`@top-center`, `@bottom-right`, etc.:** Use named page margin boxes (`@top-center`, `@bottom-left`, `@top-right`, `@bottom-center`, `@bottom-right`, `@left-top`, `@left-middle`, `@left-bottom`, `@right-top`, `@right-middle`, `@right-bottom`) to position headers, footers, page numbers, and other content in page margins (requires `content` property).
    *   **`page-break-before`, `page-break-after`, `page-break-inside` properties:** Control page breaks on elements using these properties (values: `auto`, `always`, `avoid`, `left`, `right`).

---

## `@namespace`

1.  **Definition:**  Declares XML namespaces to be used in a stylesheet, primarily relevant when working with XML-based document formats (like SVG embedded in HTML or XHTML).  Less common in typical HTML-centric web development.
2.  **When to Use It:**
    *   Styling SVG content embedded in HTML using CSS when needing to target specific SVG elements or attributes using namespace prefixes.
    *   Working with XHTML documents where namespace prefixes might be used.
    *   Generally less frequently used in typical HTML5 web development where direct CSS selectors often work without explicit namespaces for inline SVG.
3.  **Best Practices:**
    *   **Specificity:** Understand namespace specificity if using in complex selectors.
    *   **Context:** Only needed when you need to explicitly differentiate elements based on their XML namespace. For basic styling of inline SVG, often direct selectors are sufficient.
    *   **SVG Use:** If styling SVG, often direct CSS selectors work without `@namespace` if your SVG is inline and part of HTML document flow.  Use `@namespace` if needing to resolve namespace conflicts or for more explicit namespace targeting in selectors.

---

## `@layer`

1.  **Definition:** (Relatively new but gaining good support)  CSS Cascade Layers. Allows you to create explicit cascade layers to control CSS specificity and organize styles.
2.  **When to Use It:**
    *   Managing specificity in large CSS projects – creating layers for base styles, component styles, theme styles, and utility styles to predictably control overrides.
    *   Organizing CSS codebase into logical layers to improve maintainability.
    *   Controlling style precedence when dealing with CSS from different sources (e.g., frameworks, libraries, custom styles).
3.  **Best Practices:**
    *   **Layer Ordering:** Define layer order using `@layer order` (e.g., `@layer order base, components, theme, utilities;`). Cascade order is determined by layer declaration order.
    *   **Layered Styles:** Place styles within defined layers using `@layer layer-name { ... }` or by specifying layer in style rules (e.g., `@layer utilities; .utility-class { ... }`).
    *   **Specificity Control:** Layers *significantly* impact specificity. Styles in later-declared layers have higher precedence than earlier layers, regardless of selector specificity *within* each layer. This allows lower-specificity selectors in later layers to override higher-specificity selectors in earlier layers.
    *   **Organization:** Plan your layer structure thoughtfully (e.g., base styles, component defaults, theme customizations, utility overrides).
    *   **Browser Support:** Browser support is good and increasing rapidly. Check compatibility; polyfills may be needed for older browsers if layered cascades are essential.
