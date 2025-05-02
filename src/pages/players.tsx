import { PlayersList } from '@/components/players/players-list';
import { mockedPlayers, Player } from '@/mocks/players.mock';

function getData(): Player[] {
  return mockedPlayers.slice(0, 3);
}

export default function PlayersPage() {
  const data = getData();

  return (
    <div className="container mx-auto py-10">
      <PlayersList data={data} />
    </div>
  );
}
