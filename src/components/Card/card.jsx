import "./styles.css";

const Card = ({ name, author, src, onClick }) => {
  return (
    <div
      className="card"
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      <div className="card__img">
        <img src={src} alt="img" />
      </div>
      <p className="card__name action">{name}</p>
      <p>{author}</p>
    </div>
  );
};

export default Card;
