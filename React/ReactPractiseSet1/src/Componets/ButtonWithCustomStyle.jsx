// 2. Build a React component to display a button with custom styles and button text as ‘Start’. The
// styles should be passed as props.


export const ButtonWithCustomStyle = ({ backgroundColor, color, borderRadius, padding }) => {
  const buttonStyles = {
    backgroundColor,
    color,
    borderRadius,
    padding,
    border: 'none',
    cursor: 'pointer',
  };

  return <button style={buttonStyles}>Start</button>;
};