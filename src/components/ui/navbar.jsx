import logo from "../../assets/logo.png";

function Navbar({ balance }) {
  return (
    <nav className="flex justify-between">
      <img className="w-[20%] md:w-[5%]" src={logo} alt="logo" />
      <section className="flex items-center gap-14">
        <ul className="hidden md:flex gap-14 text-[#131313] text-lg opacity-70">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Fixturess">Fixture</a>
          </li>
          <li>
            <a href="#Teams">Teams</a>
          </li>
          <li>
            <a href="#Schedules">Schedules</a>
          </li>
        </ul>
        <section className="font-medium text-[#131313] border border-[#1313131A] px-5 py-4 rounded-xl">
          <span className="mr-1 text-lg">{balance}</span>
          <span className="text-lg">Coin</span>
          <i className="fa-solid fa-dollar-sign ml-2 p-1 border-2 rounded-full"></i>
        </section>
      </section>
    </nav>
  );
}

export default Navbar;
