function Selection() {
  return (
    <>
      <section className="mt-24 flex items-center justify-between">
        <h2 className="text-3xl font-bold">Available Players</h2>
        <p className=" border border-[#1313131A] rounded-2xl flex overflow-clip text-[#13131399]">
          <span className="block px-7 py-3.5">Available</span><span className="block px-7 py-3.5">Selected(0)</span>
        </p>
      </section>
    </>
  );
}

export default Selection;
