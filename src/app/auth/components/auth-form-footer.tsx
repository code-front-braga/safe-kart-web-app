import Link from 'next/link';

interface AuthFormFooterProps {
	paragraphText: string;
	href: string;
	linkText: string;
}

export function AuthFormFooter({
	paragraphText,
	href,
	linkText,
}: AuthFormFooterProps) {
	return (
		<div className="text-christalle mt-4 flex w-full flex-col items-center">
			<p>{paragraphText}</p>
			<Link href={href} className="font-rajdhani underline underline-offset-4">
				{linkText}
			</Link>
		</div>
	);
}
