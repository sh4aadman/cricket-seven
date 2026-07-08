import { Suspense } from "react";
import CallToAction from "./components/ui/callToAction";
import CardContainer from "./components/ui/cardContainer";
import Footer from "./components/ui/footer";
import Hero from "./components/ui/hero";
import Navbar from "./components/ui/navbar";
import Selection from "./components/ui/selection";
import TileContainer from "./components/ui/tileContainer";
import { playersPromise } from "./components/utils/fetch";
import Loading from "./components/ui/loading";

function App() {
  return (
    <>
      <section className="container">
        <Navbar />
        <Hero />
        <Suspense fallback={<Loading />}>
          <Selection />
          <CardContainer playersPromise={playersPromise} />
        </Suspense>
        <TileContainer />
      </section>
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
