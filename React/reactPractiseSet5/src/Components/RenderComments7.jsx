// 7. Create a React component called Comments.
// a. Fetch the comments using thefake fetch and list the data on DOM.
// b. Each comment component will have the text, user’s name and a delete button.
// c. On click of the delete button, that particular comment object should be deleted and should not be visible on the DOM.

import { useEffect, useState } from "react";
import { fakeFetch } from "../Data/FakeFetch7";

export function Comments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fakeFetch("https://example.com/api/comments")
      .then(({ status, message, data }) => {
        if (status == 200) {
          setComments(data.comments);
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

  // Function to handle the deletion of a comment
  const deleteComment = (name) => {
    setComments(comments.filter((comment) => comment.name !== name));
  };

  return (
    <>
      <h1>Comments</h1>
      {comments.length > 0 ? (
        comments.map(({ id, name, text }) => (
          <div
            key={id}
            style={{
              marginBottom: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h2>{name}</h2>
            <p style={{ margin: "30px" }}>{text}</p>
            <button onClick={() => deleteComment(name)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No comments available.</p>
      )}
    </>
  );
}
