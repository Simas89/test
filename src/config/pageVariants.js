export default {
	initial: {
		x: '-100px',
		opacity: 0,
	},
	in: {
		x: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			damping: 20,
			delay: 0.2,
		},
	},
	out: {
		x: '100px',
		opacity: 0,
	},
};
