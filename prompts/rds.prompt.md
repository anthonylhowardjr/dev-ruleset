
## Copilot Instructions for Design System

### General Guidelines

- The project uses the `@rocketcentral/rocket-design-system-styles` package located in `node_modules/@rocketcentral/rocket-design-system-styles`.
- Ensure compatibility with the `@rocketcentral` design system and follow the conventions established in `web/scss`.
- For typography, always extend or reuse the classes defined in `_typeography.scss` rather than creating new styles.
- Always use a prefixed alias with 'rkt-' followed by the SCSS filename when using @use, instead of using '\*'. For example: `@use 'path/to/spacing' as rkt-spacing;`

### Folder Structure

- `base/`: Contains foundational styles and settings.

  - `_links.scss`: Styles for links.
  - `_typography_legacy.scss`: Legacy typography styles.
  - `_typography.scss`: Current typography styles.
  - `dark/`: Dark theme styles.
  - `enterprise/`: Enterprise-specific styles.

- `components/`: Houses component-specific styles.

  - `_accordion.scss`: Styles for accordion components.
  - `_alert.scss`: Styles for alert components.
  - `_autocomplete.scss`: Styles for autocomplete components.
  - `_backdrop.scss`: Styles for backdrop components.
  - `_badge.scss`: Styles for badge components.
  - `_banner.scss`: Styles for banner components.
  - `_bottom-sheet.scss`: Styles for bottom sheet components.
  - `_breadcrumbs.scss`: Styles for breadcrumbs components.
  - `_button-link.scss`: Styles for button link components.
  - `_button-toggle.scss`: Styles for button toggle components.
  - `_button.scss`: Styles for button components.
  - `_card.scss`: Styles for card components.
  - `_checkbox.scss`: Styles for checkbox components.
  - ...

- `objects/`: Contains object-specific styles.

  - ...

- `tokens/`: Contains design tokens in JSON format.

  - `file-uploader.json`: Design tokens for file uploader component.

- `tools/`: Contains tools and utilities for the design system.

- `utilities/`: Contains utility styles.

- `web/`: Contains web-specific styles.
  - `scss/`: SCSS files for web styling.
    - `_vars.scss`: Variables for web styling.

### Specific Instructions

- **Typography**: Always extend or reuse the classes defined in `_typography.scss` rather than creating new styles. Use the placeholder classes to extend the typography classes.
- **Component Styles**: Use the styles in the `components/` folder as the default styling source for components.
- **Design Tokens**: Use the design tokens defined in the `tokens/` folder to ensure consistency in design.
- **SCSS Usage**: Always use a prefixed alias with 'rkt-' followed by the SCSS filename when using `@use`, instead of using '\*'. For example: `@use 'path/to/spacing' as rkt-spacing;`
- **Avoid Duplication**: Avoid duplicating functionality that already exists in `@rocketcentral/rocket-design-system-styles`.
- **New Components**: When creating new components, ensure that they align with the design system's principles and guidelines.
- **Import Structure**: In projects, the import structure or `@use` statement should look like this: `node_modules/@rocketcentral/rocket-design-system-styles/web/scss/_color.scss` and not what's local. The folder structure lines up, however.

### Example Usage

```scss
@use "node_modules/@rocketcentral/rocket-design-system-styles/web/scss/_color.scss" as rkt-color;

.rkt-FileUploaderDropArea__action {
  margin: $rkt-file-uploader-drop-area-action-margin;
  color: $rkt-file-uploader-drop-area-action-color;
  font-family: $rkt-file-uploader-drop-area-action-font-family;
  font-size: $rkt-file-uploader-drop-area-action-font-size;
  font-weight: $rkt-file-uploader-drop-area-action-font-weight;
  line-height: $rkt-file-uploader-drop-area-action-line-height;
}
```
