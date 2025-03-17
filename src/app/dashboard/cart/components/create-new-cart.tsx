'use client';

import { useContext } from 'react';
import { StartStep } from './start-step';
import { SuperMarketNameStep } from './supermarket-name-step';
import { CreateCartStep } from './create-cart-step';
import { CartStepContext } from '../contexts/cart-step-context';

export type CreateNewCartStep = 'start' | 'supermarketName' | 'createCart';


export function CreateNewCart() {
	const { cartStep } = useContext(CartStepContext);

	return (
		<>
			{cartStep === 'start' && <StartStep />}
			{cartStep === 'supermarketName' && <SuperMarketNameStep />}
			{cartStep === 'createCart' && <CreateCartStep />}
		</>
	);
}
