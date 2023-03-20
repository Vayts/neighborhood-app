import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { THEMES } from '@constants/themes';
import { LoginPage } from '@src/pages/LoginPage/LoginPage';
import { AppWrapper } from './style';

export const App: React.FC = () => {
	return (
		<ThemeProvider theme={THEMES.light}>
			<AppWrapper>
				<LoginPage/>
				<ToastContainer
					position="top-center"
					autoClose={3000}
					hideProgressBar
					newestOnTop={false}
					closeOnClick
					rtl={false}
					draggable={false}
					theme="colored"
				/>
			</AppWrapper>
		</ThemeProvider>
	);
};
