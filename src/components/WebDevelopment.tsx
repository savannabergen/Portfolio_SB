import React from "react";
import { Gallery } from '@siavanna/ts_library';

const images = [
  { src: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg", alt: "Image 1" },
  { src: "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg", alt: "Image 2" },
  { src: "https://images.pexels.com/photos/574075/pexels-photo-574075.jpeg", alt: "Image 3" },
];

const WebDevelopment = () => {
  return (
    <section id="web-development" className="section">
      <Gallery images={images} />
      <h2>Web Design & Development</h2>
      <p>Content about web development</p>
      {/* Add more content here */}
    </section>
  );
};

export default WebDevelopment;
