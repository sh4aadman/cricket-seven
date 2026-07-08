function CallToAction() {
  return (
      <section className="w-2/3 mx-auto py-24 relative top-40 rounded-2xl outline-1 outline-offset-24 outline-[#ffffff] blur-shadow text-center bg-linear-to-tr from-[#acdff7] from-[-5%] via-white via-30% to-[#f9cea8] to-150%">
          <h3 className="text-3xl font-bold text-[#131313]">Subscribe to our Newsletter</h3>
          <p className="mt-4 text-xl text-[#131313B3]">Get the latest updates and news right in your inbox!</p>
          <div className="mt-6 w-2/5 mx-auto flex items-center gap-4">
              <input className="grow py-3.5 pl-7 bg-[#FFFFFF] border border-[#13131326] rounded-lg focus:outline-0 placeholder:text-[#13131366]" type="text" name="email" id="subscribe" placeholder="Enter your email" autoComplete="email" />
              <button className="px-7 py-3.5 font-bold text-[#040D11] bg-linear-to-r from-[#e498c4] to-[#f3c84f] rounded-lg">Subscribe</button>
          </div>
    </section>
  );
}

export default CallToAction;
