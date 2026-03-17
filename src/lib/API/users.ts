import { users } from './usersDB';

/**
 * Получает список пользователей.
 *
 * При передаче search фильтрует пользователей по имени.
 * Имитирует задержку ответа сервера.
 *
 * @param search Подстрока для поиска по имени.
 * @returns Отфильтрованный список пользователей.
 */
export async function getUsers(search?: string) {
	//Эмуляция задержки в БД
	await new Promise((resolve) => setTimeout(resolve, 2000));

	if (!search) return users;

	return users.filter((user) =>
		user.name.toLowerCase().includes(search.toLowerCase()),
	);
}
