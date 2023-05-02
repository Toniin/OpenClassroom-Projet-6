import Collapse from "../components/Collapse";

export default function Annonces() {
  return (
    <main>
      <div>CARROUSEL</div>
      <div>
        <h1>TITRE</h1>
        <p>LIEU</p>
      </div>
      <div>
        <p>Auteur</p>
        <img src="" alt="" />
      </div>
      <div>TAG</div>
      <div>RATING</div>
      <Collapse titleCollapse="Titre" contentCollapse="Contenu"/>
    </main>
  );
}
