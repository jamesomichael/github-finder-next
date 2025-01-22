import Link from 'next/link';
import React from 'react';

import { FaGithub } from 'react-icons/fa6';

const Navbar = () => {
	return (
		<div className="w-full bg-red-800 h-12">
			<main className="grid grid-cols-2 max-w-screen-xl h-full mx-auto">
				<Link
					href="/"
					className="px-4 text-white hover:text-gray-200 w-fit flex items-center gap-1.5 h-full"
				>
					<FaGithub size={25} />
					<span className="text-xl font-bold">GitHub Finder</span>
				</Link>
				<div className="px-4 text-gray-200 flex justify-end items-center gap-6">
					<Link className="hover:text-gray-300" href="/">
						Home
					</Link>
					<Link className="hover:text-gray-300" href="/about">
						About
					</Link>
				</div>
			</main>
		</div>
	);
};

export default Navbar;
