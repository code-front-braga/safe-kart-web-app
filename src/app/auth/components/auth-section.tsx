export function AuthSection({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<section className="relative flex h-full w-full items-center justify-center overflow-hidden">
			{children}
		</section>
	);
}
