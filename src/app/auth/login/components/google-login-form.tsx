'use client';

import Form from 'next/form';
import { FcGoogle } from 'react-icons/fc';

export function GoogleLoginForm() {
	return (
		<Form action={() => {}} className="w-full">
			<button
				type="submit"
				className="text-christalle mt-3.5 flex w-full cursor-pointer items-center justify-center gap-2 rounded-sm bg-white/60 py-2"
			>
				<span className="font-rajdhani">Ou faça o login pelo Google</span>
				<FcGoogle size={24} />
			</button>
		</Form>
	);
}
