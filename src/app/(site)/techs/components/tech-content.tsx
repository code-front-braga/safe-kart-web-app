'use client';

import { motion } from 'motion/react';
import { TechsList } from './techs-list';

export function TechContent() {
	return (
		<article className="relative z-10 container mt-20 flex flex-col gap-6 px-5 py-8 md:m-auto">
			<motion.h2
				className="font-gantari text-center text-lg text-white"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: 'easeOut' }}
				viewport={{ once: false }}
			>
				Tecnologias do <span className="text-cabaret">S</span>afe
				<span className="text-cabaret">K</span>art
			</motion.h2>

			<TechsList />
		</article>
	);
}
