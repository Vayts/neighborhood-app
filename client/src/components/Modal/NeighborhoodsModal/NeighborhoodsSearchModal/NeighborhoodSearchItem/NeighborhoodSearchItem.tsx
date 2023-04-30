import React from 'react';
import { INeighborhoodSearch } from '@src/components/Modal/NeighborhoodsModal/NeighborhoodsSearchModal/NeighborhoodSearchItem/types';
import { AvatarFiller } from '@src/components/UI/AvatarFiller/AvatarFiller';
import { Title } from '@src/components/UI/Title/Title';
import { Description } from '@src/components/UI/Description/Description';
import { useTranslation } from 'react-i18next';
import {
	NeighborhoodSearchItemIcon,
	NeighborhoodSearchItemInfo,
	NeighborhoodSearchItemWrapper,
} from './style';

export const NeighborhoodSearchItem: React.FC<INeighborhoodSearch> = ({ neighborhood, status }) => {
	const { t } = useTranslation();
	
	return (
		<NeighborhoodSearchItemWrapper>
			<AvatarFiller text={neighborhood.title} size={40} margin='0 10px 0 0'/>
			<NeighborhoodSearchItemInfo>
				<Title fz={16} margin='0'>{neighborhood.title}</Title>
				<Description fz={14} margin='0'>{t('members', { value: neighborhood.members.length })}</Description>
			</NeighborhoodSearchItemInfo>
			<NeighborhoodSearchItemIcon>
				<abbr >
					<span className='icon-add-user'/>
				</abbr>
			</NeighborhoodSearchItemIcon>
		</NeighborhoodSearchItemWrapper>
	);
};
