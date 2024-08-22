// 5. Create a component that displays a random quote from an API using
// the useEffect and useState hooks. The component should fetch a new quote when the user
// clicks a button.

import { useEffect, useState } from "react";
import { fakeFetch } from "../Data/FakeFetch5";

export function RenderRandomQuote() {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuote = () => {
    fakeFetch()
      .then((response) => setQuote(response))
      .catch(() => setError("failed to fetch"))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      {quote && (
        <>
          <p> &quot;{quote.content} &quot;</p>
          <p>- {quote.author}</p>
        </>
      )}
      <button onClick={fetchQuote}>New Quote</button>
    </>
  );
}
