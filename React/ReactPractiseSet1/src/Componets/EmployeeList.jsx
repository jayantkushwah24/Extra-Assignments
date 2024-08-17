// 8. Build a React component to display all the employee details as unordered list on the DOM in the
// following format:

import { employees } from "../Data/EmployeeList";

export function EmployeeList() {
  return (
    <>
      <h1>Employee's Details</h1>
      {employees.map(({ name, level, dept, designation, salary }) => (
        <ul>
          <li>
            name : {name} , level : {level} , dept : {dept} , designation :{" "}
            {designation} , salary : {salary}{" "}
          </li>
        </ul>
      ))}
    </>
  );
}
