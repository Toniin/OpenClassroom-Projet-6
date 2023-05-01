import { useRouteError, Link } from "react-router-dom";
import Header from "../components/Header";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Header />
      <main className="errorPageContent">
        <p className="errorNotFound">{error.status}</p>
        <h1>Oups! La page que vous demandez n'existe pas.</h1>
        <Link to={`/`}>Retourner sur la page d’accueil</Link>
      </main>
    </>
  );
}
