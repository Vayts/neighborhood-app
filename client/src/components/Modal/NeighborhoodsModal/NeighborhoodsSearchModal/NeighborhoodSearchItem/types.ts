import { INeighborhoodSearchItem } from '@src/types/neighborhood.types';

export interface INeighborhoodSearch {
	neighborhood: INeighborhoodSearchItem,
	isLoading: boolean,
}

export interface INeighborhoodSearchStyle {
	isInNeighborhood: boolean,
	isLoading: boolean,
}
