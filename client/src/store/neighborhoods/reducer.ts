import { INeighborhoodsState } from '@src/store/neighborhoods/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INeighborhood } from '@src/types/neighborhood.types';

const initialState: INeighborhoodsState = {
	current: {
		data: [],
		loadingIds: [],
		isLoading: true,
	},
	unaccepted: {
		data: [],
		loadingIds: [],
		isLoading: true,
	},
	search: {
		searchValue: '',
		data: [],
		loadingIds: [],
		isLoading: false,
	},
};

export const neighborhoodsSlice = createSlice({
	name: 'neighborhoods',
	initialState,
	reducers: {
		currentNeighborhoodsRequestStart: (state) => {
			state.current.isLoading = true;
		},
		currentNeighborhoodsRequestEnd: (state) => {
			state.current.isLoading = false;
		},
		setCurrentNeighborhoods: (state, action: PayloadAction<INeighborhood[]>) => {
			state.current.data = action.payload;
		},
		setCurrentLoadingIds: (state, action: PayloadAction<string[]>) => {
			state.current.loadingIds = action.payload;
		},
		
		unacceptedNeighborhoodsRequestStart: (state) => {
			state.unaccepted.isLoading = true;
		},
		unacceptedNeighborhoodsRequestEnd: (state) => {
			state.unaccepted.isLoading = false;
		},
		setUnacceptedNeighborhoods: (state, action: PayloadAction<INeighborhood[]>) => {
			state.unaccepted.data = action.payload;
		},
		setUnacceptedLoadingIds: (state, action: PayloadAction<string[]>) => {
			state.unaccepted.loadingIds = action.payload;
		},
		
		setSearchValue: (state, action: PayloadAction<string>) => {
			state.search.searchValue = action.payload;
		},
		searchNeighborhoodsRequestStart: (state) => {
			state.search.isLoading = true;
		},
		searchNeighborhoodsRequestEnd: (state) => {
			state.search.isLoading = false;
		},
		setSearchNeighborhoods: (state, action: PayloadAction<INeighborhood[]>) => {
			state.search.data = action.payload;
		},
		setSearchLoadingIds: (state, action: PayloadAction<string[]>) => {
			state.search.loadingIds = action.payload;
		},
	},
});

export const { 
	currentNeighborhoodsRequestStart,
	currentNeighborhoodsRequestEnd,
	searchNeighborhoodsRequestEnd,
	searchNeighborhoodsRequestStart,
	setUnacceptedLoadingIds,
	setUnacceptedNeighborhoods,
	setCurrentNeighborhoods,
	unacceptedNeighborhoodsRequestEnd,
	unacceptedNeighborhoodsRequestStart,
	setSearchLoadingIds,
	setCurrentLoadingIds,
	setSearchValue,
	setSearchNeighborhoods,
} = neighborhoodsSlice.actions;
