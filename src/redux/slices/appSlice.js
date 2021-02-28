import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
	name: 'counter',
	initialState: {
		test: false,
	},
	reducers: {
		setTest: (state, action) => {
			state.test = action.payload;
		},
	},
});

export const { setTest } = appSlice.actions;

export default appSlice.reducer;
