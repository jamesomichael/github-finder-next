'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

import useUserStore from '@/stores/userStore';

import {
	FaLocationDot,
	FaLink,
	FaXTwitter,
	FaUserGroup,
	FaCircleCheck,
} from 'react-icons/fa6';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';

const formatNumber = (number) =>
	new Intl.NumberFormat('en-US', {
		notation: 'compact',
		maximumFractionDigits: 1,
	}).format(number);

const normalizeUrl = (url) => {
	if (!url.startsWith('http://') && !url.startsWith('https://')) {
		return `https://${url}`;
	}
	return url;
};

const User = ({ username }) => {
	const { isLoading, setActiveUser, user } = useUserStore();

	console.log('user', user);

	const {
		name,
		company,
		avatar_url,
		location,
		bio,
		blog,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable,
		twitter_username,
	} = user;

	useEffect(() => {
		setActiveUser(username);
	}, [username, setActiveUser]);

	return isLoading ? (
		<>Loading...</>
	) : (
		<div className="grid grid-rows-2 sm:grid-rows-none sm:grid-cols-[18rem_1fr] px-4">
			<div className="flex flex-col gap-3.5">
				<img
					src={avatar_url}
					alt={login}
					title={name ? name : login}
					className="rounded-full aspect-square w-72"
				/>
				<div className="flex flex-col">
					{name && (
						<span className="text-2xl leading-tight font-bold">
							{name}
						</span>
					)}
					<span className="text-gray-600">{login}</span>
				</div>
				{html_url && (
					<Link
						href={html_url}
						target="_blank"
						className="flex justify-center items-center text-sm w-full px-4 py-2 bg-neutral-800 rounded text-gray-100"
					>
						View on GitHub
					</Link>
				)}
				{bio && <span className="font-bold">{bio}</span>}
				<div className="flex gap-1 justify-start items-center">
					<FaUserGroup size={18} className="text-gray-600" />
					<span className="text-gray-600">
						<span className="font-bold text-black">
							{formatNumber(followers)}
						</span>
						&nbsp;followers
					</span>
					<span className="text-gray-800">·</span>
					<span className="text-gray-600">
						<span className="font-bold text-black">
							{formatNumber(following)}
						</span>
						&nbsp;following
					</span>
				</div>
				{hireable && (
					<div className="flex items-center gap-1 text-green-600">
						<FaCircleCheck size={22} />
						<span className="font-bold text-green-800">
							Available for hire
						</span>
					</div>
				)}
				<div className="flex flex-col gap-2">
					{company && (
						<div className="flex items-center gap-1">
							<HiOutlineOfficeBuilding
								size={22}
								className="text-neutral-500"
							/>
							<span className="font-bold">{company}</span>
						</div>
					)}
					{location && (
						<div className="flex items-center gap-1">
							<FaLocationDot
								size={22}
								className="text-neutral-500"
							/>
							<span className="font-bold">{location}</span>
						</div>
					)}
					{blog && (
						<div className="flex items-center gap-1">
							<FaLink size={22} className="text-neutral-500" />
							<Link
								href={normalizeUrl(blog)}
								target="_blank"
								rel="noopener noreferrer"
								className="font-bold hover:underline hover:text-blue-600"
							>
								{blog}
							</Link>
						</div>
					)}
					{twitter_username && (
						<div className="flex items-center gap-1">
							<FaXTwitter
								size={22}
								className="text-neutral-500"
							/>
							<Link
								href={`https://x.com/${twitter_username}`}
								target="_blank"
								className="font-bold hover:underline hover:text-blue-600"
							>
								{twitter_username}
							</Link>
						</div>
					)}
				</div>
			</div>
		</div>
	);
	// return <pre>{JSON.stringify(user, null, 4)}</pre>;
};

export default User;
