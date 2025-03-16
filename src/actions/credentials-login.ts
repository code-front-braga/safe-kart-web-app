'use server';

import { db } from '@/lib/db/prisma';
import { CredentialsLoginData, CredentialsLoginSchema } from '@/lib/zod';
import { signIn } from '../../auth';
import { redirect } from 'next/navigation';
import { AuthError } from 'next-auth';
export async function credentialsLogin(data: CredentialsLoginData) {
	const validatedData = CredentialsLoginSchema.parse(data);
	if (!validatedData) return { error: 'Dados de entrada inválidos' };

	const { email, password } = validatedData;

	const existingUser = await db.user.findFirst({
		where: { email },
	});

	if (!existingUser || !existingUser.email || !existingUser.password)
		return {
			error:
				'Usuário não encontrado. Verifique seu e-mail e senha e tente novamente.',
		};

	try {
		await signIn('credentials', {
			email: existingUser.email,
			password,
		});
		redirect('/dashboard');
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case 'CredentialsSignin':
					return { error: 'Credenciais inválidas' };
				default:
					return { error: 'Por favor, confirme seu endereço de email' };
			}
		}
		throw error;
	}
}
