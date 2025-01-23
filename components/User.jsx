'use client';
import React, { useEffect } from 'react';

import UserDetails from './UserDetails';

import useUserStore from '@/stores/userStore';

const User = ({ username }) => {
	const { isLoading, setActiveUser, user, repos } = useUserStore();

	useEffect(() => {
		setActiveUser(username);
	}, [username, setActiveUser]);

	console.log('user', user);
	console.log('repos', repos);

	return isLoading ? (
		<>Loading...</>
	) : (
		<div className="grid grid-rows-2 sm:grid-rows-none sm:grid-cols-[18rem_1fr] px-4">
			<UserDetails user={user} />
		</div>
	);
};

export default User;
