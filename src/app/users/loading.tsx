import Header from '@/src/app/users/header';

/**
 * Скелетон с шапкой при загрузке данных.
 */
export default function Loading() {
	const sceletonRowsCount = 4;
	return (
		<div className="flex flex-col items-center max-w-2xl mx-auto p-6 space-y-6">
			<Header />

			<div className="w-full space-y-2">
				{Array.from({ length: sceletonRowsCount }).map((_, idx) => (
					<div key={idx} className="h-10 w-full animate-pulse rounded bg-muted" />
				))}
			</div>
		</div>
	);
}
