import React from 'react';
import {
	NeighborhoodsListContent,
	NeighborhoodsListControls,
	NeighborhoodsListWrapper,
} from '@src/pages/NeighborhoodsPage/NeighborhoodsList/style';
import { Title } from '@src/components/UI/Title/Title';
import { useTranslation } from 'react-i18next';
import { NeighborhoodCard } from '@src/pages/NeighborhoodsPage/NeighborhoodCard/NeighborhoodCard';

export const NeighborhoodsList: React.FC = () => {
	const { t } = useTranslation();
	
	return (
		<NeighborhoodsListWrapper>
			<NeighborhoodsListControls>
				<Title fz={18} margin='0 0 15px'>{t('yourNeighborhoods')}</Title>
			</NeighborhoodsListControls>
			<NeighborhoodsListContent>
				<NeighborhoodCard/>
				<NeighborhoodCard/>
				<NeighborhoodCard/>
				<NeighborhoodCard/>
			</NeighborhoodsListContent>
		</NeighborhoodsListWrapper>
	);
};
