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
		<div className="flex w-full mt-4 flex-col self-start text-christalle">
			<p>{paragraphText}</p>
			<Link href={href} className="font-rajdhani underline underline-offset-4">
				{linkText}
			</Link>
		</div>
	);
}
