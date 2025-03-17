'use client';

import { motion } from 'motion/react';
import { useContext } from 'react';
import { CartContext } from '../contexts/cart-context';
import { FaCartPlus } from 'react-icons/fa';
import { Cart } from '@prisma/client';

interface CartHeaderProps {
	product: Pick<Cart, 'restaurant' | 'amount'>;
}

export function CartHeader({ product }: CartHeaderProps) {
	const { setIsOpenFormButtonClicked } = useContext(CartContext);
	return (
		<motion.div
			initial={{ opacity: 0, x: 500 }}
			animate={{ opacity: 1, x: 0 }}
			className="flex w-full items-center justify-between"
		>
			<span className="text-christalle font-semibold">
				{product.restaurant}
			</span>

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
				<span className="text-cadetBlue font-semibold">
					R$ {product.amount}
				</span>
			</div>
		</motion.div>
	);
}
