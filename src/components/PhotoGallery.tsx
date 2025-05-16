import { Gallery } from "@siavanna/ts_library";

const images = [
  {
    src: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
    alt: "Image 1",
    title: "Hi",
  },
  {
    src: "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg",
    alt: "Image 2",
    title: "Bye",
  },
  {
    src: "https://images.pexels.com/photos/574075/pexels-photo-574075.jpeg",
    alt: "Image 3",
    title: "!",
    link: "https://chat.savannagrace.dev",
  },
];

const galleryTitle = "My Photo Gallery";

const galleryDescription = "This is definitely a Gallery";

const PhotoGallery = () => {
  return (
    <section id="photo-gallery" className="section">
      <Gallery title={galleryTitle} images={images} description={galleryDescription} />
      {/* Add more content here */}
    </section>
  );
};


export default PhotoGallery;


