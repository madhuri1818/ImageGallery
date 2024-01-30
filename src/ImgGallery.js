import React from "react";
export default function ImgGallery({ image }) {
  return (
    <>
      <div className="gallery">
        <a  rel="noreferrer" target="_blank" href={image.largeImageURL}>
          <div className="card">
            <img src={image.webformatURL} className="card-img-top" alt="..." />
          </div>
        </a>
      </div>
    </>
  );
}