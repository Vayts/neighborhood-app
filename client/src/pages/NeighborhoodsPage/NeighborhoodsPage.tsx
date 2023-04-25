import React from 'react';
import { Title } from '@src/components/UI/Title/Title';
import { useTranslation } from 'react-i18next';
import { NeighborhoodsPageTitle } from '@src/pages/NeighborhoodsPage/style';

export const NeighborhoodsPage: React.FC = () => {
	const { t } = useTranslation();
	
	return (
		<>
			<NeighborhoodsPageTitle>
				<span className='icon-home'/>
				<Title fz={30}>{t('neighborhoods')}</Title>
			</NeighborhoodsPageTitle>
			
		</>
	);
};
