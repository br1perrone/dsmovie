import {ReactComponent as GithubSvg} from "assets/svg/github.svg";
import "./styles.css";

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href="https://github.com/br1perrone">
            <div className="dsmovie-contact-container">
              <GithubSvg />
              <p>/br1perrone</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;