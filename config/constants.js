/**
 * Breakpoints for responsive design.
 * @type {Array<{key: string, label: string, attribute: string}>}
 */
export const BREAKPOINTS = [
	{
		key: 'xs',
		label: 'XS',
		attribute: 'xs',
		description:
			'Extra small screens and below 640px (default, no media query, no prefix in class)',
	},
	{
		key: 'sm',
		label: 'SM',
		attribute: 'sm',
		description: 'Small screens and above (≥640px)',
	},
	{
		key: 'md',
		label: 'MD',
		attribute: 'md',
		description: 'Medium screens and above (≥768px)',
	},
	{
		key: 'lg',
		label: 'LG',
		attribute: 'lg',
		description: 'Large screens and above (≥1024px)',
	},
	{
		key: 'xl',
		label: 'XL',
		attribute: 'xl',
		description: 'Extra large screens and above (≥1280px)',
	},
	{
		key: '2xl',
		label: '2XL',
		attribute: '2xl',
		description: '2x extra large screens and above (≥1536px)',
	},
];

/**
 * Spacing options for padding, margin, etc.
 * @type {Array<{label: string, value: string}>}
 */
export const SPACING_OPTIONS = [
	{ label: 'None', value: '-' },
	{ label: '0', value: '0' },
	{ label: 'px', value: 'px' },
	{ label: '0.5', value: '0.5' },
	{ label: '1', value: '1' },
	{ label: '1.5', value: '1.5' },
	{ label: '2', value: '2' },
	{ label: '2.5', value: '2.5' },
	{ label: '3', value: '3' },
	{ label: '3.5', value: '3.5' },
	{ label: '4', value: '4' },
	{ label: '5', value: '5' },
	{ label: '6', value: '6' },
	{ label: '7', value: '7' },
	{ label: '8', value: '8' },
	{ label: '9', value: '9' },
	{ label: '10', value: '10' },
	{ label: '11', value: '11' },
	{ label: '12', value: '12' },
	{ label: '14', value: '14' },
	{ label: '16', value: '16' },
	{ label: '20', value: '20' },
	{ label: '24', value: '24' },
	{ label: '28', value: '28' },
	{ label: '32', value: '32' },
	{ label: '36', value: '36' },
	{ label: '40', value: '40' },
	{ label: '44', value: '44' },
	{ label: '48', value: '48' },
	{ label: '52', value: '52' },
	{ label: '56', value: '56' },
	{ label: '60', value: '60' },
	{ label: '64', value: '64' },
	{ label: '72', value: '72' },
	{ label: '80', value: '80' },
	{ label: '96', value: '96' },
];
/**
 * Direction options for flex direction.
 * @type {Array<{label: string, value: string}>}
 */
export const DIRECTION_OPTIONS = [
	{ label: 'None', value: '-' },
	{ label: 'Row', value: 'row' },
	{ label: 'Row reverse', value: 'row-reverse' },
	{ label: 'Column', value: 'col' },
	{ label: 'Column reverse', value: 'col-reverse' },
];

/**
 * HTML elements options for the block.
 * @type {Array<{label: string, value: string}>}
 */

export const HTML_ELEMENTS_OPTIONS = [
	{ label: 'div', value: 'div' },
	{ label: 'section', value: 'section' },
];
