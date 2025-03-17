'use server';

import { db } from '@/lib/db/prisma';

interface CreateCartInput {
	supermarketName: string;
	products: Array<{
		id: string;
		productName: string;
		category: string;
		price: number;
		quantity: number;
	}>;
	userId: string;
	productId: string;
	cartProductId: string;
}

export async function createCart(input: CreateCartInput) {
	const supermarket = await db.cart.findUnique({
		where: { id: input.supermarketName },
	});
	if (!supermarket) {
		throw new Error('Supermarket not found');
	}

	const productsWithPrices = await db.product.findMany({
		where: {
			id: {
				in: input.products.map(product => product.id),
			},
		},
	});

	const productsWithPriceAndQuantities = input.products.map(product => ({
		productId: product.id,
		quantity: product.quantity,
		price: productsWithPrices.find(p => p.id === product.id)!.price,
	}));

	await db.cart.create({
		data: {
			supermarketName: input.supermarketName,
			cartProducts: {
				createMany: {
					data: productsWithPriceAndQuantities,
				},
			},
			amount: productsWithPriceAndQuantities.reduce(
				(acc, product) => acc + product.price * product.quantity,
				0,
			),
			userId: input.userId,
			productId: input.productId,
			cartProductId: input.cartProductId,
		},
	});
}
