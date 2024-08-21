// 5. Create a react component that calls the social media api when the page is loaded completely
// and display all the posts on the screen. And on click of show bakery button, show only the posts
// with category as bakery

import { useEffect, useState } from "react";
import { fakeFetch } from "../Data/FakeFetch5";

export function RenderSocialMedia() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let index = 0;

  useEffect(() => {
    fakeFetch("https://example.com/api/posts")
      .then(({ status, data }) => {
        if (status === 200) {
          setPosts(data.posts);
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
    return <p>loading...</p>;
  }
  if (error) {
    return <p>error...</p>;
  }

  const handleShowBakery = (category) => {
    setPosts(posts.filter((post) => post.category === category));
  };
  return (
    <>
      <h1>Social Media Posts</h1>
      <div style={{ display: "flex" }}>
        {posts.map(({ caption, src, views, likes }) => (
          <div key={++index} style={{ margin: "20px" }}>
            <img
              src={src}
              alt="img"
              style={{ height: "300px", width: "200px" }}
            />
            <p>{caption}</p>
            <p>
              Likes : {likes} <br></br>Views : {views}{" "}
            </p>
          </div>
        ))}
      </div>
      <button onClick={() => handleShowBakery("Bakery")}>Show Bakery</button>
    </>
  );
}
