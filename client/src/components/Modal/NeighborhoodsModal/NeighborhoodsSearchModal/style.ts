import styled from 'styled-components';

export const NeighborhoodsSearchWrapper = styled.div`
	width: 400px;
  position: relative;
`;

export const NeighborhoodSearchTopWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
	display: flex;
  justify-content: center;
`;

export const NeighborhoodSearchList = styled.ul`
	height: 400px;
	max-height: 400px;
	overflow-y: scroll;
  list-style: none;
  padding: 0 15px 0 20px;
	margin: 0;
	
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */

  ::-webkit-scrollbar-thumb {
    width: 5px;
    background: ${({ theme }) => theme.primary};
  }

  /* Handle on hover */

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.hover};
  }
`;

export const NeighborhoodsNothingFound = styled.p`
  position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
`;
