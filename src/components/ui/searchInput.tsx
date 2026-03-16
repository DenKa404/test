'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';
import { Input } from './input';

interface SearchInputProps {
	rootURL: string;
	queryParamName: string;
}

export default function SearchInput({
	rootURL,
	queryParamName,
}: SearchInputProps) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [isPending, startTransition] = useTransition();

	const handleChange = (value: string) => {
		const params = new URLSearchParams(searchParams.toString());

		if (value) params.set(queryParamName, value);
		else params.delete(queryParamName);

		startTransition(() => {
			router.push(`/${rootURL}?${params.toString()}`);
		});
	};

	return (
			<div className="w-full">
				<Input
					placeholder="Фильтр по имени..."
					defaultValue={searchParams.get(queryParamName) ?? ''}
					onChange={(e) => handleChange(e.target.value)}
				/>

				{isPending && (
					<div className="mt-2 text-sm text-muted-foreground">
						Loading...
					</div>
				)}
			</div>
	);
}
