function Card({ player, balance, setBalance, selection, setSelection }) {
  const {
    playerId,
    playerImg,
    playerName,
    playerCountry,
    playingRole,
    rating,
    preferredHand,
    price,
  } = player;

  const isTrue = selection.some(p => p.playerId === playerId);

  const handleClick = () => {
    if (balance < price) {
      alert("Not sufficient coins!");
      return;
    } else {
      setBalance((b) => b - price);
      setSelection((s) => [...s, player]);
    }
  };

  return (
    <section className="p-6 border border-[#1313131A] rounded-xl shadow-lg">
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
      <section className="my-4 flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
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
        <div className="flex flex-col gap-3 md:flex-row md:justify-between">
          <h4 className="font-bold">Price: ${price} USD</h4>
          <button
            disabled={isTrue}
            onClick={handleClick}
            className="px-2.5 py-1 border rounded-md text-sm disabled:px-0 disabled:py-0 disabled:text-base disabled:text-[#13131380] disabled:border-0 disabled:cursor-not-allowed"
          >
            {isTrue ? "Selected" : "Select Player"}
          </button>
        </div>
      </section>
    </section>
  );
}

export default Card;
