import './pages/index.css';
import { initialCards } from './components/cards.js';
import { createCard, removeCard, likeActive } from './components/card.js';
import { openPopup, closePopup, popupListeners } from './components/modal.js';

const cardsList = document.querySelector('.places__list');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupEdit = document.querySelector('.popup_type_edit');


const popupImage = document.querySelector('.popup_type_image');
const popupImageContent = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');

const cardFormElement = document.forms['new-place'];
const cardInputName = cardFormElement.querySelector('.popup__input_type_card-name');
const cardInputImage = cardFormElement.querySelector('.popup__input_type_url');


const editFormElement = document.forms['edit-profile'];
const nameInput = editFormElement.querySelector('.popup__input_type_name');
const jobInput = editFormElement.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__description');

function handleOpenImage(item) {
  popupImageContent.src = item.link;
  popupImageContent.alt = `Изображение места: ${item.name}`;
  popupCaption.textContent = item.name;
  openPopup(popupImage);
}

function addCards() {
  initialCards.forEach((item) => {
    const cardsItem = createCard(item, removeCard, likeActive, handleOpenImage);
    cardsList.append(cardsItem);
  });
}

addCards(); 

popupListeners();

profileAddButton.addEventListener('click', () => {
  openPopup(popupNewCard);
});

profileEditButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
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

function handleFormSubmitProfile(evt) {
  evt.preventDefault();

  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  profileName.textContent = nameValue;
  profileJob.textContent = jobValue;
  editFormElement.reset();

  closePopup(popupEdit);
}

editFormElement.addEventListener('submit', handleFormSubmitProfile);

