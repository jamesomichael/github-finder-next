'use client';
import React from 'react';

import useSearchStore from '@/stores/searchStore';

const SearchResults = () => {
	const { users, isLoading } = useSearchStore();
	return isLoading ? (
		<>Loading...</>
	) : (
		<pre>{JSON.stringify(users, null, 4)}</pre>
	);
};

export default SearchResults;
