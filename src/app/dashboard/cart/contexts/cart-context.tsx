'use client';

import { createContext, useState } from 'react';

interface ICartContext {
	isOpenFormButtonClicked: boolean;
	isAddItemFormSubmitted: boolean;
	setIsOpenFormButtonClicked: (param: boolean) => void;
	handleOpenAddItemForm: () => void;
	handleCloseAddItemForm: () => void;
	handleSubmitAddItemForm: () => void;
}

export const CartContext = createContext<ICartContext>({
	isOpenFormButtonClicked: false,
	isAddItemFormSubmitted: false,
	setIsOpenFormButtonClicked: () => {},
	handleOpenAddItemForm: () => {},
	handleCloseAddItemForm: () => {},
	handleSubmitAddItemForm: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const [isOpenFormButtonClicked, setIsOpenFormButtonClicked] =
		useState<boolean>(false);
	const [isAddItemFormSubmitted, setIsAddItemFormSubmitted] =
		useState<boolean>(false);

	function handleOpenAddItemForm() {
		setIsOpenFormButtonClicked(true);
	}

	function handleCloseAddItemForm() {
		setIsOpenFormButtonClicked(false);
	}

	function handleSubmitAddItemForm() {
		setIsAddItemFormSubmitted(true);
		handleCloseAddItemForm();
	}

	return (
		<CartContext.Provider
			value={{
				isOpenFormButtonClicked,
				setIsOpenFormButtonClicked,
				isAddItemFormSubmitted,
				handleOpenAddItemForm,
				handleCloseAddItemForm,
				handleSubmitAddItemForm,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
