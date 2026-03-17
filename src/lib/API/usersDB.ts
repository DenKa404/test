/**
 * Описание объекта пользовательского профиля.
 */
export interface UserData {
	/**Уникальный идентификатор пользователя. */
	id: number;
	/**Имя пользователя. */
	name: string;
	/**Почтовый адрес пользователя. */
	email: string;
	/**Находится ли пользователь в списке избранных. */
	isFavorite: boolean;
}

/**Список пользователей из БД (эмуляция)*/
const users: UserData[] = [
	{
		id: 1,
		name: 'Петр Славин',
		email: 'petya@mail.ru',
		isFavorite: true,
	},
	{
		id: 2,
		name: 'Александр Петров',
		email: 'sasha@ya.ru',
		isFavorite: false,
	},
	{
		id: 3,
		name: 'Николай Семенов',
		email: 'Kolya@gmail.com',
		isFavorite: false,
	},
	{
		id: 4,
		name: 'Семен Андреев',
		email: 'semen@somedomen.net',
		isFavorite: false,
	},
];

export { users };
