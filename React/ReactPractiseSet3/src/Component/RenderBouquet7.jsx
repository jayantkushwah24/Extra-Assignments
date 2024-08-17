// 7. Build a React component to display the flowers of a bouquet in an ordered list on the DOM
// which has a price above 2000. Pass data as prop.

import { bouquet } from "../Data/Flowers6";

export function RenderBouquet7() {
  return (
    <>
      <h3>Bouquets that have a price greater than 2000 are:</h3>
      <ol>
        {bouquet.map(({ id, flowers, totalFlowers, price }) =>
          price > 2000 ? <li key={id}>{flowers.join(', ')}</li>: null
        )}
      </ol>
    </>
  );
}
``