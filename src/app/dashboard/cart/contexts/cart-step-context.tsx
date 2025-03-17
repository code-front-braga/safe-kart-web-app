'use client';

import { createContext, useState } from 'react';
import { CreateNewCartStep } from '../components/create-new-cart';

interface CartStepContext {
	cartStep: CreateNewCartStep;
	nextStep: (step: CreateNewCartStep) => void;
	setCartStep: (step: CreateNewCartStep) => void;
	supermarketName: string;
	setSupermarketName: (name: string) => void;
}

export const CartStepContext = createContext<CartStepContext>({
	cartStep: 'start',
	setCartStep: () => {},
	nextStep: () => {},
	supermarketName: '',
	setSupermarketName: () => {},
});

export const CartStepProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [cartStep, setCartStep] = useState<CreateNewCartStep>('start');
	const [supermarketName, setSupermarketName] = useState('');

	function nextStep(step: CreateNewCartStep) {
		setCartStep(step);
	}

	return (
		<CartStepContext.Provider
			value={{
				cartStep,
				setCartStep,
				nextStep,
				setSupermarketName,
				supermarketName,
			}}
		>
			{children}
		</CartStepContext.Provider>
	);
};
