'use server';

import { db } from '@/lib/db/prisma';
import { CredentialsLoginData, CredentialsLoginSchema } from '@/lib/zod';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';
import { signIn } from '../../auth';

export async function login(data: CredentialsLoginData) {
	const validatedData = CredentialsLoginSchema.parse(data);

	if (!validatedData) {
		return { error: 'Dados de entrada inválidos' };
	}

	const { email, password } = validatedData;

	const userExists = await db.user.findFirst({
		where: { email: email },
	});

	if (!userExists || !userExists.password || !userExists.email) {
		return { error: 'Usuário não encontrado' };
	}

	try {
		await signIn('credentials', {
			email: userExists.email,
			password: password,
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
	return { success: 'Usuário logado com sucesso!' };
}
