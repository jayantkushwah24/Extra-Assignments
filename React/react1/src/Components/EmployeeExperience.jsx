function isBorder(experience) {
  if (experience > 5) {
    return "4px solid yellow";
  }
  return "none";
}

export function EmployeeExperience({ arrayOfObj }) {
  return (
    <>
      <h1>
        <header>Employee List</header>
      </h1>
      {arrayOfObj.map(({ id, name, experience }) => {
        return (
          <div style={{ border: isBorder(experience) }}>
            <p>
              {name} : {experience} years
            </p>
          </div>
        );
      })}
    </>
  );
}
