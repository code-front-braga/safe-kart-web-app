import { fonts } from '@/utils/fonts';
import './globals.css';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
			<body
				className={`${fonts.gantari.className} ${fonts.rajdhani.className} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
