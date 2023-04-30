import { INeighborhood } from '@src/types/neighborhood.types';

export function getNeighborhoodsIds(neighborhoods: INeighborhood[]): string[] {
	return neighborhoods.map((item) => {
		return item._id;
	});
}

export function getNeighborhoodByIdInUserList(neighborhoods: INeighborhood[], id: string): INeighborhood {
	let result = null;
	neighborhoods.forEach((item) => {
		if (item._id === id) {
			result = item;
		}
	});
	return result;
}
