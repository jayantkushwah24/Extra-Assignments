const fontSize = {fontSize : "25px"}
export function EmployeeCard({name, designation , experience}) {
    return (
        <>
            <h1 style={fontSize}>Name : {name}</h1>
            <h3 style={fontSize}>Designation : {designation}</h3>
            <h3 style={fontSize}>Experience : {experience}</h3>
        </>
    )
}