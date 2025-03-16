'use client';

import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogCancel,
} from '@/components/ui/alert-dialog';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

interface ErrorFormProps {
	message?: string;
}

export function SuccessDialog({ message }: ErrorFormProps) {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (message) {
			setOpen(true);
		}
	}, [message]);

	if (!message) return null;

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogContent className="bg-christalle border-0">
				<AlertDialogTitle className="text-base text-white">
					Tudo certo!
				</AlertDialogTitle>
				<AlertDialogDescription className="text-cabaret text-sm">
					{message}
				</AlertDialogDescription>
				<AlertDialogCancel asChild className="bg-cabaret border-0 text-white">
					<button type="button" onClick={() => redirect('/auth/login')}>
						Faça o login agora mesmo!
					</button>
				</AlertDialogCancel>
			</AlertDialogContent>
		</AlertDialog>
	);
}
