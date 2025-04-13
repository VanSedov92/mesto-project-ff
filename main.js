/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/api.js":
/*!*******************************!*\
  !*** ./src/components/api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addCard: () => (/* binding */ addCard),\n/* harmony export */   deleteCard: () => (/* binding */ deleteCard),\n/* harmony export */   getCurrentUser: () => (/* binding */ getCurrentUser),\n/* harmony export */   getInitialCards: () => (/* binding */ getInitialCards),\n/* harmony export */   likeCard: () => (/* binding */ likeCard),\n/* harmony export */   unlikeCard: () => (/* binding */ unlikeCard),\n/* harmony export */   updateAvatar: () => (/* binding */ updateAvatar),\n/* harmony export */   updateProfile: () => (/* binding */ updateProfile)\n/* harmony export */ });\nvar config = {\n  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-35',\n  headers: {\n    authorization: 'de3a9bfb-35ee-48e6-b8f7-6f41f980c50f',\n    'Content-Type': 'application/json'\n  }\n};\nvar getCurrentUser = function getCurrentUser() {\n  return fetch(\"\".concat(config.baseUrl, \"/users/me\"), {\n    headers: config.headers\n  }).then(handleResponse);\n};\nvar getInitialCards = function getInitialCards() {\n  return fetch(\"\".concat(config.baseUrl, \"/cards\"), {\n    headers: config.headers\n  }).then(handleResponse);\n};\nvar addCard = function addCard(name, link) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards\"), {\n    method: 'POST',\n    headers: config.headers,\n    body: JSON.stringify({\n      name: name,\n      link: link\n    })\n  }).then(handleResponse);\n};\nvar updateProfile = function updateProfile(name, about) {\n  return fetch(\"\".concat(config.baseUrl, \"/users/me\"), {\n    method: 'PATCH',\n    headers: config.headers,\n    body: JSON.stringify({\n      name: name,\n      about: about\n    })\n  }).then(handleResponse);\n};\nvar likeCard = function likeCard(cardId) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards/likes/\").concat(cardId), {\n    method: 'PUT',\n    headers: config.headers\n  }).then(handleResponse);\n};\nvar unlikeCard = function unlikeCard(cardId) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards/likes/\").concat(cardId), {\n    method: 'DELETE',\n    headers: config.headers\n  }).then(handleResponse);\n};\nvar deleteCard = function deleteCard(cardId) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards/\").concat(cardId), {\n    method: 'DELETE',\n    headers: config.headers\n  }).then(handleResponse);\n};\nvar updateAvatar = function updateAvatar(avatarUrl) {\n  return fetch(\"\".concat(config.baseUrl, \"/users/me/avatar\"), {\n    method: 'PATCH',\n    headers: config.headers,\n    body: JSON.stringify({\n      avatar: avatarUrl\n    })\n  }).then(handleResponse);\n};\nvar handleResponse = function handleResponse(res) {\n  if (res.ok) {\n    return res.json();\n  }\n  return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n};\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/api.js?");

/***/ }),

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   removeCard: () => (/* binding */ removeCard),\n/* harmony export */   updateLikesCount: () => (/* binding */ updateLikesCount)\n/* harmony export */ });\nfunction createCard(item, removeCard, likeHandler, handleOpenImage, currentUserId) {\n  var cardTemplate = document.querySelector('#card-template').content.querySelector('.places__item');\n  var cardsItem = cardTemplate.cloneNode(true);\n  var cardImage = cardsItem.querySelector('.card__image');\n  cardImage.src = item.link;\n  cardImage.alt = \"\\u0418\\u0437\\u043E\\u0431\\u0440\\u0430\\u0436\\u0435\\u043D\\u0438\\u0435 \\u043C\\u0435\\u0441\\u0442\\u0430: \".concat(item.name);\n  cardsItem.querySelector('.card__title').textContent = item.name;\n  var cardId = item._id;\n  cardsItem.setAttribute('data-id', cardId);\n  var likeButton = cardsItem.querySelector('.card__like-button');\n  var likeCountElement = cardsItem.querySelector('.card__like-count');\n  likeCountElement.textContent = item.likes.length;\n  var isLikedByCurrentUser = item.likes.some(function (like) {\n    return like._id === currentUserId;\n  });\n  likeButton.classList.toggle('card__like-button_is-active', isLikedByCurrentUser);\n  likeButton.addEventListener('click', function () {\n    var isLikedNow = likeButton.classList.contains('card__like-button_is-active');\n    likeHandler(cardId, isLikedNow, function (updatedLikes) {\n      likeButton.classList.toggle('card__like-button_is-active');\n      likeCountElement.textContent = updatedLikes.length;\n    });\n  });\n  var deleteButton = cardsItem.querySelector('.card__delete-button');\n  if (item.owner._id !== currentUserId) {\n    deleteButton.style.display = 'none';\n  } else {\n    deleteButton.addEventListener(\"click\", function () {\n      removeCard(cardId, cardsItem);\n    });\n  }\n  cardImage.addEventListener('click', function () {\n    return handleOpenImage(item);\n  });\n  return cardsItem;\n}\nfunction updateLikesCount(likes, cardId) {\n  var likeCount = document.querySelector(\"[data-id=\\\"\".concat(cardId, \"\\\"] .card__like-count\"));\n  likeCount.textContent = likes.length;\n}\nfunction removeCard(cardId, cardsItem) {\n  deleteCard(cardId).then(function () {\n    cardsItem.remove();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/card.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closePopup: () => (/* binding */ closePopup),\n/* harmony export */   closePopupEsc: () => (/* binding */ closePopupEsc),\n/* harmony export */   closePopupOverlay: () => (/* binding */ closePopupOverlay),\n/* harmony export */   openPopup: () => (/* binding */ openPopup),\n/* harmony export */   setClosePopupListeners: () => (/* binding */ setClosePopupListeners)\n/* harmony export */ });\nfunction openPopup(popup) {\n  popup.classList.add('popup_is-animated');\n  setTimeout(function () {\n    popup.classList.add('popup_is-opened');\n  }, 60);\n  document.addEventListener('keydown', closePopupEsc);\n  popup.addEventListener('click', closePopupOverlay);\n}\nfunction closePopup(popup) {\n  popup.classList.remove('popup_is-opened');\n  document.removeEventListener('keydown', closePopupEsc);\n  popup.removeEventListener('click', closePopupOverlay);\n}\nfunction closePopupEsc(evt) {\n  if (evt.key === 'Escape') {\n    var openedPopup = document.querySelector('.popup_is-opened');\n    if (openedPopup) {\n      closePopup(openedPopup);\n    }\n  }\n}\nfunction closePopupOverlay(evt) {\n  if (evt.target.classList.contains('popup')) {\n    closePopup(evt.target);\n  }\n}\nfunction setClosePopupListeners() {\n  var popupCloseButtons = document.querySelectorAll('.popup__close');\n  popupCloseButtons.forEach(function (button) {\n    button.addEventListener('click', function (evt) {\n      var popup = evt.target.closest('.popup');\n      closePopup(popup);\n    });\n  });\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/modal.js?");

/***/ }),

/***/ "./src/components/validation.js":
/*!**************************************!*\
  !*** ./src/components/validation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearValidation: () => (/* binding */ clearValidation),\n/* harmony export */   enableValidation: () => (/* binding */ enableValidation)\n/* harmony export */ });\nvar showInputError = function showInputError(formElement, inputElement, errorMessage, config) {\n  var errorElement = formElement.querySelector(\"#\".concat(inputElement.id, \"-error\"));\n  inputElement.classList.add(config.inputErrorClass);\n  errorElement.textContent = errorMessage;\n  errorElement.classList.add(config.inputErrorActiveClass);\n};\nvar hideInputError = function hideInputError(formElement, inputElement, config) {\n  var errorElement = formElement.querySelector(\"#\".concat(inputElement.id, \"-error\"));\n  inputElement.classList.remove(config.inputErrorClass);\n  errorElement.textContent = '';\n  errorElement.classList.remove(config.inputErrorActiveClass);\n};\nvar checkInputValidity = function checkInputValidity(formElement, inputElement, config) {\n  var pattern = /^[a-zA-Zа-яА-ЯёЁ\\s\\-]+$/;\n  var errorMessage = inputElement.dataset.errorMessage;\n  if (!inputElement.validity.valid) {\n    showInputError(formElement, inputElement, inputElement.validationMessage, config);\n  } else if (inputElement.name === 'name' || inputElement.name === 'description' || inputElement.name === 'place-name' && !pattern.test(inputElement.value)) {\n    showInputError(formElement, inputElement, errorMessage, config);\n  } else {\n    hideInputError(formElement, inputElement, config);\n  }\n};\nvar hasInvalidInput = function hasInvalidInput(inputList) {\n  var pattern = /^[a-zA-Zа-яА-ЯёЁ\\s\\-]+$/;\n  return inputList.some(function (inputElement) {\n    if ((inputElement.name === 'name' || inputElement.name === 'description' || inputElement.name === 'place-name') && !pattern.test(inputElement.value)) {\n      return true;\n    }\n    return !inputElement.validity.valid;\n  });\n};\nvar toggleButtonState = function toggleButtonState(inputList, buttonElement, config) {\n  if (hasInvalidInput(inputList)) {\n    buttonElement.disabled = true;\n    buttonElement.classList.add(config.inactiveButtonClass);\n  } else {\n    buttonElement.disabled = false;\n    buttonElement.classList.remove(config.inactiveButtonClass);\n  }\n};\nvar setEventListeners = function setEventListeners(formElement, config) {\n  var inputList = Array.from(formElement.querySelectorAll(config.inputSelector));\n  var buttonElement = formElement.querySelector(config.submitButtonSelector);\n  toggleButtonState(inputList, buttonElement, config);\n  inputList.forEach(function (inputElement) {\n    inputElement.addEventListener('input', function () {\n      checkInputValidity(formElement, inputElement, config);\n      toggleButtonState(inputList, buttonElement, config);\n    });\n  });\n};\nvar enableValidation = function enableValidation(config) {\n  var formList = Array.from(document.querySelectorAll(config.formSelector));\n  formList.forEach(function (formElement) {\n    formElement.addEventListener('submit', function (evt) {\n      evt.preventDefault();\n    });\n    setEventListeners(formElement, config);\n  });\n};\nvar clearValidation = function clearValidation(formElement, config) {\n  var inputList = Array.from(formElement.querySelectorAll(config.inputSelector));\n  var buttonElement = formElement.querySelector(config.submitButtonSelector);\n  inputList.forEach(function (inputElement) {\n    hideInputError(formElement, inputElement, config);\n  });\n  buttonElement.disabled = true;\n  buttonElement.classList.add(config.inactiveButtonClass);\n};\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/validation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _components_card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/card.js */ \"./src/components/card.js\");\n/* harmony import */ var _components_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/modal.js */ \"./src/components/modal.js\");\n/* harmony import */ var _components_validation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/validation.js */ \"./src/components/validation.js\");\n/* harmony import */ var _components_api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/api.js */ \"./src/components/api.js\");\n\n\n\n\n\nvar validationConfig = {\n  formSelector: '.popup__form',\n  inputSelector: '.popup__input',\n  submitButtonSelector: '.popup__button',\n  inactiveButtonClass: 'popup__button_disabled',\n  inputErrorClass: 'popup__input_type_error',\n  inputErrorActiveClass: 'popup__input-error_active',\n  errorClass: 'popup__error_visible'\n};\nvar cardsList = document.querySelector('.places__list');\nvar popupNewCard = document.querySelector('.popup_type_new-card');\nvar popupEdit = document.querySelector('.popup_type_edit');\nvar popupImage = document.querySelector('.popup_type_image');\nvar popupImageContent = document.querySelector('.popup__image');\nvar popupCaption = document.querySelector('.popup__caption');\nvar profileEditButton = document.querySelector('.profile__edit-button');\nvar profileAddButton = document.querySelector('.profile__add-button');\nvar editFormElement = document.forms['edit-profile'];\nvar nameInput = editFormElement.querySelector('.popup__input_type_name');\nvar jobInput = editFormElement.querySelector('.popup__input_type_description');\nvar profileName = document.querySelector('.profile__title');\nvar profileJob = document.querySelector('.profile__description');\nvar cardFormElement = document.forms['new-place'];\nvar cardInputName = cardFormElement.querySelector('.popup__input_type_card-name');\nvar cardInputImage = cardFormElement.querySelector('.popup__input_type_url');\nvar avatarEditButton = document.querySelector('.profile__avatar-edit-button');\nvar avatarPopup = document.querySelector('.popup_type_avatar');\nvar avatarPopupCloseButton = avatarPopup.querySelector('.popup__close');\nvar avatarFormElement = document.forms['avatar-form'];\nvar avatarInput = avatarFormElement.querySelector('.popup__input_type_avatar');\nvar profileAvatar = document.querySelector('.profile__image');\nvar cardSubmittedSuccessfully = false;\navatarPopupCloseButton.addEventListener('click', function () {\n  return (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.closePopup)(avatarPopup);\n});\navatarEditButton.addEventListener('click', function () {\n  return (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.openPopup)(avatarPopup);\n});\navatarPopup.addEventListener('mousedown', function (evt) {\n  if (evt.target === evt.currentTarget) (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.closePopup)(avatarPopup);\n});\nfunction handleFormSubmitAvatar(evt) {\n  evt.preventDefault();\n  var newAvatarUrl = avatarInput.value;\n  (0,_components_api_js__WEBPACK_IMPORTED_MODULE_4__.updateAvatar)(newAvatarUrl).then(function (res) {\n    profileAvatar.style.backgroundImage = \"url(\".concat(res.avatar, \")\");\n    avatarFormElement.reset();\n    (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.closePopup)(avatarPopup);\n  }).catch(function (err) {\n    return console.log('Ошибка при обновлении аватара:', err);\n  });\n}\navatarFormElement.addEventListener('submit', handleFormSubmitAvatar);\nfunction handleOpenImage(item) {\n  popupImageContent.src = item.link;\n  popupImageContent.alt = \"\\u0418\\u0437\\u043E\\u0431\\u0440\\u0430\\u0436\\u0435\\u043D\\u0438\\u0435 \\u043C\\u0435\\u0441\\u0442\\u0430: \".concat(item.name);\n  popupCaption.textContent = item.name;\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.openPopup)(popupImage);\n}\nvar currentUserId = '';\n(0,_components_api_js__WEBPACK_IMPORTED_MODULE_4__.getCurrentUser)().then(function (user) {\n  currentUserId = user._id;\n  (0,_components_api_js__WEBPACK_IMPORTED_MODULE_4__.getInitialCards)().then(function (cards) {\n    cards.forEach(function (item) {\n      var cardElement = (0,_components_card_js__WEBPACK_IMPORTED_MODULE_1__.createCard)(item, removeCardHandler, likeHandler, handleOpenImage, currentUserId);\n      cardsList.append(cardElement);\n    });\n  }).catch(function (err) {\n    return console.log(err);\n  });\n}).catch(function (err) {\n  return console.log('Ошибка при получении данных пользователя', err);\n});\n(0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.setClosePopupListeners)();\nprofileEditButton.addEventListener('click', function () {\n  nameInput.value = profileName.textContent;\n  jobInput.value = profileJob.textContent;\n  (0,_components_validation_js__WEBPACK_IMPORTED_MODULE_3__.clearValidation)(editFormElement, validationConfig);\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.openPopup)(popupEdit);\n});\nprofileAddButton.addEventListener('click', function () {\n  if (cardSubmittedSuccessfully) {\n    cardFormElement.reset();\n    (0,_components_validation_js__WEBPACK_IMPORTED_MODULE_3__.clearValidation)(cardFormElement, validationConfig);\n    cardSubmittedSuccessfully = false;\n  }\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.openPopup)(popupNewCard);\n});\nfunction handleFormSubmitCard(evt) {\n  evt.preventDefault();\n  var titleValue = cardInputName.value;\n  var urlValue = cardInputImage.value;\n  (0,_components_api_js__WEBPACK_IMPORTED_MODULE_4__.addCard)(titleValue, urlValue).then(function (newCard) {\n    var cardElement = (0,_components_card_js__WEBPACK_IMPORTED_MODULE_1__.createCard)(newCard, removeCardHandler, likeHandler, handleOpenImage, currentUserId);\n    cardsList.prepend(cardElement);\n    cardSubmittedSuccessfully = true;\n    cardFormElement.reset();\n    (0,_components_validation_js__WEBPACK_IMPORTED_MODULE_3__.clearValidation)(cardFormElement, validationConfig);\n    (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.closePopup)(popupNewCard);\n  }).catch(function (err) {\n    return console.log(err);\n  });\n}\ncardFormElement.addEventListener('submit', handleFormSubmitCard);\nfunction handleFormSubmitProfile(evt) {\n  evt.preventDefault();\n  var nameValue = nameInput.value;\n  var jobValue = jobInput.value;\n  (0,_components_api_js__WEBPACK_IMPORTED_MODULE_4__.updateProfile)(nameValue, jobValue).then(function (res) {\n    profileName.textContent = res.name;\n    profileJob.textContent = res.about;\n    (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.closePopup)(popupEdit);\n  }).catch(function (err) {\n    return console.log(err);\n  });\n}\neditFormElement.addEventListener('submit', handleFormSubmitProfile);\nfunction likeHandler(cardId, isLiked, updateLikeUI) {\n  var action = isLiked ? _components_api_js__WEBPACK_IMPORTED_MODULE_4__.unlikeCard : _components_api_js__WEBPACK_IMPORTED_MODULE_4__.likeCard;\n  action(cardId).then(function (updatedCard) {\n    return updateLikeUI(updatedCard.likes);\n  }).catch(function (err) {\n    return console.log(err);\n  });\n}\nfunction removeCardHandler(cardId, cardElement) {\n  (0,_components_api_js__WEBPACK_IMPORTED_MODULE_4__.deleteCard)(cardId).then(function () {\n    return cardElement.remove();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n}\n(0,_components_validation_js__WEBPACK_IMPORTED_MODULE_3__.enableValidation)(validationConfig);\n\n//# sourceURL=webpack://mesto-project-ff/./src/index.js?");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/pages/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;