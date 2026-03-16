'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';

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
			{favorite ? <Star className="fill-chart-1" /> : <Star />}
		</div>
	);
}
