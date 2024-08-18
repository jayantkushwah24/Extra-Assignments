// 5. Create a React component that fetches users data from an API endpoint using useEffect hook
// and display users data (name, image, likes, comments) as a list on the screen using the useState hook.
// a. Show “Loading…” until your data displays on the DOM.
// b. Handle errors by showing an error message on the DOM, in case of any error.

import { useEffect, useState } from "react";
import { fakeFetch } from "../Data/FakeFetch5";

export function RenderUserData(){
  const [data, setData] = useState([])
  const [loading , setLoading] = useState(false)
  const [error , setError] = useState(null)

  useEffect( () => {
    fakeFetch('https://example.com/api/users')
      .then( ({status,message,data}) => {
        if (status === 200) {
          setData(data)
        } else {
          setError("failed to fetch")
        }
      })
      .catch( (err) => {
        setError("an error occurred ");
      })
      .finally( () => {
        setLoading(false);
      })
  },[])

  if (loading) {
    return <p>loading...</p>
  }

  if (error) {
    return <p>error...</p>
  }

  return(
    <>
      <h1>User Feed</h1>
      <ul style={{listStyle:"none"}}>
        {data.map( ({name, image, likes, comments}) => (
          <>
          <img src={image} alt="img" style={{height:"300px" , width:"250px"}} />
          <li>Name : {name}</li>
          <li>Likes : {likes}</li>
          <li>Comments : {comments}</li>
          </>
        ))}
      </ul>
    </>
  )
}