import kasaLogo from "../assets/kasa-logo.svg";
import { Link } from "react-router-dom";

const Header = () =>
    <header>
      <img src={kasaLogo} alt="Logo kasa" />
      <nav>
        <ul>
          <li>
            <Link to={`/`}>Accueil</Link>
          </li>
          <li>
            <Link to={`about`}>A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>

export default Header