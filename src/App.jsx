import { Suspense, useState } from "react";
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
  const [value, setValue] = useState(true);

  return (
    <>
      <section className="container">
        <Navbar />
        <Hero />
        <Suspense fallback={<Loading />}>
          <Selection value={value} setValue={setValue} />
          {value === true ? (
            <CardContainer playersPromise={playersPromise} />
          ) : (
            <TileContainer />
          )}
        </Suspense>
      </section>
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
