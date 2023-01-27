import { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  //обновление данных о пользователе
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  //обновление аватара
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  //добавление новой фотокарточки
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  //открываем увеличенную карточку
  const [selectedCard, setSelectedCard] = useState({});

  //метод обработки открытия попапа с данными пользователя
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  //метод обработки открытия попапа с аватаром
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  //метод обработки открытия попапа с добавлением новой фотокарточки
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  //метод обработки открытия попапа с увеличенной карточкой
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  //метод обработки закрытия всех попапов
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard({});
  };

  return (
    <div className="page">
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm
        name="user"
        title="Редактировать профиль"
        buttonText="Сохранить"
        onClose={closeAllPopups}
        isOpen={isEditProfilePopupOpen}
      >
        <input
          className="popup__input popup__input_type_name"
          id="userName"
          type="text"
          minlength="2"
          maxlength="40"
          name="userName"
          placeholder="Имя пользователя"
          required
        />
        <span className="popup__error userName-error"></span>

        <input
          className="popup__input popup__input_type_profession"
          id="userProfession"
          type="text"
          minlength="2"
          maxlength="200"
          name="userProfession"
          placeholder="Расскажите о себе"
          required
        />
        <span className="popup__error userProfession-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="addCard"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_type_card-name"
          id="cardName"
          type="text"
          minlength="2"
          maxlength="30"
          name="name"
          placeholder="Название"
          required
        />
        <span className="popup__error cardName-error"></span>

        <input
          className="popup__input popup__input_type_card-link"
          id="cardLink"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__error cardLink-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_type_avatar-link"
          id="avatarLink"
          type="url"
          name="link"
          placeholder="Ссылка на аватар"
          required
        />
        <span className="popup__error avatarLink-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="submit"
        title="Вы уверены?"
        buttonText="Да"
        onClose={closeAllPopups}
      />

      <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>
    </div>
  );
}

export default App;
