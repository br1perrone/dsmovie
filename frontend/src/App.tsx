import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import List from "pages/List";
import Movie from "pages/Movie";

import Navbar from "components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <List />}/>
        <Route path="/movie">
          <Route path=":movieId" element={ <Movie />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
