import { useContext } from "react";
import { VideoListingContext } from "../App";
import { NavLink } from "react-router-dom";

export function LikedVideos() {
  const { likedVideos } = useContext(VideoListingContext);

  return (
    <>
      <h1>Liked Videos</h1>
      <span style={{ display: "flex", flexWrap: "wrap" }}>
        {likedVideos.length > 0 ? (
          likedVideos.map(({ id, title, description, url, thumbnail , duration }) => (
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
          <h3>No liked videos</h3>
        )}
      </span>
    </>
  );
}
