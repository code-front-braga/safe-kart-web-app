import { auth } from '../../../auth';

export default async function DashboardHomePage() {
	const session = await auth();

	return <h1>{session?.user?.name}</h1>;
}
