import { z } from 'zod';

const CredentialsLoginSchema = z.object({
	email: z.string().min(2, { message: 'Digite seu email' }),
	password: z.string().min(6, { message: 'Digite sua senha' }),
});

type CredentialsLoginData = z.infer<typeof CredentialsLoginSchema>;

const RegisterSchema = z
	.object({
		name: z.string().min(1, { message: 'Campo obrigatório' }).trim(),
		email: z.string().email({ message: 'Formato de email inválido' }).trim(),
		password: z
			.string()
			.min(6, { message: 'Sua senha deve conter, pelo menos, 6 caracteres' })
			.regex(/[A-Z]/, { message: 'Deve conter uma letra maiúscula' })
			.regex(/[a-z]/, { message: 'Deve conter uma letra minúscula' })
			.regex(/\d/, { message: 'Deve conter um número' })
			.regex(/[^A-Za-z0-9]/, { message: 'Deve conter um caracter especial' }),
		confirmPassword: z.string(),
	})
	.refine(data => data.password === data.confirmPassword, {
		message: 'As senhas não coincidem',
		path: ['confirmPassword'],
	});

type RegisterData = z.infer<typeof RegisterSchema>;

const SupermarketNameSchema = z.object({
	supermarketName: z
		.string()
		.min(2, { message: 'Digite o nome de um supermercado' }),
});

type SupermarketNameData = z.infer<typeof SupermarketNameSchema>;

const AddNewItemSchema = z.object({
	productName: z.string().min(1, { message: 'Digite um produto' }).trim(),
	category: z.string().min(1, { message: 'Selecione uma categoria' }),
	unitPrice: z.coerce
		.number()
		.min(0.01, { message: 'Digite um preço válido' })
		.refine(n => n > 0, { message: 'Deve ser maior que 0' }),

	quantity: z.coerce
		.number()
		.min(1, { message: 'Digite um número' })
		.refine(n => n > 0, { message: 'Deve ser maior que 0' }),
});

type AddNewItemData = z.infer<typeof AddNewItemSchema>;

export {
	CredentialsLoginSchema,
	RegisterSchema,
	SupermarketNameSchema,
	AddNewItemSchema,
	type CredentialsLoginData,
	type RegisterData,
	type SupermarketNameData,
	type AddNewItemData,
};
