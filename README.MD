# TT Theme Blocks

A collection of custom WordPress blocks built with modern development practices.

## Project Structure

```bash
tt-theme-blocks/
├── components/ # Shared components
│ ├── Layout/ # Layout component for block panels
│ └── icons/ # SVG icons as components
├── config/ # Global configurations
│ ├── constants.js # Shared constants (breakpoints, spacing)
│ └── panels.js # Panel definitions for blocks
├── utils/ # Utility functions
│ └── cls.js # Class generation utilities
└── src/ # Block source files
└── section/ # Example block
├── panels/ # Block-specific panel components
│ ├── index.js
│ ├── layout-panel.js
│ ├── style-panel.js
│ └── content-panel.js
├── block.json # Block configuration
├── edit.js # Edit component
├── save.js # Save component
├── index.js # Block registration
├── editor.scss # Editor-specific styles
└── style.scss # Frontend styles
```

## Creating a New Block

1. Create a new directory in `src/` for your block:

```
bash
mkdir src/your-block-name
```

2. Create the basic block files:

```bash
touch src/your-block-name/{index.js,edit.js,save.js,block.json,editor.scss,style.scss}
mkdir src/your-block-name/panels
```

3. Configure `block.json`:

```json
{
	"$schema": "https://schemas.wp.org/trunk/block.json",
	"apiVersion": 3,
	"name": "tt-custom-blocks/your-block-name",
	"version": "0.1.0",
	"title": "Your Block Title",
	"category": "widgets",
	"description": "Block description",
	"supports": {
		"jsx": true
	},
	"textdomain": "tt-theme-blocks",
	"editorScript": "file:./index.js",
	"editorStyle": "file:./index.css",
	"style": "file:./style-index.css"
}
```

4. Create panel components in `panels/` directory:

```javascript
// panels/layout-panel.js
export const LayoutPanel = ({ attributes, setAttributes }) => {
	// Panel content
};

// panels/index.js
export { LayoutPanel } from "./layout-panel";
```

5. Set up the edit component:

```javascript
import { useBlockProps } from "@wordpress/block-editor";
import Layout from "../../components/Layout";
import { LayoutPanel } from "./panels";

export default function Edit({ attributes, setAttributes }) {
	return (
		<>
			<Layout
				panels={{
					layout: (
						<LayoutPanel
							attributes={attributes}
							setAttributes={setAttributes}
						/>
					),
				}}
			/>
			<div {...useBlockProps()}>{/* Block content */}</div>
		</>
	);
}
```

6. Register the block:

```javascript
import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import Save from "./save";
import metadata from "./block.json";
import "./style.scss";

registerBlockType(metadata.name, {
	edit: Edit,
	save: Save,
});
```

## Development Guidelines

1. **Panel Organization**

   - Create separate components for each panel in the `panels/` directory
   - Export all panels through `panels/index.js`
   - Use the shared Layout component for consistent UI

2. **Styling**

   - Use `editor.scss` for editor-only styles
   - Use `style.scss` for frontend styles
   - Follow WordPress coding standards for CSS/SCSS

3. **Components**

   - Use shared components from the `components/` directory
   - Create new shared components when functionality is needed across blocks

4. **Configuration**

   - Add shared constants to `config/constants.js`
   - Define panel configurations in `config/panels.js`

5. **Utils**
   - Place shared utilities in the `utils/` directory
   - Keep utility functions pure and well-documented

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

1. Follow WordPress coding standards
2. Use meaningful component and function names
3. Keep components small and focused
4. Reuse shared components and utilities
5. Document complex logic
6. Use TypeScript for better type safety
7. Test components thoroughly

## Available Components

### Layout Component

The Layout component provides a consistent interface for block settings panels:

```javascript
<Layout
	panels={{
		general: <GeneralPanel />,
		layout: <LayoutPanel />,
		style: <StylePanel />,
		content: <ContentPanel />,
		advanced: <AdvancedPanel />,
	}}
/>
```

### Panel Components

Each block should organize its settings into panel components:

- General settings
- Layout settings
- Style settings
- Content settings
- Advanced settings

## Contributing

1. Follow the established directory structure
2. Create meaningful commit messages
3. Document new features or changes
4. Test thoroughly before submitting PRs
