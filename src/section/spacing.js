export const SPACING_OPTIONS = [
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

export const BREAKPOINTS = [
	{ key: 'sm', label: 'SM', attribute: 'sm' },
	{ key: 'md', label: 'MD', attribute: 'md' },
	{ key: 'lg', label: 'LG', attribute: 'lg' },
	{ key: 'xl', label: 'XL', attribute: 'xl' },
	{ key: '2xl', label: '2XL', attribute: '2xl' },
];

// Generate complete padding classes for all spacing options
export const PADDING_CLASSES = SPACING_OPTIONS.reduce( ( acc, { value } ) => {
	acc[ value ] = BREAKPOINTS.reduce( ( classes, { key } ) => {
		classes[ key ] = `${ key }:py-${ value }`;
		return classes;
	}, {} );
	return acc;
}, {} );
