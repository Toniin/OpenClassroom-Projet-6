import Banner from "../components/Banner";
import Card from "../components/Card";
import imgBanner from "../assets/falaise.png";
import { Link } from "react-router-dom";
import dataList from "../dataList.json";

export default function Home() {
  const titleBanner = "Chez vous, partout et ailleurs";

  return (
    <main>
      <Banner
        imgUrl={imgBanner}
        imgAltBanner="Falaise avec la mer"
        isTextShow={true}
        titleBanner={titleBanner}
      />
      <section className="cardContainer">
        {dataList.map((annonce, index) => (
          <Link to={`/annonces/${index}`} key={`Link - ${annonce.id}`}>
            <Card
              key={annonce.id}
              imgUrl={annonce.cover}
              imgAltCard="Falaise avec la mer"
              titleCard={annonce.title}
            />
          </Link>
        ))}
      </section>
    </main>
  );
}
