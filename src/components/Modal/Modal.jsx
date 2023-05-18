import { createPortal } from 'react-dom';
import { useState, useEffect, useCallback } from 'react';
import propTypes from 'prop-types';
import { Loader } from '../Loader/Loader';
import { Overlay, ModalContainer, ModalImage } from './Modal.styled';
const modalRoot = document.getElementById('modal-root');

export const Modal = ({ toggleModal, image }) => {
  const [loading, setLoading] = useState(false);

  const handleKeyDown = useCallback(
    event => {
      if (event.code === 'Escape') {
        toggleModal();
      }
    },
    [toggleModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    setLoading(true);
    console.log('useEffect');
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  };

  const { largeImageURL, tags } = image;

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalContainer>
        {loading && <Loader />}
        <ModalImage
          src={largeImageURL}
          alt={tags}
          onLoad={() => setLoading(false)}
        />
      </ModalContainer>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  image: propTypes.shape({
    largeImageURL: propTypes.string.isRequired,
    tags: propTypes.string.isRequired,
  }).isRequired,
  toggleModal: propTypes.func.isRequired,
};
