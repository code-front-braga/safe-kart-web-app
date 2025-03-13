import { AuthBackground } from './components/auth-background';
import { AuthHeader } from './components/auth-header';

export default function AuthLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<main className="min-h-screen w-full flex-col md:flex-row flex items-center justify-center">
			<AuthBackground />
			<AuthHeader />
			{children}
		</main>
	);
}
