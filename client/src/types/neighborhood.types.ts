import { IUserInNeighborhood } from '@src/types/user.types';

export interface INeighborhood {
	title: string,
	description: string,
	type: string,
	creationDate: Date,
	members: IUserInNeighborhood[],
}
