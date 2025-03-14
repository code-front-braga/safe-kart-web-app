import { AuthSection } from '../components/auth-section';
import { CredentialsLoginForm } from './components/credentials-login-form';
import { GoogleLoginForm } from './components/google-login-form';
import { AuthFormFooter } from '../components/auth-form-footer';
import { FormTitle } from '../components/form-title';
import { AuthContainer } from '../components/auth-container';

export default function LoginPage() {
	return (
		<AuthSection>
			<AuthContainer>
				<FormTitle title="Seja Bem-vindo!" />

				<CredentialsLoginForm />
				<GoogleLoginForm />

				<AuthFormFooter
					href="/auth/register"
					paragraphText="Não possui uma conta?"
					linkText="Cadastre-se agora mesmo"
				/>
			</AuthContainer>
		</AuthSection>
	);
}
