import { UserData, users } from './usersDB';

export async function getUsers(search?: string) {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	if (!search) return users;

	return users.filter((user) =>
		user.name.toLowerCase().includes(search.toLowerCase()),
	);
}

export async function setFavoriteUser(user: UserData) {
	await new Promise((resolve) => setTimeout(resolve, 500));

	user.isFavorite
}
