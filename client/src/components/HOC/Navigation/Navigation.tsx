import React from 'react';
import { NavigationWrapper, PageLink, PageLinkIcon, PageLinkText } from '@hoc/Navigation/style';
import { useTranslation } from 'react-i18next';
import { Title } from '@src/components/UI/Title/Title';

export const Navigation: React.FC = () => {
	const { t } = useTranslation();
	
	return (
		<NavigationWrapper>
			<PageLink to='/'>
				<PageLinkIcon className='icon-Project'/>
				<PageLinkText>{t('mainPage')}</PageLinkText>
			</PageLink>
			<PageLink to='/neighborhoods'>
				<PageLinkIcon className='icon-home'/>
				<PageLinkText>{t('neighborhoods')}</PageLinkText>
			</PageLink>
			<PageLink to='/notification'>
				<PageLinkIcon className='icon-notification'/>
				<PageLinkText>{t('notifications')}</PageLinkText>
			</PageLink>
		</NavigationWrapper>
	);
};
