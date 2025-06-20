/**
 * Component to display a container for images in a quiz.
 *
 * @param {Object} props
 * @param {string[]} props.images - Array of image paths in public folder.
 * @param {string} props.altText - alt text for the images.
 *
 * @returns {JSX.Element|null} - Returns a div containing images or null if no images are provided.
 */
export const ImageContainer = ({ images, altText }) => {
  if (!images || images.length === 0) return null;

  const baseImageClasses = "w-full h-auto rounded-xl shadow-md object-cover";
  let containerClasses = "";

  switch (images.length) {
    case 1:
      containerClasses = "flex justify-center";
      break;
    case 2:
      containerClasses = "grid grid-cols-1 sm:grid-cols-2 gap-4";
      break;
    case 3:
      containerClasses = "grid grid-cols-1 sm:grid-cols-3 gap-4";
      break;
    case 4:
      containerClasses = "grid grid-cols-2 gap-4";
      break;
    default:
      containerClasses = "flex flex-wrap justify-center gap-4";
  }

  return (
    <div className={`m<-4 ${containerClasses}`}>
      {images.map((src, index) => (
        <div
          key={index}
          className={images.length === 1 ? "max-w-full md:max-w-md" : ""}>
          <img
            src={`/${src}`}
            alt={`${altText} (Bild ${index + 1})`}
            className={baseImageClasses}
          />
        </div>
      ))}
    </div>
  );
};
