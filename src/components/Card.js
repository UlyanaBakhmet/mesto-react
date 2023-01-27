function Card({ card, onCardClick }) {
  const handlePhotoClick = () => {
    onCardClick(card);
  };

  return (
    <li className="card">
      <img
        className="card__image"
        src={card.link}
        alt={card.name}
        onClick={handlePhotoClick}
      />
      <div className="card__info">
        <h2 className="card__name">{card.name}</h2>

        <div className="card__like-container">
          <button className="card__like-button" type="button"></button>
          <span className="card__like-calculator">{card.likes.length}</span>
        </div>
      </div>
      <button className="card__button-delete" type="button"></button>
    </li>
  );
}

export default Card;
