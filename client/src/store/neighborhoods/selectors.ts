import { RootState } from '@src/store';
import { INeighborhood, INeighborhoodSearchItem } from '@src/types/neighborhood.types';

export const selectCurrentNeighborhoods = (state: RootState): INeighborhood[] => state.neighborhoods.current.data;
export const selectUnacceptedNeighborhoods = (state: RootState): INeighborhood[] => state.neighborhoods.unaccepted.data;
export const selectSearchNeighborhoods = (state: RootState): INeighborhoodSearchItem[] => state.neighborhoods.search.data;

export const selectCurrentNeighborhoodsLoading = (state: RootState): boolean => state.neighborhoods.current.isLoading;
export const selectUnacceptedNeighborhoodsLoading = (state: RootState): boolean => state.neighborhoods.unaccepted.isLoading;
export const selectSearchNeighborhoodsLoading = (state: RootState): boolean => state.neighborhoods.search.isLoading;

export const selectCurrentNeighborhoodsLoadingIds = (state: RootState): string[] => state.neighborhoods.current.loadingIds;
export const selectUnacceptedNeighborhoodsLoadingIds = (state: RootState): string[] => state.neighborhoods.unaccepted.loadingIds;
export const selectSearchNeighborhoodsLoadingIds = (state: RootState): string[] => state.neighborhoods.search.loadingIds;

export const selectSearchNeighborhoodsValue = (state: RootState): string => state.neighborhoods.search.searchValue;
