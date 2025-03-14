'use client';

import { usePathname } from 'next/navigation';
import { DashboardLinksProps, dashbordLinks } from '../utils/links';
import Link from 'next/link';

export default function DashboarNavbar() {
	const pathName = usePathname();

	const handleActiveLink = (link: Pick<DashboardLinksProps, 'url'>) => {
		if (link.url !== pathName) {
			return 'text-white';
		}
		return 'text-cabaret';
	};

	const dashLinks = dashbordLinks.map(link => {
		return (
			<Link
				key={link.url}
				href={link.url}
				onClick={() => handleActiveLink(link)}
				className={`flex flex-col items-center ${handleActiveLink(link)}`}
			>
				<link.icon size={22} />
				{link.name}
			</Link>
		);
	});

	return (
		<nav className="bg-christalle fixed bottom-0 flex h-18 w-full items-center justify-between px-4">
			{dashLinks}
		</nav>
	);
}
