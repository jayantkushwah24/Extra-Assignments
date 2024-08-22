import "./App.css";
import { RenderData } from "./Components/RenderData9";
import { RenderMovie } from "./Components/RenderMovie3";
import { RenderMovieList } from "./Components/RenderMovieByGenre6";
import { RenderProductList } from "./Components/RenderProduct7";
import { RenderRandomQuote } from "./Components/RenderRandomQuote5";
import { RenderUsersByCompany } from "./Components/RenderUser4";
import { RenderUserDetails } from "./Components/RenderUserDetail2";
import { RenderWeatherData } from "./Components/RenderWeatherData1";

function App() {
  return (
    <>
      {/* <RenderWeatherData /> */}
      {/* <RenderUserDetails /> */}
      {/* <RenderMovie /> */}
      {/* <RenderUsersByCompany /> */}
      {/* <RenderRandomQuote /> */}
      {/* <RenderMovieList /> */}
      {/* <RenderProductList /> */}
      <RenderData />
    </>
  );
}

export default App;
