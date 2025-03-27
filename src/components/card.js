import { openPopup } from './modal.js';
import { cardsList } from '../index.js';

const cardTemplate = document.querySelector('#card-template').content.querySelector('.places__item');
const popupImage = document.querySelector('.popup_type_image');
const popupImageContent = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

export function createCard(item, removeCard, likeActive, handleOpenImage) {
  const cardsItem = cardTemplate.cloneNode(true);
  const cardImage = cardsItem.querySelector('.card__image');

  cardImage.src = item.link;
  cardImage.alt = `Изображение места: ${item.name}`;
  cardsItem.querySelector('.card__title').textContent = item.name;

  cardImage.addEventListener('click', () => handleOpenImage(item));

  cardsItem.querySelector('.card__delete-button').addEventListener("click", () => removeCard(cardsItem));
  cardsItem.querySelector('.card__like-button').addEventListener('click', (evt) => likeActive(evt.target));

  return cardsItem;
}

export function handleOpenImage(item) {
  popupImageContent.src = item.link;
  popupImageContent.alt = `Изображение места: ${item.name}`;
  popupCaption.textContent = item.name;
  openPopup(popupImage);
}

export function likeActive(button) {
  button.classList.toggle('card__like-button_is-active');
}

export function removeCard(cardsItem) {
  cardsItem.remove();
}

export function addCards(initialCards) {
  initialCards.forEach((item) => {
    const cardsItem = createCard(item, removeCard, likeActive, handleOpenImage);
    cardsList.append(cardsItem);
  });
}