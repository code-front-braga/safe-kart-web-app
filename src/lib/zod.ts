import { z } from 'zod';

const CredentialsLoginSchema = z.object({
	email: z.string().min(2, { message: 'Digite seu email' }),
	password: z.string().min(6, { message: 'Digite sua senha' }),
});

type CredentialsLoginData = z.infer<typeof CredentialsLoginSchema>;

export { CredentialsLoginSchema, type CredentialsLoginData };
