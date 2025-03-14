'use client';

import { googleAuthenticate } from '@/actions/google-login';
import Form from 'next/form';
import { useActionState } from 'react';
import { FcGoogle } from 'react-icons/fc';

export function GoogleLoginForm() {
	const [status, formAction] = useActionState(googleAuthenticate, undefined);

	return (
		<Form action={formAction} className="w-full">
			<button
				type="submit"
				className="text-christalle mt-3.5 flex w-full cursor-pointer items-center justify-center gap-2 rounded-sm bg-white/60 py-2"
			>
				<span className="font-rajdhani">Ou faça o login pelo Google</span>
				<FcGoogle size={24} />
			</button>
			{status?.success === false && <p>{status?.message}</p>}
		</Form>
	);
}
