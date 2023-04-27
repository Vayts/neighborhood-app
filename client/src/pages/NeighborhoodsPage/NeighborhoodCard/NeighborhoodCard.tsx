import React from 'react';
import {
	Ava,
	NeighborhoodCardBottomContent,
	NeighborhoodCardTopContent,
	NeighborhoodCardWrapper,
} from '@src/pages/NeighborhoodsPage/NeighborhoodCard/style';
import { Title } from '@src/components/UI/Title/Title';
import { Description } from '@src/components/UI/Description/Description';

export const NeighborhoodCard: React.FC = () => {
	return (
		<NeighborhoodCardWrapper>
			<NeighborhoodCardTopContent>
				<Ava/>
			</NeighborhoodCardTopContent>
			<NeighborhoodCardBottomContent>
				<Title>Test title</Title>
				<Description margin='0'>Description</Description>
			</NeighborhoodCardBottomContent>
		</NeighborhoodCardWrapper>
	);
};
