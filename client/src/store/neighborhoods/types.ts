import { INeighborhood, INeighborhoodSearchItem } from '@src/types/neighborhood.types';

export interface INeighborhoodsState {
	current: {
		data: INeighborhood[],
		loadingIds: string[],
		isLoading: boolean,
	},
	unaccepted: {
		data: INeighborhood[],
		loadingIds: string[],
		isLoading: boolean,
	},
	search: {
		searchValue: string,
		loadingIds: string[],
		data: INeighborhoodSearchItem[],
		isLoading: boolean,
	}
}
