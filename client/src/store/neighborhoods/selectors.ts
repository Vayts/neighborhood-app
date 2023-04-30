import { RootState } from '@src/store';
import { INeighborhood } from '@src/types/neighborhood.types';

export const selectUserNeighborhoods = (state: RootState): INeighborhood[] => state.neighborhoods.user.data;
export const selectUserNeighborhoodsLoading = (state: RootState): boolean => state.neighborhoods.user.isLoading;
export const selectNeighborhoodsSearch = (state: RootState): string => state.neighborhoods.search.searchValue;
export const selectNeighborhoodsSearchList = (state: RootState): INeighborhood[] => state.neighborhoods.search.data;
export const selectNeighborhoodsSearchLoading = (state: RootState): boolean => state.neighborhoods.search.isLoading;
