import { createPortal } from 'react-dom';

import Backdrop from './Backdrop';

import classes from './styles/Modal.module.css';

const Modal = (props) => {
    return createPortal(
      <>
        <dialog className={classes.modal} open={props.open}>
          <section>
            <header className={classes["modal__header"]}><h2>{props.header}</h2></header>
            {props.children}
          </section>
        </dialog>
        <Backdrop className={classes.backdrop} onClick={props.onClick} />
      </>,
      document.getElementById("modal-root")
    );
};

export default Modal;