// 9. Create a forum app in React with different routes for:
// Home page
// Questions page
// Answer page
// The Home page shows a welcome message with the user's name. The Questions page will list
// all the questions with 3 buttons: upvote, downvote, and answers. On click of answers button,
// Answer page should display with that particular question and answer.
// On click of each question’s answer, you should display a single page describing the answer


import { Route, Routes } from "react-router-dom";
import "./App.css";
import { RenderHomePage } from "./Pages/RenderHomePage";
import { RenderQuestionsPage } from "./Pages/RenderQuestionsPage";
import { RenderAnswerPage } from "./Pages/RenderAnswerPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RenderHomePage />} />
        <Route path="/questions" element={<RenderQuestionsPage />} />
        <Route path="/answer/:id" element={<RenderAnswerPage />} />
      </Routes>
    </>
  );
}

export default App;
