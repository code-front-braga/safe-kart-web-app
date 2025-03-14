import { logout } from '@/actions/logout';
import Form from 'next/form';
import { SlLogout } from 'react-icons/sl';
import { auth } from '../../../../auth';
import { LogoutForm } from '@/components/logout-form';

export async function DashboardHeader() {
	const session = await auth();

	return (
		<header className="bg-christalle flex h-28 w-full px-4">
			<div className="m-auto flex w-full items-center justify-between">
				<div className="w-1/2">
					<p className="truncate overflow-hidden text-lg text-ellipsis whitespace-nowrap text-white">
						Olá,
						<br />
						Leonardo Primo Viana Braga!
					</p>
				</div>
				<LogoutForm />
			</div>
		</header>
	);
}
