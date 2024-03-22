import { useState } from "react";
import image from "../images/image-product-1.jpg";
import image2 from "../images/image-product-2.jpg";
import image3 from "../images/image-product-3.jpg";
import image4 from "../images/image-product-4.jpg";
import PropTypes from "prop-types";
import Arrows from "./Arrows";

export default function ImageSlider({ modalIsOpen, setModalIsOpen }) {
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
  const imageChange = (index) => setCurrIndex(index);

  //open modal functionality
  const handleModal = () => {
    if (modalIsOpen) return;
    setModalIsOpen(true);
  }

  return (
      <section className="slider">
        <Arrows prevImage={prevImage} nextImage={nextImage} />
        <img src={images[currIndex]} alt={`sneakerHighlight${images[currIndex]}`} onClick={handleModal} />
        <section className="slider_preview">
          {images.map((image, index) => (
            <div className={currIndex === index ? 'active' : ''} key={index} onClick={()=>imageChange(index)}>
              <img
                src={image}
                alt={`image of sneaker`}
              />
            </div>
          )
          )}
        </section>
      </section>
  );
}

ImageSlider.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  setModalIsOpen: PropTypes.func.isRequired,
};
