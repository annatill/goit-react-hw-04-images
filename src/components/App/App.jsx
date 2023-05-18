import { useState, useEffect } from 'react';
import { Container } from './App.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchImages } from '../../services/fetchImages';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [imageModal, setImageModal] = useState(null);

  const handleSubmitForm = query => {
    setQuery(query);
    setPage(1);
  };

  const handleErrorMessage = text => {
    toast.error(text, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  useEffect(() => {
    const fetchImagesByQuery = () => {
      setLoading(true);
      fetchImages(query, page)
        .then(({ images, total }) => {
          if (images.length === 0) {
            handleErrorMessage(
              'Sorry, there are no images matching your search query. Please try again.'
            );
            setImages([]);
            return;
          }
          if (page === 1) {
            setImages(images);
            setTotal(total);
          } else {
            setImages(prevState => [...prevState, ...images]);
          }
        })
        .catch(error =>
          handleErrorMessage(
            error.message || 'Something went wrong. Try again.'
          )
        )
        .finally(() => setLoading(false));
    };
    if (query) {
      fetchImagesByQuery();
    }
  }, [query, page]);

  const onClickButton = () => {
    setPage(prevState => prevState + 1);
  };

  const toggleModal = image => {
    setShowModal(prevState => !prevState);
    setImageModal(image);
  };

  const shouldRenderButton = 12 * page < total && images.length > 0;
  return (
    <Container>
      <Searchbar
        onSubmit={handleSubmitForm}
        handleErrorMessage={handleErrorMessage}
      />
      <ToastContainer autoClose={3000} />
      {loading && <Loader />}
      <ImageGallery images={images} toggleModal={toggleModal} />
      {shouldRenderButton && <Button onClick={onClickButton} />}
      {showModal && <Modal toggleModal={toggleModal} image={imageModal} />}
    </Container>
  );
};
