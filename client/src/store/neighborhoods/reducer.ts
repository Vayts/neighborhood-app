import { INeighborhoodsState } from '@src/store/neighborhoods/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INeighborhood } from '@src/types/neighborhood.types';

const initialState: INeighborhoodsState = {
	user: {
		data: [],
		isLoading: true,
	},
	search: {
		searchValue: '',
		data: [],
		isLoading: false,
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
		setSearchValue: (state, action: PayloadAction<string>) => {
			state.search.searchValue = action.payload;
		},
		setSearchNeighborhoods: (state, action: PayloadAction<INeighborhood[]>) => {
			state.search.data = action.payload;
		},
		searchRequestStart: (state) => {
			state.search.isLoading = true;
		},
		searchRequestEnd: (state) => {
			state.search.isLoading = false;
		},
	},
});

export const { 
	userNeighborhoodsRequestStart, 
	userNeighborhoodsRequestEnd, 
	setUserNeighborhoods,
	setSearchValue,
	searchRequestStart,
	setSearchNeighborhoods,
	searchRequestEnd,
} = neighborhoodsSlice.actions;
