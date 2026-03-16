import SearchInput from '@/src/components/ui/searchInput';
import { getUsers } from '@/src/lib/API/users';
import UsersTable from './UsersTable';

interface UsersPageProps {
	searchParams: {
		searchSubString?: string;
	};
}

async function UsersPage({ searchParams }: UsersPageProps) {
	const { searchSubString } = await searchParams;
	const usersFromServ = await getUsers(searchSubString);

	return (
		<div className="flex flex-col items-center max-w-2xl mx-auto p-6 space-y-6">
			<h1 className="text-2xl font-bold">Пользователи</h1>
			<SearchInput rootURL="users" queryParamName="searchSubString" />
			<UsersTable users={usersFromServ}/>
		</div>
	);
}

export default UsersPage;
