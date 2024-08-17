// 1. Build a React component which takes an image, image height and image width as props and
// sets the height and width of the image and displays the image on DOM. Image link

export function RenderImage({ imageUrl, height, width }) {
  return (
    <img
      src={imageUrl}
      alt="img"
      style={{ height: { height }, width: { width } }}
    />
  );
}
