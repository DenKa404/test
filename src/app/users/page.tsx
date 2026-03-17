import SearchInput from '@/src/components/ui/searchInput';
import { getUsers } from '@/src/lib/API/users';
import UsersTable from './UsersTable';
import Header from '@/src/app/users/header';

/**
 * Пропсы страницы пользователей.
 */
interface UsersPageProps {
	/** Query-параметры URL */
	searchParams: {
		/** Подстрока для фильтрации пользователей */
		searchSubString?: string;
	};
}

/**
 * Страница списка пользователей.
 *
 * Загружает пользователей на сервере и фильтрует их
 * по query-параметру searchSubString.
 */
async function UsersPage({ searchParams }: UsersPageProps) {
	const { searchSubString } = await searchParams;
	//получение пользователей из БД (эмуляция)
	const usersFromServ = await getUsers(searchSubString);

	return (
		<div className="flex flex-col items-center max-w-2xl mx-auto p-6 space-y-6">
			<Header />
			<SearchInput rootURL="users" queryParamName="searchSubString" />
			<UsersTable users={usersFromServ} />
		</div>
	);
}

export default UsersPage;
