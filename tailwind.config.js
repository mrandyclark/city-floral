module.exports = {
	content: ['./components/**/*.{js,ts,jsx,tsx}', './layouts/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['"Calibre Regular"', 'system-ui'],
			serif: ['ui-serif', 'Georgia'],
			mono: ['ui-monospace', 'SFMono-Regular'],
			display: ['Oswald'],
			body: ['"Calibre Regular"'],
			bold: ['"Calibre Bold"', 'system-ui'],
			semibold: ['"Calibre Semibold"', 'system-ui'],
		},
		fontSize: {
			xs: '.75rem',
			sm: '.875rem',
			base: '1rem',
			lg: '1.25rem',
			xl: '1.5rem',
			'2xl': '1.75rem',
			'3xl': '2.25rem',
			'4xl': '2.5rem',
			'5xl': '4rem',
		},
		letterSpacing: {
			tightest: '-.075em',
			tighter: '-.05em',
			tight: '-.025em',
			normal: '0',
			wide: '.025em',
			wider: '.05em',
			widest: '.1em',
			max: '.25em',
		},
		container: {
			center: true,
		},
	},
	plugins: [],
};
