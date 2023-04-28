import React, { useEffect } from 'react';
import {
	NeighborhoodsListContent,
	NeighborhoodsListControls,
	NeighborhoodsListWrapper,
} from '@src/pages/NeighborhoodsPage/NeighborhoodsList/style';
import { Title } from '@src/components/UI/Title/Title';
import { useTranslation } from 'react-i18next';
import { NeighborhoodCard } from '@src/pages/NeighborhoodsPage/NeighborhoodCard/NeighborhoodCard';
import { useDispatch } from 'react-redux';
import { userNeighborhoodsRequest } from '@src/store/neighborhoods/actions';

export const NeighborhoodsList: React.FC = () => {
	const dispatch = useDispatch();
	const { t } = useTranslation();
	
	useEffect(() => {
		dispatch(userNeighborhoodsRequest());
	}, []);
	
	return (
		<NeighborhoodsListWrapper>
			<NeighborhoodsListControls>
				<Title fz={18} margin='0 0 15px'>{`${t('yourNeighborhoods')} (4/6)`}</Title>
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
