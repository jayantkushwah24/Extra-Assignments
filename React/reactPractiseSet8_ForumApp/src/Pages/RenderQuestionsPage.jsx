import { useContext } from "react";
import { ForumContext } from "../main";
import { NavLink } from "react-router-dom";

export function RenderQuestionsPage() {
  const { forum } = useContext(ForumContext);

  return (
    <>
      {forum.map(({ id, question }) => (
        <div key={id}>
          <h2>{question}</h2>

          <button>
            {" "}
            <NavLink to="#">Upvote</NavLink>{" "}
          </button>
          <button>
            {" "}
            <NavLink to="#">DownVote</NavLink>{" "}
          </button>
          <button>
            {" "}
            <NavLink to={`/answer/${id}`}>Answer</NavLink>{" "}
          </button>
        </div>
      ))}
    </>
  );
}
