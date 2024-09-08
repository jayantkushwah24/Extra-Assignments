// 4. Create a video listing app in React, with the following routes.
// a. Home
// b. Videos listing - If you click on “Explore Videos” button or “Videos” in the navbar, you should
// land to this page.
// c. Liked videos - It should show the list of videos that you have liked. If you click on the Like
// button on the video listing page, that video should get added to the Liked Videos page. Do this
// using context.
// d. Watch later videos - It should show the list of videos that you have added to watch later. If you
// click on the Add to watch later button on the video listing page, that video should get added to
// the Watch Later page. Do this using context.
// e. Individual video page - “Watch here” should bring you to the individual video page.

import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "../Pages4/Home4";
import { Videos } from "../Pages4/Videos4";
import { LikedVideos } from "../Pages4/LikedVideos4";
import { WatchLater } from "../Pages4/WatchLater4";

export function RenderVideoListingApp() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        {" || "}
        <NavLink to="/videos">Videos</NavLink>
        {" || "}
        <NavLink to="/likedvideos">Liked Videos</NavLink>
        {" || "}
        <NavLink to="/watchlater">Watch Later</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/likedvideos" element={<LikedVideos />} />
        <Route path="/watchlater" element={<WatchLater />} />
      </Routes>
    </>
  );
}
