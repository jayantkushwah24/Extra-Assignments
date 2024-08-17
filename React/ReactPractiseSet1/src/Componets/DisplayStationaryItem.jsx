export function DisplayStationaryItem({ items, header }) {
  return (
    <>
      <header><h1>{header}</h1></header>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </>
  );
}
