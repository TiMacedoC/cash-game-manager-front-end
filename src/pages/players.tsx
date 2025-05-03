import { PlayersTable } from '@/components/table/players-table';
import { mockedPlayers, Player } from '@/mocks/players.mock';

function getData(): Player[] {
  return mockedPlayers.slice(0);
}

export default function PlayersPage() {
  const data = getData();

  return (
    <div className="container mx-auto py-10">
      <PlayersTable players={data} />
    </div>
  );
}
