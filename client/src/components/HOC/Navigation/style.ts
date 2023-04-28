import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface NavigationStyle {
	isOpen: boolean;
}

export const NavigationWrapper = styled.aside<NavigationStyle>`
  width: ${({ isOpen }) => (isOpen ? '200px' : '80px')};
  background-color: #fff;
  overflow: hidden;
  transition: all 0.2s;
  position: fixed;
  top: 0;
  display: flex;
	flex-direction: column;
	justify-content: flex-start;
  bottom: 0;
  box-shadow: ${({ isOpen }) => (isOpen ? '0 0 5px rgba(0, 0, 0, 0.1)' : 'unset')};

  h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 20px;
  }
`;

export const NavigationLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
	align-items: center;
	margin: 20px 0 20px;
	
	img {
		width: 40px;
	}
`;

export const NavigationLinkWrapper = styled.nav<NavigationStyle>`
	margin: 0 15px;
	flex-grow: 1;
`;

export const NavigationOpenButtonWrapper = styled.div`
	justify-self: flex-end;
  display: flex;
  justify-content: center;
	align-items: center;
	margin-bottom: 15px;
	
	span {
		width: 40px;
		height: 40px;
		display: flex;
    justify-content: center;
		align-items: center;
		border-radius: 50%;
		
		&:hover {
			cursor: pointer;
			background-color: #F3F4F8;
		}
	}
`;

export const PageLinkWrapper = styled.div<NavigationStyle>`
	width: ${({ isOpen }) => (isOpen ? 'auto' : '45px')};
	border-radius: 5px;
	overflow: hidden;
	margin-bottom: 10px;
`;

export const PageLink = styled(NavLink)`
	color: ${({ theme }) => theme.txtColor};
	text-decoration: none;
	display: flex;
	align-items: center;
	padding: 5px 10px;
	
	&:hover {
		transition: all 0.2s, border 0s;
    color: ${({ theme }) => theme.hoverLight};
		background-color: ${({ theme }) => `${theme.subTxtColor}15`};
	}
	
	&.active {
    transition: all 0.2s, border 0s;
		color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => `${theme.primary}30`};
		box-shadow: ${({ theme }) => `0px 0px 5px ${theme.primaryRGB}`};
		pointer-events: none;
		
		&:hover {
			cursor: default;
      color: ${({ theme }) => theme.primary};
		}
	}
`;

export const PageLinkIcon = styled.span`

	&:before {
		font-size: 25px;
	}
`;

export const PageLinkText = styled.p<NavigationStyle>`
	display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
	margin: 0 0 0 5px;
	font-size: 14px;
	animation: opacityAppear 1s linear;
`;
