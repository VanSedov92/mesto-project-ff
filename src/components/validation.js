const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.inputErrorActiveClass);
};

const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(config.inputErrorActiveClass);
};

const checkInputValidity = (formElement, inputElement, config) => {
  const pattern = /^[a-zA-Zа-яА-ЯёЁ\s\-]+$/;
  const errorMessage = inputElement.dataset.errorMessage;

  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  } else if (
    (inputElement.name === 'name' || inputElement.name === 'description') || inputElement.name === 'place-name' &&
    !pattern.test(inputElement.value)
  ) {
    showInputError(formElement, inputElement, errorMessage, config);
  } else {
    hideInputError(formElement, inputElement, config);
  }
};

const hasInvalidInput = (inputList) => {
  const pattern = /^[a-zA-Zа-яА-ЯёЁ\s\-]+$/;

  return inputList.some((inputElement) => {
    if (
      (inputElement.name === 'name' ||
       inputElement.name === 'description' ||
       inputElement.name === 'place-name') &&
      !pattern.test(inputElement.value)
    ) {
      return true;
    }
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(config.inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(config.inactiveButtonClass);
  }
};

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, config);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, config);
  });
};

const clearValidation = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, config);
  });

  buttonElement.disabled = true;
  buttonElement.classList.add(config.inactiveButtonClass);
};

export { enableValidation, clearValidation };