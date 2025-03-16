'use client';

import { useContext } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { CartContext } from '../contexts/cart-context';
import { AddItemForm } from './add-item-form';
import { motion } from 'motion/react';
import { CartList } from './cart-list';

export function CreateCartStep() {
	const {
		isOpenFormButtonClicked,
		setIsOpenFormButtonClicked,
		isAddItemFormSubmitted,
	} = useContext(CartContext);

	return (
		<>
			<motion.div
				initial={{ opacity: 0, x: 500 }}
				animate={{ opacity: 1, x: 0 }}
				className="flex w-full items-center justify-between"
			>
				<span className="text-christalle font-semibold">Atakarejo</span>

				<button
					type="button"
					onClick={() => setIsOpenFormButtonClicked(true)}
					className="text-cabaret flex flex-col items-center"
				>
					<FaCartPlus size={26} />
					<p className="text-xs">Add Item</p>
				</button>

				<div className="flex flex-col items-end">
					<p className="text-christalle font-semibold">Total</p>
					<span className="text-cadetBlue font-semibold">R$ 150,00</span>
				</div>
			</motion.div>

			{isOpenFormButtonClicked && <AddItemForm />}
			{isAddItemFormSubmitted && <CartList />}
		</>
	);
}
