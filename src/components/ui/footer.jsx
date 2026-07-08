import logo from "../../assets/logo-footer.png";

function Footer() {
  return (
    <section className="bg-[#06091A]">
      <section className="pt-10 md:pt-60 px-2 md:px-52 pb-10 md:pb-16 flex flex-col items-center gap-16">
        <figure>
          <img src={logo} alt="logo" />
        </figure>
        <nav className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-48 md:justify-center md:justify-items-center">
          <div>
            <h5 className="text-lg font-semibold text-[#FFFFFF]">About Us</h5>
            <p className="mt-4 text-[#FFFFFF99] leading-6.5">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div>
            <h5 className="text-lg font-semibold text-[#FFFFFF]">
              Quick Links
            </h5>
            <ul className="mt-2 space-y-2 md:mt-4 text-[#FFFFFF99] leading-6.5 md:list-disc list-inside">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold text-[#FFFFFF]">Subscribe</h5>
            <p className="mt-4 text-[#FFFFFF99] leading-6.5">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="mt-5 flex">
              <input className="grow py-3.5 pl-7 bg-[#FFFFFF] rounded-l-lg focus:outline-0 placeholder:text-[#13131366]" type="text" name="email" id="notify" placeholder="Enter your email" autoComplete="email" />
              <button className="shrink px-7 py-3.5 font-bold text-[#040D11] bg-linear-to-r from-[#e498c4] to-[#f3c84f] rounded-r-lg">Subscribe</button>
            </div>
          </div>
        </nav>
      </section>
      <hr className="text-[#FFFFFF26]" />
      <footer className="py-8 text-[#FFFFFF] leading-6.5 text-center">
        Year - All rights reserved
      </footer>
    </section>
  );
}

export default Footer;
