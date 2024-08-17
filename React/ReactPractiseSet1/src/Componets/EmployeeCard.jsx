// 1. Build an EmployeeCard component in React to display name, designation and work experience
// of a person. Pass name, designation and work experience as props.
// 1. The colour of “Designation:” should be green.
// 2. The colour of “Experience:” should be blue.



function EmployeeCard({id,name,position,workExperience}){

  return(
    <>
        <div>
          
          <ol style={{listStyle : "none"}}>
            <li key={id}>Name : {name}</li>
            <li key={id} style={{color : "green"}}>Position : {position}</li>
            <li key={id} style={{color : "blue"}}>Work Experience : {workExperience}</li>
          </ol>
        </div>
    </>
  )
}
export default EmployeeCard;