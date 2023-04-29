import React from 'react';
import { ModalTitleWrapper } from '@src/components/Modal/style';
import { Title } from '@src/components/UI/Title/Title';
import { Search } from '@src/components/UI/Search/Search';
import {
	NeighborhoodsSearchContent,
	NeighborhoodsSearchWrapper,
} from '@src/components/Modal/NeighborhoodsModal/NeighborhoodsSearchModal/style';

export const NeighborhoodsSearchModal: React.FC = () => {
	return (
		<NeighborhoodsSearchWrapper>
			<ModalTitleWrapper>
				<Title margin='15px 35px' align='center' fz={20}>Пошук сусідств</Title>
			</ModalTitleWrapper>
			<NeighborhoodsSearchContent>
				<Search
					width='100%'
					margin='20px 0 0'
					name='neighborhoodsSearch'
					onChange={() => null}
					value='as'
					id='asdas'
				/>
			</NeighborhoodsSearchContent>
		</NeighborhoodsSearchWrapper>
	);
};
