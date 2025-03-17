import { DashboardSection } from '../components/dashboard-section';
import { CreateNewCart } from './components/create-new-cart';

export default async function DashboardCartPage() {
	return (
		<DashboardSection>
			<CreateNewCart />
		</DashboardSection>
	);
}
