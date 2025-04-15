import { columns } from '@/components/table/columns';
import { DataTable } from '@/components/table/data-table';
import { Progress } from '@/components/ui/progress';
import { mockedPlayers, Player } from '@/mocks/players.mock';
import { lazy, Suspense } from 'react';

async function getData(): Promise<Player[]> {
  return mockedPlayers;
}

export default async function PlayersPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
