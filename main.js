/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/pubsub-js/src/pubsub.js":
/*!**********************************************!*\
  !*** ./node_modules/pubsub-js/src/pubsub.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk
 * License: MIT - http://mrgnrdrck.mit-license.org
 *
 * https://github.com/mroderick/PubSubJS
 */

(function (root, factory) {
  'use strict';

  var PubSub = {};
  if (root.PubSub) {
    PubSub = root.PubSub;
    console.warn("PubSub already loaded, using existing version");
  } else {
    root.PubSub = PubSub;
    factory(PubSub);
  }
  // CommonJS and Node.js module support
  if (true) {
    if (module !== undefined && module.exports) {
      exports = module.exports = PubSub; // Node.js specific `module.exports`
    }
    exports.PubSub = PubSub; // CommonJS module 1.1.1 spec
    module.exports = exports = PubSub; // CommonJS
  }
  // AMD support
  /* eslint-disable no-undef */else {}
})(typeof window === 'object' && window || this, function (PubSub) {
  'use strict';

  var messages = {},
    lastUid = -1,
    ALL_SUBSCRIBING_MSG = '*';
  function hasKeys(obj) {
    var key;
    for (key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Returns a function that throws the passed exception, for use as argument for setTimeout
   * @alias throwException
   * @function
   * @param { Object } ex An Error object
   */
  function throwException(ex) {
    return function reThrowException() {
      throw ex;
    };
  }
  function callSubscriberWithDelayedExceptions(subscriber, message, data) {
    try {
      subscriber(message, data);
    } catch (ex) {
      setTimeout(throwException(ex), 0);
    }
  }
  function callSubscriberWithImmediateExceptions(subscriber, message, data) {
    subscriber(message, data);
  }
  function deliverMessage(originalMessage, matchedMessage, data, immediateExceptions) {
    var subscribers = messages[matchedMessage],
      callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,
      s;
    if (!Object.prototype.hasOwnProperty.call(messages, matchedMessage)) {
      return;
    }
    for (s in subscribers) {
      if (Object.prototype.hasOwnProperty.call(subscribers, s)) {
        callSubscriber(subscribers[s], originalMessage, data);
      }
    }
  }
  function createDeliveryFunction(message, data, immediateExceptions) {
    return function deliverNamespaced() {
      var topic = String(message),
        position = topic.lastIndexOf('.');

      // deliver the message as it is now
      deliverMessage(message, message, data, immediateExceptions);

      // trim the hierarchy and deliver message to each level
      while (position !== -1) {
        topic = topic.substr(0, position);
        position = topic.lastIndexOf('.');
        deliverMessage(message, topic, data, immediateExceptions);
      }
      deliverMessage(message, ALL_SUBSCRIBING_MSG, data, immediateExceptions);
    };
  }
  function hasDirectSubscribersFor(message) {
    var topic = String(message),
      found = Boolean(Object.prototype.hasOwnProperty.call(messages, topic) && hasKeys(messages[topic]));
    return found;
  }
  function messageHasSubscribers(message) {
    var topic = String(message),
      found = hasDirectSubscribersFor(topic) || hasDirectSubscribersFor(ALL_SUBSCRIBING_MSG),
      position = topic.lastIndexOf('.');
    while (!found && position !== -1) {
      topic = topic.substr(0, position);
      position = topic.lastIndexOf('.');
      found = hasDirectSubscribersFor(topic);
    }
    return found;
  }
  function publish(message, data, sync, immediateExceptions) {
    message = typeof message === 'symbol' ? message.toString() : message;
    var deliver = createDeliveryFunction(message, data, immediateExceptions),
      hasSubscribers = messageHasSubscribers(message);
    if (!hasSubscribers) {
      return false;
    }
    if (sync === true) {
      deliver();
    } else {
      setTimeout(deliver, 0);
    }
    return true;
  }

  /**
   * Publishes the message, passing the data to it's subscribers
   * @function
   * @alias publish
   * @param { String } message The message to publish
   * @param {} data The data to pass to subscribers
   * @return { Boolean }
   */
  PubSub.publish = function (message, data) {
    return publish(message, data, false, PubSub.immediateExceptions);
  };

  /**
   * Publishes the message synchronously, passing the data to it's subscribers
   * @function
   * @alias publishSync
   * @param { String } message The message to publish
   * @param {} data The data to pass to subscribers
   * @return { Boolean }
   */
  PubSub.publishSync = function (message, data) {
    return publish(message, data, true, PubSub.immediateExceptions);
  };

  /**
   * Subscribes the passed function to the passed message. Every returned token is unique and should be stored if you need to unsubscribe
   * @function
   * @alias subscribe
   * @param { String } message The message to subscribe to
   * @param { Function } func The function to call when a new message is published
   * @return { String }
   */
  PubSub.subscribe = function (message, func) {
    if (typeof func !== 'function') {
      return false;
    }
    message = typeof message === 'symbol' ? message.toString() : message;

    // message is not registered yet
    if (!Object.prototype.hasOwnProperty.call(messages, message)) {
      messages[message] = {};
    }

    // forcing token as String, to allow for future expansions without breaking usage
    // and allow for easy use as key names for the 'messages' object
    var token = 'uid_' + String(++lastUid);
    messages[message][token] = func;

    // return token for unsubscribing
    return token;
  };
  PubSub.subscribeAll = function (func) {
    return PubSub.subscribe(ALL_SUBSCRIBING_MSG, func);
  };

  /**
   * Subscribes the passed function to the passed message once
   * @function
   * @alias subscribeOnce
   * @param { String } message The message to subscribe to
   * @param { Function } func The function to call when a new message is published
   * @return { PubSub }
   */
  PubSub.subscribeOnce = function (message, func) {
    var token = PubSub.subscribe(message, function () {
      // before func apply, unsubscribe message
      PubSub.unsubscribe(token);
      func.apply(this, arguments);
    });
    return PubSub;
  };

  /**
   * Clears all subscriptions
   * @function
   * @public
   * @alias clearAllSubscriptions
   */
  PubSub.clearAllSubscriptions = function clearAllSubscriptions() {
    messages = {};
  };

  /**
   * Clear subscriptions by the topic
   * @function
   * @public
   * @alias clearAllSubscriptions
   * @return { int }
   */
  PubSub.clearSubscriptions = function clearSubscriptions(topic) {
    var m;
    for (m in messages) {
      if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0) {
        delete messages[m];
      }
    }
  };

  /**
     Count subscriptions by the topic
   * @function
   * @public
   * @alias countSubscriptions
   * @return { Array }
  */
  PubSub.countSubscriptions = function countSubscriptions(topic) {
    var m;
    // eslint-disable-next-line no-unused-vars
    var token;
    var count = 0;
    for (m in messages) {
      if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0) {
        for (token in messages[m]) {
          count++;
        }
        break;
      }
    }
    return count;
  };

  /**
     Gets subscriptions by the topic
   * @function
   * @public
   * @alias getSubscriptions
  */
  PubSub.getSubscriptions = function getSubscriptions(topic) {
    var m;
    var list = [];
    for (m in messages) {
      if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0) {
        list.push(m);
      }
    }
    return list;
  };

  /**
   * Removes subscriptions
   *
   * - When passed a token, removes a specific subscription.
   *
  * - When passed a function, removes all subscriptions for that function
   *
  * - When passed a topic, removes all subscriptions for that topic (hierarchy)
   * @function
   * @public
   * @alias subscribeOnce
   * @param { String | Function } value A token, function or topic to unsubscribe from
   * @example // Unsubscribing with a token
   * var token = PubSub.subscribe('mytopic', myFunc);
   * PubSub.unsubscribe(token);
   * @example // Unsubscribing with a function
   * PubSub.unsubscribe(myFunc);
   * @example // Unsubscribing from a topic
   * PubSub.unsubscribe('mytopic');
   */
  PubSub.unsubscribe = function (value) {
    var descendantTopicExists = function (topic) {
        var m;
        for (m in messages) {
          if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0) {
            // a descendant of the topic exists:
            return true;
          }
        }
        return false;
      },
      isTopic = typeof value === 'string' && (Object.prototype.hasOwnProperty.call(messages, value) || descendantTopicExists(value)),
      isToken = !isTopic && typeof value === 'string',
      isFunction = typeof value === 'function',
      result = false,
      m,
      message,
      t;
    if (isTopic) {
      PubSub.clearSubscriptions(value);
      return;
    }
    for (m in messages) {
      if (Object.prototype.hasOwnProperty.call(messages, m)) {
        message = messages[m];
        if (isToken && message[value]) {
          delete message[value];
          result = value;
          // tokens are unique, so we can just stop here
          break;
        }
        if (isFunction) {
          for (t in message) {
            if (Object.prototype.hasOwnProperty.call(message, t) && message[t] === value) {
              delete message[t];
              result = true;
            }
          }
        }
      }
    }
    return result;
  };
});

/***/ }),

/***/ "./src/domManager.js":
/*!***************************!*\
  !*** ./src/domManager.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOMManager: () => (/* binding */ DOMManager)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

class DOMManager {
  constructor() {
    setUpPlayAgainButton();
  }
  populateActivePlayersBoard(player) {
    const board = player.gameboard.board;
    const boardGrid = document.createElement('div');
    boardGrid.classList.add('board-grid');
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const item = document.createElement('div');
        if (board[i][j] === 'hit') {
          item.classList = 'hit-ship';
        } else if (board[i][j] === 'attacked') {
          item.classList = 'attacked';
          const dot = document.createElement('div');
          dot.classList.add('dot');
          item.append(dot);
        } else if (board[i][j] !== null) {
          item.classList = 'ship';
        }
        item.classList.add('board-item');
        boardGrid.appendChild(item);
      }
    }
    let boardContainer = document.querySelector(player.elementQuery);
    boardContainer.innerHTML = '';
    boardContainer.append(boardGrid);
  }
  populateOpponentsBoard(player) {
    const board = player.gameboard.board;
    const boardGrid = document.createElement('div');
    boardGrid.classList.add('board-grid');
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const item = document.createElement('div');
        item.addEventListener('click', () => {
          player.gameboard.receiveAttack(i, j);
        });

        //remove else later, players shouldn't see each others boats
        if (board[i][j] === 'hit') {
          item.classList = 'hit-ship';
        } else if (board[i][j] === 'attacked') {
          item.classList = 'attacked';
          const dot = document.createElement('div');
          dot.classList.add('dot');
          item.append(dot);
        } else if (board[i][j] !== null) {
          item.classList = 'ship';
        }
        item.classList.add('board-item');
        boardGrid.appendChild(item);
      }
    }
    let boardContainer = document.querySelector(player.elementQuery);
    boardContainer.innerHTML = '';
    boardContainer.append(boardGrid);
  }
  populateBoard(firstPlayer, secondPlayer) {
    if (firstPlayer.isActive) {
      this.populateActivePlayersBoard(firstPlayer);
      this.populateOpponentsBoard(secondPlayer);
    } else {
      this.populateActivePlayersBoard(firstPlayer);
      this.populateOpponentsBoard(secondPlayer);
    }
  }
  showEndDialog(winner) {
    const endDialog = document.querySelector('.end-dialog');
    console.log('win');
    if (winner.type === 'computer') {
      document.querySelector('.end-dialog .message').textContent = 'You lose. :/';
    } else {
      document.querySelector('.end-dialog .message').textContent = 'You won, congratulations!';
    }
    endDialog.showModal();
  }
}
function setUpPlayAgainButton() {
  const playAgainButton = document.querySelector('.play-again-button');
  const NEW_GAME = 'new game';
  playAgainButton.addEventListener('click', () => {
    PubSub.publish(NEW_GAME);
    document.querySelector('.end-dialog').close();
  });
}

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);

class Gameboard {
  constructor() {
    this.board = Array.from({
      length: 10
    }, () => Array(10).fill(null));
    this.missed = [];
  }
  #isEmpty(x, y) {
    return this.board[x][y] === null;
  }
  placeShip(ship, x, y, orientation) {
    //checking if there is free space in and around the chosen area
    //case for a horizontally aligned ship
    if (orientation === 'horizontal') {
      //checking if ship is too large
      if (y + ship.length > 10) return;
      for (let i = Math.max(x - 1, 0); i <= Math.min(9, x + 1); i++) {
        for (let j = Math.max(0, y - 1); j <= Math.min(9, y + ship.length - 1); j++) {
          if (!this.#isEmpty(i, j)) return;
        }
      }

      //placing a ship
      for (let j = y; j < y + ship.length; j++) {
        this.board[x][j] = ship;
      }
    }
    //case for a vertically aligned ship
    else {
      //checking if ship is too large
      if (x + ship.length > 10) return;
      for (let j = Math.max(0, y - 1); j <= Math.min(9, y + 1); j++) {
        for (let i = Math.max(0, x - 1); i <= Math.min(9, x + ship.length - 1); i++) {
          if (!this.#isEmpty(i, j)) return;
        }
      }

      //placing a ship
      for (let i = x; i < x + ship.length; i++) {
        this.board[i][y] = ship;
      }
    }
  }
  receiveAttack(x, y) {
    if (this.board[x][y] === null) {
      this.board[x][y] = 'attacked';
    } else if (this.board[x][y] !== null && this.board[x][y] !== 'hit' && this.board[x][y] !== 'attacked') {
      this.board[x][y].hit();
      this.board[x][y] = 'hit';
      const SHIP_HIT = 'ship hit';
      pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(SHIP_HIT);
      return true;
    }
    const SHIP_MISSED = 'ship missed';
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(SHIP_MISSED);
    this.missed.push([6, 4]);
    return false;
  }
  haveAllBeenSunk() {
    return !this.board.some(row => row.some(item => item !== null && item !== 'hit' && item !== 'attacked'));
  }
}

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");


//Two types of players: real and computer player
class Player {
  constructor(name, type, elementQuery, isActive = false) {
    this.name = name;
    this.type = type;
    this.gameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard();
    this.elementQuery = elementQuery;
    this.isActive = isActive;
  }
  setAsActive() {
    this.isActive = true;
  }
  setAsOpponent() {
    this.isActive = false;
  }
}

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length) {
    this.length = length;
    this.timesHit = 0;
    this.hasBeenSunk = false;
  }
  hit() {
    this.timesHit += 1;
    if (this.timesHit === this.length) this.hasBeenSunk = true;
  }
  isSunk() {
    return this.hasBeenSunk;
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --block-dimension: min(50px, calc(4vw));
  --primary-color: #4f209b;
  --lighter-color: #7e87ff;
}

* {
  font-family: Arial, Helvetica, sans-serif;
}

/*Default styles*/
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

html,
body,
main {
  height: 100%;
  width: 100%;
}

main {
  display: flex;
}

.first-player,
.second-player {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
}

.board-grid {
  display: grid;
  grid-template-columns: repeat(10, var(--block-dimension));
  grid-template-rows: repeat(10, var(--block-dimension));
}

.board-item {
  height: var(--block-dimension);
  width: var(--block-dimension);
  border: 1px solid #000;
}

.board-item:hover {
  cursor: pointer;
  opacity: 0.8;
}

.ship {
  background-color: var(--lighter-color);
}

.hit-ship {
  position: relative;
  border: 1px solid black;
  padding-top: -4px;
}

.hit-ship::before,
.hit-ship::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: 3px;
  background-color: var(--primary-color);
}

.hit-ship::before {
  transform: rotate(45deg);
}

.hit-ship::after {
  transform: rotate(-45deg);
}

.attacked {
  display: flex;
  align-items: center;
  justify-content: center;
}

.dot {
  width: calc(var(--block-dimension) / 3);
  height: calc(var(--block-dimension) / 3);
  border-radius: 50%;
  background-color: #000;
}

.end-dialog {
  border: none;
  border-radius: 20px;
}

.end-dialog-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.end-dialog p {
  font-size: 1.5em;
}

.end-dialog button {
  background-color: var(--primary-color);
  border: none;
  border-radius: 20px;
  color: #fff;
  font-weight: bold;
  padding: 8px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,uCAAuC;EACvC,wBAAwB;EACxB,wBAAwB;AAC1B;;AAEA;EACE,yCAAyC;AAC3C;;AAEA,iBAAiB;AACjB;;;;;;;;;;;;;;EAcE,SAAS;AACX;;AAEA;;;EAGE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,yDAAyD;EACzD,sDAAsD;AACxD;;AAEA;EACE,8BAA8B;EAC9B,6BAA6B;EAC7B,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;;EAEE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,YAAY;EACZ,WAAW;EACX,WAAW;EACX,sCAAsC;AACxC;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,uCAAuC;EACvC,wCAAwC;EACxC,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,sCAAsC;EACtC,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,iBAAiB;EACjB,YAAY;AACd","sourcesContent":[":root {\n  --block-dimension: min(50px, calc(4vw));\n  --primary-color: #4f209b;\n  --lighter-color: #7e87ff;\n}\n\n* {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n/*Default styles*/\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nul[class],\nol[class],\nli,\nfigure,\nfigcaption,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\nhtml,\nbody,\nmain {\n  height: 100%;\n  width: 100%;\n}\n\nmain {\n  display: flex;\n}\n\n.first-player,\n.second-player {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 50%;\n}\n\n.board-grid {\n  display: grid;\n  grid-template-columns: repeat(10, var(--block-dimension));\n  grid-template-rows: repeat(10, var(--block-dimension));\n}\n\n.board-item {\n  height: var(--block-dimension);\n  width: var(--block-dimension);\n  border: 1px solid #000;\n}\n\n.board-item:hover {\n  cursor: pointer;\n  opacity: 0.8;\n}\n\n.ship {\n  background-color: var(--lighter-color);\n}\n\n.hit-ship {\n  position: relative;\n  border: 1px solid black;\n  padding-top: -4px;\n}\n\n.hit-ship::before,\n.hit-ship::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 100%;\n  height: 3px;\n  background-color: var(--primary-color);\n}\n\n.hit-ship::before {\n  transform: rotate(45deg);\n}\n\n.hit-ship::after {\n  transform: rotate(-45deg);\n}\n\n.attacked {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.dot {\n  width: calc(var(--block-dimension) / 3);\n  height: calc(var(--block-dimension) / 3);\n  border-radius: 50%;\n  background-color: #000;\n}\n\n.end-dialog {\n  border: none;\n  border-radius: 20px;\n}\n\n.end-dialog-container {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.end-dialog p {\n  font-size: 1.5em;\n}\n\n.end-dialog button {\n  background-color: var(--primary-color);\n  border: none;\n  border-radius: 20px;\n  color: #fff;\n  font-weight: bold;\n  padding: 8px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./src/gameManager.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManager.js */ "./src/domManager.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_3__);




let dom = new _domManager_js__WEBPACK_IMPORTED_MODULE_0__.DOMManager();
let firstPlayer;
let secondPlayer;
function startGameWithBot() {
  firstPlayer = new _player_js__WEBPACK_IMPORTED_MODULE_1__.Player('Player 1', 'real', '.first-player .board-grid-container', true);
  secondPlayer = new _player_js__WEBPACK_IMPORTED_MODULE_1__.Player('Player 2', 'computer', '.second-player .board-grid-container');

  //code for manual ship creation should be removed after enabling user to place ships by himself
  firstPlayer.gameboard.placeShip(new _ship_js__WEBPACK_IMPORTED_MODULE_2__.Ship(1), 7, 2, 'horizontal');
  firstPlayer.gameboard.placeShip(new _ship_js__WEBPACK_IMPORTED_MODULE_2__.Ship(2), 0, 2, 'horizontal');
  firstPlayer.gameboard.placeShip(new _ship_js__WEBPACK_IMPORTED_MODULE_2__.Ship(3), 4, 2, 'horizontal');
  firstPlayer.gameboard.placeShip(new _ship_js__WEBPACK_IMPORTED_MODULE_2__.Ship(4), 3, 8, 'vertical');
  firstPlayer.gameboard.placeShip(new _ship_js__WEBPACK_IMPORTED_MODULE_2__.Ship(5), 5, 6, 'vertical');
  secondPlayer.gameboard.placeShip(new _ship_js__WEBPACK_IMPORTED_MODULE_2__.Ship(1), 7, 2, 'horizontal');
  secondPlayer.gameboard.placeShip(new _ship_js__WEBPACK_IMPORTED_MODULE_2__.Ship(2), 0, 2, 'horizontal');
  secondPlayer.gameboard.placeShip(new _ship_js__WEBPACK_IMPORTED_MODULE_2__.Ship(3), 2, 8, 'vertical');
  secondPlayer.gameboard.placeShip(new _ship_js__WEBPACK_IMPORTED_MODULE_2__.Ship(4), 6, 4, 'horizontal');
  secondPlayer.gameboard.placeShip(new _ship_js__WEBPACK_IMPORTED_MODULE_2__.Ship(5), 5, 0, 'vertical');
  dom.populateBoard(firstPlayer, secondPlayer);
}
function makeBotMove() {
  const x = Math.floor(Math.random() * 10);
  const y = Math.floor(Math.random() * 10);
  while (firstPlayer.gameboard.board[x][y] === null || firstPlayer.gameboard.board[x][y] instanceof _ship_js__WEBPACK_IMPORTED_MODULE_2__.Ship) {
    firstPlayer.gameboard.receiveAttack(x, y);
  }
}
function checkForWinner() {
  if (firstPlayer.gameboard.haveAllBeenSunk()) dom.showEndDialog(secondPlayer);else if (secondPlayer.gameboard.haveAllBeenSunk()) dom.showEndDialog(firstPlayer);
}
startGameWithBot();
const SHIP_HIT = 'ship hit';
pubsub_js__WEBPACK_IMPORTED_MODULE_3___default().subscribe(SHIP_HIT, () => {
  if (secondPlayer.isActive === true) {
    makeBotMove();
  }
  dom.populateBoard(firstPlayer, secondPlayer);
  checkForWinner();
});
const SHIP_MISSED = 'ship missed';
pubsub_js__WEBPACK_IMPORTED_MODULE_3___default().subscribe(SHIP_MISSED, () => {
  if (firstPlayer.isActive) {
    firstPlayer.isActive = false;
    secondPlayer.isActive = true;
    makeBotMove();
  } else {
    firstPlayer.isActive = true;
    secondPlayer.isActive = false;
  }
  dom.populateBoard(firstPlayer, secondPlayer);
  checkForWinner();
});
const NEW_GAME = 'new game';
pubsub_js__WEBPACK_IMPORTED_MODULE_3___default().subscribe(NEW_GAME, () => startGameWithBot());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxDQUFDbEIsU0FBUyxDQUFDd0MsU0FBUyxDQUFDLElBQUlnQiwwQ0FBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDO0VBQzlEdEMsV0FBVyxDQUFDbEIsU0FBUyxDQUFDd0MsU0FBUyxDQUFDLElBQUlnQiwwQ0FBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDO0VBRTlEckMsWUFBWSxDQUFDbkIsU0FBUyxDQUFDd0MsU0FBUyxDQUFDLElBQUlnQiwwQ0FBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsWUFBWSxDQUFDO0VBQ2pFckMsWUFBWSxDQUFDbkIsU0FBUyxDQUFDd0MsU0FBUyxDQUFDLElBQUlnQiwwQ0FBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsWUFBWSxDQUFDO0VBQ2pFckMsWUFBWSxDQUFDbkIsU0FBUyxDQUFDd0MsU0FBUyxDQUFDLElBQUlnQiwwQ0FBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDO0VBQy9EckMsWUFBWSxDQUFDbkIsU0FBUyxDQUFDd0MsU0FBUyxDQUFDLElBQUlnQiwwQ0FBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsWUFBWSxDQUFDO0VBQ2pFckMsWUFBWSxDQUFDbkIsU0FBUyxDQUFDd0MsU0FBUyxDQUFDLElBQUlnQiwwQ0FBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDO0VBRS9ESSxHQUFHLENBQUMzQyxhQUFhLENBQUNDLFdBQVcsRUFBRUMsWUFBWSxDQUFDO0FBQzlDO0FBRUEsU0FBUzJDLFdBQVdBLENBQUEsRUFBRztFQUNyQixNQUFNeEIsQ0FBQyxHQUFHSyxJQUFJLENBQUNvQixLQUFLLENBQUNwQixJQUFJLENBQUNxQixNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztFQUN4QyxNQUFNekIsQ0FBQyxHQUFHSSxJQUFJLENBQUNvQixLQUFLLENBQUNwQixJQUFJLENBQUNxQixNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztFQUV4QyxPQUNFOUMsV0FBVyxDQUFDbEIsU0FBUyxDQUFDRCxLQUFLLENBQUN1QyxDQUFDLENBQUMsQ0FBQ0MsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUMxQ3JCLFdBQVcsQ0FBQ2xCLFNBQVMsQ0FBQ0QsS0FBSyxDQUFDdUMsQ0FBQyxDQUFDLENBQUNDLENBQUMsQ0FBQyxZQUFZaUIsMENBQUksRUFDakQ7SUFDQXRDLFdBQVcsQ0FBQ2xCLFNBQVMsQ0FBQ2dCLGFBQWEsQ0FBQ3NCLENBQUMsRUFBRUMsQ0FBQyxDQUFDO0VBQzNDO0FBQ0Y7QUFFQSxTQUFTMEIsY0FBY0EsQ0FBQSxFQUFHO0VBQ3hCLElBQUkvQyxXQUFXLENBQUNsQixTQUFTLENBQUNpRCxlQUFlLENBQUMsQ0FBQyxFQUFFVyxHQUFHLENBQUN2QyxhQUFhLENBQUNGLFlBQVksQ0FBQyxDQUFDLEtBQ3hFLElBQUlBLFlBQVksQ0FBQ25CLFNBQVMsQ0FBQ2lELGVBQWUsQ0FBQyxDQUFDLEVBQy9DVyxHQUFHLENBQUN2QyxhQUFhLENBQUNILFdBQVcsQ0FBQztBQUNsQztBQUVBMkMsZ0JBQWdCLENBQUMsQ0FBQztBQUVsQixNQUFNZCxRQUFRLEdBQUcsVUFBVTtBQUUzQjNILDBEQUFnQixDQUFDMkgsUUFBUSxFQUFFLE1BQU07RUFDL0IsSUFBSTVCLFlBQVksQ0FBQ0MsUUFBUSxLQUFLLElBQUksRUFBRTtJQUNsQzBDLFdBQVcsQ0FBQyxDQUFDO0VBQ2Y7RUFFQUYsR0FBRyxDQUFDM0MsYUFBYSxDQUFDQyxXQUFXLEVBQUVDLFlBQVksQ0FBQztFQUM1QzhDLGNBQWMsQ0FBQyxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUVGLE1BQU1qQixXQUFXLEdBQUcsYUFBYTtBQUNqQzVILDBEQUFnQixDQUFDNEgsV0FBVyxFQUFFLE1BQU07RUFDbEMsSUFBSTlCLFdBQVcsQ0FBQ0UsUUFBUSxFQUFFO0lBQ3hCRixXQUFXLENBQUNFLFFBQVEsR0FBRyxLQUFLO0lBQzVCRCxZQUFZLENBQUNDLFFBQVEsR0FBRyxJQUFJO0lBRTVCMEMsV0FBVyxDQUFDLENBQUM7RUFDZixDQUFDLE1BQU07SUFDTDVDLFdBQVcsQ0FBQ0UsUUFBUSxHQUFHLElBQUk7SUFDM0JELFlBQVksQ0FBQ0MsUUFBUSxHQUFHLEtBQUs7RUFDL0I7RUFFQXdDLEdBQUcsQ0FBQzNDLGFBQWEsQ0FBQ0MsV0FBVyxFQUFFQyxZQUFZLENBQUM7RUFDNUM4QyxjQUFjLENBQUMsQ0FBQztBQUNsQixDQUFDLENBQUM7QUFFRixNQUFNcEMsUUFBUSxHQUFHLFVBQVU7QUFDM0J6RywwREFBZ0IsQ0FBQ3lHLFFBQVEsRUFBRSxNQUFNZ0MsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9wdWJzdWItanMvc3JjL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lTWFuYWdlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAsMjAxMSwyMDEyLDIwMTMsMjAxNCBNb3JnYW4gUm9kZXJpY2sgaHR0cDovL3JvZGVyaWNrLmRrXG4gKiBMaWNlbnNlOiBNSVQgLSBodHRwOi8vbXJnbnJkcmNrLm1pdC1saWNlbnNlLm9yZ1xuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tcm9kZXJpY2svUHViU3ViSlNcbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3Rvcnkpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBQdWJTdWIgPSB7fTtcblxuICAgIGlmIChyb290LlB1YlN1Yikge1xuICAgICAgICBQdWJTdWIgPSByb290LlB1YlN1YjtcbiAgICAgICAgY29uc29sZS53YXJuKFwiUHViU3ViIGFscmVhZHkgbG9hZGVkLCB1c2luZyBleGlzdGluZyB2ZXJzaW9uXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QuUHViU3ViID0gUHViU3ViO1xuICAgICAgICBmYWN0b3J5KFB1YlN1Yik7XG4gICAgfVxuICAgIC8vIENvbW1vbkpTIGFuZCBOb2RlLmpzIG1vZHVsZSBzdXBwb3J0XG4gICAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jyl7XG4gICAgICAgIGlmIChtb2R1bGUgIT09IHVuZGVmaW5lZCAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gUHViU3ViOyAvLyBOb2RlLmpzIHNwZWNpZmljIGBtb2R1bGUuZXhwb3J0c2BcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRzLlB1YlN1YiA9IFB1YlN1YjsgLy8gQ29tbW9uSlMgbW9kdWxlIDEuMS4xIHNwZWNcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gUHViU3ViOyAvLyBDb21tb25KU1xuICAgIH1cbiAgICAvLyBBTUQgc3VwcG9ydFxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4gICAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKXtcbiAgICAgICAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gUHViU3ViOyB9KTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby11bmRlZiAqL1xuICAgIH1cblxufSgoIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdyApIHx8IHRoaXMsIGZ1bmN0aW9uIChQdWJTdWIpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBtZXNzYWdlcyA9IHt9LFxuICAgICAgICBsYXN0VWlkID0gLTEsXG4gICAgICAgIEFMTF9TVUJTQ1JJQklOR19NU0cgPSAnKic7XG5cbiAgICBmdW5jdGlvbiBoYXNLZXlzKG9iail7XG4gICAgICAgIHZhciBrZXk7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gb2JqKXtcbiAgICAgICAgICAgIGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSApe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB0aHJvd3MgdGhlIHBhc3NlZCBleGNlcHRpb24sIGZvciB1c2UgYXMgYXJndW1lbnQgZm9yIHNldFRpbWVvdXRcbiAgICAgKiBAYWxpYXMgdGhyb3dFeGNlcHRpb25cbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSBleCBBbiBFcnJvciBvYmplY3RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0aHJvd0V4Y2VwdGlvbiggZXggKXtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlVGhyb3dFeGNlcHRpb24oKXtcbiAgICAgICAgICAgIHRocm93IGV4O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGxTdWJzY3JpYmVyV2l0aERlbGF5ZWRFeGNlcHRpb25zKCBzdWJzY3JpYmVyLCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyKCBtZXNzYWdlLCBkYXRhICk7XG4gICAgICAgIH0gY2F0Y2goIGV4ICl7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCB0aHJvd0V4Y2VwdGlvbiggZXggKSwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxsU3Vic2NyaWJlcldpdGhJbW1lZGlhdGVFeGNlcHRpb25zKCBzdWJzY3JpYmVyLCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHN1YnNjcmliZXIoIG1lc3NhZ2UsIGRhdGEgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxpdmVyTWVzc2FnZSggb3JpZ2luYWxNZXNzYWdlLCBtYXRjaGVkTWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICB2YXIgc3Vic2NyaWJlcnMgPSBtZXNzYWdlc1ttYXRjaGVkTWVzc2FnZV0sXG4gICAgICAgICAgICBjYWxsU3Vic2NyaWJlciA9IGltbWVkaWF0ZUV4Y2VwdGlvbnMgPyBjYWxsU3Vic2NyaWJlcldpdGhJbW1lZGlhdGVFeGNlcHRpb25zIDogY2FsbFN1YnNjcmliZXJXaXRoRGVsYXllZEV4Y2VwdGlvbnMsXG4gICAgICAgICAgICBzO1xuXG4gICAgICAgIGlmICggIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggbWVzc2FnZXMsIG1hdGNoZWRNZXNzYWdlICkgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHMgaW4gc3Vic2NyaWJlcnMpe1xuICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc3Vic2NyaWJlcnMsIHMpKXtcbiAgICAgICAgICAgICAgICBjYWxsU3Vic2NyaWJlciggc3Vic2NyaWJlcnNbc10sIG9yaWdpbmFsTWVzc2FnZSwgZGF0YSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiggbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZGVsaXZlck5hbWVzcGFjZWQoKXtcbiAgICAgICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuXG4gICAgICAgICAgICAvLyBkZWxpdmVyIHRoZSBtZXNzYWdlIGFzIGl0IGlzIG5vd1xuICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UobWVzc2FnZSwgbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyk7XG5cbiAgICAgICAgICAgIC8vIHRyaW0gdGhlIGhpZXJhcmNoeSBhbmQgZGVsaXZlciBtZXNzYWdlIHRvIGVhY2ggbGV2ZWxcbiAgICAgICAgICAgIHdoaWxlKCBwb3NpdGlvbiAhPT0gLTEgKXtcbiAgICAgICAgICAgICAgICB0b3BpYyA9IHRvcGljLnN1YnN0ciggMCwgcG9zaXRpb24gKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCcuJyk7XG4gICAgICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UoIG1lc3NhZ2UsIHRvcGljLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGl2ZXJNZXNzYWdlKG1lc3NhZ2UsIEFMTF9TVUJTQ1JJQklOR19NU0csIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhc0RpcmVjdFN1YnNjcmliZXJzRm9yKCBtZXNzYWdlICkge1xuICAgICAgICB2YXIgdG9waWMgPSBTdHJpbmcoIG1lc3NhZ2UgKSxcbiAgICAgICAgICAgIGZvdW5kID0gQm9vbGVhbihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIG1lc3NhZ2VzLCB0b3BpYyApICYmIGhhc0tleXMobWVzc2FnZXNbdG9waWNdKSk7XG5cbiAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1lc3NhZ2VIYXNTdWJzY3JpYmVycyggbWVzc2FnZSApe1xuICAgICAgICB2YXIgdG9waWMgPSBTdHJpbmcoIG1lc3NhZ2UgKSxcbiAgICAgICAgICAgIGZvdW5kID0gaGFzRGlyZWN0U3Vic2NyaWJlcnNGb3IodG9waWMpIHx8IGhhc0RpcmVjdFN1YnNjcmliZXJzRm9yKEFMTF9TVUJTQ1JJQklOR19NU0cpLFxuICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG5cbiAgICAgICAgd2hpbGUgKCAhZm91bmQgJiYgcG9zaXRpb24gIT09IC0xICl7XG4gICAgICAgICAgICB0b3BpYyA9IHRvcGljLnN1YnN0ciggMCwgcG9zaXRpb24gKTtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuICAgICAgICAgICAgZm91bmQgPSBoYXNEaXJlY3RTdWJzY3JpYmVyc0Zvcih0b3BpYyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgc3luYywgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICBtZXNzYWdlID0gKHR5cGVvZiBtZXNzYWdlID09PSAnc3ltYm9sJykgPyBtZXNzYWdlLnRvU3RyaW5nKCkgOiBtZXNzYWdlO1xuXG4gICAgICAgIHZhciBkZWxpdmVyID0gY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiggbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApLFxuICAgICAgICAgICAgaGFzU3Vic2NyaWJlcnMgPSBtZXNzYWdlSGFzU3Vic2NyaWJlcnMoIG1lc3NhZ2UgKTtcblxuICAgICAgICBpZiAoICFoYXNTdWJzY3JpYmVycyApe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBzeW5jID09PSB0cnVlICl7XG4gICAgICAgICAgICBkZWxpdmVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCBkZWxpdmVyLCAwICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHVibGlzaGVzIHRoZSBtZXNzYWdlLCBwYXNzaW5nIHRoZSBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgcHVibGlzaFxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gcHVibGlzaFxuICAgICAqIEBwYXJhbSB7fSBkYXRhIFRoZSBkYXRhIHRvIHBhc3MgdG8gc3Vic2NyaWJlcnNcbiAgICAgKiBAcmV0dXJuIHsgQm9vbGVhbiB9XG4gICAgICovXG4gICAgUHViU3ViLnB1Ymxpc2ggPSBmdW5jdGlvbiggbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICByZXR1cm4gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgZmFsc2UsIFB1YlN1Yi5pbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFB1Ymxpc2hlcyB0aGUgbWVzc2FnZSBzeW5jaHJvbm91c2x5LCBwYXNzaW5nIHRoZSBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgcHVibGlzaFN5bmNcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHB1Ymxpc2hcbiAgICAgKiBAcGFyYW0ge30gZGF0YSBUaGUgZGF0YSB0byBwYXNzIHRvIHN1YnNjcmliZXJzXG4gICAgICogQHJldHVybiB7IEJvb2xlYW4gfVxuICAgICAqL1xuICAgIFB1YlN1Yi5wdWJsaXNoU3luYyA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHJldHVybiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCB0cnVlLCBQdWJTdWIuaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRoZSBwYXNzZWQgZnVuY3Rpb24gdG8gdGhlIHBhc3NlZCBtZXNzYWdlLiBFdmVyeSByZXR1cm5lZCB0b2tlbiBpcyB1bmlxdWUgYW5kIHNob3VsZCBiZSBzdG9yZWQgaWYgeW91IG5lZWQgdG8gdW5zdWJzY3JpYmVcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBzdWJzY3JpYmUgdG9cbiAgICAgKiBAcGFyYW0geyBGdW5jdGlvbiB9IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBhIG5ldyBtZXNzYWdlIGlzIHB1Ymxpc2hlZFxuICAgICAqIEByZXR1cm4geyBTdHJpbmcgfVxuICAgICAqL1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUgPSBmdW5jdGlvbiggbWVzc2FnZSwgZnVuYyApe1xuICAgICAgICBpZiAoIHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lc3NhZ2UgPSAodHlwZW9mIG1lc3NhZ2UgPT09ICdzeW1ib2wnKSA/IG1lc3NhZ2UudG9TdHJpbmcoKSA6IG1lc3NhZ2U7XG5cbiAgICAgICAgLy8gbWVzc2FnZSBpcyBub3QgcmVnaXN0ZXJlZCB5ZXRcbiAgICAgICAgaWYgKCAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBtZXNzYWdlcywgbWVzc2FnZSApICl7XG4gICAgICAgICAgICBtZXNzYWdlc1ttZXNzYWdlXSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9yY2luZyB0b2tlbiBhcyBTdHJpbmcsIHRvIGFsbG93IGZvciBmdXR1cmUgZXhwYW5zaW9ucyB3aXRob3V0IGJyZWFraW5nIHVzYWdlXG4gICAgICAgIC8vIGFuZCBhbGxvdyBmb3IgZWFzeSB1c2UgYXMga2V5IG5hbWVzIGZvciB0aGUgJ21lc3NhZ2VzJyBvYmplY3RcbiAgICAgICAgdmFyIHRva2VuID0gJ3VpZF8nICsgU3RyaW5nKCsrbGFzdFVpZCk7XG4gICAgICAgIG1lc3NhZ2VzW21lc3NhZ2VdW3Rva2VuXSA9IGZ1bmM7XG5cbiAgICAgICAgLy8gcmV0dXJuIHRva2VuIGZvciB1bnN1YnNjcmliaW5nXG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9O1xuXG4gICAgUHViU3ViLnN1YnNjcmliZUFsbCA9IGZ1bmN0aW9uKCBmdW5jICl7XG4gICAgICAgIHJldHVybiBQdWJTdWIuc3Vic2NyaWJlKEFMTF9TVUJTQ1JJQklOR19NU0csIGZ1bmMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRoZSBwYXNzZWQgZnVuY3Rpb24gdG8gdGhlIHBhc3NlZCBtZXNzYWdlIG9uY2VcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlT25jZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gc3Vic2NyaWJlIHRvXG4gICAgICogQHBhcmFtIHsgRnVuY3Rpb24gfSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gYSBuZXcgbWVzc2FnZSBpcyBwdWJsaXNoZWRcbiAgICAgKiBAcmV0dXJuIHsgUHViU3ViIH1cbiAgICAgKi9cbiAgICBQdWJTdWIuc3Vic2NyaWJlT25jZSA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBmdW5jICl7XG4gICAgICAgIHZhciB0b2tlbiA9IFB1YlN1Yi5zdWJzY3JpYmUoIG1lc3NhZ2UsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvLyBiZWZvcmUgZnVuYyBhcHBseSwgdW5zdWJzY3JpYmUgbWVzc2FnZVxuICAgICAgICAgICAgUHViU3ViLnVuc3Vic2NyaWJlKCB0b2tlbiApO1xuICAgICAgICAgICAgZnVuYy5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUHViU3ViO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIHN1YnNjcmlwdGlvbnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIGNsZWFyQWxsU3Vic2NyaXB0aW9uc1xuICAgICAqL1xuICAgIFB1YlN1Yi5jbGVhckFsbFN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjbGVhckFsbFN1YnNjcmlwdGlvbnMoKXtcbiAgICAgICAgbWVzc2FnZXMgPSB7fTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgc3Vic2NyaXB0aW9ucyBieSB0aGUgdG9waWNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIGNsZWFyQWxsU3Vic2NyaXB0aW9uc1xuICAgICAqIEByZXR1cm4geyBpbnQgfVxuICAgICAqL1xuICAgIFB1YlN1Yi5jbGVhclN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjbGVhclN1YnNjcmlwdGlvbnModG9waWMpe1xuICAgICAgICB2YXIgbTtcbiAgICAgICAgZm9yIChtIGluIG1lc3NhZ2VzKXtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDApe1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlc1ttXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgICBDb3VudCBzdWJzY3JpcHRpb25zIGJ5IHRoZSB0b3BpY1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgY291bnRTdWJzY3JpcHRpb25zXG4gICAgICogQHJldHVybiB7IEFycmF5IH1cbiAgICAqL1xuICAgIFB1YlN1Yi5jb3VudFN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjb3VudFN1YnNjcmlwdGlvbnModG9waWMpe1xuICAgICAgICB2YXIgbTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChtIGluIG1lc3NhZ2VzKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCBtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yICh0b2tlbiBpbiBtZXNzYWdlc1ttXSkge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICAgR2V0cyBzdWJzY3JpcHRpb25zIGJ5IHRoZSB0b3BpY1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgZ2V0U3Vic2NyaXB0aW9uc1xuICAgICovXG4gICAgUHViU3ViLmdldFN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBnZXRTdWJzY3JpcHRpb25zKHRvcGljKXtcbiAgICAgICAgdmFyIG07XG4gICAgICAgIHZhciBsaXN0ID0gW107XG4gICAgICAgIGZvciAobSBpbiBtZXNzYWdlcyl7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCBtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwKXtcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2gobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgc3Vic2NyaXB0aW9uc1xuICAgICAqXG4gICAgICogLSBXaGVuIHBhc3NlZCBhIHRva2VuLCByZW1vdmVzIGEgc3BlY2lmaWMgc3Vic2NyaXB0aW9uLlxuICAgICAqXG5cdCAqIC0gV2hlbiBwYXNzZWQgYSBmdW5jdGlvbiwgcmVtb3ZlcyBhbGwgc3Vic2NyaXB0aW9ucyBmb3IgdGhhdCBmdW5jdGlvblxuICAgICAqXG5cdCAqIC0gV2hlbiBwYXNzZWQgYSB0b3BpYywgcmVtb3ZlcyBhbGwgc3Vic2NyaXB0aW9ucyBmb3IgdGhhdCB0b3BpYyAoaGllcmFyY2h5KVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlT25jZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB8IEZ1bmN0aW9uIH0gdmFsdWUgQSB0b2tlbiwgZnVuY3Rpb24gb3IgdG9waWMgdG8gdW5zdWJzY3JpYmUgZnJvbVxuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgd2l0aCBhIHRva2VuXG4gICAgICogdmFyIHRva2VuID0gUHViU3ViLnN1YnNjcmliZSgnbXl0b3BpYycsIG15RnVuYyk7XG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKHRva2VuKTtcbiAgICAgKiBAZXhhbXBsZSAvLyBVbnN1YnNjcmliaW5nIHdpdGggYSBmdW5jdGlvblxuICAgICAqIFB1YlN1Yi51bnN1YnNjcmliZShteUZ1bmMpO1xuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgZnJvbSBhIHRvcGljXG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKCdteXRvcGljJyk7XG4gICAgICovXG4gICAgUHViU3ViLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICB2YXIgZGVzY2VuZGFudFRvcGljRXhpc3RzID0gZnVuY3Rpb24odG9waWMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbTtcbiAgICAgICAgICAgICAgICBmb3IgKCBtIGluIG1lc3NhZ2VzICl7XG4gICAgICAgICAgICAgICAgICAgIGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCBtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhIGRlc2NlbmRhbnQgb2YgdGhlIHRvcGljIGV4aXN0czpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzVG9waWMgICAgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCB2YWx1ZSkgfHwgZGVzY2VuZGFudFRvcGljRXhpc3RzKHZhbHVlKSApLFxuICAgICAgICAgICAgaXNUb2tlbiAgICA9ICFpc1RvcGljICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycsXG4gICAgICAgICAgICBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nLFxuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2UsXG4gICAgICAgICAgICBtLCBtZXNzYWdlLCB0O1xuXG4gICAgICAgIGlmIChpc1RvcGljKXtcbiAgICAgICAgICAgIFB1YlN1Yi5jbGVhclN1YnNjcmlwdGlvbnModmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICggbSBpbiBtZXNzYWdlcyApe1xuICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIG1lc3NhZ2VzLCBtICkgKXtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZXNbbV07XG5cbiAgICAgICAgICAgICAgICBpZiAoIGlzVG9rZW4gJiYgbWVzc2FnZVt2YWx1ZV0gKXtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VbdmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9rZW5zIGFyZSB1bmlxdWUsIHNvIHdlIGNhbiBqdXN0IHN0b3AgaGVyZVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKCB0IGluIG1lc3NhZ2UgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZSwgdCkgJiYgbWVzc2FnZVt0XSA9PT0gdmFsdWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlW3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59KSk7XG4iLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5jc3MnO1xuXG5leHBvcnQgY2xhc3MgRE9NTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHNldFVwUGxheUFnYWluQnV0dG9uKCk7XG4gIH1cblxuICBwb3B1bGF0ZUFjdGl2ZVBsYXllcnNCb2FyZChwbGF5ZXIpIHtcbiAgICBjb25zdCBib2FyZCA9IHBsYXllci5nYW1lYm9hcmQuYm9hcmQ7XG5cbiAgICBjb25zdCBib2FyZEdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2FyZEdyaWQuY2xhc3NMaXN0LmFkZCgnYm9hcmQtZ3JpZCcpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGlmIChib2FyZFtpXVtqXSA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdCA9ICdoaXQtc2hpcCc7XG4gICAgICAgIH0gZWxzZSBpZiAoYm9hcmRbaV1bal0gPT09ICdhdHRhY2tlZCcpIHtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdCA9ICdhdHRhY2tlZCc7XG5cbiAgICAgICAgICBjb25zdCBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBkb3QuY2xhc3NMaXN0LmFkZCgnZG90Jyk7XG4gICAgICAgICAgaXRlbS5hcHBlbmQoZG90KTtcbiAgICAgICAgfSBlbHNlIGlmIChib2FyZFtpXVtqXSAhPT0gbnVsbCkge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0ID0gJ3NoaXAnO1xuICAgICAgICB9XG5cbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdib2FyZC1pdGVtJyk7XG5cbiAgICAgICAgYm9hcmRHcmlkLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGxheWVyLmVsZW1lbnRRdWVyeSk7XG5cbiAgICBib2FyZENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBib2FyZENvbnRhaW5lci5hcHBlbmQoYm9hcmRHcmlkKTtcbiAgfVxuXG4gIHBvcHVsYXRlT3Bwb25lbnRzQm9hcmQocGxheWVyKSB7XG4gICAgY29uc3QgYm9hcmQgPSBwbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkO1xuXG4gICAgY29uc3QgYm9hcmRHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm9hcmRHcmlkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWdyaWQnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soaSwgaik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vcmVtb3ZlIGVsc2UgbGF0ZXIsIHBsYXllcnMgc2hvdWxkbid0IHNlZSBlYWNoIG90aGVycyBib2F0c1xuICAgICAgICBpZiAoYm9hcmRbaV1bal0gPT09ICdoaXQnKSB7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QgPSAnaGl0LXNoaXAnO1xuICAgICAgICB9IGVsc2UgaWYgKGJvYXJkW2ldW2pdID09PSAnYXR0YWNrZWQnKSB7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QgPSAnYXR0YWNrZWQnO1xuXG4gICAgICAgICAgY29uc3QgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgZG90LmNsYXNzTGlzdC5hZGQoJ2RvdCcpO1xuICAgICAgICAgIGl0ZW0uYXBwZW5kKGRvdCk7XG4gICAgICAgIH0gZWxzZSBpZiAoYm9hcmRbaV1bal0gIT09IG51bGwpIHtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdCA9ICdzaGlwJztcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYm9hcmQtaXRlbScpO1xuXG4gICAgICAgIGJvYXJkR3JpZC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBsYXllci5lbGVtZW50UXVlcnkpO1xuXG4gICAgYm9hcmRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgYm9hcmRDb250YWluZXIuYXBwZW5kKGJvYXJkR3JpZCk7XG4gIH1cblxuICBwb3B1bGF0ZUJvYXJkKGZpcnN0UGxheWVyLCBzZWNvbmRQbGF5ZXIpIHtcbiAgICBpZiAoZmlyc3RQbGF5ZXIuaXNBY3RpdmUpIHtcbiAgICAgIHRoaXMucG9wdWxhdGVBY3RpdmVQbGF5ZXJzQm9hcmQoZmlyc3RQbGF5ZXIpO1xuICAgICAgdGhpcy5wb3B1bGF0ZU9wcG9uZW50c0JvYXJkKHNlY29uZFBsYXllcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9wdWxhdGVBY3RpdmVQbGF5ZXJzQm9hcmQoZmlyc3RQbGF5ZXIpO1xuICAgICAgdGhpcy5wb3B1bGF0ZU9wcG9uZW50c0JvYXJkKHNlY29uZFBsYXllcik7XG4gICAgfVxuICB9XG5cbiAgc2hvd0VuZERpYWxvZyh3aW5uZXIpIHtcbiAgICBjb25zdCBlbmREaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5kLWRpYWxvZycpO1xuICAgIGNvbnNvbGUubG9nKCd3aW4nKTtcblxuICAgIGlmICh3aW5uZXIudHlwZSA9PT0gJ2NvbXB1dGVyJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZC1kaWFsb2cgLm1lc3NhZ2UnKS50ZXh0Q29udGVudCA9XG4gICAgICAgICdZb3UgbG9zZS4gOi8nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5kLWRpYWxvZyAubWVzc2FnZScpLnRleHRDb250ZW50ID1cbiAgICAgICAgJ1lvdSB3b24sIGNvbmdyYXR1bGF0aW9ucyEnO1xuICAgIH1cblxuICAgIGVuZERpYWxvZy5zaG93TW9kYWwoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRVcFBsYXlBZ2FpbkJ1dHRvbigpIHtcbiAgY29uc3QgcGxheUFnYWluQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXktYWdhaW4tYnV0dG9uJyk7XG5cbiAgY29uc3QgTkVXX0dBTUUgPSAnbmV3IGdhbWUnO1xuICBwbGF5QWdhaW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgUHViU3ViLnB1Ymxpc2goTkVXX0dBTUUpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZC1kaWFsb2cnKS5jbG9zZSgpO1xuICB9KTtcbn1cbiIsImltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJztcblxuZXhwb3J0IGNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMCB9LCAoKSA9PiBBcnJheSgxMCkuZmlsbChudWxsKSk7XG4gICAgdGhpcy5taXNzZWQgPSBbXTtcbiAgfVxuXG4gICNpc0VtcHR5KHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy5ib2FyZFt4XVt5XSA9PT0gbnVsbDtcbiAgfVxuXG4gIHBsYWNlU2hpcChzaGlwLCB4LCB5LCBvcmllbnRhdGlvbikge1xuICAgIC8vY2hlY2tpbmcgaWYgdGhlcmUgaXMgZnJlZSBzcGFjZSBpbiBhbmQgYXJvdW5kIHRoZSBjaG9zZW4gYXJlYVxuICAgIC8vY2FzZSBmb3IgYSBob3Jpem9udGFsbHkgYWxpZ25lZCBzaGlwXG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIC8vY2hlY2tpbmcgaWYgc2hpcCBpcyB0b28gbGFyZ2VcbiAgICAgIGlmICh5ICsgc2hpcC5sZW5ndGggPiAxMCkgcmV0dXJuO1xuXG4gICAgICBmb3IgKGxldCBpID0gTWF0aC5tYXgoeCAtIDEsIDApOyBpIDw9IE1hdGgubWluKDksIHggKyAxKTsgaSsrKSB7XG4gICAgICAgIGZvciAoXG4gICAgICAgICAgbGV0IGogPSBNYXRoLm1heCgwLCB5IC0gMSk7XG4gICAgICAgICAgaiA8PSBNYXRoLm1pbig5LCB5ICsgc2hpcC5sZW5ndGggLSAxKTtcbiAgICAgICAgICBqKytcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLiNpc0VtcHR5KGksIGopKSByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy9wbGFjaW5nIGEgc2hpcFxuICAgICAgZm9yIChsZXQgaiA9IHk7IGogPCB5ICsgc2hpcC5sZW5ndGg7IGorKykge1xuICAgICAgICB0aGlzLmJvYXJkW3hdW2pdID0gc2hpcDtcbiAgICAgIH1cbiAgICB9XG4gICAgLy9jYXNlIGZvciBhIHZlcnRpY2FsbHkgYWxpZ25lZCBzaGlwXG4gICAgZWxzZSB7XG4gICAgICAvL2NoZWNraW5nIGlmIHNoaXAgaXMgdG9vIGxhcmdlXG4gICAgICBpZiAoeCArIHNoaXAubGVuZ3RoID4gMTApIHJldHVybjtcblxuICAgICAgZm9yIChsZXQgaiA9IE1hdGgubWF4KDAsIHkgLSAxKTsgaiA8PSBNYXRoLm1pbig5LCB5ICsgMSk7IGorKykge1xuICAgICAgICBmb3IgKFxuICAgICAgICAgIGxldCBpID0gTWF0aC5tYXgoMCwgeCAtIDEpO1xuICAgICAgICAgIGkgPD0gTWF0aC5taW4oOSwgeCArIHNoaXAubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgaSsrXG4gICAgICAgICkge1xuICAgICAgICAgIGlmICghdGhpcy4jaXNFbXB0eShpLCBqKSkgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vcGxhY2luZyBhIHNoaXBcbiAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgeCArIHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5ib2FyZFtpXVt5XSA9IHNoaXA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgaWYgKHRoaXMuYm9hcmRbeF1beV0gPT09IG51bGwpIHtcbiAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSAnYXR0YWNrZWQnO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0aGlzLmJvYXJkW3hdW3ldICE9PSBudWxsICYmXG4gICAgICB0aGlzLmJvYXJkW3hdW3ldICE9PSAnaGl0JyAmJlxuICAgICAgdGhpcy5ib2FyZFt4XVt5XSAhPT0gJ2F0dGFja2VkJ1xuICAgICkge1xuICAgICAgdGhpcy5ib2FyZFt4XVt5XS5oaXQoKTtcbiAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSAnaGl0JztcblxuICAgICAgY29uc3QgU0hJUF9ISVQgPSAnc2hpcCBoaXQnO1xuICAgICAgUHViU3ViLnB1Ymxpc2goU0hJUF9ISVQpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBTSElQX01JU1NFRCA9ICdzaGlwIG1pc3NlZCc7XG4gICAgUHViU3ViLnB1Ymxpc2goU0hJUF9NSVNTRUQpO1xuXG4gICAgdGhpcy5taXNzZWQucHVzaChbNiwgNF0pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGhhdmVBbGxCZWVuU3VuaygpIHtcbiAgICByZXR1cm4gIXRoaXMuYm9hcmQuc29tZSgocm93KSA9PlxuICAgICAgcm93LnNvbWUoKGl0ZW0pID0+IGl0ZW0gIT09IG51bGwgJiYgaXRlbSAhPT0gJ2hpdCcgJiYgaXRlbSAhPT0gJ2F0dGFja2VkJylcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZC5qcyc7XG5cbi8vVHdvIHR5cGVzIG9mIHBsYXllcnM6IHJlYWwgYW5kIGNvbXB1dGVyIHBsYXllclxuZXhwb3J0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHR5cGUsIGVsZW1lbnRRdWVyeSwgaXNBY3RpdmUgPSBmYWxzZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB0aGlzLmVsZW1lbnRRdWVyeSA9IGVsZW1lbnRRdWVyeTtcbiAgICB0aGlzLmlzQWN0aXZlID0gaXNBY3RpdmU7XG4gIH1cblxuICBzZXRBc0FjdGl2ZSgpIHtcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIHNldEFzT3Bwb25lbnQoKSB7XG4gICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMudGltZXNIaXQgPSAwO1xuICAgIHRoaXMuaGFzQmVlblN1bmsgPSBmYWxzZTtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICB0aGlzLnRpbWVzSGl0ICs9IDE7XG5cbiAgICBpZiAodGhpcy50aW1lc0hpdCA9PT0gdGhpcy5sZW5ndGgpIHRoaXMuaGFzQmVlblN1bmsgPSB0cnVlO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLmhhc0JlZW5TdW5rO1xuICB9XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWJsb2NrLWRpbWVuc2lvbjogbWluKDUwcHgsIGNhbGMoNHZ3KSk7XG4gIC0tcHJpbWFyeS1jb2xvcjogIzRmMjA5YjtcbiAgLS1saWdodGVyLWNvbG9yOiAjN2U4N2ZmO1xufVxuXG4qIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi8qRGVmYXVsdCBzdHlsZXMqL1xuYm9keSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxucCxcbnVsW2NsYXNzXSxcbm9sW2NsYXNzXSxcbmxpLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmJsb2NrcXVvdGUsXG5kbCxcbmRkIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5odG1sLFxuYm9keSxcbm1haW4ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmZpcnN0LXBsYXllcixcbi5zZWNvbmQtcGxheWVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmJvYXJkLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgdmFyKC0tYmxvY2stZGltZW5zaW9uKSk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCB2YXIoLS1ibG9jay1kaW1lbnNpb24pKTtcbn1cblxuLmJvYXJkLWl0ZW0ge1xuICBoZWlnaHQ6IHZhcigtLWJsb2NrLWRpbWVuc2lvbik7XG4gIHdpZHRoOiB2YXIoLS1ibG9jay1kaW1lbnNpb24pO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xufVxuXG4uYm9hcmQtaXRlbTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItY29sb3IpO1xufVxuXG4uaGl0LXNoaXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nLXRvcDogLTRweDtcbn1cblxuLmhpdC1zaGlwOjpiZWZvcmUsXG4uaGl0LXNoaXA6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbi5oaXQtc2hpcDo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4uaGl0LXNoaXA6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuLmF0dGFja2VkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kb3Qge1xuICB3aWR0aDogY2FsYyh2YXIoLS1ibG9jay1kaW1lbnNpb24pIC8gMyk7XG4gIGhlaWdodDogY2FsYyh2YXIoLS1ibG9jay1kaW1lbnNpb24pIC8gMyk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cblxuLmVuZC1kaWFsb2cge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5lbmQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbn1cblxuLmVuZC1kaWFsb2cgcCB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi5lbmQtZGlhbG9nIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogOHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUNBQXVDO0VBQ3ZDLHdCQUF3QjtFQUN4Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUEsaUJBQWlCO0FBQ2pCOzs7Ozs7Ozs7Ozs7OztFQWNFLFNBQVM7QUFDWDs7QUFFQTs7O0VBR0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlEQUF5RDtFQUN6RCxzREFBc0Q7QUFDeEQ7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2Qyx3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tYmxvY2stZGltZW5zaW9uOiBtaW4oNTBweCwgY2FsYyg0dncpKTtcXG4gIC0tcHJpbWFyeS1jb2xvcjogIzRmMjA5YjtcXG4gIC0tbGlnaHRlci1jb2xvcjogIzdlODdmZjtcXG59XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLypEZWZhdWx0IHN0eWxlcyovXFxuYm9keSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5wLFxcbnVsW2NsYXNzXSxcXG5vbFtjbGFzc10sXFxubGksXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwsXFxuYm9keSxcXG5tYWluIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5maXJzdC1wbGF5ZXIsXFxuLnNlY29uZC1wbGF5ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi5ib2FyZC1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgdmFyKC0tYmxvY2stZGltZW5zaW9uKSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgdmFyKC0tYmxvY2stZGltZW5zaW9uKSk7XFxufVxcblxcbi5ib2FyZC1pdGVtIHtcXG4gIGhlaWdodDogdmFyKC0tYmxvY2stZGltZW5zaW9uKTtcXG4gIHdpZHRoOiB2YXIoLS1ibG9jay1kaW1lbnNpb24pO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG59XFxuXFxuLmJvYXJkLWl0ZW06aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyLWNvbG9yKTtcXG59XFxuXFxuLmhpdC1zaGlwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZy10b3A6IC00cHg7XFxufVxcblxcbi5oaXQtc2hpcDo6YmVmb3JlLFxcbi5oaXQtc2hpcDo6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5oaXQtc2hpcDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLmhpdC1zaGlwOjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cXG4uYXR0YWNrZWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRvdCB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1ibG9jay1kaW1lbnNpb24pIC8gMyk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYmxvY2stZGltZW5zaW9uKSAvIDMpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG59XFxuXFxuLmVuZC1kaWFsb2cge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLmVuZC1kaWFsb2ctY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uZW5kLWRpYWxvZyBwIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbi5lbmQtZGlhbG9nIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgRE9NTWFuYWdlciB9IGZyb20gJy4vZG9tTWFuYWdlci5qcyc7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllci5qcyc7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwLmpzJztcbmltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJztcblxubGV0IGRvbSA9IG5ldyBET01NYW5hZ2VyKCk7XG5sZXQgZmlyc3RQbGF5ZXI7XG5sZXQgc2Vjb25kUGxheWVyO1xuXG5mdW5jdGlvbiBzdGFydEdhbWVXaXRoQm90KCkge1xuICBmaXJzdFBsYXllciA9IG5ldyBQbGF5ZXIoXG4gICAgJ1BsYXllciAxJyxcbiAgICAncmVhbCcsXG4gICAgJy5maXJzdC1wbGF5ZXIgLmJvYXJkLWdyaWQtY29udGFpbmVyJyxcbiAgICB0cnVlXG4gICk7XG4gIHNlY29uZFBsYXllciA9IG5ldyBQbGF5ZXIoXG4gICAgJ1BsYXllciAyJyxcbiAgICAnY29tcHV0ZXInLFxuICAgICcuc2Vjb25kLXBsYXllciAuYm9hcmQtZ3JpZC1jb250YWluZXInXG4gICk7XG5cbiAgLy9jb2RlIGZvciBtYW51YWwgc2hpcCBjcmVhdGlvbiBzaG91bGQgYmUgcmVtb3ZlZCBhZnRlciBlbmFibGluZyB1c2VyIHRvIHBsYWNlIHNoaXBzIGJ5IGhpbXNlbGZcbiAgZmlyc3RQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChuZXcgU2hpcCgxKSwgNywgMiwgJ2hvcml6b250YWwnKTtcbiAgZmlyc3RQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChuZXcgU2hpcCgyKSwgMCwgMiwgJ2hvcml6b250YWwnKTtcbiAgZmlyc3RQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChuZXcgU2hpcCgzKSwgNCwgMiwgJ2hvcml6b250YWwnKTtcbiAgZmlyc3RQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChuZXcgU2hpcCg0KSwgMywgOCwgJ3ZlcnRpY2FsJyk7XG4gIGZpcnN0UGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAobmV3IFNoaXAoNSksIDUsIDYsICd2ZXJ0aWNhbCcpO1xuXG4gIHNlY29uZFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKG5ldyBTaGlwKDEpLCA3LCAyLCAnaG9yaXpvbnRhbCcpO1xuICBzZWNvbmRQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChuZXcgU2hpcCgyKSwgMCwgMiwgJ2hvcml6b250YWwnKTtcbiAgc2Vjb25kUGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAobmV3IFNoaXAoMyksIDIsIDgsICd2ZXJ0aWNhbCcpO1xuICBzZWNvbmRQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChuZXcgU2hpcCg0KSwgNiwgNCwgJ2hvcml6b250YWwnKTtcbiAgc2Vjb25kUGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAobmV3IFNoaXAoNSksIDUsIDAsICd2ZXJ0aWNhbCcpO1xuXG4gIGRvbS5wb3B1bGF0ZUJvYXJkKGZpcnN0UGxheWVyLCBzZWNvbmRQbGF5ZXIpO1xufVxuXG5mdW5jdGlvbiBtYWtlQm90TW92ZSgpIHtcbiAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICB3aGlsZSAoXG4gICAgZmlyc3RQbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkW3hdW3ldID09PSBudWxsIHx8XG4gICAgZmlyc3RQbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkW3hdW3ldIGluc3RhbmNlb2YgU2hpcFxuICApIHtcbiAgICBmaXJzdFBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0Zvcldpbm5lcigpIHtcbiAgaWYgKGZpcnN0UGxheWVyLmdhbWVib2FyZC5oYXZlQWxsQmVlblN1bmsoKSkgZG9tLnNob3dFbmREaWFsb2coc2Vjb25kUGxheWVyKTtcbiAgZWxzZSBpZiAoc2Vjb25kUGxheWVyLmdhbWVib2FyZC5oYXZlQWxsQmVlblN1bmsoKSlcbiAgICBkb20uc2hvd0VuZERpYWxvZyhmaXJzdFBsYXllcik7XG59XG5cbnN0YXJ0R2FtZVdpdGhCb3QoKTtcblxuY29uc3QgU0hJUF9ISVQgPSAnc2hpcCBoaXQnO1xuXG5QdWJTdWIuc3Vic2NyaWJlKFNISVBfSElULCAoKSA9PiB7XG4gIGlmIChzZWNvbmRQbGF5ZXIuaXNBY3RpdmUgPT09IHRydWUpIHtcbiAgICBtYWtlQm90TW92ZSgpO1xuICB9XG5cbiAgZG9tLnBvcHVsYXRlQm9hcmQoZmlyc3RQbGF5ZXIsIHNlY29uZFBsYXllcik7XG4gIGNoZWNrRm9yV2lubmVyKCk7XG59KTtcblxuY29uc3QgU0hJUF9NSVNTRUQgPSAnc2hpcCBtaXNzZWQnO1xuUHViU3ViLnN1YnNjcmliZShTSElQX01JU1NFRCwgKCkgPT4ge1xuICBpZiAoZmlyc3RQbGF5ZXIuaXNBY3RpdmUpIHtcbiAgICBmaXJzdFBsYXllci5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIHNlY29uZFBsYXllci5pc0FjdGl2ZSA9IHRydWU7XG5cbiAgICBtYWtlQm90TW92ZSgpO1xuICB9IGVsc2Uge1xuICAgIGZpcnN0UGxheWVyLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICBzZWNvbmRQbGF5ZXIuaXNBY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGRvbS5wb3B1bGF0ZUJvYXJkKGZpcnN0UGxheWVyLCBzZWNvbmRQbGF5ZXIpO1xuICBjaGVja0Zvcldpbm5lcigpO1xufSk7XG5cbmNvbnN0IE5FV19HQU1FID0gJ25ldyBnYW1lJztcblB1YlN1Yi5zdWJzY3JpYmUoTkVXX0dBTUUsICgpID0+IHN0YXJ0R2FtZVdpdGhCb3QoKSk7XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiaWQiLCJfayIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwicm9vdCIsImZhY3RvcnkiLCJQdWJTdWIiLCJjb25zb2xlIiwid2FybiIsImRlZmluZSIsImFtZCIsIndpbmRvdyIsIm1lc3NhZ2VzIiwibGFzdFVpZCIsIkFMTF9TVUJTQ1JJQklOR19NU0ciLCJoYXNLZXlzIiwib2JqIiwia2V5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwidGhyb3dFeGNlcHRpb24iLCJleCIsInJlVGhyb3dFeGNlcHRpb24iLCJjYWxsU3Vic2NyaWJlcldpdGhEZWxheWVkRXhjZXB0aW9ucyIsInN1YnNjcmliZXIiLCJtZXNzYWdlIiwic2V0VGltZW91dCIsImNhbGxTdWJzY3JpYmVyV2l0aEltbWVkaWF0ZUV4Y2VwdGlvbnMiLCJkZWxpdmVyTWVzc2FnZSIsIm9yaWdpbmFsTWVzc2FnZSIsIm1hdGNoZWRNZXNzYWdlIiwiaW1tZWRpYXRlRXhjZXB0aW9ucyIsInN1YnNjcmliZXJzIiwiY2FsbFN1YnNjcmliZXIiLCJzIiwiY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiIsImRlbGl2ZXJOYW1lc3BhY2VkIiwidG9waWMiLCJTdHJpbmciLCJwb3NpdGlvbiIsImxhc3RJbmRleE9mIiwic3Vic3RyIiwiaGFzRGlyZWN0U3Vic2NyaWJlcnNGb3IiLCJmb3VuZCIsIkJvb2xlYW4iLCJtZXNzYWdlSGFzU3Vic2NyaWJlcnMiLCJwdWJsaXNoIiwic3luYyIsImRlbGl2ZXIiLCJoYXNTdWJzY3JpYmVycyIsInB1Ymxpc2hTeW5jIiwic3Vic2NyaWJlIiwiZnVuYyIsInRva2VuIiwic3Vic2NyaWJlQWxsIiwic3Vic2NyaWJlT25jZSIsInVuc3Vic2NyaWJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJjbGVhckFsbFN1YnNjcmlwdGlvbnMiLCJjbGVhclN1YnNjcmlwdGlvbnMiLCJtIiwiaW5kZXhPZiIsImNvdW50U3Vic2NyaXB0aW9ucyIsImNvdW50IiwiZ2V0U3Vic2NyaXB0aW9ucyIsInZhbHVlIiwiZGVzY2VuZGFudFRvcGljRXhpc3RzIiwiaXNUb3BpYyIsImlzVG9rZW4iLCJpc0Z1bmN0aW9uIiwicmVzdWx0IiwidCIsInN0eWxlIiwiRE9NTWFuYWdlciIsImNvbnN0cnVjdG9yIiwic2V0VXBQbGF5QWdhaW5CdXR0b24iLCJwb3B1bGF0ZUFjdGl2ZVBsYXllcnNCb2FyZCIsInBsYXllciIsImJvYXJkIiwiZ2FtZWJvYXJkIiwiYm9hcmRHcmlkIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaiIsImRvdCIsImFwcGVuZCIsImFwcGVuZENoaWxkIiwiYm9hcmRDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiZWxlbWVudFF1ZXJ5IiwiaW5uZXJIVE1MIiwicG9wdWxhdGVPcHBvbmVudHNCb2FyZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZWNlaXZlQXR0YWNrIiwicG9wdWxhdGVCb2FyZCIsImZpcnN0UGxheWVyIiwic2Vjb25kUGxheWVyIiwiaXNBY3RpdmUiLCJzaG93RW5kRGlhbG9nIiwid2lubmVyIiwiZW5kRGlhbG9nIiwibG9nIiwidHlwZSIsInRleHRDb250ZW50Iiwic2hvd01vZGFsIiwicGxheUFnYWluQnV0dG9uIiwiTkVXX0dBTUUiLCJjbG9zZSIsIkdhbWVib2FyZCIsIkFycmF5IiwiZnJvbSIsImZpbGwiLCJtaXNzZWQiLCJpc0VtcHR5IiwiI2lzRW1wdHkiLCJ4IiwieSIsInBsYWNlU2hpcCIsInNoaXAiLCJvcmllbnRhdGlvbiIsIk1hdGgiLCJtYXgiLCJtaW4iLCJoaXQiLCJTSElQX0hJVCIsIlNISVBfTUlTU0VEIiwiaGF2ZUFsbEJlZW5TdW5rIiwic29tZSIsInJvdyIsIlBsYXllciIsIm5hbWUiLCJzZXRBc0FjdGl2ZSIsInNldEFzT3Bwb25lbnQiLCJTaGlwIiwidGltZXNIaXQiLCJoYXNCZWVuU3VuayIsImlzU3VuayIsImRvbSIsInN0YXJ0R2FtZVdpdGhCb3QiLCJtYWtlQm90TW92ZSIsImZsb29yIiwicmFuZG9tIiwiY2hlY2tGb3JXaW5uZXIiXSwic291cmNlUm9vdCI6IiJ9