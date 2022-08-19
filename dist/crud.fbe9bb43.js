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

/***/ "./src/crud.js":
/*!*********************!*\
  !*** ./src/crud.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cleanAll\": () => (/* binding */ cleanAll),\n/* harmony export */   \"default\": () => (/* binding */ List),\n/* harmony export */   \"editTask\": () => (/* binding */ editTask),\n/* harmony export */   \"remove\": () => (/* binding */ remove),\n/* harmony export */   \"updateTask\": () => (/* binding */ updateTask)\n/* harmony export */ });\nclass List {\n  constructor(description, index) {\n    this.description = description;\n    this.completed = false;\n    this.index = index;\n  }\n\n  addToList() {\n    const task = JSON.parse(localStorage.getItem('tasks')) || [];\n    const listArr = {\n      description: this.description,\n      completed: this.completed,\n      index: this.index,\n    };\n\n    task.push(listArr);\n    localStorage.setItem('tasks', JSON.stringify(task));\n  }\n}\n\nconst remove = (index) => {\n  const task = JSON.parse(localStorage.getItem('tasks')) || [];\n  const newTasks = task.filter((item) => item.index !== index);\n  newTasks.map((item, index) => {\n    item.index = index + 1;\n    return item;\n  });\n  localStorage.setItem('tasks', JSON.stringify(newTasks));\n  document.location.reload();\n};\n\nconst updateTask = (index, newInput) => {\n  const task = JSON.parse(localStorage.getItem('tasks')) || [];\n  const newTasks = task.filter((item) => item.index !== index);\n\n  const newTask = new List(newInput.value, index);\n  newTasks.splice(index - 1, 0, { ...newTask });\n  localStorage.setItem('tasks', JSON.stringify(newTasks));\n  document.location.reload();\n};\n\nconst cleanAll = () => {\n  const task = JSON.parse(localStorage.getItem('tasks')) || [];\n  let taskArr = task.filter((item) => item.completed !== true);\n  taskArr = taskArr.map((item, index) => {\n    item.index = index + 1;\n    return item;\n  });\n  localStorage.setItem('tasks', JSON.stringify(taskArr));\n  document.location.reload();\n};\n\nconst editTask = (index) => {\n  const task = JSON.parse(localStorage.getItem('tasks')) || [];\n  const taskArr = task[index - 1];\n  const element = document.getElementById(index);\n  element.style.backgroundColor = 'rgba(0, 0, 255, 0.1)';\n  element.innerHTML = '';\n  const newInput = document.createElement('input');\n  newInput.classList.add('newInput');\n  newInput.type = 'text';\n  newInput.value = taskArr.description;\n\n  newInput.addEventListener('focusout', () => {\n    updateTask(index, newInput);\n  });\n\n  const removIcon = document.createElement('span');\n  removIcon.classList.add('material-symbols-outlined');\n  removIcon.textContent = 'delete';\n  removIcon.addEventListener('click', () => {\n    remove(index);\n    document.location.reload();\n  });\n\n  element.append(newInput, removIcon);\n};\n\n\n\n\n//# sourceURL=webpack://webpack-setup/./src/crud.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/crud.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;