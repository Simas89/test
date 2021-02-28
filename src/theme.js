import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
	palette: {
		primary: {
			main: '#FFCA2A',
		},
		secondary: {
			main: '#4e4e4e',
		},
		error: { main: '#ff4a4a' },
	},
	overrides: {
		MuiCssBaseline: {
			'@global': {
				body: {
					backgroundColor: '#F4F4F4',
				},
			},
		},
	},
});
theme = responsiveFontSizes(theme);

export default theme;
