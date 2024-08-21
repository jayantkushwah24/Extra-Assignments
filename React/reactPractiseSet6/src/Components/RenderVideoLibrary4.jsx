// 4. Create a React component that calls the video library api when the page is loaded completely
// and display all the videos on the screen. And on click of delete button, delete the first video in
// the list.

import { useEffect, useState } from "react";
import { fakeFetch } from "../Data/FakeFetch4";

export function RenderVideoLibrary() {
  const [videos, setVideos] = useState([]);
  let index = 0;

  useEffect(() => {
    fakeFetch("https://example.com/api/videos").then(({ status, data }) => {
      if (status === 200) {
        setVideos(data.videos);
      }
    });
  }, []);

  const deleteFirstVideo = () => {
    setVideos((prevVideos) => prevVideos.slice(1));
  };

  return (
    <>
      <h1>Playlist</h1>
      <div style={{ display: "flex" }}>
        {videos.map(({ title, thumbnail, views, likes }) => (
          <div key={++index} style={{ margin: "10px" }}>
            <img src={thumbnail} alt="img" />
            <h3>{title}</h3>
            <p>
              Likes : {likes} <br /> Views : {views}
            </p>
          </div>
        ))}
      </div>
      <button onClick={deleteFirstVideo}>Delete</button>
    </>
  );
}
