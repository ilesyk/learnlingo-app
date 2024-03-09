import Modal from 'react-modal';

import { ModalCloseButton } from './Modal.styled';
import { IoCloseOutline } from 'react-icons/io5';
import { AuthForm } from './LoginModal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(18, 20, 23, 0.50)',
    zIndex: '2',
    overflow: 'none',
  },
  content: {
    maxWidth: '566px',
    maxHeight: '90vh',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    borderRadius: '30px',
    transform: 'translate(-50%, -50%)',
    padding: '64px',
    overflowY: 'auto',
  },
};
Modal.setAppElement('#root');

export const LoginModal = ({ isOpen, handleClose, type }) => {
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={() => {
        handleClose();
      }}
    >
      <ModalCloseButton onClick={handleClose}>
        <IoCloseOutline size={32} />
      </ModalCloseButton>
      <AuthForm type={type} handleClose={handleClose}/>
    </Modal>
  );
};
