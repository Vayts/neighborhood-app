import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { THEMES } from '@constants/themes';
import { Button } from '@src/components/UI/Button/Button';
import { Input } from '@src/components/UI/Input/Input';
import { AppWrapper } from './style';

export const App: React.FC = () => {
	return (
		<ThemeProvider theme={THEMES.light}>
			<AppWrapper>
				<Button
					clickHandler={() => null}
					styleType="confirm"
					// disabled
				/>
				<Button
					clickHandler={() => null}
					styleType="cancel"
					// disabled
				/>
				<Button
					clickHandler={() => null}
					styleType="primary"
					// disabled
				/>
				<Button
					clickHandler={() => null}
					styleType="transparent"
					// disabled
				/>
				<Button
					clickHandler={() => null}
					// disabled
				/>
				<Input
					value=''
					id='testInput'
					onChange={() => null}
					isValid
					placeholder='Password'
					label='Password'
					type='password'
					name='testInput'
					width='250px'
					margin='10px 20px'
					isSecure
				/>
				<Input
					value=''
					id='testInput'
					onChange={() => null}
					isValid
					placeholder='Password'
					label='Password'
					type='text'
					name='testInput'
					width='250px'
					margin='10px 20px'
					isSecure
				/>
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
