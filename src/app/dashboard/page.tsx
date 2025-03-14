import { auth } from '../../../auth';
import { OverviewContainer } from './(home)/components/overview-container';
import { DashboardSection } from './components/dashboard-section';

export default async function DashboardHomePage() {
	const session = await auth();

	return (
		<DashboardSection>
			<h3 className="text-base font-semibold">Visão Geral</h3>
			<OverviewContainer />
		</DashboardSection>
	);
}
