import { Env } from '@/lib/env';
import { NextAuthConfig } from 'next-auth';
import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { CredentialsLoginSchema } from '@/lib/zod';
import { db } from '@/lib/db/prisma';
import { compare } from 'bcrypt-ts';

export default {
	providers: [
		Google({
			clientId: Env.AUTH_GOOGLE_ID,
			clientSecret: Env.AUTH_GOOGLE_SECRET,
			authorization: {
				params: {
					prompt: 'consent',
					access_type: 'offline',
					response_type: 'code',
				},
			},
		}),
		Credentials({
			async authorize(credentials) {
				const validatedData = CredentialsLoginSchema.safeParse(credentials);

				if (!validatedData.success) return null;

				const { email, password } = validatedData.data;
				const user = await db.user.findFirst({
					where: { email },
				});
				if (!user || !user.email || !user.password) return null;

				const passwordsMatch = await compare(user.password, password);
				if (passwordsMatch) return user;

				return null;
			},
		}),
	],
} satisfies NextAuthConfig;
