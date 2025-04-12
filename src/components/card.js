export function createCard(item, removeCard, likeHandler, handleOpenImage, currentUserId) {
  const cardTemplate = document.querySelector('#card-template').content.querySelector('.places__item');
  const cardsItem = cardTemplate.cloneNode(true);
  const cardImage = cardsItem.querySelector('.card__image');

  cardImage.src = item.link;
  cardImage.alt = `Изображение места: ${item.name}`;
  cardsItem.querySelector('.card__title').textContent = item.name;

  const cardId = item._id;
  cardsItem.setAttribute('data-id', cardId);

  const likeButton = cardsItem.querySelector('.card__like-button');
  const likeCountElement = cardsItem.querySelector('.card__like-count');
  likeCountElement.textContent = item.likes.length;

  const isLikedByCurrentUser = item.likes.some(like => like._id === currentUserId);
  likeButton.classList.toggle('card__like-button_is-active', isLikedByCurrentUser);

  likeButton.addEventListener('click', () => {
    const isLikedNow = likeButton.classList.contains('card__like-button_is-active');

    likeHandler(cardId, isLikedNow, (updatedLikes) => {
      likeButton.classList.toggle('card__like-button_is-active');
      likeCountElement.textContent = updatedLikes.length;
    });
  });

  const deleteButton = cardsItem.querySelector('.card__delete-button');
  if (item.owner._id !== currentUserId) {
    deleteButton.style.display = 'none';
  } else {
    deleteButton.addEventListener("click", () => {
      removeCard(cardId, cardsItem);
    });
  }

  cardImage.addEventListener('click', () => handleOpenImage(item));
  return cardsItem;
}

export function updateLikesCount(likes, cardId) {
  const likeCount = document.querySelector(`[data-id="${cardId}"] .card__like-count`);
  likeCount.textContent = likes.length;
}

export function removeCard(cardId, cardsItem) {
  deleteCard(cardId)
    .then(() => {
      cardsItem.remove();
    })
    .catch(err => console.log(err));
}
