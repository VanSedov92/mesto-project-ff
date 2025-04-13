import './pages/index.css';
import { createCard } from './components/card.js';
import { openPopup, closePopup, setClosePopupListeners } from './components/modal.js';
import { enableValidation, clearValidation } from './components/validation.js';
import { getCurrentUser, getInitialCards, addCard, updateProfile, likeCard, unlikeCard, deleteCard, updateAvatar} from './components/api.js';

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  inputErrorActiveClass: 'popup__input-error_active',
  errorClass: 'popup__error_visible'
};

const cardsList = document.querySelector('.places__list');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupEdit = document.querySelector('.popup_type_edit');

const popupImage = document.querySelector('.popup_type_image');
const popupImageContent = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');

const editFormElement = document.forms['edit-profile'];
const nameInput = editFormElement.querySelector('.popup__input_type_name');
const jobInput = editFormElement.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__description');

const cardFormElement = document.forms['new-place'];
const cardInputName = cardFormElement.querySelector('.popup__input_type_card-name');
const cardInputImage = cardFormElement.querySelector('.popup__input_type_url');

const avatarEditButton = document.querySelector('.profile__avatar-edit-button');
const avatarPopup = document.querySelector('.popup_type_avatar');
const avatarPopupCloseButton = avatarPopup.querySelector('.popup__close');
const avatarFormElement = document.forms['avatar-form'];
const avatarInput = avatarFormElement.querySelector('.popup__input_type_avatar');
const profileAvatar = document.querySelector('.profile__image');

let cardSubmittedSuccessfully = false;

avatarPopupCloseButton.addEventListener('click', () => closePopup(avatarPopup));

avatarEditButton.addEventListener('click', () => openPopup(avatarPopup));

avatarPopup.addEventListener('mousedown', (evt) => {
  if (evt.target === evt.currentTarget) closePopup(avatarPopup);
});

function handleFormSubmitAvatar(evt) {
  evt.preventDefault();

  const newAvatarUrl = avatarInput.value;

  updateAvatar(newAvatarUrl)
    .then((res) => {
      profileAvatar.style.backgroundImage = `url(${res.avatar})`;
      avatarFormElement.reset();
      closePopup(avatarPopup);
    })
    .catch((err) => console.log('Ошибка при обновлении аватара:', err));
}

avatarFormElement.addEventListener('submit', handleFormSubmitAvatar);

function handleOpenImage(item) {
  popupImageContent.src = item.link;
  popupImageContent.alt = `Изображение места: ${item.name}`;
  popupCaption.textContent = item.name;
  openPopup(popupImage);
}

let currentUserId = '';

getCurrentUser()
  .then(user => {
    currentUserId = user._id; 

    getInitialCards()
      .then((cards) => {
        cards.forEach((item) => {
          const cardElement = createCard(item, removeCardHandler, likeHandler, handleOpenImage, currentUserId);
          cardsList.append(cardElement);
        });
      })
      .catch((err) => console.log(err));
  })
  .catch(err => console.log('Ошибка при получении данных пользователя', err));


setClosePopupListeners();

profileEditButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  clearValidation(editFormElement, validationConfig);
  openPopup(popupEdit);
});

profileAddButton.addEventListener('click', () => {
  if (cardSubmittedSuccessfully) {
    cardFormElement.reset();
    clearValidation(cardFormElement, validationConfig);
    cardSubmittedSuccessfully = false;
  }
  openPopup(popupNewCard);
});

function handleFormSubmitCard(evt) {
  evt.preventDefault();

  const titleValue = cardInputName.value;
  const urlValue = cardInputImage.value;

  addCard(titleValue, urlValue)
    .then((newCard) => {
      const cardElement = createCard(newCard, removeCardHandler, likeHandler, handleOpenImage, currentUserId);
      cardsList.prepend(cardElement);
      
      cardSubmittedSuccessfully = true;
      cardFormElement.reset();
      clearValidation(cardFormElement, validationConfig);
      closePopup(popupNewCard);
    })
    .catch((err) => console.log(err));
}

cardFormElement.addEventListener('submit', handleFormSubmitCard);

function handleFormSubmitProfile(evt) {
  evt.preventDefault();

  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  updateProfile(nameValue, jobValue)
    .then((res) => {
      profileName.textContent = res.name;
      profileJob.textContent = res.about;
      closePopup(popupEdit);
    })
    .catch((err) => console.log(err));
}

editFormElement.addEventListener('submit', handleFormSubmitProfile);

function likeHandler(cardId, isLiked, updateLikeUI) {
  const action = isLiked ? unlikeCard : likeCard;

  action(cardId)
    .then((updatedCard) => updateLikeUI(updatedCard.likes))
    .catch((err) => console.log(err));
}

function removeCardHandler(cardId, cardElement) {
  deleteCard(cardId)
    .then(() => cardElement.remove())
    .catch((err) => console.log(err));
}

enableValidation(validationConfig);
