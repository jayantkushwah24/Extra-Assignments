import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { MailProvider , MailContext } from "./Context/MailContext.jsx";
export { MailContext};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MailProvider>
        <App />
      </MailProvider>
    </BrowserRouter>
  </StrictMode>
);
