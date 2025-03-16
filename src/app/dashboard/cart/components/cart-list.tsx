import { CartItem } from './cart-item';

export interface Product {
	productName: string;
	unitPrice: number;
	quantity: number;
	amount: number;
}

const products: Product[] = [
	{
		productName: 'Product 1',
		unitPrice: 10,
		quantity: 2,
		amount: 20,
	},
	{
		productName: 'Product 2',
		unitPrice: 15,
		quantity: 3,
		amount: 45,
	},
	{
		productName: 'Product 3',
		unitPrice: 20,
		quantity: 1,
		amount: 20,
	},
	{
		productName: 'Product 4',
		unitPrice: 25,
		quantity: 4,
		amount: 100,
	},
	{
		productName: 'Product 5',
		unitPrice: 30,
		quantity: 5,
		amount: 150,
	},
	{
		productName: 'Product 6',
		unitPrice: 35,
		quantity: 2,
		amount: 70,
	},
	{
		productName: 'Product 7',
		unitPrice: 40,
		quantity: 3,
		amount: 120,
	},
];

export function CartList() {
	return (
		<div className="flex h-full w-full flex-col justify-between overflow-hidden">
			<ul className="flex h-full w-full flex-col gap-3 overflow-y-auto">
				{products.map(product => (
					<CartItem
						key={product.productName}
						productName={product.productName}
						unitPrice={product.unitPrice}
						quantity={product.quantity}
						amount={product.amount}
					/>
				))}
			</ul>
			<button
				type="button"
				onClick={() => {}}
				className="bg-persimmon rounded px-4 py-2 text-white shadow-[0_-16px_22px_#00000045]"
			>
				Finalizar Compra
			</button>
		</div>
	);
}
