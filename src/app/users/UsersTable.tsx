import FavoriteButton from '@/src/components/ui/favouriteButton';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/src/components/ui/table';
import { UserData } from '@/src/lib/API/usersDB';

/**
 * Пропсы для компонента с пользователями.
 */
interface UsersTableProps {
	/**список пользователей. */
	users: UserData[];
}

/**
 * Компонент списка пользователей в виде таблицы.
 */
export default function UsersTable({ users }: UsersTableProps) {
	return (
		<div className="rounded-sm border w-full">
			<Table>
				<TableHeader>
					<TableRow className="border-b bg-accent hover:bg-accent">
						<TableHead className="text-center p-2 w-1/12">
							ID
						</TableHead>
						<TableHead className="text-left p-2 w-1/3">
							Имя
						</TableHead>
						<TableHead className="text-left p-2 w-1/3">
							Email
						</TableHead>
						<TableHead className="text-center p-2 w-2/12">
							Избранное
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody className="[&>tr]:hover:bg-transparent">
					{users.map((user) => (
						<TableRow key={user.id} className="border-b">
							<TableCell className="p-2 text-center">
								{user.id}
							</TableCell>
							<TableCell className="p-2">{user.name}</TableCell>
							<TableCell className="p-2">{user.email}</TableCell>

							<TableCell className="p-2">
								<div className="flex justify-center">
									<FavoriteButton
										isFavorite={user.isFavorite}
									/>
								</div>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
