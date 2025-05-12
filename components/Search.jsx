'use client';
import React, { useRef, useEffect } from 'react';

import useSearchStore from '@/stores/searchStore';

const Search = () => {
	const searchRef = useRef(null);
	const { searchUsers, searchText, setSearchText } = useSearchStore();

	useEffect(() => {
		searchRef.current?.focus();
	}, []);

	const handleSearch = (e) => {
		e.preventDefault();
		searchUsers(searchText);
	};

	const updateSearchText = (e) => setSearchText(e.target.value);

	return (
		<div>
			<form onSubmit={handleSearch}>
				<input
					ref={searchRef}
					className="outline outline-1 focus:outline-2 border-red-700 dark:bg-neutral-700 dark:text-white dark:outline-neutral-500 dark:focus:outline-neutral-400 rounded-full py-2 px-4 w-80 outline-neutral-500 focus:outline-red-800"
					type="text"
					value={searchText}
					onChange={updateSearchText}
					placeholder="Search for a user..."
				/>
			</form>
		</div>
	);
};

export default Search;
