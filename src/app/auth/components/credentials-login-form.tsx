import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormDescription,
	FormMessage,
	Form,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CredentialsLoginData, CredentialsLoginSchema } from '@/lib/zod';

export function CredentialsLoginForm() {
	const form = useForm<CredentialsLoginData>({
		resolver: zodResolver(CredentialsLoginSchema),
	});

	return (
		// <Form {...form}>
		// 	<form>
		// 		<FormField
		// 			control={form.control}
		// 			name="username"
		// 			render={({ field }) => (
		// 				<FormItem>
		// 					<FormLabel>Username</FormLabel>
		// 					<FormControl>
		// 						<Input placeholder="shadcn" {...field} />
		// 					</FormControl>
		// 					<FormDescription>
		// 						This is your public display name.
		// 					</FormDescription>
		// 					<FormMessage />
		// 				</FormItem>
		// 			)}
		// 		/>
		// 	</form>
		// </Form>
		<div>loginform</div>
	);
}
