import banner from "../../assets/banner-main.png";

function Hero() {
  return (
    <section className="rounded-4xl mt-7 h-[65vh] flex flex-col justify-center items-center gap-6 bg-linear-to-tr from-indigo-400 from-[-55%] via-black via-30% to-pink-400 to-395%">
      <img src={banner} alt="banner-img" />
      <section>
        <h1 className="text-6xl font-bold text-center text-[#FFFFFF]">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="mt-4 text-2xl text-center text-[#FFFFFF]">
          Beyond Boundaries Beyond Limits
        </p>
      </section>
      <button className="px-5 py-3.5 border border-[#E7FE29] rounded-2xl outline-1 outline-offset-4 outline-[#E7FE29] font-bold text-[#131313] bg-[#E7FE29]">
        Claim Free Credit
      </button>
    </section>
  );
}

export default Hero;
