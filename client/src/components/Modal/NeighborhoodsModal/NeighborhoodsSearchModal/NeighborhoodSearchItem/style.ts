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
	justify-content: flex-end;
	font-size: 20px;
	width: 30px;
	height: 100%;
	${({ isInNeighborhood }) => {
		if (!isInNeighborhood) {
			return css`
				color: ${({ theme }) => theme.txtColor};

        &:hover {
          color: ${({ theme }) => theme.primary};
        }
			`;
		}

		if (isInNeighborhood?.status) {
			return css`
        color: ${({ theme }) => theme.confirmHover};
			`;
		}

		if (!isInNeighborhood?.status) {
			return css`
				color: ${({ theme }) => theme.waitColor};
			`;
		}
	}};
`;
