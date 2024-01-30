import React, { useState, useEffect } from "react";
import "./App.css";
import ImgGallery from "./ImgGallery"; 
import ImgSearch from "./ImgSearch"; 
// const apiKey="40488356-ef3befbbbb0b3fca21b80baa2";
const apiKey="42095176-ca5eb5f44e133a7106f6bf870"
function App() {
    const [img, setImg] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [term, setTerm] = useState("");
  useEffect(()=>{
    if (term.trim() === "") {
        setImg([]); 
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
    fetch(`https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo&pretty=true`)
    .then((res) => res.json())
      .then((data) => {
        setImg(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);
return(
      <div className="cont">
        <ImgSearch searchText={(text) => setTerm(text)} />
        {img.length > 0 && (
          <div className="row">
            {img.map((images) => (
              <div className="images" key={images.id}>
                <ImgGallery image={images} />
              </div>
            ))}
          </div>
        )}
      </div>
)
}
export default App;