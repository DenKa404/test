import Header from '@/src/app/users/header';

export default function Loading() {
	return (
		<div className="flex flex-col items-center max-w-2xl mx-auto p-6 space-y-6">
			<Header />

			<div className="w-full space-y-2">
				<div className="h-10 w-full animate-pulse rounded bg-muted" />
				<div className="h-12 w-full animate-pulse rounded bg-muted" />
				<div className="h-12 w-full animate-pulse rounded bg-muted" />
				<div className="h-12 w-full animate-pulse rounded bg-muted" />
			</div>
		</div>
	);
}
