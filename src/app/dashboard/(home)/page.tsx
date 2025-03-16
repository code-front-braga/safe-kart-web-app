import { auth } from '../../../../auth';
import { OverviewContainer } from './components/overview-container';
import { DashboardSection } from '../components/dashboard-section';

export default async function DashboardHomePage() {
	const session = await auth();

	/*
  Implementar:
  - Se o usuário não tiver uma compra finalizada (usuário novo) a tela home do dashboard deve ser de boas vindas
  */

	return (
		<DashboardSection>
			<div className="flex h-full w-full flex-col gap-3 overflow-hidden">
				<h3 className="text-left text-base font-semibold">Visão Geral</h3>
				<OverviewContainer />
			</div>
		</DashboardSection>
	);
}
