function Selection({ value, setValue, selectedPlayers }) {
  return (
    <>
      <section className="mt-10 md:mt-24 flex flex-col gap-4 md:flex-row items-center justify-between">
        <h2 className="text-lg md:text-3xl font-bold">
          {value === true
            ? "Available Players"
            : `Selected Players (${selectedPlayers}/7)`}
        </h2>
        <div className="flex items-center">
          <button
            onClick={() => setValue(true)}
            className={`px-7 py-3.5 border rounded-l-2xl border-r-0 ${value === true ? "bg-[#e7fe29] border-[#e7fe29] font-bold" : "border-[#1313131A]"}`}
          >
            Available
          </button>
          <button
            onClick={() => setValue(false)}
            className={`px-7 py-3.5 border border-l-0 rounded-r-2xl ${value === false ? "bg-[#e7fe29] border-[#e7fe29] font-bold" : "border-[#1313131A]"}`}
          >
            Selected ({selectedPlayers})
          </button>
        </div>
      </section>
    </>
  );
}

export default Selection;
