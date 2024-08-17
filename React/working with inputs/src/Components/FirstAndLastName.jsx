import { useState } from "react";

function FirstAndLastName() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setName((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={name.firstName}
          onChange={handleChange}
        />
      </label>

      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={name.lastName}
          onChange={handleChange}
        />
      </label>
      <p>First Name: {name.firstName}</p>
      <p>Last Name: {name.lastName}</p>
    </>
  );
}
export default FirstAndLastName;
