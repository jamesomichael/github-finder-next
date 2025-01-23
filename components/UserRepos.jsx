import Link from 'next/link';
import React from 'react';

import colours from '@/lib/colours';
import dayjs from 'dayjs';

import { FaRegStar, FaCodeFork } from 'react-icons/fa6';

const UserRepos = ({ repos }) => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
			{repos.map((repo) => {
				return (
					<div
						key={repo.id}
						className="grid grid-rows-3 h-52 rounded outline outline-2 outline-black px-4"
					>
						<div className="grid grid-cols-[1fr_auto] items-center">
							<Link
								href={repo.html_url}
								target="_blank"
								rel="noopener noreferrer"
								className="truncate text-blue-600 hover:underline font-bold"
							>
								{repo.name}
							</Link>
							<span className="text-xs outline outline-2 outline-gray-500 text-gray-500 px-2 py-1 rounded-full font-bold">
								{repo.private ? 'Private' : 'Public'}
							</span>
						</div>
						<div className="flex">
							{repo.description && (
								<span className="line-clamp-3 text-sm">
									{repo.description}
								</span>
							)}
						</div>
						<div className="grid grid-cols-[auto_auto_1fr] items-center gap-4 text-sm">
							<div className="flex items-center gap-1">
								{repo.language && (
									<>
										<div
											className="rounded-full aspect-square w-3.5"
											style={{
												backgroundColor:
													colours[repo.language]
														?.color || '#ccc',
											}}
										></div>
										<span className="truncate text-sm">
											{repo.language}
										</span>
									</>
								)}
							</div>
							<div className="flex justify-center items-center gap-4">
								<div className="flex items-center gap-1">
									<FaRegStar size={15} />
									<span>{repo.stargazers_count}</span>
								</div>
								<div className="flex items-center gap-1">
									<FaCodeFork size={15} />
									<span>{repo.forks_count}</span>
								</div>
							</div>
							<div className="flex items-center justify-end">
								{repo.updated_at && (
									<span className="truncate">
										Updated&nbsp;
										{dayjs(repo.updated_at).fromNow()}
									</span>
								)}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default UserRepos;
