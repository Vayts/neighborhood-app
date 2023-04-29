import React from 'react';
import { ModalTitleWrapper } from '@src/components/Modal/style';
import { Title } from '@src/components/UI/Title/Title';

export const NeighborhoodsSearchModal: React.FC = () => {
	return (
		<>
			<ModalTitleWrapper>
				<Title margin='20px 35px' align='center' fz={20}>Пошук сусідств</Title>
			</ModalTitleWrapper>
		</>
	);
};
