import playerImg from "../../assets/player.jpg";

function Tile() {
  return (
    <section className="p-6 border border-[#1313131A] rounded-xl flex gap-6 items-center">
      <figure>
        <img className="h-20 w-20 rounded-xl aspect-square object-cover" src={playerImg} alt="player-image" />
      </figure>
      <section className="grow">
        <h3 className="text-2xl font-semibold text-[#131313]">Player Name</h3>
        <p className="mt-3 text-[#13131399]">Preferred Hand</p>
      </section>
      <button>
        <i class="fa-regular fa-trash-can text-[#F14749]"></i>
      </button>
    </section>
  );
}

export default Tile;
