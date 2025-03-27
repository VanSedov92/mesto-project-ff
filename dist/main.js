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

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addCards: () => (/* binding */ addCards),\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   handleOpenImage: () => (/* binding */ handleOpenImage),\n/* harmony export */   likeActive: () => (/* binding */ likeActive),\n/* harmony export */   removeCard: () => (/* binding */ removeCard)\n/* harmony export */ });\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ \"./src/components/modal.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n\n\nvar cardTemplate = document.querySelector('#card-template').content.querySelector('.places__item');\nvar popupImage = document.querySelector('.popup_type_image');\nvar popupImageContent = document.querySelector('.popup__image');\nvar popupCaption = document.querySelector('.popup__caption');\nfunction createCard(item, removeCard, likeActive, handleOpenImage) {\n  var cardsItem = cardTemplate.cloneNode(true);\n  var cardImage = cardsItem.querySelector('.card__image');\n  cardImage.src = item.link;\n  cardImage.alt = \"\\u0418\\u0437\\u043E\\u0431\\u0440\\u0430\\u0436\\u0435\\u043D\\u0438\\u0435 \\u043C\\u0435\\u0441\\u0442\\u0430: \".concat(item.name);\n  cardsItem.querySelector('.card__title').textContent = item.name;\n  cardImage.addEventListener('click', function () {\n    return handleOpenImage(item);\n  });\n  cardsItem.querySelector('.card__delete-button').addEventListener(\"click\", function () {\n    return removeCard(cardsItem);\n  });\n  cardsItem.querySelector('.card__like-button').addEventListener('click', function (evt) {\n    return likeActive(evt.target);\n  });\n  return cardsItem;\n}\nfunction handleOpenImage(item) {\n  popupImageContent.src = item.link;\n  popupImageContent.alt = \"\\u0418\\u0437\\u043E\\u0431\\u0440\\u0430\\u0436\\u0435\\u043D\\u0438\\u0435 \\u043C\\u0435\\u0441\\u0442\\u0430: \".concat(item.name);\n  popupCaption.textContent = item.name;\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.openPopup)(popupImage);\n}\nfunction likeActive(button) {\n  button.classList.toggle('card__like-button_is-active');\n}\nfunction removeCard(cardsItem) {\n  cardsItem.remove();\n}\nfunction addCards(initialCards) {\n  initialCards.forEach(function (item) {\n    var cardsItem = createCard(item, removeCard, likeActive, handleOpenImage);\n    _index_js__WEBPACK_IMPORTED_MODULE_1__.cardsList.append(cardsItem);\n  });\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/card.js?");

/***/ }),

/***/ "./src/components/cards.js":
/*!*********************************!*\
  !*** ./src/components/cards.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialCards: () => (/* binding */ initialCards)\n/* harmony export */ });\nvar initialCards = [{\n  name: \"Архыз\",\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'\n}, {\n  name: \"Челябинская область\",\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'\n}, {\n  name: \"Иваново\",\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'\n}, {\n  name: \"Камчатка\",\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'\n}, {\n  name: \"Холмогорский район\",\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'\n}, {\n  name: \"Байкал\",\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'\n}];\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/cards.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closePopup: () => (/* binding */ closePopup),\n/* harmony export */   closePopupEsc: () => (/* binding */ closePopupEsc),\n/* harmony export */   openPopup: () => (/* binding */ openPopup),\n/* harmony export */   popupListeners: () => (/* binding */ popupListeners)\n/* harmony export */ });\nfunction openPopup(popup) {\n  popup.classList.add('popup_is-animated');\n  setTimeout(function () {\n    popup.classList.add('popup_is-opened');\n  }, 60);\n  document.addEventListener('keydown', closePopupEsc);\n}\nfunction closePopup(popup) {\n  popup.classList.remove('popup_is-opened');\n  document.removeEventListener('keydown', closePopupEsc);\n}\nfunction closePopupEsc(evt) {\n  if (evt.key === 'Escape') {\n    var openedPopup = document.querySelector('.popup_is-opened');\n    if (openedPopup) {\n      closePopup(openedPopup);\n    }\n  }\n}\nfunction popupListeners() {\n  var popupCloseButtons = document.querySelectorAll('.popup__close');\n  popupCloseButtons.forEach(function (button) {\n    button.addEventListener('click', function (evt) {\n      var popup = evt.target.closest('.popup');\n      closePopup(popup);\n    });\n  });\n  document.addEventListener('click', function (evt) {\n    var popupCloseOverlay = evt.target.classList.contains('popup');\n    if (popupCloseOverlay) {\n      closePopup(evt.target);\n    }\n  });\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/modal.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cardsList: () => (/* binding */ cardsList)\n/* harmony export */ });\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _components_cards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cards.js */ \"./src/components/cards.js\");\n/* harmony import */ var _components_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/card.js */ \"./src/components/card.js\");\n/* harmony import */ var _components_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modal.js */ \"./src/components/modal.js\");\n\n\n\n\nvar cardsList = document.querySelector('.places__list');\nvar popupNewCard = document.querySelector('.popup_type_new-card');\nvar popupEdit = document.querySelector('.popup_type_edit');\nvar profileEditButton = document.querySelector('.profile__edit-button');\nvar profileAddButton = document.querySelector('.profile__add-button');\nvar cardFormElement = document.forms['new-place'];\nvar cardInputName = cardFormElement.querySelector('.popup__input_type_card-name');\nvar cardInputImage = cardFormElement.querySelector('.popup__input_type_url');\nvar formElement = document.forms['edit-profile'];\nvar nameInput = formElement.querySelector('.popup__input_type_name');\nvar jobInput = formElement.querySelector('.popup__input_type_description');\nvar profileName = document.querySelector('.profile__title');\nvar profileJob = document.querySelector('.profile__description');\n(0,_components_card_js__WEBPACK_IMPORTED_MODULE_2__.addCards)(_components_cards_js__WEBPACK_IMPORTED_MODULE_1__.initialCards);\n(0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.popupListeners)();\nprofileAddButton.addEventListener('click', function () {\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.openPopup)(popupNewCard);\n});\nprofileEditButton.addEventListener('click', function () {\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.openPopup)(popupEdit);\n});\nfunction handleFormSubmitCard(evt) {\n  evt.preventDefault();\n  var titleValue = cardInputName.value;\n  var urlValue = cardInputImage.value;\n  var cardsItem = (0,_components_card_js__WEBPACK_IMPORTED_MODULE_2__.createCard)({\n    name: titleValue,\n    link: urlValue\n  }, _components_card_js__WEBPACK_IMPORTED_MODULE_2__.removeCard, _components_card_js__WEBPACK_IMPORTED_MODULE_2__.likeActive, _components_card_js__WEBPACK_IMPORTED_MODULE_2__.handleOpenImage);\n  cardsList.prepend(cardsItem);\n  cardFormElement.reset();\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.closePopup)(popupNewCard);\n}\ncardFormElement.addEventListener('submit', handleFormSubmitCard);\nfunction handleFormSubmit(evt) {\n  evt.preventDefault();\n  var nameValue = nameInput.value;\n  var jobValue = jobInput.value;\n  profileName.textContent = nameValue;\n  profileJob.textContent = jobValue;\n  formElement.reset();\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.closePopup)(popupEdit);\n}\nformElement.addEventListener('submit', handleFormSubmit);\n\n//# sourceURL=webpack://mesto-project-ff/./src/index.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;