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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
  root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');
module.exports = DataView;

/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
  hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
  hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
  hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
  hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
module.exports = Hash;

/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
  listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
  listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
  listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
  listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
module.exports = ListCache;

/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
  root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');
module.exports = Map;

/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
  mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
  mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
  mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
  mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
module.exports = MapCache;

/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
  root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');
module.exports = Promise;

/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
  root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');
module.exports = Set;

/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
  setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
  setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
    length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
module.exports = SetCache;

/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
  stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
  stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
  stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
  stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
  stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
module.exports = Stack;

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;
module.exports = Symbol;

/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;
module.exports = Uint8Array;

/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
  root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');
module.exports = WeakMap;

/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
    length = array == null ? 0 : array.length,
    resIndex = 0,
    result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
module.exports = arrayFilter;

/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
  isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
  isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
  isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
  isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
  isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
    isArg = !isArr && isArguments(value),
    isBuff = !isArr && !isArg && isBuffer(value),
    isType = !isArr && !isArg && !isBuff && isTypedArray(value),
    skipIndexes = isArr || isArg || isBuff || isType,
    result = skipIndexes ? baseTimes(value.length, String) : [],
    length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (
    // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' ||
    // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') ||
    // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
    // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
module.exports = arrayLikeKeys;

/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
    length = values.length,
    offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
module.exports = arrayPush;

/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
    length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
module.exports = arraySome;

/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
module.exports = assocIndexOf;

/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
  isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
module.exports = baseGetAllKeys;

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
  getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
  objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
  undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
module.exports = baseGetTag;

/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
  isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}
module.exports = baseIsArguments;

/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
  isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
module.exports = baseIsEqual;

/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
  equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
  equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
  equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
  getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
  isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
  isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
  isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
  arrayTag = '[object Array]',
  objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
    othIsArr = isArray(other),
    objTag = objIsArr ? arrayTag : getTag(object),
    othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag,
    othIsObj = othTag == objectTag,
    isSameTag = objTag == othTag;
  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
      othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
        othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
module.exports = baseIsEqualDeep;

/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
  isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
  isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
  toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
  objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
module.exports = baseIsNative;

/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
  isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
  isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
  arrayTag = '[object Array]',
  boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  errorTag = '[object Error]',
  funcTag = '[object Function]',
  mapTag = '[object Map]',
  numberTag = '[object Number]',
  objectTag = '[object Object]',
  regexpTag = '[object RegExp]',
  setTag = '[object Set]',
  stringTag = '[object String]',
  weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
  dataViewTag = '[object DataView]',
  float32Tag = '[object Float32Array]',
  float64Tag = '[object Float64Array]',
  int8Tag = '[object Int8Array]',
  int16Tag = '[object Int16Array]',
  int32Tag = '[object Int32Array]',
  uint8Tag = '[object Uint8Array]',
  uint8ClampedTag = '[object Uint8ClampedArray]',
  uint16Tag = '[object Uint16Array]',
  uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
module.exports = baseIsTypedArray;

/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
  nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}
module.exports = baseKeys;

/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
    result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
module.exports = baseTimes;

/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}
module.exports = baseUnary;

/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}
module.exports = cacheHas;

/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];
module.exports = coreJsData;

/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
  arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
  cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
  COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
    arrLength = array.length,
    othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
    result = true,
    seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;
  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
      othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function (othValue, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}
module.exports = equalArrays;

/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
  Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
  eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
  equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
  mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
  setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
  COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  errorTag = '[object Error]',
  mapTag = '[object Map]',
  numberTag = '[object Number]',
  regexpTag = '[object RegExp]',
  setTag = '[object Set]',
  stringTag = '[object String]',
  symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]',
  dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
  symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';
    case mapTag:
      var convert = mapToArray;
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
module.exports = equalByTag;

/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
    objProps = getAllKeys(object),
    objLength = objProps.length,
    othProps = getAllKeys(other),
    othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
      othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
      othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}
module.exports = equalObjects;

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;
module.exports = freeGlobal;

/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
  getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
  keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}
module.exports = getAllKeys;

/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
module.exports = getMapData;

/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
  getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}
module.exports = getNative;

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
    tag = value[symToStringTag];
  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
module.exports = getRawTag;

/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
  stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
module.exports = getSymbols;

/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
  Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
  Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
  Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
  WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
  baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
  toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
  objectTag = '[object Object]',
  promiseTag = '[object Promise]',
  setTag = '[object Set]',
  weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
  mapCtorString = toSource(Map),
  promiseCtorString = toSource(Promise),
  setCtorString = toSource(Set),
  weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function (value) {
    var result = baseGetTag(value),
      Ctor = result == objectTag ? value.constructor : undefined,
      ctorString = Ctor ? toSource(Ctor) : '';
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
module.exports = getTag;

/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}
module.exports = getValue;

/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}
module.exports = hashClear;

/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
module.exports = hashDelete;

/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
module.exports = hashGet;

/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
module.exports = hashHas;

/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}
module.exports = hashSet;

/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
module.exports = isIndex;

/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
module.exports = isKeyable;

/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
module.exports = isMasked;

/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
    proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}
module.exports = isPrototype;

/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
module.exports = listCacheClear;

/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
    index = assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
module.exports = listCacheDelete;

/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
    index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}
module.exports = listCacheGet;

/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
module.exports = listCacheHas;

/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
    index = assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
module.exports = listCacheSet;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
  ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
  Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}
module.exports = mapCacheClear;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}
module.exports = mapCacheDelete;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
module.exports = mapCacheGet;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
module.exports = mapCacheHas;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
    size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
module.exports = mapCacheSet;

/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
    result = Array(map.size);
  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}
module.exports = mapToArray;

/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');
module.exports = nativeCreate;

/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);
module.exports = nativeKeys;

/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;
    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();
module.exports = nodeUtil;

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}
module.exports = objectToString;

/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}
module.exports = overArg;

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
module.exports = setCacheAdd;

/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}
module.exports = setCacheHas;

/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
    result = Array(set.size);
  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}
module.exports = setToArray;

/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
module.exports = stackClear;

/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
    result = data['delete'](key);
  this.size = data.size;
  return result;
}
module.exports = stackDelete;

/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}
module.exports = stackGet;

/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}
module.exports = stackHas;

/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
  Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
  MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
module.exports = stackSet;

/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}
module.exports = toSource;

/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
module.exports = eq;

/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
  isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
module.exports = isArguments;

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
module.exports = isArray;

/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
  isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
module.exports = isArrayLike;

/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
  stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;
module.exports = isBuffer;

/***/ }),

/***/ "./node_modules/lodash/isEqual.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isEqual.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}
module.exports = isEqual;

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
  isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
  funcTag = '[object Function]',
  genTag = '[object GeneratorFunction]',
  proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
module.exports = isFunction;

/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
module.exports = isLength;

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}
module.exports = isObject;

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}
module.exports = isObjectLike;

/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
  baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
  nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
module.exports = isTypedArray;

/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
  baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
  isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
module.exports = keys;

/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}
module.exports = stubArray;

/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}
module.exports = stubFalse;

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

/***/ "./src/bot.js":
/*!********************!*\
  !*** ./src/bot.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bot: () => (/* binding */ Bot)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_1__);



//used when the game mode with a bot is selected
//makes calculated moves
class Bot {
  constructor(opponentsGameboard) {
    this.opponentsGameboard = opponentsGameboard;
    this.attackQueue = [];
  }
  async attack() {
    //requests a dialog with an animation during a bot attack
    const BOT_MOVE = 'bot is making a move';
    pubsub_js__WEBPACK_IMPORTED_MODULE_1___default().publish(BOT_MOVE);

    //delays move calculation and board updates by 800 ms
    await delay(500);
    let orientation = null;
    let x;
    let y;

    //if attack queue is empty, position of the next attack is randomly generated
    if (this.attackQueue.length !== 0) {
      x = this.attackQueue[0].x;
      y = this.attackQueue[0].y;
      orientation = this.attackQueue[0].orientation;
      this.attackQueue.shift();
    } else {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);

      //making sure position hasn't been attacked yet
      while (!(this.opponentsGameboard.board[x][y] === null || this.opponentsGameboard.board[x][y] instanceof _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)) {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
      }
    }

    //if the attack was successful, diagonal adjacent position are placed in a queue of upcoming attacks
    if (this.opponentsGameboard.receiveAttack(x, y)) {
      const directions = [{
        x: -1,
        y: 0
      }, {
        x: 0,
        y: 1
      }, {
        x: 1,
        y: 0
      }, {
        x: 0,
        y: -1
      }];
      for (const d of directions) {
        const targetedX = x + d.x;
        const targetedY = y + d.y;

        //diagonal adjacent positions of a successfully hit position are queued
        if (targetedX >= 0 && targetedX <= 9 && targetedY >= 0 && targetedY <= 9) {
          this.attackQueue.push({
            x: targetedX,
            y: targetedY,
            orientation: d.x === 0 ? 'horizontal' : 'vertical'
          });
        }
      }

      //looping through the attack queue to remove elements of an inadequate orientation
      if (orientation !== null) {
        for (let i = 0; i < this.attackQueue.length; i++) {
          if (this.attackQueue[i].orientation !== orientation) {
            this.attackQueue.splice(i, 1);
          }
        }
      }
    }
    return [x, y];
  }
}
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_2__);



const NEW_GAME = 'new game';
const NEXT_PLAYER = 'next players move';
const BOT_MOVE = 'bot is making a move';
const editBoardDialog = document.querySelector('.edit-board-dialog');
class DOMManager {
  constructor() {
    //'play again' button appears in a dialog after game end
    const playAgainButton = document.querySelector('.play-again-button');
    playAgainButton.addEventListener('click', () => {
      pubsub_js__WEBPACK_IMPORTED_MODULE_2___default().publish(NEW_GAME);
      document.querySelector('.end-dialog').close();
    });
    setNameClickListeners();

    //reset button
    const resetButton = document.querySelector('.reset-button');
    resetButton.addEventListener('click', () => {
      pubsub_js__WEBPACK_IMPORTED_MODULE_2___default().publish(NEW_GAME);
    });

    //header button to show start menu
    const startMenuButton = document.querySelector('.start-menu-button');
    startMenuButton.addEventListener('click', () => {
      this.showStartMenu();
    });
    this.showStartMenu();
  }
  populateActivePlayersBoard(player) {
    const board = player.gameboard.board;
    const boardGrid = document.createElement('div');
    boardGrid.classList.add('board-grid');

    //iterates over player's board to create a board in HTML out of it
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
        } else if (board[i][j] !== null && player.type !== 'computer') {
          //second condition makes sure the real player doesn't get a glimpse of bot's board

          item.classList = 'ship';
          item.id = `${i}-${j}`;
          const hasShipAbove = i > 0 ? player.gameboard.board[i - 1][j] instanceof _ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship : false;
          const hasShipLeft = j > 0 ? player.gameboard.board[i][j - 1] instanceof _ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship : false;

          //enables moving a ship by dragging its first item at the start of a game
          if (player.gameboard.isEditable && !hasShipAbove && !hasShipLeft) {
            item.draggable = true;
            item.classList.add('moveable-ship-item');
            item.addEventListener('dragstart', event => {
              event.dataTransfer.setData('text/plain', event.target.id);
              const surrounding = player.gameboard.getBoatLengthsFromPosition(i, j);

              //adds padding needed to make the dragged item size of the ship it is part of
              if (surrounding.below > 0) item.style.paddingBottom = `${surrounding.below * 100}%`;
              if (surrounding.rightwards > 0) item.style.paddingRight = `${surrounding.rightwards * 100}%`;
            });

            //removes padding on a previously dragged item
            item.addEventListener('dragend', () => {
              item.style.paddingBottom = '0px';
              item.style.paddingRight = '0px';
            });
          }
        }

        //makes ships moveable at start of the game
        if (player.gameboard.isEditable) {
          item.addEventListener('dragover', event => {
            event.preventDefault();
          });
          item.addEventListener('drop', event => {
            event.preventDefault();
            const droppedId = event.dataTransfer.getData('text');
            const xCoordinate = droppedId.charAt(0);
            const yCoordinate = droppedId.charAt(2);
            player.gameboard.moveShip(parseInt(xCoordinate), parseInt(yCoordinate), i, j);
            this.populateActivePlayersBoard(player);
          });
        }
        item.classList.add('board-item');
        boardGrid.appendChild(item);
      }
    }
    document.querySelector(`${player.elementQuery} .players-name`).style.color = '#34495e';
    const boardContainer = document.querySelector(`${player.elementQuery}  .board-grid-container`);
    boardContainer.innerHTML = '';
    boardContainer.append(boardGrid);
  }
  populateOpponentsBoard(player) {
    const board = player.gameboard.board;
    const boardGrid = document.createElement('div');
    boardGrid.classList.add('board-grid');

    //iterates over player's board to create a board in HTML out of it
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const item = document.createElement('div');
        if (!player.gameboard.isEditable) {
          item.addEventListener('click', () => {
            player.gameboard.receiveAttack(i, j);
          });
        }
        if (board[i][j] === 'hit') {
          item.classList = 'hit-ship';
        } else if (board[i][j] === 'attacked') {
          item.classList = 'attacked';
          const dot = document.createElement('div');
          dot.classList.add('dot');
          item.append(dot);
        }
        item.classList.add('board-item');
        boardGrid.appendChild(item);
      }
    }
    document.querySelector(`${player.elementQuery} .players-name`).style.color = '#fff';
    const boardContainer = document.querySelector(`${player.elementQuery}  .board-grid-container`);
    boardContainer.innerHTML = '';
    boardContainer.append(boardGrid);
  }
  populateBoard(firstPlayer, secondPlayer, playerSwitched = false) {
    if (firstPlayer.isActive) {
      this.populateActivePlayersBoard(firstPlayer);
      this.populateOpponentsBoard(secondPlayer);
      if (firstPlayer.gameboard.isEditable) this.showEditMessage(firstPlayer);
    } else {
      this.populateActivePlayersBoard(secondPlayer);
      this.populateOpponentsBoard(firstPlayer);
      if (secondPlayer.type === 'real' && secondPlayer.gameboard.isEditable) this.showEditMessage(secondPlayer);
    }

    //request a 'pass device dialog' to be shown when the active player is switched if both players are real
    if (secondPlayer.type === 'real' && playerSwitched) this.showPassDeviceDialog(firstPlayer.isActive ? firstPlayer.name : secondPlayer.name);else if (secondPlayer.type === 'computer') editBoardDialog.close();
  }

  //displayed at end of the game
  showEndDialog(winner) {
    const endDialog = document.querySelector('.end-dialog');
    if (winner.type === 'computer') {
      document.querySelector('.end-dialog .message').textContent = 'You lost. :/';
    } else {
      document.querySelector('.end-dialog .message').textContent = `Congratulations ${winner.name}, you won!`;
    }
    endDialog.showModal();
  }

  //shows game mode options
  showStartMenu() {
    const REAL_PLAYERS_GAME = 'start game with real players';
    const GAME_WITH_BOT = 'start game with a bot';
    const startDialog = document.querySelector('.start-dialog');
    startDialog.showModal();
    document.querySelector('.real-opponent-button').addEventListener('click', () => {
      pubsub_js__WEBPACK_IMPORTED_MODULE_2___default().publish(REAL_PLAYERS_GAME);
      startDialog.close();
    });
    document.querySelector('.game-with-bot-button').addEventListener('click', () => {
      pubsub_js__WEBPACK_IMPORTED_MODULE_2___default().publish(GAME_WITH_BOT);
      startDialog.close();
    });
  }

  //displayed when it's opponents turn to make a move
  showPassDeviceDialog(nextPlayerName) {
    const passDeviceDialog = document.querySelector('.pass-device-dialog');
    const nextPlayerNameButton = document.querySelector('.pass-device-dialog button span');
    const nextPlayerNameHeader = document.querySelector('.pass-device-dialog h2 span');
    const devicePassedButton = document.querySelector('.pass-device-dialog button');
    nextPlayerNameHeader.textContent = nextPlayerName.toUpperCase();
    nextPlayerNameButton.textContent = nextPlayerName.toUpperCase();
    passDeviceDialog.showModal();
    devicePassedButton.addEventListener('click', () => {
      passDeviceDialog.close();
    });
  }

  //displays a message that the player may move their ships around the board
  showEditMessage(player) {
    const editBoardDialogContainer = document.querySelector('.edit-board-dialog-container');
    editBoardDialogContainer.innerHTML = '';
    const message = document.createElement('p');
    message.textContent = 'You may move ships around the board now.';
    const doneButton = document.createElement('button');
    doneButton.textContent = 'DONE';
    editBoardDialogContainer.append(message, doneButton);
    editBoardDialog.show();
    doneButton.addEventListener('click', () => {
      editBoardDialog.close();
      player.gameboard.isEditable = false;
      pubsub_js__WEBPACK_IMPORTED_MODULE_2___default().publish(NEXT_PLAYER);
    });
  }
}

//players' names may be edited at any time by clicking the name below the board
function setNameClickListeners() {
  const changeNameDialog = document.querySelector('.change-names-dialog');
  const playersNames = document.getElementsByClassName('players-name');
  for (const element of playersNames) {
    element.addEventListener('click', () => {
      changeNameDialog.showModal();
    });
  }
  const changeNameForm = document.querySelector('.change-names-dialog form');
  changeNameForm.addEventListener('submit', event => {
    event.preventDefault();
    updateNames(document.querySelector('#first-name-input').value, document.querySelector('#second-name-input').value);
    changeNameForm.reset();
    changeNameDialog.close();
  });
  document.querySelector('.cancel-button').addEventListener('click', () => {
    changeNameDialog.close();
  });
}

//sends request to update the names
function updateNames(name1, name2) {
  const firstNamePlayerName = document.querySelector('.first-player .players-name');
  const secondNamePlayerName = document.querySelector('.second-player .players-name');
  firstNamePlayerName.textContent = name1.trim() === '' ? 'Player 1' : name1;
  secondNamePlayerName.textContent = name2.trim() === '' ? 'Player 2' : name2;
  const CHANGE_NAMES = 'change names';
  pubsub_js__WEBPACK_IMPORTED_MODULE_2___default().publish(CHANGE_NAMES, [name1, name2]);
}

//shows dialog while bot is making a move
pubsub_js__WEBPACK_IMPORTED_MODULE_2___default().subscribe(BOT_MOVE, () => {
  const botMoveDialog = document.querySelector('.bot-attack-dialog');
  botMoveDialog.showModal();
  setTimeout(() => botMoveDialog.close(), 600);
});

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
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__);



class Gameboard {
  constructor() {
    this.board = Array.from({
      length: 10
    }, () => Array(10).fill(null));
    this.isEditable = true;
  }

  //checks if a position is empty
  isEmpty(x, y) {
    return this.board[x][y] === null;
  }
  placeShip(ship, x, y, orientation) {
    //checking if there is free space in and around the chosen area
    //case for a horizontally aligned ship
    if (orientation === 'horizontal') {
      //checking if ship is too large
      if (y + ship.length > 10) return false;
      if (!this.canShipBePlacedHorizontally(ship.length, x, y)) return false;

      //placing a ship
      for (let j = y; j < y + ship.length; j++) {
        this.board[x][j] = ship;
      }
      return true;
    }
    //case for a vertically aligned ship
    else {
      //checking if ship is too large
      if (x + ship.length > 10) return false;
      if (!this.canShipBePlacedVertically(ship.length, x, y)) return false;

      //placing a ship
      for (let i = x; i < x + ship.length; i++) {
        this.board[i][y] = ship;
      }
      return true;
    }
  }
  canShipBePlacedHorizontally(length, x, y, shipException = 0) {
    for (let i = Math.max(x - 1, 0); i <= Math.min(9, x + 1); i++) {
      for (let j = Math.max(0, y - 1); j <= Math.min(9, y + length); j++) {
        if (!this.isEmpty(i, j) && this.board[i][j] && !lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default()(this.board[i][j], shipException)) return false;
      }
    }
    return true;
  }
  canShipBePlacedVertically(length, x, y, shipException = 0) {
    for (let j = Math.max(0, y - 1); j <= Math.min(9, y + 1); j++) {
      for (let i = Math.max(0, x - 1); i <= Math.min(9, x + length); i++) {
        if (!this.isEmpty(i, j) && !lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default()(this.board[i][j], shipException)) {
          return false;
        }
      }
    }
    return true;
  }
  receiveAttack(x, y) {
    //directions for adjacent diagonal neighbors
    const directions = [{
      x: -1,
      y: -1
    }, {
      x: -1,
      y: 1
    }, {
      x: 1,
      y: -1
    }, {
      x: 1,
      y: 1
    }];
    let wasHit = false;
    if (this.board[x][y] === null) {
      this.board[x][y] = 'attacked';
    } else if (this.board[x][y] !== null && this.board[x][y] !== 'hit' && this.board[x][y] !== 'attacked') {
      this.board[x][y].hit();
      this.board[x][y] = 'hit';

      //marking adjacent diagonal neighbors as attacked
      for (const d of directions) {
        const targetedX = x + d.x;
        const targetedY = y + d.y;
        if (targetedX >= 0 && targetedX <= 9 && targetedY >= 0 && targetedY <= 9) {
          this.board[targetedX][targetedY] = 'attacked';
        }
        wasHit = true;
      }
      const SAME_PLAYER = 'same players move';
      pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(SAME_PLAYER);
      return wasHit;
    }
    const NEXT_PLAYER = 'next players move';
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(NEXT_PLAYER);
    return false;
  }
  haveAllBeenSunk() {
    return !this.board.some(row => row.some(item => item !== null && item !== 'hit' && item !== 'attacked'));
  }

  //checks if position is within the board
  #isPositionValid(x, y) {
    return x >= 0 && x <= 9 && y >= 0 && y <= 9;
  }

  //determines position of a moved ship
  getMovedShipPositions(originalX, originalY, newX, newY) {
    const directions = [{
      x: -1,
      y: 0
    }, {
      x: 1,
      y: 0
    }, {
      x: 0,
      y: 1
    }, {
      x: 0,
      y: -1
    }];
    let oldPositions = [[originalX, originalY]];
    let newPositions = [[newX, newY]];
    for (let directionIndex = 0; directionIndex <= 3; directionIndex++) {
      let xMove = directions[directionIndex].x;
      let yMove = directions[directionIndex].y;

      //function isEmpty may fail if (x,y) if out of board bounds, so it must be in second place
      while (this.#isPositionValid(originalX + xMove, originalY + yMove) && !this.isEmpty(originalX + xMove, originalY + yMove)) {
        const newXItem = newX + xMove;
        const newYItem = newY + yMove;
        if (!this.#isPositionValid(newXItem, newYItem)) return false;
        if (this.isEmpty(newXItem, newYItem) || lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default()(this.board[newXItem][newYItem], this.board[originalX][originalY])) {
          newPositions.push([newXItem, newYItem]);
          oldPositions.push([originalX + xMove, originalY + yMove]);
        } else {
          return false;
        }
        xMove = directions[directionIndex].x + xMove;
        yMove = directions[directionIndex].y + yMove;
      }
    }
    if (newPositions.length === 1) {
      if (!this.canShipBePlacedHorizontally(newPositions.length, newPositions[0][0], newPositions[0][1], this.board[originalX][originalY])) return false;
      return {
        newPositions: newPositions,
        oldPositions: oldPositions
      };
    }
    //horizontal
    else if (newPositions[0][0] === newPositions[1][0]) {
      newPositions.sort((a, b) => a[1] - b[1]);
      if (!this.canShipBePlacedHorizontally(newPositions.length, newPositions[0][0], newPositions[0][1], this.board[originalX][originalY])) return false;
      oldPositions.sort((a, b) => a[1] - b[1]);
    }
    //vertical
    else if (newPositions[0][1] === newPositions[1][1]) {
      newPositions.sort((a, b) => a[0] - b[0]);
      if (!this.canShipBePlacedVertically(newPositions.length, newPositions[0][0], newPositions[0][1], this.board[originalX][originalY])) return false;
      oldPositions.sort((a, b) => a[0] - b[0]);
    }
    return {
      newPositions: newPositions,
      oldPositions: oldPositions
    };
  }

  //logic for moving the ship should be located here, not in dommanager, focus of dommanager should be the DOM, displaying data
  moveShip(originalX, originalY, newX, newY) {
    if (originalX === newX && originalY === newY || !this.isEmpty(newX, newY) && !lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default()(this.board[originalX][originalY], this.board[newX][newY])) return false;
    const positions = this.getMovedShipPositions(originalX, originalY, newX, newY);
    if (!positions) return false;

    //remove the old ship
    for (let i = 0; i < positions.oldPositions.length; i++) {
      const [xOld, yOld] = positions.oldPositions[i];
      this.board[xOld][yOld] = null;
    }
    this.placeShip(new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(positions.newPositions.length), positions.newPositions[0][0], positions.newPositions[0][1], positions.newPositions.length === 1 ? 'horizontal' : positions.newPositions[0][0] === positions.newPositions[1][0] ? 'horizontal' : 'vertical');
    return true;
  }

  //returns number of adjacent items on each side of the chosen position
  getBoatLengthsFromPosition(x, y) {
    const directions = [{
      x: -1,
      y: 0,
      quantity: 0
    }, {
      x: 0,
      y: 1,
      quantity: 0
    }, {
      x: 1,
      y: 0,
      quantity: 0
    }, {
      x: 0,
      y: -1,
      quantity: 0
    }];
    for (let directionIndex = 0; directionIndex <= 3; directionIndex++) {
      let currentX = x + directions[directionIndex].x;
      let currentY = y + directions[directionIndex].y;
      while (this.#isPositionValid(currentX, currentY) && !this.isEmpty(currentX, currentY)) {
        directions[directionIndex].quantity++;
        currentX += directions[directionIndex].x;
        currentY += directions[directionIndex].y;
      }
    }
    return {
      above: directions[0].quantity,
      rightwards: directions[1].quantity,
      below: directions[2].quantity,
      leftwards: directions[3].quantity
    };
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
/* harmony import */ var _bot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bot.js */ "./src/bot.js");



//Two types of players: real and computer player
class Player {
  constructor(name, type, elementQuery, isActive, opponentsBoard = null) {
    this.name = name;
    this.type = type;
    this.gameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard();
    this.elementQuery = elementQuery;
    this.isActive = isActive;
    if (opponentsBoard !== null && type === 'computer') {
      this.bot = new _bot_js__WEBPACK_IMPORTED_MODULE_1__.Bot(opponentsBoard);
    }
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./move-icon.svg */ "./src/move-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --block-dimension: min(50px, calc(4vw));
  --primary-color: #34495e;
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

/*Background animation*/
body,
.start-dialog {
  background: radial-gradient(circle, #b1afff, #bbe9ff, #fffed3);
  animation: pulseBackground 6s ease-in-out infinite;
}

@keyframes pulseBackground {
  0%,
  100% {
    background-size: 100% 100%;
  }
  50% {
    background-size: 200% 200%;
  }
}

header {
  display: flex;
  justify-content: space-between;
  padding: 12px 18px;
}

.header-buttons button:first-of-type {
  margin-right: 10px;
}

header button,
.start-dialog button,
.device-passed-button,
.edit-board-dialog button {
  border: none;
  border-radius: 20px;
  font-weight: bold;
  padding: 10px 20px;
}

header button,
.start-dialog button {
  background-color: #fff;
  color: #000;
}

.device-passed-button,
.edit-board-dialog button {
  background-color: var(--primary-color);
  color: #fff;
}

.start-dialog {
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  border: none;
}

.start-dialog button {
  padding: 10px px;
}

.start-dialog h1 {
  font-size: 2.4em;
}

.start-dialog-content,
.pass-device-dialog-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: min(40%, 300px);
}

.pass-device-dialog {
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  border: none;
}

.edit-board-dialog {
  position: fixed;
  bottom: 10px;
  border-radius: 20px;
  border: 0;
}

.edit-board-dialog-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
}

.query-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
}

.query-container p {
  text-align: center;
  margin-bottom: 20px;
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
  border: 1px solid var(--primary-color);
}

.board-item:hover,
.start-dialog button:hover {
  cursor: pointer;
  opacity: 0.8;
}

.ship {
  background-color: var(--primary-color);
}

.moveable-ship-item {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: calc(var(--block-dimension) / 2);
  background-repeat: no-repeat;
  background-position: center;
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
  background-color: var(--primary-color);
}

.end-dialog,
.change-names-dialog,
.bot-attack-dialog {
  border: none;
  border-radius: 20px;
}

.bot-attack-dialog-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.process-animation {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--primary-color);
  animation: move 0.6s ease-in-out infinite;
  margin: 0 30%;
}

@keyframes move {
  0% {
    align-self: baseline;
  }
  100% {
    align-self: flex-end;
  }
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

.change-names-dialog input,
.change-names-dialog button {
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
  margin-top: 8px;
}

button:hover,
.players-name:hover {
  cursor: pointer;
  opacity: 0.8;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --block-dimension: min(50px, calc(4vw));\n  --primary-color: #34495e;\n}\n\n* {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n/*Default styles*/\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nul[class],\nol[class],\nli,\nfigure,\nfigcaption,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: min-content 1fr;\n}\n\n/*Background animation*/\nbody,\n.start-dialog {\n  background: radial-gradient(circle, #b1afff, #bbe9ff, #fffed3);\n  animation: pulseBackground 6s ease-in-out infinite;\n}\n\n@keyframes pulseBackground {\n  0%,\n  100% {\n    background-size: 100% 100%;\n  }\n  50% {\n    background-size: 200% 200%;\n  }\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 18px;\n}\n\n.header-buttons button:first-of-type {\n  margin-right: 10px;\n}\n\nheader button,\n.start-dialog button,\n.device-passed-button,\n.edit-board-dialog button {\n  border: none;\n  border-radius: 20px;\n  font-weight: bold;\n  padding: 10px 20px;\n}\n\nheader button,\n.start-dialog button {\n  background-color: #fff;\n  color: #000;\n}\n\n.device-passed-button,\n.edit-board-dialog button {\n  background-color: var(--primary-color);\n  color: #fff;\n}\n\n.start-dialog {\n  background-color: #fff;\n  width: 100vw;\n  height: 100vh;\n  margin: 0 auto;\n  border: none;\n}\n\n.start-dialog button {\n  padding: 10px px;\n}\n\n.start-dialog h1 {\n  font-size: 2.4em;\n}\n\n.start-dialog-content,\n.pass-device-dialog-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  gap: min(40%, 300px);\n}\n\n.pass-device-dialog {\n  background-color: #fff;\n  width: 100vw;\n  height: 100vh;\n  margin: 0 auto;\n  border: none;\n}\n\n.edit-board-dialog {\n  position: fixed;\n  bottom: 10px;\n  border-radius: 20px;\n  border: 0;\n}\n\n.edit-board-dialog-container {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  align-items: center;\n}\n\n.query-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 8px;\n}\n\n.query-container p {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\nmain {\n  display: flex;\n}\n\n.first-player,\n.second-player {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 50%;\n  gap: 12px;\n}\n\n.board-grid {\n  display: grid;\n  grid-template-columns: repeat(10, var(--block-dimension));\n  grid-template-rows: repeat(10, var(--block-dimension));\n}\n\n.board-item {\n  height: var(--block-dimension);\n  width: var(--block-dimension);\n  border: 1px solid var(--primary-color);\n}\n\n.board-item:hover,\n.start-dialog button:hover {\n  cursor: pointer;\n  opacity: 0.8;\n}\n\n.ship {\n  background-color: var(--primary-color);\n}\n\n.moveable-ship-item {\n  background-image: url('./move-icon.svg');\n  background-size: calc(var(--block-dimension) / 2);\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.hit-ship {\n  position: relative;\n  border: 1px solid black;\n  padding-top: -4px;\n}\n\n.hit-ship::before,\n.hit-ship::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 100%;\n  height: 3px;\n  background-color: var(--primary-color);\n}\n\n.hit-ship::before {\n  transform: rotate(45deg);\n}\n\n.hit-ship::after {\n  transform: rotate(-45deg);\n}\n\n.attacked {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.dot {\n  width: calc(var(--block-dimension) / 3);\n  height: calc(var(--block-dimension) / 3);\n  border-radius: 50%;\n  background-color: var(--primary-color);\n}\n\n.end-dialog,\n.change-names-dialog,\n.bot-attack-dialog {\n  border: none;\n  border-radius: 20px;\n}\n\n.bot-attack-dialog-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n\n.process-animation {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: var(--primary-color);\n  animation: move 0.6s ease-in-out infinite;\n  margin: 0 30%;\n}\n\n@keyframes move {\n  0% {\n    align-self: baseline;\n  }\n  100% {\n    align-self: flex-end;\n  }\n}\n\n.end-dialog-container {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.end-dialog p {\n  font-size: 1.5em;\n}\n\n.end-dialog button {\n  background-color: var(--primary-color);\n  border: none;\n  border-radius: 20px;\n  color: #fff;\n  font-weight: bold;\n  padding: 8px;\n}\n\n.change-names-dialog form {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.change-names-dialog input,\n.change-names-dialog button {\n  border-radius: 20px;\n  border: none;\n  padding: 8px 16px;\n}\n\n.change-names-dialog input[type='text'] {\n  background-color: #e9e9e9;\n}\n\n.change-names-dialog input[type='submit'] {\n  background-color: var(--primary-color);\n  font-weight: bold;\n  color: #fff;\n  margin-top: 8px;\n}\n\nbutton:hover,\n.players-name:hover {\n  cursor: pointer;\n  opacity: 0.8;\n}\n"],"sourceRoot":""}]);
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

/***/ }),

/***/ "./src/move-icon.svg":
/*!***************************!*\
  !*** ./src/move-icon.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6b7f6d76df27d9667a76.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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




const REAL_PLAYERS_GAME = 'start game with real players';
const GAME_WITH_BOT = 'start game with a bot';
const SAME_PLAYER = 'same players move';
const NEXT_PLAYER = 'next players move';
const NEW_GAME = 'new game';
const CHANGE_NAMES = 'change names';

//places the ship at a random position on the board
function randomizeShips(player) {
  for (let i = 1; i <= 5; i++) {
    let shipPlaced = false;
    while (!shipPlaced) {
      shipPlaced = player.gameboard.placeShip(new _ship_js__WEBPACK_IMPORTED_MODULE_2__.Ship(i), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.random() > 0.5 ? 'horizontal' : 'vertical');
    }
  }
}
let dom = new _domManager_js__WEBPACK_IMPORTED_MODULE_0__.DOMManager();
let firstPlayer;
let secondPlayer;
function startGame(firstPlayerType, secondPlayerType) {
  firstPlayer = new _player_js__WEBPACK_IMPORTED_MODULE_1__.Player('Player 1', firstPlayerType, '.first-player', true);
  secondPlayer = new _player_js__WEBPACK_IMPORTED_MODULE_1__.Player('Player 2', secondPlayerType, '.second-player', false, firstPlayer.gameboard);
  if (secondPlayerType === 'computer') secondPlayer.gameboard.isEditable = false;
  randomizeShips(firstPlayer);
  randomizeShips(secondPlayer);
  dom.populateBoard(firstPlayer, secondPlayer);
}

//checks if all boats of either player have been sunk
function checkForWinner() {
  if (firstPlayer.gameboard.haveAllBeenSunk()) dom.showEndDialog(secondPlayer);else if (secondPlayer.gameboard.haveAllBeenSunk()) dom.showEndDialog(firstPlayer);
}

//when game mode with two real players is chosen
pubsub_js__WEBPACK_IMPORTED_MODULE_3___default().subscribe(REAL_PLAYERS_GAME, () => {
  startGame('real', 'real');
});

//when game mode of game with a bot is chosen
pubsub_js__WEBPACK_IMPORTED_MODULE_3___default().subscribe(GAME_WITH_BOT, () => {
  startGame('real', 'computer');
});

//ship was hit, same player makes the next move
pubsub_js__WEBPACK_IMPORTED_MODULE_3___default().subscribe(SAME_PLAYER, () => {
  if (secondPlayer.isActive === true && secondPlayer.type === 'computer') {
    secondPlayer.bot.attack();
  }
  dom.populateBoard(firstPlayer, secondPlayer);
  checkForWinner();
});

//ship was missed, opponent makes the next move, becomes the active player
pubsub_js__WEBPACK_IMPORTED_MODULE_3___default().subscribe(NEXT_PLAYER, () => {
  if (firstPlayer.isActive) {
    firstPlayer.isActive = false;
    secondPlayer.isActive = true;
    if (secondPlayer.type === 'computer') {
      secondPlayer.bot.attack();

      //makes real player's board uneditable when it's bot's turn (real players always makes the first move)
      firstPlayer.gameboard.isEditable = false;
    }
  } else {
    firstPlayer.isActive = true;
    secondPlayer.isActive = false;
  }
  dom.populateBoard(firstPlayer, secondPlayer, true);
  checkForWinner();
});

//when a new game is requested
pubsub_js__WEBPACK_IMPORTED_MODULE_3___default().subscribe(NEW_GAME, () => startGame(firstPlayer.type, secondPlayer.type));

//change of players' names requested
pubsub_js__WEBPACK_IMPORTED_MODULE_3___default().subscribe(CHANGE_NAMES, (message, newNames) => {
  firstPlayer.changeName(newNames[0]);
  firstPlayer.changeName(newNames[1]);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLG1CQUFtQixVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksT0FBTyxZQUFZLGFBQWEsT0FBTyxLQUFLLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFFBQVEsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFB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VyxDQUFDb0YsVUFBVSxDQUFDWSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDbkNoRyxXQUFXLENBQUNvRixVQUFVLENBQUNZLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTWFwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fUHJvbWlzZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU2V0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TZXRDYWNoZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3RhY2suanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fVWludDhBcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fV2Vha01hcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5UHVzaC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlTb21lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc0VxdWFsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNFcXVhbERlZXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVVuYXJ5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZXF1YWxBcnJheXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsQnlUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0VmFsdWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hDbGVhci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEdldC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEhhcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaFNldC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNJbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc01hc2tlZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBUb0FycmF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25vZGVVdGlsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb3ZlckFyZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2V0Q2FjaGVBZGQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldENhY2hlSGFzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRUb0FycmF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0NsZWFyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0RlbGV0ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tHZXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrSGFzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja1NldC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9Tb3VyY2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZXEuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0J1ZmZlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0VxdWFsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNMZW5ndGguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9rZXlzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJBcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zdHViRmFsc2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9wdWJzdWItanMvc3JjL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2JvdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVNYW5hZ2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBEYXRhVmlldyA9IGdldE5hdGl2ZShyb290LCAnRGF0YVZpZXcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhVmlldztcbiIsInZhciBoYXNoQ2xlYXIgPSByZXF1aXJlKCcuL19oYXNoQ2xlYXInKSxcbiAgICBoYXNoRGVsZXRlID0gcmVxdWlyZSgnLi9faGFzaERlbGV0ZScpLFxuICAgIGhhc2hHZXQgPSByZXF1aXJlKCcuL19oYXNoR2V0JyksXG4gICAgaGFzaEhhcyA9IHJlcXVpcmUoJy4vX2hhc2hIYXMnKSxcbiAgICBoYXNoU2V0ID0gcmVxdWlyZSgnLi9faGFzaFNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoO1xuIiwidmFyIGxpc3RDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlQ2xlYXInKSxcbiAgICBsaXN0Q2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVEZWxldGUnKSxcbiAgICBsaXN0Q2FjaGVHZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVHZXQnKSxcbiAgICBsaXN0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVIYXMnKSxcbiAgICBsaXN0Q2FjaGVTZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RDYWNoZTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG4iLCJ2YXIgbWFwQ2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX21hcENhY2hlQ2xlYXInKSxcbiAgICBtYXBDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX21hcENhY2hlRGVsZXRlJyksXG4gICAgbWFwQ2FjaGVHZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZUdldCcpLFxuICAgIG1hcENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVIYXMnKSxcbiAgICBtYXBDYWNoZVNldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcENhY2hlO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXQ7XG4iLCJ2YXIgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpLFxuICAgIHNldENhY2hlQWRkID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVBZGQnKSxcbiAgICBzZXRDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX3NldENhY2hlSGFzJyk7XG5cbi8qKlxuICpcbiAqIENyZWF0ZXMgYW4gYXJyYXkgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIHVuaXF1ZSB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW3ZhbHVlc10gVGhlIHZhbHVlcyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU2V0Q2FjaGUodmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzID09IG51bGwgPyAwIDogdmFsdWVzLmxlbmd0aDtcblxuICB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHRoaXMuYWRkKHZhbHVlc1tpbmRleF0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTZXRDYWNoZWAuXG5TZXRDYWNoZS5wcm90b3R5cGUuYWRkID0gU2V0Q2FjaGUucHJvdG90eXBlLnB1c2ggPSBzZXRDYWNoZUFkZDtcblNldENhY2hlLnByb3RvdHlwZS5oYXMgPSBzZXRDYWNoZUhhcztcblxubW9kdWxlLmV4cG9ydHMgPSBTZXRDYWNoZTtcbiIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBzdGFja0NsZWFyID0gcmVxdWlyZSgnLi9fc3RhY2tDbGVhcicpLFxuICAgIHN0YWNrRGVsZXRlID0gcmVxdWlyZSgnLi9fc3RhY2tEZWxldGUnKSxcbiAgICBzdGFja0dldCA9IHJlcXVpcmUoJy4vX3N0YWNrR2V0JyksXG4gICAgc3RhY2tIYXMgPSByZXF1aXJlKCcuL19zdGFja0hhcycpLFxuICAgIHN0YWNrU2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVpbnQ4QXJyYXk7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBXZWFrTWFwO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RmlsdGVyO1xuIiwidmFyIGJhc2VUaW1lcyA9IHJlcXVpcmUoJy4vX2Jhc2VUaW1lcycpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSxcbiAgICAgIGlzQXJnID0gIWlzQXJyICYmIGlzQXJndW1lbnRzKHZhbHVlKSxcbiAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiAhaXNBcmcgJiYgaXNCdWZmZXIodmFsdWUpLFxuICAgICAgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksXG4gICAgICBza2lwSW5kZXhlcyA9IGlzQXJyIHx8IGlzQXJnIHx8IGlzQnVmZiB8fCBpc1R5cGUsXG4gICAgICByZXN1bHQgPSBza2lwSW5kZXhlcyA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZykgOiBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoXG4gICAgICAgICAgIC8vIFNhZmFyaSA5IGhhcyBlbnVtZXJhYmxlIGBhcmd1bWVudHMubGVuZ3RoYCBpbiBzdHJpY3QgbW9kZS5cbiAgICAgICAgICAga2V5ID09ICdsZW5ndGgnIHx8XG4gICAgICAgICAgIC8vIE5vZGUuanMgMC4xMCBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiBidWZmZXJzLlxuICAgICAgICAgICAoaXNCdWZmICYmIChrZXkgPT0gJ29mZnNldCcgfHwga2V5ID09ICdwYXJlbnQnKSkgfHxcbiAgICAgICAgICAgLy8gUGhhbnRvbUpTIDIgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gdHlwZWQgYXJyYXlzLlxuICAgICAgICAgICAoaXNUeXBlICYmIChrZXkgPT0gJ2J1ZmZlcicgfHwga2V5ID09ICdieXRlTGVuZ3RoJyB8fCBrZXkgPT0gJ2J5dGVPZmZzZXQnKSkgfHxcbiAgICAgICAgICAgLy8gU2tpcCBpbmRleCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICBpc0luZGV4KGtleSwgbGVuZ3RoKVxuICAgICAgICApKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUxpa2VLZXlzO1xuIiwiLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UHVzaDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnNvbWVgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW55IGVsZW1lbnQgcGFzc2VzIHRoZSBwcmVkaWNhdGUgY2hlY2ssXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheVNvbWUoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlTb21lO1xuIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc29jSW5kZXhPZjtcbiIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldEFsbEtleXNgIGFuZCBgZ2V0QWxsS2V5c0luYCB3aGljaCB1c2VzXG4gKiBga2V5c0Z1bmNgIGFuZCBgc3ltYm9sc0Z1bmNgIHRvIGdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzeW1ib2xzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzRnVuYywgc3ltYm9sc0Z1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXNGdW5jKG9iamVjdCk7XG4gIHJldHVybiBpc0FycmF5KG9iamVjdCkgPyByZXN1bHQgOiBhcnJheVB1c2gocmVzdWx0LCBzeW1ib2xzRnVuYyhvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0QWxsS2V5cztcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0FyZ3VtZW50cztcbiIsInZhciBiYXNlSXNFcXVhbERlZXAgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbERlZXAnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzRXF1YWxgIHdoaWNoIHN1cHBvcnRzIHBhcnRpYWwgY29tcGFyaXNvbnNcbiAqIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBVbm9yZGVyZWQgY29tcGFyaXNvblxuICogIDIgLSBQYXJ0aWFsIGNvbXBhcmlzb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgdmFsdWVgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIGlmICh2YWx1ZSA9PT0gb3RoZXIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCB8fCBvdGhlciA9PSBudWxsIHx8ICghaXNPYmplY3RMaWtlKHZhbHVlKSAmJiAhaXNPYmplY3RMaWtlKG90aGVyKSkpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcjtcbiAgfVxuICByZXR1cm4gYmFzZUlzRXF1YWxEZWVwKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgYmFzZUlzRXF1YWwsIHN0YWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbDtcbiIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgZXF1YWxBcnJheXMgPSByZXF1aXJlKCcuL19lcXVhbEFycmF5cycpLFxuICAgIGVxdWFsQnlUYWcgPSByZXF1aXJlKCcuL19lcXVhbEJ5VGFnJyksXG4gICAgZXF1YWxPYmplY3RzID0gcmVxdWlyZSgnLi9fZXF1YWxPYmplY3RzJyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbGAgZm9yIGFycmF5cyBhbmQgb2JqZWN0cyB3aGljaCBwZXJmb3Jtc1xuICogZGVlcCBjb21wYXJpc29ucyBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGVuYWJsaW5nIG9iamVjdHMgd2l0aCBjaXJjdWxhclxuICogcmVmZXJlbmNlcyB0byBiZSBjb21wYXJlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWxEZWVwKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIG9iaklzQXJyID0gaXNBcnJheShvYmplY3QpLFxuICAgICAgb3RoSXNBcnIgPSBpc0FycmF5KG90aGVyKSxcbiAgICAgIG9ialRhZyA9IG9iaklzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob2JqZWN0KSxcbiAgICAgIG90aFRhZyA9IG90aElzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob3RoZXIpO1xuXG4gIG9ialRhZyA9IG9ialRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb2JqVGFnO1xuICBvdGhUYWcgPSBvdGhUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG90aFRhZztcblxuICB2YXIgb2JqSXNPYmogPSBvYmpUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgb3RoSXNPYmogPSBvdGhUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgaXNTYW1lVGFnID0gb2JqVGFnID09IG90aFRhZztcblxuICBpZiAoaXNTYW1lVGFnICYmIGlzQnVmZmVyKG9iamVjdCkpIHtcbiAgICBpZiAoIWlzQnVmZmVyKG90aGVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBvYmpJc0FyciA9IHRydWU7XG4gICAgb2JqSXNPYmogPSBmYWxzZTtcbiAgfVxuICBpZiAoaXNTYW1lVGFnICYmICFvYmpJc09iaikge1xuICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgcmV0dXJuIChvYmpJc0FyciB8fCBpc1R5cGVkQXJyYXkob2JqZWN0KSlcbiAgICAgID8gZXF1YWxBcnJheXMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaylcbiAgICAgIDogZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCBvYmpUYWcsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xuICB9XG4gIGlmICghKGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRykpIHtcbiAgICB2YXIgb2JqSXNXcmFwcGVkID0gb2JqSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsICdfX3dyYXBwZWRfXycpLFxuICAgICAgICBvdGhJc1dyYXBwZWQgPSBvdGhJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCAnX193cmFwcGVkX18nKTtcblxuICAgIGlmIChvYmpJc1dyYXBwZWQgfHwgb3RoSXNXcmFwcGVkKSB7XG4gICAgICB2YXIgb2JqVW53cmFwcGVkID0gb2JqSXNXcmFwcGVkID8gb2JqZWN0LnZhbHVlKCkgOiBvYmplY3QsXG4gICAgICAgICAgb3RoVW53cmFwcGVkID0gb3RoSXNXcmFwcGVkID8gb3RoZXIudmFsdWUoKSA6IG90aGVyO1xuXG4gICAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgICAgcmV0dXJuIGVxdWFsRnVuYyhvYmpVbndyYXBwZWQsIG90aFVud3JhcHBlZCwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spO1xuICAgIH1cbiAgfVxuICBpZiAoIWlzU2FtZVRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICByZXR1cm4gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsRGVlcDtcbiIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNNYXNrZWQgPSByZXF1aXJlKCcuL19pc01hc2tlZCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYXRpdmU7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzVHlwZWRBcnJheTtcbiIsInZhciBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXMnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVGltZXM7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuYXJ5O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBgY2FjaGVgIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYWNoZSBUaGUgY2FjaGUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gY2FjaGVIYXMoY2FjaGUsIGtleSkge1xuICByZXR1cm4gY2FjaGUuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FjaGVIYXM7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlSnNEYXRhO1xuIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheVNvbWUgPSByZXF1aXJlKCcuL19hcnJheVNvbWUnKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGFycmF5cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtBcnJheX0gb3RoZXIgVGhlIG90aGVyIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBhcnJheWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJyYXlzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQXJyYXlzKGFycmF5LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgYXJyTGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoZXIubGVuZ3RoO1xuXG4gIGlmIChhcnJMZW5ndGggIT0gb3RoTGVuZ3RoICYmICEoaXNQYXJ0aWFsICYmIG90aExlbmd0aCA+IGFyckxlbmd0aCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gQ2hlY2sgdGhhdCBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIGFyclN0YWNrZWQgPSBzdGFjay5nZXQoYXJyYXkpO1xuICB2YXIgb3RoU3RhY2tlZCA9IHN0YWNrLmdldChvdGhlcik7XG4gIGlmIChhcnJTdGFja2VkICYmIG90aFN0YWNrZWQpIHtcbiAgICByZXR1cm4gYXJyU3RhY2tlZCA9PSBvdGhlciAmJiBvdGhTdGFja2VkID09IGFycmF5O1xuICB9XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gdHJ1ZSxcbiAgICAgIHNlZW4gPSAoYml0bWFzayAmIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcpID8gbmV3IFNldENhY2hlIDogdW5kZWZpbmVkO1xuXG4gIHN0YWNrLnNldChhcnJheSwgb3RoZXIpO1xuICBzdGFjay5zZXQob3RoZXIsIGFycmF5KTtcblxuICAvLyBJZ25vcmUgbm9uLWluZGV4IHByb3BlcnRpZXMuXG4gIHdoaWxlICgrK2luZGV4IDwgYXJyTGVuZ3RoKSB7XG4gICAgdmFyIGFyclZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2luZGV4XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBhcnJWYWx1ZSwgaW5kZXgsIG90aGVyLCBhcnJheSwgc3RhY2spXG4gICAgICAgIDogY3VzdG9taXplcihhcnJWYWx1ZSwgb3RoVmFsdWUsIGluZGV4LCBhcnJheSwgb3RoZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgaWYgKGNvbXBhcmVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChjb21wYXJlZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKHNlZW4pIHtcbiAgICAgIGlmICghYXJyYXlTb21lKG90aGVyLCBmdW5jdGlvbihvdGhWYWx1ZSwgb3RoSW5kZXgpIHtcbiAgICAgICAgICAgIGlmICghY2FjaGVIYXMoc2Vlbiwgb3RoSW5kZXgpICYmXG4gICAgICAgICAgICAgICAgKGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzZWVuLnB1c2gob3RoSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCEoXG4gICAgICAgICAgYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8XG4gICAgICAgICAgICBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaylcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKGFycmF5KTtcbiAgc3RhY2tbJ2RlbGV0ZSddKG90aGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEFycmF5cztcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBVaW50OEFycmF5ID0gcmVxdWlyZSgnLi9fVWludDhBcnJheScpLFxuICAgIGVxID0gcmVxdWlyZSgnLi9lcScpLFxuICAgIGVxdWFsQXJyYXlzID0gcmVxdWlyZSgnLi9fZXF1YWxBcnJheXMnKSxcbiAgICBtYXBUb0FycmF5ID0gcmVxdWlyZSgnLi9fbWFwVG9BcnJheScpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVmFsdWVPZiA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udmFsdWVPZiA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGNvbXBhcmluZyBvYmplY3RzIG9mXG4gKiB0aGUgc2FtZSBgdG9TdHJpbmdUYWdgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY29tcGFyaW5nIHZhbHVlcyB3aXRoIHRhZ3Mgb2ZcbiAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIG9yIGBTdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnIFRoZSBgdG9TdHJpbmdUYWdgIG9mIHRoZSBvYmplY3RzIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCB0YWcsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgaWYgKChvYmplY3QuYnl0ZUxlbmd0aCAhPSBvdGhlci5ieXRlTGVuZ3RoKSB8fFxuICAgICAgICAgIChvYmplY3QuYnl0ZU9mZnNldCAhPSBvdGhlci5ieXRlT2Zmc2V0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBvYmplY3QgPSBvYmplY3QuYnVmZmVyO1xuICAgICAgb3RoZXIgPSBvdGhlci5idWZmZXI7XG5cbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgaWYgKChvYmplY3QuYnl0ZUxlbmd0aCAhPSBvdGhlci5ieXRlTGVuZ3RoKSB8fFxuICAgICAgICAgICFlcXVhbEZ1bmMobmV3IFVpbnQ4QXJyYXkob2JqZWN0KSwgbmV3IFVpbnQ4QXJyYXkob3RoZXIpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgICAvLyBDb2VyY2UgYm9vbGVhbnMgdG8gYDFgIG9yIGAwYCBhbmQgZGF0ZXMgdG8gbWlsbGlzZWNvbmRzLlxuICAgICAgLy8gSW52YWxpZCBkYXRlcyBhcmUgY29lcmNlZCB0byBgTmFOYC5cbiAgICAgIHJldHVybiBlcSgrb2JqZWN0LCArb3RoZXIpO1xuXG4gICAgY2FzZSBlcnJvclRhZzpcbiAgICAgIHJldHVybiBvYmplY3QubmFtZSA9PSBvdGhlci5uYW1lICYmIG9iamVjdC5tZXNzYWdlID09IG90aGVyLm1lc3NhZ2U7XG5cbiAgICBjYXNlIHJlZ2V4cFRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIC8vIENvZXJjZSByZWdleGVzIHRvIHN0cmluZ3MgYW5kIHRyZWF0IHN0cmluZ3MsIHByaW1pdGl2ZXMgYW5kIG9iamVjdHMsXG4gICAgICAvLyBhcyBlcXVhbC4gU2VlIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1yZWdleHAucHJvdG90eXBlLnRvc3RyaW5nXG4gICAgICAvLyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAgcmV0dXJuIG9iamVjdCA9PSAob3RoZXIgKyAnJyk7XG5cbiAgICBjYXNlIG1hcFRhZzpcbiAgICAgIHZhciBjb252ZXJ0ID0gbWFwVG9BcnJheTtcblxuICAgIGNhc2Ugc2V0VGFnOlxuICAgICAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRztcbiAgICAgIGNvbnZlcnQgfHwgKGNvbnZlcnQgPSBzZXRUb0FycmF5KTtcblxuICAgICAgaWYgKG9iamVjdC5zaXplICE9IG90aGVyLnNpemUgJiYgIWlzUGFydGlhbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gICAgICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICAgICAgaWYgKHN0YWNrZWQpIHtcbiAgICAgICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gICAgICB9XG4gICAgICBiaXRtYXNrIHw9IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUc7XG5cbiAgICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgICAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICAgICAgdmFyIHJlc3VsdCA9IGVxdWFsQXJyYXlzKGNvbnZlcnQob2JqZWN0KSwgY29udmVydChvdGhlciksIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xuICAgICAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgY2FzZSBzeW1ib2xUYWc6XG4gICAgICBpZiAoc3ltYm9sVmFsdWVPZikge1xuICAgICAgICByZXR1cm4gc3ltYm9sVmFsdWVPZi5jYWxsKG9iamVjdCkgPT0gc3ltYm9sVmFsdWVPZi5jYWxsKG90aGVyKTtcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxCeVRhZztcbiIsInZhciBnZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fZ2V0QWxsS2V5cycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDE7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBvYmplY3RzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcsXG4gICAgICBvYmpQcm9wcyA9IGdldEFsbEtleXMob2JqZWN0KSxcbiAgICAgIG9iakxlbmd0aCA9IG9ialByb3BzLmxlbmd0aCxcbiAgICAgIG90aFByb3BzID0gZ2V0QWxsS2V5cyhvdGhlciksXG4gICAgICBvdGhMZW5ndGggPSBvdGhQcm9wcy5sZW5ndGg7XG5cbiAgaWYgKG9iakxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIWlzUGFydGlhbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgaW5kZXggPSBvYmpMZW5ndGg7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICBpZiAoIShpc1BhcnRpYWwgPyBrZXkgaW4gb3RoZXIgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCBrZXkpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICAvLyBDaGVjayB0aGF0IGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgb2JqU3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICB2YXIgb3RoU3RhY2tlZCA9IHN0YWNrLmdldChvdGhlcik7XG4gIGlmIChvYmpTdGFja2VkICYmIG90aFN0YWNrZWQpIHtcbiAgICByZXR1cm4gb2JqU3RhY2tlZCA9PSBvdGhlciAmJiBvdGhTdGFja2VkID09IG9iamVjdDtcbiAgfVxuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICBzdGFjay5zZXQob3RoZXIsIG9iamVjdCk7XG5cbiAgdmFyIHNraXBDdG9yID0gaXNQYXJ0aWFsO1xuICB3aGlsZSAoKytpbmRleCA8IG9iakxlbmd0aCkge1xuICAgIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltrZXldO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIG9ialZhbHVlLCBrZXksIG90aGVyLCBvYmplY3QsIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIob2JqVmFsdWUsIG90aFZhbHVlLCBrZXksIG9iamVjdCwgb3RoZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKCEoY29tcGFyZWQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gKG9ialZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMob2JqVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykpXG4gICAgICAgICAgOiBjb21wYXJlZFxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBza2lwQ3RvciB8fCAoc2tpcEN0b3IgPSBrZXkgPT0gJ2NvbnN0cnVjdG9yJyk7XG4gIH1cbiAgaWYgKHJlc3VsdCAmJiAhc2tpcEN0b3IpIHtcbiAgICB2YXIgb2JqQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgICAgb3RoQ3RvciA9IG90aGVyLmNvbnN0cnVjdG9yO1xuXG4gICAgLy8gTm9uIGBPYmplY3RgIG9iamVjdCBpbnN0YW5jZXMgd2l0aCBkaWZmZXJlbnQgY29uc3RydWN0b3JzIGFyZSBub3QgZXF1YWwuXG4gICAgaWYgKG9iakN0b3IgIT0gb3RoQ3RvciAmJlxuICAgICAgICAoJ2NvbnN0cnVjdG9yJyBpbiBvYmplY3QgJiYgJ2NvbnN0cnVjdG9yJyBpbiBvdGhlcikgJiZcbiAgICAgICAgISh0eXBlb2Ygb2JqQ3RvciA9PSAnZnVuY3Rpb24nICYmIG9iakN0b3IgaW5zdGFuY2VvZiBvYmpDdG9yICYmXG4gICAgICAgICAgdHlwZW9mIG90aEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvdGhDdG9yIGluc3RhbmNlb2Ygb3RoQ3RvcikpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgc3RhY2tbJ2RlbGV0ZSddKG90aGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbE9iamVjdHM7XG4iLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG4iLCJ2YXIgYmFzZUdldEFsbEtleXMgPSByZXF1aXJlKCcuL19iYXNlR2V0QWxsS2V5cycpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXMob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXMsIGdldFN5bWJvbHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXM7XG4iLCJ2YXIgaXNLZXlhYmxlID0gcmVxdWlyZSgnLi9faXNLZXlhYmxlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXBEYXRhO1xuIiwidmFyIGJhc2VJc05hdGl2ZSA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hdGl2ZScpLFxuICAgIGdldFZhbHVlID0gcmVxdWlyZSgnLi9fZ2V0VmFsdWUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG4iLCJ2YXIgYXJyYXlGaWx0ZXIgPSByZXF1aXJlKCcuL19hcnJheUZpbHRlcicpLFxuICAgIHN0dWJBcnJheSA9IHJlcXVpcmUoJy4vc3R1YkFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICByZXR1cm4gYXJyYXlGaWx0ZXIobmF0aXZlR2V0U3ltYm9scyhvYmplY3QpLCBmdW5jdGlvbihzeW1ib2wpIHtcbiAgICByZXR1cm4gcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIHN5bWJvbCk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRTeW1ib2xzO1xuIiwidmFyIERhdGFWaWV3ID0gcmVxdWlyZSgnLi9fRGF0YVZpZXcnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBQcm9taXNlID0gcmVxdWlyZSgnLi9fUHJvbWlzZScpLFxuICAgIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIFdlYWtNYXAgPSByZXF1aXJlKCcuL19XZWFrTWFwJyksXG4gICAgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm9taXNlVGFnID0gJ1tvYmplY3QgUHJvbWlzZV0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzLCBzZXRzLCBhbmQgd2Vha21hcHMuICovXG52YXIgZGF0YVZpZXdDdG9yU3RyaW5nID0gdG9Tb3VyY2UoRGF0YVZpZXcpLFxuICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgIHByb21pc2VDdG9yU3RyaW5nID0gdG9Tb3VyY2UoUHJvbWlzZSksXG4gICAgc2V0Q3RvclN0cmluZyA9IHRvU291cmNlKFNldCksXG4gICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzIDwgNi5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGJhc2VHZXRUYWcodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogJyc7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFnO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VmFsdWU7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hDbGVhcjtcbiIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaERlbGV0ZTtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hHZXQ7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGFzO1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHRoaXMuc2l6ZSArPSB0aGlzLmhhcyhrZXkpID8gMCA6IDE7XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoU2V0O1xuIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG5cbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGUgPT0gJ251bWJlcicgfHxcbiAgICAgICh0eXBlICE9ICdzeW1ib2wnICYmIHJlSXNVaW50LnRlc3QodmFsdWUpKSkgJiZcbiAgICAgICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXlhYmxlO1xuIiwidmFyIGNvcmVKc0RhdGEgPSByZXF1aXJlKCcuL19jb3JlSnNEYXRhJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrZWQ7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQcm90b3R5cGU7XG4iLCIvKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlQ2xlYXI7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVEZWxldGU7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlR2V0O1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVIYXM7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVTZXQ7XG4iLCJ2YXIgSGFzaCA9IHJlcXVpcmUoJy4vX0hhc2gnKSxcbiAgICBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlQ2xlYXI7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVEZWxldGU7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlR2V0O1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVIYXM7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlU2V0O1xuIiwiLyoqXG4gKiBDb252ZXJ0cyBgbWFwYCB0byBpdHMga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUga2V5LXZhbHVlIHBhaXJzLlxuICovXG5mdW5jdGlvbiBtYXBUb0FycmF5KG1hcCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICBtYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gW2tleSwgdmFsdWVdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBUb0FycmF5O1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUNyZWF0ZTtcbiIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5cztcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIC8vIFVzZSBgdXRpbC50eXBlc2AgZm9yIE5vZGUuanMgMTArLlxuICAgIHZhciB0eXBlcyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlICYmIGZyZWVNb2R1bGUucmVxdWlyZSgndXRpbCcpLnR5cGVzO1xuXG4gICAgaWYgKHR5cGVzKSB7XG4gICAgICByZXR1cm4gdHlwZXM7XG4gICAgfVxuXG4gICAgLy8gTGVnYWN5IGBwcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKWAgZm9yIE5vZGUuanMgPCAxMC5cbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vZGVVdGlsO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuIiwiLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIEFkZHMgYHZhbHVlYCB0byB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGFkZFxuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAYWxpYXMgcHVzaFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2FjaGUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVBZGQodmFsdWUpIHtcbiAgdGhpcy5fX2RhdGFfXy5zZXQodmFsdWUsIEhBU0hfVU5ERUZJTkVEKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVBZGQ7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGluIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlSGFzKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVIYXM7XG4iLCIvKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFRvQXJyYXk7XG4iLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tDbGVhcjtcbiIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0RlbGV0ZTtcbiIsIi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0dldDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tIYXM7XG4iLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBkYXRhLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHRoaXMuc2l6ZSA9ICsrZGF0YS5zaXplO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja1NldDtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1NvdXJjZTtcbiIsIi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxO1xuIiwidmFyIGJhc2VJc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vX2Jhc2VJc0FyZ3VtZW50cycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcbiIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290JyksXG4gICAgc3R1YkZhbHNlID0gcmVxdWlyZSgnLi9zdHViRmFsc2UnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQnVmZmVyO1xuIiwidmFyIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWwnKTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhIGRlZXAgY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlXG4gKiBlcXVpdmFsZW50LlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBzdXBwb3J0cyBjb21wYXJpbmcgYXJyYXlzLCBhcnJheSBidWZmZXJzLCBib29sZWFucyxcbiAqIGRhdGUgb2JqZWN0cywgZXJyb3Igb2JqZWN0cywgbWFwcywgbnVtYmVycywgYE9iamVjdGAgb2JqZWN0cywgcmVnZXhlcyxcbiAqIHNldHMsIHN0cmluZ3MsIHN5bWJvbHMsIGFuZCB0eXBlZCBhcnJheXMuIGBPYmplY3RgIG9iamVjdHMgYXJlIGNvbXBhcmVkXG4gKiBieSB0aGVpciBvd24sIG5vdCBpbmhlcml0ZWQsIGVudW1lcmFibGUgcHJvcGVydGllcy4gRnVuY3Rpb25zIGFuZCBET01cbiAqIG5vZGVzIGFyZSBjb21wYXJlZCBieSBzdHJpY3QgZXF1YWxpdHksIGkuZS4gYD09PWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uaXNFcXVhbChvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBvYmplY3QgPT09IG90aGVyO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNFcXVhbCh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNFcXVhbDtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG4iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcbiIsInZhciBiYXNlSXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fYmFzZUlzVHlwZWRBcnJheScpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNUeXBlZEFycmF5ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KG5ldyBVaW50OEFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShbXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNUeXBlZEFycmF5ID0gbm9kZUlzVHlwZWRBcnJheSA/IGJhc2VVbmFyeShub2RlSXNUeXBlZEFycmF5KSA6IGJhc2VJc1R5cGVkQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNUeXBlZEFycmF5O1xuIiwidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXMgPSByZXF1aXJlKCcuL19iYXNlS2V5cycpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QpIDogYmFzZUtleXMob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGVtcHR5IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZW1wdHkgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheXMgPSBfLnRpbWVzKDIsIF8uc3R1YkFycmF5KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xuICogLy8gPT4gW1tdLCBbXV1cbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViQXJyYXk7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkZhbHNlO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAsMjAxMSwyMDEyLDIwMTMsMjAxNCBNb3JnYW4gUm9kZXJpY2sgaHR0cDovL3JvZGVyaWNrLmRrXG4gKiBMaWNlbnNlOiBNSVQgLSBodHRwOi8vbXJnbnJkcmNrLm1pdC1saWNlbnNlLm9yZ1xuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tcm9kZXJpY2svUHViU3ViSlNcbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3Rvcnkpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBQdWJTdWIgPSB7fTtcblxuICAgIGlmIChyb290LlB1YlN1Yikge1xuICAgICAgICBQdWJTdWIgPSByb290LlB1YlN1YjtcbiAgICAgICAgY29uc29sZS53YXJuKFwiUHViU3ViIGFscmVhZHkgbG9hZGVkLCB1c2luZyBleGlzdGluZyB2ZXJzaW9uXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QuUHViU3ViID0gUHViU3ViO1xuICAgICAgICBmYWN0b3J5KFB1YlN1Yik7XG4gICAgfVxuICAgIC8vIENvbW1vbkpTIGFuZCBOb2RlLmpzIG1vZHVsZSBzdXBwb3J0XG4gICAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jyl7XG4gICAgICAgIGlmIChtb2R1bGUgIT09IHVuZGVmaW5lZCAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gUHViU3ViOyAvLyBOb2RlLmpzIHNwZWNpZmljIGBtb2R1bGUuZXhwb3J0c2BcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRzLlB1YlN1YiA9IFB1YlN1YjsgLy8gQ29tbW9uSlMgbW9kdWxlIDEuMS4xIHNwZWNcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gUHViU3ViOyAvLyBDb21tb25KU1xuICAgIH1cbiAgICAvLyBBTUQgc3VwcG9ydFxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4gICAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKXtcbiAgICAgICAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gUHViU3ViOyB9KTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby11bmRlZiAqL1xuICAgIH1cblxufSgoIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdyApIHx8IHRoaXMsIGZ1bmN0aW9uIChQdWJTdWIpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBtZXNzYWdlcyA9IHt9LFxuICAgICAgICBsYXN0VWlkID0gLTEsXG4gICAgICAgIEFMTF9TVUJTQ1JJQklOR19NU0cgPSAnKic7XG5cbiAgICBmdW5jdGlvbiBoYXNLZXlzKG9iail7XG4gICAgICAgIHZhciBrZXk7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gb2JqKXtcbiAgICAgICAgICAgIGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSApe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB0aHJvd3MgdGhlIHBhc3NlZCBleGNlcHRpb24sIGZvciB1c2UgYXMgYXJndW1lbnQgZm9yIHNldFRpbWVvdXRcbiAgICAgKiBAYWxpYXMgdGhyb3dFeGNlcHRpb25cbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSBleCBBbiBFcnJvciBvYmplY3RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0aHJvd0V4Y2VwdGlvbiggZXggKXtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlVGhyb3dFeGNlcHRpb24oKXtcbiAgICAgICAgICAgIHRocm93IGV4O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGxTdWJzY3JpYmVyV2l0aERlbGF5ZWRFeGNlcHRpb25zKCBzdWJzY3JpYmVyLCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyKCBtZXNzYWdlLCBkYXRhICk7XG4gICAgICAgIH0gY2F0Y2goIGV4ICl7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCB0aHJvd0V4Y2VwdGlvbiggZXggKSwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxsU3Vic2NyaWJlcldpdGhJbW1lZGlhdGVFeGNlcHRpb25zKCBzdWJzY3JpYmVyLCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHN1YnNjcmliZXIoIG1lc3NhZ2UsIGRhdGEgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxpdmVyTWVzc2FnZSggb3JpZ2luYWxNZXNzYWdlLCBtYXRjaGVkTWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICB2YXIgc3Vic2NyaWJlcnMgPSBtZXNzYWdlc1ttYXRjaGVkTWVzc2FnZV0sXG4gICAgICAgICAgICBjYWxsU3Vic2NyaWJlciA9IGltbWVkaWF0ZUV4Y2VwdGlvbnMgPyBjYWxsU3Vic2NyaWJlcldpdGhJbW1lZGlhdGVFeGNlcHRpb25zIDogY2FsbFN1YnNjcmliZXJXaXRoRGVsYXllZEV4Y2VwdGlvbnMsXG4gICAgICAgICAgICBzO1xuXG4gICAgICAgIGlmICggIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggbWVzc2FnZXMsIG1hdGNoZWRNZXNzYWdlICkgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHMgaW4gc3Vic2NyaWJlcnMpe1xuICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc3Vic2NyaWJlcnMsIHMpKXtcbiAgICAgICAgICAgICAgICBjYWxsU3Vic2NyaWJlciggc3Vic2NyaWJlcnNbc10sIG9yaWdpbmFsTWVzc2FnZSwgZGF0YSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiggbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZGVsaXZlck5hbWVzcGFjZWQoKXtcbiAgICAgICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuXG4gICAgICAgICAgICAvLyBkZWxpdmVyIHRoZSBtZXNzYWdlIGFzIGl0IGlzIG5vd1xuICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UobWVzc2FnZSwgbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyk7XG5cbiAgICAgICAgICAgIC8vIHRyaW0gdGhlIGhpZXJhcmNoeSBhbmQgZGVsaXZlciBtZXNzYWdlIHRvIGVhY2ggbGV2ZWxcbiAgICAgICAgICAgIHdoaWxlKCBwb3NpdGlvbiAhPT0gLTEgKXtcbiAgICAgICAgICAgICAgICB0b3BpYyA9IHRvcGljLnN1YnN0ciggMCwgcG9zaXRpb24gKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCcuJyk7XG4gICAgICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UoIG1lc3NhZ2UsIHRvcGljLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGl2ZXJNZXNzYWdlKG1lc3NhZ2UsIEFMTF9TVUJTQ1JJQklOR19NU0csIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhc0RpcmVjdFN1YnNjcmliZXJzRm9yKCBtZXNzYWdlICkge1xuICAgICAgICB2YXIgdG9waWMgPSBTdHJpbmcoIG1lc3NhZ2UgKSxcbiAgICAgICAgICAgIGZvdW5kID0gQm9vbGVhbihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIG1lc3NhZ2VzLCB0b3BpYyApICYmIGhhc0tleXMobWVzc2FnZXNbdG9waWNdKSk7XG5cbiAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1lc3NhZ2VIYXNTdWJzY3JpYmVycyggbWVzc2FnZSApe1xuICAgICAgICB2YXIgdG9waWMgPSBTdHJpbmcoIG1lc3NhZ2UgKSxcbiAgICAgICAgICAgIGZvdW5kID0gaGFzRGlyZWN0U3Vic2NyaWJlcnNGb3IodG9waWMpIHx8IGhhc0RpcmVjdFN1YnNjcmliZXJzRm9yKEFMTF9TVUJTQ1JJQklOR19NU0cpLFxuICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG5cbiAgICAgICAgd2hpbGUgKCAhZm91bmQgJiYgcG9zaXRpb24gIT09IC0xICl7XG4gICAgICAgICAgICB0b3BpYyA9IHRvcGljLnN1YnN0ciggMCwgcG9zaXRpb24gKTtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuICAgICAgICAgICAgZm91bmQgPSBoYXNEaXJlY3RTdWJzY3JpYmVyc0Zvcih0b3BpYyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgc3luYywgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICBtZXNzYWdlID0gKHR5cGVvZiBtZXNzYWdlID09PSAnc3ltYm9sJykgPyBtZXNzYWdlLnRvU3RyaW5nKCkgOiBtZXNzYWdlO1xuXG4gICAgICAgIHZhciBkZWxpdmVyID0gY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiggbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApLFxuICAgICAgICAgICAgaGFzU3Vic2NyaWJlcnMgPSBtZXNzYWdlSGFzU3Vic2NyaWJlcnMoIG1lc3NhZ2UgKTtcblxuICAgICAgICBpZiAoICFoYXNTdWJzY3JpYmVycyApe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBzeW5jID09PSB0cnVlICl7XG4gICAgICAgICAgICBkZWxpdmVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCBkZWxpdmVyLCAwICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHVibGlzaGVzIHRoZSBtZXNzYWdlLCBwYXNzaW5nIHRoZSBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgcHVibGlzaFxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gcHVibGlzaFxuICAgICAqIEBwYXJhbSB7fSBkYXRhIFRoZSBkYXRhIHRvIHBhc3MgdG8gc3Vic2NyaWJlcnNcbiAgICAgKiBAcmV0dXJuIHsgQm9vbGVhbiB9XG4gICAgICovXG4gICAgUHViU3ViLnB1Ymxpc2ggPSBmdW5jdGlvbiggbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICByZXR1cm4gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgZmFsc2UsIFB1YlN1Yi5pbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFB1Ymxpc2hlcyB0aGUgbWVzc2FnZSBzeW5jaHJvbm91c2x5LCBwYXNzaW5nIHRoZSBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgcHVibGlzaFN5bmNcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHB1Ymxpc2hcbiAgICAgKiBAcGFyYW0ge30gZGF0YSBUaGUgZGF0YSB0byBwYXNzIHRvIHN1YnNjcmliZXJzXG4gICAgICogQHJldHVybiB7IEJvb2xlYW4gfVxuICAgICAqL1xuICAgIFB1YlN1Yi5wdWJsaXNoU3luYyA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHJldHVybiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCB0cnVlLCBQdWJTdWIuaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRoZSBwYXNzZWQgZnVuY3Rpb24gdG8gdGhlIHBhc3NlZCBtZXNzYWdlLiBFdmVyeSByZXR1cm5lZCB0b2tlbiBpcyB1bmlxdWUgYW5kIHNob3VsZCBiZSBzdG9yZWQgaWYgeW91IG5lZWQgdG8gdW5zdWJzY3JpYmVcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBzdWJzY3JpYmUgdG9cbiAgICAgKiBAcGFyYW0geyBGdW5jdGlvbiB9IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBhIG5ldyBtZXNzYWdlIGlzIHB1Ymxpc2hlZFxuICAgICAqIEByZXR1cm4geyBTdHJpbmcgfVxuICAgICAqL1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUgPSBmdW5jdGlvbiggbWVzc2FnZSwgZnVuYyApe1xuICAgICAgICBpZiAoIHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lc3NhZ2UgPSAodHlwZW9mIG1lc3NhZ2UgPT09ICdzeW1ib2wnKSA/IG1lc3NhZ2UudG9TdHJpbmcoKSA6IG1lc3NhZ2U7XG5cbiAgICAgICAgLy8gbWVzc2FnZSBpcyBub3QgcmVnaXN0ZXJlZCB5ZXRcbiAgICAgICAgaWYgKCAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBtZXNzYWdlcywgbWVzc2FnZSApICl7XG4gICAgICAgICAgICBtZXNzYWdlc1ttZXNzYWdlXSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9yY2luZyB0b2tlbiBhcyBTdHJpbmcsIHRvIGFsbG93IGZvciBmdXR1cmUgZXhwYW5zaW9ucyB3aXRob3V0IGJyZWFraW5nIHVzYWdlXG4gICAgICAgIC8vIGFuZCBhbGxvdyBmb3IgZWFzeSB1c2UgYXMga2V5IG5hbWVzIGZvciB0aGUgJ21lc3NhZ2VzJyBvYmplY3RcbiAgICAgICAgdmFyIHRva2VuID0gJ3VpZF8nICsgU3RyaW5nKCsrbGFzdFVpZCk7XG4gICAgICAgIG1lc3NhZ2VzW21lc3NhZ2VdW3Rva2VuXSA9IGZ1bmM7XG5cbiAgICAgICAgLy8gcmV0dXJuIHRva2VuIGZvciB1bnN1YnNjcmliaW5nXG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9O1xuXG4gICAgUHViU3ViLnN1YnNjcmliZUFsbCA9IGZ1bmN0aW9uKCBmdW5jICl7XG4gICAgICAgIHJldHVybiBQdWJTdWIuc3Vic2NyaWJlKEFMTF9TVUJTQ1JJQklOR19NU0csIGZ1bmMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRoZSBwYXNzZWQgZnVuY3Rpb24gdG8gdGhlIHBhc3NlZCBtZXNzYWdlIG9uY2VcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlT25jZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gc3Vic2NyaWJlIHRvXG4gICAgICogQHBhcmFtIHsgRnVuY3Rpb24gfSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gYSBuZXcgbWVzc2FnZSBpcyBwdWJsaXNoZWRcbiAgICAgKiBAcmV0dXJuIHsgUHViU3ViIH1cbiAgICAgKi9cbiAgICBQdWJTdWIuc3Vic2NyaWJlT25jZSA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBmdW5jICl7XG4gICAgICAgIHZhciB0b2tlbiA9IFB1YlN1Yi5zdWJzY3JpYmUoIG1lc3NhZ2UsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvLyBiZWZvcmUgZnVuYyBhcHBseSwgdW5zdWJzY3JpYmUgbWVzc2FnZVxuICAgICAgICAgICAgUHViU3ViLnVuc3Vic2NyaWJlKCB0b2tlbiApO1xuICAgICAgICAgICAgZnVuYy5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUHViU3ViO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIHN1YnNjcmlwdGlvbnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIGNsZWFyQWxsU3Vic2NyaXB0aW9uc1xuICAgICAqL1xuICAgIFB1YlN1Yi5jbGVhckFsbFN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjbGVhckFsbFN1YnNjcmlwdGlvbnMoKXtcbiAgICAgICAgbWVzc2FnZXMgPSB7fTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgc3Vic2NyaXB0aW9ucyBieSB0aGUgdG9waWNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIGNsZWFyQWxsU3Vic2NyaXB0aW9uc1xuICAgICAqIEByZXR1cm4geyBpbnQgfVxuICAgICAqL1xuICAgIFB1YlN1Yi5jbGVhclN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjbGVhclN1YnNjcmlwdGlvbnModG9waWMpe1xuICAgICAgICB2YXIgbTtcbiAgICAgICAgZm9yIChtIGluIG1lc3NhZ2VzKXtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDApe1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlc1ttXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgICBDb3VudCBzdWJzY3JpcHRpb25zIGJ5IHRoZSB0b3BpY1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgY291bnRTdWJzY3JpcHRpb25zXG4gICAgICogQHJldHVybiB7IEFycmF5IH1cbiAgICAqL1xuICAgIFB1YlN1Yi5jb3VudFN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjb3VudFN1YnNjcmlwdGlvbnModG9waWMpe1xuICAgICAgICB2YXIgbTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChtIGluIG1lc3NhZ2VzKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCBtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yICh0b2tlbiBpbiBtZXNzYWdlc1ttXSkge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICAgR2V0cyBzdWJzY3JpcHRpb25zIGJ5IHRoZSB0b3BpY1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgZ2V0U3Vic2NyaXB0aW9uc1xuICAgICovXG4gICAgUHViU3ViLmdldFN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBnZXRTdWJzY3JpcHRpb25zKHRvcGljKXtcbiAgICAgICAgdmFyIG07XG4gICAgICAgIHZhciBsaXN0ID0gW107XG4gICAgICAgIGZvciAobSBpbiBtZXNzYWdlcyl7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCBtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwKXtcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2gobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgc3Vic2NyaXB0aW9uc1xuICAgICAqXG4gICAgICogLSBXaGVuIHBhc3NlZCBhIHRva2VuLCByZW1vdmVzIGEgc3BlY2lmaWMgc3Vic2NyaXB0aW9uLlxuICAgICAqXG5cdCAqIC0gV2hlbiBwYXNzZWQgYSBmdW5jdGlvbiwgcmVtb3ZlcyBhbGwgc3Vic2NyaXB0aW9ucyBmb3IgdGhhdCBmdW5jdGlvblxuICAgICAqXG5cdCAqIC0gV2hlbiBwYXNzZWQgYSB0b3BpYywgcmVtb3ZlcyBhbGwgc3Vic2NyaXB0aW9ucyBmb3IgdGhhdCB0b3BpYyAoaGllcmFyY2h5KVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlT25jZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB8IEZ1bmN0aW9uIH0gdmFsdWUgQSB0b2tlbiwgZnVuY3Rpb24gb3IgdG9waWMgdG8gdW5zdWJzY3JpYmUgZnJvbVxuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgd2l0aCBhIHRva2VuXG4gICAgICogdmFyIHRva2VuID0gUHViU3ViLnN1YnNjcmliZSgnbXl0b3BpYycsIG15RnVuYyk7XG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKHRva2VuKTtcbiAgICAgKiBAZXhhbXBsZSAvLyBVbnN1YnNjcmliaW5nIHdpdGggYSBmdW5jdGlvblxuICAgICAqIFB1YlN1Yi51bnN1YnNjcmliZShteUZ1bmMpO1xuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgZnJvbSBhIHRvcGljXG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKCdteXRvcGljJyk7XG4gICAgICovXG4gICAgUHViU3ViLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICB2YXIgZGVzY2VuZGFudFRvcGljRXhpc3RzID0gZnVuY3Rpb24odG9waWMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbTtcbiAgICAgICAgICAgICAgICBmb3IgKCBtIGluIG1lc3NhZ2VzICl7XG4gICAgICAgICAgICAgICAgICAgIGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCBtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhIGRlc2NlbmRhbnQgb2YgdGhlIHRvcGljIGV4aXN0czpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzVG9waWMgICAgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCB2YWx1ZSkgfHwgZGVzY2VuZGFudFRvcGljRXhpc3RzKHZhbHVlKSApLFxuICAgICAgICAgICAgaXNUb2tlbiAgICA9ICFpc1RvcGljICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycsXG4gICAgICAgICAgICBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nLFxuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2UsXG4gICAgICAgICAgICBtLCBtZXNzYWdlLCB0O1xuXG4gICAgICAgIGlmIChpc1RvcGljKXtcbiAgICAgICAgICAgIFB1YlN1Yi5jbGVhclN1YnNjcmlwdGlvbnModmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICggbSBpbiBtZXNzYWdlcyApe1xuICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIG1lc3NhZ2VzLCBtICkgKXtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZXNbbV07XG5cbiAgICAgICAgICAgICAgICBpZiAoIGlzVG9rZW4gJiYgbWVzc2FnZVt2YWx1ZV0gKXtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VbdmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9rZW5zIGFyZSB1bmlxdWUsIHNvIHdlIGNhbiBqdXN0IHN0b3AgaGVyZVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKCB0IGluIG1lc3NhZ2UgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZSwgdCkgJiYgbWVzc2FnZVt0XSA9PT0gdmFsdWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlW3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59KSk7XG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwLmpzJztcbmltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJztcblxuLy91c2VkIHdoZW4gdGhlIGdhbWUgbW9kZSB3aXRoIGEgYm90IGlzIHNlbGVjdGVkXG4vL21ha2VzIGNhbGN1bGF0ZWQgbW92ZXNcbmV4cG9ydCBjbGFzcyBCb3Qge1xuICBjb25zdHJ1Y3RvcihvcHBvbmVudHNHYW1lYm9hcmQpIHtcbiAgICB0aGlzLm9wcG9uZW50c0dhbWVib2FyZCA9IG9wcG9uZW50c0dhbWVib2FyZDtcbiAgICB0aGlzLmF0dGFja1F1ZXVlID0gW107XG4gIH1cblxuICBhc3luYyBhdHRhY2soKSB7XG4gICAgLy9yZXF1ZXN0cyBhIGRpYWxvZyB3aXRoIGFuIGFuaW1hdGlvbiBkdXJpbmcgYSBib3QgYXR0YWNrXG4gICAgY29uc3QgQk9UX01PVkUgPSAnYm90IGlzIG1ha2luZyBhIG1vdmUnO1xuICAgIFB1YlN1Yi5wdWJsaXNoKEJPVF9NT1ZFKTtcblxuICAgIC8vZGVsYXlzIG1vdmUgY2FsY3VsYXRpb24gYW5kIGJvYXJkIHVwZGF0ZXMgYnkgODAwIG1zXG4gICAgYXdhaXQgZGVsYXkoNTAwKTtcblxuICAgIGxldCBvcmllbnRhdGlvbiA9IG51bGw7XG4gICAgbGV0IHg7XG4gICAgbGV0IHk7XG5cbiAgICAvL2lmIGF0dGFjayBxdWV1ZSBpcyBlbXB0eSwgcG9zaXRpb24gb2YgdGhlIG5leHQgYXR0YWNrIGlzIHJhbmRvbWx5IGdlbmVyYXRlZFxuICAgIGlmICh0aGlzLmF0dGFja1F1ZXVlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgeCA9IHRoaXMuYXR0YWNrUXVldWVbMF0ueDtcbiAgICAgIHkgPSB0aGlzLmF0dGFja1F1ZXVlWzBdLnk7XG4gICAgICBvcmllbnRhdGlvbiA9IHRoaXMuYXR0YWNrUXVldWVbMF0ub3JpZW50YXRpb247XG5cbiAgICAgIHRoaXMuYXR0YWNrUXVldWUuc2hpZnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgICAgIC8vbWFraW5nIHN1cmUgcG9zaXRpb24gaGFzbid0IGJlZW4gYXR0YWNrZWQgeWV0XG4gICAgICB3aGlsZSAoXG4gICAgICAgICEoXG4gICAgICAgICAgdGhpcy5vcHBvbmVudHNHYW1lYm9hcmQuYm9hcmRbeF1beV0gPT09IG51bGwgfHxcbiAgICAgICAgICB0aGlzLm9wcG9uZW50c0dhbWVib2FyZC5ib2FyZFt4XVt5XSBpbnN0YW5jZW9mIFNoaXBcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9pZiB0aGUgYXR0YWNrIHdhcyBzdWNjZXNzZnVsLCBkaWFnb25hbCBhZGphY2VudCBwb3NpdGlvbiBhcmUgcGxhY2VkIGluIGEgcXVldWUgb2YgdXBjb21pbmcgYXR0YWNrc1xuICAgIGlmICh0aGlzLm9wcG9uZW50c0dhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpKSB7XG4gICAgICBjb25zdCBkaXJlY3Rpb25zID0gW1xuICAgICAgICB7IHg6IC0xLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMCwgeTogMSB9LFxuICAgICAgICB7IHg6IDEsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAwLCB5OiAtMSB9LFxuICAgICAgXTtcblxuICAgICAgZm9yIChjb25zdCBkIG9mIGRpcmVjdGlvbnMpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ZWRYID0geCArIGQueDtcbiAgICAgICAgY29uc3QgdGFyZ2V0ZWRZID0geSArIGQueTtcblxuICAgICAgICAvL2RpYWdvbmFsIGFkamFjZW50IHBvc2l0aW9ucyBvZiBhIHN1Y2Nlc3NmdWxseSBoaXQgcG9zaXRpb24gYXJlIHF1ZXVlZFxuICAgICAgICBpZiAoXG4gICAgICAgICAgdGFyZ2V0ZWRYID49IDAgJiZcbiAgICAgICAgICB0YXJnZXRlZFggPD0gOSAmJlxuICAgICAgICAgIHRhcmdldGVkWSA+PSAwICYmXG4gICAgICAgICAgdGFyZ2V0ZWRZIDw9IDlcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5hdHRhY2tRdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgIHg6IHRhcmdldGVkWCxcbiAgICAgICAgICAgIHk6IHRhcmdldGVkWSxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBkLnggPT09IDAgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vbG9vcGluZyB0aHJvdWdoIHRoZSBhdHRhY2sgcXVldWUgdG8gcmVtb3ZlIGVsZW1lbnRzIG9mIGFuIGluYWRlcXVhdGUgb3JpZW50YXRpb25cbiAgICAgIGlmIChvcmllbnRhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXR0YWNrUXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAodGhpcy5hdHRhY2tRdWV1ZVtpXS5vcmllbnRhdGlvbiAhPT0gb3JpZW50YXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNrUXVldWUuc3BsaWNlKGksIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbeCwgeV07XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVsYXkobXMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG4iLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vc2hpcC5qcyc7XG5pbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7XG5cbmNvbnN0IE5FV19HQU1FID0gJ25ldyBnYW1lJztcbmNvbnN0IE5FWFRfUExBWUVSID0gJ25leHQgcGxheWVycyBtb3ZlJztcbmNvbnN0IEJPVF9NT1ZFID0gJ2JvdCBpcyBtYWtpbmcgYSBtb3ZlJztcbmNvbnN0IGVkaXRCb2FyZERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJvYXJkLWRpYWxvZycpO1xuXG5leHBvcnQgY2xhc3MgRE9NTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vJ3BsYXkgYWdhaW4nIGJ1dHRvbiBhcHBlYXJzIGluIGEgZGlhbG9nIGFmdGVyIGdhbWUgZW5kXG4gICAgY29uc3QgcGxheUFnYWluQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXktYWdhaW4tYnV0dG9uJyk7XG4gICAgcGxheUFnYWluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgUHViU3ViLnB1Ymxpc2goTkVXX0dBTUUpO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5kLWRpYWxvZycpLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICBzZXROYW1lQ2xpY2tMaXN0ZW5lcnMoKTtcblxuICAgIC8vcmVzZXQgYnV0dG9uXG4gICAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQtYnV0dG9uJyk7XG4gICAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBQdWJTdWIucHVibGlzaChORVdfR0FNRSk7XG4gICAgfSk7XG5cbiAgICAvL2hlYWRlciBidXR0b24gdG8gc2hvdyBzdGFydCBtZW51XG4gICAgY29uc3Qgc3RhcnRNZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LW1lbnUtYnV0dG9uJyk7XG4gICAgc3RhcnRNZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5zaG93U3RhcnRNZW51KCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNob3dTdGFydE1lbnUoKTtcbiAgfVxuXG4gIHBvcHVsYXRlQWN0aXZlUGxheWVyc0JvYXJkKHBsYXllcikge1xuICAgIGNvbnN0IGJvYXJkID0gcGxheWVyLmdhbWVib2FyZC5ib2FyZDtcblxuICAgIGNvbnN0IGJvYXJkR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvYXJkR3JpZC5jbGFzc0xpc3QuYWRkKCdib2FyZC1ncmlkJyk7XG5cbiAgICAvL2l0ZXJhdGVzIG92ZXIgcGxheWVyJ3MgYm9hcmQgdG8gY3JlYXRlIGEgYm9hcmQgaW4gSFRNTCBvdXQgb2YgaXRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgaWYgKGJvYXJkW2ldW2pdID09PSAnaGl0Jykge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0ID0gJ2hpdC1zaGlwJztcbiAgICAgICAgfSBlbHNlIGlmIChib2FyZFtpXVtqXSA9PT0gJ2F0dGFja2VkJykge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0ID0gJ2F0dGFja2VkJztcblxuICAgICAgICAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGRvdC5jbGFzc0xpc3QuYWRkKCdkb3QnKTtcbiAgICAgICAgICBpdGVtLmFwcGVuZChkb3QpO1xuICAgICAgICB9IGVsc2UgaWYgKGJvYXJkW2ldW2pdICE9PSBudWxsICYmIHBsYXllci50eXBlICE9PSAnY29tcHV0ZXInKSB7XG4gICAgICAgICAgLy9zZWNvbmQgY29uZGl0aW9uIG1ha2VzIHN1cmUgdGhlIHJlYWwgcGxheWVyIGRvZXNuJ3QgZ2V0IGEgZ2xpbXBzZSBvZiBib3QncyBib2FyZFxuXG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QgPSAnc2hpcCc7XG5cbiAgICAgICAgICBpdGVtLmlkID0gYCR7aX0tJHtqfWA7XG5cbiAgICAgICAgICBjb25zdCBoYXNTaGlwQWJvdmUgPVxuICAgICAgICAgICAgaSA+IDAgPyBwbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkW2kgLSAxXVtqXSBpbnN0YW5jZW9mIFNoaXAgOiBmYWxzZTtcbiAgICAgICAgICBjb25zdCBoYXNTaGlwTGVmdCA9XG4gICAgICAgICAgICBqID4gMCA/IHBsYXllci5nYW1lYm9hcmQuYm9hcmRbaV1baiAtIDFdIGluc3RhbmNlb2YgU2hpcCA6IGZhbHNlO1xuXG4gICAgICAgICAgLy9lbmFibGVzIG1vdmluZyBhIHNoaXAgYnkgZHJhZ2dpbmcgaXRzIGZpcnN0IGl0ZW0gYXQgdGhlIHN0YXJ0IG9mIGEgZ2FtZVxuICAgICAgICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmlzRWRpdGFibGUgJiYgIWhhc1NoaXBBYm92ZSAmJiAhaGFzU2hpcExlZnQpIHtcbiAgICAgICAgICAgIGl0ZW0uZHJhZ2dhYmxlID0gdHJ1ZTtcblxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdtb3ZlYWJsZS1zaGlwLWl0ZW0nKTtcblxuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCBldmVudC50YXJnZXQuaWQpO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHN1cnJvdW5kaW5nID0gcGxheWVyLmdhbWVib2FyZC5nZXRCb2F0TGVuZ3Roc0Zyb21Qb3NpdGlvbihcbiAgICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICAgIGpcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAvL2FkZHMgcGFkZGluZyBuZWVkZWQgdG8gbWFrZSB0aGUgZHJhZ2dlZCBpdGVtIHNpemUgb2YgdGhlIHNoaXAgaXQgaXMgcGFydCBvZlxuICAgICAgICAgICAgICBpZiAoc3Vycm91bmRpbmcuYmVsb3cgPiAwKVxuICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUucGFkZGluZ0JvdHRvbSA9IGAke3N1cnJvdW5kaW5nLmJlbG93ICogMTAwfSVgO1xuICAgICAgICAgICAgICBpZiAoc3Vycm91bmRpbmcucmlnaHR3YXJkcyA+IDApXG4gICAgICAgICAgICAgICAgaXRlbS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHtzdXJyb3VuZGluZy5yaWdodHdhcmRzICogMTAwfSVgO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vcmVtb3ZlcyBwYWRkaW5nIG9uIGEgcHJldmlvdXNseSBkcmFnZ2VkIGl0ZW1cbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgaXRlbS5zdHlsZS5wYWRkaW5nQm90dG9tID0gJzBweCc7XG4gICAgICAgICAgICAgIGl0ZW0uc3R5bGUucGFkZGluZ1JpZ2h0ID0gJzBweCc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL21ha2VzIHNoaXBzIG1vdmVhYmxlIGF0IHN0YXJ0IG9mIHRoZSBnYW1lXG4gICAgICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmlzRWRpdGFibGUpIHtcbiAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBjb25zdCBkcm9wcGVkSWQgPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dCcpO1xuXG4gICAgICAgICAgICBjb25zdCB4Q29vcmRpbmF0ZSA9IGRyb3BwZWRJZC5jaGFyQXQoMCk7XG4gICAgICAgICAgICBjb25zdCB5Q29vcmRpbmF0ZSA9IGRyb3BwZWRJZC5jaGFyQXQoMik7XG5cbiAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQubW92ZVNoaXAoXG4gICAgICAgICAgICAgIHBhcnNlSW50KHhDb29yZGluYXRlKSxcbiAgICAgICAgICAgICAgcGFyc2VJbnQoeUNvb3JkaW5hdGUpLFxuICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICBqXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlQWN0aXZlUGxheWVyc0JvYXJkKHBsYXllcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWl0ZW0nKTtcblxuICAgICAgICBib2FyZEdyaWQuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtwbGF5ZXIuZWxlbWVudFF1ZXJ5fSAucGxheWVycy1uYW1lYCkuc3R5bGUuY29sb3IgPVxuICAgICAgJyMzNDQ5NWUnO1xuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAke3BsYXllci5lbGVtZW50UXVlcnl9ICAuYm9hcmQtZ3JpZC1jb250YWluZXJgXG4gICAgKTtcblxuICAgIGJvYXJkQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGJvYXJkQ29udGFpbmVyLmFwcGVuZChib2FyZEdyaWQpO1xuICB9XG5cbiAgcG9wdWxhdGVPcHBvbmVudHNCb2FyZChwbGF5ZXIpIHtcbiAgICBjb25zdCBib2FyZCA9IHBsYXllci5nYW1lYm9hcmQuYm9hcmQ7XG5cbiAgICBjb25zdCBib2FyZEdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2FyZEdyaWQuY2xhc3NMaXN0LmFkZCgnYm9hcmQtZ3JpZCcpO1xuXG4gICAgLy9pdGVyYXRlcyBvdmVyIHBsYXllcidzIGJvYXJkIHRvIGNyZWF0ZSBhIGJvYXJkIGluIEhUTUwgb3V0IG9mIGl0XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGlmICghcGxheWVyLmdhbWVib2FyZC5pc0VkaXRhYmxlKSB7XG4gICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhpLCBqKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib2FyZFtpXVtqXSA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdCA9ICdoaXQtc2hpcCc7XG4gICAgICAgIH0gZWxzZSBpZiAoYm9hcmRbaV1bal0gPT09ICdhdHRhY2tlZCcpIHtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdCA9ICdhdHRhY2tlZCc7XG5cbiAgICAgICAgICBjb25zdCBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBkb3QuY2xhc3NMaXN0LmFkZCgnZG90Jyk7XG4gICAgICAgICAgaXRlbS5hcHBlbmQoZG90KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYm9hcmQtaXRlbScpO1xuXG4gICAgICAgIGJvYXJkR3JpZC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke3BsYXllci5lbGVtZW50UXVlcnl9IC5wbGF5ZXJzLW5hbWVgKS5zdHlsZS5jb2xvciA9XG4gICAgICAnI2ZmZic7XG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYCR7cGxheWVyLmVsZW1lbnRRdWVyeX0gIC5ib2FyZC1ncmlkLWNvbnRhaW5lcmBcbiAgICApO1xuXG4gICAgYm9hcmRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgYm9hcmRDb250YWluZXIuYXBwZW5kKGJvYXJkR3JpZCk7XG4gIH1cblxuICBwb3B1bGF0ZUJvYXJkKGZpcnN0UGxheWVyLCBzZWNvbmRQbGF5ZXIsIHBsYXllclN3aXRjaGVkID0gZmFsc2UpIHtcbiAgICBpZiAoZmlyc3RQbGF5ZXIuaXNBY3RpdmUpIHtcbiAgICAgIHRoaXMucG9wdWxhdGVBY3RpdmVQbGF5ZXJzQm9hcmQoZmlyc3RQbGF5ZXIpO1xuICAgICAgdGhpcy5wb3B1bGF0ZU9wcG9uZW50c0JvYXJkKHNlY29uZFBsYXllcik7XG5cbiAgICAgIGlmIChmaXJzdFBsYXllci5nYW1lYm9hcmQuaXNFZGl0YWJsZSkgdGhpcy5zaG93RWRpdE1lc3NhZ2UoZmlyc3RQbGF5ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBvcHVsYXRlQWN0aXZlUGxheWVyc0JvYXJkKHNlY29uZFBsYXllcik7XG4gICAgICB0aGlzLnBvcHVsYXRlT3Bwb25lbnRzQm9hcmQoZmlyc3RQbGF5ZXIpO1xuXG4gICAgICBpZiAoc2Vjb25kUGxheWVyLnR5cGUgPT09ICdyZWFsJyAmJiBzZWNvbmRQbGF5ZXIuZ2FtZWJvYXJkLmlzRWRpdGFibGUpXG4gICAgICAgIHRoaXMuc2hvd0VkaXRNZXNzYWdlKHNlY29uZFBsYXllcik7XG4gICAgfVxuXG4gICAgLy9yZXF1ZXN0IGEgJ3Bhc3MgZGV2aWNlIGRpYWxvZycgdG8gYmUgc2hvd24gd2hlbiB0aGUgYWN0aXZlIHBsYXllciBpcyBzd2l0Y2hlZCBpZiBib3RoIHBsYXllcnMgYXJlIHJlYWxcbiAgICBpZiAoc2Vjb25kUGxheWVyLnR5cGUgPT09ICdyZWFsJyAmJiBwbGF5ZXJTd2l0Y2hlZClcbiAgICAgIHRoaXMuc2hvd1Bhc3NEZXZpY2VEaWFsb2coXG4gICAgICAgIGZpcnN0UGxheWVyLmlzQWN0aXZlID8gZmlyc3RQbGF5ZXIubmFtZSA6IHNlY29uZFBsYXllci5uYW1lXG4gICAgICApO1xuICAgIGVsc2UgaWYgKHNlY29uZFBsYXllci50eXBlID09PSAnY29tcHV0ZXInKSBlZGl0Qm9hcmREaWFsb2cuY2xvc2UoKTtcbiAgfVxuXG4gIC8vZGlzcGxheWVkIGF0IGVuZCBvZiB0aGUgZ2FtZVxuICBzaG93RW5kRGlhbG9nKHdpbm5lcikge1xuICAgIGNvbnN0IGVuZERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmQtZGlhbG9nJyk7XG5cbiAgICBpZiAod2lubmVyLnR5cGUgPT09ICdjb21wdXRlcicpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmQtZGlhbG9nIC5tZXNzYWdlJykudGV4dENvbnRlbnQgPVxuICAgICAgICAnWW91IGxvc3QuIDovJztcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZC1kaWFsb2cgLm1lc3NhZ2UnKS50ZXh0Q29udGVudCA9XG4gICAgICAgIGBDb25ncmF0dWxhdGlvbnMgJHt3aW5uZXIubmFtZX0sIHlvdSB3b24hYDtcbiAgICB9XG5cbiAgICBlbmREaWFsb2cuc2hvd01vZGFsKCk7XG4gIH1cblxuICAvL3Nob3dzIGdhbWUgbW9kZSBvcHRpb25zXG4gIHNob3dTdGFydE1lbnUoKSB7XG4gICAgY29uc3QgUkVBTF9QTEFZRVJTX0dBTUUgPSAnc3RhcnQgZ2FtZSB3aXRoIHJlYWwgcGxheWVycyc7XG4gICAgY29uc3QgR0FNRV9XSVRIX0JPVCA9ICdzdGFydCBnYW1lIHdpdGggYSBib3QnO1xuXG4gICAgY29uc3Qgc3RhcnREaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtZGlhbG9nJyk7XG4gICAgc3RhcnREaWFsb2cuc2hvd01vZGFsKCk7XG5cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5yZWFsLW9wcG9uZW50LWJ1dHRvbicpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKFJFQUxfUExBWUVSU19HQU1FKTtcblxuICAgICAgICBzdGFydERpYWxvZy5jbG9zZSgpO1xuICAgICAgfSk7XG5cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXdpdGgtYm90LWJ1dHRvbicpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKEdBTUVfV0lUSF9CT1QpO1xuXG4gICAgICAgIHN0YXJ0RGlhbG9nLmNsb3NlKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8vZGlzcGxheWVkIHdoZW4gaXQncyBvcHBvbmVudHMgdHVybiB0byBtYWtlIGEgbW92ZVxuICBzaG93UGFzc0RldmljZURpYWxvZyhuZXh0UGxheWVyTmFtZSkge1xuICAgIGNvbnN0IHBhc3NEZXZpY2VEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFzcy1kZXZpY2UtZGlhbG9nJyk7XG4gICAgY29uc3QgbmV4dFBsYXllck5hbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy5wYXNzLWRldmljZS1kaWFsb2cgYnV0dG9uIHNwYW4nXG4gICAgKTtcbiAgICBjb25zdCBuZXh0UGxheWVyTmFtZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLnBhc3MtZGV2aWNlLWRpYWxvZyBoMiBzcGFuJ1xuICAgICk7XG4gICAgY29uc3QgZGV2aWNlUGFzc2VkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcucGFzcy1kZXZpY2UtZGlhbG9nIGJ1dHRvbidcbiAgICApO1xuXG4gICAgbmV4dFBsYXllck5hbWVIZWFkZXIudGV4dENvbnRlbnQgPSBuZXh0UGxheWVyTmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgIG5leHRQbGF5ZXJOYW1lQnV0dG9uLnRleHRDb250ZW50ID0gbmV4dFBsYXllck5hbWUudG9VcHBlckNhc2UoKTtcbiAgICBwYXNzRGV2aWNlRGlhbG9nLnNob3dNb2RhbCgpO1xuXG4gICAgZGV2aWNlUGFzc2VkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcGFzc0RldmljZURpYWxvZy5jbG9zZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLy9kaXNwbGF5cyBhIG1lc3NhZ2UgdGhhdCB0aGUgcGxheWVyIG1heSBtb3ZlIHRoZWlyIHNoaXBzIGFyb3VuZCB0aGUgYm9hcmRcbiAgc2hvd0VkaXRNZXNzYWdlKHBsYXllcikge1xuICAgIGNvbnN0IGVkaXRCb2FyZERpYWxvZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLmVkaXQtYm9hcmQtZGlhbG9nLWNvbnRhaW5lcidcbiAgICApO1xuXG4gICAgZWRpdEJvYXJkRGlhbG9nQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gJ1lvdSBtYXkgbW92ZSBzaGlwcyBhcm91bmQgdGhlIGJvYXJkIG5vdy4nO1xuXG4gICAgY29uc3QgZG9uZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRvbmVCdXR0b24udGV4dENvbnRlbnQgPSAnRE9ORSc7XG4gICAgZWRpdEJvYXJkRGlhbG9nQ29udGFpbmVyLmFwcGVuZChtZXNzYWdlLCBkb25lQnV0dG9uKTtcblxuICAgIGVkaXRCb2FyZERpYWxvZy5zaG93KCk7XG4gICAgZG9uZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGVkaXRCb2FyZERpYWxvZy5jbG9zZSgpO1xuICAgICAgcGxheWVyLmdhbWVib2FyZC5pc0VkaXRhYmxlID0gZmFsc2U7XG5cbiAgICAgIFB1YlN1Yi5wdWJsaXNoKE5FWFRfUExBWUVSKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vL3BsYXllcnMnIG5hbWVzIG1heSBiZSBlZGl0ZWQgYXQgYW55IHRpbWUgYnkgY2xpY2tpbmcgdGhlIG5hbWUgYmVsb3cgdGhlIGJvYXJkXG5mdW5jdGlvbiBzZXROYW1lQ2xpY2tMaXN0ZW5lcnMoKSB7XG4gIGNvbnN0IGNoYW5nZU5hbWVEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbmdlLW5hbWVzLWRpYWxvZycpO1xuXG4gIGNvbnN0IHBsYXllcnNOYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BsYXllcnMtbmFtZScpO1xuXG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBwbGF5ZXJzTmFtZXMpIHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY2hhbmdlTmFtZURpYWxvZy5zaG93TW9kYWwoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGNoYW5nZU5hbWVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW5nZS1uYW1lcy1kaWFsb2cgZm9ybScpO1xuXG4gIGNoYW5nZU5hbWVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB1cGRhdGVOYW1lcyhcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaXJzdC1uYW1lLWlucHV0JykudmFsdWUsXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2Vjb25kLW5hbWUtaW5wdXQnKS52YWx1ZVxuICAgICk7XG5cbiAgICBjaGFuZ2VOYW1lRm9ybS5yZXNldCgpO1xuICAgIGNoYW5nZU5hbWVEaWFsb2cuY2xvc2UoKTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbC1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjaGFuZ2VOYW1lRGlhbG9nLmNsb3NlKCk7XG4gIH0pO1xufVxuXG4vL3NlbmRzIHJlcXVlc3QgdG8gdXBkYXRlIHRoZSBuYW1lc1xuZnVuY3Rpb24gdXBkYXRlTmFtZXMobmFtZTEsIG5hbWUyKSB7XG4gIGNvbnN0IGZpcnN0TmFtZVBsYXllck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcuZmlyc3QtcGxheWVyIC5wbGF5ZXJzLW5hbWUnXG4gICk7XG4gIGNvbnN0IHNlY29uZE5hbWVQbGF5ZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLnNlY29uZC1wbGF5ZXIgLnBsYXllcnMtbmFtZSdcbiAgKTtcblxuICBmaXJzdE5hbWVQbGF5ZXJOYW1lLnRleHRDb250ZW50ID0gbmFtZTEudHJpbSgpID09PSAnJyA/ICdQbGF5ZXIgMScgOiBuYW1lMTtcbiAgc2Vjb25kTmFtZVBsYXllck5hbWUudGV4dENvbnRlbnQgPSBuYW1lMi50cmltKCkgPT09ICcnID8gJ1BsYXllciAyJyA6IG5hbWUyO1xuXG4gIGNvbnN0IENIQU5HRV9OQU1FUyA9ICdjaGFuZ2UgbmFtZXMnO1xuICBQdWJTdWIucHVibGlzaChDSEFOR0VfTkFNRVMsIFtuYW1lMSwgbmFtZTJdKTtcbn1cblxuLy9zaG93cyBkaWFsb2cgd2hpbGUgYm90IGlzIG1ha2luZyBhIG1vdmVcblB1YlN1Yi5zdWJzY3JpYmUoQk9UX01PVkUsICgpID0+IHtcbiAgY29uc3QgYm90TW92ZURpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3QtYXR0YWNrLWRpYWxvZycpO1xuICBib3RNb3ZlRGlhbG9nLnNob3dNb2RhbCgpO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4gYm90TW92ZURpYWxvZy5jbG9zZSgpLCA2MDApO1xufSk7XG4iLCJpbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwJztcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC9pc0VxdWFsJztcblxuZXhwb3J0IGNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMCB9LCAoKSA9PiBBcnJheSgxMCkuZmlsbChudWxsKSk7XG4gICAgdGhpcy5pc0VkaXRhYmxlID0gdHJ1ZTtcbiAgfVxuXG4gIC8vY2hlY2tzIGlmIGEgcG9zaXRpb24gaXMgZW1wdHlcbiAgaXNFbXB0eSh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuYm9hcmRbeF1beV0gPT09IG51bGw7XG4gIH1cblxuICBwbGFjZVNoaXAoc2hpcCwgeCwgeSwgb3JpZW50YXRpb24pIHtcbiAgICAvL2NoZWNraW5nIGlmIHRoZXJlIGlzIGZyZWUgc3BhY2UgaW4gYW5kIGFyb3VuZCB0aGUgY2hvc2VuIGFyZWFcbiAgICAvL2Nhc2UgZm9yIGEgaG9yaXpvbnRhbGx5IGFsaWduZWQgc2hpcFxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAvL2NoZWNraW5nIGlmIHNoaXAgaXMgdG9vIGxhcmdlXG4gICAgICBpZiAoeSArIHNoaXAubGVuZ3RoID4gMTApIHJldHVybiBmYWxzZTtcblxuICAgICAgaWYgKCF0aGlzLmNhblNoaXBCZVBsYWNlZEhvcml6b250YWxseShzaGlwLmxlbmd0aCwgeCwgeSkpIHJldHVybiBmYWxzZTtcblxuICAgICAgLy9wbGFjaW5nIGEgc2hpcFxuICAgICAgZm9yIChsZXQgaiA9IHk7IGogPCB5ICsgc2hpcC5sZW5ndGg7IGorKykge1xuICAgICAgICB0aGlzLmJvYXJkW3hdW2pdID0gc2hpcDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vY2FzZSBmb3IgYSB2ZXJ0aWNhbGx5IGFsaWduZWQgc2hpcFxuICAgIGVsc2Uge1xuICAgICAgLy9jaGVja2luZyBpZiBzaGlwIGlzIHRvbyBsYXJnZVxuICAgICAgaWYgKHggKyBzaGlwLmxlbmd0aCA+IDEwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGlmICghdGhpcy5jYW5TaGlwQmVQbGFjZWRWZXJ0aWNhbGx5KHNoaXAubGVuZ3RoLCB4LCB5KSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAvL3BsYWNpbmcgYSBzaGlwXG4gICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbaV1beV0gPSBzaGlwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjYW5TaGlwQmVQbGFjZWRIb3Jpem9udGFsbHkobGVuZ3RoLCB4LCB5LCBzaGlwRXhjZXB0aW9uID0gMCkge1xuICAgIGZvciAobGV0IGkgPSBNYXRoLm1heCh4IC0gMSwgMCk7IGkgPD0gTWF0aC5taW4oOSwgeCArIDEpOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSBNYXRoLm1heCgwLCB5IC0gMSk7IGogPD0gTWF0aC5taW4oOSwgeSArIGxlbmd0aCk7IGorKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIXRoaXMuaXNFbXB0eShpLCBqKSAmJlxuICAgICAgICAgIHRoaXMuYm9hcmRbaV1bal0gJiZcbiAgICAgICAgICAhaXNFcXVhbCh0aGlzLmJvYXJkW2ldW2pdLCBzaGlwRXhjZXB0aW9uKVxuICAgICAgICApXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY2FuU2hpcEJlUGxhY2VkVmVydGljYWxseShsZW5ndGgsIHgsIHksIHNoaXBFeGNlcHRpb24gPSAwKSB7XG4gICAgZm9yIChsZXQgaiA9IE1hdGgubWF4KDAsIHkgLSAxKTsgaiA8PSBNYXRoLm1pbig5LCB5ICsgMSk7IGorKykge1xuICAgICAgZm9yIChsZXQgaSA9IE1hdGgubWF4KDAsIHggLSAxKTsgaSA8PSBNYXRoLm1pbig5LCB4ICsgbGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0VtcHR5KGksIGopICYmICFpc0VxdWFsKHRoaXMuYm9hcmRbaV1bal0sIHNoaXBFeGNlcHRpb24pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICAvL2RpcmVjdGlvbnMgZm9yIGFkamFjZW50IGRpYWdvbmFsIG5laWdoYm9yc1xuICAgIGNvbnN0IGRpcmVjdGlvbnMgPSBbXG4gICAgICB7IHg6IC0xLCB5OiAtMSB9LFxuICAgICAgeyB4OiAtMSwgeTogMSB9LFxuICAgICAgeyB4OiAxLCB5OiAtMSB9LFxuICAgICAgeyB4OiAxLCB5OiAxIH0sXG4gICAgXTtcblxuICAgIGxldCB3YXNIaXQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLmJvYXJkW3hdW3ldID09PSBudWxsKSB7XG4gICAgICB0aGlzLmJvYXJkW3hdW3ldID0gJ2F0dGFja2VkJztcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdGhpcy5ib2FyZFt4XVt5XSAhPT0gbnVsbCAmJlxuICAgICAgdGhpcy5ib2FyZFt4XVt5XSAhPT0gJ2hpdCcgJiZcbiAgICAgIHRoaXMuYm9hcmRbeF1beV0gIT09ICdhdHRhY2tlZCdcbiAgICApIHtcbiAgICAgIHRoaXMuYm9hcmRbeF1beV0uaGl0KCk7XG4gICAgICB0aGlzLmJvYXJkW3hdW3ldID0gJ2hpdCc7XG5cbiAgICAgIC8vbWFya2luZyBhZGphY2VudCBkaWFnb25hbCBuZWlnaGJvcnMgYXMgYXR0YWNrZWRcbiAgICAgIGZvciAoY29uc3QgZCBvZiBkaXJlY3Rpb25zKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldGVkWCA9IHggKyBkLng7XG4gICAgICAgIGNvbnN0IHRhcmdldGVkWSA9IHkgKyBkLnk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRhcmdldGVkWCA+PSAwICYmXG4gICAgICAgICAgdGFyZ2V0ZWRYIDw9IDkgJiZcbiAgICAgICAgICB0YXJnZXRlZFkgPj0gMCAmJlxuICAgICAgICAgIHRhcmdldGVkWSA8PSA5XG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuYm9hcmRbdGFyZ2V0ZWRYXVt0YXJnZXRlZFldID0gJ2F0dGFja2VkJztcbiAgICAgICAgfVxuXG4gICAgICAgIHdhc0hpdCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IFNBTUVfUExBWUVSID0gJ3NhbWUgcGxheWVycyBtb3ZlJztcbiAgICAgIFB1YlN1Yi5wdWJsaXNoKFNBTUVfUExBWUVSKTtcblxuICAgICAgcmV0dXJuIHdhc0hpdDtcbiAgICB9XG5cbiAgICBjb25zdCBORVhUX1BMQVlFUiA9ICduZXh0IHBsYXllcnMgbW92ZSc7XG4gICAgUHViU3ViLnB1Ymxpc2goTkVYVF9QTEFZRVIpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGhhdmVBbGxCZWVuU3VuaygpIHtcbiAgICByZXR1cm4gIXRoaXMuYm9hcmQuc29tZSgocm93KSA9PlxuICAgICAgcm93LnNvbWUoKGl0ZW0pID0+IGl0ZW0gIT09IG51bGwgJiYgaXRlbSAhPT0gJ2hpdCcgJiYgaXRlbSAhPT0gJ2F0dGFja2VkJylcbiAgICApO1xuICB9XG5cbiAgLy9jaGVja3MgaWYgcG9zaXRpb24gaXMgd2l0aGluIHRoZSBib2FyZFxuICAjaXNQb3NpdGlvblZhbGlkKHgsIHkpIHtcbiAgICByZXR1cm4geCA+PSAwICYmIHggPD0gOSAmJiB5ID49IDAgJiYgeSA8PSA5O1xuICB9XG5cbiAgLy9kZXRlcm1pbmVzIHBvc2l0aW9uIG9mIGEgbW92ZWQgc2hpcFxuICBnZXRNb3ZlZFNoaXBQb3NpdGlvbnMob3JpZ2luYWxYLCBvcmlnaW5hbFksIG5ld1gsIG5ld1kpIHtcbiAgICBjb25zdCBkaXJlY3Rpb25zID0gW1xuICAgICAgeyB4OiAtMSwgeTogMCB9LFxuICAgICAgeyB4OiAxLCB5OiAwIH0sXG4gICAgICB7IHg6IDAsIHk6IDEgfSxcbiAgICAgIHsgeDogMCwgeTogLTEgfSxcbiAgICBdO1xuXG4gICAgbGV0IG9sZFBvc2l0aW9ucyA9IFtbb3JpZ2luYWxYLCBvcmlnaW5hbFldXTtcbiAgICBsZXQgbmV3UG9zaXRpb25zID0gW1tuZXdYLCBuZXdZXV07XG5cbiAgICBmb3IgKGxldCBkaXJlY3Rpb25JbmRleCA9IDA7IGRpcmVjdGlvbkluZGV4IDw9IDM7IGRpcmVjdGlvbkluZGV4KyspIHtcbiAgICAgIGxldCB4TW92ZSA9IGRpcmVjdGlvbnNbZGlyZWN0aW9uSW5kZXhdLng7XG4gICAgICBsZXQgeU1vdmUgPSBkaXJlY3Rpb25zW2RpcmVjdGlvbkluZGV4XS55O1xuXG4gICAgICAvL2Z1bmN0aW9uIGlzRW1wdHkgbWF5IGZhaWwgaWYgKHgseSkgaWYgb3V0IG9mIGJvYXJkIGJvdW5kcywgc28gaXQgbXVzdCBiZSBpbiBzZWNvbmQgcGxhY2VcbiAgICAgIHdoaWxlIChcbiAgICAgICAgdGhpcy4jaXNQb3NpdGlvblZhbGlkKG9yaWdpbmFsWCArIHhNb3ZlLCBvcmlnaW5hbFkgKyB5TW92ZSkgJiZcbiAgICAgICAgIXRoaXMuaXNFbXB0eShvcmlnaW5hbFggKyB4TW92ZSwgb3JpZ2luYWxZICsgeU1vdmUpXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgbmV3WEl0ZW0gPSBuZXdYICsgeE1vdmU7XG4gICAgICAgIGNvbnN0IG5ld1lJdGVtID0gbmV3WSArIHlNb3ZlO1xuXG4gICAgICAgIGlmICghdGhpcy4jaXNQb3NpdGlvblZhbGlkKG5ld1hJdGVtLCBuZXdZSXRlbSkpIHJldHVybiBmYWxzZTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5pc0VtcHR5KG5ld1hJdGVtLCBuZXdZSXRlbSkgfHxcbiAgICAgICAgICBpc0VxdWFsKFxuICAgICAgICAgICAgdGhpcy5ib2FyZFtuZXdYSXRlbV1bbmV3WUl0ZW1dLFxuICAgICAgICAgICAgdGhpcy5ib2FyZFtvcmlnaW5hbFhdW29yaWdpbmFsWV1cbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIG5ld1Bvc2l0aW9ucy5wdXNoKFtuZXdYSXRlbSwgbmV3WUl0ZW1dKTtcbiAgICAgICAgICBvbGRQb3NpdGlvbnMucHVzaChbb3JpZ2luYWxYICsgeE1vdmUsIG9yaWdpbmFsWSArIHlNb3ZlXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgeE1vdmUgPSBkaXJlY3Rpb25zW2RpcmVjdGlvbkluZGV4XS54ICsgeE1vdmU7XG4gICAgICAgIHlNb3ZlID0gZGlyZWN0aW9uc1tkaXJlY3Rpb25JbmRleF0ueSArIHlNb3ZlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdQb3NpdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLmNhblNoaXBCZVBsYWNlZEhvcml6b250YWxseShcbiAgICAgICAgICBuZXdQb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIG5ld1Bvc2l0aW9uc1swXVswXSxcbiAgICAgICAgICBuZXdQb3NpdGlvbnNbMF1bMV0sXG4gICAgICAgICAgdGhpcy5ib2FyZFtvcmlnaW5hbFhdW29yaWdpbmFsWV1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4geyBuZXdQb3NpdGlvbnM6IG5ld1Bvc2l0aW9ucywgb2xkUG9zaXRpb25zOiBvbGRQb3NpdGlvbnMgfTtcbiAgICB9XG4gICAgLy9ob3Jpem9udGFsXG4gICAgZWxzZSBpZiAobmV3UG9zaXRpb25zWzBdWzBdID09PSBuZXdQb3NpdGlvbnNbMV1bMF0pIHtcbiAgICAgIG5ld1Bvc2l0aW9ucy5zb3J0KChhLCBiKSA9PiBhWzFdIC0gYlsxXSk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuY2FuU2hpcEJlUGxhY2VkSG9yaXpvbnRhbGx5KFxuICAgICAgICAgIG5ld1Bvc2l0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgbmV3UG9zaXRpb25zWzBdWzBdLFxuICAgICAgICAgIG5ld1Bvc2l0aW9uc1swXVsxXSxcbiAgICAgICAgICB0aGlzLmJvYXJkW29yaWdpbmFsWF1bb3JpZ2luYWxZXVxuICAgICAgICApXG4gICAgICApXG4gICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgb2xkUG9zaXRpb25zLnNvcnQoKGEsIGIpID0+IGFbMV0gLSBiWzFdKTtcbiAgICB9XG4gICAgLy92ZXJ0aWNhbFxuICAgIGVsc2UgaWYgKG5ld1Bvc2l0aW9uc1swXVsxXSA9PT0gbmV3UG9zaXRpb25zWzFdWzFdKSB7XG4gICAgICBuZXdQb3NpdGlvbnMuc29ydCgoYSwgYikgPT4gYVswXSAtIGJbMF0pO1xuXG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLmNhblNoaXBCZVBsYWNlZFZlcnRpY2FsbHkoXG4gICAgICAgICAgbmV3UG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBuZXdQb3NpdGlvbnNbMF1bMF0sXG4gICAgICAgICAgbmV3UG9zaXRpb25zWzBdWzFdLFxuICAgICAgICAgIHRoaXMuYm9hcmRbb3JpZ2luYWxYXVtvcmlnaW5hbFldXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBvbGRQb3NpdGlvbnMuc29ydCgoYSwgYikgPT4gYVswXSAtIGJbMF0pO1xuICAgIH1cblxuICAgIHJldHVybiB7IG5ld1Bvc2l0aW9uczogbmV3UG9zaXRpb25zLCBvbGRQb3NpdGlvbnM6IG9sZFBvc2l0aW9ucyB9O1xuICB9XG5cbiAgLy9sb2dpYyBmb3IgbW92aW5nIHRoZSBzaGlwIHNob3VsZCBiZSBsb2NhdGVkIGhlcmUsIG5vdCBpbiBkb21tYW5hZ2VyLCBmb2N1cyBvZiBkb21tYW5hZ2VyIHNob3VsZCBiZSB0aGUgRE9NLCBkaXNwbGF5aW5nIGRhdGFcbiAgbW92ZVNoaXAob3JpZ2luYWxYLCBvcmlnaW5hbFksIG5ld1gsIG5ld1kpIHtcbiAgICBpZiAoXG4gICAgICAob3JpZ2luYWxYID09PSBuZXdYICYmIG9yaWdpbmFsWSA9PT0gbmV3WSkgfHxcbiAgICAgICghdGhpcy5pc0VtcHR5KG5ld1gsIG5ld1kpICYmXG4gICAgICAgICFpc0VxdWFsKHRoaXMuYm9hcmRbb3JpZ2luYWxYXVtvcmlnaW5hbFldLCB0aGlzLmJvYXJkW25ld1hdW25ld1ldKSlcbiAgICApXG4gICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBwb3NpdGlvbnMgPSB0aGlzLmdldE1vdmVkU2hpcFBvc2l0aW9ucyhcbiAgICAgIG9yaWdpbmFsWCxcbiAgICAgIG9yaWdpbmFsWSxcbiAgICAgIG5ld1gsXG4gICAgICBuZXdZXG4gICAgKTtcblxuICAgIGlmICghcG9zaXRpb25zKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvL3JlbW92ZSB0aGUgb2xkIHNoaXBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc2l0aW9ucy5vbGRQb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IFt4T2xkLCB5T2xkXSA9IHBvc2l0aW9ucy5vbGRQb3NpdGlvbnNbaV07XG5cbiAgICAgIHRoaXMuYm9hcmRbeE9sZF1beU9sZF0gPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMucGxhY2VTaGlwKFxuICAgICAgbmV3IFNoaXAocG9zaXRpb25zLm5ld1Bvc2l0aW9ucy5sZW5ndGgpLFxuICAgICAgcG9zaXRpb25zLm5ld1Bvc2l0aW9uc1swXVswXSxcbiAgICAgIHBvc2l0aW9ucy5uZXdQb3NpdGlvbnNbMF1bMV0sXG4gICAgICBwb3NpdGlvbnMubmV3UG9zaXRpb25zLmxlbmd0aCA9PT0gMVxuICAgICAgICA/ICdob3Jpem9udGFsJ1xuICAgICAgICA6IHBvc2l0aW9ucy5uZXdQb3NpdGlvbnNbMF1bMF0gPT09IHBvc2l0aW9ucy5uZXdQb3NpdGlvbnNbMV1bMF1cbiAgICAgICAgICA/ICdob3Jpem9udGFsJ1xuICAgICAgICAgIDogJ3ZlcnRpY2FsJ1xuICAgICk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vcmV0dXJucyBudW1iZXIgb2YgYWRqYWNlbnQgaXRlbXMgb24gZWFjaCBzaWRlIG9mIHRoZSBjaG9zZW4gcG9zaXRpb25cbiAgZ2V0Qm9hdExlbmd0aHNGcm9tUG9zaXRpb24oeCwgeSkge1xuICAgIGNvbnN0IGRpcmVjdGlvbnMgPSBbXG4gICAgICB7IHg6IC0xLCB5OiAwLCBxdWFudGl0eTogMCB9LFxuICAgICAgeyB4OiAwLCB5OiAxLCBxdWFudGl0eTogMCB9LFxuICAgICAgeyB4OiAxLCB5OiAwLCBxdWFudGl0eTogMCB9LFxuICAgICAgeyB4OiAwLCB5OiAtMSwgcXVhbnRpdHk6IDAgfSxcbiAgICBdO1xuXG4gICAgZm9yIChsZXQgZGlyZWN0aW9uSW5kZXggPSAwOyBkaXJlY3Rpb25JbmRleCA8PSAzOyBkaXJlY3Rpb25JbmRleCsrKSB7XG4gICAgICBsZXQgY3VycmVudFggPSB4ICsgZGlyZWN0aW9uc1tkaXJlY3Rpb25JbmRleF0ueDtcbiAgICAgIGxldCBjdXJyZW50WSA9IHkgKyBkaXJlY3Rpb25zW2RpcmVjdGlvbkluZGV4XS55O1xuXG4gICAgICB3aGlsZSAoXG4gICAgICAgIHRoaXMuI2lzUG9zaXRpb25WYWxpZChjdXJyZW50WCwgY3VycmVudFkpICYmXG4gICAgICAgICF0aGlzLmlzRW1wdHkoY3VycmVudFgsIGN1cnJlbnRZKVxuICAgICAgKSB7XG4gICAgICAgIGRpcmVjdGlvbnNbZGlyZWN0aW9uSW5kZXhdLnF1YW50aXR5Kys7XG5cbiAgICAgICAgY3VycmVudFggKz0gZGlyZWN0aW9uc1tkaXJlY3Rpb25JbmRleF0ueDtcbiAgICAgICAgY3VycmVudFkgKz0gZGlyZWN0aW9uc1tkaXJlY3Rpb25JbmRleF0ueTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgYWJvdmU6IGRpcmVjdGlvbnNbMF0ucXVhbnRpdHksXG4gICAgICByaWdodHdhcmRzOiBkaXJlY3Rpb25zWzFdLnF1YW50aXR5LFxuICAgICAgYmVsb3c6IGRpcmVjdGlvbnNbMl0ucXVhbnRpdHksXG4gICAgICBsZWZ0d2FyZHM6IGRpcmVjdGlvbnNbM10ucXVhbnRpdHksXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuaW1wb3J0IHsgQm90IH0gZnJvbSAnLi9ib3QuanMnO1xuXG4vL1R3byB0eXBlcyBvZiBwbGF5ZXJzOiByZWFsIGFuZCBjb21wdXRlciBwbGF5ZXJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCB0eXBlLCBlbGVtZW50UXVlcnksIGlzQWN0aXZlLCBvcHBvbmVudHNCb2FyZCA9IG51bGwpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy5lbGVtZW50UXVlcnkgPSBlbGVtZW50UXVlcnk7XG4gICAgdGhpcy5pc0FjdGl2ZSA9IGlzQWN0aXZlO1xuICAgIGlmIChvcHBvbmVudHNCb2FyZCAhPT0gbnVsbCAmJiB0eXBlID09PSAnY29tcHV0ZXInKSB7XG4gICAgICB0aGlzLmJvdCA9IG5ldyBCb3Qob3Bwb25lbnRzQm9hcmQpO1xuICAgIH1cbiAgfVxuXG4gIHNldEFzQWN0aXZlKCkge1xuICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgc2V0QXNPcHBvbmVudCgpIHtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICBjaGFuZ2VOYW1lKG5ld05hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMudGltZXNIaXQgPSAwO1xuICAgIHRoaXMuaGFzQmVlblN1bmsgPSBmYWxzZTtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICB0aGlzLnRpbWVzSGl0ICs9IDE7XG5cbiAgICBpZiAodGhpcy50aW1lc0hpdCA9PT0gdGhpcy5sZW5ndGgpIHRoaXMuaGFzQmVlblN1bmsgPSB0cnVlO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLmhhc0JlZW5TdW5rO1xuICB9XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9tb3ZlLWljb24uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tYmxvY2stZGltZW5zaW9uOiBtaW4oNTBweCwgY2FsYyg0dncpKTtcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMzQ0OTVlO1xufVxuXG4qIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi8qRGVmYXVsdCBzdHlsZXMqL1xuYm9keSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxucCxcbnVsW2NsYXNzXSxcbm9sW2NsYXNzXSxcbmxpLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmJsb2NrcXVvdGUsXG5kbCxcbmRkIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcbn1cblxuLypCYWNrZ3JvdW5kIGFuaW1hdGlvbiovXG5ib2R5LFxuLnN0YXJ0LWRpYWxvZyB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNiMWFmZmYsICNiYmU5ZmYsICNmZmZlZDMpO1xuICBhbmltYXRpb246IHB1bHNlQmFja2dyb3VuZCA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBwdWxzZUJhY2tncm91bmQge1xuICAwJSxcbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIH1cbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMjAwJTtcbiAgfVxufVxuXG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEycHggMThweDtcbn1cblxuLmhlYWRlci1idXR0b25zIGJ1dHRvbjpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5oZWFkZXIgYnV0dG9uLFxuLnN0YXJ0LWRpYWxvZyBidXR0b24sXG4uZGV2aWNlLXBhc3NlZC1idXR0b24sXG4uZWRpdC1ib2FyZC1kaWFsb2cgYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuXG5oZWFkZXIgYnV0dG9uLFxuLnN0YXJ0LWRpYWxvZyBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmRldmljZS1wYXNzZWQtYnV0dG9uLFxuLmVkaXQtYm9hcmQtZGlhbG9nIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnN0YXJ0LWRpYWxvZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnN0YXJ0LWRpYWxvZyBidXR0b24ge1xuICBwYWRkaW5nOiAxMHB4IHB4O1xufVxuXG4uc3RhcnQtZGlhbG9nIGgxIHtcbiAgZm9udC1zaXplOiAyLjRlbTtcbn1cblxuLnN0YXJ0LWRpYWxvZy1jb250ZW50LFxuLnBhc3MtZGV2aWNlLWRpYWxvZy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBnYXA6IG1pbig0MCUsIDMwMHB4KTtcbn1cblxuLnBhc3MtZGV2aWNlLWRpYWxvZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmVkaXQtYm9hcmQtZGlhbG9nIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogMDtcbn1cblxuLmVkaXQtYm9hcmQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucXVlcnktY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuXG4ucXVlcnktY29udGFpbmVyIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZmlyc3QtcGxheWVyLFxuLnNlY29uZC1wbGF5ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNTAlO1xuICBnYXA6IDEycHg7XG59XG5cbi5ib2FyZC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIHZhcigtLWJsb2NrLWRpbWVuc2lvbikpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgdmFyKC0tYmxvY2stZGltZW5zaW9uKSk7XG59XG5cbi5ib2FyZC1pdGVtIHtcbiAgaGVpZ2h0OiB2YXIoLS1ibG9jay1kaW1lbnNpb24pO1xuICB3aWR0aDogdmFyKC0tYmxvY2stZGltZW5zaW9uKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbi5ib2FyZC1pdGVtOmhvdmVyLFxuLnN0YXJ0LWRpYWxvZyBidXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLnNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuLm1vdmVhYmxlLXNoaXAtaXRlbSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjYWxjKHZhcigtLWJsb2NrLWRpbWVuc2lvbikgLyAyKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uaGl0LXNoaXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nLXRvcDogLTRweDtcbn1cblxuLmhpdC1zaGlwOjpiZWZvcmUsXG4uaGl0LXNoaXA6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbi5oaXQtc2hpcDo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4uaGl0LXNoaXA6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuLmF0dGFja2VkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kb3Qge1xuICB3aWR0aDogY2FsYyh2YXIoLS1ibG9jay1kaW1lbnNpb24pIC8gMyk7XG4gIGhlaWdodDogY2FsYyh2YXIoLS1ibG9jay1kaW1lbnNpb24pIC8gMyk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbi5lbmQtZGlhbG9nLFxuLmNoYW5nZS1uYW1lcy1kaWFsb2csXG4uYm90LWF0dGFjay1kaWFsb2cge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5ib3QtYXR0YWNrLWRpYWxvZy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4ucHJvY2Vzcy1hbmltYXRpb24ge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBhbmltYXRpb246IG1vdmUgMC42cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgbWFyZ2luOiAwIDMwJTtcbn1cblxuQGtleWZyYW1lcyBtb3ZlIHtcbiAgMCUge1xuICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xuICB9XG4gIDEwMCUge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICB9XG59XG5cbi5lbmQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbn1cblxuLmVuZC1kaWFsb2cgcCB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi5lbmQtZGlhbG9nIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uY2hhbmdlLW5hbWVzLWRpYWxvZyBmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5jaGFuZ2UtbmFtZXMtZGlhbG9nIGlucHV0LFxuLmNoYW5nZS1uYW1lcy1kaWFsb2cgYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbn1cblxuLmNoYW5nZS1uYW1lcy1kaWFsb2cgaW5wdXRbdHlwZT0ndGV4dCddIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcbn1cblxuLmNoYW5nZS1uYW1lcy1kaWFsb2cgaW5wdXRbdHlwZT0nc3VibWl0J10ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbmJ1dHRvbjpob3Zlcixcbi5wbGF5ZXJzLW5hbWU6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuODtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVDQUF1QztFQUN2Qyx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUEsaUJBQWlCO0FBQ2pCOzs7Ozs7Ozs7Ozs7OztFQWNFLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1DQUFtQztBQUNyQzs7QUFFQSx1QkFBdUI7QUFDdkI7O0VBRUUsOERBQThEO0VBQzlELGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFOztJQUVFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7OztFQUlFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBOztFQUVFLHNDQUFzQztFQUN0QyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlEQUF5RDtFQUN6RCxzREFBc0Q7QUFDeEQ7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLHNDQUFzQztBQUN4Qzs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UseURBQXdDO0VBQ3hDLGlEQUFpRDtFQUNqRCw0QkFBNEI7RUFDNUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixzQ0FBc0M7QUFDeEM7O0FBRUE7OztFQUdFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0NBQXNDO0VBQ3RDLHlDQUF5QztFQUN6QyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7O0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGVBQWU7RUFDZixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1ibG9jay1kaW1lbnNpb246IG1pbig1MHB4LCBjYWxjKDR2dykpO1xcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMzQ0OTVlO1xcbn1cXG5cXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4vKkRlZmF1bHQgc3R5bGVzKi9cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbnAsXFxudWxbY2xhc3NdLFxcbm9sW2NsYXNzXSxcXG5saSxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG59XFxuXFxuLypCYWNrZ3JvdW5kIGFuaW1hdGlvbiovXFxuYm9keSxcXG4uc3RhcnQtZGlhbG9nIHtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNiMWFmZmYsICNiYmU5ZmYsICNmZmZlZDMpO1xcbiAgYW5pbWF0aW9uOiBwdWxzZUJhY2tncm91bmQgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgcHVsc2VCYWNrZ3JvdW5kIHtcXG4gIDAlLFxcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDIwMCU7XFxuICB9XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMTJweCAxOHB4O1xcbn1cXG5cXG4uaGVhZGVyLWJ1dHRvbnMgYnV0dG9uOmZpcnN0LW9mLXR5cGUge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG5oZWFkZXIgYnV0dG9uLFxcbi5zdGFydC1kaWFsb2cgYnV0dG9uLFxcbi5kZXZpY2UtcGFzc2VkLWJ1dHRvbixcXG4uZWRpdC1ib2FyZC1kaWFsb2cgYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxuaGVhZGVyIGJ1dHRvbixcXG4uc3RhcnQtZGlhbG9nIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5kZXZpY2UtcGFzc2VkLWJ1dHRvbixcXG4uZWRpdC1ib2FyZC1kaWFsb2cgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5zdGFydC1kaWFsb2cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnN0YXJ0LWRpYWxvZyBidXR0b24ge1xcbiAgcGFkZGluZzogMTBweCBweDtcXG59XFxuXFxuLnN0YXJ0LWRpYWxvZyBoMSB7XFxuICBmb250LXNpemU6IDIuNGVtO1xcbn1cXG5cXG4uc3RhcnQtZGlhbG9nLWNvbnRlbnQsXFxuLnBhc3MtZGV2aWNlLWRpYWxvZy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBnYXA6IG1pbig0MCUsIDMwMHB4KTtcXG59XFxuXFxuLnBhc3MtZGV2aWNlLWRpYWxvZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZWRpdC1ib2FyZC1kaWFsb2cge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuLmVkaXQtYm9hcmQtZGlhbG9nLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnF1ZXJ5LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5xdWVyeS1jb250YWluZXIgcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5maXJzdC1wbGF5ZXIsXFxuLnNlY29uZC1wbGF5ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogNTAlO1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4uYm9hcmQtZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIHZhcigtLWJsb2NrLWRpbWVuc2lvbikpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIHZhcigtLWJsb2NrLWRpbWVuc2lvbikpO1xcbn1cXG5cXG4uYm9hcmQtaXRlbSB7XFxuICBoZWlnaHQ6IHZhcigtLWJsb2NrLWRpbWVuc2lvbik7XFxuICB3aWR0aDogdmFyKC0tYmxvY2stZGltZW5zaW9uKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4uYm9hcmQtaXRlbTpob3ZlcixcXG4uc3RhcnQtZGlhbG9nIGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4ubW92ZWFibGUtc2hpcC1pdGVtIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9tb3ZlLWljb24uc3ZnJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNhbGModmFyKC0tYmxvY2stZGltZW5zaW9uKSAvIDIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLmhpdC1zaGlwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZy10b3A6IC00cHg7XFxufVxcblxcbi5oaXQtc2hpcDo6YmVmb3JlLFxcbi5oaXQtc2hpcDo6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5oaXQtc2hpcDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLmhpdC1zaGlwOjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cXG4uYXR0YWNrZWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRvdCB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1ibG9jay1kaW1lbnNpb24pIC8gMyk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYmxvY2stZGltZW5zaW9uKSAvIDMpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5lbmQtZGlhbG9nLFxcbi5jaGFuZ2UtbmFtZXMtZGlhbG9nLFxcbi5ib3QtYXR0YWNrLWRpYWxvZyB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4uYm90LWF0dGFjay1kaWFsb2ctY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucHJvY2Vzcy1hbmltYXRpb24ge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGFuaW1hdGlvbjogbW92ZSAwLjZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xcbiAgbWFyZ2luOiAwIDMwJTtcXG59XFxuXFxuQGtleWZyYW1lcyBtb3ZlIHtcXG4gIDAlIHtcXG4gICAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICB9XFxufVxcblxcbi5lbmQtZGlhbG9nLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmVuZC1kaWFsb2cgcCB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG4uZW5kLWRpYWxvZyBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLmNoYW5nZS1uYW1lcy1kaWFsb2cgZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4uY2hhbmdlLW5hbWVzLWRpYWxvZyBpbnB1dCxcXG4uY2hhbmdlLW5hbWVzLWRpYWxvZyBidXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcbn1cXG5cXG4uY2hhbmdlLW5hbWVzLWRpYWxvZyBpbnB1dFt0eXBlPSd0ZXh0J10ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcXG59XFxuXFxuLmNoYW5nZS1uYW1lcy1kaWFsb2cgaW5wdXRbdHlwZT0nc3VibWl0J10ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbn1cXG5cXG5idXR0b246aG92ZXIsXFxuLnBsYXllcnMtbmFtZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IERPTU1hbmFnZXIgfSBmcm9tICcuL2RvbU1hbmFnZXIuanMnO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXIuanMnO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vc2hpcC5qcyc7XG5pbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7XG5cbmNvbnN0IFJFQUxfUExBWUVSU19HQU1FID0gJ3N0YXJ0IGdhbWUgd2l0aCByZWFsIHBsYXllcnMnO1xuY29uc3QgR0FNRV9XSVRIX0JPVCA9ICdzdGFydCBnYW1lIHdpdGggYSBib3QnO1xuY29uc3QgU0FNRV9QTEFZRVIgPSAnc2FtZSBwbGF5ZXJzIG1vdmUnO1xuY29uc3QgTkVYVF9QTEFZRVIgPSAnbmV4dCBwbGF5ZXJzIG1vdmUnO1xuY29uc3QgTkVXX0dBTUUgPSAnbmV3IGdhbWUnO1xuY29uc3QgQ0hBTkdFX05BTUVTID0gJ2NoYW5nZSBuYW1lcyc7XG5cbi8vcGxhY2VzIHRoZSBzaGlwIGF0IGEgcmFuZG9tIHBvc2l0aW9uIG9uIHRoZSBib2FyZFxuZnVuY3Rpb24gcmFuZG9taXplU2hpcHMocGxheWVyKSB7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDU7IGkrKykge1xuICAgIGxldCBzaGlwUGxhY2VkID0gZmFsc2U7XG5cbiAgICB3aGlsZSAoIXNoaXBQbGFjZWQpIHtcbiAgICAgIHNoaXBQbGFjZWQgPSBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgbmV3IFNoaXAoaSksXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgICAgICBNYXRoLnJhbmRvbSgpID4gMC41ID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJ1xuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxubGV0IGRvbSA9IG5ldyBET01NYW5hZ2VyKCk7XG5sZXQgZmlyc3RQbGF5ZXI7XG5sZXQgc2Vjb25kUGxheWVyO1xuXG5mdW5jdGlvbiBzdGFydEdhbWUoZmlyc3RQbGF5ZXJUeXBlLCBzZWNvbmRQbGF5ZXJUeXBlKSB7XG4gIGZpcnN0UGxheWVyID0gbmV3IFBsYXllcignUGxheWVyIDEnLCBmaXJzdFBsYXllclR5cGUsICcuZmlyc3QtcGxheWVyJywgdHJ1ZSk7XG4gIHNlY29uZFBsYXllciA9IG5ldyBQbGF5ZXIoXG4gICAgJ1BsYXllciAyJyxcbiAgICBzZWNvbmRQbGF5ZXJUeXBlLFxuICAgICcuc2Vjb25kLXBsYXllcicsXG4gICAgZmFsc2UsXG4gICAgZmlyc3RQbGF5ZXIuZ2FtZWJvYXJkXG4gICk7XG5cbiAgaWYgKHNlY29uZFBsYXllclR5cGUgPT09ICdjb21wdXRlcicpXG4gICAgc2Vjb25kUGxheWVyLmdhbWVib2FyZC5pc0VkaXRhYmxlID0gZmFsc2U7XG5cbiAgcmFuZG9taXplU2hpcHMoZmlyc3RQbGF5ZXIpO1xuICByYW5kb21pemVTaGlwcyhzZWNvbmRQbGF5ZXIpO1xuXG4gIGRvbS5wb3B1bGF0ZUJvYXJkKGZpcnN0UGxheWVyLCBzZWNvbmRQbGF5ZXIpO1xufVxuXG4vL2NoZWNrcyBpZiBhbGwgYm9hdHMgb2YgZWl0aGVyIHBsYXllciBoYXZlIGJlZW4gc3Vua1xuZnVuY3Rpb24gY2hlY2tGb3JXaW5uZXIoKSB7XG4gIGlmIChmaXJzdFBsYXllci5nYW1lYm9hcmQuaGF2ZUFsbEJlZW5TdW5rKCkpIGRvbS5zaG93RW5kRGlhbG9nKHNlY29uZFBsYXllcik7XG4gIGVsc2UgaWYgKHNlY29uZFBsYXllci5nYW1lYm9hcmQuaGF2ZUFsbEJlZW5TdW5rKCkpXG4gICAgZG9tLnNob3dFbmREaWFsb2coZmlyc3RQbGF5ZXIpO1xufVxuXG4vL3doZW4gZ2FtZSBtb2RlIHdpdGggdHdvIHJlYWwgcGxheWVycyBpcyBjaG9zZW5cblB1YlN1Yi5zdWJzY3JpYmUoUkVBTF9QTEFZRVJTX0dBTUUsICgpID0+IHtcbiAgc3RhcnRHYW1lKCdyZWFsJywgJ3JlYWwnKTtcbn0pO1xuXG4vL3doZW4gZ2FtZSBtb2RlIG9mIGdhbWUgd2l0aCBhIGJvdCBpcyBjaG9zZW5cblB1YlN1Yi5zdWJzY3JpYmUoR0FNRV9XSVRIX0JPVCwgKCkgPT4ge1xuICBzdGFydEdhbWUoJ3JlYWwnLCAnY29tcHV0ZXInKTtcbn0pO1xuXG4vL3NoaXAgd2FzIGhpdCwgc2FtZSBwbGF5ZXIgbWFrZXMgdGhlIG5leHQgbW92ZVxuUHViU3ViLnN1YnNjcmliZShTQU1FX1BMQVlFUiwgKCkgPT4ge1xuICBpZiAoc2Vjb25kUGxheWVyLmlzQWN0aXZlID09PSB0cnVlICYmIHNlY29uZFBsYXllci50eXBlID09PSAnY29tcHV0ZXInKSB7XG4gICAgc2Vjb25kUGxheWVyLmJvdC5hdHRhY2soKTtcbiAgfVxuICBkb20ucG9wdWxhdGVCb2FyZChmaXJzdFBsYXllciwgc2Vjb25kUGxheWVyKTtcbiAgY2hlY2tGb3JXaW5uZXIoKTtcbn0pO1xuXG4vL3NoaXAgd2FzIG1pc3NlZCwgb3Bwb25lbnQgbWFrZXMgdGhlIG5leHQgbW92ZSwgYmVjb21lcyB0aGUgYWN0aXZlIHBsYXllclxuUHViU3ViLnN1YnNjcmliZShORVhUX1BMQVlFUiwgKCkgPT4ge1xuICBpZiAoZmlyc3RQbGF5ZXIuaXNBY3RpdmUpIHtcbiAgICBmaXJzdFBsYXllci5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIHNlY29uZFBsYXllci5pc0FjdGl2ZSA9IHRydWU7XG5cbiAgICBpZiAoc2Vjb25kUGxheWVyLnR5cGUgPT09ICdjb21wdXRlcicpIHtcbiAgICAgIHNlY29uZFBsYXllci5ib3QuYXR0YWNrKCk7XG5cbiAgICAgIC8vbWFrZXMgcmVhbCBwbGF5ZXIncyBib2FyZCB1bmVkaXRhYmxlIHdoZW4gaXQncyBib3QncyB0dXJuIChyZWFsIHBsYXllcnMgYWx3YXlzIG1ha2VzIHRoZSBmaXJzdCBtb3ZlKVxuICAgICAgZmlyc3RQbGF5ZXIuZ2FtZWJvYXJkLmlzRWRpdGFibGUgPSBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZmlyc3RQbGF5ZXIuaXNBY3RpdmUgPSB0cnVlO1xuICAgIHNlY29uZFBsYXllci5pc0FjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgZG9tLnBvcHVsYXRlQm9hcmQoZmlyc3RQbGF5ZXIsIHNlY29uZFBsYXllciwgdHJ1ZSk7XG4gIGNoZWNrRm9yV2lubmVyKCk7XG59KTtcblxuLy93aGVuIGEgbmV3IGdhbWUgaXMgcmVxdWVzdGVkXG5QdWJTdWIuc3Vic2NyaWJlKE5FV19HQU1FLCAoKSA9PlxuICBzdGFydEdhbWUoZmlyc3RQbGF5ZXIudHlwZSwgc2Vjb25kUGxheWVyLnR5cGUpXG4pO1xuXG4vL2NoYW5nZSBvZiBwbGF5ZXJzJyBuYW1lcyByZXF1ZXN0ZWRcblB1YlN1Yi5zdWJzY3JpYmUoQ0hBTkdFX05BTUVTLCAobWVzc2FnZSwgbmV3TmFtZXMpID0+IHtcbiAgZmlyc3RQbGF5ZXIuY2hhbmdlTmFtZShuZXdOYW1lc1swXSk7XG4gIGZpcnN0UGxheWVyLmNoYW5nZU5hbWUobmV3TmFtZXNbMV0pO1xufSk7XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiaWQiLCJfayIsInB1c2giLCJ1cmwiLCJvcHRpb25zIiwiU3RyaW5nIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJ0ZXN0Iiwic2xpY2UiLCJoYXNoIiwibmVlZFF1b3RlcyIsInJlcGxhY2UiLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwiZ2V0TmF0aXZlIiwicmVxdWlyZSIsInJvb3QiLCJEYXRhVmlldyIsImhhc2hDbGVhciIsImhhc2hEZWxldGUiLCJoYXNoR2V0IiwiaGFzaEhhcyIsImhhc2hTZXQiLCJIYXNoIiwiZW50cmllcyIsImluZGV4IiwiY2xlYXIiLCJlbnRyeSIsInNldCIsInByb3RvdHlwZSIsImdldCIsImhhcyIsImxpc3RDYWNoZUNsZWFyIiwibGlzdENhY2hlRGVsZXRlIiwibGlzdENhY2hlR2V0IiwibGlzdENhY2hlSGFzIiwibGlzdENhY2hlU2V0IiwiTGlzdENhY2hlIiwiTWFwIiwibWFwQ2FjaGVDbGVhciIsIm1hcENhY2hlRGVsZXRlIiwibWFwQ2FjaGVHZXQiLCJtYXBDYWNoZUhhcyIsIm1hcENhY2hlU2V0IiwiTWFwQ2FjaGUiLCJQcm9taXNlIiwiU2V0Iiwic2V0Q2FjaGVBZGQiLCJzZXRDYWNoZUhhcyIsIlNldENhY2hlIiwidmFsdWVzIiwiX19kYXRhX18iLCJhZGQiLCJzdGFja0NsZWFyIiwic3RhY2tEZWxldGUiLCJzdGFja0dldCIsInN0YWNrSGFzIiwic3RhY2tTZXQiLCJTdGFjayIsInNpemUiLCJTeW1ib2wiLCJVaW50OEFycmF5IiwiV2Vha01hcCIsImFycmF5RmlsdGVyIiwiYXJyYXkiLCJwcmVkaWNhdGUiLCJyZXNJbmRleCIsInJlc3VsdCIsInZhbHVlIiwiYmFzZVRpbWVzIiwiaXNBcmd1bWVudHMiLCJpc0FycmF5IiwiaXNCdWZmZXIiLCJpc0luZGV4IiwiaXNUeXBlZEFycmF5Iiwib2JqZWN0UHJvdG8iLCJPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsImFycmF5TGlrZUtleXMiLCJpbmhlcml0ZWQiLCJpc0FyciIsImlzQXJnIiwiaXNCdWZmIiwiaXNUeXBlIiwic2tpcEluZGV4ZXMiLCJrZXkiLCJjYWxsIiwiYXJyYXlQdXNoIiwib2Zmc2V0IiwiYXJyYXlTb21lIiwiZXEiLCJhc3NvY0luZGV4T2YiLCJiYXNlR2V0QWxsS2V5cyIsIm9iamVjdCIsImtleXNGdW5jIiwic3ltYm9sc0Z1bmMiLCJnZXRSYXdUYWciLCJvYmplY3RUb1N0cmluZyIsIm51bGxUYWciLCJ1bmRlZmluZWRUYWciLCJzeW1Ub1N0cmluZ1RhZyIsInRvU3RyaW5nVGFnIiwiYmFzZUdldFRhZyIsImlzT2JqZWN0TGlrZSIsImFyZ3NUYWciLCJiYXNlSXNBcmd1bWVudHMiLCJiYXNlSXNFcXVhbERlZXAiLCJiYXNlSXNFcXVhbCIsIm90aGVyIiwiYml0bWFzayIsImN1c3RvbWl6ZXIiLCJzdGFjayIsImVxdWFsQXJyYXlzIiwiZXF1YWxCeVRhZyIsImVxdWFsT2JqZWN0cyIsImdldFRhZyIsIkNPTVBBUkVfUEFSVElBTF9GTEFHIiwiYXJyYXlUYWciLCJvYmplY3RUYWciLCJlcXVhbEZ1bmMiLCJvYmpJc0FyciIsIm90aElzQXJyIiwib2JqVGFnIiwib3RoVGFnIiwib2JqSXNPYmoiLCJvdGhJc09iaiIsImlzU2FtZVRhZyIsIm9iaklzV3JhcHBlZCIsIm90aElzV3JhcHBlZCIsIm9ialVud3JhcHBlZCIsIm90aFVud3JhcHBlZCIsImlzRnVuY3Rpb24iLCJpc01hc2tlZCIsImlzT2JqZWN0IiwidG9Tb3VyY2UiLCJyZVJlZ0V4cENoYXIiLCJyZUlzSG9zdEN0b3IiLCJmdW5jUHJvdG8iLCJGdW5jdGlvbiIsImZ1bmNUb1N0cmluZyIsInJlSXNOYXRpdmUiLCJSZWdFeHAiLCJiYXNlSXNOYXRpdmUiLCJwYXR0ZXJuIiwiaXNMZW5ndGgiLCJib29sVGFnIiwiZGF0ZVRhZyIsImVycm9yVGFnIiwiZnVuY1RhZyIsIm1hcFRhZyIsIm51bWJlclRhZyIsInJlZ2V4cFRhZyIsInNldFRhZyIsInN0cmluZ1RhZyIsIndlYWtNYXBUYWciLCJhcnJheUJ1ZmZlclRhZyIsImRhdGFWaWV3VGFnIiwiZmxvYXQzMlRhZyIsImZsb2F0NjRUYWciLCJpbnQ4VGFnIiwiaW50MTZUYWciLCJpbnQzMlRhZyIsInVpbnQ4VGFnIiwidWludDhDbGFtcGVkVGFnIiwidWludDE2VGFnIiwidWludDMyVGFnIiwidHlwZWRBcnJheVRhZ3MiLCJiYXNlSXNUeXBlZEFycmF5IiwiaXNQcm90b3R5cGUiLCJuYXRpdmVLZXlzIiwiYmFzZUtleXMiLCJuIiwiaXRlcmF0ZWUiLCJBcnJheSIsImJhc2VVbmFyeSIsImZ1bmMiLCJjYWNoZUhhcyIsImNhY2hlIiwiY29yZUpzRGF0YSIsIkNPTVBBUkVfVU5PUkRFUkVEX0ZMQUciLCJpc1BhcnRpYWwiLCJhcnJMZW5ndGgiLCJvdGhMZW5ndGgiLCJhcnJTdGFja2VkIiwib3RoU3RhY2tlZCIsInNlZW4iLCJhcnJWYWx1ZSIsIm90aFZhbHVlIiwiY29tcGFyZWQiLCJvdGhJbmRleCIsIm1hcFRvQXJyYXkiLCJzZXRUb0FycmF5Iiwic3ltYm9sVGFnIiwic3ltYm9sUHJvdG8iLCJzeW1ib2xWYWx1ZU9mIiwidmFsdWVPZiIsInRhZyIsImJ5dGVMZW5ndGgiLCJieXRlT2Zmc2V0IiwiYnVmZmVyIiwibmFtZSIsIm1lc3NhZ2UiLCJjb252ZXJ0Iiwic3RhY2tlZCIsImdldEFsbEtleXMiLCJvYmpQcm9wcyIsIm9iakxlbmd0aCIsIm90aFByb3BzIiwib2JqU3RhY2tlZCIsInNraXBDdG9yIiwib2JqVmFsdWUiLCJvYmpDdG9yIiwiY29uc3RydWN0b3IiLCJvdGhDdG9yIiwiZnJlZUdsb2JhbCIsImdsb2JhbCIsImdldFN5bWJvbHMiLCJrZXlzIiwiaXNLZXlhYmxlIiwiZ2V0TWFwRGF0YSIsImdldFZhbHVlIiwibmF0aXZlT2JqZWN0VG9TdHJpbmciLCJpc093biIsInVubWFza2VkIiwiZSIsInN0dWJBcnJheSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwibmF0aXZlR2V0U3ltYm9scyIsImdldE93blByb3BlcnR5U3ltYm9scyIsInN5bWJvbCIsInByb21pc2VUYWciLCJkYXRhVmlld0N0b3JTdHJpbmciLCJtYXBDdG9yU3RyaW5nIiwicHJvbWlzZUN0b3JTdHJpbmciLCJzZXRDdG9yU3RyaW5nIiwid2Vha01hcEN0b3JTdHJpbmciLCJBcnJheUJ1ZmZlciIsInJlc29sdmUiLCJDdG9yIiwiY3RvclN0cmluZyIsIm5hdGl2ZUNyZWF0ZSIsIkhBU0hfVU5ERUZJTkVEIiwiTUFYX1NBRkVfSU5URUdFUiIsInJlSXNVaW50IiwidHlwZSIsIm1hc2tTcmNLZXkiLCJ1aWQiLCJleGVjIiwiSUVfUFJPVE8iLCJwcm90byIsImFycmF5UHJvdG8iLCJzcGxpY2UiLCJsYXN0SW5kZXgiLCJwb3AiLCJmb3JFYWNoIiwib3ZlckFyZyIsImZyZWVFeHBvcnRzIiwibm9kZVR5cGUiLCJmcmVlTW9kdWxlIiwibW9kdWxlRXhwb3J0cyIsImZyZWVQcm9jZXNzIiwicHJvY2VzcyIsIm5vZGVVdGlsIiwidHlwZXMiLCJiaW5kaW5nIiwidHJhbnNmb3JtIiwiYXJnIiwiZnJlZVNlbGYiLCJzZWxmIiwiTEFSR0VfQVJSQVlfU0laRSIsInBhaXJzIiwiYXJndW1lbnRzIiwiaXNBcnJheUxpa2UiLCJzdHViRmFsc2UiLCJCdWZmZXIiLCJuYXRpdmVJc0J1ZmZlciIsImlzRXF1YWwiLCJhc3luY1RhZyIsImdlblRhZyIsInByb3h5VGFnIiwibm9kZUlzVHlwZWRBcnJheSIsImZhY3RvcnkiLCJQdWJTdWIiLCJjb25zb2xlIiwid2FybiIsImRlZmluZSIsImFtZCIsIndpbmRvdyIsIm1lc3NhZ2VzIiwibGFzdFVpZCIsIkFMTF9TVUJTQ1JJQklOR19NU0ciLCJoYXNLZXlzIiwib2JqIiwidGhyb3dFeGNlcHRpb24iLCJleCIsInJlVGhyb3dFeGNlcHRpb24iLCJjYWxsU3Vic2NyaWJlcldpdGhEZWxheWVkRXhjZXB0aW9ucyIsInN1YnNjcmliZXIiLCJzZXRUaW1lb3V0IiwiY2FsbFN1YnNjcmliZXJXaXRoSW1tZWRpYXRlRXhjZXB0aW9ucyIsImRlbGl2ZXJNZXNzYWdlIiwib3JpZ2luYWxNZXNzYWdlIiwibWF0Y2hlZE1lc3NhZ2UiLCJpbW1lZGlhdGVFeGNlcHRpb25zIiwic3Vic2NyaWJlcnMiLCJjYWxsU3Vic2NyaWJlciIsInMiLCJjcmVhdGVEZWxpdmVyeUZ1bmN0aW9uIiwiZGVsaXZlck5hbWVzcGFjZWQiLCJ0b3BpYyIsInBvc2l0aW9uIiwibGFzdEluZGV4T2YiLCJzdWJzdHIiLCJoYXNEaXJlY3RTdWJzY3JpYmVyc0ZvciIsImZvdW5kIiwiQm9vbGVhbiIsIm1lc3NhZ2VIYXNTdWJzY3JpYmVycyIsInB1Ymxpc2giLCJzeW5jIiwiZGVsaXZlciIsImhhc1N1YnNjcmliZXJzIiwicHVibGlzaFN5bmMiLCJzdWJzY3JpYmUiLCJ0b2tlbiIsInN1YnNjcmliZUFsbCIsInN1YnNjcmliZU9uY2UiLCJ1bnN1YnNjcmliZSIsImFwcGx5IiwiY2xlYXJBbGxTdWJzY3JpcHRpb25zIiwiY2xlYXJTdWJzY3JpcHRpb25zIiwibSIsImluZGV4T2YiLCJjb3VudFN1YnNjcmlwdGlvbnMiLCJjb3VudCIsImdldFN1YnNjcmlwdGlvbnMiLCJkZXNjZW5kYW50VG9waWNFeGlzdHMiLCJpc1RvcGljIiwiaXNUb2tlbiIsInQiLCJTaGlwIiwiQm90Iiwib3Bwb25lbnRzR2FtZWJvYXJkIiwiYXR0YWNrUXVldWUiLCJhdHRhY2siLCJCT1RfTU9WRSIsImRlbGF5Iiwib3JpZW50YXRpb24iLCJ4IiwieSIsInNoaWZ0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiYm9hcmQiLCJyZWNlaXZlQXR0YWNrIiwiZGlyZWN0aW9ucyIsImQiLCJ0YXJnZXRlZFgiLCJ0YXJnZXRlZFkiLCJtcyIsInN0eWxlIiwiTkVXX0dBTUUiLCJORVhUX1BMQVlFUiIsImVkaXRCb2FyZERpYWxvZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkRPTU1hbmFnZXIiLCJwbGF5QWdhaW5CdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiY2xvc2UiLCJzZXROYW1lQ2xpY2tMaXN0ZW5lcnMiLCJyZXNldEJ1dHRvbiIsInN0YXJ0TWVudUJ1dHRvbiIsInNob3dTdGFydE1lbnUiLCJwb3B1bGF0ZUFjdGl2ZVBsYXllcnNCb2FyZCIsInBsYXllciIsImdhbWVib2FyZCIsImJvYXJkR3JpZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJqIiwiZG90IiwiYXBwZW5kIiwiaGFzU2hpcEFib3ZlIiwiaGFzU2hpcExlZnQiLCJpc0VkaXRhYmxlIiwiZHJhZ2dhYmxlIiwiZXZlbnQiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwidGFyZ2V0Iiwic3Vycm91bmRpbmciLCJnZXRCb2F0TGVuZ3Roc0Zyb21Qb3NpdGlvbiIsImJlbG93IiwicGFkZGluZ0JvdHRvbSIsInJpZ2h0d2FyZHMiLCJwYWRkaW5nUmlnaHQiLCJwcmV2ZW50RGVmYXVsdCIsImRyb3BwZWRJZCIsImdldERhdGEiLCJ4Q29vcmRpbmF0ZSIsImNoYXJBdCIsInlDb29yZGluYXRlIiwibW92ZVNoaXAiLCJwYXJzZUludCIsImFwcGVuZENoaWxkIiwiZWxlbWVudFF1ZXJ5IiwiY29sb3IiLCJib2FyZENvbnRhaW5lciIsImlubmVySFRNTCIsInBvcHVsYXRlT3Bwb25lbnRzQm9hcmQiLCJwb3B1bGF0ZUJvYXJkIiwiZmlyc3RQbGF5ZXIiLCJzZWNvbmRQbGF5ZXIiLCJwbGF5ZXJTd2l0Y2hlZCIsImlzQWN0aXZlIiwic2hvd0VkaXRNZXNzYWdlIiwic2hvd1Bhc3NEZXZpY2VEaWFsb2ciLCJzaG93RW5kRGlhbG9nIiwid2lubmVyIiwiZW5kRGlhbG9nIiwidGV4dENvbnRlbnQiLCJzaG93TW9kYWwiLCJSRUFMX1BMQVlFUlNfR0FNRSIsIkdBTUVfV0lUSF9CT1QiLCJzdGFydERpYWxvZyIsIm5leHRQbGF5ZXJOYW1lIiwicGFzc0RldmljZURpYWxvZyIsIm5leHRQbGF5ZXJOYW1lQnV0dG9uIiwibmV4dFBsYXllck5hbWVIZWFkZXIiLCJkZXZpY2VQYXNzZWRCdXR0b24iLCJ0b1VwcGVyQ2FzZSIsImVkaXRCb2FyZERpYWxvZ0NvbnRhaW5lciIsImRvbmVCdXR0b24iLCJzaG93IiwiY2hhbmdlTmFtZURpYWxvZyIsInBsYXllcnNOYW1lcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJlbGVtZW50IiwiY2hhbmdlTmFtZUZvcm0iLCJ1cGRhdGVOYW1lcyIsInJlc2V0IiwibmFtZTEiLCJuYW1lMiIsImZpcnN0TmFtZVBsYXllck5hbWUiLCJzZWNvbmROYW1lUGxheWVyTmFtZSIsInRyaW0iLCJDSEFOR0VfTkFNRVMiLCJib3RNb3ZlRGlhbG9nIiwiR2FtZWJvYXJkIiwiZnJvbSIsImZpbGwiLCJpc0VtcHR5IiwicGxhY2VTaGlwIiwic2hpcCIsImNhblNoaXBCZVBsYWNlZEhvcml6b250YWxseSIsImNhblNoaXBCZVBsYWNlZFZlcnRpY2FsbHkiLCJzaGlwRXhjZXB0aW9uIiwibWF4IiwibWluIiwid2FzSGl0IiwiaGl0IiwiU0FNRV9QTEFZRVIiLCJoYXZlQWxsQmVlblN1bmsiLCJzb21lIiwicm93IiwiaXNQb3NpdGlvblZhbGlkIiwiI2lzUG9zaXRpb25WYWxpZCIsImdldE1vdmVkU2hpcFBvc2l0aW9ucyIsIm9yaWdpbmFsWCIsIm9yaWdpbmFsWSIsIm5ld1giLCJuZXdZIiwib2xkUG9zaXRpb25zIiwibmV3UG9zaXRpb25zIiwiZGlyZWN0aW9uSW5kZXgiLCJ4TW92ZSIsInlNb3ZlIiwibmV3WEl0ZW0iLCJuZXdZSXRlbSIsInNvcnQiLCJhIiwiYiIsInBvc2l0aW9ucyIsInhPbGQiLCJ5T2xkIiwicXVhbnRpdHkiLCJjdXJyZW50WCIsImN1cnJlbnRZIiwiYWJvdmUiLCJsZWZ0d2FyZHMiLCJQbGF5ZXIiLCJvcHBvbmVudHNCb2FyZCIsImJvdCIsInNldEFzQWN0aXZlIiwic2V0QXNPcHBvbmVudCIsImNoYW5nZU5hbWUiLCJuZXdOYW1lIiwidGltZXNIaXQiLCJoYXNCZWVuU3VuayIsImlzU3VuayIsInJhbmRvbWl6ZVNoaXBzIiwic2hpcFBsYWNlZCIsImRvbSIsInN0YXJ0R2FtZSIsImZpcnN0UGxheWVyVHlwZSIsInNlY29uZFBsYXllclR5cGUiLCJjaGVja0Zvcldpbm5lciIsIm5ld05hbWVzIl0sInNvdXJjZVJvb3QiOiIifQ==