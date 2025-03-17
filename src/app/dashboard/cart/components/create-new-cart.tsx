'use client';

import { useContext, useState } from 'react';
import { StartStep } from './start-step';
import { SuperMarketNameStep } from './supermarket-name-step';
import { CreateCartStep } from './create-cart-step';
import { CartStepContext } from '../contexts/cart-step-context';
import { Prisma } from '@prisma/client';

export type CreateNewCartStep = 'start' | 'supermarketName' | 'createCart';

interface CreateNewCartProps {
	products: Array<
		Prisma.ProductGetPayload<{
			include: {
				cartProducts: {
					select: {
						quantity: true;
					};
					include: {
						cart: {
							select: {
								restaurant: true;
							};
						};
					};
				};
			};
		}>
	>;
}

export function CreateNewCart({ products }: CreateNewCartProps) {
	const { cartStep } = useContext(CartStepContext);

	return (
		<>
			{cartStep === 'start' && <StartStep />}
			{cartStep === 'supermarketName' && <SuperMarketNameStep />}
			{cartStep === 'createCart' && <CreateCartStep products={products} />}
		</>
	);
}
