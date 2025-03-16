'use client';

import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
	Form,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CredentialsLoginData, CredentialsLoginSchema } from '@/lib/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { login } from '@/actions/credentials-login';
import { ErrorDialog } from '../../components/error-dialog';
import { ImSpinner } from 'react-icons/im';

export function CredentialsLoginForm() {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const form = useForm<CredentialsLoginData>({
		resolver: zodResolver(CredentialsLoginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	useEffect(() => {
		form.setFocus('email');
	});

	async function onSubmit(data: CredentialsLoginData) {
		setLoading(true);
		setError(null);
		login(data).then(res => {
			if (res.error) {
				setLoading(false);
				setError(res.error);
			} else {
				setError('');
				setLoading(false);
			}
		});
	}

	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="mx-auto mt-2.5 flex w-full flex-col items-center gap-8"
				>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem className="relative w-full">
								<FormLabel className="text-cabaret">Email</FormLabel>
								<FormControl>
									<Input
										placeholder="Digite seu email..."
										{...field}
										className="font-gantari bg-christalle/25 text-christalle rounded p-2 indent-2 text-sm outline-0"
									/>
								</FormControl>
								<FormMessage className="absolute -bottom-5" />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem className="relative w-full">
								<FormLabel className="text-cabaret">Senha</FormLabel>
								<FormControl>
									<Input
										type="password"
										placeholder="Digite sua senha..."
										{...field}
										className="font-gantari bg-christalle/25 text-christalle rounded p-2 indent-2 text-sm outline-0"
									/>
								</FormControl>
								<FormMessage className="absolute -bottom-5" />
							</FormItem>
						)}
					/>
					<Button
						type="submit"
						disabled={loading}
						className="bg-cabaret font-gantari w-full cursor-pointer rounded py-2.5 text-sm text-white"
					>
						{loading ? (
							<ImSpinner size={24} className="animate-spin" />
						) : (
							'Entrar'
						)}
					</Button>
				</form>
			</Form>
			{error && <ErrorDialog message={error} />}
		</>
	);
}
