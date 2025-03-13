import { SiteBackground } from './components/site-background';

export default function SiteLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<main className="min-h-svh w-full overflow-hidden">
			<SiteBackground />
			{children}
		</main>
	);
}
