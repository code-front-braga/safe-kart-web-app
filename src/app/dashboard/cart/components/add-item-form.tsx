'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { AddNewItemData, AddNewItemSchema } from '@/lib/zod';
import { Input } from '@/components/ui/input';
import { useContext, useEffect } from 'react';
import { CartContext } from '../contexts/cart-context';
import { motion } from 'motion/react';
import { currency } from 'remask';

export function AddItemForm() {
	const { handleSubmitAddItemForm, handleCloseAddItemForm } =
		useContext(CartContext);

	const form = useForm<AddNewItemData>({
		resolver: zodResolver(AddNewItemSchema),
		defaultValues: {
			productName: '',
			category: '',
			unitPrice: 0,
			quantity: 0,
		},
	});

	function onSubmit(data: AddNewItemData) {
		console.log(data);

		handleSubmitAddItemForm();
	}

	function formatToCurrencyBrl(value: number | string) {
		if (!value) return '';

		const numericValue = Number(value);
		if (isNaN(numericValue)) return '';

		return currency.mask({
			locale: 'pt-BR',
			currency: 'BRL',
			value: numericValue,
		});
	}

	useEffect(() => {
		form.setFocus('productName');
	}, []);

	return (
		<motion.div
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ type: 'tween', ease: 'anticipate' }}
			className="h-full"
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex h-full flex-col gap-8 rounded p-2"
				>
					<FormField
						control={form.control}
						name="productName"
						render={({ field }) => (
							<FormItem className="relative">
								<FormLabel>Product Name</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="Insira o nome do produto"
										className="font-gantari bg-christalle/25 text-christalle rounded p-2 indent-2 text-sm outline-0"
									/>
								</FormControl>
								<FormMessage className="absolute -bottom-5" />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="category"
						render={({ field }) => (
							<FormItem className="relative">
								<FormLabel>Categoria</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger className="font-gantari bg-christalle/25 text-christalle w-full rounded p-2 indent-2 text-sm outline-0">
											<SelectValue placeholder="Selecione uma categoria" />
										</SelectTrigger>
									</FormControl>
									<SelectContent className="text-christalle h-55">
										<SelectItem value="carnes-frios">Carnes e Frios</SelectItem>
										<SelectItem value="alimentos-frescos">
											Alimentos Frescos
										</SelectItem>
										<SelectItem value="padaria-confeitaria">
											Padaria e Confeitaria
										</SelectItem>
										<SelectItem value="laticínios-derivados">
											Laticínios e Derivados
										</SelectItem>
										<SelectItem value="mercearia">Mercearia</SelectItem>
										<SelectItem value="bebidas">Bebidas</SelectItem>
										<SelectItem value="higiene-pessoal">
											Higiene Pessoal
										</SelectItem>
										<SelectItem value="limpeza-utilidades-domésticas">
											Limpeza e Utilidades Domésticas
										</SelectItem>
										<SelectItem value="pet-shop">Pet Shop</SelectItem>
										<SelectItem value="bebê-infantil">
											Bebê e Infantil
										</SelectItem>
										<SelectItem value="saúde-farmácia">
											Saúde e Farmácia
										</SelectItem>
									</SelectContent>
								</Select>
								<FormMessage className="absolute -bottom-5" />
							</FormItem>
						)}
					/>
					<div className="relative flex w-full items-center gap-4">
						<FormField
							control={form.control}
							name="unitPrice"
							render={({ field }) => (
								<FormItem className="flex-1">
									<FormLabel>Preço Unitário</FormLabel>
									<FormControl>
										<Input
											type="text"
											value={
												field.value ? formatToCurrencyBrl(field.value) : ''
											}
											onChange={e => {
												const rawValue = e.target.value.replace(/\D/g, '');

												if (!rawValue) {
													field.onChange('');
													return;
												}

												const numericValue = Number(rawValue) / 100;
												field.onChange(numericValue);
											}}
											placeholder="R$ 0,00"
											className="font-gantari bg-christalle/25 text-christalle w-full rounded p-2 indent-2 text-sm outline-0"
										/>
									</FormControl>
									<FormMessage className="absolute -bottom-5" />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="quantity"
							render={({ field }) => (
								<FormItem className="flex-1">
									<FormLabel>Quantidade</FormLabel>
									<FormControl>
										<Input
											type="number"
											{...field}
											placeholder="Quantidade"
											className="font-gantari bg-christalle/25 text-christalle w-full rounded p-2 indent-2 text-sm outline-0"
										/>
									</FormControl>
									<FormMessage className="absolute -bottom-5" />
								</FormItem>
							)}
						/>
					</div>
					<div className="mt-auto flex gap-2.5">
						<Button
							type="submit"
							className="bg-cadetBlue font-gantari mt-1.5 w-full flex-1 cursor-pointer rounded py-2.5 text-sm text-white"
						>
							Adicionar Item
						</Button>
						<Button
							type="button"
							onClick={handleCloseAddItemForm}
							className="bg-cabaret font-gantari mt-1.5 w-full flex-1 cursor-pointer rounded py-2.5 text-sm text-white"
						>
							Cancelar
						</Button>
					</div>
				</form>
			</Form>
		</motion.div>
	);
}
