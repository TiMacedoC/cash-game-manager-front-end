import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { Player } from '@/mocks/players.mock';
import { Utils } from '@/utils';

type PlayersListProps = {
  data: Player[];
  className?: string;
};

export const PlayersList = ({ data, className }: PlayersListProps) => {
  return (
    <div className={cn('', className)}>
      <ul>
        <li>
          {data.map((player) => (
            <div key={player.id} className="p-2 border-b flex">
              <div id="avatar"></div>
              <Avatar className="size-10">
                <AvatarImage src={player.avatar} />
                <AvatarFallback>
                  {Utils.getInitials(player.name)}
                </AvatarFallback>
              </Avatar>
              <div id="playerName">
                <p className="font-bold">{player.name}</p>
                <p className="text-sm text-gray-500">{player.nickName}</p>
              </div>
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
};
