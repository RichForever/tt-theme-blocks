# TT Theme Blocks

A collection of custom WordPress blocks built with modern development practices.

## Project Structure

```bash
tt-theme-blocks/
├── components/ # Shared components
├── config/ # Global configurations
├── controls/ # Shared block controls
├── hooks/ # Custom React hooks
├── utils/ # Utility functions
│   ├── context.js # React context utilities
│   ├── generateTailwindClasses.js # Tailwind class generation
│   ├── generateUniqueId.js # Unique ID generation
│   └── index.js # Utility exports
└── src/ # Block source files
    ├── core-extender/ # Core block extensions
    ├── icon-picker/ # Icon Picker block
    ├── image-and-text/ # Image and Text block
    └── section/ # Section block
```

## Available Blocks

### Section Block

A flexible container block with responsive spacing and layout options.

### Icon Picker Block

A block for selecting and displaying SVG icons with customization options.

### Image and Text Block

A block for displaying images with text content in various layouts.

### Core Extender

Extensions and enhancements for WordPress core blocks.

## Development Setup

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

## Available Utilities

### `generateTailwindClasses`

Generates responsive Tailwind CSS classes based on breakpoint values:

```javascript
const classes = generateTailwindClasses("py", {
	xs: "4",
	md: "6",
	lg: "8",
});
// Returns: "py-4 md:py-6 lg:py-8"
```

### `generateUniqueId`

Generates a unique string identifier:

```javascript
const id = generateUniqueId(); // Returns: "a1b2c3d4e5f6"
```

## Development Guidelines

1. **Code Style**

   - Follow ESLint configuration
   - Use single quotes for strings
   - Document functions with JSDoc comments

2. **Block Development**

   - Create block-specific components in block's directory
   - Use shared utilities from `utils/` directory
   - Implement responsive controls using breakpoints

3. **Styling**

   - Use Tailwind CSS for styling
   - Keep editor-specific styles in `editor.scss`
   - Use `style.scss` for frontend styles

4. **PHP Rendering**
   - Implement server-side rendering in `render.php`
   - Use block attributes for dynamic class generation
   - Follow WordPress PHP coding standards

## Best Practices

1. Use shared utilities for common functionality
2. Implement responsive controls using breakpoints
3. Follow WordPress coding standards
4. Keep components small and focused
5. Document functions and components
6. Use PHP rendering for dynamic content
7. Follow Tailwind CSS conventions

## Contributing

1. Follow the established directory structure
2. Create meaningful commit messages
3. Document new features or changes
4. Test thoroughly before submitting PRs
