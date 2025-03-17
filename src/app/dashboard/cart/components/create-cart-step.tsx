'use client';

import { useContext } from 'react';
import { CartContext } from '../contexts/cart-context';
import { AddItemForm } from './add-item-form';
import { CartList } from './cart-list';
import { CartHeader } from './cart-header';

export function CreateCartStep() {
	const { isOpenFormButtonClicked, isAddItemFormSubmitted } =
		useContext(CartContext);

	return (
		<>
			<CartHeader />

			{isOpenFormButtonClicked && <AddItemForm />}
			{isAddItemFormSubmitted && <CartList />}
		</>
	);
}
