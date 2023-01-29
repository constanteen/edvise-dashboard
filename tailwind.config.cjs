/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'light-blue': '#ECF9FE',
				'dark-blue': '#0BA8E0',
				'button-blue': '#29BFF5',
				'secondary-text': '#868D97',
			},
			fontFamily: {
				sans: 'Helvetica',
			},
		},
	},
	plugins: [],
};
