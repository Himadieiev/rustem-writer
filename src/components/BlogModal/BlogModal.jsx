import { createPortal } from "react-dom";
import { useEffect } from "react";

import css from "./BlogModal.module.css";

const modalRoot = document.querySelector("#modal-root");

const BlogModal = ({ children, toggleModal }) => {
  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        toggleModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleModal]);

  return createPortal(
    <div className={css.modalBackdrop} onClick={handleBackdropClick}>
      <div className={css.modalContent}>
        <div>{children}</div>
      </div>
    </div>,
    modalRoot
  );
};

export default BlogModal;
