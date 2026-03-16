interface UserData {
	id: number;
	name: string;
	email: string;
}

const users: UserData[] = [
	{
		id: 1,
		name: 'Petya Slavin',
		email: 'petya@mail.ru',
	},
	{
		id: 2,
		name: 'Sasha Petrovich',
		email: 'sasha@ya.ru',
	},
	{
		id: 3,
		name: 'Kolya Semenov',
		email: 'Kolya@gmail.com',
	},
	{
		id: 4,
		name: 'Semen Andreev',
		email: 'semen@somedomen.net',
	},
];

export { users };
