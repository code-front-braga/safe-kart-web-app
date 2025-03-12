import Link from 'next/link';
import { AuthSection } from '../components/auth-section';
import { CredentialsLoginForm } from '../components/credentials-login-form';
import { GoogleLoginForm } from '../components/google-login-form';

export default function LoginPage() {
	return (
		<AuthSection>
			<div className="bg-christalle/75 flex w-[85%] max-w-lg flex-col items-center gap-2.5 rounded-2xl p-2.5 shadow-xl md:mt-0">
				<h2 className="font-gantari text-white">Faça o seu login</h2>

				<CredentialsLoginForm />
				<GoogleLoginForm />

				<div className="flex w-full flex-col self-start text-white">
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
