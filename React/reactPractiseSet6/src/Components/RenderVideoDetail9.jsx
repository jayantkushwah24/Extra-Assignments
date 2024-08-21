// 9. Create a React component that calls the video api and display all the details of the video on the
// screen. And on click of add label button, add a label property to the object and display the
// details on the screen

import { useEffect, useState } from "react";
import { fakeFetch } from "../Data/FakeFetch9";

export function RenderVideoDetails(){
  const [videos , setVideos] = useState(null); // Initialize as null since we're expecting a single object
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fakeFetch("https://example.com/api/getvideo")
      .then(({ status, data }) => {
        if (status === 200) {
          setVideos(data.videos);
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

  const handleAddLabel = () => {
    if (videos) {
      setVideos({...videos , label : "self motivation"});
    }
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      {
        videos && (
          <div>
            <img src={videos.thumbnail} alt="img" />
            <h2>{videos.title}</h2>
            <p>{videos.views}</p>
            <p>{videos.likes}</p>
            {videos.label && <p>Label : {videos.label}</p>}
            <button onClick={handleAddLabel}>Add label</button>
          </div>
        )
      }
    </>
  )
}