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
import { useAppSelector } from '@src/hooks/hooks';
import { selectUserNeighborhoods, selectUserNeighborhoodsLoading } from '@src/store/neighborhoods/selectors';

export const NeighborhoodsList: React.FC = () => {
	const neighborhoods = useAppSelector(selectUserNeighborhoods);
	const isLoading = useAppSelector(selectUserNeighborhoodsLoading);
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
				{neighborhoods.map((item) => {
					return (<NeighborhoodCard neighborhood={item}/>);
				})}
			</NeighborhoodsListContent>
		</NeighborhoodsListWrapper>
	);
};
