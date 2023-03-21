import React, { FC } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { ILoader } from '@src/components/Loader/types';
import { useTheme } from 'styled-components';
import { THEMES } from '@constants/colors';
import { LoaderWrapper } from './style';

type Theme = typeof THEMES.dark;

export const Loader: FC<ILoader> = ({ color, size }) => {
	const theme = useTheme() as Theme;
	
	return (
		<LoaderWrapper>
			<ClipLoader color={color || theme?.primary} loading size={size || 100} />
		</LoaderWrapper>
	);
};
