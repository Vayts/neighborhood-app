import React from 'react';
import { useTranslation } from 'react-i18next';
import { Loader } from '@src/components/Loader/Loader';
import { IButton } from '@src/components/UI/Button/types';
import { ButtonItem } from '@src/components/UI/Button/style';

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
		isLoading,
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
			onClick={(e) => clickHandler(e)}
			disabled={disabled || isLoading}
		>
			{isLoading ? <Loader size={15}/> : text || t('confirm')}
		</ButtonItem>
	);
};
