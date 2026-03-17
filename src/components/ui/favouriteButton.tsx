'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';

/**
 * Пропсы компонента кнопки "В избранное".
 */
interface FavoriteButtonProps {
	/** Начальное состояние "избранного" */
	isFavorite: boolean;
}

/**
 * Кнопка "В избранное".
 *
 * Хранит состояние локально и не инициирует ререндер родительских компонентов.
 */
export default function FavoriteButton({
	isFavorite,
}: FavoriteButtonProps) {
	const [favorite, setFavorite] = useState(isFavorite);

	return (
		<div
			className={'size-fit items-center cursor-pointer'}
			onClick={() => setFavorite(!favorite)}
		>
			<Star className={favorite ? "fill-chart-1" : ""} />
		</div>
	);
}
