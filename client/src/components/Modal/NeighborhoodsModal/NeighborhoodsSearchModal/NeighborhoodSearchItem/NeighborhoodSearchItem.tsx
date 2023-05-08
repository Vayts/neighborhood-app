import React from 'react';
import { INeighborhoodSearch } from '@src/components/Modal/NeighborhoodsModal/NeighborhoodsSearchModal/NeighborhoodSearchItem/types';
import { AvatarFiller } from '@src/components/UI/AvatarFiller/AvatarFiller';
import { Title } from '@src/components/UI/Title/Title';
import { Description } from '@src/components/UI/Description/Description';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '@src/hooks/hooks';
import { sendMemberRequest } from '@src/store/neighborhoods/actions';
import { Loader } from '@src/components/Loader/Loader';
import {
	NeighborhoodSearchItemIcon,
	NeighborhoodSearchItemInfo,
	NeighborhoodSearchItemWrapper,
} from './style';

export const NeighborhoodSearchItem: React.FC<INeighborhoodSearch> = ({ neighborhood, isLoading }) => {
	const dispatch = useAppDispatch();
	const { t } = useTranslation();
	
	const memberRequestAction = () => {
		if (isLoading || neighborhood.status === 1 || neighborhood.status === 2) return false;
		dispatch(sendMemberRequest(neighborhood._id));
	};
	
	return (
		<NeighborhoodSearchItemWrapper>
			<AvatarFiller text={neighborhood.title} size={40} margin='0 10px 0 0'/>
			<NeighborhoodSearchItemInfo>
				<Title fz={16} margin='0'>{neighborhood.title}</Title>
				<Description fz={14} margin='0'>{t('members', { value: neighborhood.members.length })}</Description>
			</NeighborhoodSearchItemInfo>
			<NeighborhoodSearchItemIcon
				isInNeighborhood={neighborhood.status === 1 || neighborhood.status === 2}
				onClick={() => memberRequestAction()}
				isLoading={isLoading}
			>
				{isLoading ? <Loader size={20}/> : (
					<>
						{neighborhood.status === 0 && <i className='icon-share'/> }
						{neighborhood.status === 1 && <i className='icon-check-done'/> }
						{neighborhood.status === 2 && <i className='icon-member'/> }
					</>
				)}
			</NeighborhoodSearchItemIcon>
		</NeighborhoodSearchItemWrapper>
	);
};
