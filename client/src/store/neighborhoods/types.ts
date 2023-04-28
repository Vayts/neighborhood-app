import { INeighborhood } from '@src/types/neighborhood.types';

export interface INeighborhoodsState {
	user: {
		data: INeighborhood[],
		isLoading: boolean,
	},
	search: {
		data: INeighborhood[],
		isLoading: boolean,
	}
}
