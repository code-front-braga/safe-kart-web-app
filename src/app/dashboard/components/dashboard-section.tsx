export function DashboardSection({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<section className="flex h-[calc(100vh-192px)] w-full p-4">
			{children}
		</section>
	);
}
