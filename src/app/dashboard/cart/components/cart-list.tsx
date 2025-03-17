import { Prisma, Product } from '@prisma/client';
import { CartItem } from './cart-item';

interface ProductProps {
	products: Array<
		Prisma.ProductGetPayload<{
			include: {
				cartProducts: {
					select: {
						quantity: true;
					};
				};
			};
		}>
	>;
}

export function CartList({ products }: ProductProps) {
	return (
		<div className="flex h-full w-full flex-col justify-between overflow-hidden">
			<ul className="flex h-full w-full flex-col gap-3 overflow-y-auto">
				{products.map(product => (
					<CartItem product={product} />
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
