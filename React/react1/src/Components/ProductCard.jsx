export function ProductCard({ heading, phones }) {
  return (
    <>
      <h1>{heading}</h1>
      {phones.map(({ name, price }) => {
        return (
          <>
          <hr />
            <p>Name : {name}</p>
            <p>Price : {price}</p>
            <hr />
          </>
        );
      })}
    </>
  );
}
