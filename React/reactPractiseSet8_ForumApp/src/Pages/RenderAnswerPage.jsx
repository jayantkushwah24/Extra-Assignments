import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ForumContext } from "../main";

export function RenderAnswerPage() {
  const { id } = useParams(); // Get the id from the URL
  const { forum } = useContext(ForumContext);

  const question = forum.find((q) => q.id === parseInt(id)); // Find the question by id

  return (
    <>
      {question ? (
        <>
          <h1>Answer</h1>
          <p>{question.answer}</p>
        </>
      ) : (
        <p>Answer not found.</p>
      )}
    </>
  );
}
