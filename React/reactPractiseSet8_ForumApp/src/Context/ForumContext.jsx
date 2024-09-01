import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../Data/FakeFetch";
import PropTypes from "prop-types";
export const ForumContext = createContext();

export function ForumProvider({children}){
  const [forum , setForum] = useState([]);
  const [loading , setLoading] = useState(true);
  const [error , setError] = useState(null);

  useEffect(() =>{
    fakeFetch("https://example.com/api/questions")
    .then( (response) =>{
      if (response.status === 200) {
        setForum(response.data.questions);
      }else{
        setError("failed to fetch")
      }
    })
    .catch( () => {
      setError("an error occured")
    })
    .finally( () => {
      setLoading(false);
    })
  } ,[])
  if (loading) {
    return <p>Loading...</p>
  }
  if(error){
    return <p>{error}</p>
  }

  return(
    <ForumContext.Provider value={{forum}}>
      {children}
    </ForumContext.Provider>
  )
}

ForumProvider.propTypes = {
  children : PropTypes.node.isRequired,
}