import Image from 'next/image';

export function AuthBackground() {
	return (
		<div className="fixed inset-0 z-0">
			<Image
				src="/littleCart.jpg"
				alt="image"
				fill
				quality={100}
				priority
				className="object-cover opacity-60"
			/>
		</div>
	);
}
