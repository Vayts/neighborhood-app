import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { THEMES } from '@constants/themes';
import { LoginPage } from '@src/pages/LoginPage/LoginPage';
import { Route, Routes } from 'react-router-dom';
import { RegisterPage } from '@src/pages/RegisterPage/RegisterPage';
import { AppWrapper } from './style';

export const App: React.FC = () => {
	return (
		<ThemeProvider theme={THEMES.light}>
			<AppWrapper>
				<Routes>
					<Route path="/" element={<LoginPage/>}/>
					<Route path="/login" element={<LoginPage/>}/>
					<Route path="/register" element={<RegisterPage/>}/>
				</Routes>
				<ToastContainer
					position="top-center"
					limit={3}
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
