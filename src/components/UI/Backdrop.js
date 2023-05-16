const Backdrop = props => {
    return (
        <div className={props.className} onClick={props.onClick}>
        {props.children}
        </div>
    );
};

export default Backdrop;