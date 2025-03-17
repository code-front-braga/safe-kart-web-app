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
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'motion/react';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

import { FaUserPlus } from 'react-icons/fa6';
import { slideVariants } from '@/utils/constants';
import { registerUser } from '@/actions/register-user';
import { ErrorDialog } from '../../components/error-dialog';
import { SuccessDialog } from '../../components/success-dialog';
import { ImSpinner } from 'react-icons/im';
import { redirect } from 'next/navigation';

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
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		if (registerStep === 'nameStep') {
			form.setFocus('name');
		}
	}, [registerStep]);

	async function handleNextStep(
		fieldName: keyof RegisterData,
		nextStep: RegisterSteps,
	) {
		const isValid = await form.trigger(fieldName);
		if (isValid) {
			setRegisterStep(nextStep);
		}
	}

	async function handlePasswordConfirmation() {
		const isValid = await form.trigger(['password', 'confirmPassword']);
		const { password, confirmPassword } = form.getValues();

		if (!isValid) return;

		if (password !== confirmPassword) {
			form.setError('confirmPassword', { message: 'As senhas não coincidem' });
			return;
		}

		setRegisterStep('finishStep');
	}

	async function onSubmit(data: RegisterData) {
		setLoading(true);
		setError(null);
		setSuccess(null);
		registerUser(data).then(res => {
			if (res.error) {
				setLoading(false);
				setError(res.error);
			}
			if (res.success) {
				setLoading(false);
				setSuccess(res.success);
			}
			setLoading(false);
		});
		form.reset();
	}

	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="relative mx-auto mt-2.5 flex w-full flex-col items-center gap-3.5 overflow-hidden"
				>
					<AnimatePresence mode="wait">
						{registerStep === 'nameStep' && (
							<motion.div
								key="nameStep"
								variants={slideVariants}
								initial="initial"
								animate="animate"
								exit="exit"
								className="flex h-58 w-full flex-col justify-around gap-2"
							>
								<h3 className="text-christalle mb-2 text-base font-semibold">
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
													className="font-gantari bg-christalle/25 text-christalle rounded p-2 indent-2 text-sm outline-0"
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<button
									type="button"
									onClick={() => handleNextStep('name', 'emailStep')}
									className="bg-cabaret mt-3 flex w-full items-center justify-between rounded px-4 py-2 text-white"
								>
									<span>Avançar</span>
									<motion.div
										animate={{ x: 8 }}
										transition={{
											duration: 0.6,
											repeat: Infinity,
											repeatType: 'reverse',
										}}
									>
										<MdOutlineKeyboardDoubleArrowRight size={24} />
									</motion.div>
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
								className="flex h-58 w-full flex-col justify-around"
							>
								<h3 className="text-christalle text-base font-semibold">
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
													className="font-gantari bg-christalle/25 text-christalle rounded p-2 indent-2 text-sm outline-0"
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<button
									type="button"
									onClick={() => handleNextStep('email', 'passwordStep')}
									className="bg-cabaret mt-3 flex w-full items-center justify-between rounded px-4 py-2 text-white"
								>
									<span>Avançar</span>
									<motion.div
										animate={{ x: 8 }}
										transition={{
											duration: 0.6,
											repeat: Infinity,
											repeatType: 'reverse',
										}}
									>
										<MdOutlineKeyboardDoubleArrowRight size={24} />
									</motion.div>
								</button>
								{error && <ErrorDialog message={error} />}
							</motion.div>
						)}

						{registerStep === 'passwordStep' && (
							<motion.div
								key="passwordStep"
								variants={slideVariants}
								initial="initial"
								animate="animate"
								exit="exit"
								className="flex h-58 w-full flex-col justify-around gap-2"
							>
								<h3 className="text-christalle mb-2 text-base font-semibold">
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
													type="password"
													placeholder="Digite sua senha..."
													{...field}
													className="font-gantari bg-christalle/25 text-christalle rounded p-2 indent-2 text-sm outline-0"
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<button
									type="button"
									onClick={() =>
										handleNextStep('password', 'confirmPasswordStep')
									}
									className="bg-cabaret mt-3 flex w-full items-center justify-between rounded px-4 py-2 text-white"
								>
									<span>Avançar</span>
									<motion.div
										animate={{ x: 8 }}
										transition={{
											duration: 0.6,
											repeat: Infinity,
											repeatType: 'reverse',
										}}
									>
										<MdOutlineKeyboardDoubleArrowRight size={24} />
									</motion.div>
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
								className="flex h-58 w-full flex-col justify-around gap-2"
							>
								<h3 className="text-christalle mb-2 text-base font-semibold">
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
													type="password"
													placeholder="Confirme sua senha..."
													{...field}
													className="font-gantari bg-christalle/25 text-christalle rounded p-2 indent-2 text-sm outline-0"
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<button
									type="button"
									onClick={handlePasswordConfirmation}
									className="bg-cabaret mt-3 flex w-full items-center justify-between rounded px-4 py-2 text-white"
								>
									<span>Avançar</span>
									<motion.div
										animate={{ x: 8 }}
										transition={{
											duration: 0.6,
											repeat: Infinity,
											repeatType: 'reverse',
										}}
									>
										<MdOutlineKeyboardDoubleArrowRight size={24} />
									</motion.div>
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
								className="flex h-58 w-full flex-col justify-around gap-2"
							>
								<h3 className="text-christalle mb-2 text-base font-semibold">
									Quase lá...Para finalizar, basta clicar no botão abaixo!
								</h3>
								<Button
									type="submit"
									className="bg-cabaret mt-3 flex w-full items-center justify-between rounded px-4 py-2 text-white"
								>
									{loading ? (
										<>
											<span>Criando conta</span>{' '}
											<motion.div
												initial={{ scale: 1 }}
												animate={{ scale: 1.3 }}
												transition={{
													duration: 0.6,
													repeat: Infinity,
													repeatType: 'reverse',
												}}
											>
												<ImSpinner size={24} className="animate-spin" />
											</motion.div>
										</>
									) : (
										<>
											<span>Criar Conta</span>
											<motion.div
												initial={{ scale: 1 }}
												animate={{ scale: 1.3 }}
												transition={{
													duration: 0.6,
													repeat: Infinity,
													repeatType: 'reverse',
												}}
											>
												<FaUserPlus size={24} />
											</motion.div>
										</>
									)}
								</Button>
							</motion.div>
						)}
					</AnimatePresence>
				</form>
			</Form>
			{success && <SuccessDialog message={success} />}
		</>
	);
}
