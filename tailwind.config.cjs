/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	corePlugins: {
		ringWidth: false,
	},
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: '#000',
			white: '#fff',
			gray: { 1: '#111', 2: '#222', 3: '#333', b: '#bbb' },
			orange: { 1: '#b54901', 2: '#ed8133', 3: '#fe8f45' },
		},
		fontFamily: {
			sans: ['Verdana', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [],
}
