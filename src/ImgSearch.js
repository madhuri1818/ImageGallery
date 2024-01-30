import React, { useState } from "react";
export default function ImgSearch({ searchText }) {
  const [text, setText] = useState("");
  function handleKeyPress(e) {
    if (e.keyCode === 13) {
    e.preventDefault();
    searchText(text);
  }
}
  return (
    <div className="gal">
       <h1> <b> Image Gallery</b> 📸 </h1> 
       <div className="sBox">
      <input type="text" placeholder="Search for Images..." onChange={(e) => { setText(e.target.value);}}onKeyDown={handleKeyPress} />
    </div>
    </div>
  );
}