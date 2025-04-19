import React, { useEffect, useRef } from "react";

function Modal({ visible, onClose, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }
    visible ? modalRef.current.showModal() : modalRef.current.close();
  }, [visible]);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  }

  const handleESC = (event) => {
    event.preventDefault();
    handleClose();
  }

  return (
    <dialog ref={modalRef} id="my_modal_1" className="modal modal-middle" onCancel={handleESC}>
      <div className="modal-box">
        {children}
      </div>
    </dialog>
  );
}

export default Modal;

