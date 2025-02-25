/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [ './src/**/*.{js,jsx,ts,tsx,php}' ],
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
	],
	plugins: [],
};
