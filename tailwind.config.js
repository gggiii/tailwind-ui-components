const colors = require("tailwindcss/colors");

const plugin = require('tailwindcss/plugin')
module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		colors: {
			red: colors.red,
			gray: colors.gray,
			white: colors.white,
			black: colors.black,

			primary: {
				DEFAULT: "#7e0cc0",
				darker: "#5e0990",
				lighter: "#a727f1",
				lighter2: "#c46ff6",
				lighter3: "#e2b7fa",
			},
		},
	},
	variants: {
		extend: {
			outline: ["focus", "hover"],
		},
	},
	plugins: [
	],
};