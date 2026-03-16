'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function FavoriteButton({
	isFavorite,
}: {
	isFavorite: boolean;
}) {
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
