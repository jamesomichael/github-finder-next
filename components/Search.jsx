'use client';
import React from 'react';

const Search = () => {
	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					alert('Testing');
				}}
			>
				<input
					className="border-2 border-red-700 rounded-full py-2 px-4 w-80"
					type="text"
					placeholder="Search..."
				/>
				{/* <button type="submit">Submit</button> */}
			</form>
		</div>
	);
};

export default Search;
