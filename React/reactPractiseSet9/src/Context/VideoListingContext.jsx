import { createContext } from "react";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { fakeFetch } from "../Data/FakeFetch4";

export const VideoListingContext = createContext();

export function VideoListingProvider({ children }) {
  const [videos, setVideos] = useState([]);
  const [likedVideos, setLikedVideos] = useState([]);
  const [watchLater, setWatchLater] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fakeFetch("https://example.com/api/videos")
      .then(({ status, data }) => {
        if (status === 200) {
          setVideos(data.videos);
        } else {
          setError("an error occurred");
        }
      })
      .catch(() => {
        setError("failed to fetch videos");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  const handleAddToLikedVideo = (newVideo) => {
    const isExist = likedVideos.find((video) => video.id == newVideo.id);
    if (!isExist) {
      setLikedVideos((prevLikedVideo) => [...prevLikedVideo, newVideo]);
    }
  };
  const handleAddToWatchLater = (newVideo) => {
    const isExist = watchLater.find((video) => video.id == newVideo.id);
    if (!isExist) {
      setWatchLater((prevWatchLater) => [...prevWatchLater, newVideo]);
    }
  };

  return (
    <VideoListingContext.Provider
      value={{
        videos,
        handleAddToLikedVideo,
        handleAddToWatchLater,
        likedVideos,
        watchLater,
      }}
    >
      {children}
    </VideoListingContext.Provider>
  );
}

VideoListingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
