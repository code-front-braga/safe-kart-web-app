import Image from 'next/image';

export function SiteBackground() {
	return (
		<div className="bg-christalle fixed inset-0 z-0">
			<Image
				src="/bgHomeMobile.jpg"
				alt="image"
				fill
				quality={100}
				priority
				className="object-cover opacity-35 contrast-125 sepia-50"
			/>
		</div>
	);
}
