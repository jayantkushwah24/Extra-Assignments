import { useState } from "react";
import "./App.css";
import { RenderImage } from "./Component/RenderImage1";
import { RenderCharacters } from "./Component/RenderCharacters2";
import { cartoons } from "./Data/Superhero2";
import { RenderVegetableList } from "./Component/RenderVegetableList5";
import { RenderBouquet } from "./Component/RenderBouquet6";
import { bouquet } from "./Data/Flowers6";
import { RenderBouquet7 } from "./Component/RenderBouquet7";
import { RenderNgoAmount } from "./Component/RenderNgoAmount8";
import { DonationData } from "./Data/DonationData8";
import { RenderCountOfLuxuryAndSportCar } from "./Component/CountLuxuryAndSports9";
import { CalculateMeanMarks } from "./Component/CalculateMeanMarks10";

function App() {
  return (
    <>
      {/* <RenderCharacters superhero={cartoons} /> */}
      {/* <RenderVegetableList /> */}
      {/* <RenderBouquet bouquet={bouquet} /> */}
      {/* <RenderBouquet7 /> */}
       {/* <RenderNgoAmount donationData={DonationData} /> */}
       {/* <RenderCountOfLuxuryAndSportCar /> */}
       <CalculateMeanMarks />
      {/* <RenderImage imageUrl={"https://picsum.photos/200"} height={"100px"} width={"100px"} /> */}
    </>
  );
}

export default App;
