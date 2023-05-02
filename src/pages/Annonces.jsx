import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import dataList from "../dataList.json";
import Tag from "../components/Tag";
import Rating from "../components/Rating";

export default function Annonces() {
  const { indexAnnonce } = useParams();
  const annonce = dataList[indexAnnonce];

  return (
    <main>
      <Carousel pictures={annonce.pictures} />
      <div>
        <h1>{annonce.title}</h1>
        <p>{annonce.location}</p>
      </div>
      <div>
        <p>{annonce.host.name}</p>
        <img src={annonce.host.picture} alt={annonce.host.name} />
      </div>
      {annonce.tags.map((tag) => <Tag key={`${annonce.id} - ${tag}`} />)}
      <Rating rating={annonce.rating} indexAnnonce={annonce.id}/>
      <Collapse
        titleCollapse="Description"
        contentCollapse={annonce.description}
      />
      <Collapse titleCollapse="Équipements" contentCollapse={annonce.equipments} />
    </main>
  );
}
