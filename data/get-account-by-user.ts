import { db } from '@/lib/db/prisma';

export async function getAccountByUser(userId: string) {
	try {
		const account = await db.account.findFirst({
			where: { userId },
		});
		return account;
	} catch (error) {
		console.error(error);
		return null;
	}
}
