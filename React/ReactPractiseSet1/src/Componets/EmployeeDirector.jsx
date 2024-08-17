// 11. Considering above data given in question 8, add a border around the employee details whose
// designation is “President”.


import { employees } from "../Data/EmployeeList";

export function EmployeeList() {
  return (
    <>
      <h1>Employee's Details</h1>
      {employees.map(({ name, level, dept, designation, salary }) => (
        <ul>
          <li style={{border : designation == "President" ? "2px solid black" : "none"}}>
            name : {name} , level : {level} , dept : {dept} , designation :{" "}
            {designation} , salary : {salary}{" "}
          </li>
        </ul>
      ))}
    </>
  );
}