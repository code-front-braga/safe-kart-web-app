'use client';

import { useContext, useState } from 'react';
import { StartStep } from './start-step';
import { SuperMarketNameStep } from './supermarket-name-step';
import { CreateCartStep } from './create-cart-step';
import { CartStepContext } from '../contexts/cart-step-context';
import { AnimatePresence } from 'motion/react';

export type CreateNewCartStep = 'start' | 'supermarketName' | 'createCart';

export function CreateNewCart() {
	const { cartStep } = useContext(CartStepContext);

	return (
		<AnimatePresence mode="wait">
			{cartStep === 'start' && <StartStep />}
			{cartStep === 'supermarketName' && <SuperMarketNameStep />}
			{cartStep === 'createCart' && <CreateCartStep />}
		</AnimatePresence>
	);
}
