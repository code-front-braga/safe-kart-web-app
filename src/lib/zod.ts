import { z } from 'zod';

const CredentialsLoginSchema = z.object({
	email: z.string().min(2, { message: 'Digite seu email' }),
	password: z.string().min(6, { message: 'Digite sua senha' }),
});

type CredentialsLoginData = z.infer<typeof CredentialsLoginSchema>;

const RegisterSchema = z.object({
	name: z.string().min(1, { message: 'Campo obrigatório' }),
	email: z.string().email({ message: 'Formato de email inválido' }),
	password: z
		.string()
		.min(6, { message: 'Sua senha deve conter, pelo menos, 6 caracteres' })
		.regex(/[A-Z]/, 'Deve conter uma letra maiúscula')
		.regex(/[a-z]/, 'Deve conter uma letra minúscula')
		.regex(/\d/, 'Deve conter um número')
		.regex(/[^A-Za-z0-9]/, 'Deve conter um caracter especial'),
	confirmPassword: z.string().min(6, {
		message: 'A senha deve ter pelo menos 6 caracteres',
	}),
});

type RegisterData = z.infer<typeof RegisterSchema>;

export {
	CredentialsLoginSchema,
	RegisterSchema,
	type CredentialsLoginData,
	type RegisterData,
};
