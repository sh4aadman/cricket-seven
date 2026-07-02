import Card from "./card";

function CardContainer() {
  return (
    <section className="mt-8 grid grid-cols-3 gap-10 hidden">
      <Card />
      <Card />
      <Card />
    </section>
  );
}

export default CardContainer;
