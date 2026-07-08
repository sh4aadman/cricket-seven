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
  const [balance, setBalance] = useState(1500000);
  const [selection, setSelection] = useState([]);

  const remove = (p) => {
    const remaining = selection.filter((each) => each.playerId !== p.playerId);
    setSelection(remaining);
    setBalance(balance + p.price);
  };

  return (
    <>
      <section className="w-5/6 mx-auto mt-5">
        <Navbar balance={balance} />
        <Hero />
        <Suspense fallback={<Loading />}>
          <Selection
            value={value}
            setValue={setValue}
            selectedPlayers={selection.length}
          />
          {value === true ? (
            <CardContainer
              playersPromise={playersPromise}
              balance={balance}
              setBalance={setBalance}
              selection={selection}
              setSelection={setSelection}
            />
          ) : (
            <TileContainer setValue={setValue} selection={selection} remove={remove} />
          )}
        </Suspense>
      </section>
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
