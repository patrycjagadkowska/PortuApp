import { createPortal } from "react-dom";

import Backdrop from "./Backdrop";

import classes from "./styles/Modal.module.css";

const Modal = ({ open, header, children, onClick }) => {
  return createPortal(
    <>
      <dialog className={classes.modal} open={open}>
        <section>
          <header className={classes["modal__header"]}>
            <h2>{header}</h2>
          </header>
          {children}
        </section>
      </dialog>
      <Backdrop className={classes.backdrop} onClick={onClick} />
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;