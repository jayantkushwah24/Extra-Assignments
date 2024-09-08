import { useContext } from "react";
import { VideoListingContext } from "../App";
import { NavLink } from "react-router-dom";

export function WatchLater() {
  const { watchLater } = useContext(VideoListingContext);

  return (
    <>
      <h1>Watch Later</h1>
      <span style={{ display: "flex", flexWrap: "wrap" }}>
        {watchLater.length > 0 ? (
          watchLater.map(({ id, title, description, url, thumbnail , duration }) => (
            <span
              key={id}
              style={{
                padding: "10px",
                border: "2px solid black",
                margin: "5px",
              }}
            >
              <img
                src={thumbnail}
                alt="img"
                style={{ height: "250px", width: "300px" }}
              />
              <h2>{title}</h2>
              <p>
                <NavLink to={url}>Watch here</NavLink>
              </p>
            </span>
          ))
        ) : (
          <h3>No videos in Watch Later</h3>
        )}
      </span>
    </>
  );
}
