# TT Theme Blocks

A collection of custom WordPress blocks built with modern development practices.

## Project Structure

```bash
tt-theme-blocks/
├── components/ # Shared components
│   └── icons/ # SVG icons as components
├── config/ # Global configurations
│   └── constants.js # Shared constants (breakpoints, spacing options)
├── hooks/ # Custom React hooks
│   ├── index.js # Hook exports
│   ├── useBreakpoints.js # Breakpoint management
│   ├── useIconParser.js # SVG parsing
│   ├── useModalState.js # Modal state management
│   ├── useSpacingOptions.js # Spacing options
│   └── useTailwindClasses.js # Tailwind class generation
├── utils/ # Utility functions
│   ├── cls.js # Tailwind class generation utilities
│   └── parse-icon.js # SVG parsing utilities
└── src/ # Block source files
    ├── icon-picker/ # Icon Picker block
    │   ├── components/ # Block-specific components
    │   │   ├── IconInserterModal.js
    │   │   ├── IconInserterPlaceholder.js
    │   │   └── IconPreview.js
    │   ├── controls/ # Block controls
    │   │   └── StylesControls.js
    │   ├── hooks/ # Block-specific hooks
    │   │   └── useIconPickerState.js
    │   ├── block.json # Block configuration
    │   ├── edit.js # Edit component
    │   ├── save.js # Save component
    │   ├── render.php # PHP render template
    │   ├── index.js # Block registration
    │   ├── editor.scss # Editor-specific styles
    │   └── style.scss # Frontend styles
    └── section/ # Section block
        ├── controls/ # Block controls
        │   ├── SettingsControls.js
        │   └── StylesControls.js
        ├── block.json
        ├── edit.js
        ├── save.js
        ├── render.php
        ├── index.js
        ├── editor.scss
        └── style.scss
```

## Creating a New Block

1. Create a new directory in `src/` for your block:

```bash
mkdir src/your-block-name
```

2. Create the basic block files:

```bash
mkdir src/your-block-name/{components,controls,hooks}
touch src/your-block-name/{index.js,edit.js,save.js,render.php,block.json,editor.scss,style.scss}
```

3. Configure `block.json`:

```json
{
	"$schema": "https://schemas.wp.org/trunk/block.json",
	"apiVersion": 3,
	"name": "tt-theme-blocks/your-block-name",
	"version": "0.1.0",
	"title": "Your Block Title",
	"category": "widgets",
	"description": "Block description",
	"attributes": {
		"padding": {
			"type": "object",
			"default": {
				"xs": "-",
				"sm": "-",
				"md": "-",
				"lg": "-",
				"xl": "-",
				"2xl": "-"
			}
		}
	},
	"supports": {
		"color": {
			"background": true,
			"text": true
		}
	},
	"textdomain": "tt-theme-blocks",
	"editorScript": "file:./index.js",
	"editorStyle": "file:./index.css",
	"style": "file:./style-index.css",
	"render": "file:./render.php"
}
```

4. Create controls in `controls/` directory:

```javascript
// controls/StylesControls.js
import { InspectorControls } from "@wordpress/block-editor";
import { useTailwindClasses } from "@hooks";

export const StylesControls = ({ attributes, setAttributes }) => {
	// Control implementation
};
```

5. Set up the edit component:

```javascript
import { useBlockProps } from "@wordpress/block-editor";
import { useTailwindClasses } from "@hooks";
import StylesControls from "./controls/StylesControls";

export default function Edit({ attributes, setAttributes }) {
	const { paddingClasses } = useTailwindClasses(attributes);
	const blockProps = useBlockProps({
		className: paddingClasses,
	});

	return (
		<>
			<StylesControls attributes={attributes} setAttributes={setAttributes} />
			<div {...blockProps}>{/* Block content */}</div>
		</>
	);
}
```

## Development Guidelines

1. **Hooks Organization**

   - Use shared hooks from `hooks/` directory
   - Create block-specific hooks in block's `hooks/` directory
   - Export all hooks through `hooks/index.js`

2. **Controls**

   - Place block controls in `controls/` directory
   - Use WordPress components from `@wordpress/components`
   - Implement responsive controls using breakpoints

3. **Components**

   - Create reusable components in `components/` directory
   - Keep block-specific components in block's `components/` directory

4. **Styling**

   - Use Tailwind CSS for styling
   - Keep editor-specific styles in `editor.scss`
   - Use `style.scss` for frontend styles

5. **PHP Rendering**
   - Implement server-side rendering in `render.php`
   - Use block attributes for dynamic class generation
   - Follow WordPress PHP coding standards

## Available Hooks

### `useTailwindClasses`

Generates Tailwind classes for responsive styling:

```javascript
const { paddingClasses } = useTailwindClasses(attributes, {
	paddingPrefix: "py",
});
```

### `useIconParser`

Parses and validates SVG strings:

```javascript
const parsedIcon = useIconParser(svgString);
```

### `useModalState`

Manages modal state:

```javascript
const { isModalOpen, openModal, closeModal } = useModalState();
```

## Building and Testing

1. Install dependencies:

```bash
npm install
```

2. Start development:

```bash
npm start
```

3. Build for production:

```bash
npm run build
```

## Best Practices

1. Use shared hooks for common functionality
2. Implement responsive controls using breakpoints
3. Follow WordPress coding standards
4. Use TypeScript for better type safety
5. Keep components small and focused
6. Document hooks and components
7. Use PHP rendering for dynamic content
8. Follow Tailwind CSS conventions

## Contributing

1. Follow the established directory structure
2. Create meaningful commit messages
3. Document new features or changes
4. Test thoroughly before submitting PRs
