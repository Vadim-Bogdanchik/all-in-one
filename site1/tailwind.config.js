const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx}',
		'./pages/**/*.{js,ts,jsx}',
		'./components/**/*.{js,ts,jsx}',
	],

	theme: {
		letterSpacing: {
			tightest: '-.075em',
			tighter: '-.05em',
			tight: '-.025em',
			normal: '0',
			wide: '.025em',
			wider: '.05em',
			widest: '.1em',
			widest: '.25em',
			logo: '-.57em',
		},
		extend: {
			colors: {
				'styled-red': '#fd2155',
				'styled-green': '#05fdd8',
				'main-bg': '#1d1d1d',
				'sidebar-bg': '#181818',
				'tag-color': '#515152',
				'p-color': '#909086',
			},
			fontFamily: {
				sans: ['var(--font-montserrat)', ...fontFamily.sans],
			},
		},
	},
	plugins: [],
}
