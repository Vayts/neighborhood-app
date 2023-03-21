export interface IButton {
	margin?: string,
	padding?: string,
	fz?: number,
	fw?: number,
	text?: string,
	height?: string,
	width?: string,
	styleType?: 'transparent' | 'primary' | 'cancel' | 'confirm',
	clickHandler: (e) => void,
	disabled?: boolean,
	isLoading?: boolean,
}

export interface IButtonStyle {
	margin?: string,
	padding?: string,
	fz?: number,
	fw?: number,
	height?: string,
	width?: string,
	disabled?: boolean,
	styleType?: 'transparent' | 'primary' | 'cancel' | 'confirm',
}
