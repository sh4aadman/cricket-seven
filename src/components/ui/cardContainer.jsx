import { use } from "react";
import Card from "./card";

function CardContainer({ playersPromise }) {
  const players = use(playersPromise);

  return (
    <section className="mt-8 grid grid-cols-3 gap-10">
      {
        players.map(player => (<Card key={player.playerId} player={player} />))
      }
    </section>
  );
}

export default CardContainer;
