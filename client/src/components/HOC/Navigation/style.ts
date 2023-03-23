import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationWrapper = styled.aside`
	width: 200px;

  h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 20px;
  }
`;

export const PageLink = styled(NavLink)`
	color: ${({ theme }) => theme.subTxtColor};
	text-decoration: none;
	display: flex;
	align-items: center;
	font-weight: 500;
	padding: 5px 10px;
	margin: 5px 0;
	border-radius: 5px;
	
	&:hover {
		transition: all 0.2s, border 0s;
    color: ${({ theme }) => theme.hoverLight};
		background-color: ${({ theme }) => `${theme.subTxtColor}15`};
	}
	
	&.active {
    transition: all 0.2s, border 0s;
		color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => `${theme.primary}20`};
		pointer-events: none;
		
		&:hover {
			cursor: default;
      color: ${({ theme }) => theme.primary};
		}
	}
`;

export const PageLinkIcon = styled.span`
	margin-right: 10px;
	
	&:before {
		font-size: 25px;
	}
`;

export const PageLinkText = styled.p`
	margin: 0;
	font-size: 14px;
`;
