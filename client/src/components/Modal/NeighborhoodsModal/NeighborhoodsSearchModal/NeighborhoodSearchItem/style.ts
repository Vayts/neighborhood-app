import styled, { css } from 'styled-components';
import { INeighborhoodSearchStyle } from '@src/components/Modal/NeighborhoodsModal/NeighborhoodsSearchModal/NeighborhoodSearchItem/types';

export const NeighborhoodSearchItemWrapper = styled.li`
  display: flex;
  align-items: center;
	padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
`;

export const NeighborhoodSearchItemInfo = styled.div`
	flex-grow: 1;
`;

export const NeighborhoodSearchItemIcon = styled.span<INeighborhoodSearchStyle>`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	position: relative;
	color: ${({ theme }) => theme.subTxtColor};
	${({ isInNeighborhood, isLoading }) => {
		if (!isInNeighborhood && !isLoading) {
			return css`
				color: ${({ theme }) => theme.txtColor};
				
        &:hover {
          background-color: ${({ theme }) => theme.lightGray};
	        cursor: pointer;
          color: ${({ theme }) => theme.primaryHover};
        }
			`;
		}
	}};
`;
