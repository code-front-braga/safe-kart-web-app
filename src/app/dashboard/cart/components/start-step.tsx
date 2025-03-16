'use client';

import { useContext } from 'react';
import { GoPlus } from 'react-icons/go';
import { CartStepContext } from '../contexts/cart-step-context';

export function StartStep() {
	const { nextStep } = useContext(CartStepContext);

	return (
		<div className="flex h-full">
			<button
				onClick={() => nextStep('supermarketName')}
				className="flex items-center gap-1 self-end"
			>
				<GoPlus size={20} color="#f25c05" />
				<span className="text-christalle">Criar lista de compras</span>
			</button>
		</div>
	);
}
