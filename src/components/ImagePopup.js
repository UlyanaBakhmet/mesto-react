function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_type_img ${card.name && "popup_opened"}`}>
      <div className="popup__img-container">
        <button
          className="popup__close-button close-img-popup"
          type="button"
          onClick={onClose}
        ></button>
        <figure className="popup__img-figure">
          <img className="popup__img" src={card.link} alt={card.name} />
          <figcaption className="popup__figcaption">{card.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
