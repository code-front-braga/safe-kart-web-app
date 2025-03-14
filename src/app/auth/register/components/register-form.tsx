'use client';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RegisterData, RegisterSchema } from '@/lib/zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'motion/react';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { FaUserPlus } from 'react-icons/fa6';

type RegisterSteps =
	| 'nameStep'
	| 'emailStep'
	| 'passwordStep'
	| 'confirmPasswordStep'
	| 'finishStep';

export function RegisterForm() {
	const [registerStep, setRegisterStep] = useState<RegisterSteps>('nameStep');

	const form = useForm<RegisterData>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
	});

	const nextStep = (next: RegisterSteps) => setRegisterStep(next);

	// Animação de slide
	const slideVariants = {
		initial: { opacity: 0, x: 50 },
		animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
		exit: { opacity: 0, x: -50, transition: { duration: 0.4 } },
	};

	return (
		<Form {...form}>
			<form
				onSubmit={() => {}}
				className="mx-auto mt-2.5 flex w-full flex-col items-center gap-3.5 overflow-hidden relative"
			>
				<AnimatePresence mode="wait">
					{registerStep === 'nameStep' && (
						<motion.div
							key="nameStep"
							variants={slideVariants}
							initial="initial"
							animate="animate"
							exit="exit"
							className="w-full flex flex-col gap-2 h-48 justify-around"
						>
							<h3 className="text-christalle text-base mb-2 font-semibold">
								Para começar, digite seu nome ou um apelido...
							</h3>
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem className="w-full">
										<FormLabel className="text-cabaret">Nome</FormLabel>
										<FormControl>
											<Input
												placeholder="Digite seu nome/apelido..."
												{...field}
												className="font-gantari bg-christalle/25 text-christalle border-b-1 rounded-2xl border-christalle/55 p-2 indent-2 text-sm outline-0"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<button
								type="button"
								onClick={() => nextStep('emailStep')}
								className="mt-3 px-4 py-2 w-full bg-cabaret flex items-center justify-between text-white rounded-2xl"
							>
								<span>Avançar</span>
								<MdOutlineKeyboardDoubleArrowRight size={24} />
							</button>
						</motion.div>
					)}

					{registerStep === 'emailStep' && (
						<motion.div
							key="emailStep"
							variants={slideVariants}
							initial="initial"
							animate="animate"
							exit="exit"
							className="w-full flex flex-col gap-2 h-48 justify-around"
						>
							<h3 className="text-christalle text-base mb-2 font-semibold">
								Agora, digite seu melhor email...
							</h3>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem className="w-full">
										<FormLabel className="text-cabaret">Email</FormLabel>
										<FormControl>
											<Input
												placeholder="Digite seu email..."
												{...field}
												className="font-gantari bg-christalle/25 text-christalle border-b-1 rounded-2xl border-christalle/55 p-2 indent-2 text-sm outline-0"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<button
								type="button"
								onClick={() => nextStep('passwordStep')}
								className="mt-3 px-4 py-2 w-full bg-cabaret flex items-center justify-between text-white rounded-2xl"
							>
								<span>Avançar</span>
								<MdOutlineKeyboardDoubleArrowRight size={24} />
							</button>
						</motion.div>
					)}

					{registerStep === 'passwordStep' && (
						<motion.div
							key="passwordStep"
							variants={slideVariants}
							initial="initial"
							animate="animate"
							exit="exit"
							className="w-full flex flex-col gap-2 h-48 justify-around"
						>
							<h3 className="text-christalle text-base mb-2 font-semibold">
								Crie uma senha...
							</h3>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem className="w-full">
										<FormLabel className="text-cabaret">Senha</FormLabel>
										<FormControl>
											<Input
												placeholder="Digite sua senha..."
												{...field}
												className="font-gantari bg-christalle/25 text-christalle border-b-1 rounded-2xl border-christalle/55 p-2 indent-2 text-sm outline-0"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<button
								type="button"
								onClick={() => nextStep('confirmPasswordStep')}
								className="mt-3 px-4 py-2 w-full bg-cabaret flex items-center justify-between text-white rounded-2xl"
							>
								<span>Avançar</span>
								<MdOutlineKeyboardDoubleArrowRight size={24} />
							</button>
						</motion.div>
					)}
					{registerStep === 'confirmPasswordStep' && (
						<motion.div
							key="confirmPasswordStep"
							variants={slideVariants}
							initial="initial"
							animate="animate"
							exit="exit"
							className="w-full flex flex-col gap-2 h-48 justify-around"
						>
							<h3 className="text-christalle text-base mb-2 font-semibold">
								Por favor, confirme sua senha...
							</h3>
							<FormField
								control={form.control}
								name="confirmPassword"
								render={({ field }) => (
									<FormItem className="w-full">
										<FormLabel className="text-cabaret">
											Confirme a senha
										</FormLabel>
										<FormControl>
											<Input
												placeholder="Confirme sua senha..."
												{...field}
												className="font-gantari bg-christalle/25 text-christalle border-b-1 rounded-2xl border-christalle/55 p-2 indent-2 text-sm outline-0"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<button
								type="button"
								onClick={() => nextStep('finishStep')}
								className="mt-3 px-4 py-2 w-full bg-cabaret flex items-center justify-between text-white rounded-2xl"
							>
								<span>Avançar</span>
								<MdOutlineKeyboardDoubleArrowRight size={24} />
							</button>
						</motion.div>
					)}
					{registerStep === 'finishStep' && (
						<motion.div
							key="passwordStep"
							variants={slideVariants}
							initial="initial"
							animate="animate"
							exit="exit"
							className="w-full flex flex-col gap-2 h-48 justify-around"
						>
							<h3 className="text-christalle text-base mb-2 font-semibold">
								Quase lá...Para finalizar, basta clicar no botão abaixo!
							</h3>
							<Button
								type="submit"
								className="mt-3 px-4 py-2 w-full bg-cabaret flex items-center justify-between text-white rounded-2xl"
							>
								<span>Criar Conta</span>
								<FaUserPlus size={24} />
							</Button>
						</motion.div>
					)}
				</AnimatePresence>
			</form>
		</Form>
	);
}
