import './pages/index.css';
import { initialCards } from './components/cards.js';
import { createCard, addCards, removeCard, likeActive, handleOpenImage } from './components/card.js';
import { openPopup, closePopup, popupListeners } from './components/modal.js';

export const cardsList = document.querySelector('.places__list');

const popupNewCard = document.querySelector('.popup_type_new-card');
const popupEdit = document.querySelector('.popup_type_edit');

const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');

const cardFormElement = document.forms['new-place'];
const cardInputName = cardFormElement.querySelector('.popup__input_type_card-name');
const cardInputImage = cardFormElement.querySelector('.popup__input_type_url');


const formElement = document.forms['edit-profile'];
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__description');

addCards(initialCards); 

popupListeners();

profileAddButton.addEventListener('click', () => {
  openPopup(popupNewCard);
});
profileEditButton.addEventListener('click', () => {
  openPopup(popupEdit);
});

function handleFormSubmitCard(evt) {
  evt.preventDefault();

  const titleValue = cardInputName.value;
  const urlValue = cardInputImage.value;
  const cardsItem = createCard({ name: titleValue, link: urlValue }, removeCard, likeActive, handleOpenImage);
  cardsList.prepend(cardsItem);
  cardFormElement.reset();
  
  closePopup(popupNewCard);
}

cardFormElement.addEventListener('submit', handleFormSubmitCard);

function handleFormSubmit(evt) {
  evt.preventDefault();

  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  profileName.textContent = nameValue;
  profileJob.textContent = jobValue;
  formElement.reset();

  closePopup(popupEdit);
}

formElement.addEventListener('submit', handleFormSubmit);



