import { employees } from "../Data/EmployeeList";

export function EmployeeList2() {
  const totalSalary = () => {
    const total = employees.reduce((acc, prev) => {
      return prev.salary + acc;
    }, 0);
    return total;
  };
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
      <p>Total Salary : {totalSalary()} </p>
    </>
  );
}
