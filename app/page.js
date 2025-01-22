import React from 'react';

import Search from '@/components/Search';
import SearchResults from '@/components/SearchResults';

const Home = () => {
	return (
		<div className="flex justify-center">
			<Search />
			<SearchResults />
		</div>
	);
};

export default Home;
