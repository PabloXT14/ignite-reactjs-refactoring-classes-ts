import { ReactNode, useEffect, useState } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, setIsOpen, children }: ModalProps) {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          bottom: 'auto',
          left: '0',
          right: '0',
          transform: 'translateY(-50%)',
          margin: '15px auto',
          padding: '0',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          maxWidth: '736px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },

      }}
    >
      {children}
    </ReactModal>
  );
}

