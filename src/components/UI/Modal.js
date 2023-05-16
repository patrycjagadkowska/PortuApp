import Backdrop from './Backdrop';

import classes from './styles/Modal.module.css';

const Modal = (props) => {
    return (
      <>
        <dialog className={classes.modal} open={props.open}>
          <section>
            <header className={classes["modal__header"]}>{props.header}</header>
            <p className={classes["modal__text"]}>{props.children}</p>
          </section>
        </dialog>
        <Backdrop className={classes.backdrop} />
      </>
    );
};

export default Modal;