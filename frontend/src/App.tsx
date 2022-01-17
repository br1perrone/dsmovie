import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import "./App.css";

import List from "pages/List";
import Movie from "pages/Movie";

import Navbar from "components/Navbar";
import { Context} from "contexts/Context";
import { useContext } from "react";

function App() {
  const {state} = useContext(Context)
  const theme = state.theme;

  return (
    <div className="app" data-theme={theme.mode}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <List />}/>
          <Route path="/movie">
            <Route path=":movieId" element={ <Movie />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
