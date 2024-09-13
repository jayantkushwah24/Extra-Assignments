import { useContext } from "react";
import { MailContext } from "../Context/MailContext";

export function Inbox() {
  const { mail, handleUpdateStarredMails, handleDeleteMail, handleMarkAsRead } =
    useContext(MailContext);

  return (
    <>
      <h2>Inbox ({mail.length})</h2>
      {mail.map(({ mId, unread, isStarred, subject, content }) => (
        <div key={mId} style={{ border: "2px solid black", margin: "5px" }}>
          <h2 style={{ display: "inline" }}>Subject: {subject}</h2>
          <button onClick={() => handleUpdateStarredMails(mId)}>
            {isStarred ? "Unstar" : "Star"}
          </button>
          <p>{content}</p>
          <button onClick={() => handleDeleteMail(mId)}> Delete </button>
          {unread && <button onClick={() => handleMarkAsRead(mId)}> Mark as read </button>}
          <button onClick={() => handleDeleteMail(mId)}> Report Spam </button>
        </div>
      ))}
    </>
  );
}
