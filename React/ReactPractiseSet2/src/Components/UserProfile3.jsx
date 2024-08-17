// 3. Build a React component called UserProfile that receives an object representing a user as prop
// and display the details on the DOM.

export function UserProfile({userData}) {
  
  return (
    <>
       <p>Name : {userData.name}</p>
       <p>Age : {userData.age}</p>
       <p>Email : {userData.email}</p>
    </>
  )
}