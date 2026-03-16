export interface UserData {
	id: number;
	name: string;
	email: string;
	isFavorite: boolean;
}

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
