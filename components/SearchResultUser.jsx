import React from 'react';
import Link from 'next/link';

const SearchResultUser = ({ user }) => {
	console.log('user', user);
	const { login, avatar_url, html_url } = user;

	return (
		<Link
			href={`/user/${login}`}
			className="flex flex-col h-44 gap-2.5 p-[1rem] justify-center items-center border-2 border-gray-200 rounded-lg hover:bg-gradient-to-br from-transparent hover:to-red-100 hover:cursor-pointer"
		>
			<img
				src={avatar_url}
				alt=""
				className="rounded-full w-20 aspect-square"
			/>
			<span className="font-black">{login}</span>
		</Link>
	);
};

export default SearchResultUser;
