import { OverviewCard, OverviewCardProps } from './overview-card';

const overviewItens: OverviewCardProps[] = [
	{
		title: 'Última Compra Realizada',
		description: '20/06/2022',
	},
	{
		title: 'Compra de maior valor',
		description: 'R$ 1.200,00',
	},
	{
		title: 'Valor Total Investido',
		description: 'R$ 1.200,00',
	},
	{
		title: 'Produto mais frequente',
		description: 'Arroz',
	},
	{
		title: 'Supermercado Predileto',
		description: 'Atakarejo',
	},
	{
		title: 'Quantidade de compras realizadas',
		description: '50',
	},
];

export function OverviewContainer() {
	const overviewList = overviewItens.map((item, index) => {
		return (
			<OverviewCard
				key={index}
				title={item.title}
				description={item.description}
			>
				{index === 0 && (
					<button type="button" className="text-persimmon font-semibold">
						Ver Detalhes
					</button>
				)}
				{index === 1 && (
					<button type="button" className="text-persimmon font-semibold">
						Ver Detalhes
					</button>
				)}
			</OverviewCard>
		);
	});

	return (
		<article className="flex flex-col gap-2 overflow-y-auto">
			{overviewList}
		</article>
	);
}
