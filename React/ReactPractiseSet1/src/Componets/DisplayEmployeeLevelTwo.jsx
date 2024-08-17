// 10. Considering above data given in question 8, display the details of employee with orange
// backgroundColor, who are at level 2

import { employees } from "../Data/EmployeeList";

export function EmployeeList() {
  return (
    <>
      <h1>Employee's Details</h1>
      {employees.map(({ name, level, dept, designation, salary }) => (
        <ul>
          <li style={{backgroundColor : level == 2 ? "orange" : ""}}>
            name : {name} , level : {level} , dept : {dept} , designation :{" "}
            {designation} , salary : {salary}{" "}
          </li>
        </ul>
      ))}
    </>
  );
}