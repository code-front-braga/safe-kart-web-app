import { MdDelete } from 'react-icons/md';
import { BiSolidEditAlt } from 'react-icons/bi';
import { Prisma } from '@prisma/client';

interface ProductProps {
	product: Prisma.ProductGetPayload<{
		include: {
			cartProducts: {
				select: {
					quantity: true;
				};
			};
		};
	}>;
}

export function CartItem({ product }: ProductProps) {
	return (
		<li className="bg-moonRaker/80 text-christalle flex items-center justify-between gap-5 rounded p-1.5 text-sm font-semibold">
			<div className="flex flex-1 items-center justify-between">
				<div className="flex flex-col">
					<span>
						Produto: <span>{product.name}</span>
					</span>
					<span>
						Preço (Un.): <span>R$ {product.price}</span>
					</span>
					{product.cartProducts.map(cartProduct => (
						<span>
							Quantidade: <span>{cartProduct.quantity}</span>
						</span>
					))}
				</div>
				<div className="flex flex-col items-end">
					<span>Total</span>
					<span>R$ {product.total}</span>
				</div>
			</div>
			<div className="flex h-full flex-col items-center justify-around border-l-1 border-l-white pl-2">
				<button>
					<BiSolidEditAlt size={22} className="text-christalle" />
				</button>
				<button>
					<MdDelete size={22} className="text-cabaret" />
				</button>
			</div>
		</li>
	);
}
