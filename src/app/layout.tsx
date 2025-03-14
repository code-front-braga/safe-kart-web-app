import './globals.css';
import { fonts } from '@/utils/fonts';
import { MenuToggleProvider } from './(site)/contexts/menu-toggle-context';
import { ScrollProvider } from './(site)/contexts/scroll-context';

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
				<MenuToggleProvider>
					<ScrollProvider>{children}</ScrollProvider>
				</MenuToggleProvider>
			</body>
		</html>
	);
}
