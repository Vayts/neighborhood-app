import styled from 'styled-components';

export const LayoutWrapper = styled.div`

`;

export const LayoutMainContent = styled.div`
	display: flex;
  position: relative;
	flex-grow: 1;
`;

export const LayoutOutletWrapper = styled.div`
	padding: 30px 30px 0;
	flex-grow: 1;
	width: auto;
	height: 100vh;
  display: flex;
	flex-direction: column;

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */

  ::-webkit-scrollbar-thumb {
    width: 10px;
    background: ${({ theme }) => theme.primary};
  }

  /* Handle on hover */

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.hover};
  }
`;
