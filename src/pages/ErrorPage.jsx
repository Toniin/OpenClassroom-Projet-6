import { useRouteError, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <Header />
      <main className="errorPageContent">
        <h1 className="errorNotFound">{error.status}</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to={`/`}>Retourner sur la page d’accueil</Link>
      </main>
      <Footer />
    </>
  );
}
