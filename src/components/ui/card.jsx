import playerImg from "../../assets/player.jpg";

function Card() {
  return (
    <section className="p-6 border border-[#1313131A] rounded-xl">
      <figure>
        <img
          className="rounded-xl aspect-3/2 object-cover"
          src={playerImg}
          alt="player-img"
        />
      </figure>
      <section className="mt-6 font-semibold text-xl flex items-center gap-2">
        <i class="fa-brands fa-osi"></i>
        <h3>Player Name</h3>
      </section>
      <section className="my-4 flex justify-between items-center">
        <div className="text-[#13131380] flex items-center gap-3">
          <i class="fa-solid fa-flag"></i>
          <h5>Country</h5>
        </div>
        <p className="px-2.5 py-1 border rounded-md text-sm bg-[#1313130D]">
          Role
        </p>
      </section>
      <hr className="text-[#1313131A] mb-4" />
      <section className="space-y-3">
        <div className="flex justify-between">
          <h4 className="font-bold">Rating</h4>
          <p className="text-[#13131380]">5</p>
        </div>
        <div className="flex justify-between">
          <h4 className="font-bold">Preferred Hand</h4>
          <p className="text-[#13131380]">Left-Hand-Bat</p>
        </div>
        <div className="flex justify-between">
          <h4 className="font-bold">Price: $10000</h4>
          <button className="px-2.5 py-1 border rounded-md text-sm">
            Choose Player
          </button>
        </div>
      </section>
    </section>
  );
}

export default Card;
