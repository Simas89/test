import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import appReducer from 'redux/slices/appSlice';

export const history = createBrowserHistory();

export default configureStore({
	reducer: {
		router: connectRouter(history),
		app: appReducer,
	},
	middleware: [...getDefaultMiddleware(), routerMiddleware(history)],
});
