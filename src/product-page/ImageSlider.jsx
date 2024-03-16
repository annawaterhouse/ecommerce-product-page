import { useState } from "react";
import image from "../images/image-product-1.jpg";
import image2 from "../images/image-product-2.jpg";
import image3 from "../images/image-product-3.jpg";
import image4 from "../images/image-product-4.jpg";

export default function ImageSlide() {
  const images = [image, image2, image3, image4];
  const [currIndex, setCurrIndex] = useState(0);
  //left and right arrow functionality
  const nextImage = () => {
    //if currImage is the last image, set it to the first image
    //otherwise, set it to the next image
    if (currIndex === images.length - 1) {
      setCurrIndex(0);
    } else {
      setCurrIndex(currIndex + 1);
    }
  };
  const prevImage = () => {
    //if currImage is the first image, set it to the last image
    //otherwise, set it to the previous image
    if (currIndex === 0) {
      setCurrIndex(images.length - 1);
    } else {
      setCurrIndex(currIndex - 1);
    }
  };
  //image previews hover and click functionality
  const imageChange = (index) => {
    setCurrIndex(index);
  }
  return (
    <>
      <section className="slider">
        <div className="arrows slider_arrows">
          <button className="left" onClick={prevImage}>
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <button className="right" onClick={nextImage}>
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <img src={images[currIndex]} alt={`sneakerHighlight${images[currIndex]}`} />
        <section className="slider_preview">
          {images.map((image, index) => (
            <div className={currIndex === index ? 'active' : ''} key={index} onClick={()=>imageChange(index)}>
              <img
                src={image}
                alt={`sneaker${index}`}
              />
            </div>
          )
          )}
        </section>
      </section>
    </>
  );
}
