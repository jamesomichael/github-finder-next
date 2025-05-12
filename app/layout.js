import './globals.css';

import Navbar from '@/components/Navbar';

export const metadata = {
	title: 'GitHub Finder',
	description: 'A GitHub user search app built with Next.js.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`min-h-screen grid grid-rows-[auto_1fr] antialiased dark:bg-neutral-900`}
			>
				<Navbar />
				<main className="w-full max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl mx-auto m-8">
					{children}
				</main>
			</body>
		</html>
	);
}
