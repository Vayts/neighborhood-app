import React from 'react';
import { useTranslation } from 'react-i18next';
import { IButton } from './types';
import { ButtonItem } from './style';

export const Button: React.FC<IButton> = (props) => {
	const { t } = useTranslation();
 
	const {
		margin,
		padding,
		text,
		height,
		width,
		fz,
		styleType,
		fw,
		disabled,
		clickHandler,
	} = props;
	return (
		<ButtonItem
			width={width}
			margin={margin}
			padding={padding}
			height={height}
			fz={fz}
			styleType={styleType}
			fw={fw}
			onClick={() => clickHandler()}
			disabled={disabled}
		>
			{text || t('confirm')}
		</ButtonItem>
	);
};
