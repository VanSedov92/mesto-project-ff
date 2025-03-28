export function createCard(item, removeCard, likeActive, handleOpenImage) {
  const cardTemplate = document.querySelector('#card-template').content.querySelector('.places__item');
  const cardsItem = cardTemplate.cloneNode(true);
  const cardImage = cardsItem.querySelector('.card__image');

  cardImage.src = item.link;
  cardImage.alt = `Изображение места: ${item.name}`;
  cardsItem.querySelector('.card__title').textContent = item.name;

  cardsItem.querySelector('.card__delete-button').addEventListener("click", () => removeCard(cardsItem));
  cardsItem.querySelector('.card__like-button').addEventListener('click', (evt) => likeActive(evt.target));
  cardImage.addEventListener('click', () => handleOpenImage(item));
  
  return cardsItem;
}

export function likeActive(button) {
  button.classList.toggle('card__like-button_is-active');
}

export function removeCard(cardsItem) {
  cardsItem.remove();
}