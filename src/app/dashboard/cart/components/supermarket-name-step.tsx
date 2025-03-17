'use client';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SupermarketNameData, SupermarketNameSchema } from '@/lib/zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { CartStepContext } from '../contexts/cart-step-context';
import { motion } from 'motion/react';

export function SuperMarketNameStep() {
	const { nextStep, setSupermarketName } = useContext(CartStepContext);
	const form = useForm<SupermarketNameData>({
		resolver: zodResolver(SupermarketNameSchema),
		defaultValues: { supermarketName: '' },
	});

	useEffect(() => {
		form.setFocus('supermarketName');
	});

	function onSubmit(data: SupermarketNameData) {
		setSupermarketName(data.supermarketName);
		nextStep('createCart');
	}

	return (
		<motion.div
			initial={{ opacity: 0, x: 500 }}
			animate={{ opacity: 1, x: 0 }}
			className="flex h-full flex-col"
		>
			<p className="text-christalle mb-4 text-justify text-base font-semibold">
				Olá! Antes de criar sua lista, por favor, informe o nome do supermercado
				onde você fará suas compras hoje e depois clique em{' '}
				<span className="text-persimmon font-bold">"Começar"</span>.
			</p>

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex h-full flex-col justify-between"
				>
					<FormField
						control={form.control}
						name="supermarketName"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-christalle">Supermercado</FormLabel>
								<FormControl>
									<Input
										placeholder="Digite o nome do supermercado..."
										{...field}
										className="font-gantari bg-christalle/25 text-christalle rounded p-2 indent-2 text-sm outline-0"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						type="submit"
						className="bg-persimmon hover:bg-persimmon-dark rounded px-4 py-2 font-semibold text-white transition-colors"
					>
						Começar
					</Button>
				</form>
			</Form>
		</motion.div>
	);
}
