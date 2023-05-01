import { INeighborhood } from '@src/types/neighborhood.types';

export interface INeighborhoodSearch {
	neighborhood: INeighborhood,
	isInNeighborhood: INeighborhood,
}

export interface INeighborhoodSearchStyle {
	isInNeighborhood: INeighborhood,
}
