/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [ './src/**/*.{js,jsx,ts,tsx,php}', './hooks/*.js' ],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '1.5rem',
			},
		},
	},
	safelist: [
		// Add all possible padding classes that could be generated dynamically
		{
			pattern: /^py-/,
			variants: [ 'sm', 'md', 'lg', 'xl', '2xl' ],
		},
		{
			pattern: /^p-/,
			variants: [ 'sm', 'md', 'lg', 'xl', '2xl' ],
		},
		{
			pattern: /^size-/,
			variants: [ 'sm', 'md', 'lg', 'xl', '2xl' ],
		},
		{
			pattern: /^space-y-/,
			variants: [ 'sm', 'md', 'lg', 'xl', '2xl' ],
		},
	],
	plugins: [],
};
