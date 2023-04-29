import { RootState } from '@src/store';
import { INeighborhood } from '@src/types/neighborhood.types';

export const selectUserNeighborhoods = (state: RootState): INeighborhood[] => state.neighborhoods.user.data;

export const selectUserNeighborhoodsLoading = (state: RootState): boolean => state.neighborhoods.user.isLoading;
