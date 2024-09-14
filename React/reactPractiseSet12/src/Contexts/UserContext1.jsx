import { createContext } from "react";
import {PropTypes} from 'prop-types'
import { userProfiles } from "../Data/UserData1";

export const UserContext = createContext();

export function UserProvider({children}){
  const userData = userProfiles;

  return <UserContext.Provider value={{userData}}>
    {children}
  </UserContext.Provider>
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
}