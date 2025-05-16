import { Gallery } from "@siavanna/ts_library";

const images = [
  {
    src: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
    alt: "Image 1",
  },
  {
    src: "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg",
    alt: "Image 2",
  },
  {
    src: "https://images.pexels.com/photos/574075/pexels-photo-574075.jpeg",
    alt: "Image 3",
  },
];

const galleryTitle = "My Photo Gallery";

const PhotoGallery = () => {
  return (
    <section id="photo-gallery" className="section">
      <Gallery title={galleryTitle} images={images} />
      {/* Add more content here */}
    </section>
  );
};


export default PhotoGallery;


