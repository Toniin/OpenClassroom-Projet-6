import Banner from "../components/Banner";
import img from "../assets/falaise.png";

export default function Home() {
  const title = "Chez vous, partout et ailleurs";
  return (
    <main>
      <Banner imgUrl={img} imgAlt="Falaise avec la mer" isTextShow={true} text={title} />
    </main>
  );
}
