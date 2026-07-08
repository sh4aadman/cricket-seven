function Tile({ player, remove }) {
  const { playerImg, playerName, preferredHand } = player;

  const handleRemove = () => {
    remove(player);
  }

  return (
    <section className="p-6 border border-[#1313131A] rounded-xl shadow-lg flex gap-6 items-center">
      <figure>
        <img
          className="h-20 w-20 rounded-xl aspect-square object-cover"
          src={playerImg}
          alt="player-image"
        />
      </figure>
      <section className="grow">
        <h3 className="text-lg md:text-2xl font-semibold text-[#131313]">{playerName}</h3>
        <p className="mt-3 text-sm md:text-base text-[#13131399]">{preferredHand}</p>
      </section>
      <button onClick={handleRemove}>
        <i className="fa-regular fa-trash-can text-[#F14749]"></i>
      </button>
    </section>
  );
}

export default Tile;
