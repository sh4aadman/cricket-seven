import CardContainer from "./components/ui/cardContainer";
import Footer from "./components/ui/footer";
import Hero from "./components/ui/hero";
import Navbar from "./components/ui/navbar";
import Selection from "./components/ui/selection";
import TileContainer from "./components/ui/tileContainer";

function App() {
  return (
    <>
      <section className="container">
        <Navbar />
        <Hero />
        <Selection />
        <CardContainer />
        <TileContainer />
      </section>
      <Footer />
    </>
  );
}

export default App;
