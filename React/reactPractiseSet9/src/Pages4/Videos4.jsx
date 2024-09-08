import { useContext } from "react";
import { VideoListingContext } from "../App";
import { NavLink } from "react-router-dom";

export function Videos() {
  const { videos, handleAddToLikedVideo, handleAddToWatchLater } =
    useContext(VideoListingContext);

  return (
    <>
      <h1>All Videos</h1>
      <span style={{ display: "flex" }}>
        {videos.map(({ id, title, description, url, thumbnail, duration }) => (
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
            <button
              onClick={() =>
                handleAddToLikedVideo({
                  id,
                  title,
                  description,
                  url,
                  thumbnail,
                  duration,
                })
              }
            >
              Like
            </button>{" "}
            <button
              onClick={() =>
                handleAddToWatchLater({
                  id,
                  title,
                  description,
                  url,
                  thumbnail,
                  duration,
                })
              }
            >
              Watch Later
            </button>
          </span>
        ))}
      </span>
    </>
  );
}
