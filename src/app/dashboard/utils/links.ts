import { IconType } from 'react-icons';
import { FaOpencart } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { LuHistory } from 'react-icons/lu';

export interface DashboardLinksProps {
	name: string;
	url: string;
	icon: IconType;
}

export const dashbordLinks: DashboardLinksProps[] = [
	{
		name: 'Início',
		url: '/dashboard',
		icon: HiHome,
	},
	{
		name: 'Carrinho',
		url: '/dashboard/cart',
		icon: FaOpencart,
	},
	{
		name: 'Histórico',
		url: '/dashboard/history',
		icon: LuHistory,
	},
];
