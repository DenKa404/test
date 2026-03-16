import Link from 'next/link';

export default function Home() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<div className="flex flex-col h-full justify-between">
				<h1 className="shrink-0 font-semibold text-4xl h-fit">
					Начальная страница
				</h1>
				<div className="flex-1 h-full text-center">
					<Link
						className="hover:text-sky-600 hover:underline "
						href="/users"
					>
						Открыть список пользователей
					</Link>
				</div>
			</div>
		</div>
	);
}
