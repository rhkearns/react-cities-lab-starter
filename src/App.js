import React, { useState } from "react";
import "./styles.css";
import imagesArr from "./imageData";
import BigImage from "./BigImage";
import SmallImage from "./SmallImage";

export default function App() {
  const [bigImage, setBigImage] = useState(imagesArr[0].img);
  
  const handleClick = (imgUrl) => {
    setBigImage(imgUrl);
  };

  const images = imagesArr.map((image, index) => {
    return (
      <SmallImage
        style={{ border: bigImage === image.img ? "5px solid green" : "" }}
        src={image.img}
        alt={image.city}
        key={index}
        className="thumb"
        handleClick={handleClick}
      />
    );
  });

  console.log("images array", images);

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
          {images}
        </div>
        {/* <img src={bigImage} id="bigimage" alt="bigImaage" /> */}
        <BigImage image={bigImage} />
      </div>
    </div>
  );
}