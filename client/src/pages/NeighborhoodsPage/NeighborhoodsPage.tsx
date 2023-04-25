import React from 'react';
import { Title } from '@src/components/UI/Title/Title';
import { useTranslation } from 'react-i18next';
import { Button } from '@src/components/UI/Button/Button';
import { NeighborhoodsButtons, NeighborhoodsControls, NeighborhoodsPageTitle } from './style';

export const NeighborhoodsPage: React.FC = () => {
	const { t } = useTranslation();
	
	return (
		<>
			<NeighborhoodsControls>
				<NeighborhoodsPageTitle>
					<span className='icon-home'/>
					<Title fz={30}>{t('neighborhoods')}</Title>
					
				</NeighborhoodsPageTitle>
				<NeighborhoodsButtons>
					<Button clickHandler={() => null} icon='icon-search' width='40px' height='40px' fz={20} br='10px' padding='5px'/>
					<Button clickHandler={() => null} icon='icon-plus' height='40px' fz={14} br='10px' text={t('createNeighborhood')} styleType='primary' padding='0 15px'/>
				</NeighborhoodsButtons>
			</NeighborhoodsControls>
			
		</>
	);
};
