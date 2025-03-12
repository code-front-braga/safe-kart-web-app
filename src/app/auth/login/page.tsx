import Link from 'next/link';
import { AuthSection } from '../components/auth-section';
import { LoginForm } from '../components/login-form';

export default function LoginPage() {
	return (
		<AuthSection>
			<div className="bg-christalle/75 mt-20 flex w-[85%] max-w-lg flex-col items-center gap-2.5 rounded-2xl p-2.5 shadow-xl md:mt-0">
				<h2 className="font-gantari text-white">Faça o seu login</h2>

				<LoginForm />
				{/* <GoogleLoginForm /> */}

				<div className="mt-3.5 flex w-full flex-col self-start text-white">
					<p>Não possui uma conta?</p>
					<Link
						href="/register"
						className="font-rajdhani underline underline-offset-4"
					>
						Cadastre-se agora mesmo e aproveite!
					</Link>
				</div>
			</div>
		</AuthSection>
	);
}
