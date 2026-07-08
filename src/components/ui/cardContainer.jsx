import { use } from "react";
import Card from "./card";

function CardContainer({ playersPromise, balance, setBalance, selection, setSelection }) {
  const players = use(playersPromise);

  return (
    <section className="mt-8 grid grid-cols-3 gap-10">
      {players.map((player) => (
        <Card
          key={player.playerId}
          player={player}
          balance={balance}
          setBalance={setBalance}
          selection={selection}
          setSelection={setSelection}
        />
      ))}
    </section>
  );
}

export default CardContainer;
