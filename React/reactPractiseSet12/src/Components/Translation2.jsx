import { PropTypes } from "prop-types";

export function Translation({ translations }) {
  return (
    <>
      <h1>Language Translation</h1>
      {Object.entries(translations).map(([language, messages]) => (
        <div key={language}>
          <h2>{language.toUpperCase()}</h2>
          <p>
            <strong>Hello:</strong> {messages.hello}
          </p>
          <p>
            <strong>Goodbye:</strong> {messages.goodbye}
          </p>
        </div>
      ))}
    </>
  );
}

Translation.propTypes = {
  translations: PropTypes.objectOf(
    PropTypes.shape({
      hello: PropTypes.string.isRequired,
      goodbye: PropTypes.string.isRequired,
    })
  ).isRequired,
};
