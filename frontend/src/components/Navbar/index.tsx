import {ReactComponent as GithubSvg} from "assets/svg/github.svg";
import ToggleSwitch from "components/ToggleSwitch";
import { useAppContext } from "contexts/Context";
import { useState } from "react";
import "./styles.css";

function Navbar() {
  const [{theme}, dispatch] = useAppContext();
  const [darkMode] = useState(theme.mode === 'dark');

  const handleToggleDarkMode = () => {
    const mode = theme.mode === 'dark' ? 'light' : 'dark';
    dispatch({ type: "SET_MODE", payload: {mode} });
  }
  
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie {theme.mode}</h1>
          <>
            <ToggleSwitch
              checkedColor="#000000"
              uncheckedColor="#000000"
              checked={darkMode}
              onChecked={handleToggleDarkMode}
            />
            <a href="https://github.com/br1perrone">
              <div className="dsmovie-contact-container">
                <GithubSvg />
                <p>/br1perrone</p>
              </div>
            </a>
          </>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;