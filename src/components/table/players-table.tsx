import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Player } from '@/mocks/players.mock';
import { Utils } from '@/utils';
import { useTranslation } from 'react-i18next';

type PlayersTableProps = {
  players: Player[];
  className?: string;
};
export function PlayersTable({ players }: PlayersTableProps) {
  const { t } = useTranslation();

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(amount);
  };
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">{t('player')}</TableHead>
          <TableHead>{t('status')}</TableHead>
          <TableHead>{t('email')}</TableHead>
          <TableHead className="text-right">{t('balance')}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {players.map((player) => {
          return (
            <TableRow id={player.id} className="">
              <TableCell className="flex p-2 border-dashed">
                <Avatar className="size-10 mr-2.5">
                  <AvatarImage src={player.avatar} />
                  <AvatarFallback>
                    {Utils.getInitials(player.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="" id="playerName">
                  <p className="font-bold">{player.name}</p>
                  <p className="text-sm text-gray-500">{player.nickName}</p>
                </div>
              </TableCell>
              <TableCell>{t(player.status)}</TableCell>
              <TableCell>{player.email}</TableCell>
              <TableCell className="text-right">
                {formatCurrency(player.availableFunds)}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
