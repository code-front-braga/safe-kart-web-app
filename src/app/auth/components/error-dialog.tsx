'use client';

import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogCancel,
} from '@/components/ui/alert-dialog';
import { useEffect, useState } from 'react';

interface ErrorFormProps {
	message?: string;
}

export function ErrorDialog({ message }: ErrorFormProps) {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (message) {
			setOpen(true);
		}
	}, [message]);

	if (!message) return null;

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogContent className="border-0 bg-red-800">
				<AlertDialogTitle className="text-base text-white">
					Erro ao entrar
				</AlertDialogTitle>
				<AlertDialogDescription className="text-sm text-red-300">
					{message}
				</AlertDialogDescription>
				<AlertDialogCancel className="border-0 bg-white text-red-900">
					Fechar
				</AlertDialogCancel>
			</AlertDialogContent>
		</AlertDialog>
	);
}
