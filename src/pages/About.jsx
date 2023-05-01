import Banner from "../components/Banner";
import img from "../assets/Montagnes.png"

export default function About() {
  return (
    <main>
      <Banner imgUrl={img} imgAlt="Montagnes" isTextShow={false}/>
    </main>
  );
}
