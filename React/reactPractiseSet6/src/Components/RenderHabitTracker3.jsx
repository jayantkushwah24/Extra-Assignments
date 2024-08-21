// 3. Create a React component that calls the habit tracker api when the page is loaded completely
// and display the habits with the total days they were followed and days skipped in between.

import { useEffect, useState } from "react"
import { fakeFetch } from "../Data/FakeFetch3"

export function RenderHabitTracker(){
  const [habits, setHabits] = useState([])
  const [loading, setLoading] = useState(true)
  const [error ,setError] = useState(null)
  let index = 0;

  useEffect(() => {
    fakeFetch('https://example.com/api/habits')
      .then( ({status, message,data}) => {
        if (status === 200) {
          setHabits(data.habits)
        }else{
          setError("failed to fetch")
        }
      })
      .catch(() => {
        setError("an error occurred")
      })
      .finally(() => {
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
      <h1>Habit Tracker</h1>
      <hr />
      <ul>
      {habits.map( ({title, desc , daysFollowed , daysSkipped}) =>(
        <div key={++index}>
          <li><h2>{title}</h2></li>
          <p>{desc}</p>
          <br />
          <h3>Days Followed : {daysFollowed}</h3>
          <h3>Days Skipped : {daysSkipped}</h3>
          <hr />
        </div>
      ))}
      </ul>
    </>
  )
}