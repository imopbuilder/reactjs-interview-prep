import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/main.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'React.js interview prep',
	description: 'Some important react.js interview questions.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
