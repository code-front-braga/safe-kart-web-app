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

	return (
		<Form {...form}>
			<form
				onSubmit={() => {}}
				className="mx-auto mt-2.5 flex w-full flex-col items-center gap-3.5"
			>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel className="text-cabaret">Email</FormLabel>
							<FormControl>
								<Input
									placeholder="Digite seu email..."
									{...field}
									className="font-gantari bg-christalle/25 text-christalle rounded p-2 indent-2 text-sm outline-0"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel className="text-cabaret">Senha</FormLabel>
							<FormControl>
								<Input
									placeholder="Digite sua senha..."
									{...field}
									className="font-gantari bg-christalle/25 text-christalle rounded p-2 indent-2 text-sm outline-0"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					type="submit"
					className="bg-cabaret font-gantari mt-1.5 w-full cursor-pointer rounded py-2.5 text-sm text-white"
				>
					Entrar
				</Button>
			</form>
		</Form>
	);
}
