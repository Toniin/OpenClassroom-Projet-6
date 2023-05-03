import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import dataList from "../dataList.json";
import Tag from "../components/Tag";
import Rating from "../components/Rating";

export default function Annonces() {
  const { indexAnnonce } = useParams();
  const annonce = dataList[indexAnnonce];

  const firstName = annonce.host.name.split(' ')[0]
  const lastName = annonce.host.name.split(' ')[1]

  return (
    <main className="annoncePageContent">
      <Carousel pictures={annonce.pictures} />
      <div className="annonceHeader">
        <div className="annonceTitle-Location">
          <h1>{annonce.title}</h1>
          <p>{annonce.location}</p>
        </div>
        <ul className="tagContainer">
          {annonce.tags.map((tag) => (
            <Tag key={`${annonce.id} - ${tag}`} tagName={tag} />
          ))}
        </ul>
        <div className="annonceAuthor-Rating">
          <div className="annonceAuthor">
            <p>{firstName} <span>{lastName}</span></p>
            <img src={annonce.host.picture} alt={annonce.host.name} />
          </div>
          <Rating rating={annonce.rating} indexAnnonce={annonce.id} />
        </div>
      </div>
      <div>
        <Collapse
          titleCollapse="Description"
          contentCollapse={annonce.description}
        />
        <Collapse
          titleCollapse="Équipements"
          contentCollapse={annonce.equipments}
        />
      </div>
    </main>
  );
}
