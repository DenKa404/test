import Link from 'next/link';

export default function Home() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<div className="flex flex-col h-screen ">
				<h1 className="shrink-0 pt-4 font-semibold text-4xl">
					Начальная страница
				</h1>

				<div className="flex flex-1 items-center justify-center">
					<Link
						className="text-lg border rounded-md p-2 bg-accent hover:text-sky-600 hover:underline"
						href="/users"
					>
						Открыть список пользователей
					</Link>
				</div>
			</div>
		</div>
	);
}
