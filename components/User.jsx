'use client';
import React, { useEffect } from 'react';

import UserDetails from './UserDetails';
import UserRepos from './UserRepos';
import Loader from './Loader';

import useUserStore from '@/stores/userStore';

const User = ({ username }) => {
	const { isLoading, setActiveUser, user, repos } = useUserStore();

	useEffect(() => {
		setActiveUser(username);
	}, [username, setActiveUser]);

	return isLoading ? (
		<div className="h-full">
			<Loader />
		</div>
	) : (
		<div className="grid grid-rows-[auto_1fr] gap-6 sm:grid-rows-none sm:grid-cols-[18rem_1fr] px-4">
			<UserDetails user={user} />
			<UserRepos repos={repos} />
		</div>
	);
};

export default User;
