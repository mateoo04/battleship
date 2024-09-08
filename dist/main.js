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

const NEW_GAME = 'new game';
class DOMManager {
  constructor() {
    setUpPlayAgainButton();
    setNameClickListeners();
    setUpResetButton();
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
  playAgainButton.addEventListener('click', () => {
    PubSub.publish(NEW_GAME);
    document.querySelector('.end-dialog').close();
  });
}
function setNameClickListeners() {
  const changeNameDialog = document.querySelector('.change-names-dialog');
  const firstNamePlayerName = document.querySelector('.first-player .players-name');
  const secondNamePlayerName = document.querySelector('.second-player .players-name');
  firstNamePlayerName.addEventListener('click', () => {
    changeNameDialog.showModal();
  });
  secondNamePlayerName.addEventListener('click', () => {
    changeNameDialog.showModal();
  });
  const changeNameForm = document.querySelector('.change-names-dialog form');
  changeNameForm.addEventListener('submit', event => {
    event.preventDefault();
    updateNames(document.querySelector('#first-name-input').value, document.querySelector('#second-name-input').value);
    changeNameForm.reset();
    changeNameDialog.close();
  });
}
function updateNames(name1, name2) {
  const firstNamePlayerName = document.querySelector('.first-player .players-name');
  const secondNamePlayerName = document.querySelector('.second-player .players-name');
  firstNamePlayerName.textContent = name1.trim() === '' ? 'Player 1' : name1;
  secondNamePlayerName.textContent = name2.trim() === '' ? 'Player 2' : name2;
  const CHANGE_NAMES = 'change names';
  PubSub.publish(CHANGE_NAMES, [name1, name2]);
}
function setUpResetButton() {
  const resetButton = document.querySelector('.reset-button');
  resetButton.addEventListener('click', () => {
    PubSub.publish(NEW_GAME);
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
  changeName(newName) {
    this.name = newName;
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
body {
  height: 100%;
  width: 100%;
}

body {
  display: grid;
  grid-template-rows: min-content 1fr;
}

header {
  display: flex;
  justify-content: space-between;
  padding: 12px 18px;
}

header button {
  background-color: var(--primary-color);
  border: none;
  border-radius: 20px;
  color: #fff;
  font-weight: bold;
  padding: 8px 20px;
}

main {
  display: flex;
}

.first-player,
.second-player {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  gap: 12px;
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

dialog {
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

.change-names-dialog form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.change-names-dialog input {
  border-radius: 20px;
  border: none;
  padding: 8px 16px;
}

.change-names-dialog input[type='text'] {
  background-color: #e9e9e9;
}

.change-names-dialog input[type='submit'] {
  background-color: var(--primary-color);
  font-weight: bold;
  color: #fff;
}

button:hover,
.players-name:hover {
  cursor: pointer;
  opacity: 0.8;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,uCAAuC;EACvC,wBAAwB;EACxB,wBAAwB;AAC1B;;AAEA;EACE,yCAAyC;AAC3C;;AAEA,iBAAiB;AACjB;;;;;;;;;;;;;;EAcE,SAAS;AACX;;AAEA;;EAEE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,kBAAkB;AACpB;;AAEA;EACE,sCAAsC;EACtC,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,UAAU;EACV,SAAS;AACX;;AAEA;EACE,aAAa;EACb,yDAAyD;EACzD,sDAAsD;AACxD;;AAEA;EACE,8BAA8B;EAC9B,6BAA6B;EAC7B,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;;EAEE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,YAAY;EACZ,WAAW;EACX,WAAW;EACX,sCAAsC;AACxC;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,uCAAuC;EACvC,wCAAwC;EACxC,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,sCAAsC;EACtC,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,sCAAsC;EACtC,iBAAiB;EACjB,WAAW;AACb;;AAEA;;EAEE,eAAe;EACf,YAAY;AACd","sourcesContent":[":root {\n  --block-dimension: min(50px, calc(4vw));\n  --primary-color: #4f209b;\n  --lighter-color: #7e87ff;\n}\n\n* {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n/*Default styles*/\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nul[class],\nol[class],\nli,\nfigure,\nfigcaption,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: min-content 1fr;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 18px;\n}\n\nheader button {\n  background-color: var(--primary-color);\n  border: none;\n  border-radius: 20px;\n  color: #fff;\n  font-weight: bold;\n  padding: 8px 20px;\n}\n\nmain {\n  display: flex;\n}\n\n.first-player,\n.second-player {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 50%;\n  gap: 12px;\n}\n\n.board-grid {\n  display: grid;\n  grid-template-columns: repeat(10, var(--block-dimension));\n  grid-template-rows: repeat(10, var(--block-dimension));\n}\n\n.board-item {\n  height: var(--block-dimension);\n  width: var(--block-dimension);\n  border: 1px solid #000;\n}\n\n.board-item:hover {\n  cursor: pointer;\n  opacity: 0.8;\n}\n\n.ship {\n  background-color: var(--lighter-color);\n}\n\n.hit-ship {\n  position: relative;\n  border: 1px solid black;\n  padding-top: -4px;\n}\n\n.hit-ship::before,\n.hit-ship::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 100%;\n  height: 3px;\n  background-color: var(--primary-color);\n}\n\n.hit-ship::before {\n  transform: rotate(45deg);\n}\n\n.hit-ship::after {\n  transform: rotate(-45deg);\n}\n\n.attacked {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.dot {\n  width: calc(var(--block-dimension) / 3);\n  height: calc(var(--block-dimension) / 3);\n  border-radius: 50%;\n  background-color: #000;\n}\n\ndialog {\n  border: none;\n  border-radius: 20px;\n}\n\n.end-dialog-container {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.end-dialog p {\n  font-size: 1.5em;\n}\n\n.end-dialog button {\n  background-color: var(--primary-color);\n  border: none;\n  border-radius: 20px;\n  color: #fff;\n  font-weight: bold;\n  padding: 8px;\n}\n\n.change-names-dialog form {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.change-names-dialog input {\n  border-radius: 20px;\n  border: none;\n  padding: 8px 16px;\n}\n\n.change-names-dialog input[type='text'] {\n  background-color: #e9e9e9;\n}\n\n.change-names-dialog input[type='submit'] {\n  background-color: var(--primary-color);\n  font-weight: bold;\n  color: #fff;\n}\n\nbutton:hover,\n.players-name:hover {\n  cursor: pointer;\n  opacity: 0.8;\n}\n"],"sourceRoot":""}]);
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




const SHIP_HIT = 'ship hit';
const SHIP_MISSED = 'ship missed';
const NEW_GAME = 'new game';
const CHANGE_NAMES = 'change names';
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
pubsub_js__WEBPACK_IMPORTED_MODULE_3___default().subscribe(SHIP_HIT, () => {
  if (secondPlayer.isActive === true) {
    makeBotMove();
  }
  dom.populateBoard(firstPlayer, secondPlayer);
  checkForWinner();
});
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
pubsub_js__WEBPACK_IMPORTED_MODULE_3___default().subscribe(NEW_GAME, () => startGameWithBot());
pubsub_js__WEBPACK_IMPORTED_MODULE_3___default().subscribe(CHANGE_NAMES, (message, newNames) => {
  firstPlayer.changeName(newNames[0]);
  firstPlayer.changeName(newNames[1]);
});
startGameWithBot();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksbUJBQW1CLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsZ0NBQWdDLDRDQUE0Qyw2QkFBNkIsNkJBQTZCLEdBQUcsT0FBTyw4Q0FBOEMsR0FBRyxnSUFBZ0ksY0FBYyxHQUFHLGlCQUFpQixpQkFBaUIsZ0JBQWdCLEdBQUcsVUFBVSxrQkFBa0Isd0NBQXdDLEdBQUcsWUFBWSxrQkFBa0IsbUNBQW1DLHVCQUF1QixHQUFHLG1CQUFtQiwyQ0FBMkMsaUJBQWlCLHdCQUF3QixnQkFBZ0Isc0JBQXNCLHNCQUFzQixHQUFHLFVBQVUsa0JBQWtCLEdBQUcsb0NBQW9DLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixpQkFBaUIsZUFBZSxjQUFjLEdBQUcsaUJBQWlCLGtCQUFrQiw4REFBOEQsMkRBQTJELEdBQUcsaUJBQWlCLG1DQUFtQyxrQ0FBa0MsMkJBQTJCLEdBQUcsdUJBQXVCLG9CQUFvQixpQkFBaUIsR0FBRyxXQUFXLDJDQUEyQyxHQUFHLGVBQWUsdUJBQXVCLDRCQUE0QixzQkFBc0IsR0FBRywwQ0FBMEMsZ0JBQWdCLHVCQUF1QixXQUFXLFlBQVksYUFBYSxjQUFjLGlCQUFpQixnQkFBZ0IsZ0JBQWdCLDJDQUEyQyxHQUFHLHVCQUF1Qiw2QkFBNkIsR0FBRyxzQkFBc0IsOEJBQThCLEdBQUcsZUFBZSxrQkFBa0Isd0JBQXdCLDRCQUE0QixHQUFHLFVBQVUsNENBQTRDLDZDQUE2Qyx1QkFBdUIsMkJBQTJCLEdBQUcsWUFBWSxpQkFBaUIsd0JBQXdCLEdBQUcsMkJBQTJCLGtCQUFrQiwyQkFBMkIsY0FBYyxHQUFHLG1CQUFtQixxQkFBcUIsR0FBRyx3QkFBd0IsMkNBQTJDLGlCQUFpQix3QkFBd0IsZ0JBQWdCLHNCQUFzQixpQkFBaUIsR0FBRywrQkFBK0Isa0JBQWtCLDJCQUEyQixhQUFhLEdBQUcsZ0NBQWdDLHdCQUF3QixpQkFBaUIsc0JBQXNCLEdBQUcsNkNBQTZDLDhCQUE4QixHQUFHLCtDQUErQywyQ0FBMkMsc0JBQXNCLGdCQUFnQixHQUFHLHdDQUF3QyxvQkFBb0IsaUJBQWlCLEdBQUcscUJBQXFCO0FBQy9tSTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1THZDLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7OztBQ3hCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NKQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNkM7QUFDUjtBQUNKO0FBQ0Y7QUFFL0IsTUFBTWIsUUFBUSxHQUFHLFVBQVU7QUFDM0IsTUFBTUMsV0FBVyxHQUFHLGFBQWE7QUFDakMsTUFBTXJFLFFBQVEsR0FBRyxVQUFVO0FBQzNCLE1BQU1rRCxZQUFZLEdBQUcsY0FBYztBQUVuQyxJQUFJaUMsR0FBRyxHQUFHLElBQUlsRixzREFBVSxDQUFDLENBQUM7QUFDMUIsSUFBSTBCLFdBQVc7QUFDZixJQUFJQyxZQUFZO0FBRWhCLFNBQVN3RCxnQkFBZ0JBLENBQUEsRUFBRztFQUMxQnpELFdBQVcsR0FBRyxJQUFJOEMsOENBQU0sQ0FDdEIsVUFBVSxFQUNWLE1BQU0sRUFDTixxQ0FBcUMsRUFDckMsSUFDRixDQUFDO0VBQ0Q3QyxZQUFZLEdBQUcsSUFBSTZDLDhDQUFNLENBQ3ZCLFVBQVUsRUFDVixVQUFVLEVBQ1Ysc0NBQ0YsQ0FBQzs7RUFFRDtFQUNBOUMsV0FBVyxDQUFDbEIsU0FBUyxDQUFDb0QsU0FBUyxDQUFDLElBQUlrQiwwQ0FBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsWUFBWSxDQUFDO0VBQ2hFcEQsV0FBVyxDQUFDbEIsU0FBUyxDQUFDb0QsU0FBUyxDQUFDLElBQUlrQiwwQ0FBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsWUFBWSxDQUFDO0VBQ2hFcEQsV0FBVyxDQUFDbEIsU0FBUyxDQUFDb0QsU0FBUyxDQUFDLElBQUlrQiwwQ0FBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsWUFBWSxDQUFDO0VBQ2hFcEQsV0FBVyxDQUFDbEIsU0FBUyxDQUFDb0QsU0FBUyxDQUFDLElBQUlrQiwwQ0FBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDO0VBQzlEcEQsV0FBVyxDQUFDbEIsU0FBUyxDQUFDb0QsU0FBUyxDQUFDLElBQUlrQiwwQ0FBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDO0VBRTlEbkQsWUFBWSxDQUFDbkIsU0FBUyxDQUFDb0QsU0FBUyxDQUFDLElBQUlrQiwwQ0FBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsWUFBWSxDQUFDO0VBQ2pFbkQsWUFBWSxDQUFDbkIsU0FBUyxDQUFDb0QsU0FBUyxDQUFDLElBQUlrQiwwQ0FBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsWUFBWSxDQUFDO0VBQ2pFbkQsWUFBWSxDQUFDbkIsU0FBUyxDQUFDb0QsU0FBUyxDQUFDLElBQUlrQiwwQ0FBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDO0VBQy9EbkQsWUFBWSxDQUFDbkIsU0FBUyxDQUFDb0QsU0FBUyxDQUFDLElBQUlrQiwwQ0FBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsWUFBWSxDQUFDO0VBQ2pFbkQsWUFBWSxDQUFDbkIsU0FBUyxDQUFDb0QsU0FBUyxDQUFDLElBQUlrQiwwQ0FBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDO0VBRS9ESSxHQUFHLENBQUN6RCxhQUFhLENBQUNDLFdBQVcsRUFBRUMsWUFBWSxDQUFDO0FBQzlDO0FBRUEsU0FBU3lELFdBQVdBLENBQUEsRUFBRztFQUNyQixNQUFNMUIsQ0FBQyxHQUFHSyxJQUFJLENBQUNzQixLQUFLLENBQUN0QixJQUFJLENBQUN1QixNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztFQUN4QyxNQUFNM0IsQ0FBQyxHQUFHSSxJQUFJLENBQUNzQixLQUFLLENBQUN0QixJQUFJLENBQUN1QixNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztFQUV4QyxPQUNFNUQsV0FBVyxDQUFDbEIsU0FBUyxDQUFDRCxLQUFLLENBQUNtRCxDQUFDLENBQUMsQ0FBQ0MsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUMxQ2pDLFdBQVcsQ0FBQ2xCLFNBQVMsQ0FBQ0QsS0FBSyxDQUFDbUQsQ0FBQyxDQUFDLENBQUNDLENBQUMsQ0FBQyxZQUFZbUIsMENBQUksRUFDakQ7SUFDQXBELFdBQVcsQ0FBQ2xCLFNBQVMsQ0FBQ2dCLGFBQWEsQ0FBQ2tDLENBQUMsRUFBRUMsQ0FBQyxDQUFDO0VBQzNDO0FBQ0Y7QUFFQSxTQUFTNEIsY0FBY0EsQ0FBQSxFQUFHO0VBQ3hCLElBQUk3RCxXQUFXLENBQUNsQixTQUFTLENBQUM2RCxlQUFlLENBQUMsQ0FBQyxFQUFFYSxHQUFHLENBQUNyRCxhQUFhLENBQUNGLFlBQVksQ0FBQyxDQUFDLEtBQ3hFLElBQUlBLFlBQVksQ0FBQ25CLFNBQVMsQ0FBQzZELGVBQWUsQ0FBQyxDQUFDLEVBQy9DYSxHQUFHLENBQUNyRCxhQUFhLENBQUNILFdBQVcsQ0FBQztBQUNsQztBQUVBakcsMERBQWdCLENBQUMwSSxRQUFRLEVBQUUsTUFBTTtFQUMvQixJQUFJeEMsWUFBWSxDQUFDQyxRQUFRLEtBQUssSUFBSSxFQUFFO0lBQ2xDd0QsV0FBVyxDQUFDLENBQUM7RUFDZjtFQUVBRixHQUFHLENBQUN6RCxhQUFhLENBQUNDLFdBQVcsRUFBRUMsWUFBWSxDQUFDO0VBQzVDNEQsY0FBYyxDQUFDLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBRUY5SiwwREFBZ0IsQ0FBQzJJLFdBQVcsRUFBRSxNQUFNO0VBQ2xDLElBQUkxQyxXQUFXLENBQUNFLFFBQVEsRUFBRTtJQUN4QkYsV0FBVyxDQUFDRSxRQUFRLEdBQUcsS0FBSztJQUM1QkQsWUFBWSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtJQUU1QndELFdBQVcsQ0FBQyxDQUFDO0VBQ2YsQ0FBQyxNQUFNO0lBQ0wxRCxXQUFXLENBQUNFLFFBQVEsR0FBRyxJQUFJO0lBQzNCRCxZQUFZLENBQUNDLFFBQVEsR0FBRyxLQUFLO0VBQy9CO0VBRUFzRCxHQUFHLENBQUN6RCxhQUFhLENBQUNDLFdBQVcsRUFBRUMsWUFBWSxDQUFDO0VBQzVDNEQsY0FBYyxDQUFDLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBRUY5SiwwREFBZ0IsQ0FBQ3NFLFFBQVEsRUFBRSxNQUFNb0YsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0FBRXBEMUosMERBQWdCLENBQUN3SCxZQUFZLEVBQUUsQ0FBQ25HLE9BQU8sRUFBRTBJLFFBQVEsS0FBSztFQUNwRDlELFdBQVcsQ0FBQ2tELFVBQVUsQ0FBQ1ksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ25DOUQsV0FBVyxDQUFDa0QsVUFBVSxDQUFDWSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFDO0FBRUZMLGdCQUFnQixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3B1YnN1Yi1qcy9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVNYW5hZ2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMCwyMDExLDIwMTIsMjAxMywyMDE0IE1vcmdhbiBSb2RlcmljayBodHRwOi8vcm9kZXJpY2suZGtcbiAqIExpY2Vuc2U6IE1JVCAtIGh0dHA6Ly9tcmducmRyY2subWl0LWxpY2Vuc2Uub3JnXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL21yb2Rlcmljay9QdWJTdWJKU1xuICovXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSl7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIFB1YlN1YiA9IHt9O1xuXG4gICAgaWYgKHJvb3QuUHViU3ViKSB7XG4gICAgICAgIFB1YlN1YiA9IHJvb3QuUHViU3ViO1xuICAgICAgICBjb25zb2xlLndhcm4oXCJQdWJTdWIgYWxyZWFkeSBsb2FkZWQsIHVzaW5nIGV4aXN0aW5nIHZlcnNpb25cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdC5QdWJTdWIgPSBQdWJTdWI7XG4gICAgICAgIGZhY3RvcnkoUHViU3ViKTtcbiAgICB9XG4gICAgLy8gQ29tbW9uSlMgYW5kIE5vZGUuanMgbW9kdWxlIHN1cHBvcnRcbiAgICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKXtcbiAgICAgICAgaWYgKG1vZHVsZSAhPT0gdW5kZWZpbmVkICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBQdWJTdWI7IC8vIE5vZGUuanMgc3BlY2lmaWMgYG1vZHVsZS5leHBvcnRzYFxuICAgICAgICB9XG4gICAgICAgIGV4cG9ydHMuUHViU3ViID0gUHViU3ViOyAvLyBDb21tb25KUyBtb2R1bGUgMS4xLjEgc3BlY1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBQdWJTdWI7IC8vIENvbW1vbkpTXG4gICAgfVxuICAgIC8vIEFNRCBzdXBwb3J0XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbiAgICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpe1xuICAgICAgICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBQdWJTdWI7IH0pO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVuZGVmICovXG4gICAgfVxuXG59KCggdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93ICkgfHwgdGhpcywgZnVuY3Rpb24gKFB1YlN1Yil7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIG1lc3NhZ2VzID0ge30sXG4gICAgICAgIGxhc3RVaWQgPSAtMSxcbiAgICAgICAgQUxMX1NVQlNDUklCSU5HX01TRyA9ICcqJztcblxuICAgIGZ1bmN0aW9uIGhhc0tleXMob2JqKXtcbiAgICAgICAgdmFyIGtleTtcblxuICAgICAgICBmb3IgKGtleSBpbiBvYmope1xuICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpICl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHRocm93cyB0aGUgcGFzc2VkIGV4Y2VwdGlvbiwgZm9yIHVzZSBhcyBhcmd1bWVudCBmb3Igc2V0VGltZW91dFxuICAgICAqIEBhbGlhcyB0aHJvd0V4Y2VwdGlvblxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7IE9iamVjdCB9IGV4IEFuIEVycm9yIG9iamVjdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRocm93RXhjZXB0aW9uKCBleCApe1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gcmVUaHJvd0V4Y2VwdGlvbigpe1xuICAgICAgICAgICAgdGhyb3cgZXg7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsbFN1YnNjcmliZXJXaXRoRGVsYXllZEV4Y2VwdGlvbnMoIHN1YnNjcmliZXIsIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIoIG1lc3NhZ2UsIGRhdGEgKTtcbiAgICAgICAgfSBjYXRjaCggZXggKXtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoIHRocm93RXhjZXB0aW9uKCBleCApLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGxTdWJzY3JpYmVyV2l0aEltbWVkaWF0ZUV4Y2VwdGlvbnMoIHN1YnNjcmliZXIsIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgc3Vic2NyaWJlciggbWVzc2FnZSwgZGF0YSApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGl2ZXJNZXNzYWdlKCBvcmlnaW5hbE1lc3NhZ2UsIG1hdGNoZWRNZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIHZhciBzdWJzY3JpYmVycyA9IG1lc3NhZ2VzW21hdGNoZWRNZXNzYWdlXSxcbiAgICAgICAgICAgIGNhbGxTdWJzY3JpYmVyID0gaW1tZWRpYXRlRXhjZXB0aW9ucyA/IGNhbGxTdWJzY3JpYmVyV2l0aEltbWVkaWF0ZUV4Y2VwdGlvbnMgOiBjYWxsU3Vic2NyaWJlcldpdGhEZWxheWVkRXhjZXB0aW9ucyxcbiAgICAgICAgICAgIHM7XG5cbiAgICAgICAgaWYgKCAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBtZXNzYWdlcywgbWF0Y2hlZE1lc3NhZ2UgKSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAocyBpbiBzdWJzY3JpYmVycyl7XG4gICAgICAgICAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzdWJzY3JpYmVycywgcykpe1xuICAgICAgICAgICAgICAgIGNhbGxTdWJzY3JpYmVyKCBzdWJzY3JpYmVyc1tzXSwgb3JpZ2luYWxNZXNzYWdlLCBkYXRhICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEZWxpdmVyeUZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBkZWxpdmVyTmFtZXNwYWNlZCgpe1xuICAgICAgICAgICAgdmFyIHRvcGljID0gU3RyaW5nKCBtZXNzYWdlICksXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG5cbiAgICAgICAgICAgIC8vIGRlbGl2ZXIgdGhlIG1lc3NhZ2UgYXMgaXQgaXMgbm93XG4gICAgICAgICAgICBkZWxpdmVyTWVzc2FnZShtZXNzYWdlLCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zKTtcblxuICAgICAgICAgICAgLy8gdHJpbSB0aGUgaGllcmFyY2h5IGFuZCBkZWxpdmVyIG1lc3NhZ2UgdG8gZWFjaCBsZXZlbFxuICAgICAgICAgICAgd2hpbGUoIHBvc2l0aW9uICE9PSAtMSApe1xuICAgICAgICAgICAgICAgIHRvcGljID0gdG9waWMuc3Vic3RyKCAwLCBwb3NpdGlvbiApO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoJy4nKTtcbiAgICAgICAgICAgICAgICBkZWxpdmVyTWVzc2FnZSggbWVzc2FnZSwgdG9waWMsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UobWVzc2FnZSwgQUxMX1NVQlNDUklCSU5HX01TRywgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFzRGlyZWN0U3Vic2NyaWJlcnNGb3IoIG1lc3NhZ2UgKSB7XG4gICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgZm91bmQgPSBCb29sZWFuKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggbWVzc2FnZXMsIHRvcGljICkgJiYgaGFzS2V5cyhtZXNzYWdlc1t0b3BpY10pKTtcblxuICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWVzc2FnZUhhc1N1YnNjcmliZXJzKCBtZXNzYWdlICl7XG4gICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgZm91bmQgPSBoYXNEaXJlY3RTdWJzY3JpYmVyc0Zvcih0b3BpYykgfHwgaGFzRGlyZWN0U3Vic2NyaWJlcnNGb3IoQUxMX1NVQlNDUklCSU5HX01TRyksXG4gICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcblxuICAgICAgICB3aGlsZSAoICFmb3VuZCAmJiBwb3NpdGlvbiAhPT0gLTEgKXtcbiAgICAgICAgICAgIHRvcGljID0gdG9waWMuc3Vic3RyKCAwLCBwb3NpdGlvbiApO1xuICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG4gICAgICAgICAgICBmb3VuZCA9IGhhc0RpcmVjdFN1YnNjcmliZXJzRm9yKHRvcGljKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCBzeW5jLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIG1lc3NhZ2UgPSAodHlwZW9mIG1lc3NhZ2UgPT09ICdzeW1ib2wnKSA/IG1lc3NhZ2UudG9TdHJpbmcoKSA6IG1lc3NhZ2U7XG5cbiAgICAgICAgdmFyIGRlbGl2ZXIgPSBjcmVhdGVEZWxpdmVyeUZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICksXG4gICAgICAgICAgICBoYXNTdWJzY3JpYmVycyA9IG1lc3NhZ2VIYXNTdWJzY3JpYmVycyggbWVzc2FnZSApO1xuXG4gICAgICAgIGlmICggIWhhc1N1YnNjcmliZXJzICl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHN5bmMgPT09IHRydWUgKXtcbiAgICAgICAgICAgIGRlbGl2ZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoIGRlbGl2ZXIsIDAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaXNoZXMgdGhlIG1lc3NhZ2UsIHBhc3NpbmcgdGhlIGRhdGEgdG8gaXQncyBzdWJzY3JpYmVyc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBwdWJsaXNoXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBwdWJsaXNoXG4gICAgICogQHBhcmFtIHt9IGRhdGEgVGhlIGRhdGEgdG8gcGFzcyB0byBzdWJzY3JpYmVyc1xuICAgICAqIEByZXR1cm4geyBCb29sZWFuIH1cbiAgICAgKi9cbiAgICBQdWJTdWIucHVibGlzaCA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHJldHVybiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCBmYWxzZSwgUHViU3ViLmltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHVibGlzaGVzIHRoZSBtZXNzYWdlIHN5bmNocm9ub3VzbHksIHBhc3NpbmcgdGhlIGRhdGEgdG8gaXQncyBzdWJzY3JpYmVyc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBwdWJsaXNoU3luY1xuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gcHVibGlzaFxuICAgICAqIEBwYXJhbSB7fSBkYXRhIFRoZSBkYXRhIHRvIHBhc3MgdG8gc3Vic2NyaWJlcnNcbiAgICAgKiBAcmV0dXJuIHsgQm9vbGVhbiB9XG4gICAgICovXG4gICAgUHViU3ViLnB1Ymxpc2hTeW5jID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgcmV0dXJuIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIHRydWUsIFB1YlN1Yi5pbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZXMgdGhlIHBhc3NlZCBmdW5jdGlvbiB0byB0aGUgcGFzc2VkIG1lc3NhZ2UuIEV2ZXJ5IHJldHVybmVkIHRva2VuIGlzIHVuaXF1ZSBhbmQgc2hvdWxkIGJlIHN0b3JlZCBpZiB5b3UgbmVlZCB0byB1bnN1YnNjcmliZVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHN1YnNjcmliZSB0b1xuICAgICAqIEBwYXJhbSB7IEZ1bmN0aW9uIH0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGEgbmV3IG1lc3NhZ2UgaXMgcHVibGlzaGVkXG4gICAgICogQHJldHVybiB7IFN0cmluZyB9XG4gICAgICovXG4gICAgUHViU3ViLnN1YnNjcmliZSA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBmdW5jICl7XG4gICAgICAgIGlmICggdHlwZW9mIGZ1bmMgIT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVzc2FnZSA9ICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N5bWJvbCcpID8gbWVzc2FnZS50b1N0cmluZygpIDogbWVzc2FnZTtcblxuICAgICAgICAvLyBtZXNzYWdlIGlzIG5vdCByZWdpc3RlcmVkIHlldFxuICAgICAgICBpZiAoICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIG1lc3NhZ2VzLCBtZXNzYWdlICkgKXtcbiAgICAgICAgICAgIG1lc3NhZ2VzW21lc3NhZ2VdID0ge307XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JjaW5nIHRva2VuIGFzIFN0cmluZywgdG8gYWxsb3cgZm9yIGZ1dHVyZSBleHBhbnNpb25zIHdpdGhvdXQgYnJlYWtpbmcgdXNhZ2VcbiAgICAgICAgLy8gYW5kIGFsbG93IGZvciBlYXN5IHVzZSBhcyBrZXkgbmFtZXMgZm9yIHRoZSAnbWVzc2FnZXMnIG9iamVjdFxuICAgICAgICB2YXIgdG9rZW4gPSAndWlkXycgKyBTdHJpbmcoKytsYXN0VWlkKTtcbiAgICAgICAgbWVzc2FnZXNbbWVzc2FnZV1bdG9rZW5dID0gZnVuYztcblxuICAgICAgICAvLyByZXR1cm4gdG9rZW4gZm9yIHVuc3Vic2NyaWJpbmdcbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH07XG5cbiAgICBQdWJTdWIuc3Vic2NyaWJlQWxsID0gZnVuY3Rpb24oIGZ1bmMgKXtcbiAgICAgICAgcmV0dXJuIFB1YlN1Yi5zdWJzY3JpYmUoQUxMX1NVQlNDUklCSU5HX01TRywgZnVuYyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZXMgdGhlIHBhc3NlZCBmdW5jdGlvbiB0byB0aGUgcGFzc2VkIG1lc3NhZ2Ugb25jZVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVPbmNlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBzdWJzY3JpYmUgdG9cbiAgICAgKiBAcGFyYW0geyBGdW5jdGlvbiB9IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBhIG5ldyBtZXNzYWdlIGlzIHB1Ymxpc2hlZFxuICAgICAqIEByZXR1cm4geyBQdWJTdWIgfVxuICAgICAqL1xuICAgIFB1YlN1Yi5zdWJzY3JpYmVPbmNlID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGZ1bmMgKXtcbiAgICAgICAgdmFyIHRva2VuID0gUHViU3ViLnN1YnNjcmliZSggbWVzc2FnZSwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIC8vIGJlZm9yZSBmdW5jIGFwcGx5LCB1bnN1YnNjcmliZSBtZXNzYWdlXG4gICAgICAgICAgICBQdWJTdWIudW5zdWJzY3JpYmUoIHRva2VuICk7XG4gICAgICAgICAgICBmdW5jLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBQdWJTdWI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgc3Vic2NyaXB0aW9uc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgY2xlYXJBbGxTdWJzY3JpcHRpb25zXG4gICAgICovXG4gICAgUHViU3ViLmNsZWFyQWxsU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGNsZWFyQWxsU3Vic2NyaXB0aW9ucygpe1xuICAgICAgICBtZXNzYWdlcyA9IHt9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBzdWJzY3JpcHRpb25zIGJ5IHRoZSB0b3BpY1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgY2xlYXJBbGxTdWJzY3JpcHRpb25zXG4gICAgICogQHJldHVybiB7IGludCB9XG4gICAgICovXG4gICAgUHViU3ViLmNsZWFyU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGNsZWFyU3Vic2NyaXB0aW9ucyh0b3BpYyl7XG4gICAgICAgIHZhciBtO1xuICAgICAgICBmb3IgKG0gaW4gbWVzc2FnZXMpe1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlcywgbSkgJiYgbS5pbmRleE9mKHRvcGljKSA9PT0gMCl7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VzW21dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAgIENvdW50IHN1YnNjcmlwdGlvbnMgYnkgdGhlIHRvcGljXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBjb3VudFN1YnNjcmlwdGlvbnNcbiAgICAgKiBAcmV0dXJuIHsgQXJyYXkgfVxuICAgICovXG4gICAgUHViU3ViLmNvdW50U3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGNvdW50U3Vic2NyaXB0aW9ucyh0b3BpYyl7XG4gICAgICAgIHZhciBtO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgICAgdmFyIHRva2VuO1xuICAgICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgICBmb3IgKG0gaW4gbWVzc2FnZXMpIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKHRva2VuIGluIG1lc3NhZ2VzW21dKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgICBHZXRzIHN1YnNjcmlwdGlvbnMgYnkgdGhlIHRvcGljXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBnZXRTdWJzY3JpcHRpb25zXG4gICAgKi9cbiAgICBQdWJTdWIuZ2V0U3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGdldFN1YnNjcmlwdGlvbnModG9waWMpe1xuICAgICAgICB2YXIgbTtcbiAgICAgICAgdmFyIGxpc3QgPSBbXTtcbiAgICAgICAgZm9yIChtIGluIG1lc3NhZ2VzKXtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDApe1xuICAgICAgICAgICAgICAgIGxpc3QucHVzaChtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBzdWJzY3JpcHRpb25zXG4gICAgICpcbiAgICAgKiAtIFdoZW4gcGFzc2VkIGEgdG9rZW4sIHJlbW92ZXMgYSBzcGVjaWZpYyBzdWJzY3JpcHRpb24uXG4gICAgICpcblx0ICogLSBXaGVuIHBhc3NlZCBhIGZ1bmN0aW9uLCByZW1vdmVzIGFsbCBzdWJzY3JpcHRpb25zIGZvciB0aGF0IGZ1bmN0aW9uXG4gICAgICpcblx0ICogLSBXaGVuIHBhc3NlZCBhIHRvcGljLCByZW1vdmVzIGFsbCBzdWJzY3JpcHRpb25zIGZvciB0aGF0IHRvcGljIChoaWVyYXJjaHkpXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVPbmNlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIHwgRnVuY3Rpb24gfSB2YWx1ZSBBIHRva2VuLCBmdW5jdGlvbiBvciB0b3BpYyB0byB1bnN1YnNjcmliZSBmcm9tXG4gICAgICogQGV4YW1wbGUgLy8gVW5zdWJzY3JpYmluZyB3aXRoIGEgdG9rZW5cbiAgICAgKiB2YXIgdG9rZW4gPSBQdWJTdWIuc3Vic2NyaWJlKCdteXRvcGljJywgbXlGdW5jKTtcbiAgICAgKiBQdWJTdWIudW5zdWJzY3JpYmUodG9rZW4pO1xuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgd2l0aCBhIGZ1bmN0aW9uXG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKG15RnVuYyk7XG4gICAgICogQGV4YW1wbGUgLy8gVW5zdWJzY3JpYmluZyBmcm9tIGEgdG9waWNcbiAgICAgKiBQdWJTdWIudW5zdWJzY3JpYmUoJ215dG9waWMnKTtcbiAgICAgKi9cbiAgICBQdWJTdWIudW5zdWJzY3JpYmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgIHZhciBkZXNjZW5kYW50VG9waWNFeGlzdHMgPSBmdW5jdGlvbih0b3BpYykge1xuICAgICAgICAgICAgICAgIHZhciBtO1xuICAgICAgICAgICAgICAgIGZvciAoIG0gaW4gbWVzc2FnZXMgKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDAgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGEgZGVzY2VuZGFudCBvZiB0aGUgdG9waWMgZXhpc3RzOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNUb3BpYyAgICA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIHZhbHVlKSB8fCBkZXNjZW5kYW50VG9waWNFeGlzdHModmFsdWUpICksXG4gICAgICAgICAgICBpc1Rva2VuICAgID0gIWlzVG9waWMgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyxcbiAgICAgICAgICAgIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicsXG4gICAgICAgICAgICByZXN1bHQgPSBmYWxzZSxcbiAgICAgICAgICAgIG0sIG1lc3NhZ2UsIHQ7XG5cbiAgICAgICAgaWYgKGlzVG9waWMpe1xuICAgICAgICAgICAgUHViU3ViLmNsZWFyU3Vic2NyaXB0aW9ucyh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKCBtIGluIG1lc3NhZ2VzICl7XG4gICAgICAgICAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggbWVzc2FnZXMsIG0gKSApe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlc1ttXTtcblxuICAgICAgICAgICAgICAgIGlmICggaXNUb2tlbiAmJiBtZXNzYWdlW3ZhbHVlXSApe1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWVzc2FnZVt2YWx1ZV07XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAvLyB0b2tlbnMgYXJlIHVuaXF1ZSwgc28gd2UgY2FuIGp1c3Qgc3RvcCBoZXJlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoIHQgaW4gbWVzc2FnZSApe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlLCB0KSAmJiBtZXNzYWdlW3RdID09PSB2YWx1ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VbdF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn0pKTtcbiIsImltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IE5FV19HQU1FID0gJ25ldyBnYW1lJztcblxuZXhwb3J0IGNsYXNzIERPTU1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzZXRVcFBsYXlBZ2FpbkJ1dHRvbigpO1xuICAgIHNldE5hbWVDbGlja0xpc3RlbmVycygpO1xuICAgIHNldFVwUmVzZXRCdXR0b24oKTtcbiAgfVxuXG4gIHBvcHVsYXRlQWN0aXZlUGxheWVyc0JvYXJkKHBsYXllcikge1xuICAgIGNvbnN0IGJvYXJkID0gcGxheWVyLmdhbWVib2FyZC5ib2FyZDtcblxuICAgIGNvbnN0IGJvYXJkR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvYXJkR3JpZC5jbGFzc0xpc3QuYWRkKCdib2FyZC1ncmlkJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgaWYgKGJvYXJkW2ldW2pdID09PSAnaGl0Jykge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0ID0gJ2hpdC1zaGlwJztcbiAgICAgICAgfSBlbHNlIGlmIChib2FyZFtpXVtqXSA9PT0gJ2F0dGFja2VkJykge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0ID0gJ2F0dGFja2VkJztcblxuICAgICAgICAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGRvdC5jbGFzc0xpc3QuYWRkKCdkb3QnKTtcbiAgICAgICAgICBpdGVtLmFwcGVuZChkb3QpO1xuICAgICAgICB9IGVsc2UgaWYgKGJvYXJkW2ldW2pdICE9PSBudWxsKSB7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QgPSAnc2hpcCc7XG4gICAgICAgIH1cblxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWl0ZW0nKTtcblxuICAgICAgICBib2FyZEdyaWQuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwbGF5ZXIuZWxlbWVudFF1ZXJ5KTtcblxuICAgIGJvYXJkQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGJvYXJkQ29udGFpbmVyLmFwcGVuZChib2FyZEdyaWQpO1xuICB9XG5cbiAgcG9wdWxhdGVPcHBvbmVudHNCb2FyZChwbGF5ZXIpIHtcbiAgICBjb25zdCBib2FyZCA9IHBsYXllci5nYW1lYm9hcmQuYm9hcmQ7XG5cbiAgICBjb25zdCBib2FyZEdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2FyZEdyaWQuY2xhc3NMaXN0LmFkZCgnYm9hcmQtZ3JpZCcpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhpLCBqKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9yZW1vdmUgZWxzZSBsYXRlciwgcGxheWVycyBzaG91bGRuJ3Qgc2VlIGVhY2ggb3RoZXJzIGJvYXRzXG4gICAgICAgIGlmIChib2FyZFtpXVtqXSA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdCA9ICdoaXQtc2hpcCc7XG4gICAgICAgIH0gZWxzZSBpZiAoYm9hcmRbaV1bal0gPT09ICdhdHRhY2tlZCcpIHtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdCA9ICdhdHRhY2tlZCc7XG5cbiAgICAgICAgICBjb25zdCBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBkb3QuY2xhc3NMaXN0LmFkZCgnZG90Jyk7XG4gICAgICAgICAgaXRlbS5hcHBlbmQoZG90KTtcbiAgICAgICAgfSBlbHNlIGlmIChib2FyZFtpXVtqXSAhPT0gbnVsbCkge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0ID0gJ3NoaXAnO1xuICAgICAgICB9XG5cbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdib2FyZC1pdGVtJyk7XG5cbiAgICAgICAgYm9hcmRHcmlkLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGxheWVyLmVsZW1lbnRRdWVyeSk7XG5cbiAgICBib2FyZENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBib2FyZENvbnRhaW5lci5hcHBlbmQoYm9hcmRHcmlkKTtcbiAgfVxuXG4gIHBvcHVsYXRlQm9hcmQoZmlyc3RQbGF5ZXIsIHNlY29uZFBsYXllcikge1xuICAgIGlmIChmaXJzdFBsYXllci5pc0FjdGl2ZSkge1xuICAgICAgdGhpcy5wb3B1bGF0ZUFjdGl2ZVBsYXllcnNCb2FyZChmaXJzdFBsYXllcik7XG4gICAgICB0aGlzLnBvcHVsYXRlT3Bwb25lbnRzQm9hcmQoc2Vjb25kUGxheWVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wb3B1bGF0ZUFjdGl2ZVBsYXllcnNCb2FyZChmaXJzdFBsYXllcik7XG4gICAgICB0aGlzLnBvcHVsYXRlT3Bwb25lbnRzQm9hcmQoc2Vjb25kUGxheWVyKTtcbiAgICB9XG4gIH1cblxuICBzaG93RW5kRGlhbG9nKHdpbm5lcikge1xuICAgIGNvbnN0IGVuZERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmQtZGlhbG9nJyk7XG4gICAgY29uc29sZS5sb2coJ3dpbicpO1xuXG4gICAgaWYgKHdpbm5lci50eXBlID09PSAnY29tcHV0ZXInKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5kLWRpYWxvZyAubWVzc2FnZScpLnRleHRDb250ZW50ID1cbiAgICAgICAgJ1lvdSBsb3NlLiA6Lyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmQtZGlhbG9nIC5tZXNzYWdlJykudGV4dENvbnRlbnQgPVxuICAgICAgICAnWW91IHdvbiwgY29uZ3JhdHVsYXRpb25zISc7XG4gICAgfVxuXG4gICAgZW5kRGlhbG9nLnNob3dNb2RhbCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldFVwUGxheUFnYWluQnV0dG9uKCkge1xuICBjb25zdCBwbGF5QWdhaW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheS1hZ2Fpbi1idXR0b24nKTtcblxuICBwbGF5QWdhaW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgUHViU3ViLnB1Ymxpc2goTkVXX0dBTUUpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZC1kaWFsb2cnKS5jbG9zZSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0TmFtZUNsaWNrTGlzdGVuZXJzKCkge1xuICBjb25zdCBjaGFuZ2VOYW1lRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW5nZS1uYW1lcy1kaWFsb2cnKTtcblxuICBjb25zdCBmaXJzdE5hbWVQbGF5ZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLmZpcnN0LXBsYXllciAucGxheWVycy1uYW1lJ1xuICApO1xuICBjb25zdCBzZWNvbmROYW1lUGxheWVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy5zZWNvbmQtcGxheWVyIC5wbGF5ZXJzLW5hbWUnXG4gICk7XG5cbiAgZmlyc3ROYW1lUGxheWVyTmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjaGFuZ2VOYW1lRGlhbG9nLnNob3dNb2RhbCgpO1xuICB9KTtcblxuICBzZWNvbmROYW1lUGxheWVyTmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjaGFuZ2VOYW1lRGlhbG9nLnNob3dNb2RhbCgpO1xuICB9KTtcblxuICBjb25zdCBjaGFuZ2VOYW1lRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2UtbmFtZXMtZGlhbG9nIGZvcm0nKTtcblxuICBjaGFuZ2VOYW1lRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdXBkYXRlTmFtZXMoXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlyc3QtbmFtZS1pbnB1dCcpLnZhbHVlLFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlY29uZC1uYW1lLWlucHV0JykudmFsdWVcbiAgICApO1xuXG4gICAgY2hhbmdlTmFtZUZvcm0ucmVzZXQoKTtcbiAgICBjaGFuZ2VOYW1lRGlhbG9nLmNsb3NlKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVOYW1lcyhuYW1lMSwgbmFtZTIpIHtcbiAgY29uc3QgZmlyc3ROYW1lUGxheWVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy5maXJzdC1wbGF5ZXIgLnBsYXllcnMtbmFtZSdcbiAgKTtcbiAgY29uc3Qgc2Vjb25kTmFtZVBsYXllck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcuc2Vjb25kLXBsYXllciAucGxheWVycy1uYW1lJ1xuICApO1xuXG4gIGZpcnN0TmFtZVBsYXllck5hbWUudGV4dENvbnRlbnQgPSBuYW1lMS50cmltKCkgPT09ICcnID8gJ1BsYXllciAxJyA6IG5hbWUxO1xuICBzZWNvbmROYW1lUGxheWVyTmFtZS50ZXh0Q29udGVudCA9IG5hbWUyLnRyaW0oKSA9PT0gJycgPyAnUGxheWVyIDInIDogbmFtZTI7XG5cbiAgY29uc3QgQ0hBTkdFX05BTUVTID0gJ2NoYW5nZSBuYW1lcyc7XG4gIFB1YlN1Yi5wdWJsaXNoKENIQU5HRV9OQU1FUywgW25hbWUxLCBuYW1lMl0pO1xufVxuXG5mdW5jdGlvbiBzZXRVcFJlc2V0QnV0dG9uKCkge1xuICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNldC1idXR0b24nKTtcblxuICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBQdWJTdWIucHVibGlzaChORVdfR0FNRSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnO1xuXG5leHBvcnQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDEwIH0sICgpID0+IEFycmF5KDEwKS5maWxsKG51bGwpKTtcbiAgICB0aGlzLm1pc3NlZCA9IFtdO1xuICB9XG5cbiAgI2lzRW1wdHkoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLmJvYXJkW3hdW3ldID09PSBudWxsO1xuICB9XG5cbiAgcGxhY2VTaGlwKHNoaXAsIHgsIHksIG9yaWVudGF0aW9uKSB7XG4gICAgLy9jaGVja2luZyBpZiB0aGVyZSBpcyBmcmVlIHNwYWNlIGluIGFuZCBhcm91bmQgdGhlIGNob3NlbiBhcmVhXG4gICAgLy9jYXNlIGZvciBhIGhvcml6b250YWxseSBhbGlnbmVkIHNoaXBcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgLy9jaGVja2luZyBpZiBzaGlwIGlzIHRvbyBsYXJnZVxuICAgICAgaWYgKHkgKyBzaGlwLmxlbmd0aCA+IDEwKSByZXR1cm47XG5cbiAgICAgIGZvciAobGV0IGkgPSBNYXRoLm1heCh4IC0gMSwgMCk7IGkgPD0gTWF0aC5taW4oOSwgeCArIDEpOyBpKyspIHtcbiAgICAgICAgZm9yIChcbiAgICAgICAgICBsZXQgaiA9IE1hdGgubWF4KDAsIHkgLSAxKTtcbiAgICAgICAgICBqIDw9IE1hdGgubWluKDksIHkgKyBzaGlwLmxlbmd0aCAtIDEpO1xuICAgICAgICAgIGorK1xuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoIXRoaXMuI2lzRW1wdHkoaSwgaikpIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvL3BsYWNpbmcgYSBzaGlwXG4gICAgICBmb3IgKGxldCBqID0geTsgaiA8IHkgKyBzaGlwLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbeF1bal0gPSBzaGlwO1xuICAgICAgfVxuICAgIH1cbiAgICAvL2Nhc2UgZm9yIGEgdmVydGljYWxseSBhbGlnbmVkIHNoaXBcbiAgICBlbHNlIHtcbiAgICAgIC8vY2hlY2tpbmcgaWYgc2hpcCBpcyB0b28gbGFyZ2VcbiAgICAgIGlmICh4ICsgc2hpcC5sZW5ndGggPiAxMCkgcmV0dXJuO1xuXG4gICAgICBmb3IgKGxldCBqID0gTWF0aC5tYXgoMCwgeSAtIDEpOyBqIDw9IE1hdGgubWluKDksIHkgKyAxKTsgaisrKSB7XG4gICAgICAgIGZvciAoXG4gICAgICAgICAgbGV0IGkgPSBNYXRoLm1heCgwLCB4IC0gMSk7XG4gICAgICAgICAgaSA8PSBNYXRoLm1pbig5LCB4ICsgc2hpcC5sZW5ndGggLSAxKTtcbiAgICAgICAgICBpKytcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLiNpc0VtcHR5KGksIGopKSByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy9wbGFjaW5nIGEgc2hpcFxuICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLmJvYXJkW2ldW3ldID0gc2hpcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICBpZiAodGhpcy5ib2FyZFt4XVt5XSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5ib2FyZFt4XVt5XSA9ICdhdHRhY2tlZCc7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHRoaXMuYm9hcmRbeF1beV0gIT09IG51bGwgJiZcbiAgICAgIHRoaXMuYm9hcmRbeF1beV0gIT09ICdoaXQnICYmXG4gICAgICB0aGlzLmJvYXJkW3hdW3ldICE9PSAnYXR0YWNrZWQnXG4gICAgKSB7XG4gICAgICB0aGlzLmJvYXJkW3hdW3ldLmhpdCgpO1xuICAgICAgdGhpcy5ib2FyZFt4XVt5XSA9ICdoaXQnO1xuXG4gICAgICBjb25zdCBTSElQX0hJVCA9ICdzaGlwIGhpdCc7XG4gICAgICBQdWJTdWIucHVibGlzaChTSElQX0hJVCk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IFNISVBfTUlTU0VEID0gJ3NoaXAgbWlzc2VkJztcbiAgICBQdWJTdWIucHVibGlzaChTSElQX01JU1NFRCk7XG5cbiAgICB0aGlzLm1pc3NlZC5wdXNoKFs2LCA0XSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaGF2ZUFsbEJlZW5TdW5rKCkge1xuICAgIHJldHVybiAhdGhpcy5ib2FyZC5zb21lKChyb3cpID0+XG4gICAgICByb3cuc29tZSgoaXRlbSkgPT4gaXRlbSAhPT0gbnVsbCAmJiBpdGVtICE9PSAnaGl0JyAmJiBpdGVtICE9PSAnYXR0YWNrZWQnKVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcblxuLy9Ud28gdHlwZXMgb2YgcGxheWVyczogcmVhbCBhbmQgY29tcHV0ZXIgcGxheWVyXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgdHlwZSwgZWxlbWVudFF1ZXJ5LCBpc0FjdGl2ZSA9IGZhbHNlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuZWxlbWVudFF1ZXJ5ID0gZWxlbWVudFF1ZXJ5O1xuICAgIHRoaXMuaXNBY3RpdmUgPSBpc0FjdGl2ZTtcbiAgfVxuXG4gIHNldEFzQWN0aXZlKCkge1xuICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgc2V0QXNPcHBvbmVudCgpIHtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICBjaGFuZ2VOYW1lKG5ld05hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMudGltZXNIaXQgPSAwO1xuICAgIHRoaXMuaGFzQmVlblN1bmsgPSBmYWxzZTtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICB0aGlzLnRpbWVzSGl0ICs9IDE7XG5cbiAgICBpZiAodGhpcy50aW1lc0hpdCA9PT0gdGhpcy5sZW5ndGgpIHRoaXMuaGFzQmVlblN1bmsgPSB0cnVlO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLmhhc0JlZW5TdW5rO1xuICB9XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWJsb2NrLWRpbWVuc2lvbjogbWluKDUwcHgsIGNhbGMoNHZ3KSk7XG4gIC0tcHJpbWFyeS1jb2xvcjogIzRmMjA5YjtcbiAgLS1saWdodGVyLWNvbG9yOiAjN2U4N2ZmO1xufVxuXG4qIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi8qRGVmYXVsdCBzdHlsZXMqL1xuYm9keSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxucCxcbnVsW2NsYXNzXSxcbm9sW2NsYXNzXSxcbmxpLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmJsb2NrcXVvdGUsXG5kbCxcbmRkIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcbn1cblxuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMnB4IDE4cHg7XG59XG5cbmhlYWRlciBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmZpcnN0LXBsYXllcixcbi5zZWNvbmQtcGxheWVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDUwJTtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uYm9hcmQtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCB2YXIoLS1ibG9jay1kaW1lbnNpb24pKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIHZhcigtLWJsb2NrLWRpbWVuc2lvbikpO1xufVxuXG4uYm9hcmQtaXRlbSB7XG4gIGhlaWdodDogdmFyKC0tYmxvY2stZGltZW5zaW9uKTtcbiAgd2lkdGg6IHZhcigtLWJsb2NrLWRpbWVuc2lvbik7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG59XG5cbi5ib2FyZC1pdGVtOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlci1jb2xvcik7XG59XG5cbi5oaXQtc2hpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmctdG9wOiAtNHB4O1xufVxuXG4uaGl0LXNoaXA6OmJlZm9yZSxcbi5oaXQtc2hpcDo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuLmhpdC1zaGlwOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5oaXQtc2hpcDo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4uYXR0YWNrZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmRvdCB7XG4gIHdpZHRoOiBjYWxjKHZhcigtLWJsb2NrLWRpbWVuc2lvbikgLyAzKTtcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJsb2NrLWRpbWVuc2lvbikgLyAzKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuXG5kaWFsb2cge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5lbmQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbn1cblxuLmVuZC1kaWFsb2cgcCB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi5lbmQtZGlhbG9nIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uY2hhbmdlLW5hbWVzLWRpYWxvZyBmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5jaGFuZ2UtbmFtZXMtZGlhbG9nIGlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbn1cblxuLmNoYW5nZS1uYW1lcy1kaWFsb2cgaW5wdXRbdHlwZT0ndGV4dCddIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcbn1cblxuLmNoYW5nZS1uYW1lcy1kaWFsb2cgaW5wdXRbdHlwZT0nc3VibWl0J10ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5idXR0b246aG92ZXIsXG4ucGxheWVycy1uYW1lOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwLjg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx1Q0FBdUM7RUFDdkMsd0JBQXdCO0VBQ3hCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQSxpQkFBaUI7QUFDakI7Ozs7Ozs7Ozs7Ozs7O0VBY0UsU0FBUztBQUNYOztBQUVBOztFQUVFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseURBQXlEO0VBQ3pELHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qiw2QkFBNkI7RUFDN0Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWJsb2NrLWRpbWVuc2lvbjogbWluKDUwcHgsIGNhbGMoNHZ3KSk7XFxuICAtLXByaW1hcnktY29sb3I6ICM0ZjIwOWI7XFxuICAtLWxpZ2h0ZXItY29sb3I6ICM3ZTg3ZmY7XFxufVxcblxcbioge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qRGVmYXVsdCBzdHlsZXMqL1xcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxucCxcXG51bFtjbGFzc10sXFxub2xbY2xhc3NdLFxcbmxpLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDEycHggMThweDtcXG59XFxuXFxuaGVhZGVyIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogOHB4IDIwcHg7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmZpcnN0LXBsYXllcixcXG4uc2Vjb25kLXBsYXllciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA1MCU7XFxuICBnYXA6IDEycHg7XFxufVxcblxcbi5ib2FyZC1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgdmFyKC0tYmxvY2stZGltZW5zaW9uKSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgdmFyKC0tYmxvY2stZGltZW5zaW9uKSk7XFxufVxcblxcbi5ib2FyZC1pdGVtIHtcXG4gIGhlaWdodDogdmFyKC0tYmxvY2stZGltZW5zaW9uKTtcXG4gIHdpZHRoOiB2YXIoLS1ibG9jay1kaW1lbnNpb24pO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG59XFxuXFxuLmJvYXJkLWl0ZW06aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyLWNvbG9yKTtcXG59XFxuXFxuLmhpdC1zaGlwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZy10b3A6IC00cHg7XFxufVxcblxcbi5oaXQtc2hpcDo6YmVmb3JlLFxcbi5oaXQtc2hpcDo6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5oaXQtc2hpcDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLmhpdC1zaGlwOjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cXG4uYXR0YWNrZWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRvdCB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1ibG9jay1kaW1lbnNpb24pIC8gMyk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYmxvY2stZGltZW5zaW9uKSAvIDMpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG59XFxuXFxuZGlhbG9nIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5lbmQtZGlhbG9nLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmVuZC1kaWFsb2cgcCB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG4uZW5kLWRpYWxvZyBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLmNoYW5nZS1uYW1lcy1kaWFsb2cgZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4uY2hhbmdlLW5hbWVzLWRpYWxvZyBpbnB1dCB7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxufVxcblxcbi5jaGFuZ2UtbmFtZXMtZGlhbG9nIGlucHV0W3R5cGU9J3RleHQnXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xcbn1cXG5cXG4uY2hhbmdlLW5hbWVzLWRpYWxvZyBpbnB1dFt0eXBlPSdzdWJtaXQnXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbmJ1dHRvbjpob3ZlcixcXG4ucGxheWVycy1uYW1lOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IERPTU1hbmFnZXIgfSBmcm9tICcuL2RvbU1hbmFnZXIuanMnO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXIuanMnO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vc2hpcC5qcyc7XG5pbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7XG5cbmNvbnN0IFNISVBfSElUID0gJ3NoaXAgaGl0JztcbmNvbnN0IFNISVBfTUlTU0VEID0gJ3NoaXAgbWlzc2VkJztcbmNvbnN0IE5FV19HQU1FID0gJ25ldyBnYW1lJztcbmNvbnN0IENIQU5HRV9OQU1FUyA9ICdjaGFuZ2UgbmFtZXMnO1xuXG5sZXQgZG9tID0gbmV3IERPTU1hbmFnZXIoKTtcbmxldCBmaXJzdFBsYXllcjtcbmxldCBzZWNvbmRQbGF5ZXI7XG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZVdpdGhCb3QoKSB7XG4gIGZpcnN0UGxheWVyID0gbmV3IFBsYXllcihcbiAgICAnUGxheWVyIDEnLFxuICAgICdyZWFsJyxcbiAgICAnLmZpcnN0LXBsYXllciAuYm9hcmQtZ3JpZC1jb250YWluZXInLFxuICAgIHRydWVcbiAgKTtcbiAgc2Vjb25kUGxheWVyID0gbmV3IFBsYXllcihcbiAgICAnUGxheWVyIDInLFxuICAgICdjb21wdXRlcicsXG4gICAgJy5zZWNvbmQtcGxheWVyIC5ib2FyZC1ncmlkLWNvbnRhaW5lcidcbiAgKTtcblxuICAvL2NvZGUgZm9yIG1hbnVhbCBzaGlwIGNyZWF0aW9uIHNob3VsZCBiZSByZW1vdmVkIGFmdGVyIGVuYWJsaW5nIHVzZXIgdG8gcGxhY2Ugc2hpcHMgYnkgaGltc2VsZlxuICBmaXJzdFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKG5ldyBTaGlwKDEpLCA3LCAyLCAnaG9yaXpvbnRhbCcpO1xuICBmaXJzdFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKG5ldyBTaGlwKDIpLCAwLCAyLCAnaG9yaXpvbnRhbCcpO1xuICBmaXJzdFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKG5ldyBTaGlwKDMpLCA0LCAyLCAnaG9yaXpvbnRhbCcpO1xuICBmaXJzdFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKG5ldyBTaGlwKDQpLCAzLCA4LCAndmVydGljYWwnKTtcbiAgZmlyc3RQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChuZXcgU2hpcCg1KSwgNSwgNiwgJ3ZlcnRpY2FsJyk7XG5cbiAgc2Vjb25kUGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAobmV3IFNoaXAoMSksIDcsIDIsICdob3Jpem9udGFsJyk7XG4gIHNlY29uZFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKG5ldyBTaGlwKDIpLCAwLCAyLCAnaG9yaXpvbnRhbCcpO1xuICBzZWNvbmRQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChuZXcgU2hpcCgzKSwgMiwgOCwgJ3ZlcnRpY2FsJyk7XG4gIHNlY29uZFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKG5ldyBTaGlwKDQpLCA2LCA0LCAnaG9yaXpvbnRhbCcpO1xuICBzZWNvbmRQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChuZXcgU2hpcCg1KSwgNSwgMCwgJ3ZlcnRpY2FsJyk7XG5cbiAgZG9tLnBvcHVsYXRlQm9hcmQoZmlyc3RQbGF5ZXIsIHNlY29uZFBsYXllcik7XG59XG5cbmZ1bmN0aW9uIG1ha2VCb3RNb3ZlKCkge1xuICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gIHdoaWxlIChcbiAgICBmaXJzdFBsYXllci5nYW1lYm9hcmQuYm9hcmRbeF1beV0gPT09IG51bGwgfHxcbiAgICBmaXJzdFBsYXllci5nYW1lYm9hcmQuYm9hcmRbeF1beV0gaW5zdGFuY2VvZiBTaGlwXG4gICkge1xuICAgIGZpcnN0UGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yV2lubmVyKCkge1xuICBpZiAoZmlyc3RQbGF5ZXIuZ2FtZWJvYXJkLmhhdmVBbGxCZWVuU3VuaygpKSBkb20uc2hvd0VuZERpYWxvZyhzZWNvbmRQbGF5ZXIpO1xuICBlbHNlIGlmIChzZWNvbmRQbGF5ZXIuZ2FtZWJvYXJkLmhhdmVBbGxCZWVuU3VuaygpKVxuICAgIGRvbS5zaG93RW5kRGlhbG9nKGZpcnN0UGxheWVyKTtcbn1cblxuUHViU3ViLnN1YnNjcmliZShTSElQX0hJVCwgKCkgPT4ge1xuICBpZiAoc2Vjb25kUGxheWVyLmlzQWN0aXZlID09PSB0cnVlKSB7XG4gICAgbWFrZUJvdE1vdmUoKTtcbiAgfVxuXG4gIGRvbS5wb3B1bGF0ZUJvYXJkKGZpcnN0UGxheWVyLCBzZWNvbmRQbGF5ZXIpO1xuICBjaGVja0Zvcldpbm5lcigpO1xufSk7XG5cblB1YlN1Yi5zdWJzY3JpYmUoU0hJUF9NSVNTRUQsICgpID0+IHtcbiAgaWYgKGZpcnN0UGxheWVyLmlzQWN0aXZlKSB7XG4gICAgZmlyc3RQbGF5ZXIuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICBzZWNvbmRQbGF5ZXIuaXNBY3RpdmUgPSB0cnVlO1xuXG4gICAgbWFrZUJvdE1vdmUoKTtcbiAgfSBlbHNlIHtcbiAgICBmaXJzdFBsYXllci5pc0FjdGl2ZSA9IHRydWU7XG4gICAgc2Vjb25kUGxheWVyLmlzQWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICBkb20ucG9wdWxhdGVCb2FyZChmaXJzdFBsYXllciwgc2Vjb25kUGxheWVyKTtcbiAgY2hlY2tGb3JXaW5uZXIoKTtcbn0pO1xuXG5QdWJTdWIuc3Vic2NyaWJlKE5FV19HQU1FLCAoKSA9PiBzdGFydEdhbWVXaXRoQm90KCkpO1xuXG5QdWJTdWIuc3Vic2NyaWJlKENIQU5HRV9OQU1FUywgKG1lc3NhZ2UsIG5ld05hbWVzKSA9PiB7XG4gIGZpcnN0UGxheWVyLmNoYW5nZU5hbWUobmV3TmFtZXNbMF0pO1xuICBmaXJzdFBsYXllci5jaGFuZ2VOYW1lKG5ld05hbWVzWzFdKTtcbn0pO1xuXG5zdGFydEdhbWVXaXRoQm90KCk7XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiaWQiLCJfayIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwicm9vdCIsImZhY3RvcnkiLCJQdWJTdWIiLCJjb25zb2xlIiwid2FybiIsImRlZmluZSIsImFtZCIsIndpbmRvdyIsIm1lc3NhZ2VzIiwibGFzdFVpZCIsIkFMTF9TVUJTQ1JJQklOR19NU0ciLCJoYXNLZXlzIiwib2JqIiwia2V5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwidGhyb3dFeGNlcHRpb24iLCJleCIsInJlVGhyb3dFeGNlcHRpb24iLCJjYWxsU3Vic2NyaWJlcldpdGhEZWxheWVkRXhjZXB0aW9ucyIsInN1YnNjcmliZXIiLCJtZXNzYWdlIiwic2V0VGltZW91dCIsImNhbGxTdWJzY3JpYmVyV2l0aEltbWVkaWF0ZUV4Y2VwdGlvbnMiLCJkZWxpdmVyTWVzc2FnZSIsIm9yaWdpbmFsTWVzc2FnZSIsIm1hdGNoZWRNZXNzYWdlIiwiaW1tZWRpYXRlRXhjZXB0aW9ucyIsInN1YnNjcmliZXJzIiwiY2FsbFN1YnNjcmliZXIiLCJzIiwiY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiIsImRlbGl2ZXJOYW1lc3BhY2VkIiwidG9waWMiLCJTdHJpbmciLCJwb3NpdGlvbiIsImxhc3RJbmRleE9mIiwic3Vic3RyIiwiaGFzRGlyZWN0U3Vic2NyaWJlcnNGb3IiLCJmb3VuZCIsIkJvb2xlYW4iLCJtZXNzYWdlSGFzU3Vic2NyaWJlcnMiLCJwdWJsaXNoIiwic3luYyIsImRlbGl2ZXIiLCJoYXNTdWJzY3JpYmVycyIsInB1Ymxpc2hTeW5jIiwic3Vic2NyaWJlIiwiZnVuYyIsInRva2VuIiwic3Vic2NyaWJlQWxsIiwic3Vic2NyaWJlT25jZSIsInVuc3Vic2NyaWJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJjbGVhckFsbFN1YnNjcmlwdGlvbnMiLCJjbGVhclN1YnNjcmlwdGlvbnMiLCJtIiwiaW5kZXhPZiIsImNvdW50U3Vic2NyaXB0aW9ucyIsImNvdW50IiwiZ2V0U3Vic2NyaXB0aW9ucyIsInZhbHVlIiwiZGVzY2VuZGFudFRvcGljRXhpc3RzIiwiaXNUb3BpYyIsImlzVG9rZW4iLCJpc0Z1bmN0aW9uIiwicmVzdWx0IiwidCIsInN0eWxlIiwiTkVXX0dBTUUiLCJET01NYW5hZ2VyIiwiY29uc3RydWN0b3IiLCJzZXRVcFBsYXlBZ2FpbkJ1dHRvbiIsInNldE5hbWVDbGlja0xpc3RlbmVycyIsInNldFVwUmVzZXRCdXR0b24iLCJwb3B1bGF0ZUFjdGl2ZVBsYXllcnNCb2FyZCIsInBsYXllciIsImJvYXJkIiwiZ2FtZWJvYXJkIiwiYm9hcmRHcmlkIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaiIsImRvdCIsImFwcGVuZCIsImFwcGVuZENoaWxkIiwiYm9hcmRDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiZWxlbWVudFF1ZXJ5IiwiaW5uZXJIVE1MIiwicG9wdWxhdGVPcHBvbmVudHNCb2FyZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZWNlaXZlQXR0YWNrIiwicG9wdWxhdGVCb2FyZCIsImZpcnN0UGxheWVyIiwic2Vjb25kUGxheWVyIiwiaXNBY3RpdmUiLCJzaG93RW5kRGlhbG9nIiwid2lubmVyIiwiZW5kRGlhbG9nIiwibG9nIiwidHlwZSIsInRleHRDb250ZW50Iiwic2hvd01vZGFsIiwicGxheUFnYWluQnV0dG9uIiwiY2xvc2UiLCJjaGFuZ2VOYW1lRGlhbG9nIiwiZmlyc3ROYW1lUGxheWVyTmFtZSIsInNlY29uZE5hbWVQbGF5ZXJOYW1lIiwiY2hhbmdlTmFtZUZvcm0iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidXBkYXRlTmFtZXMiLCJyZXNldCIsIm5hbWUxIiwibmFtZTIiLCJ0cmltIiwiQ0hBTkdFX05BTUVTIiwicmVzZXRCdXR0b24iLCJHYW1lYm9hcmQiLCJBcnJheSIsImZyb20iLCJmaWxsIiwibWlzc2VkIiwiaXNFbXB0eSIsIiNpc0VtcHR5IiwieCIsInkiLCJwbGFjZVNoaXAiLCJzaGlwIiwib3JpZW50YXRpb24iLCJNYXRoIiwibWF4IiwibWluIiwiaGl0IiwiU0hJUF9ISVQiLCJTSElQX01JU1NFRCIsImhhdmVBbGxCZWVuU3VuayIsInNvbWUiLCJyb3ciLCJQbGF5ZXIiLCJuYW1lIiwic2V0QXNBY3RpdmUiLCJzZXRBc09wcG9uZW50IiwiY2hhbmdlTmFtZSIsIm5ld05hbWUiLCJTaGlwIiwidGltZXNIaXQiLCJoYXNCZWVuU3VuayIsImlzU3VuayIsImRvbSIsInN0YXJ0R2FtZVdpdGhCb3QiLCJtYWtlQm90TW92ZSIsImZsb29yIiwicmFuZG9tIiwiY2hlY2tGb3JXaW5uZXIiLCJuZXdOYW1lcyJdLCJzb3VyY2VSb290IjoiIn0=