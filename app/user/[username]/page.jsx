import React from 'react';

import User from '@/components/User';

const UserPage = async ({ params }) => {
	const { username } = await params;
	return (
		<>
			<User username={username} />
		</>
	);
};

export default UserPage;
