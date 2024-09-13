// Create a mail application in React closest to the image shown below with following features:
// 1. Have 3 folders: Inbox, Spam, Trash. Implement routing to navigate through these folders using
// React Router.
// 2. Initially load the mail data for Inbox. And Spam and Trash folder should have no data. Do this
// using context (MailProvider).
// 3. Perform various operations on the mail app using useReducer.
// Implement filters to show unread emails and to show starred emails with the help of
// checkbox. Initially these checkboxes should not be selected.
// Star and un-star an email.
// Delete an email: The email should be sent to the Trash folder if you delete an email.
// Mark an email as read: This should decrease value of the “Unread” counter.
// Report an email as spam: The email should be sent to spam folder if you report an email as
// spam.
// View Details should open that email in an individual page.

import { NavLink, Route, Routes } from "react-router-dom";
import { Inbox } from "../Pages/Inbox";
import { Spam } from "../Pages/Spam";
import { Trash } from "../Pages/Trash";
import { useContext } from "react";
import { MailContext } from "../Context/MailContext";

export function RenderMail() {
  const { handleShowUnreadMails, handleShowStarredMails } =
    useContext(MailContext);

  return (
    <>
      <h1>Jayant Kushwah&apos;s Mail Box</h1>
      <div>
        <input type="checkbox" onClick={handleShowUnreadMails} />
        <label>Show Unread mails</label>
        <input type="checkbox" onClick={handleShowStarredMails} />
        <label>Show Starred mails</label>
      </div>
      <br />
      <nav>
        <NavLink to="/inbox">Inbox</NavLink>
        {" || "}
        <NavLink to="/spam">Spam</NavLink>
        {" || "}
        <NavLink to="/trash">Trash</NavLink>
      </nav>
      <Routes>
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/spam" element={<Spam />} />
        <Route path="/trash" element={<Trash />} />
      </Routes>
      <br />
    </>
  );
}
