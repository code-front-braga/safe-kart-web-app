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

export function CredentialsLoginForm() {
	const form = useForm<CredentialsLoginData>({
		resolver: zodResolver(CredentialsLoginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
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
							<FormLabel className="text-white">Email</FormLabel>
							<FormControl>
								<Input
									placeholder="Digite seu email..."
									{...field}
									className="font-gantari text-christalle rounded-sm bg-white/60 p-2 indent-2 text-sm outline-0"
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
							<FormLabel className="text-white">Senha</FormLabel>
							<FormControl>
								<Input
									placeholder="Digite sua senha..."
									{...field}
									className="font-gantari text-christalle rounded-sm bg-white/60 p-2 indent-2 text-sm outline-0"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					type="submit"
					className="bg-cabaret font-gantari mt-1.5 w-full cursor-pointer rounded-sm py-2.5 text-sm text-white"
				>
					Entrar
				</Button>
			</form>
		</Form>
	);
}
