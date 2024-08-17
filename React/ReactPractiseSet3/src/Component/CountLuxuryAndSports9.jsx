// 9. Given an array of objects representing a list of cars. Each object consists of: id, name, price,
// category. Build a React component that shows on the DOM the total number of cars present in
// each category. For Example: if there are categories, luxury and sports, where there are 5 luxury
// cars and 2 sports car then the data should be represented as: luxury: 5 sports: 2

import { cars } from "../Data/Cars9";

export function RenderCountOfLuxuryAndSportCar() {
  return (
    <>
      <p>
        Luxury :{" "}
        {cars.reduce(
          (acc, prev) => (prev.category === "luxury" ? acc + 1 : acc),
          0
        )}
      </p>
      <p>
        Sports :{" "}
        {cars.reduce(
          (acc, prev) => (prev.category === "sports" ? acc + 1 : acc),
          0
        )}
      </p>
    </>
  );
}
