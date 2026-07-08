import Tile from "./tile";

function TileContainer({ setValue, selection, remove }) {
  return (
    <section className="mt-8 space-y-6">
      {selection.map((player) => (
        <Tile key={player.playerId} player={player} remove={remove} />
      ))}
      <button
        onClick={() => setValue(true)}
        className="ml-1 mt-4 md:mt-6 px-3 md:px-5 py-1.5 md:py-3.5 border border-[#E7FE29] rounded-2xl outline-1 outline-offset-0 md:outline-offset-4 outline-[#131313] font-bold text-[#131313] text-sm md:text-base bg-[#E7FE29]"
      >
        Add More Player
      </button>
    </section>
  );
}

export default TileContainer;
