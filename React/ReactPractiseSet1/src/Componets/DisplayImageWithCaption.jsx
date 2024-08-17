// 4. Build a React component to display an image with a caption. The image and caption should be
// passed as props.

export function DisplayStationaryItem({ url, caption }) {
  return (
    <>
      <img src={url} alt="img" style={{ maxWidth: '100%', height: 'auto' }} />
      <h3>{caption}</h3>
    </>
  );
}
