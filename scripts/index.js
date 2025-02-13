// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const addCardButton = document.querySelector('.profile__add-button');
const deleteCardButton = document.querySelectorAll('.card__delete-button');
const cardsList = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

function createCard(item) {
    const cardsItem = cardTemplate.querySelector('.places__item').cloneNode(true);
    cardsItem.querySelector('.card__image').src = item.link;
    cardsItem.querySelector('.card__title').textContent = item.name;
    cardsItem.querySelector('.card__delete-button').addEventListener('click', function () {
        cardsItem.remove();
    })
    return cardsItem;
  };

function addCards() {
    initialCards.forEach(function (item) {
        const itemToRender = createCard(item);
        cardsList.append(itemToRender);
    })
};
addCards();

let i = 0;
function addOneCard() {
    if (i < initialCards.length) {
      const item = createCard(initialCards[i]);
      cardsList.append(item);
      i++;
    } else {
      i = 0;
    }
};

addCardButton.addEventListener('click', addOneCard);
