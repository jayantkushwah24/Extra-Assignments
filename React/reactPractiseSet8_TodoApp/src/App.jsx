// 6. Create a Todo App in React with different routes for:
// Summary of Done and Open Todos page - fakeFetch has been provided. List all the Todos on
// this page.
// Done Todos page
// Open Todos page
// Page for Individual Todos item to show details of each Todo.
// 7. In the question above, add a Mark as Done button to each todo. Then do the following using
// context:
// 1. On click of the button, add that todo to the Done Todos page.
// 2. Show the total number of Todos done on top of the Done Todos pages.
// 3. In the Summary page, strike through that todo.
// 8. In the above question, show the total number of Open Todos on the top of Open Todos page
// using context.



import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { RenderAllTodos } from "./Pages/AllTodos";
import { RenderDoneTodos } from "./Pages/RenderDoneTodos";
import { RenderOpenTodos } from "./Pages/RenderOpenTodos";

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">All Todos</NavLink>
        {" || "}
        <NavLink to="done">Done</NavLink>
        {" || "}
        <NavLink to="open">Open</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<RenderAllTodos />} />
        <Route path="/done" element={<RenderDoneTodos />} />
        <Route path="/open" element={<RenderOpenTodos />} />
      </Routes>
    </>
  );
}

export default App;
