'use client';

import { DashboardSection } from '../components/dashboard-section';
import { RiSearch2Fill } from 'react-icons/ri';
import { HistoryList } from './components/history-list';

export default function DashboardHistoryPage() {
	return (
		<DashboardSection>
			<div className="flex h-full w-full flex-col items-center gap-4 overflow-hidden">
				<form className="w-full">
					<div className="flex items-center justify-between gap-3">
						<input
							type="text"
							placeholder="nome do supermercado..."
							className="font-gantari bg-christalle/25 text-christalle flex-1 rounded p-2 indent-2 text-sm outline-0"
						/>
						<button type="submit">
							<RiSearch2Fill size={24} className="text-cabaret" />
						</button>
					</div>
				</form>

				<HistoryList />
			</div>
		</DashboardSection>
	);
}
