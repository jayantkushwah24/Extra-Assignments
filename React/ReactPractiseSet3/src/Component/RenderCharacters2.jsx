// 2. Given an array of objects with cartoon character details as: id, name, superpower, magnitude.
// Build a React component and display all details of those characters whose magnitude is greater than 5

export function RenderCharacters({ superhero }) {
  return (
    <>
      {superhero.map(
        ({ id, name, superpower, magnitude }) =>
          magnitude > 5 && (
            <p key={id}>
              Name : {name} , Superpower : {superpower} , Magnitude :{" "}
              {magnitude}
            </p>
          )
      )}
    </>
  );
}
