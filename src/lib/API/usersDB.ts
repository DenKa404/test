interface UserData {
	id: number;
	name: string;
	email: string;
	isFavorite: boolean;
}

const users: UserData[] = [
	{
		id: 1,
		name: 'Petya Slavin',
		email: 'petya@mail.ru',
		isFavorite: true,
	},
	{
		id: 2,
		name: 'Sasha Petrovich',
		email: 'sasha@ya.ru',
		isFavorite: false,
	},
	{
		id: 3,
		name: 'Kolya Semenov',
		email: 'Kolya@gmail.com',
		isFavorite: false,
	},
	{
		id: 4,
		name: 'Semen Andreev',
		email: 'semen@somedomen.net',
		isFavorite: false,
	},
];

export { users };
