const Card = props => {
    const { img, alt, children, className } = props;

    return (
        <div className={className}>
            <img src={img} alt={alt} />
            {children}
        </div>
    );
};

export default Card;