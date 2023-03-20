import styled, { css } from 'styled-components';
import { IButtonStyle } from './types';

export const ButtonItem = styled.button<IButtonStyle>`
  height: ${({ height = 'auto' }) => height};
  margin: ${({ margin = '5px 10px' }) => margin};
  padding: ${({ padding = '7px 20px' }) => padding};
  font-size: ${({ fz = 16 }) => `${fz}px`};
  font-weight: ${({ fw = 400 }) => fw};
  width: ${({ width = 'auto' }) => width};
  display: inline-block;
  border-radius: 2px;
	border: 1px solid transparent;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);

  &:disabled, &[disabled] {
    background-color: ${({ theme }) => theme.disabledBg};
    color: ${({ theme }) => theme.disabledTxt};

    &:hover {
      cursor: default;
      background-color: ${({ theme }) => theme.disabledBg};
      color: ${({ theme }) => theme.disabledTxt};
    }
  }

  &:hover {
    cursor: pointer;
    transition: all 0.2s;
  }

  ${({ styleType }) => {
		if (styleType === 'confirm') {
			return css`
        background-color: ${({ theme }) => theme.confirmColor};
        color: #fff;

        &:hover {
          background-color: ${({ theme }) => theme.confirmHover};
        }
      `;
		}
		if (styleType === 'cancel') {
			return css`
        background-color: ${({ theme }) => theme.dangerColor};
        color: #fff;

        &:hover {
          background-color: ${({ theme }) => theme.dangerHover};
        }
      `;
		}
		if (styleType === 'primary') {
			return css`
        background-color: ${({ theme }) => theme.primary};
        color: #fff;

        &:hover {
	        background-color: ${({ theme }) => theme.primaryHover}
        }
      `;
		}
		if (styleType === 'transparent') {
			return css`
        background-color: transparent;
	      border-color: transparent;
				box-shadow: none;

        &:hover {
	        background-color: ${({ theme }) => theme.disabledBg};
        }
      `;
		}
		return css`
      border: 1px solid ${({ theme }) => theme.primary};
			background-color: transparent;
      color: ${({ theme }) => theme.primary};

      &:hover {
        background-color: ${({ theme }) => theme.primary};
        color: #fff;
      }
    `;
	}}
`;
