import { Env } from '@/lib/env';
import { NextAuthConfig } from 'next-auth';
import Google from 'next-auth/providers/google';

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
	],
} satisfies NextAuthConfig;
