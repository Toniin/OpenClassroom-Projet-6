import { Link } from "react-router-dom";
import error404 from "../assets/404.png"
import Header from "../components/Header"

const ErrorPage = () =>
    <>
      <Header />
      <img src={error404} alt="Erreur 404" />
      <h1>Oups! La page que vous demandez n'existe pas.</h1>
      <Link to={`/`}>Retourner sur la page d’accueil</Link>
    </>

export default ErrorPage
