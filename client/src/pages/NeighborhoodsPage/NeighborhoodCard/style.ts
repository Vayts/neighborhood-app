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
		cursor: pointer;
		transition: all 0.1s;
	}
`;

export const NeighborhoodCardTopContent = styled.div``;

export const Ava = styled.div`
	width: 50px;
	height: 50px;
	background-color: ${({ theme }) => theme.primary};
	border-radius: 50%;
`;

export const NeighborhoodCardBottomContent = styled.div``;
