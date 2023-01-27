import { useState, useEffect } from "react";

import api from "../utils/api.js";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  //переменная имени пользователя
  const [userName, setUserName] = useState("");

  //переменная деятельности пользователя
  const [userDescription, setUserDescription] = useState("");

  //переменная аватарки
  const [userAvatar, setUserAvatar] = useState("");

  //переменная начального массива фотокарточек
  const [cards, setCards] = useState([]);

  // инициализация начальных данных
  useEffect(() => {
    Promise.all([api.getUsersInfo(), api.getInitialCards()])
      .then(([me, cards]) => {
        setUserName(me.name);
        setUserDescription(me.about);
        setUserAvatar(me.avatar);
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__box">
          <button
            className="profile__avatar-edit-button"
            type="button"
            onClick={onEditAvatar}
          ></button>
          <img className="profile__avatar" src={userAvatar} alt="Аватар" />
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              onClick={onEditProfile}
            ></button>
            <p className="profile__profession">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements">
        <ul className="elements__container">
          {cards.map((card) => (
            <Card card={card} key={card._id} onCardClick={onCardClick}></Card>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
