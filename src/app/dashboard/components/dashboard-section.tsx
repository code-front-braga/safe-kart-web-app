export function DashboardSection({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<section className="flex h-[calc(100vh-168px)] w-full flex-col p-4">
			<div className="flex h-full w-full flex-col gap-2 overflow-hidden">
				{children}
			</div>
		</section>
	);
}
