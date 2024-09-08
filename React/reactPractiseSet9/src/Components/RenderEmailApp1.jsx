// 1. Create an Email app in React with different routes:
// Landing Page - It shows a heading and two routes - Inbox and Sent
// Inbox Page - It should have the list of all received emails.
// Individual Email Page - It should show content of that particular opened email.
// Show two counters on the top of Inbox page for number for Read emails and Unread emails.
// Have a button for each email in the inbox email listing page for emails which have read as
// false. If you mark an email as read, the counter value for read and unread emails should
// change. Do this using context.
// Sent Page - It should have the list of all sent emails similar to inbox page but without any
// buttons to mark as read. If you click on any of the sent emails, it should open that individual
// email in a unique route.
// Fake fetch has been provided.

import { NavLink, Route, Routes } from "react-router-dom";
import { InboxPage } from "../Pages/InboxPage1";
import { SentPage } from "../Pages/SentPage1";
import { RenderIndividualEmail } from "../Pages/RenderIndividualEmail1";

export function RenderEmailApp(){

  return(
    <>
      <h1>My Mail box</h1>
      <nav>
        <NavLink to="/inbox">Inbox</NavLink> <br />
        <NavLink to="/sent">Sent</NavLink>
      </nav>
      <Routes>
        <Route path="/inbox" element={<InboxPage />} />
        <Route path="/inbox/:id" element={<RenderIndividualEmail />} />
        <Route path="/sent" element={<SentPage />} />
      </Routes>
    </>
  )
}