'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

import { FaGithub, FaSun, FaMoon } from 'react-icons/fa6';

import useSettingsStore from '@/stores/settingsStore';

const Navbar = () => {
	const { darkMode, setDarkMode } = useSettingsStore();

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};
	return (
		<div className="w-full bg-red-800 dark:bg-black h-12">
			<main className="grid grid-cols-[1fr_auto] max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl h-full mx-auto">
				<Link
					href="/"
					className="px-4 text-white hover:text-gray-200 w-fit flex items-center gap-1.5 h-full"
				>
					<FaGithub size={25} />
					<span className="text-xl font-poppins">GitHub Finder</span>
				</Link>
				<div className="px-4 text-gray-200 flex justify-end items-center gap-6">
					<div className="flex items-center">
						<button
							onClick={toggleDarkMode}
							className={`w-12 h-6 flex items-center bg-slate-300 dark:bg-gray-700 rounded-full p-0.5 transition-all duration-300 ${
								darkMode ? 'justify-end' : 'justify-start'
							}`}
						>
							<div className="flex justify-center items-center h-full aspect-square bg-yellow-100 dark:bg-indigo-950 rounded-full shadow-md transition-transform duration-300">
								{darkMode ? (
									<FaMoon
										size={14}
										className="text-purple-400"
									/>
								) : (
									<FaSun
										size={14}
										className="text-yellow-600"
									/>
								)}
							</div>
						</button>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Navbar;
