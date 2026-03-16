import SearchInput from '@/src/components/ui/searchInput';
import { getUsers } from '@/src/lib/API/users';
import UsersTable from './UsersTable';
import Link from 'next/link';
import Header from '@/src/app/users/header';

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
			<Header />
			<SearchInput rootURL="users" queryParamName="searchSubString" />
			<UsersTable users={usersFromServ} />
		</div>
	);
}

export default UsersPage;
