'use client';
import React from 'react';

import UserCard from './UserCard';
import Loader from './Loader';

import useSearchStore from '@/stores/searchStore';

const SearchResults = () => {
	const { users, isLoading } = useSearchStore();
	return isLoading ? (
		<Loader />
	) : (
		<div className="px-2 sm:px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-4 w-full">
			{users.map((user) => (
				<UserCard key={user.id} user={user} />
			))}
		</div>
		// <pre>{JSON.stringify(users, null, 4)}</pre>
	);
};

export default SearchResults;
