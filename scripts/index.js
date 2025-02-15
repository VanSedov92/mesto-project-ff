const cardsList = document.querySelector('.places__list');   
const cardTemplate = document.querySelector('#card-template').content.querySelector('.places__item'); 

function createCard(item, removeFunction) {
    const cardsItem = cardTemplate.cloneNode(true); 
    cardsItem.querySelector('.card__image').src = item.link;
    cardsItem.querySelector('.card__image').alt = `Изображение места: ${item.name}`; 
    cardsItem.querySelector('.card__title').textContent = item.name;
    const deleteCardButton = cardsItem.querySelector('.card__delete-button');
    deleteCardButton.addEventListener("click", () => removeFunction(cardsItem));
    return cardsItem;
}

function removeCard(cardsItem) {
  cardsItem.remove();
}

function addCards() {
  initialCards.forEach((item) => {
      const cardsItem = createCard(item, removeCard);
      cardsList.append(cardsItem);
  });
}

addCards();
