// import "./App.css";
// import EmployeeCard from "./Componets/EmployeeCard";
// import { employees } from "./Data/EmployeeCardObject";
// import { ButtonWithCustomStyle } from "./Componets/ButtonWithCustomStyle";
// import { DisplayStationaryItem } from "./Componets/DisplayStationaryItem";
// import { DisplayStationaryItem } from "./Componets/DisplayImageWithCaption";
// import DisplayProduct from "./Componets/DisplayProduct";
// import DisplayProductSalesIsMoreThanQuantity from "./Componets/DisplayProductSalesIsMoreThanQuantity";
// import { DisplayStudentsDetail } from "./Componets/DisplayStudentsDetail";
// import { EmployeeList } from "./Componets/EmployeeList";
// import { EmployeeList2 } from "./Componets/EmployeeTotalSalary";
import { EmployeeList } from "./Componets/EmployeeDirector";
// import { EmployeeList } from "./Componets/DisplayEmployeeLevelTwo";

function App() {
  // const backgroundColor = "lightgreen";
  // const color = "darkgreen";
  // const borderRadius = "5px";
  // const padding = "10px";

  // const items = ["pen", "pencil", "ruler", "eraser"];

  // const imageLink =
  //   "https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg";
  // const caption = "Spring Flowers";\

  // const student = {
  //   name: "John Doe",
  //   english: 90,
  //   maths: 80,
  //   computers: 70
  // };

  return (
    <>
    {/* <EmployeeList /> */}
      <EmployeeList />
      {/* <EmployeeList2 /> */}
      {/* <EmployeeList /> */}

      {/* <DisplayStudentsDetail
        name={student.name}
        english={student.english}
        maths={student.maths}
        computers={student.computers}
      /> */}

      {/* <h1>Employee details</h1>
      {employees.map(({ id, name, position, workExperience }) => (
        <EmployeeCard
          id={id}
          name={name}
          position={position}
          workExperience={workExperience}
        />
      ))} */}

      {/* <div>
        <ButtonWithCustomStyle
          backgroundColor={backgroundColor}
          color={color}
          borderRadius={borderRadius}
          padding={padding}
        />
      </div> */}

      {/* <DisplayStationaryItem items={items} header={"Stationary Items"} /> */}

      {/* <DisplayStationaryItem url={imageLink} caption={caption} /> */}

      {/* <DisplayProduct /> */}

      {/* <DisplayProductSalesIsMoreThanQuantity /> */}
    </>
  );
}

export default App;
