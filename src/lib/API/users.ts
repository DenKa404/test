import { users } from './usersDB';

export async function getUsers(search?: string) {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	if (!search) return users;

	return users.filter((user) =>
		user.name.toLowerCase().includes(search.toLowerCase()),
	);
}
