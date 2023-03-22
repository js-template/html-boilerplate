module.exports = {
	mode: 'jit',
	content: ['./**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		extend: {},
	},

	// add daisyUI plugin
	plugins: [require('daisyui')],

	// daisyUI config (optional)
	daisyui: {
		styled: true,
		themes: ['light', 'dark', 'bumblebee', 'emerald', 'corporate', 'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden', 'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black', 'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade', 'night', 'coffee', 'winter'],
		base: true,
		utils: true,
		logs: false,
		rtl: false,
		prefix: '',
		darkTheme: 'light',
	},
}
