// 7. Given a student object with student name and the marks for english, maths and computers. If
// the total marks of a student is >= 225, the grade is A, >=180 the grade is B, >=150 the grade is
// C, otherwise the grade is D. Build a React Component that takes the student object as props
// and uses it to show all the students details, total marks and grade on the DOM as shown in the image below.

export function DisplayStudentsDetail({ name, english, maths, computers }) {
  const totalMarks = english + maths + computers;
  const calculateGrade = () => {
    if (totalMarks >= 225) {
      return "Grade A";
    } else if (totalMarks >= 180) return "Grade B";
    else if (totalMarks >= 150) {
      return "Grade C";
    } else {
      return "Grade D";
    }
  };
  return (
    <>
      <h1>Student's Details</h1>
      <p>Name : {name}</p>
      <p>English : {english}</p>
      <p>Maths : {maths}</p>
      <p>Computers : {computers}</p>
      <p>Total Marks : {totalMarks}</p>
      <p>{calculateGrade()}</p>
    </>
  );
}
