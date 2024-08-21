// 6. Create a React component that calls the habit tracker api and display only the habits which are
// unarchived with heading “Unarchived”. Create a show archive button and on click
// of show archive button show the archive habits and hide the unarchives. Change the heading of
// the page to “Archived” when the button is clicked.

import { useEffect, useState } from "react";
import { fakeFetch } from "../Data/FakeFetch6";

export function RenderArchiveButton() {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isArchivedView, setIsArchivedView] = useState(false);
  let index = 0;

  useEffect(() => {
    fakeFetch("https://example.com/api/habits")
      .then(({ status, data }) => {
        if (status === 200) {
          setHabits(data.habits);
        } else {
          setError("failed to fetch");
        }
      })
      .catch(() => {
        setError("an error occurred");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>error...</p>;
  }

  const handleArchive = () => {
    setIsArchivedView(!isArchivedView);
  };
  return (
    <>
      <h1>{isArchivedView == false ? "Unarchived" : "Archived"}</h1>
      {habits.map(
        ({ title, desc, daysFollowed, daysSkipped, archived }) =>
          isArchivedView === archived && (
            <div key={++index}>
              <h2>{title}</h2>
              <p>{desc}</p>
              <h3>Days Followed : {daysFollowed}</h3>
              <h3>Days Skipped : {daysSkipped}</h3>
              <hr />
            </div>
          )
      )}
      <button onClick={handleArchive}>
        {isArchivedView == false ? "Show Archive " : "Show Unarchives"}
      </button>
    </>
  );
}
