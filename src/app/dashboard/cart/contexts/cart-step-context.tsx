'use client';

import { createContext, useState } from 'react';
import { CreateNewCartStep } from '../components/create-new-cart';

interface CartStepContext {
	cartStep: CreateNewCartStep;
	setCartStep: (step: CreateNewCartStep) => void;
	nextStep: (step: CreateNewCartStep) => void;
}

export const CartStepContext = createContext<CartStepContext>({
	cartStep: 'start',
	setCartStep: () => {},
	nextStep: () => {},
});

export const CartStepProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [cartStep, setCartStep] = useState<CreateNewCartStep>('start');

	function nextStep(step: CreateNewCartStep) {
		setCartStep(step);
	}

	return (
		<CartStepContext.Provider value={{ cartStep, setCartStep, nextStep }}>
			{children}
		</CartStepContext.Provider>
	);
};
