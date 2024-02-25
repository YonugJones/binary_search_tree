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

/***/ "./src/bst.js":
/*!********************!*\
  !*** ./src/bst.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tree)\n/* harmony export */ });\n/* harmony import */ var _nodeClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodeClass */ \"./src/nodeClass.js\");\n/* eslint-disable no-param-reassign */\n\nclass Tree {\n  constructor(array) {\n    const sortedUniqueArray = Tree.sortAndRemoveDuplicates(array);\n    this.root = this.buildTree(sortedUniqueArray);\n  }\n  static sortAndRemoveDuplicates(array) {\n    return Array.from(new Set(array)).sort((a, b) => a - b);\n  }\n  buildTree(array) {\n    let start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n    let end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.length - 1;\n    if (start > end) return null;\n    const mid = Math.floor((start + end) / 2);\n    const root = new _nodeClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"](array[mid]);\n    root.left = this.buildTree(array, start, mid - 1);\n    root.right = this.buildTree(array, mid + 1, end);\n    return root;\n  }\n  insert(value) {\n    let node = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;\n    if (node === null) {\n      return new _nodeClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"](value);\n    }\n    if (value < node.value) {\n      node.left = this.insert(value, node.left);\n    } else {\n      node.right = this.insert(value, node.right);\n    }\n    return node;\n  }\n  delete(value) {\n    let node = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;\n    if (node === null) {\n      return null;\n    }\n    if (value < node.value) {\n      node.left = this.delete(value, node.left);\n    } else if (value > node.value) {\n      node.right = this.delete(value, node.right);\n    } else {\n      if (node.left === null) {\n        return node.right;\n      }\n      if (node.right === null) {\n        return node.left;\n      }\n      node.value = this.minValue(node.right);\n      node.right = this.delete(node.value, node.right);\n    }\n    return node;\n  }\n  static minValue(node) {\n    let minValue = node.value;\n    while (node.left !== null) {\n      minValue = node.left.value;\n      node = node.left;\n    }\n    return minValue;\n  }\n  find(value) {\n    let node = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;\n    if (node === null || node.value === value) {\n      return node;\n    }\n    if (value < node.value) return this.find(value, node.left);\n    return this.find(value, node.right);\n  }\n\n  // left node, root node, right node\n  inOrder() {\n    let callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n    let currentNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;\n    const result = [];\n    const traverse = node => {\n      if (node) {\n        traverse(node.left);\n        if (!callback) {\n          result.push(node.value);\n        } else {\n          callback(node.value);\n        }\n        traverse(node.right);\n      }\n    };\n    traverse(currentNode);\n    return result;\n  }\n\n  // root node, left node, right node\n  preOrder() {\n    let callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n    let currentNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;\n    const result = [];\n    const traverse = node => {\n      if (node) {\n        if (!callback) {\n          result.push(node.value);\n        } else {\n          callback(node.value);\n        }\n        traverse(node.left);\n        traverse(node.right);\n      }\n    };\n    traverse(currentNode);\n    return result;\n  }\n\n  // left node, right node, root node;\n  postOrder() {\n    let callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n    let currentNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;\n    const result = [];\n    const traverse = node => {\n      if (node) {\n        traverse(node.left);\n        traverse(node.right);\n        if (!callback) {\n          result.push(node.value);\n        } else {\n          callback(node.value);\n        }\n      }\n    };\n    traverse(currentNode);\n    return result;\n  }\n  levelOrder() {\n    let callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n    let currentNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;\n    const result = [];\n    const queue = [];\n    if (currentNode) {\n      queue.push(currentNode);\n    }\n    while (queue.length > 0) {\n      const node = queue.shift();\n      if (!callback) {\n        result.push(node.value);\n      } else {\n        callback(node.value);\n      }\n      if (node.left) {\n        queue.push(node.left);\n      }\n      if (node.right) {\n        queue.push(node.right);\n      }\n    }\n    return result;\n  }\n  height(node) {\n    if (node === null) {\n      return -1;\n    }\n    const leftHeight = this.height(node.left);\n    const rightHeight = this.height(node.right);\n    return Math.max(leftHeight, rightHeight) + 1;\n  }\n  depth(node) {\n    let currentNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;\n    let currentDepth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n    if (currentNode === null) {\n      return -1;\n    }\n    if (node === currentNode.value) {\n      return currentDepth;\n    }\n    const leftDepth = this.depth(node, currentNode.left, currentDepth + 1);\n    const rightDepth = this.depth(node, currentNode.right, currentDepth + 1);\n    if (leftDepth !== -1 || rightDepth !== -1) {\n      return Math.max(leftDepth, rightDepth);\n    }\n    return -1;\n  }\n  isBalanced() {\n    let node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;\n    if (node === null) return true;\n    const leftHeight = this.height(node.left);\n    const rightHeight = this.height(node.right);\n    if (Math.abs(leftHeight - rightHeight) > 1) return false;\n    return this.isBalanced(node.left) && this.isBalanced(node.right);\n  }\n  rebalance() {\n    const nodes = this.inOrder();\n    this.root = this.buildTree(nodes);\n    return this;\n  }\n}\n\n//# sourceURL=webpack://binary_search_tree/./src/bst.js?");

/***/ }),

/***/ "./src/driverScript.js":
/*!*****************************!*\
  !*** ./src/driverScript.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ runTests)\n/* harmony export */ });\n/* harmony import */ var _bst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bst */ \"./src/bst.js\");\n\nfunction runTests() {\n  // 1:\n  function generateRandomArray(length) {\n    const randomArray = [];\n    for (let i = 0; i < length; i++) {\n      const randomNumber = Math.floor(Math.random() * 100 + 1);\n      randomArray.push(randomNumber);\n    }\n    return randomArray;\n  }\n  const tree = new _bst__WEBPACK_IMPORTED_MODULE_0__[\"default\"](generateRandomArray(16));\n\n  // 2:\n  tree.isBalanced();\n\n  // 3:\n  console.log(tree.levelOrder());\n  console.log(tree.preOrder());\n  console.log(tree.postOrder());\n  console.log(tree.inOrder());\n\n  // 4:\n  tree.insert(Math.random() * 100 + 1);\n  tree.insert(Math.random() * 100 + 1);\n  tree.insert(Math.random() * 100 + 1);\n  tree.insert(Math.random() * 100 + 1);\n\n  // 5:\n  console.log(tree.isBalanced());\n\n  // 6:\n  tree.rebalance();\n\n  // 7:\n  console.log(tree.isBalanced());\n\n  // 8:\n  console.log(tree.levelOrder());\n  console.log(tree.preOrder());\n  console.log(tree.postOrder());\n  console.log(tree.inOrder());\n}\n;\n\n//# sourceURL=webpack://binary_search_tree/./src/driverScript.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _driverScript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./driverScript */ \"./src/driverScript.js\");\n\n(0,_driverScript__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://binary_search_tree/./src/index.js?");

/***/ }),

/***/ "./src/nodeClass.js":
/*!**************************!*\
  !*** ./src/nodeClass.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Node)\n/* harmony export */ });\nclass Node {\n  constructor(value) {\n    this.value = value;\n    this.left = null;\n    this.right = null;\n  }\n}\n\n//# sourceURL=webpack://binary_search_tree/./src/nodeClass.js?");

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