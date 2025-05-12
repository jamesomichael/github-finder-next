import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';

import {
	FaLocationDot,
	FaLink,
	FaXTwitter,
	FaUserGroup,
	FaCircleCheck,
} from 'react-icons/fa6';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';

dayjs.extend(relativeTime);

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

const UserDetails = ({ user }) => {
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
		hireable,
		twitter_username,
		created_at,
	} = user;

	return (
		<div className="flex flex-col gap-3.5">
			<img
				src={avatar_url}
				alt={login}
				title={name ? name : login}
				className="rounded-full aspect-square w-52 sm:w-72 outline outline-2 outline-gray-400"
			/>
			<div className="flex flex-col">
				{name && (
					<span className="text-2xl leading-tight font-bold dark:text-white">
						{name}
					</span>
				)}
				<span className="text-gray-600 dark:text-gray-200">
					{login}
				</span>
			</div>
			{created_at && (
				<span
					title={dayjs(created_at).format('DD MMMM YYYY, HH:mm:ss')}
					className="-mt-2 text-sm text-gray-700 font-medium dark:text-gray-300"
				>
					Joined {dayjs(created_at).fromNow()}
				</span>
			)}
			{html_url && (
				<Link
					href={html_url}
					target="_blank"
					rel="noopener noreferrer"
					className="flex justify-center items-center text-sm w-full px-4 py-2 bg-neutral-800 dark:bg-neutral-600 rounded text-gray-100 dark:text-white font-medium outline outline-1 outline-gray-400"
				>
					View on GitHub
				</Link>
			)}
			{bio && <span className="font-bold dark:text-white">{bio}</span>}
			<div className="flex gap-1 justify-start items-center">
				<FaUserGroup
					size={18}
					className="text-gray-600 dark:text-gray-400"
				/>
				<span className="text-gray-600 dark:text-gray-400">
					<span className="font-bold text-black dark:text-white">
						{formatNumber(followers)}
					</span>
					&nbsp;followers
				</span>
				<span className="text-gray-800 dark:text-gray-200">·</span>
				<span className="text-gray-600 dark:text-gray-400">
					<span className="font-bold text-black dark:text-white">
						{formatNumber(following)}
					</span>
					&nbsp;following
				</span>
			</div>
			{hireable && (
				<div className="flex items-center gap-1 text-green-600 dark:text-green-500">
					<FaCircleCheck size={22} />
					<span className="font-bold text-green-800 dark:text-green-600">
						Available for hire
					</span>
				</div>
			)}
			<div className="flex flex-col gap-2">
				{company && (
					<div className="grid grid-cols-[1.4rem_1fr] items-center gap-1">
						<HiOutlineOfficeBuilding
							size={22}
							className="text-neutral-500 dark:text-gray-400"
						/>
						<span className="truncate font-bold dark:text-white">
							{company}
						</span>
					</div>
				)}
				{location && (
					<div className="grid grid-cols-[1.4rem_1fr] items-center gap-1">
						<FaLocationDot
							size={22}
							className="text-neutral-500 dark:text-gray-400"
						/>
						<span className="truncate font-bold dark:text-white">
							{location}
						</span>
					</div>
				)}
				{blog && (
					<div className="grid grid-cols-[1.4rem_1fr] items-center gap-1">
						<FaLink
							size={22}
							className="text-neutral-500 dark:text-gray-400"
						/>
						<Link
							href={normalizeUrl(blog)}
							target="_blank"
							rel="noopener noreferrer"
							className="truncate font-bold hover:underline hover:text-blue-600 dark:text-white dark:hover:text-blue-500"
						>
							{blog}
						</Link>
					</div>
				)}
				{twitter_username && (
					<div className="grid grid-cols-[1.4rem_1fr] items-center gap-1">
						<FaXTwitter
							size={22}
							className="text-neutral-500 dark:text-gray-400"
						/>
						<Link
							href={`https://x.com/${twitter_username}`}
							target="_blank"
							rel="noopener noreferrer"
							className="truncate font-bold hover:underline hover:text-blue-600 dark:text-white dark:hover:text-blue-500"
						>
							{twitter_username}
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default UserDetails;
