/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#DE5C8E",
				gray: "#B4B4B4",
			},
			backgroundImage: {
				mobile: "url('/src/assets/bg-mobile.svg')",
				desktop: "url('/src/assets/bg-desktop.svg')",
			},
		},
	},
	plugins: [],
};
