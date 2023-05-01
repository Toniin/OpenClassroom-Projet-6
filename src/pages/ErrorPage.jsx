import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h1>Oops!</h1>
      <h2>STATUS {error.status}</h2>
      <p>STATUS TEXTE{error.statusText}</p>
      <p>{error.data}</p>
    </div>
  );
}
