import kasaLogo from "../assets/kasa-logo.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header>
      <img src={kasaLogo} alt="Logo kasa" />
      <nav className="navbar-header">
        <ul>
          <li>
            {location.pathname === ("/") ? (
              <Link to={`/`} className="activeLink">
                Accueil
              </Link>
            ) : (
              <Link to={`/`}>Accueil</Link>
            )}
          </li>
          <li>
            {location.pathname === "/about" ? (
              <Link to={`about`} className="activeLink">
                A Propos
              </Link>
            ) : (
              <Link to={`about`}>A Propos</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
