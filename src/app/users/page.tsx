import SearchInput from '@/src/components/ui/searchInput';
import { getUsers } from '@/src/lib/API/users';
import UsersTable from './UsersTable';
import Link from 'next/link';

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
			<div className="w-full grid grid-cols-[100px_minmax(0,1fr)_100px] grid-flow-col">
				<Link className="hover:text-sky-600 hover:underline text-center" href="/">
					Домашняя страница
				</Link>
				<div className='flex justify-center items-center'>
					<h1 className="text-2xl font-bold">Пользователи</h1>
				</div>
			</div>
			<SearchInput rootURL="users" queryParamName="searchSubString" />
			<UsersTable users={usersFromServ} />
		</div>
	);
}

export default UsersPage;
