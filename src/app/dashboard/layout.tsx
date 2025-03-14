export default function DashboardLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<main>
			<h1>Dashboard Layout</h1>
			{children}
		</main>
	);
}
