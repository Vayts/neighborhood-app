import styled from 'styled-components';

export const NeighborhoodSearchItemWrapper = styled.li`
  display: flex;
  align-items: center;
	padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
`;

export const NeighborhoodSearchItemInfo = styled.div`
	flex-grow: 1;
`;

export const NeighborhoodSearchItemIcon = styled.span`
	display: flex;
	justify-content: flex-end;
	font-size: 20px;
	width: 30px;
	height: 100%;
`;
