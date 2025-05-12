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
		<div className="px-2 sm:px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4 w-full">
			{users.map((user) => (
				<UserCard key={user.id} user={user} />
			))}
		</div>
	);
};

export default SearchResults;
