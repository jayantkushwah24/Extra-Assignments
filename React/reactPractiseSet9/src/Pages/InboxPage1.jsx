import { useContext } from "react";
import { EmailContext } from "../App";
import { NavLink } from "react-router-dom";

export function InboxPage() {
  const { data, handleMarkAsRead } = useContext(EmailContext);
  const emails = data.emails;

  return (
    <>
      <h1>Inbox Page</h1>
      <p>Unread Emails : {emails.filter((email) => !email.read).length}</p>
      <p>Read Emails : {emails.filter((email) => email.read).length}</p>
      <ul>
        {emails.map(({ id, subject, read }) => (
          <li key={id}>
            <NavLink to={`/inbox/${id}`} style={{ color: "yellow" }}>
              {subject}
            </NavLink>
            {!read && (
              <button onClick={() => handleMarkAsRead(id)}>Mark as Read</button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
