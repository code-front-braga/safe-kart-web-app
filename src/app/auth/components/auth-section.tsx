export function AuthSection({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
			{children}
		</section>
	);
}
