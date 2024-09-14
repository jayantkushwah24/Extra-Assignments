import { useContext, useState } from "react"
import { UserContext } from "../Contexts/UserContext1"

export function UserProfile(){
  const {userData} = useContext(UserContext);
  const [user , setUser] = useState([]);

  const handleDropdown = (event) => {
    const value = event.target.value;
    const selectedUser = userData.filter( u => u.name.toLowerCase().includes(value.toLowerCase()));
    setUser(selectedUser);
  }

  return (
    <>
      <h1>User Profile</h1>
      <h2>Select any user from dropdown</h2>
      <span>Users : </span>
      <select onChange={handleDropdown}>
        <option>Select any option</option>
        <option value="John Doe">John Doe</option>
        <option value="Jane Smith">Jane Smith</option>
        <option value="Mark Johnson">Mark Johnson</option>
      </select>
      {user.length > 0 ? (
        user.map((user) => (
          <div key={user.id}>
            <h3>Name: {user.name}</h3>
            <h4>Email: {user.email}</h4>
          </div>
        ))
      ) : (
        <div>No user selected</div>
      )}
    </>
  )
}