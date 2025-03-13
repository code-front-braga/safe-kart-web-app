'use client'

import { Button } from '@/components/ui/button';
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RegisterData, RegisterSchema } from '@/lib/zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export function RegisterForm() {
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	const form = useForm<RegisterData>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
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
					name="name"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel className="text-cabaret">Nome</FormLabel>
							<FormControl>
								<Input
									placeholder="Digite seu nome..."
									{...field}
									className="font-gantari text-christalle  border-b-1 border-christalle/55 p-2 indent-2 text-sm outline-0"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
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
									className="font-gantari text-christalle  border-b-1 border-christalle/55 p-2 indent-2 text-sm outline-0"
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
									className="font-gantari text-christalle  border-b-1 border-christalle/55 p-2 indent-2 text-sm outline-0"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
        <FormField
					control={form.control}
					name="confirmPassword"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel className="text-cabaret">Comfirme a senha</FormLabel>
							<FormControl>
								<Input
									placeholder="Confirme sua senha..."
									{...field}
									className="font-gantari text-christalle  border-b-1 border-christalle/55 p-2 indent-2 text-sm outline-0"
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
					Criar Conta
				</Button>
			</form>
		</Form>
	);
}
