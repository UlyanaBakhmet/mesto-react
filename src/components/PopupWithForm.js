function PopupWithForm({ children, title, name, buttonText, isOpen, onClose }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form
          className={`popup__form popup__form_type_${name}`}
          method="get"
          name={name}
        >
          {children}
          <button className="popup__save-button" type="submit">
          {buttonText}
          </button>
        </form>
        <button
          className={`popup__close-button close-${name}-popup`}
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
