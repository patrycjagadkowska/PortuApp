const Backdrop = ({ className, onClick, children }) => {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export default Backdrop;
