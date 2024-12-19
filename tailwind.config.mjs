/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'bg-gray-cumtual': '#191A1E',
			'green-cumtual': '#04E95F',
			'blue-cumtual': '#007BEA'
		},
		extend: {
			animation: {
				'infinite-scroll': 'infinite-scroll 13s linear infinite',
			  },
			  keyframes: {
				'infinite-scroll': {
				  from: { transform: 'translateX(0)' },
				  to: { transform: 'translateX(-100%)' },
				}
			}
		},
	},
	plugins: [typography],
}
