import PropTypes from 'prop-types';
import ImageSlider from './ImageSlider';

export default function ImageModal({ setModalIsOpen }) {
  const closeModal = () => setModalIsOpen(false);

  return (
    <dialog className="image_modal">
      <button onClick={closeModal}>x</button>
      <div className="modal-container">
        <ImageSlider />
      </div>
    </dialog>
  )
}

ImageModal.propTypes = {
  setModalIsOpen: PropTypes.func.isRequired,
};
