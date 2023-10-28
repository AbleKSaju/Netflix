import "./App.css";

import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import RowPost from "./Components/RowPost/RowPost";
import {
  action,
  originals,
  trending,
  ComedyMovies,
  RomanceMovies,
  HorrorMovies,
} from "./urls";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <>
        <RowPost url={originals} title="Netflix Originals" />
        <RowPost url={action} title="Actions" isSmall />
        <RowPost url={trending} title="Trending" isSmall />
        <RowPost url={ComedyMovies} title="Comedy" isSmall />
        <RowPost url={RomanceMovies} title="Romantic" isSmall />
        <RowPost url={HorrorMovies} title="Horror" isSmall />
      </>
    </div>
  );
}

export default App;
