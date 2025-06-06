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
			pattern: /^px-/,
			variants: [ 'sm', 'md', 'lg', 'xl', '2xl' ],
		},
		{
			pattern: /^pt-/,
			variants: [ 'sm', 'md', 'lg', 'xl', '2xl' ],
		},
		{
			pattern: /^pb-/,
			variants: [ 'sm', 'md', 'lg', 'xl', '2xl' ],
		},
		{
			pattern: /^pl-/,
			variants: [ 'sm', 'md', 'lg', 'xl', '2xl' ],
		},
		{
			pattern: /^pr-/,
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
		{
			pattern: /^space-x-/,
			variants: [ 'sm', 'md', 'lg', 'xl', '2xl' ],
		},
		{
			pattern: /^flex-/,
			variants: [ 'sm', 'md', 'lg', 'xl', '2xl' ],
		},
		{
			pattern: /^gap-/,
			variants: [ 'sm', 'md', 'lg', 'xl', '2xl' ],
		},
	],
	plugins: [],
};
