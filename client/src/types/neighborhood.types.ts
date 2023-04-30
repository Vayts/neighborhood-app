import { IUserInNeighborhood } from '@src/types/user.types';

export interface INeighborhood {
	_id: string,
	title: string,
	description: string,
	type: string,
	status: boolean,
	creationDate: Date,
	members: IUserInNeighborhood[],
}
