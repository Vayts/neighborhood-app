import { INeighborhoodsState } from '@src/store/neighborhoods/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INeighborhood } from '@src/types/neighborhood.types';

const initialState: INeighborhoodsState = {
	user: {
		data: [],
		isLoading: true,
	},
	search: {
		data: [],
		isLoading: true,
	},
};

export const neighborhoodsSlice = createSlice({
	name: 'neighborhoods',
	initialState,
	reducers: {
		userNeighborhoodsRequestStart: (state) => {
			state.user.isLoading = true;
		},
		userNeighborhoodsRequestEnd: (state) => {
			state.user.isLoading = false;
		},
		setUserNeighborhoods: (state, action: PayloadAction<INeighborhood[]>) => {
			state.user.data = action.payload;
		},
	},
});

export const { 
	userNeighborhoodsRequestStart, 
	userNeighborhoodsRequestEnd, 
	setUserNeighborhoods, 
} = neighborhoodsSlice.actions;
