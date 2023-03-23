import { createSlice } from '@reduxjs/toolkit';
import { IBaseState } from '@src/store/base/types';

const initialState: IBaseState = {
	isLoading: true,
};

export const baseSlice = createSlice({
	name: 'base',
	initialState,
	reducers: {
		loadApp: (state) => {
			state.isLoading = true;
		},
		loadAppEnd: (state) => {
			state.isLoading = false;
		},
	},
});

export const { loadApp, loadAppEnd } = baseSlice.actions;
