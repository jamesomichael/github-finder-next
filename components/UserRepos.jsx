import React from 'react';

import RepoCard from './RepoCard';

const UserRepos = ({ repos }) => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
			{repos.map((repo) => {
				return <RepoCard key={repo.id} repo={repo} />;
			})}
		</div>
	);
};

export default UserRepos;
