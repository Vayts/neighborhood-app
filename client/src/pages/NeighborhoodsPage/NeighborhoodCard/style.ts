import styled, { css } from 'styled-components';
import { INeighborhoodCardStyle } from '@src/pages/NeighborhoodsPage/NeighborhoodCard/types';

export const NeighborhoodCardWrapper = styled.li<INeighborhoodCardStyle>`
  padding: 25px;
  border: 1px solid #E3EBEE;
  border-radius: 10px;
  flex-basis: calc(100% / 3 - 20px);
  margin: 0 20px 20px 0;
  position: relative;
	opacity: ${({ status }) => (status ? '1' : '0.7')};

  &:nth-child(3n) {
    margin-right: 0;
  }
  
	
	${({ status }) => {
		if (status) {
			return css`
        &:hover {
          border-color: ${({ theme }) => theme.primary};
          background-color: ${({ theme }) => `${theme.primaryHover}14`};
          transition: all 0.1s;
        }
      `;
		}
	}}

  &:before {
    border-radius: 10px;
    content: '';
    width: 100%;
    height: 100%;
    display: ${({ status }) => (status ? 'none' : 'block')};
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(178, 178, 178, 0.31);
  }
`;

export const NeighborhoodCardTopContent = styled.div`
  display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const NeighborhoodCardBottomContent = styled.div``;
