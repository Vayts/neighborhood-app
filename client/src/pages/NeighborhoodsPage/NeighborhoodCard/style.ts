import styled from 'styled-components';

export const NeighborhoodCardWrapper = styled.li`
	padding: 25px;
  border: 1px solid #E3EBEE;
  border-radius: 10px;
  flex-basis: calc(100% / 3 - 20px);
	margin: 0 20px 20px 0;

	&:nth-child(3n) {
		margin-right: 0;
	}
	
	&:hover {
		border-color: ${({ theme }) => theme.primary};
		background-color: ${({ theme }) => `${theme.primaryHover}14`};
		transition: all 0.1s;
	}
`;

export const NeighborhoodCardTopContent = styled.div`
  display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const NeighborhoodCardBottomContent = styled.div``;
