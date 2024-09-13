import { createContext, useState } from "react";
import { PropTypes } from "prop-types";
import { mails } from "../Data/MailsData";

export const MailContext = createContext();

export function MailProvider({ children }) {
  const [mail, setMail] = useState(mails);
  const [showUnreadMail, setShowUnreadMail] = useState(false);
  const [showStarredMail, setShowStarredMail] = useState(false);

  const handleShowUnreadMails = () => {
    setShowUnreadMail((prevState) => !prevState);
  };

  const handleShowStarredMails = () => {
    setShowStarredMail((prevState) => !prevState);
  };

  const handleUpdateStarredMails = (mId) => {
    const updatedMails = mail.map((m) =>
      m.mId === mId ? { ...m, isStarred: !m.isStarred } : m
    );
    setMail(updatedMails);
  };

  const handleMarkAsRead = (mId) => {
    const updatedMails = mail.map((m) =>
      m.mId === mId ? { ...m, unread: false } : m
    );
    setMail(updatedMails);
  };

  const handleDeleteMail = (mId) => {
    const updatedMails = mail.filter((m) => m.mId !== mId);
    setMail(updatedMails);
  };

  const filteredMails = mail.filter((mailItem) => {
    if (showUnreadMail && showStarredMail) {
      return mailItem.unread && mailItem.isStarred;
    } else if (showUnreadMail) {
      return mailItem.unread;
    } else if (showStarredMail) {
      return mailItem.isStarred;
    }
    return true; // Show all mails if no filter is applied
  });

  return (
    <MailContext.Provider
      value={{
        mail: filteredMails,
        handleShowUnreadMails,
        handleShowStarredMails,
        handleUpdateStarredMails,
        handleDeleteMail,
        handleMarkAsRead,
        showUnreadMail,
        showStarredMail,
      }}
    >
      {children}
    </MailContext.Provider>
  );
}

MailProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
