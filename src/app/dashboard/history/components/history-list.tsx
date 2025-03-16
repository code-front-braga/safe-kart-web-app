export function HistoryList() {
	return (
		<ul className="flex w-full flex-col gap-3 overflow-y-auto">
			<li className="bg-moonRaker/80 flex items-center gap-5 rounded p-1.5 text-sm text-christalle font-semibold">
				<div className="flex items-center justify-between w-full">
					<div className="flex flex-col items-start gap-1 text-sm">
						<p>
							Supermercado: <span>Atakarejo</span>
						</p>
						<p>
							Data: <span>22/04/2025</span>
						</p>
						<p>
							Total: <span>R$ 650,00</span>
						</p>
					</div>
					<button className="text-persimmon font-semibold">Ver Detalhes</button>
				</div>
			</li>
		</ul>
	);
}
