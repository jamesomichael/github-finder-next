import React from 'react';

import Search from '@/components/Search';
import SearchResults from '@/components/SearchResults';

const Home = () => {
	return (
		<div className="flex flex-col gap-8 items-center">
			<Search />
			<SearchResults />
		</div>
	);
};

export default Home;
