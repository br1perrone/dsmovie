import {ReactComponent as GithubSvg} from "assets/svg/github.svg";
import ReactSwitch from "react-switch";
import { Context } from "contexts/Context";
import { useContext } from "react";
import { ThemeType } from "reducers/ThemeReducer";
import "./styles.css";
import { Link } from "react-router-dom";

const DarkModeIcon = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      fontSize: 15,
      color: "white",
      paddingRight: 2
    }}
  >
    🌙
  </div>
);
const LightModeIcon = () => (
  // <div
  //   style={{
  //     display: "flex",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     height: "100%",
  //     fontSize: 15,
  //     color: "orange",
  //     paddingRight: 2
  //   }}
  // >
  //   🌞
  // </div>
  <svg viewBox="0 0 10 10" height="100%" width="100%" fill="orange">
    <circle r={3} cx={5} cy={5} />
  </svg>
);


function Navbar() {
  const {state, dispatch} = useContext(Context);
  const theme = state.theme;

  const handleToggleDarkMode = () => {
    const mode = theme.mode === 'dark' ? 'light' : 'dark';
    dispatch({ type: "SET_MODE", payload: {mode} as ThemeType});
  }
  
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>
            <Link to="/">DSMovie</Link>
          </h1>
          <>
            <a href="https://github.com/br1perrone">
              <div className="dsmovie-contact-container">
                <GithubSvg />
                <p>/br1perrone</p>
              </div>
            </a>
            <ReactSwitch
              checked={theme.mode === 'dark'}
              onChange={handleToggleDarkMode}

              onHandleColor="#255a1f"
              offColor="#000"
              uncheckedIcon={<DarkModeIcon />}

              offHandleColor="#fff"
              onColor="#999"
              checkedIcon={<LightModeIcon />}
            />
          </>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;