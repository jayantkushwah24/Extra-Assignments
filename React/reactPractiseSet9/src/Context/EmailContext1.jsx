import { createContext, useEffect, useState } from "react";
import Proptypes from "prop-types";
import { fakeFetch } from "../Data/FakeFetch1";

export const EmailContext = createContext();

export function EmailProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fakeFetch("https://example.com/api/allemails")
      .then((response) => {
        if (response.status === 200) {
          setData(response.data);
        } else {
          setError("Failed to fetch data from the server.");
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err); // Log the error for debugging
        setError("An error occurred while fetching data.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const handleMarkAsRead = (id) => {
    setData((prevData) => ({
      ...prevData,
      emails: prevData.emails.map((email) =>
        email.id === id ? { ...email, read: true } : email
      ),
    }));
  };

  return (
    <EmailContext.Provider value={{ data, handleMarkAsRead }}>
      {children}
    </EmailContext.Provider>
  );
}

EmailProvider.propTypes = {
  children: Proptypes.node.isRequired,
};
