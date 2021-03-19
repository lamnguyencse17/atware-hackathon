module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
	},
	purge: {
		content: ["./src/**/*.{js,ts,jsx,tsx}"],
		options: {
			safelist: ["flex-grow"],
		},
	},
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [],
};
