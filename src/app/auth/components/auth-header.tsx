import { FaOpencart } from 'react-icons/fa';

export function AuthHeader() {
	return (
		<header className="z-50 w-full rounded-b-3xl p-[1.6rem]  md:static md:bg-transparent md:shadow-none">
			<div className="relative z-10 m-auto flex max-w-7xl flex-col items-center gap-1">
				<div className="relative flex items-center justify-center gap-1 overflow-hidden">
					<h1 className="font-rajdhani text-christalle tracking-wide text-2xl md:text-3xl">
						<span className="text-cabaret">S</span>afe
						<span className="text-cabaret">K</span>art
					</h1>
					<div className="bg-cabaret z-0 flex items-center justify-center rounded-full p-1.5">
						<FaOpencart size={22} className="text-white" />
					</div>
				</div>
				<p className=" text-christalle font-semibold text-base md:text-xl">
					Seu supermercado, do seu jeito.
				</p>
			</div>
		</header>
	);
}
