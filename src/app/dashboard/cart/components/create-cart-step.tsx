'use client';

import { useContext } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { CartContext } from '../contexts/cart-context';
import { AddItemForm } from './add-item-form';

export function CreateCartStep() {
	const {
		isOpenFormButtonClicked,
		handleOpenAddItemForm,
		setIsOpenFormButtonClicked,
	} = useContext(CartContext);

	return (
		<>
			<div className="text-christalle flex w-full flex-col items-center">
				<div className="flex w-full items-center justify-between">
					<span className="font-semibold">Atakarejo</span>

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
				</div>
				<span className="border-christalle/50 mt-2 w-full border-b-1" />
			</div>

			{isOpenFormButtonClicked && <AddItemForm />}
			{/* {isAddItemFormSubmitted && <CartList />} */}
		</>
	);
}
