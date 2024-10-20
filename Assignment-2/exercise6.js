// 6. Write an ES6 function that takes an array of objects with name, salary, role and workExperience,
// and returns a new array with an incremented salary of 1000. Also add a property isSenior as true for
// employees who have been working for more than 3 years.

const incrementSalaryAndPromoteSenior = (employees) => {
  // Your ES6+ code here
  let answer = employees.map((employee) => {
    const updatedSalary = employee.salary + 1000;
    const isSenior = employee.workExperience >= 3 ? true : false;
    return {
      ...employee,
      salary: updatedSalary,
      ...(isSenior && { isSenior: true }),
    };
  });
  return answer;
};

const employees = [
  { name: "Raju", salary: 1500, role: "dev", workExperience: 3 },
  { name: "Aakash", salary: 2000, role: "dev", workExperience: 3 },
  { name: "Dinesh", salary: 2000, role: "dev", workExperience: 2.5 },
  { name: "Mohan", salary: 2000, role: "dev", workExperience: 2 },
  { name: "Ramesh", salary: 3070, role: "pm", workExperience: 3 },
  { name: "Jiten", salary: 4800, role: "qa", workExperience: 3 },
];

console.log(incrementSalaryAndPromoteSenior(employees));
// Output: [
//   { name: "Raju", salary: 2500, role: "dev", workExperience: 3, isSenior: true },
//   { name: "Aakash", salary: 3000, role: "dev", workExperience: 3, isSenior: true },
//   { name: "Dinesh", salary: 3000, role: "dev", workExperience: 2.5 },
//   { name: "Mohan", salary: 3000, role: "dev", workExperience: 2 },
//   { name: "Ramesh", salary: 4070, role: "pm", workExperience: 3, isSenior: true },
//   { name: "Jiten", salary: 5800, role: "qa", workExperience: 3, isSenior: true }
// ]
