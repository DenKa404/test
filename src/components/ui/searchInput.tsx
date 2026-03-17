'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';
import { Input } from './input';

/**
 * Пропсы компонента поиска с синхронизацией через query-параметры URL.
 */
interface SearchInputProps {
	/** Путь (route), на который выполняется переход */
	rootURL: string;

	/** Имя query-параметра, используемого для фильтрации */
	queryParamName: string;
}

/**
 * Компонент поиска с синхронизацией значения через query-параметры URL.
 *
 * Обновляет URL при вводе и инициирует серверный ререндер страницы.
 */
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
