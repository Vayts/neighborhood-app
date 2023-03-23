import React from 'react';
import { LayoutMainContent, LayoutOutletWrapper, LayoutWrapper } from '@hoc/Layout/style';
import { Outlet } from 'react-router-dom';
import { Navigation } from '@hoc/Navigation/Navigation';

export const Layout: React.FC = () => {
	return (
		<LayoutWrapper>
			<LayoutMainContent>
				<LayoutOutletWrapper>
					<Navigation/>
					<Outlet/>
				</LayoutOutletWrapper>
			</LayoutMainContent>
		</LayoutWrapper>
	);
};
