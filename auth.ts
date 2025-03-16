import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import authConfig from './auth.config';
import { getUserById } from './data/get-user-by-id';
import { db } from '@/lib/db/prisma';
import { getAccountByUser } from './data/get-account-by-user';

export const {
	auth,
	handlers: { GET, POST },
	signIn,
	signOut,
} = NextAuth({
	adapter: PrismaAdapter(db),
	session: { strategy: 'jwt' },
	...authConfig,
	callbacks: {
		async signIn({ user, account }) {
			if (account?.provider !== 'credentials') {
				return true;
			}

			const existingUser = await getUserById(user.id ?? '');
			if (!existingUser) {
				return false;
			}

			return true;
		},
		async jwt({ token }) {
			if (!token.sub) return token;

			const existingUser = await getUserById(token.sub);

			if (!existingUser) return token;

			const existingAccount = await getAccountByUser(existingUser.id);

			token.isOauth = !!existingAccount;
			token.name = existingUser.name;
			token.email = existingUser.email;
			token.image = existingUser.image;

			return token;
		},
		async session({ token, session }) {
			return {
				...session,
				user: {
					...session.user,
					id: token.sub,
					isOauth: token.isOauth,
				},
			};
		},
	},
});
