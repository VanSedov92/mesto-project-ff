export function openPopup(popup) {
  popup.classList.add('popup_is-animated');
  setTimeout(() => {
    popup.classList.add('popup_is-opened');
  }, 60);
  document.addEventListener('keydown', closePopupEsc);
}

export function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closePopupEsc);
}

export function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
}

export function popupListeners() {
  const popupCloseButtons = document.querySelectorAll('.popup__close');
  popupCloseButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
      const popup = evt.target.closest('.popup');
      closePopup(popup);
    })
  });
  
  document.addEventListener('click', (evt) => {
    const popupCloseOverlay = evt.target.classList.contains('popup');
    if (popupCloseOverlay) {
      closePopup(evt.target);
    }
  });
}

