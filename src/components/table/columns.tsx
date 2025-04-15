import { Player } from '@/mocks/players.mock';
import { ColumnDef } from '@tanstack/react-table';
import { useTranslation } from 'react-i18next';

export const columns: ColumnDef<Player>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'availableFunds',
    header: () => <div className="text-right ">Available Funds</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('availableFunds'));
      const formatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(amount);

      return <div className="text-right font-medium ">{formatted}</div>;
    },
  },
];
