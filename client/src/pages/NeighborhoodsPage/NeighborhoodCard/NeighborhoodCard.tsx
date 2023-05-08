import React from 'react';
import {
	NeighborhoodCardBottomContent,
	NeighborhoodCardTopContent,
	NeighborhoodCardWrapper,
} from '@src/pages/NeighborhoodsPage/NeighborhoodCard/style';
import { Title } from '@src/components/UI/Title/Title';
import { Description } from '@src/components/UI/Description/Description';
import { UserList } from '@src/components/UI/UserList/UserList';
import { AvatarFiller } from '@src/components/UI/AvatarFiller/AvatarFiller';
import { INeighborhoodCard } from '@src/pages/NeighborhoodsPage/NeighborhoodCard/types';

export const NeighborhoodCard: React.FC<INeighborhoodCard> = ({ neighborhood }) => {
	return (
		<NeighborhoodCardWrapper>
			<NeighborhoodCardTopContent>
				<AvatarFiller text={neighborhood.title} size={45}/>
				<UserList users={neighborhood.members}/>
			</NeighborhoodCardTopContent>
			<NeighborhoodCardBottomContent>
				<Title>{neighborhood.title}</Title>
				<Description margin='0'>Description</Description>
			</NeighborhoodCardBottomContent>
		</NeighborhoodCardWrapper>
	);
};
