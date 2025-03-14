import { db } from '@/lib/db/prisma';

export async function getUserById(id: string) {
	try {
		const user = await db.user.findUnique({
			where: { id },
		});

		return user;
	} catch (error) {
		console.error(error);

		return null;
	}
}
