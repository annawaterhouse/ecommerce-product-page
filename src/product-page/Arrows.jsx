import PropTypes from "prop-types";

export default function Arrows({ prevImage, nextImage }) {
  return (
    <div className="arrows slider_arrows">
      <button className="left" onClick={prevImage}>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </button>
      <button className="right" onClick={nextImage}>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg">
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
        </div>
      </button>
    </div>
  );
}

Arrows.propTypes = {
  prevImage: PropTypes.func.isRequired,
  nextImage: PropTypes.func.isRequired,
};
