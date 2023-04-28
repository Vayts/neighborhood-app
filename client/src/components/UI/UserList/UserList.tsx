import React from 'react';
import { IUserList } from '@src/components/UI/UserList/types';
import { UserListItem, UserListItemFiller, UserListWrapper } from '@src/components/UI/UserList/style';

export const UserList: React.FC<IUserList> = ({ users, clickable, margin, size }) => {
	const checkUserCounter = () => {
		return users.length > 3;
	};
	
	const generateFullUserList = () => {
		return (
			users.map((item) => {
				return <UserListItem size={size}>{item.login.slice(0, 1)}</UserListItem>;
			})
		);
	};
	
	const generatePartUserList = () => {
		return (
			<>
				{users.slice(0, 2).map((item) => {
					return <UserListItem size={size}>{item.login.slice(0, 1)}</UserListItem>;
				})}
				<UserListItemFiller>{`+${users.length - 2}`}</UserListItemFiller>
			</>
		);
	};
	
	return (
		<UserListWrapper margin={margin}>
			{checkUserCounter() ? generatePartUserList() : generateFullUserList()}
		</UserListWrapper>
	);
};
