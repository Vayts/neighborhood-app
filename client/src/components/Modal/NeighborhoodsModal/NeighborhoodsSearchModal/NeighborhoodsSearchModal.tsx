import React, { useEffect, useRef, useState } from 'react';
import { ModalTitleWrapper } from '@src/components/Modal/style';
import { Title } from '@src/components/UI/Title/Title';
import { Search } from '@src/components/UI/Search/Search';
import {
	NeighborhoodSearchList, NeighborhoodSearchTopWrapper, NeighborhoodsNothingFound,
	NeighborhoodsSearchWrapper,
} from '@src/components/Modal/NeighborhoodsModal/NeighborhoodsSearchModal/style';
import { useAppDispatch, useAppSelector } from '@src/hooks/hooks';
import { setSearchValue } from '@src/store/neighborhoods/reducer';
import {
	NeighborhoodSearchItem,
} from '@src/components/Modal/NeighborhoodsModal/NeighborhoodsSearchModal/NeighborhoodSearchItem/NeighborhoodSearchItem';
import { Loader } from '@src/components/Loader/Loader';
import { searchNeighborhoodsRequest } from '@src/store/neighborhoods/actions';
import {
	selectSearchNeighborhoods, selectSearchNeighborhoodsLoading,
	selectSearchNeighborhoodsLoadingIds,
	selectSearchNeighborhoodsValue,
} from '@src/store/neighborhoods/selectors';

export const NeighborhoodsSearchModal: React.FC = () => {
	const searchValue = useAppSelector(selectSearchNeighborhoodsValue);
	const neighborhoods = useAppSelector(selectSearchNeighborhoods);
	const loadingIds = useAppSelector(selectSearchNeighborhoodsLoadingIds);
	const isLoading = useAppSelector(selectSearchNeighborhoodsLoading);
	const dispatch = useAppDispatch();
	const searchRef = useRef(null);
	const [timeout, setSearchTimeout] = useState(null);
	
	useEffect(() => {
		if (searchRef.current) {
			searchRef.current.focus();
		}
		
		return () => {
			clearTimeout(timeout);
		};
	}, []);
	
	const setSearch = (e) => {
		dispatch(setSearchValue(e.target.value));
		clearTimeout(timeout);
		const searchTimeout = setTimeout(() => {
			dispatch(searchNeighborhoodsRequest(e.target.value));
		}, 400);
		setSearchTimeout(searchTimeout);
	};
	
	return (
		<NeighborhoodsSearchWrapper>
			<ModalTitleWrapper>
				<Title margin='15px 35px' align='center' fz={20}>Пошук сусідств</Title>
			</ModalTitleWrapper>
			<NeighborhoodSearchTopWrapper>
				<Search
					refValue={searchRef}
					width='90%'
					margin='20px auto 20px'
					name='neighborhoodsSearch'
					onChange={(e) => setSearch(e)}
					value={searchValue}
					id='neighborhoodsSearch'
				/>
			</NeighborhoodSearchTopWrapper>
			<NeighborhoodSearchList>
				{neighborhoods.map((item) => {
					return (
						<NeighborhoodSearchItem 
							key={item._id} 
							neighborhood={item}
							isLoading={loadingIds.includes(item._id)}
						/>
					);
				})}
			</NeighborhoodSearchList>
			{isLoading && <Loader size={60}/>}
			{!isLoading && !neighborhoods.length
				&& <NeighborhoodsNothingFound>Нічого не знайдено</NeighborhoodsNothingFound>}
		</NeighborhoodsSearchWrapper>
	);
};
