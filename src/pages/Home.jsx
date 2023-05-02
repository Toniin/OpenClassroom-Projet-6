import Banner from "../components/Banner";
import Card from "../components/Card";
import imgBanner from "../assets/falaise.png";
// import { useFetch } from "../utils/hooks";
// import { useEffect } from "react";

export default function Home() {
  const titleBanner = "Chez vous, partout et ailleurs";

  const imgCard = imgBanner;
  const titleCard = "Titre de la location";

  // const { data, error } = useFetch(`https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json`);

  // console.log("DATA", data);
  // console.log("ERREUR", error);

  // useEffect(() => {
  //   fetch(
  //     "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json",
  //     {
  //       mode: "cors",
  //       headers: {
  //         'Access-Control-Allow-Origin': '*',
  //         'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  //         'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <main>
      <Banner
        imgUrl={imgBanner}
        imgAltBanner="Falaise avec la mer"
        isTextShow={true}
        titleBanner={titleBanner}
      />
      <section className="cardContainer">
        <Card
          imgUrl={imgCard}
          imgAltCard="Falaise avec la mer"
          titleCard={titleCard}
        />
        <Card
          imgUrl={imgCard}
          imgAltCard="Falaise avec la mer"
          titleCard={titleCard}
        />
        <Card
          imgUrl={imgCard}
          imgAltCard="Falaise avec la mer"
          titleCard={titleCard}
        />
        <Card
          imgUrl={imgCard}
          imgAltCard="Falaise avec la mer"
          titleCard={titleCard}
        />
        <Card
          imgUrl={imgCard}
          imgAltCard="Falaise avec la mer"
          titleCard={titleCard}
        />
        <Card
          imgUrl={imgCard}
          imgAltCard="Falaise avec la mer"
          titleCard={titleCard}
        />
      </section>
    </main>
  );
}
