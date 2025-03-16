export function DashboardSection({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<section className="bg-moonRaker/25 flex h-[calc(100vh-168px)] w-full flex-col gap-2 overflow-hidden p-4">
			{children}
		</section>
	);
}
