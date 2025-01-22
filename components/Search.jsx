'use client';
import React, { useState } from 'react';

import useSearchStore from '@/stores/searchStore';

const Search = () => {
	const { searchUsers } = useSearchStore();
	const [searchText, setSearchText] = useState('');

	const handleSearch = (e) => {
		e.preventDefault();
		searchUsers(searchText);
	};

	const updateSearchText = (e) => setSearchText(e.target.value);

	return (
		<div>
			<form onSubmit={handleSearch}>
				<input
					className="border-2 border-red-700 rounded-full py-2 px-4 w-80"
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
