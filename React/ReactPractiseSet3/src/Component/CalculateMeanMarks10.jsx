// 10. Create an array of objects representing students marks out of 100. Each object consists of: id,
// name and marks. Build a React component that calculates the mean marks of all the students to
// see if the institute passes the criteria of the certification.
// If the mean is above 80, display on the DOM Certification Approved
// If the mean is below 80, display on the DOM Certification Not Approved

import { studentData } from "./StudentData10";

export function CalculateMeanMarks() {
  return (
    <>
      {studentData.reduce((acc, prev) => acc + prev.marks, 0) /
        studentData.length >
      80 ? (
        <p>DOM Certification Approved</p>
      ) : (
        <p>DOM Certification Not Approved</p>
      )}
    </>
  );
}
