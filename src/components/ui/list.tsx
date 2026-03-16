import * as React from 'react';
import { cn } from '@/src/lib/utils';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from './table';

type FieldConfig<T> = {
	key: keyof T;
	label?: string;
	className?: string;
	customRender?: (item: T) => React.ReactNode;
};

type ListProps<T> = {
	items: T[];
	fields: FieldConfig<T>[];
	className?: string;
};

function List<T extends { id: string | number }>({
	items,
	fields,
	className,
}: ListProps<T>) {
	return (
		<div className={cn('space-y-2', className)}>
			<Table>
				<TableHeader>
					<TableRow>
						{fields.map((field) => (
							<TableHead
								key={String(field.key)}
								className={cn('bg-accent', field.className)}
							>
								{field.label}
							</TableHead>
						))}
					</TableRow>
				</TableHeader>
				<TableBody>
					{items.map((item) => (
						<TableRow key={item.id}>
							{fields.map((field) =>
								field.customRender ? (
									field.customRender(item)
								) : (
									<TableCell
										key={String(field.key)}
										className={field.className}
									>
										{String(item[field.key])}
									</TableCell>
								),
							)}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}

export { List };
