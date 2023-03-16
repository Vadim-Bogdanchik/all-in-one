/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],

	theme: {
		extend: {
			fontFamily: {
				montserrat: 'var(--montserrat-font)',
				museomoderno: 'var(--museomoderno-font)',
			},
			backgroundImage: {
				'hero-img': "url('/images/bghero')",
			},
			colors: {
				'btn-bg': '#57DA7D',
				'footer-bg': '#5B5DD8',
				'footer-links': '#5B5DD8',
				'footer-g1': '#EC37FF',
				'footer-g2': '#08B4F7',
				'footer-g3': '#655BF1',
			},
		},
	},
	plugins: [],
}
