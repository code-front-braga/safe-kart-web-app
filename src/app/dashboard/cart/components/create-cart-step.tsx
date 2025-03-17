'use client';

import { useContext } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { CartContext } from '../contexts/cart-context';
import { AddItemForm } from './add-item-form';
import { CartList } from './cart-list';
import { Prisma } from '@prisma/client';
import { CartHeader } from './cart-header';
import { CartStepContext } from '../contexts/cart-step-context';

interface ProductProps {
	products: Array<
		Prisma.ProductGetPayload<{
			include: {
				cartProducts: {
					select: {
						quantity: true;
					};
				};
			};
		}>
	>;
}

export function CreateCartStep({ products }: ProductProps) {
	const { isOpenFormButtonClicked, isAddItemFormSubmitted } =
		useContext(CartContext);
	const { supermarketName } = useContext(CartStepContext);

	return (
		<>
			<CartHeader
				product={{
					restaurant: supermarketName,
					amount: products.reduce((acc, product) => acc + product.price, 0),
				}}
			/>

			{isOpenFormButtonClicked && <AddItemForm />}
			{isAddItemFormSubmitted && <CartList products={products} />}
		</>
	);
}
