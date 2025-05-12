import React from 'react';
import Link from 'next/link';

const UserCard = ({ user }) => {
	const { login, avatar_url } = user;

	return (
		<Link
			href={`/user/${login}`}
			className="transition-all duration-200 w-full grid grid-cols-[auto_1fr] gap-4 sm:flex sm:flex-col sm:h-44 sm:gap-2.5 p-[1rem] justify-center items-center outline outline-1 hover:outline-2 outline-neutral-400 hover:outline-red-800 dark:outline-neutral-500 dark:bg-neutral-800 dark:text-white rounded-lg dark:hover:outline-neutral-300 hover:cursor-pointer"
		>
			<img
				src={avatar_url}
				alt=""
				className="rounded-full h-11 sm:h-auto sm:w-20 aspect-square"
			/>
			<div className="w-full sm:flex sm:justify-center truncate">
				<span className="font-black truncate">{login}</span>
			</div>
		</Link>
	);
};

export default UserCard;
