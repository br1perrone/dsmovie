import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import List from "pages/List";
import Movie from "pages/Movie";

import Navbar from "components/Navbar";
import { useAppContext } from "contexts/Context";

function App() {
  const [{theme}] = useAppContext();

  return (
    <div className="app" data-theme={theme.mode}>
      <BrowserRouter>
        <Navbar />
        {theme.mode}
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
