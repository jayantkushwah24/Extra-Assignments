import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ForumProvider , ForumContext } from "./Context/ForumContext.jsx";
export {ForumContext};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ForumProvider>
        <App />
      </ForumProvider>
    </BrowserRouter>
  </StrictMode>
);
