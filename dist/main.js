/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ (() => {

eval("function startGame() {\n    let playerName = getInputValue('playername');\n    logPlayer(playerName);\n    postScores(80, playerName);\n    postScores(-5, playerName);\n}\nfunction logPlayer(name = 'MultiMath Player') {\n    console.log(`New game starting for player: ${name}`);\n}\nfunction getInputValue(elementId) {\n    const inputElement = document.getElementById(elementId);\n    if (inputElement.value === '') {\n        return undefined;\n    }\n    else {\n        return inputElement.value;\n    }\n}\nfunction postScores(score, playerName = 'MultiMath Player') {\n    let logger;\n    if (score < 0) {\n        logger = logError;\n    }\n    else {\n        logger = logMessage;\n    }\n    const scoreElement = document.querySelector('#postedScores');\n    scoreElement.innerHTML = `${score} - ${playerName}`;\n    logger(`Score: ${score}`);\n}\ndocument.getElementById('startGame').addEventListener('click', startGame);\nconst logMessage = (message) => console.log(message);\nfunction logError(err) {\n    console.log(err);\n}\n//# sourceMappingURL=app.js.map\n\n//# sourceURL=webpack://multimath/./js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/app.js"]();
/******/ 	
/******/ })()
;