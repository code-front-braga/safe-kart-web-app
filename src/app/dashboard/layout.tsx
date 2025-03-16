import { redirect } from 'next/navigation';
import { auth } from '../../../auth';
import { DashboardHeader } from './components/dashboard-header';
import DashboarNavbar from './components/dashboard-navbar';
import { CartStepProvider } from './cart/contexts/cart-step-context';
import { CartProvider } from './cart/contexts/cart-context';

export default async function DashboardLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const session = await auth();
	// if (!session) redirect('/auth/login');

	return (
		<main className="min-h-screen w-full">
			<DashboardHeader />
			<CartProvider>
				<CartStepProvider>{children}</CartStepProvider>
			</CartProvider>
			<DashboarNavbar />
		</main>
	);
}
