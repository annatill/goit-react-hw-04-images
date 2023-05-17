import { createPortal } from 'react-dom';
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Loader } from '../Loader/Loader';
import { Overlay, ModalContainer, ModalImage } from './Modal.styled';
const modalRoot = document.getElementById('modal-root');

export class Modal extends Component {
  state = {
    loading: false,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);

    this.setState({ loading: true });
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.toggleModal();
    }
  };
  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.toggleModal();
    }
  };
  render() {
    const { loading } = this.state;
    const { largeImageURL, tags } = this.props.image;

    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalContainer>
          {loading && <Loader />}
          <ModalImage
            src={largeImageURL}
            alt={tags}
            onLoad={() => this.setState({ loading: false })}
          />
        </ModalContainer>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  image: propTypes.shape({
    largeImageURL: propTypes.string.isRequired,
    tags: propTypes.string.isRequired,
  }).isRequired,
  toggleModal: propTypes.func.isRequired,
};
