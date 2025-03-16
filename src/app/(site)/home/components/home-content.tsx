'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { FaOpencart } from 'react-icons/fa';

export function HomeContent() {
	return (
		<article className="relative z-10 m-auto flex flex-col items-center gap-1">
			<div className="relative flex items-center justify-center gap-1 overflow-hidden">
				<motion.h1
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1.4, ease: 'easeOut', delay: 1.2 }}
					className="text-2xl text-white sm:text-3xl"
				>
					<span className="text-cabaret">S</span>afe
					<span className="text-cabaret">K</span>art
				</motion.h1>
				<motion.div
					initial={{ x: -50 }}
					animate={{ x: 0 }}
					transition={{ duration: 0.8, delay: 0.5 }}
					className="bg-cabaret z-0 flex items-center justify-center rounded-full p-1.5"
				>
					<FaOpencart size={24} className="text-white" />
				</motion.div>
			</div>
			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, ease: 'linear', delay: 1.6 }}
				className="text-lg text-white sm:text-xl"
			>
				Seu supermercado, do seu jeito.
			</motion.p>
			<motion.button
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, ease: 'anticipate', delay: 1.8 }}
				className="mt-1.5 rounded-sm bg-white p-1.5 shadow-2xl sm:w-full"
			>
				<Link
					href="/auth/register"
					className="text-christalle font-semibold sm:text-xl"
				>
					Crie sua conta
				</Link>
			</motion.button>
		</article>
	);
}
