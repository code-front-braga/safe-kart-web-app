import { MdDelete } from 'react-icons/md';
import { Product } from './cart-list';
import { BiSolidEditAlt } from 'react-icons/bi';

export function CartItem({
	productName,
	unitPrice,
	quantity,
	amount,
}: Product) {
	return (
		<li className="bg-moonRaker/80 text-christalle flex items-center justify-between gap-5 rounded p-1.5 text-sm font-semibold">
			<div className="flex flex-1 items-center justify-between">
				<div className="flex flex-col">
					<span>
						Produto: <span>{productName}</span>
					</span>
					<span>
						Preço (Un.): <span>R$ {unitPrice}</span>
					</span>
					<span>
						Quantidade: <span>{quantity}</span>
					</span>
				</div>
				<div className="flex flex-col items-end">
					<span>Total</span>
					<span>R$ {amount}</span>
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
