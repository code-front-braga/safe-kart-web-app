import { AuthSection } from '../components/auth-section';
import { RegisterForm } from './components/register-form';
import { AuthFormFooter } from '../components/auth-form-footer';
import { FormTitle } from '../components/form-title';
import { AuthContainer } from '../components/auth-container';

export default function RegisterPage() {
	return (
		<AuthSection>
			<AuthContainer>
				<FormTitle title="Cadastre-se" />

				<RegisterForm />

			</AuthContainer>
				<AuthFormFooter
					href="/auth/login"
					paragraphText="Já possui uma conta?"
					linkText="Faça seu login"
				/>
		</AuthSection>
	);
}
