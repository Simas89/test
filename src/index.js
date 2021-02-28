import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import App from 'components/App';
import store, { history } from 'redux/store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import theme from 'theme';
import { StylesProvider, MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<MuiThemeProvider theme={theme}>
					<StylesProvider injectFirst>
						<ThemeProvider theme={theme}>
							<CssBaseline />
							<App />
						</ThemeProvider>
					</StylesProvider>
				</MuiThemeProvider>
			</ConnectedRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();
reportWebVitals();
