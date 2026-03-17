import Link from 'next/link';

/**
 * Общий компонент шапки страницы.
 */
function Header() {
	return (
		<div className="w-full grid grid-cols-[100px_minmax(0,1fr)_100px] grid-flow-col">
			<Link
				className="hover:text-sky-600 hover:underline text-center"
				href="/"
			>
				Домашняя страница
			</Link>
			<div className="flex justify-center items-center">
				<h1 className="text-2xl font-bold">Пользователи</h1>
			</div>
		</div>
	);
}

export default Header;
