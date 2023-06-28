const Card = ({ img, alt, children, className }) => {
  return (
    <div className={className}>
      <img src={img} alt={alt} />
      {children}
    </div>
  );
};

export default Card;