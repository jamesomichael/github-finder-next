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
					className="border-2 border-red-700 dark:bg-neutral-700 dark:text-white dark:border-gray-500 rounded-full py-2 px-4 w-80 focus:outline-gray-500"
					type="text"
					value={searchText}
					onChange={updateSearchText}
					placeholder="Search..."
				/>
				{/* <button type="submit">Submit</button> */}
			</form>
		</div>
	);
};

export default Search;
