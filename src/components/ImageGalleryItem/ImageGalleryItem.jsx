import propTypes from 'prop-types';
import {
  ImageGalleryItemContainer,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, toggleModal }) => {
  return (
    <ImageGalleryItemContainer>
      <ImageGalleryItemImage
        src={image.webformatURL}
        alt={image.tags}
        onClick={() => toggleModal(image)}
      />
    </ImageGalleryItemContainer>
  );
};

ImageGalleryItem.propTypes = {
  image: propTypes.shape({
    webformatURL: propTypes.string.isRequired,
    tags: propTypes.string.isRequired,
  }).isRequired,
  toggleModal: propTypes.func.isRequired,
};
