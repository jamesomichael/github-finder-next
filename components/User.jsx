'use client';
import React, { useEffect } from 'react';

import useUserStore from '@/stores/userStore';

const User = ({ username }) => {
	const { isLoading, setActiveUser, user } = useUserStore();

	console.log('user', user);

	// const {
	// 	name,
	// 	company,
	// 	avatar_url,
	// 	location,
	// 	bio,
	// 	blog,
	// 	login,
	// 	html_url,
	// 	followers,
	// 	following,
	// 	public_repos,
	// 	public_gists,
	// 	hireable,
	// } = user;

	useEffect(() => {
		setActiveUser(username);
	}, [username, setActiveUser]);

	return isLoading ? <>Loading...</> : <></>;
	// return <pre>{JSON.stringify(user, null, 4)}</pre>;
};

export default User;
