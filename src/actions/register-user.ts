'use server';

import { db } from '@/lib/db/prisma';
import { RegisterData, RegisterSchema } from '@/lib/zod';
import { hash } from 'bcrypt-ts';

export async function registerUser(data: RegisterData) {
	try {
		const validatedData = RegisterSchema.parse(data);
		if (!validatedData) return { error: 'Dados de entrada inválidos' };

		const { name, email, password, confirmPassword } = validatedData;
		if (password !== confirmPassword)
			return { error: 'As senhas não conferem' };

		const hashedPassword = await hash(password, 12);

		const existingUser = await db.user.findFirst({
			where: { email },
		});
		if (existingUser) return { error: 'Já existe um usuário com esse email' };

		const lowerCaseEmail = email.toLowerCase();

		const user = await db.user.create({
			data: {
				name,
				email: lowerCaseEmail,
				password: hashedPassword,
			},
		});

		return { success: 'Usuário criado com sucesso!' };
	} catch (error) {
		console.error(error);
		return { error: 'Ocorreu um erro ao registrar o usuário' };
	}
}
