# HTML Element Generation Ruleset for AI Agents: Semantic, Accessible & Maintainable Markup (Comprehensive List of Widely Available Elements - Non-Deprecated)

**Objective:** To provide a concise ruleset for AI agents to generate *semantically correct*, *accessible*, *well-structured*, *performant*, and *maintainable* HTML markup, including a **comprehensive list of widely available, non-deprecated HTML elements** for reference and appropriate usage. Adhere to these guidelines for every HTML document and element generated.

**(Sections I-V from the previous response - Semantic HTML Structure Rules, Accessibility Rules, Structure & Hierarchy Rules, Maintainability & Readability Rules, Performance Considerations - REMAIN THE SAME and are assumed to be included here.  They are not repeated for brevity, but are foundational.)**

**VI. Comprehensive List of Widely Available HTML Elements (Non-Deprecated):**

This section provides a categorized list of widely available and non-deprecated HTML elements for AI agent reference during markup generation.  Elements are categorized by their primary purpose, but some elements may serve multiple functions.  **AI Agent should refer to this list and the semantic guidelines (Sections I-V) when selecting appropriate HTML elements.**

**A. Document Structure Elements:**

*   **`<!DOCTYPE html>`:**  (Document Type Declaration) -  Not an element, but the first line in HTML5 documents, declaring document type.
*   **`<html>`:** (Root Element) - The root element of every HTML page.
*   **`<head>`:** (Document Head) - Contains meta-information about the HTML document, such as title, links to stylesheets, metadata, etc.
    *   **`<title>`:** (Document Title) - Specifies the title of the HTML document (shown in browser tab/window title). *Crucial for accessibility and SEO.*
    *   **`<meta>`:** (Metadata) - Provides metadata about the HTML document (character set, viewport settings, descriptions, keywords, etc.).
    *   **`<link>`:** (External Resource Link) - Defines the relationship between the current document and an external resource (stylesheets, favicons, etc.).
    *   **`<style>`:** (Inline Stylesheet) - Contains CSS styles embedded directly within the HTML document. Use sparingly for specific cases, prefer external stylesheets.
    *   **`<base>`:** (Base URL) - Specifies the base URL for all relative URLs in a document.
    *   **`<noscript>`:** (Fallback Content for Scripting Support) - Defines fallback content for users who have scripts disabled in their browser.
    *   **`<script>`:** (Client-side Script) - Embeds or references client-side scripts (JavaScript).
*   **`<body>`:** (Document Body) - Contains the visible page content (text, images, media, interactive elements).

**B. Sectioning Content Elements:**

*   **`<header>`:** (Header Section) - Represents introductory content, often contains headings, logos, navigation, etc., typically at the top of a page or section.
*   **`<nav>`:** (Navigation Section) - Represents a section of navigation links, for primary website navigation or in-page navigation. *Use for primary navigation, not just any group of links.*
*   **`<main>`:** (Main Content Section) - Represents the dominant content of the `<body>` of a document, central theme or purpose of the page.  *Should be unique to the document.*
*   **`<article>`:** (Independent, Self-Contained Content) - Represents a self-contained composition in a document, page, application, or site and that is, in principle, independently distributable or reusable (blog post, news article, forum post, etc.). Can be nested.
*   **`<section>`:** (Generic Thematic Grouping) - Represents a thematic grouping of content, typically with a heading. Use for grouping related content within a document, dividing content logically.
*   **`<aside>`:** (Aside Content) - Represents content that is tangentially related to the content around it and could be considered separate from that content (sidebar, pull quote, ads, related information).
*   **`<footer>`:** (Footer Section) - Represents footer content for a section or page, typically contains copyright information, contact details, site navigation, etc., often at the bottom of a page or section.

**C. Text Content Elements:**

*   **`<h1>` - `<h6>`:** (Headings) - Define section headings, with `<h1>` being the most important and `<h6>` the least important. *Crucial for document outline and accessibility.*
*   **`<p>`:** (Paragraph) - Represents a paragraph of text.
*   **`<br>`:** (Line Break) - Inserts a single line break. Use sparingly for semantic line breaks (e.g., in addresses, poems). For visual line breaks in regular text, CSS is usually preferred.
*   **`<hr>`:** (Thematic Break) - Represents a thematic break between paragraph-level elements (e.g., a scene change in a story, a thematic separation). Visually rendered as a horizontal rule.
*   **`<pre>`:** (Preformatted Text) - Represents preformatted text, which is to be presented exactly as written in the HTML file, preserving whitespace and line breaks. Often used for code blocks or ASCII art.
*   **`<blockquote>`:** (Block Quotation) - Represents a long quotation (block-level). Often rendered indented. Use `cite` attribute to link to the source of the quotation.
*   **`<q>`:** (Inline Quotation) - Represents a short quotation (inline). Browsers may render quotation marks around `<q>` content. Use `cite` attribute for source.

**D. Inline Text Semantics Elements:**

*   **`<a>`:** (Anchor) - Creates a hyperlink to other web pages, files, locations in the same page, email addresses, or any other URL.  *Crucial for navigation and linking.*
*   **`<em>`:** (Emphasis) - Represents emphasized text. Typically rendered in italics. Convey semantic emphasis, not just visual italics (use `<i>` for italics purely for stylistic reasons - less semantic).
*   **`<strong>`:** (Strong Importance) - Represents text with strong importance, seriousness, or urgency. Typically rendered in bold. Convey semantic importance, not just visual bolding (use `<b>` for bold purely for stylistic reasons - less semantic).
*   **`<small>`:** (Side Comments and Small Print) - Represents side comments and small print, like copyright notices or legal disclaimers.
*   **`<mark>`:** (Highlight) - Represents text marked or highlighted for reference purposes, due to its relevance in a particular context.  (Search result highlighting, etc.).
*   **`<del>`:** (Deleted Text) - Represents text that has been deleted from a document. Typically rendered with strikethrough. Use with `<ins>` to show edits.
*   **`<ins>`:** (Inserted Text) - Represents text that has been inserted into a document.  Typically rendered underlined. Use with `<del>` to show edits.
*   **`<u>`:** (Underline) - Represents text that should be styled with an underline. Use for stylistic underlines, not for semantic emphasis (use `<em>` or `<strong>` for emphasis). *Historically used for links, avoid this semantic conflation today - use for stylistic underline only when appropriate*.
*   **`<s>`:** (Strikethrough) - Represents content that is no longer accurate or relevant. Typically rendered with strikethrough. For denoting discontinued products, outdated information.
*   **`<code>`:** (Computer Code) - Represents a fragment of computer code. Typically rendered in a monospace font. For inline code snippets. Use `<pre><code>` for multi-line code blocks.
*   **`<kbd>`:** (Keyboard Input) - Represents user input, typically keyboard input. Often used in documentation to show keyboard commands.
*   **`<samp>`:** (Sample Output) - Represents sample output from a computer program or script.
*   **`<var>`:** (Variable) - Represents a variable in a mathematical expression or programming context.
*   **`<cite>`:** (Citation) - Represents the title of a work (book, article, song, etc.).
*   **`<sup>`:** (Superscript) - Represents superscript text (raised text, like exponents or ordinal suffixes).
*   **`<sub>`:** (Subscript) - Represents subscript text (lowered text, like chemical formulas).
*   **`<span>`:** (Generic Inline Container) - A generic inline container for phrasing content, which does not inherently represent anything. Use as a last resort when no other semantic inline element is appropriate, or for styling purposes when no semantic meaning is needed.

**E. Image and Multimedia Elements:**

*   **`<img>`:** (Image) - Embeds an image in the document. *Crucial to always include `src` and meaningful `alt` attributes for accessibility.*
*   **`<picture>`:** (Picture) - Provides контейнер for multiple `<source>` elements and one `<img>` element to offer alternative versions of an image for different display/device scenarios (responsive images, format support).
*   **`<audio>`:** (Audio Content) - Embeds audio content. *Always include `controls` attribute for user interaction, consider `<track>` for captions.*
*   **`<video>`:** (Video Content) - Embeds video content. *Always include `controls` attribute, provide captions using `<track>` for accessibility.*
*   **`<source>`:** (Media Source) - Specifies multiple media resources for `<picture>`, `<audio>`, and `<video>` elements (different image formats, video formats, etc.).
*   **`<track>`:** (Text Track) - Specifies timed text tracks for `<video>` and `<audio>` elements (captions, subtitles, descriptions, chapters, metadata). *Essential for video accessibility (captions/subtitles).*
*   **`<svg>`:** (Scalable Vector Graphics) - Embeds inline Scalable Vector Graphics. For vector images.
*   **`<canvas>`:** (Canvas Graphics) - Provides a canvas element for dynamic, scriptable rendering of graphics and animations (using JavaScript).

**F. Embedded Content Elements:**

*   **`<iframe>`:** (Inline Frame) - Embeds another HTML document within the current document (embedding external pages, maps, videos from other platforms). Use judiciously due to potential security and performance implications.
*   **`<embed>`:** (External Application or Interactive Content) - Embeds external application content or interactive content (plugins, Flash - though less relevant now, consider modern alternatives).
*   **`<object>`:** (External Resource or Fallback Content) - Embeds external resources or provides fallback content if the resource cannot be loaded.  More general-purpose than `<embed>`.
*   **`<param>`:** (Parameters for `<object>`) - Defines parameters for `<object>` elements.

**G. Scripting Elements:**

*   **`<script>`:** (Client-side Script) - (Already listed in `<head>` section). Embeds or references client-side scripts (JavaScript) within `<body>` as well. Use `defer` or `async` attributes strategically for performance.
*   **`<noscript>`:** (Fallback Content for Scripting Support) - (Already listed in `<head>` section). Fallback for users with scripts disabled.
*   **`<template>`:** (Content Template) - Defines a template for content that is not rendered when the page loads, but can be cloned and inserted by JavaScript. For client-side templating.

**H. Form Elements:**

*   **`<form>`:** (Form) - Represents a form to collect user input. *Essential for creating interactive forms.*
    *   **`<input>`:** (Input Field) - Creates various types of input controls based on the `type` attribute (text, password, email, number, checkbox, radio, file, submit, button, etc.). *Most versatile form control.*
    *   **`<textarea>`:** (Textarea) - Creates a multi-line text input control. For larger text input.
    *   **`<button>`:** (Button) - Creates a clickable button (submit, reset, or general button depending on `type` attribute).
    *   **`<select>`:** (Dropdown List) - Creates a dropdown select box.
        *   **`<option>`:** (Option in Dropdown) - Defines an option within a `<select>`, `<optgroup>`, or `<datalist>` element.
        *   **`<optgroup>`:** (Option Group) - Groups related options within a `<select>` element.
    *   **`<datalist>`:** (Datalist for Input) - Provides a list of pre-defined options for an `<input>` element, allowing users to select from suggested options or type their own.
    *   **`<fieldset>`:** (Fieldset) - Groups related controls in a form.
        *   **`<legend>`:** (Legend for Fieldset) - Defines a caption for the content of a `<fieldset>` element.
    *   **`<label>`:** (Label for Control) - Defines a label for a form control. *Crucial for form accessibility.*
    *   **`<output>`:** (Output Field) - Represents the result of a calculation or user action.
*   **`<meter>`:** (Meter Value) - Represents a scalar measurement within a known range (disk usage, relevance of a query result, etc.). Visually rendered as a meter gauge.
*   **`<progress>`:** (Progress Indicator) - Represents the completion progress of a task (downloads, file uploads, etc.). Visually rendered as a progress bar.

**I. Interactive Elements:**

*   **`<details>`:** (Disclosure Widget) - Creates a disclosure widget, which the user can open and close to reveal/hide content.
    *   **`<summary>`:** (Summary for `<details>`) - Defines a heading for the `<details>` element, which is visible when the details are closed, and clickable to open/close the details.
*   **`<dialog>`:** (Dialog Box or Modal Window) - Represents a dialog box or modal window. Requires JavaScript for more robust modal behavior and accessibility enhancements beyond basic display.
*   **`<menu>`:** (Menu - Context Menu, Toolbar, List of Commands) - Represents a menu of commands. Context menus, toolbars, lists of actions. *Semantic usage can be complex, consider `<nav>` for navigation menus, buttons/links for action lists.*
    *   **`<menuitem>`:** (Menu Item within `<menu>`) - Represents a command that a user can invoke from a `<menu>` element. (More relevant for context menus and application-style menus, less common in typical web navigation).

**J. Table Data Elements:**

*   **`<table>`:** (Table) - Represents tabular data (two-dimensional data table). *Use semantically for tabular data, not layout.*
    *   **`<caption>`:** (Table Caption) - Defines a title or summary for the table. *Crucial for table accessibility.*
    *   **`<thead>`:** (Table Header) - Groups the header content in a table (top rows).
    *   **`<tbody>`:** (Table Body) - Groups the main body content in a table (data rows).
    *   **`<tfoot>`:** (Table Footer) - Groups the footer content in a table (bottom rows, summaries).
    *   **`<tr>`:** (Table Row) - Defines a row in a table.
    *   **`<th>`:** (Table Header Cell) - Defines a header cell in a table (within `<thead>` or as row headers in `<tbody>`). *Use `scope` attribute for complex tables to associate headers correctly.*
    *   **`<td>`:** (Table Data Cell) - Defines a data cell in a table (within `<tbody>`).
    *   **`<col>`:** (Column Grouping - Column Properties) - Specifies column properties for each column within a `<colgroup>` element.
    *   **`<colgroup>`:** (Column Grouping) - Defines a group of columns in a table, used for styling or semantic purposes.

**K. Metadata Elements (Within `<head>` and `<body>`):**

*   **`<head>`, `<title>`, `<meta>`, `<style>`, `<link>`, `<base>`, `<script>`, `<noscript>`** (already listed above in Document Structure Elements).
*   **`<data>`:** (Data) - Links content to a machine-readable data value using the `value` attribute.
*   **`<time>`:** (Time) - Represents a specific period in time.  Use `datetime` attribute for machine-readable date/time format.

**VII. General Element Usage Best Practices (Reinforcement):**

*   **Semantic Element Selection:**  Reiterate rule 1: **ALWAYS** choose the most semantic element for the content's meaning and purpose.
*   **Accessibility First:**  Reinforce accessibility rules (2-12 from previous sections), and particularly the need for `alt` text on images, labels on forms, meaningful link text, and semantic table structure.
*   **Validation & Testing:**  Continue to emphasize rule 20: **REGULARLY VALIDATE** HTML and **TEST** across browsers and devices for rendering and accessibility.
