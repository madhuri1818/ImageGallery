import React, { useState } from "react";

export default function ImgGallery({ image }) {
  const [isHovered, setIsHovered] = useState(false);
  const tags = image.tags.split(',');

 console.log({image})
  return (
    <div className="gallery">
      <div className="card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <img src={image.webformatURL} className="card-img-top" alt="..." />
        
        {isHovered && (
          <div className="des">
          <a rel="noreferrer" target="_blank" href={image.largeImageURL} className="view-link" >
            View
          </a>
          <h3>{tags[0]}</h3>
          </div>
        )}
        </div>
      
    </div>
  );
}
