import '@testing-library/jest-dom';

jest.mock('react-i18next', () => ({
	useTranslation: () => {
		return [(str: string): string => str, { language: 'uk' }];
	},
}));
