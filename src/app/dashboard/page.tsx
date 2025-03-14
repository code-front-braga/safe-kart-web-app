import { auth } from '../../../auth';

export default async function DashboardHomePage() {
	const session = await auth();

	return <div></div>;
}
