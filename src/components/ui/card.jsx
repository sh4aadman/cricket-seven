function Card({ player }) {
  const {
    playerImg,
    playerName,
    playerCountry,
    playingRole,
    rating,
    preferredHand,
    price,
  } = player;

  return (
    <section className="p-6 border border-[#1313131A] rounded-xl">
      <figure>
        <img
          className="w-full rounded-xl aspect-3/2 object-cover"
          src={playerImg}
          alt="player-img"
        />
      </figure>
      <section className="mt-6 font-semibold text-xl flex items-center gap-2">
        <i className="fa-brands fa-osi"></i>
        <h3>{playerName}</h3>
      </section>
      <section className="my-4 flex justify-between items-center">
        <div className="text-[#13131380] flex items-center gap-3">
          <i className="fa-solid fa-flag"></i>
          <h5>{playerCountry}</h5>
        </div>
        <button className="px-2.5 py-1 border rounded-md text-sm bg-[#1313130D]">
          {playingRole}
        </button>
      </section>
      <hr className="text-[#1313131A] mb-4" />
      <section className="space-y-3">
        <div className="flex justify-between">
          <h4 className="font-bold">Rating</h4>
          <p className="text-[#13131380]">{rating}</p>
        </div>
        <div className="flex justify-between">
          <h4 className="font-bold">Preferred Hand</h4>
          <p className="text-[#13131380]">{preferredHand}</p>
        </div>
        <div className="flex justify-between">
          <h4 className="font-bold">Price: ${price}</h4>
          <button className="px-2.5 py-1 border rounded-md text-sm">
            Choose Player
          </button>
        </div>
      </section>
    </section>
  );
}

export default Card;
