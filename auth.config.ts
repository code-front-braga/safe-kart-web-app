import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import { NextAuthConfig } from 'next-auth';
import { compare } from 'bcrypt-ts';
import { CredentialsLoginSchema } from '@/lib/zod';
import { db } from '@/lib/db/prisma';

export default {
	providers: [
		Google({
			clientId: process.env.AUTH_GOOGLE_ID,
			clientSecret: process.env.AUTH_GOOGLE_SECRET,
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
					where: { email: email },
				});
				if (!user || !user.password || !user.email) {
					return null;
				}

				const passwordsMatch = await compare(password, user.password);
				if (passwordsMatch) {
					return user;
				}

				return null;
			},
		}),
	],
} satisfies NextAuthConfig;
