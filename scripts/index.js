// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
 
const cardsList = document.querySelector('.places__list');   
const cardTemplate = document.querySelector('#card-template').content; 
 
// Функция создания карточки
function createCard(item) {
    const cardsItem = cardTemplate.querySelector('.places__item').cloneNode(true); 
    cardsItem.querySelector('.card__image').src = item.link;
    cardsItem.querySelector('.card__image').alt = `Изображение места: ${item.name}`; 
    cardsItem.querySelector('.card__title').textContent = item.name;
    const deleteCardButton = cardsItem.querySelector('.card__delete-button');
    deleteCardButton.addEventListener('click', function() {
      deleteCard(cardsItem)
    });
    return cardsItem; 
  }; 

// Функция удаления карточки

function deleteCard(cardsItem) {
  cardsItem.remove();
}

// Выводим карточки на страницу 

function addCards() { 
    initialCards.forEach(function (item) { 
        const renderCard = createCard(item, deleteCard); 
        cardsList.append(renderCard); 
    }) 
}; 
addCards(); 

