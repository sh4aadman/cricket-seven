import Tile from "./tile";

function TileContainer({ selection }) {
  return (
    <section className="mt-8 space-y-6">
      {selection.map((player) => (
        <Tile key={player.playerId} player={player} />
      ))}
      <button className="ml-1 mt-6 px-5 py-3.5 border border-[#E7FE29] rounded-2xl outline-1 outline-offset-4 outline-[#131313] font-bold text-[#131313] bg-[#E7FE29]">
        Add More Player
      </button>
    </section>
  );
}

export default TileContainer;
