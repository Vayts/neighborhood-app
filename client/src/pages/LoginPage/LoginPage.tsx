import React from 'react';
import { LoginPageWrapper, LoginWindow } from '@src/pages/LoginPage/style';
import { Title } from '@src/components/UI/Title/Title';
import { useTranslation } from 'react-i18next';
import { Input } from '@src/components/UI/Input/Input';
import { useAppDispatch, useAppSelector } from '@src/hooks/hooks';
import { selectLoginData } from '@src/store/login/selector';
import { setLoginData } from '@src/store/login/reducer';
import { Button } from '@src/components/UI/Button/Button';

export const LoginPage: React.FC = () => {
	const values = useAppSelector(selectLoginData);
	const dispatch = useAppDispatch();
	const { t } = useTranslation();
	
	const handleChange = (e) => {
		dispatch(setLoginData({ key: e.target.name, value: e.target.value }));
	};
	
	const submitHandler = () => {
		return null;
	};
	
	return (
		<LoginPageWrapper>
			<LoginWindow>
				<Title align='center'>{t('signIn')}</Title>
				<form>
					<Input
						id='loginInput'
						name='login'
						value={values.login}
						onChange={handleChange}
						placeholder={t('login')}
						label={t('login')}
					/>
					<Input
						id='loginInput'
						name='login'
						value={values.login}
						onChange={handleChange}
						placeholder={t('password')}
						label={t('password')}
					/>
					<Button clickHandler={() => submitHandler()} text={t('signIn')}/>
				</form>
			</LoginWindow>
		</LoginPageWrapper>
	);
};
