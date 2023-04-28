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

export const NeighborhoodCard: React.FC = () => {
	return (
		<NeighborhoodCardWrapper>
			<NeighborhoodCardTopContent>
				<AvatarFiller text='Test Title' size={45}/>
				<UserList users={[{ login: 'xiba', _id: 'asd', firstName: 'asdasd', lastName: 'asdasd', avatar: null }, { login: 'biba', _id: 'asd', firstName: 'asdasd', lastName: 'asdasd', avatar: null }, { login: 'yiba', _id: 'asd', firstName: 'asdasd', lastName: 'asdasd', avatar: null }, { login: 'biba', _id: 'asd', firstName: 'asdasd', lastName: 'asdasd', avatar: null }]}/>
			</NeighborhoodCardTopContent>
			<NeighborhoodCardBottomContent>
				<Title>Test title</Title>
				<Description margin='0'>Description</Description>
			</NeighborhoodCardBottomContent>
		</NeighborhoodCardWrapper>
	);
};
