import { auth } from '../../../../auth';
import { LogoutForm } from '@/app/auth/components/logout-form';

export async function DashboardHeader() {
	const session = await auth();

	return (
		<header className="bg-moonRaker/80 flex h-24 w-full px-4">
			<div className="m-auto flex w-full items-center justify-between">
				<div className="w-1/2">
					<p className="text-christalle truncate overflow-hidden text-lg text-ellipsis whitespace-nowrap">
						Olá,
						<br />
						{session?.user?.name}
					</p>
					<span className="text-christalle truncate overflow-hidden text-sm text-ellipsis whitespace-nowrap">
						{session?.user?.email}
					</span>
				</div>
				<LogoutForm />
			</div>
		</header>
	);
}
