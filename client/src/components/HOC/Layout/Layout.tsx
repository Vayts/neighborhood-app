import React from 'react';
import { LayoutMainContent, LayoutOutletWrapper, LayoutWrapper } from '@hoc/Layout/style';
import { Outlet } from 'react-router-dom';

export const Layout: React.FC = () => {
	return (
		<LayoutWrapper>
			<LayoutMainContent>
				<LayoutOutletWrapper>
					<Outlet/>
				</LayoutOutletWrapper>
			</LayoutMainContent>
		</LayoutWrapper>
	);
};
