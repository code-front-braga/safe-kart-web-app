import { DesktopHeader } from './components/header/desktop/desktop-header';
import { MobileHeader } from './components/header/mobile/mobile-header';
import { SiteBackground } from './components/site-background';
import { SiteFooter } from './components/site-footer';

export default function SiteLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<main className="min-h-svh w-full overflow-hidden">
			<SiteBackground />
			<MobileHeader />
			<DesktopHeader />
			{children}
			<SiteFooter />
		</main>
	);
}
