import React from 'react';

const Loader = () => {
	return (
		<div className="h-full flex justify-center items-center">
			<div className="h-14 aspect-square border-2 border-t-transparent border-red-800 dark:border-t-transparent dark:border-neutral-400 rounded-full animate-spin"></div>
		</div>
	);
};

export default Loader;
