import React, { useState } from 'react';
import {
	NavigationLinkWrapper,
	NavigationLogoWrapper, NavigationOpenButtonWrapper,
	NavigationWrapper,
	PageLink,
	PageLinkIcon,
	PageLinkText, PageLinkWrapper,
} from '@hoc/Navigation/style';
import { useTranslation } from 'react-i18next';

export const Navigation: React.FC = () => {
	const [isOpen, setOpen] = useState<boolean>(false);
	const { t } = useTranslation();
	
	const openNavigation = () => {
		setOpen(!isOpen);
	};
	
	return (
		<NavigationWrapper isOpen={isOpen}>
			<NavigationLogoWrapper>
				<img src='../assets/img/logo.svg' alt='' />
			</NavigationLogoWrapper>
			<NavigationLinkWrapper isOpen={isOpen}>
				<PageLinkWrapper isOpen={isOpen}>
					<PageLink to='/'>
						<PageLinkIcon className='icon-dashboard'/>
						<PageLinkText isOpen={isOpen}>{t('mainPage')}</PageLinkText>
					</PageLink>
				</PageLinkWrapper>
				<PageLinkWrapper isOpen={isOpen}>
					<PageLink to='/neighborhoods'>
						<PageLinkIcon className='icon-home'/>
						<PageLinkText isOpen={isOpen}>{t('neighborhoods')}</PageLinkText>
					</PageLink>
				</PageLinkWrapper>
				<PageLinkWrapper isOpen={isOpen}>
					<PageLink to='/notification'>
						<PageLinkIcon className='icon-notification'/>
						<PageLinkText isOpen={isOpen}>{t('notifications')}</PageLinkText>
					</PageLink>
				</PageLinkWrapper>
			</NavigationLinkWrapper>
			<NavigationOpenButtonWrapper>
				<span className={isOpen ? 'icon-cancel' : 'icon-menu'} onClick={() => openNavigation()}/>
			</NavigationOpenButtonWrapper>
		</NavigationWrapper>
	);
};
