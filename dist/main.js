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

class Bot {
  constructor(opponentsGameboard) {
    this.opponentsGameboard = opponentsGameboard;
    this.attackQueue = [];
  }
  attack() {
    let orientation = null;
    let x;
    let y;
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
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_1__);


const NEW_GAME = 'new game';
const NEXT_PLAYER = 'next players move';
const editBoardDialog = document.querySelector('.edit-board-dialog');
class DOMManager {
  constructor() {
    setUpPlayAgainButton();
    setNameClickListeners();

    //reset button
    const resetButton = document.querySelector('.reset-button');
    resetButton.addEventListener('click', () => {
      pubsub_js__WEBPACK_IMPORTED_MODULE_1___default().publish(NEW_GAME);
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

          //drag and drop
          if (player.gameboard.isEditable) {
            item.draggable = true;
            item.addEventListener('dragstart', event => {
              event.dataTransfer.setData('text/plain', event.target.id);
            });
          }
        }
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
    let boardContainer = document.querySelector(player.elementQuery);
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
    if (secondPlayer.type === 'real' && playerSwitched) this.showPassDeviceDialog(firstPlayer.isActive ? firstPlayer.name : secondPlayer.name);else if (secondPlayer.type === 'computer') editBoardDialog.close();
  }
  showEndDialog(winner) {
    const endDialog = document.querySelector('.end-dialog');
    if (winner.type === 'computer') {
      document.querySelector('.end-dialog .message').textContent = 'You lost. :/';
    } else {
      document.querySelector('.end-dialog .message').textContent = `Congratulations ${winner.name}, you won!`;
    }
    endDialog.showModal();
  }
  showStartMenu() {
    const REAL_PLAYERS_GAME = 'start game with real players';
    const GAME_WITH_BOT = 'start game with a bot';
    const startDialog = document.querySelector('.start-dialog');
    startDialog.showModal();
    document.querySelector('.real-opponent-button').addEventListener('click', () => {
      pubsub_js__WEBPACK_IMPORTED_MODULE_1___default().publish(REAL_PLAYERS_GAME);
      startDialog.close();
    });
    document.querySelector('.game-with-bot-button').addEventListener('click', () => {
      pubsub_js__WEBPACK_IMPORTED_MODULE_1___default().publish(GAME_WITH_BOT);
      startDialog.close();
    });
  }
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
      pubsub_js__WEBPACK_IMPORTED_MODULE_1___default().publish(NEXT_PLAYER);
    });
  }
}
function setUpPlayAgainButton() {
  const playAgainButton = document.querySelector('.play-again-button');
  playAgainButton.addEventListener('click', () => {
    pubsub_js__WEBPACK_IMPORTED_MODULE_1___default().publish(NEW_GAME);
    document.querySelector('.end-dialog').close();
  });
}
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
function updateNames(name1, name2) {
  const firstNamePlayerName = document.querySelector('.first-player .players-name');
  const secondNamePlayerName = document.querySelector('.second-player .players-name');
  firstNamePlayerName.textContent = name1.trim() === '' ? 'Player 1' : name1;
  secondNamePlayerName.textContent = name2.trim() === '' ? 'Player 2' : name2;
  const CHANGE_NAMES = 'change names';
  pubsub_js__WEBPACK_IMPORTED_MODULE_1___default().publish(CHANGE_NAMES, [name1, name2]);
}

// function setUpResetButton() {
//   const resetButton = document.querySelector('.reset-button');

//   resetButton.addEventListener('click', () => {
//     PubSub.publish(NEW_GAME);
//   });
// }

// function setUpGoToStartMenuButton() {
//   const startMenuButton = document.querySelector('.start-menu-button');
//   startMenuButton.addEventListener('click',()=>{

//   })
// }

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
    this.missed = [];
    this.isEditable = true;
  }
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
    this.missed.push([6, 4]);
    return false;
  }
  haveAllBeenSunk() {
    return !this.board.some(row => row.some(item => item !== null && item !== 'hit' && item !== 'attacked'));
  }
  #isPositionValid(x, y) {
    return x >= 0 && x <= 9 && y >= 0 && y <= 9;
  }
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

.header-buttons button:first-of-type {
  margin-right: 10px;
}

header button,
.start-dialog button,
.device-passed-button,
.edit-board-dialog button {
  background-color: var(--primary-color);
  border: none;
  border-radius: 20px;
  color: #fff;
  font-weight: bold;
  padding: 10px 20px;
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
  border: 2px solid #000;
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
  border: 1px solid #000;
}

.board-item:hover,
.start-dialog button:hover {
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

.end-dialog,
.change-names-dialog {
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,uCAAuC;EACvC,wBAAwB;EACxB,wBAAwB;AAC1B;;AAEA;EACE,yCAAyC;AAC3C;;AAEA,iBAAiB;AACjB;;;;;;;;;;;;;;EAcE,SAAS;AACX;;AAEA;;EAEE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;;;EAIE,sCAAsC;EACtC,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,cAAc;EACd,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,cAAc;EACd,YAAY;AACd;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,UAAU;EACV,SAAS;AACX;;AAEA;EACE,aAAa;EACb,yDAAyD;EACzD,sDAAsD;AACxD;;AAEA;EACE,8BAA8B;EAC9B,6BAA6B;EAC7B,sBAAsB;AACxB;;AAEA;;EAEE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;;EAEE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,YAAY;EACZ,WAAW;EACX,WAAW;EACX,sCAAsC;AACxC;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,uCAAuC;EACvC,wCAAwC;EACxC,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;;EAEE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,sCAAsC;EACtC,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;;EAEE,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,sCAAsC;EACtC,iBAAiB;EACjB,WAAW;EACX,eAAe;AACjB;;AAEA;;EAEE,eAAe;EACf,YAAY;AACd","sourcesContent":[":root {\n  --block-dimension: min(50px, calc(4vw));\n  --primary-color: #4f209b;\n  --lighter-color: #7e87ff;\n}\n\n* {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n/*Default styles*/\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nul[class],\nol[class],\nli,\nfigure,\nfigcaption,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: min-content 1fr;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 18px;\n}\n\n.header-buttons button:first-of-type {\n  margin-right: 10px;\n}\n\nheader button,\n.start-dialog button,\n.device-passed-button,\n.edit-board-dialog button {\n  background-color: var(--primary-color);\n  border: none;\n  border-radius: 20px;\n  color: #fff;\n  font-weight: bold;\n  padding: 10px 20px;\n}\n\n.start-dialog {\n  background-color: #fff;\n  width: 100vw;\n  height: 100vh;\n  margin: 0 auto;\n  border: none;\n}\n\n.start-dialog button {\n  padding: 10px px;\n}\n\n.start-dialog h1 {\n  font-size: 2.4em;\n}\n\n.start-dialog-content,\n.pass-device-dialog-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  gap: min(40%, 300px);\n}\n\n.pass-device-dialog {\n  background-color: #fff;\n  width: 100vw;\n  height: 100vh;\n  margin: 0 auto;\n  border: none;\n}\n\n.edit-board-dialog {\n  position: fixed;\n  bottom: 10px;\n  border-radius: 20px;\n  border: 2px solid #000;\n}\n\n.edit-board-dialog-container {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  align-items: center;\n}\n\n.query-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 8px;\n}\n\n.query-container p {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\nmain {\n  display: flex;\n}\n\n.first-player,\n.second-player {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 50%;\n  gap: 12px;\n}\n\n.board-grid {\n  display: grid;\n  grid-template-columns: repeat(10, var(--block-dimension));\n  grid-template-rows: repeat(10, var(--block-dimension));\n}\n\n.board-item {\n  height: var(--block-dimension);\n  width: var(--block-dimension);\n  border: 1px solid #000;\n}\n\n.board-item:hover,\n.start-dialog button:hover {\n  cursor: pointer;\n  opacity: 0.8;\n}\n\n.ship {\n  background-color: var(--lighter-color);\n}\n\n.hit-ship {\n  position: relative;\n  border: 1px solid black;\n  padding-top: -4px;\n}\n\n.hit-ship::before,\n.hit-ship::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 100%;\n  height: 3px;\n  background-color: var(--primary-color);\n}\n\n.hit-ship::before {\n  transform: rotate(45deg);\n}\n\n.hit-ship::after {\n  transform: rotate(-45deg);\n}\n\n.attacked {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.dot {\n  width: calc(var(--block-dimension) / 3);\n  height: calc(var(--block-dimension) / 3);\n  border-radius: 50%;\n  background-color: #000;\n}\n\n.end-dialog,\n.change-names-dialog {\n  border: none;\n  border-radius: 20px;\n}\n\n.end-dialog-container {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.end-dialog p {\n  font-size: 1.5em;\n}\n\n.end-dialog button {\n  background-color: var(--primary-color);\n  border: none;\n  border-radius: 20px;\n  color: #fff;\n  font-weight: bold;\n  padding: 8px;\n}\n\n.change-names-dialog form {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.change-names-dialog input,\n.change-names-dialog button {\n  border-radius: 20px;\n  border: none;\n  padding: 8px 16px;\n}\n\n.change-names-dialog input[type='text'] {\n  background-color: #e9e9e9;\n}\n\n.change-names-dialog input[type='submit'] {\n  background-color: var(--primary-color);\n  font-weight: bold;\n  color: #fff;\n  margin-top: 8px;\n}\n\nbutton:hover,\n.players-name:hover {\n  cursor: pointer;\n  opacity: 0.8;\n}\n"],"sourceRoot":""}]);
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
  firstPlayer = new _player_js__WEBPACK_IMPORTED_MODULE_1__.Player('Player 1', firstPlayerType, '.first-player .board-grid-container', true);
  secondPlayer = new _player_js__WEBPACK_IMPORTED_MODULE_1__.Player('Player 2', secondPlayerType, '.second-player .board-grid-container', false, firstPlayer.gameboard);
  if (secondPlayerType === 'computer') secondPlayer.gameboard.isEditable = false;
  randomizeShips(firstPlayer);
  randomizeShips(secondPlayer);
  dom.populateBoard(firstPlayer, secondPlayer);
}

// function makeBotMove() {
//   let x = Math.floor(Math.random() * 10);
//   let y = Math.floor(Math.random() * 10);

//   //making sure position hasn't been attacked yet
//   while (
//     firstPlayer.gameboard.board[x][y] !== null ||
//     (!firstPlayer.gameboard.board[x][y]) instanceof Ship
//   ) {
//     x = Math.floor(Math.random() * 10);
//     y = Math.floor(Math.random() * 10);
//   }

//   while (
//     firstPlayer.gameboard.board[x][y] === null ||
//     firstPlayer.gameboard.board[x][y] instanceof Ship
//   ) {
//     firstPlayer.gameboard.receiveAttack(x, y);
//   }
// }

function checkForWinner() {
  if (firstPlayer.gameboard.haveAllBeenSunk()) dom.showEndDialog(secondPlayer);else if (secondPlayer.gameboard.haveAllBeenSunk()) dom.showEndDialog(firstPlayer);
}
pubsub_js__WEBPACK_IMPORTED_MODULE_3___default().subscribe(REAL_PLAYERS_GAME, () => {
  startGame('real', 'real');
});
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
    }
  } else {
    firstPlayer.isActive = true;
    secondPlayer.isActive = false;
  }
  dom.populateBoard(firstPlayer, secondPlayer, true);
  checkForWinner();
});
pubsub_js__WEBPACK_IMPORTED_MODULE_3___default().subscribe(NEW_GAME, () => startGame(firstPlayer.type, secondPlayer.type));
pubsub_js__WEBPACK_IMPORTED_MODULE_3___default().subscribe(CHANGE_NAMES, (message, newNames) => {
  firstPlayer.changeName(newNames[0]);
  firstPlayer.changeName(newNames[1]);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksbUJBQW1CLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFFBQVEsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsZ0NBQWdDLDRDQUE0Qyw2QkFBNkIsNkJBQTZC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QUFNLENBQUMsQ0FBQztJQUMzQjtFQUNGLENBQUMsTUFBTTtJQUNMd0QsV0FBVyxDQUFDRyxRQUFRLEdBQUcsSUFBSTtJQUMzQkYsWUFBWSxDQUFDRSxRQUFRLEdBQUcsS0FBSztFQUMvQjtFQUVBNkYsR0FBRyxDQUFDakcsYUFBYSxDQUFDQyxXQUFXLEVBQUVDLFlBQVksRUFBRSxJQUFJLENBQUM7RUFDbERtRyxjQUFjLENBQUMsQ0FBQztBQUNsQixDQUFDLENBQUM7QUFFRnpOLDBEQUFnQixDQUFDNEUsUUFBUSxFQUFFLE1BQ3pCMEksU0FBUyxDQUFDakcsV0FBVyxDQUFDM0osSUFBSSxFQUFFNEosWUFBWSxDQUFDNUosSUFBSSxDQUMvQyxDQUFDO0FBRURzQywwREFBZ0IsQ0FBQzBKLFlBQVksRUFBRSxDQUFDM08sT0FBTyxFQUFFMlMsUUFBUSxLQUFLO0VBQ3BEckcsV0FBVyxDQUFDeUYsVUFBVSxDQUFDWSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDbkNyRyxXQUFXLENBQUN5RixVQUFVLENBQUNZLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTWFwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fUHJvbWlzZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU2V0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TZXRDYWNoZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3RhY2suanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fVWludDhBcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fV2Vha01hcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5UHVzaC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlTb21lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc0VxdWFsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNFcXVhbERlZXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVVuYXJ5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZXF1YWxBcnJheXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsQnlUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0VmFsdWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hDbGVhci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEdldC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEhhcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaFNldC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNJbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc01hc2tlZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBUb0FycmF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25vZGVVdGlsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb3ZlckFyZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2V0Q2FjaGVBZGQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldENhY2hlSGFzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRUb0FycmF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0NsZWFyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0RlbGV0ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tHZXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrSGFzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja1NldC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9Tb3VyY2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZXEuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0J1ZmZlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0VxdWFsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNMZW5ndGguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9rZXlzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJBcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zdHViRmFsc2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9wdWJzdWItanMvc3JjL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2JvdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZU1hbmFnZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YVZpZXc7XG4iLCJ2YXIgaGFzaENsZWFyID0gcmVxdWlyZSgnLi9faGFzaENsZWFyJyksXG4gICAgaGFzaERlbGV0ZSA9IHJlcXVpcmUoJy4vX2hhc2hEZWxldGUnKSxcbiAgICBoYXNoR2V0ID0gcmVxdWlyZSgnLi9faGFzaEdldCcpLFxuICAgIGhhc2hIYXMgPSByZXF1aXJlKCcuL19oYXNoSGFzJyksXG4gICAgaGFzaFNldCA9IHJlcXVpcmUoJy4vX2hhc2hTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaDtcbiIsInZhciBsaXN0Q2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUNsZWFyJyksXG4gICAgbGlzdENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlRGVsZXRlJyksXG4gICAgbGlzdENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlR2V0JyksXG4gICAgbGlzdENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlSGFzJyksXG4gICAgbGlzdENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0Q2FjaGU7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwO1xuIiwidmFyIG1hcENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19tYXBDYWNoZUNsZWFyJyksXG4gICAgbWFwQ2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19tYXBDYWNoZURlbGV0ZScpLFxuICAgIG1hcENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVHZXQnKSxcbiAgICBtYXBDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX21hcENhY2hlSGFzJyksXG4gICAgbWFwQ2FjaGVTZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXBDYWNoZTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgUHJvbWlzZSA9IGdldE5hdGl2ZShyb290LCAnUHJvbWlzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0O1xuIiwidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKSxcbiAgICBzZXRDYWNoZUFkZCA9IHJlcXVpcmUoJy4vX3NldENhY2hlQWRkJyksXG4gICAgc2V0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19zZXRDYWNoZUhhcycpO1xuXG4vKipcbiAqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGNhY2hlIG9iamVjdCB0byBzdG9yZSB1bmlxdWUgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFNldENhY2hlKHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcyA9PSBudWxsID8gMCA6IHZhbHVlcy5sZW5ndGg7XG5cbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB0aGlzLmFkZCh2YWx1ZXNbaW5kZXhdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU2V0Q2FjaGVgLlxuU2V0Q2FjaGUucHJvdG90eXBlLmFkZCA9IFNldENhY2hlLnByb3RvdHlwZS5wdXNoID0gc2V0Q2FjaGVBZGQ7XG5TZXRDYWNoZS5wcm90b3R5cGUuaGFzID0gc2V0Q2FjaGVIYXM7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0Q2FjaGU7XG4iLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgc3RhY2tDbGVhciA9IHJlcXVpcmUoJy4vX3N0YWNrQ2xlYXInKSxcbiAgICBzdGFja0RlbGV0ZSA9IHJlcXVpcmUoJy4vX3N0YWNrRGVsZXRlJyksXG4gICAgc3RhY2tHZXQgPSByZXF1aXJlKCcuL19zdGFja0dldCcpLFxuICAgIHN0YWNrSGFzID0gcmVxdWlyZSgnLi9fc3RhY2tIYXMnKSxcbiAgICBzdGFja1NldCA9IHJlcXVpcmUoJy4vX3N0YWNrU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0YWNrIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFN0YWNrKGVudHJpZXMpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGFjaztcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBVaW50OEFycmF5O1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBXZWFrTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdXZWFrTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gV2Vha01hcDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZpbHRlcmAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZpbHRlcmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXNJbmRleCA9IDAsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXN1bHRbcmVzSW5kZXgrK10gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUZpbHRlcjtcbiIsInZhciBiYXNlVGltZXMgPSByZXF1aXJlKCcuL19iYXNlVGltZXMnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlMaWtlS2V5cztcbiIsIi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVB1c2g7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5zb21lYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFueSBlbGVtZW50IHBhc3NlcyB0aGUgcHJlZGljYXRlIGNoZWNrLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlTb21lKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5U29tZTtcbiIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NvY0luZGV4T2Y7XG4iLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldEFsbEtleXM7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNBcmd1bWVudHM7XG4iLCJ2YXIgYmFzZUlzRXF1YWxEZWVwID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWxEZWVwJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0VxdWFsYCB3aGljaCBzdXBwb3J0cyBwYXJ0aWFsIGNvbXBhcmlzb25zXG4gKiBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy5cbiAqICAxIC0gVW5vcmRlcmVkIGNvbXBhcmlzb25cbiAqICAyIC0gUGFydGlhbCBjb21wYXJpc29uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYHZhbHVlYCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykge1xuICBpZiAodmFsdWUgPT09IG90aGVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwgfHwgb3RoZXIgPT0gbnVsbCB8fCAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgIWlzT2JqZWN0TGlrZShvdGhlcikpKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXI7XG4gIH1cbiAgcmV0dXJuIGJhc2VJc0VxdWFsRGVlcCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGJhc2VJc0VxdWFsLCBzdGFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzRXF1YWw7XG4iLCJ2YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGVxdWFsQXJyYXlzID0gcmVxdWlyZSgnLi9fZXF1YWxBcnJheXMnKSxcbiAgICBlcXVhbEJ5VGFnID0gcmVxdWlyZSgnLi9fZXF1YWxCeVRhZycpLFxuICAgIGVxdWFsT2JqZWN0cyA9IHJlcXVpcmUoJy4vX2VxdWFsT2JqZWN0cycpLFxuICAgIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDE7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxgIGZvciBhcnJheXMgYW5kIG9iamVjdHMgd2hpY2ggcGVyZm9ybXNcbiAqIGRlZXAgY29tcGFyaXNvbnMgYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBlbmFibGluZyBvYmplY3RzIHdpdGggY2lyY3VsYXJcbiAqIHJlZmVyZW5jZXMgdG8gYmUgY29tcGFyZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsRGVlcChvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBvYmpJc0FyciA9IGlzQXJyYXkob2JqZWN0KSxcbiAgICAgIG90aElzQXJyID0gaXNBcnJheShvdGhlciksXG4gICAgICBvYmpUYWcgPSBvYmpJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG9iamVjdCksXG4gICAgICBvdGhUYWcgPSBvdGhJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG90aGVyKTtcblxuICBvYmpUYWcgPSBvYmpUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG9ialRhZztcbiAgb3RoVGFnID0gb3RoVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvdGhUYWc7XG5cbiAgdmFyIG9iaklzT2JqID0gb2JqVGFnID09IG9iamVjdFRhZyxcbiAgICAgIG90aElzT2JqID0gb3RoVGFnID09IG9iamVjdFRhZyxcbiAgICAgIGlzU2FtZVRhZyA9IG9ialRhZyA9PSBvdGhUYWc7XG5cbiAgaWYgKGlzU2FtZVRhZyAmJiBpc0J1ZmZlcihvYmplY3QpKSB7XG4gICAgaWYgKCFpc0J1ZmZlcihvdGhlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgb2JqSXNBcnIgPSB0cnVlO1xuICAgIG9iaklzT2JqID0gZmFsc2U7XG4gIH1cbiAgaWYgKGlzU2FtZVRhZyAmJiAhb2JqSXNPYmopIHtcbiAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgIHJldHVybiAob2JqSXNBcnIgfHwgaXNUeXBlZEFycmF5KG9iamVjdCkpXG4gICAgICA/IGVxdWFsQXJyYXlzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spXG4gICAgICA6IGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgb2JqVGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgfVxuICBpZiAoIShiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcpKSB7XG4gICAgdmFyIG9iaklzV3JhcHBlZCA9IG9iaklzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnX193cmFwcGVkX18nKSxcbiAgICAgICAgb3RoSXNXcmFwcGVkID0gb3RoSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwgJ19fd3JhcHBlZF9fJyk7XG5cbiAgICBpZiAob2JqSXNXcmFwcGVkIHx8IG90aElzV3JhcHBlZCkge1xuICAgICAgdmFyIG9ialVud3JhcHBlZCA9IG9iaklzV3JhcHBlZCA/IG9iamVjdC52YWx1ZSgpIDogb2JqZWN0LFxuICAgICAgICAgIG90aFVud3JhcHBlZCA9IG90aElzV3JhcHBlZCA/IG90aGVyLnZhbHVlKCkgOiBvdGhlcjtcblxuICAgICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICAgIHJldHVybiBlcXVhbEZ1bmMob2JqVW53cmFwcGVkLCBvdGhVbndyYXBwZWQsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFpc1NhbWVUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgcmV0dXJuIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbERlZXA7XG4iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTWFza2VkID0gcmVxdWlyZSgnLi9faXNNYXNrZWQnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmF0aXZlO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGFWaWV3VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID1cbnR5cGVkQXJyYXlUYWdzW21hcFRhZ10gPSB0eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID1cbnR5cGVkQXJyYXlUYWdzW29iamVjdFRhZ10gPSB0eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID1cbnR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID1cbnR5cGVkQXJyYXlUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNUeXBlZEFycmF5YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiZcbiAgICBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICEhdHlwZWRBcnJheVRhZ3NbYmFzZUdldFRhZyh2YWx1ZSldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc1R5cGVkQXJyYXk7XG4iLCJ2YXIgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIG5hdGl2ZUtleXMgPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5cztcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRpbWVzO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmFyeTtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGEgYGNhY2hlYCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY2FjaGUgVGhlIGNhY2hlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGNhY2hlSGFzKGNhY2hlLCBrZXkpIHtcbiAgcmV0dXJuIGNhY2hlLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhY2hlSGFzO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbm1vZHVsZS5leHBvcnRzID0gY29yZUpzRGF0YTtcbiIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlTb21lID0gcmVxdWlyZSgnLi9fYXJyYXlTb21lJyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBhcnJheXMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7QXJyYXl9IG90aGVyIFRoZSBvdGhlciBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgYXJyYXlgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFycmF5cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEFycmF5cyhhcnJheSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIGFyckxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIG90aExlbmd0aCA9IG90aGVyLmxlbmd0aDtcblxuICBpZiAoYXJyTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhKGlzUGFydGlhbCAmJiBvdGhMZW5ndGggPiBhcnJMZW5ndGgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIENoZWNrIHRoYXQgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIHZhciBhcnJTdGFja2VkID0gc3RhY2suZ2V0KGFycmF5KTtcbiAgdmFyIG90aFN0YWNrZWQgPSBzdGFjay5nZXQob3RoZXIpO1xuICBpZiAoYXJyU3RhY2tlZCAmJiBvdGhTdGFja2VkKSB7XG4gICAgcmV0dXJuIGFyclN0YWNrZWQgPT0gb3RoZXIgJiYgb3RoU3RhY2tlZCA9PSBhcnJheTtcbiAgfVxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IHRydWUsXG4gICAgICBzZWVuID0gKGJpdG1hc2sgJiBDT01QQVJFX1VOT1JERVJFRF9GTEFHKSA/IG5ldyBTZXRDYWNoZSA6IHVuZGVmaW5lZDtcblxuICBzdGFjay5zZXQoYXJyYXksIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBhcnJheSk7XG5cbiAgLy8gSWdub3JlIG5vbi1pbmRleCBwcm9wZXJ0aWVzLlxuICB3aGlsZSAoKytpbmRleCA8IGFyckxlbmd0aCkge1xuICAgIHZhciBhcnJWYWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltpbmRleF07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgYXJyVmFsdWUsIGluZGV4LCBvdGhlciwgYXJyYXksIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIoYXJyVmFsdWUsIG90aFZhbHVlLCBpbmRleCwgYXJyYXksIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIGlmIChjb21wYXJlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoY29tcGFyZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmIChzZWVuKSB7XG4gICAgICBpZiAoIWFycmF5U29tZShvdGhlciwgZnVuY3Rpb24ob3RoVmFsdWUsIG90aEluZGV4KSB7XG4gICAgICAgICAgICBpZiAoIWNhY2hlSGFzKHNlZW4sIG90aEluZGV4KSAmJlxuICAgICAgICAgICAgICAgIChhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKSkge1xuICAgICAgICAgICAgICByZXR1cm4gc2Vlbi5wdXNoKG90aEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghKFxuICAgICAgICAgIGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fFxuICAgICAgICAgICAgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShhcnJheSk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxBcnJheXM7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgVWludDhBcnJheSA9IHJlcXVpcmUoJy4vX1VpbnQ4QXJyYXknKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgbWFwVG9BcnJheSA9IHJlcXVpcmUoJy4vX21hcFRvQXJyYXknKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBjb21wYXJpbmcgb2JqZWN0cyBvZlxuICogdGhlIHNhbWUgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNvbXBhcmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0cyB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgdGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAob2JqZWN0LmJ5dGVPZmZzZXQgIT0gb3RoZXIuYnl0ZU9mZnNldCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgb2JqZWN0ID0gb2JqZWN0LmJ1ZmZlcjtcbiAgICAgIG90aGVyID0gb3RoZXIuYnVmZmVyO1xuXG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAhZXF1YWxGdW5jKG5ldyBVaW50OEFycmF5KG9iamVjdCksIG5ldyBVaW50OEFycmF5KG90aGVyKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgICAgLy8gQ29lcmNlIGJvb2xlYW5zIHRvIGAxYCBvciBgMGAgYW5kIGRhdGVzIHRvIG1pbGxpc2Vjb25kcy5cbiAgICAgIC8vIEludmFsaWQgZGF0ZXMgYXJlIGNvZXJjZWQgdG8gYE5hTmAuXG4gICAgICByZXR1cm4gZXEoK29iamVjdCwgK290aGVyKTtcblxuICAgIGNhc2UgZXJyb3JUYWc6XG4gICAgICByZXR1cm4gb2JqZWN0Lm5hbWUgPT0gb3RoZXIubmFtZSAmJiBvYmplY3QubWVzc2FnZSA9PSBvdGhlci5tZXNzYWdlO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICAvLyBDb2VyY2UgcmVnZXhlcyB0byBzdHJpbmdzIGFuZCB0cmVhdCBzdHJpbmdzLCBwcmltaXRpdmVzIGFuZCBvYmplY3RzLFxuICAgICAgLy8gYXMgZXF1YWwuIFNlZSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcmVnZXhwLnByb3RvdHlwZS50b3N0cmluZ1xuICAgICAgLy8gZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgIHJldHVybiBvYmplY3QgPT0gKG90aGVyICsgJycpO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICB2YXIgY29udmVydCA9IG1hcFRvQXJyYXk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUc7XG4gICAgICBjb252ZXJ0IHx8IChjb252ZXJ0ID0gc2V0VG9BcnJheSk7XG5cbiAgICAgIGlmIChvYmplY3Quc2l6ZSAhPSBvdGhlci5zaXplICYmICFpc1BhcnRpYWwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICAgICAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgICAgIGlmIChzdGFja2VkKSB7XG4gICAgICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICAgICAgfVxuICAgICAgYml0bWFzayB8PSBDT01QQVJFX1VOT1JERVJFRF9GTEFHO1xuXG4gICAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICAgIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgICAgIHZhciByZXN1bHQgPSBlcXVhbEFycmF5cyhjb252ZXJ0KG9iamVjdCksIGNvbnZlcnQob3RoZXIpLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgICAgIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgaWYgKHN5bWJvbFZhbHVlT2YpIHtcbiAgICAgICAgcmV0dXJuIHN5bWJvbFZhbHVlT2YuY2FsbChvYmplY3QpID09IHN5bWJvbFZhbHVlT2YuY2FsbChvdGhlcik7XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQnlUYWc7XG4iLCJ2YXIgZ2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3Igb2JqZWN0cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgb2JqUHJvcHMgPSBnZXRBbGxLZXlzKG9iamVjdCksXG4gICAgICBvYmpMZW5ndGggPSBvYmpQcm9wcy5sZW5ndGgsXG4gICAgICBvdGhQcm9wcyA9IGdldEFsbEtleXMob3RoZXIpLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoUHJvcHMubGVuZ3RoO1xuXG4gIGlmIChvYmpMZW5ndGggIT0gb3RoTGVuZ3RoICYmICFpc1BhcnRpYWwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGluZGV4ID0gb2JqTGVuZ3RoO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgaWYgKCEoaXNQYXJ0aWFsID8ga2V5IGluIG90aGVyIDogaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwga2V5KSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgLy8gQ2hlY2sgdGhhdCBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIG9ialN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgdmFyIG90aFN0YWNrZWQgPSBzdGFjay5nZXQob3RoZXIpO1xuICBpZiAob2JqU3RhY2tlZCAmJiBvdGhTdGFja2VkKSB7XG4gICAgcmV0dXJuIG9ialN0YWNrZWQgPT0gb3RoZXIgJiYgb3RoU3RhY2tlZCA9PSBvYmplY3Q7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBvYmplY3QpO1xuXG4gIHZhciBza2lwQ3RvciA9IGlzUGFydGlhbDtcbiAgd2hpbGUgKCsraW5kZXggPCBvYmpMZW5ndGgpIHtcbiAgICBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJba2V5XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBvYmpWYWx1ZSwga2V5LCBvdGhlciwgb2JqZWN0LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKG9ialZhbHVlLCBvdGhWYWx1ZSwga2V5LCBvYmplY3QsIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmICghKGNvbXBhcmVkID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IChvYmpWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKG9ialZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKVxuICAgICAgICAgIDogY29tcGFyZWRcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgc2tpcEN0b3IgfHwgKHNraXBDdG9yID0ga2V5ID09ICdjb25zdHJ1Y3RvcicpO1xuICB9XG4gIGlmIChyZXN1bHQgJiYgIXNraXBDdG9yKSB7XG4gICAgdmFyIG9iakN0b3IgPSBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgIG90aEN0b3IgPSBvdGhlci5jb25zdHJ1Y3RvcjtcblxuICAgIC8vIE5vbiBgT2JqZWN0YCBvYmplY3QgaW5zdGFuY2VzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWFsLlxuICAgIGlmIChvYmpDdG9yICE9IG90aEN0b3IgJiZcbiAgICAgICAgKCdjb25zdHJ1Y3RvcicgaW4gb2JqZWN0ICYmICdjb25zdHJ1Y3RvcicgaW4gb3RoZXIpICYmXG4gICAgICAgICEodHlwZW9mIG9iakN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvYmpDdG9yIGluc3RhbmNlb2Ygb2JqQ3RvciAmJlxuICAgICAgICAgIHR5cGVvZiBvdGhDdG9yID09ICdmdW5jdGlvbicgJiYgb3RoQ3RvciBpbnN0YW5jZW9mIG90aEN0b3IpKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxPYmplY3RzO1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzLCBnZXRTeW1ib2xzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBbGxLZXlzO1xuIiwidmFyIGlzS2V5YWJsZSA9IHJlcXVpcmUoJy4vX2lzS2V5YWJsZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWFwRGF0YTtcbiIsInZhciBiYXNlSXNOYXRpdmUgPSByZXF1aXJlKCcuL19iYXNlSXNOYXRpdmUnKSxcbiAgICBnZXRWYWx1ZSA9IHJlcXVpcmUoJy4vX2dldFZhbHVlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TmF0aXZlO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuIiwidmFyIGFycmF5RmlsdGVyID0gcmVxdWlyZSgnLi9fYXJyYXlGaWx0ZXInKSxcbiAgICBzdHViQXJyYXkgPSByZXF1aXJlKCcuL3N0dWJBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgcmV0dXJuIGFycmF5RmlsdGVyKG5hdGl2ZUdldFN5bWJvbHMob2JqZWN0KSwgZnVuY3Rpb24oc3ltYm9sKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqZWN0LCBzeW1ib2wpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U3ltYm9scztcbiIsInZhciBEYXRhVmlldyA9IHJlcXVpcmUoJy4vX0RhdGFWaWV3JyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgUHJvbWlzZSA9IHJlcXVpcmUoJy4vX1Byb21pc2UnKSxcbiAgICBTZXQgPSByZXF1aXJlKCcuL19TZXQnKSxcbiAgICBXZWFrTWFwID0gcmVxdWlyZSgnLi9fV2Vha01hcCcpLFxuICAgIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJvbWlzZVRhZyA9ICdbb2JqZWN0IFByb21pc2VdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWFwcywgc2V0cywgYW5kIHdlYWttYXBzLiAqL1xudmFyIGRhdGFWaWV3Q3RvclN0cmluZyA9IHRvU291cmNlKERhdGFWaWV3KSxcbiAgICBtYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoTWFwKSxcbiAgICBwcm9taXNlQ3RvclN0cmluZyA9IHRvU291cmNlKFByb21pc2UpLFxuICAgIHNldEN0b3JTdHJpbmcgPSB0b1NvdXJjZShTZXQpLFxuICAgIHdlYWtNYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoV2Vha01hcCk7XG5cbi8qKlxuICogR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbnZhciBnZXRUYWcgPSBiYXNlR2V0VGFnO1xuXG4vLyBGYWxsYmFjayBmb3IgZGF0YSB2aWV3cywgbWFwcywgc2V0cywgYW5kIHdlYWsgbWFwcyBpbiBJRSAxMSBhbmQgcHJvbWlzZXMgaW4gTm9kZS5qcyA8IDYuXG5pZiAoKERhdGFWaWV3ICYmIGdldFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDEpKSkgIT0gZGF0YVZpZXdUYWcpIHx8XG4gICAgKE1hcCAmJiBnZXRUYWcobmV3IE1hcCkgIT0gbWFwVGFnKSB8fFxuICAgIChQcm9taXNlICYmIGdldFRhZyhQcm9taXNlLnJlc29sdmUoKSkgIT0gcHJvbWlzZVRhZykgfHxcbiAgICAoU2V0ICYmIGdldFRhZyhuZXcgU2V0KSAhPSBzZXRUYWcpIHx8XG4gICAgKFdlYWtNYXAgJiYgZ2V0VGFnKG5ldyBXZWFrTWFwKSAhPSB3ZWFrTWFwVGFnKSkge1xuICBnZXRUYWcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBiYXNlR2V0VGFnKHZhbHVlKSxcbiAgICAgICAgQ3RvciA9IHJlc3VsdCA9PSBvYmplY3RUYWcgPyB2YWx1ZS5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RvclN0cmluZyA9IEN0b3IgPyB0b1NvdXJjZShDdG9yKSA6ICcnO1xuXG4gICAgaWYgKGN0b3JTdHJpbmcpIHtcbiAgICAgIHN3aXRjaCAoY3RvclN0cmluZykge1xuICAgICAgICBjYXNlIGRhdGFWaWV3Q3RvclN0cmluZzogcmV0dXJuIGRhdGFWaWV3VGFnO1xuICAgICAgICBjYXNlIG1hcEN0b3JTdHJpbmc6IHJldHVybiBtYXBUYWc7XG4gICAgICAgIGNhc2UgcHJvbWlzZUN0b3JTdHJpbmc6IHJldHVybiBwcm9taXNlVGFnO1xuICAgICAgICBjYXNlIHNldEN0b3JTdHJpbmc6IHJldHVybiBzZXRUYWc7XG4gICAgICAgIGNhc2Ugd2Vha01hcEN0b3JTdHJpbmc6IHJldHVybiB3ZWFrTWFwVGFnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhZztcbiIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoQ2xlYXI7XG4iLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hEZWxldGU7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoR2V0O1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEhhcztcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcbiIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuXG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlID09ICdudW1iZXInIHx8XG4gICAgICAodHlwZSAhPSAnc3ltYm9sJyAmJiByZUlzVWludC50ZXN0KHZhbHVlKSkpICYmXG4gICAgICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5YWJsZTtcbiIsInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2VkO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUHJvdG90eXBlO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUNsZWFyO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlRGVsZXRlO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUdldDtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlU2V0O1xuIiwidmFyIEhhc2ggPSByZXF1aXJlKCcuL19IYXNoJyksXG4gICAgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUNsZWFyO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlRGVsZXRlO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUdldDtcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlSGFzO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZVNldDtcbiIsIi8qKlxuICogQ29udmVydHMgYG1hcGAgdG8gaXRzIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwVG9BcnJheTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVDcmVhdGU7XG4iLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXM7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICAvLyBVc2UgYHV0aWwudHlwZXNgIGZvciBOb2RlLmpzIDEwKy5cbiAgICB2YXIgdHlwZXMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUucmVxdWlyZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUoJ3V0aWwnKS50eXBlcztcblxuICAgIGlmICh0eXBlcykge1xuICAgICAgcmV0dXJuIHR5cGVzO1xuICAgIH1cblxuICAgIC8vIExlZ2FjeSBgcHJvY2Vzcy5iaW5kaW5nKCd1dGlsJylgIGZvciBOb2RlLmpzIDwgMTAuXG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBub2RlVXRpbDtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuIiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlckFyZztcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcbiIsIi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBhZGRcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQGFsaWFzIHB1c2hcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNhY2hlLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlQWRkKHZhbHVlKSB7XG4gIHRoaXMuX19kYXRhX18uc2V0KHZhbHVlLCBIQVNIX1VOREVGSU5FRCk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlQWRkO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBpbiB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUhhcyh2YWx1ZSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXModmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlSGFzO1xuIiwiLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb0FycmF5O1xuIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrQ2xlYXI7XG4iLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgcmVzdWx0ID0gZGF0YVsnZGVsZXRlJ10oa2V5KTtcblxuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tEZWxldGU7XG4iLCIvKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tHZXQ7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBhIHN0YWNrIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tIYXMoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrSGFzO1xuIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gZGF0YS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB0aGlzLnNpemUgPSArK2RhdGEuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tTZXQ7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Tb3VyY2U7XG4iLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcTtcbiIsInZhciBiYXNlSXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL19iYXNlSXNBcmd1bWVudHMnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG4iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpLFxuICAgIHN0dWJGYWxzZSA9IHJlcXVpcmUoJy4vc3R1YkZhbHNlJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0J1ZmZlcjtcbiIsInZhciBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsJyk7XG5cbi8qKlxuICogUGVyZm9ybXMgYSBkZWVwIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZVxuICogZXF1aXZhbGVudC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2Qgc3VwcG9ydHMgY29tcGFyaW5nIGFycmF5cywgYXJyYXkgYnVmZmVycywgYm9vbGVhbnMsXG4gKiBkYXRlIG9iamVjdHMsIGVycm9yIG9iamVjdHMsIG1hcHMsIG51bWJlcnMsIGBPYmplY3RgIG9iamVjdHMsIHJlZ2V4ZXMsXG4gKiBzZXRzLCBzdHJpbmdzLCBzeW1ib2xzLCBhbmQgdHlwZWQgYXJyYXlzLiBgT2JqZWN0YCBvYmplY3RzIGFyZSBjb21wYXJlZFxuICogYnkgdGhlaXIgb3duLCBub3QgaW5oZXJpdGVkLCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuIEZ1bmN0aW9ucyBhbmQgRE9NXG4gKiBub2RlcyBhcmUgY29tcGFyZWQgYnkgc3RyaWN0IGVxdWFsaXR5LCBpLmUuIGA9PT1gLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmlzRXF1YWwob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogb2JqZWN0ID09PSBvdGhlcjtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRXF1YWwodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRXF1YWw7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG4iLCJ2YXIgYmFzZUlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Jhc2VJc1R5cGVkQXJyYXknKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcbiIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkFycmF5O1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJGYWxzZTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEwLDIwMTEsMjAxMiwyMDEzLDIwMTQgTW9yZ2FuIFJvZGVyaWNrIGh0dHA6Ly9yb2Rlcmljay5ka1xuICogTGljZW5zZTogTUlUIC0gaHR0cDovL21yZ25yZHJjay5taXQtbGljZW5zZS5vcmdcbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbXJvZGVyaWNrL1B1YlN1YkpTXG4gKi9cblxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KXtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgUHViU3ViID0ge307XG5cbiAgICBpZiAocm9vdC5QdWJTdWIpIHtcbiAgICAgICAgUHViU3ViID0gcm9vdC5QdWJTdWI7XG4gICAgICAgIGNvbnNvbGUud2FybihcIlB1YlN1YiBhbHJlYWR5IGxvYWRlZCwgdXNpbmcgZXhpc3RpbmcgdmVyc2lvblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByb290LlB1YlN1YiA9IFB1YlN1YjtcbiAgICAgICAgZmFjdG9yeShQdWJTdWIpO1xuICAgIH1cbiAgICAvLyBDb21tb25KUyBhbmQgTm9kZS5qcyBtb2R1bGUgc3VwcG9ydFxuICAgIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpe1xuICAgICAgICBpZiAobW9kdWxlICE9PSB1bmRlZmluZWQgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IFB1YlN1YjsgLy8gTm9kZS5qcyBzcGVjaWZpYyBgbW9kdWxlLmV4cG9ydHNgXG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0cy5QdWJTdWIgPSBQdWJTdWI7IC8vIENvbW1vbkpTIG1vZHVsZSAxLjEuMSBzcGVjXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IFB1YlN1YjsgLy8gQ29tbW9uSlNcbiAgICB9XG4gICAgLy8gQU1EIHN1cHBvcnRcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuICAgIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCl7XG4gICAgICAgIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIFB1YlN1YjsgfSk7XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW5kZWYgKi9cbiAgICB9XG5cbn0oKCB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cgKSB8fCB0aGlzLCBmdW5jdGlvbiAoUHViU3ViKXtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgbWVzc2FnZXMgPSB7fSxcbiAgICAgICAgbGFzdFVpZCA9IC0xLFxuICAgICAgICBBTExfU1VCU0NSSUJJTkdfTVNHID0gJyonO1xuXG4gICAgZnVuY3Rpb24gaGFzS2V5cyhvYmope1xuICAgICAgICB2YXIga2V5O1xuXG4gICAgICAgIGZvciAoa2V5IGluIG9iail7XG4gICAgICAgICAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkgKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgdGhyb3dzIHRoZSBwYXNzZWQgZXhjZXB0aW9uLCBmb3IgdXNlIGFzIGFyZ3VtZW50IGZvciBzZXRUaW1lb3V0XG4gICAgICogQGFsaWFzIHRocm93RXhjZXB0aW9uXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gZXggQW4gRXJyb3Igb2JqZWN0XG4gICAgICovXG4gICAgZnVuY3Rpb24gdGhyb3dFeGNlcHRpb24oIGV4ICl7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiByZVRocm93RXhjZXB0aW9uKCl7XG4gICAgICAgICAgICB0aHJvdyBleDtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxsU3Vic2NyaWJlcldpdGhEZWxheWVkRXhjZXB0aW9ucyggc3Vic2NyaWJlciwgbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3Vic2NyaWJlciggbWVzc2FnZSwgZGF0YSApO1xuICAgICAgICB9IGNhdGNoKCBleCApe1xuICAgICAgICAgICAgc2V0VGltZW91dCggdGhyb3dFeGNlcHRpb24oIGV4ICksIDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsbFN1YnNjcmliZXJXaXRoSW1tZWRpYXRlRXhjZXB0aW9ucyggc3Vic2NyaWJlciwgbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICBzdWJzY3JpYmVyKCBtZXNzYWdlLCBkYXRhICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsaXZlck1lc3NhZ2UoIG9yaWdpbmFsTWVzc2FnZSwgbWF0Y2hlZE1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKXtcbiAgICAgICAgdmFyIHN1YnNjcmliZXJzID0gbWVzc2FnZXNbbWF0Y2hlZE1lc3NhZ2VdLFxuICAgICAgICAgICAgY2FsbFN1YnNjcmliZXIgPSBpbW1lZGlhdGVFeGNlcHRpb25zID8gY2FsbFN1YnNjcmliZXJXaXRoSW1tZWRpYXRlRXhjZXB0aW9ucyA6IGNhbGxTdWJzY3JpYmVyV2l0aERlbGF5ZWRFeGNlcHRpb25zLFxuICAgICAgICAgICAgcztcblxuICAgICAgICBpZiAoICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIG1lc3NhZ2VzLCBtYXRjaGVkTWVzc2FnZSApICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChzIGluIHN1YnNjcmliZXJzKXtcbiAgICAgICAgICAgIGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHN1YnNjcmliZXJzLCBzKSl7XG4gICAgICAgICAgICAgICAgY2FsbFN1YnNjcmliZXIoIHN1YnNjcmliZXJzW3NdLCBvcmlnaW5hbE1lc3NhZ2UsIGRhdGEgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZURlbGl2ZXJ5RnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKXtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGRlbGl2ZXJOYW1lc3BhY2VkKCl7XG4gICAgICAgICAgICB2YXIgdG9waWMgPSBTdHJpbmcoIG1lc3NhZ2UgKSxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcblxuICAgICAgICAgICAgLy8gZGVsaXZlciB0aGUgbWVzc2FnZSBhcyBpdCBpcyBub3dcbiAgICAgICAgICAgIGRlbGl2ZXJNZXNzYWdlKG1lc3NhZ2UsIG1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMpO1xuXG4gICAgICAgICAgICAvLyB0cmltIHRoZSBoaWVyYXJjaHkgYW5kIGRlbGl2ZXIgbWVzc2FnZSB0byBlYWNoIGxldmVsXG4gICAgICAgICAgICB3aGlsZSggcG9zaXRpb24gIT09IC0xICl7XG4gICAgICAgICAgICAgICAgdG9waWMgPSB0b3BpYy5zdWJzdHIoIDAsIHBvc2l0aW9uICk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZignLicpO1xuICAgICAgICAgICAgICAgIGRlbGl2ZXJNZXNzYWdlKCBtZXNzYWdlLCB0b3BpYywgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWxpdmVyTWVzc2FnZShtZXNzYWdlLCBBTExfU1VCU0NSSUJJTkdfTVNHLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYXNEaXJlY3RTdWJzY3JpYmVyc0ZvciggbWVzc2FnZSApIHtcbiAgICAgICAgdmFyIHRvcGljID0gU3RyaW5nKCBtZXNzYWdlICksXG4gICAgICAgICAgICBmb3VuZCA9IEJvb2xlYW4oT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBtZXNzYWdlcywgdG9waWMgKSAmJiBoYXNLZXlzKG1lc3NhZ2VzW3RvcGljXSkpO1xuXG4gICAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtZXNzYWdlSGFzU3Vic2NyaWJlcnMoIG1lc3NhZ2UgKXtcbiAgICAgICAgdmFyIHRvcGljID0gU3RyaW5nKCBtZXNzYWdlICksXG4gICAgICAgICAgICBmb3VuZCA9IGhhc0RpcmVjdFN1YnNjcmliZXJzRm9yKHRvcGljKSB8fCBoYXNEaXJlY3RTdWJzY3JpYmVyc0ZvcihBTExfU1VCU0NSSUJJTkdfTVNHKSxcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuXG4gICAgICAgIHdoaWxlICggIWZvdW5kICYmIHBvc2l0aW9uICE9PSAtMSApe1xuICAgICAgICAgICAgdG9waWMgPSB0b3BpYy5zdWJzdHIoIDAsIHBvc2l0aW9uICk7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcbiAgICAgICAgICAgIGZvdW5kID0gaGFzRGlyZWN0U3Vic2NyaWJlcnNGb3IodG9waWMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIHN5bmMsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKXtcbiAgICAgICAgbWVzc2FnZSA9ICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N5bWJvbCcpID8gbWVzc2FnZS50b1N0cmluZygpIDogbWVzc2FnZTtcblxuICAgICAgICB2YXIgZGVsaXZlciA9IGNyZWF0ZURlbGl2ZXJ5RnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKSxcbiAgICAgICAgICAgIGhhc1N1YnNjcmliZXJzID0gbWVzc2FnZUhhc1N1YnNjcmliZXJzKCBtZXNzYWdlICk7XG5cbiAgICAgICAgaWYgKCAhaGFzU3Vic2NyaWJlcnMgKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggc3luYyA9PT0gdHJ1ZSApe1xuICAgICAgICAgICAgZGVsaXZlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dCggZGVsaXZlciwgMCApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFB1Ymxpc2hlcyB0aGUgbWVzc2FnZSwgcGFzc2luZyB0aGUgZGF0YSB0byBpdCdzIHN1YnNjcmliZXJzXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHB1Ymxpc2hcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHB1Ymxpc2hcbiAgICAgKiBAcGFyYW0ge30gZGF0YSBUaGUgZGF0YSB0byBwYXNzIHRvIHN1YnNjcmliZXJzXG4gICAgICogQHJldHVybiB7IEJvb2xlYW4gfVxuICAgICAqL1xuICAgIFB1YlN1Yi5wdWJsaXNoID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgcmV0dXJuIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIGZhbHNlLCBQdWJTdWIuaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaXNoZXMgdGhlIG1lc3NhZ2Ugc3luY2hyb25vdXNseSwgcGFzc2luZyB0aGUgZGF0YSB0byBpdCdzIHN1YnNjcmliZXJzXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHB1Ymxpc2hTeW5jXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBwdWJsaXNoXG4gICAgICogQHBhcmFtIHt9IGRhdGEgVGhlIGRhdGEgdG8gcGFzcyB0byBzdWJzY3JpYmVyc1xuICAgICAqIEByZXR1cm4geyBCb29sZWFuIH1cbiAgICAgKi9cbiAgICBQdWJTdWIucHVibGlzaFN5bmMgPSBmdW5jdGlvbiggbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICByZXR1cm4gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgdHJ1ZSwgUHViU3ViLmltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlcyB0aGUgcGFzc2VkIGZ1bmN0aW9uIHRvIHRoZSBwYXNzZWQgbWVzc2FnZS4gRXZlcnkgcmV0dXJuZWQgdG9rZW4gaXMgdW5pcXVlIGFuZCBzaG91bGQgYmUgc3RvcmVkIGlmIHlvdSBuZWVkIHRvIHVuc3Vic2NyaWJlXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHN1YnNjcmliZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gc3Vic2NyaWJlIHRvXG4gICAgICogQHBhcmFtIHsgRnVuY3Rpb24gfSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gYSBuZXcgbWVzc2FnZSBpcyBwdWJsaXNoZWRcbiAgICAgKiBAcmV0dXJuIHsgU3RyaW5nIH1cbiAgICAgKi9cbiAgICBQdWJTdWIuc3Vic2NyaWJlID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGZ1bmMgKXtcbiAgICAgICAgaWYgKCB0eXBlb2YgZnVuYyAhPT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBtZXNzYWdlID0gKHR5cGVvZiBtZXNzYWdlID09PSAnc3ltYm9sJykgPyBtZXNzYWdlLnRvU3RyaW5nKCkgOiBtZXNzYWdlO1xuXG4gICAgICAgIC8vIG1lc3NhZ2UgaXMgbm90IHJlZ2lzdGVyZWQgeWV0XG4gICAgICAgIGlmICggIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggbWVzc2FnZXMsIG1lc3NhZ2UgKSApe1xuICAgICAgICAgICAgbWVzc2FnZXNbbWVzc2FnZV0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvcmNpbmcgdG9rZW4gYXMgU3RyaW5nLCB0byBhbGxvdyBmb3IgZnV0dXJlIGV4cGFuc2lvbnMgd2l0aG91dCBicmVha2luZyB1c2FnZVxuICAgICAgICAvLyBhbmQgYWxsb3cgZm9yIGVhc3kgdXNlIGFzIGtleSBuYW1lcyBmb3IgdGhlICdtZXNzYWdlcycgb2JqZWN0XG4gICAgICAgIHZhciB0b2tlbiA9ICd1aWRfJyArIFN0cmluZygrK2xhc3RVaWQpO1xuICAgICAgICBtZXNzYWdlc1ttZXNzYWdlXVt0b2tlbl0gPSBmdW5jO1xuXG4gICAgICAgIC8vIHJldHVybiB0b2tlbiBmb3IgdW5zdWJzY3JpYmluZ1xuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgfTtcblxuICAgIFB1YlN1Yi5zdWJzY3JpYmVBbGwgPSBmdW5jdGlvbiggZnVuYyApe1xuICAgICAgICByZXR1cm4gUHViU3ViLnN1YnNjcmliZShBTExfU1VCU0NSSUJJTkdfTVNHLCBmdW5jKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlcyB0aGUgcGFzc2VkIGZ1bmN0aW9uIHRvIHRoZSBwYXNzZWQgbWVzc2FnZSBvbmNlXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHN1YnNjcmliZU9uY2VcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHN1YnNjcmliZSB0b1xuICAgICAqIEBwYXJhbSB7IEZ1bmN0aW9uIH0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGEgbmV3IG1lc3NhZ2UgaXMgcHVibGlzaGVkXG4gICAgICogQHJldHVybiB7IFB1YlN1YiB9XG4gICAgICovXG4gICAgUHViU3ViLnN1YnNjcmliZU9uY2UgPSBmdW5jdGlvbiggbWVzc2FnZSwgZnVuYyApe1xuICAgICAgICB2YXIgdG9rZW4gPSBQdWJTdWIuc3Vic2NyaWJlKCBtZXNzYWdlLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgLy8gYmVmb3JlIGZ1bmMgYXBwbHksIHVuc3Vic2NyaWJlIG1lc3NhZ2VcbiAgICAgICAgICAgIFB1YlN1Yi51bnN1YnNjcmliZSggdG9rZW4gKTtcbiAgICAgICAgICAgIGZ1bmMuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFB1YlN1YjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBzdWJzY3JpcHRpb25zXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBjbGVhckFsbFN1YnNjcmlwdGlvbnNcbiAgICAgKi9cbiAgICBQdWJTdWIuY2xlYXJBbGxTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gY2xlYXJBbGxTdWJzY3JpcHRpb25zKCl7XG4gICAgICAgIG1lc3NhZ2VzID0ge307XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFyIHN1YnNjcmlwdGlvbnMgYnkgdGhlIHRvcGljXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBjbGVhckFsbFN1YnNjcmlwdGlvbnNcbiAgICAgKiBAcmV0dXJuIHsgaW50IH1cbiAgICAgKi9cbiAgICBQdWJTdWIuY2xlYXJTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gY2xlYXJTdWJzY3JpcHRpb25zKHRvcGljKXtcbiAgICAgICAgdmFyIG07XG4gICAgICAgIGZvciAobSBpbiBtZXNzYWdlcyl7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCBtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwKXtcbiAgICAgICAgICAgICAgICBkZWxldGUgbWVzc2FnZXNbbV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICAgQ291bnQgc3Vic2NyaXB0aW9ucyBieSB0aGUgdG9waWNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIGNvdW50U3Vic2NyaXB0aW9uc1xuICAgICAqIEByZXR1cm4geyBBcnJheSB9XG4gICAgKi9cbiAgICBQdWJTdWIuY291bnRTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gY291bnRTdWJzY3JpcHRpb25zKHRvcGljKXtcbiAgICAgICAgdmFyIG07XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICAgIGZvciAobSBpbiBtZXNzYWdlcykge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlcywgbSkgJiYgbS5pbmRleE9mKHRvcGljKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGZvciAodG9rZW4gaW4gbWVzc2FnZXNbbV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAgIEdldHMgc3Vic2NyaXB0aW9ucyBieSB0aGUgdG9waWNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIGdldFN1YnNjcmlwdGlvbnNcbiAgICAqL1xuICAgIFB1YlN1Yi5nZXRTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gZ2V0U3Vic2NyaXB0aW9ucyh0b3BpYyl7XG4gICAgICAgIHZhciBtO1xuICAgICAgICB2YXIgbGlzdCA9IFtdO1xuICAgICAgICBmb3IgKG0gaW4gbWVzc2FnZXMpe1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlcywgbSkgJiYgbS5pbmRleE9mKHRvcGljKSA9PT0gMCl7XG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaXN0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHN1YnNjcmlwdGlvbnNcbiAgICAgKlxuICAgICAqIC0gV2hlbiBwYXNzZWQgYSB0b2tlbiwgcmVtb3ZlcyBhIHNwZWNpZmljIHN1YnNjcmlwdGlvbi5cbiAgICAgKlxuXHQgKiAtIFdoZW4gcGFzc2VkIGEgZnVuY3Rpb24sIHJlbW92ZXMgYWxsIHN1YnNjcmlwdGlvbnMgZm9yIHRoYXQgZnVuY3Rpb25cbiAgICAgKlxuXHQgKiAtIFdoZW4gcGFzc2VkIGEgdG9waWMsIHJlbW92ZXMgYWxsIHN1YnNjcmlwdGlvbnMgZm9yIHRoYXQgdG9waWMgKGhpZXJhcmNoeSlcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIHN1YnNjcmliZU9uY2VcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfCBGdW5jdGlvbiB9IHZhbHVlIEEgdG9rZW4sIGZ1bmN0aW9uIG9yIHRvcGljIHRvIHVuc3Vic2NyaWJlIGZyb21cbiAgICAgKiBAZXhhbXBsZSAvLyBVbnN1YnNjcmliaW5nIHdpdGggYSB0b2tlblxuICAgICAqIHZhciB0b2tlbiA9IFB1YlN1Yi5zdWJzY3JpYmUoJ215dG9waWMnLCBteUZ1bmMpO1xuICAgICAqIFB1YlN1Yi51bnN1YnNjcmliZSh0b2tlbik7XG4gICAgICogQGV4YW1wbGUgLy8gVW5zdWJzY3JpYmluZyB3aXRoIGEgZnVuY3Rpb25cbiAgICAgKiBQdWJTdWIudW5zdWJzY3JpYmUobXlGdW5jKTtcbiAgICAgKiBAZXhhbXBsZSAvLyBVbnN1YnNjcmliaW5nIGZyb20gYSB0b3BpY1xuICAgICAqIFB1YlN1Yi51bnN1YnNjcmliZSgnbXl0b3BpYycpO1xuICAgICAqL1xuICAgIFB1YlN1Yi51bnN1YnNjcmliZSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgdmFyIGRlc2NlbmRhbnRUb3BpY0V4aXN0cyA9IGZ1bmN0aW9uKHRvcGljKSB7XG4gICAgICAgICAgICAgICAgdmFyIG07XG4gICAgICAgICAgICAgICAgZm9yICggbSBpbiBtZXNzYWdlcyApe1xuICAgICAgICAgICAgICAgICAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlcywgbSkgJiYgbS5pbmRleE9mKHRvcGljKSA9PT0gMCApe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYSBkZXNjZW5kYW50IG9mIHRoZSB0b3BpYyBleGlzdHM6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc1RvcGljICAgID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlcywgdmFsdWUpIHx8IGRlc2NlbmRhbnRUb3BpY0V4aXN0cyh2YWx1ZSkgKSxcbiAgICAgICAgICAgIGlzVG9rZW4gICAgPSAhaXNUb3BpYyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnLFxuICAgICAgICAgICAgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyxcbiAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlLFxuICAgICAgICAgICAgbSwgbWVzc2FnZSwgdDtcblxuICAgICAgICBpZiAoaXNUb3BpYyl7XG4gICAgICAgICAgICBQdWJTdWIuY2xlYXJTdWJzY3JpcHRpb25zKHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoIG0gaW4gbWVzc2FnZXMgKXtcbiAgICAgICAgICAgIGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBtZXNzYWdlcywgbSApICl7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2VzW21dO1xuXG4gICAgICAgICAgICAgICAgaWYgKCBpc1Rva2VuICYmIG1lc3NhZ2VbdmFsdWVdICl7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlW3ZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRva2VucyBhcmUgdW5pcXVlLCBzbyB3ZSBjYW4ganVzdCBzdG9wIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICggdCBpbiBtZXNzYWdlICl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2UsIHQpICYmIG1lc3NhZ2VbdF0gPT09IHZhbHVlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWVzc2FnZVt0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufSkpO1xuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vc2hpcC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBCb3Qge1xuICBjb25zdHJ1Y3RvcihvcHBvbmVudHNHYW1lYm9hcmQpIHtcbiAgICB0aGlzLm9wcG9uZW50c0dhbWVib2FyZCA9IG9wcG9uZW50c0dhbWVib2FyZDtcbiAgICB0aGlzLmF0dGFja1F1ZXVlID0gW107XG4gIH1cblxuICBhdHRhY2soKSB7XG4gICAgbGV0IG9yaWVudGF0aW9uID0gbnVsbDtcbiAgICBsZXQgeDtcbiAgICBsZXQgeTtcblxuICAgIGlmICh0aGlzLmF0dGFja1F1ZXVlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgeCA9IHRoaXMuYXR0YWNrUXVldWVbMF0ueDtcbiAgICAgIHkgPSB0aGlzLmF0dGFja1F1ZXVlWzBdLnk7XG4gICAgICBvcmllbnRhdGlvbiA9IHRoaXMuYXR0YWNrUXVldWVbMF0ub3JpZW50YXRpb247XG5cbiAgICAgIHRoaXMuYXR0YWNrUXVldWUuc2hpZnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgICAgIC8vbWFraW5nIHN1cmUgcG9zaXRpb24gaGFzbid0IGJlZW4gYXR0YWNrZWQgeWV0XG4gICAgICB3aGlsZSAoXG4gICAgICAgICEoXG4gICAgICAgICAgdGhpcy5vcHBvbmVudHNHYW1lYm9hcmQuYm9hcmRbeF1beV0gPT09IG51bGwgfHxcbiAgICAgICAgICB0aGlzLm9wcG9uZW50c0dhbWVib2FyZC5ib2FyZFt4XVt5XSBpbnN0YW5jZW9mIFNoaXBcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3Bwb25lbnRzR2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSkpIHtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbnMgPSBbXG4gICAgICAgIHsgeDogLTEsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAwLCB5OiAxIH0sXG4gICAgICAgIHsgeDogMSwgeTogMCB9LFxuICAgICAgICB7IHg6IDAsIHk6IC0xIH0sXG4gICAgICBdO1xuXG4gICAgICBmb3IgKGNvbnN0IGQgb2YgZGlyZWN0aW9ucykge1xuICAgICAgICBjb25zdCB0YXJnZXRlZFggPSB4ICsgZC54O1xuICAgICAgICBjb25zdCB0YXJnZXRlZFkgPSB5ICsgZC55O1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICB0YXJnZXRlZFggPj0gMCAmJlxuICAgICAgICAgIHRhcmdldGVkWCA8PSA5ICYmXG4gICAgICAgICAgdGFyZ2V0ZWRZID49IDAgJiZcbiAgICAgICAgICB0YXJnZXRlZFkgPD0gOVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLmF0dGFja1F1ZXVlLnB1c2goe1xuICAgICAgICAgICAgeDogdGFyZ2V0ZWRYLFxuICAgICAgICAgICAgeTogdGFyZ2V0ZWRZLFxuICAgICAgICAgICAgb3JpZW50YXRpb246IGQueCA9PT0gMCA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCcsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy9sb29waW5nIHRocm91Z2ggdGhlIGF0dGFjayBxdWV1ZSB0byByZW1vdmUgZWxlbWVudHMgb2YgYW4gaW5hZGVxdWF0ZSBvcmllbnRhdGlvblxuICAgICAgaWYgKG9yaWVudGF0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hdHRhY2tRdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0aGlzLmF0dGFja1F1ZXVlW2ldLm9yaWVudGF0aW9uICE9PSBvcmllbnRhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5hdHRhY2tRdWV1ZS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFt4LCB5XTtcbiAgfVxufVxuIiwiaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUuY3NzJztcbmltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJztcblxuY29uc3QgTkVXX0dBTUUgPSAnbmV3IGdhbWUnO1xuY29uc3QgTkVYVF9QTEFZRVIgPSAnbmV4dCBwbGF5ZXJzIG1vdmUnO1xuY29uc3QgZWRpdEJvYXJkRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtYm9hcmQtZGlhbG9nJyk7XG5cbmV4cG9ydCBjbGFzcyBET01NYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc2V0VXBQbGF5QWdhaW5CdXR0b24oKTtcbiAgICBzZXROYW1lQ2xpY2tMaXN0ZW5lcnMoKTtcblxuICAgIC8vcmVzZXQgYnV0dG9uXG4gICAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQtYnV0dG9uJyk7XG5cbiAgICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIFB1YlN1Yi5wdWJsaXNoKE5FV19HQU1FKTtcbiAgICB9KTtcblxuICAgIC8vaGVhZGVyIGJ1dHRvbiB0byBzaG93IHN0YXJ0IG1lbnVcbiAgICBjb25zdCBzdGFydE1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtbWVudS1idXR0b24nKTtcbiAgICBzdGFydE1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnNob3dTdGFydE1lbnUoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2hvd1N0YXJ0TWVudSgpO1xuICB9XG5cbiAgcG9wdWxhdGVBY3RpdmVQbGF5ZXJzQm9hcmQocGxheWVyKSB7XG4gICAgY29uc3QgYm9hcmQgPSBwbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkO1xuXG4gICAgY29uc3QgYm9hcmRHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm9hcmRHcmlkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWdyaWQnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBpZiAoYm9hcmRbaV1bal0gPT09ICdoaXQnKSB7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QgPSAnaGl0LXNoaXAnO1xuICAgICAgICB9IGVsc2UgaWYgKGJvYXJkW2ldW2pdID09PSAnYXR0YWNrZWQnKSB7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QgPSAnYXR0YWNrZWQnO1xuXG4gICAgICAgICAgY29uc3QgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgZG90LmNsYXNzTGlzdC5hZGQoJ2RvdCcpO1xuICAgICAgICAgIGl0ZW0uYXBwZW5kKGRvdCk7XG4gICAgICAgIH0gZWxzZSBpZiAoYm9hcmRbaV1bal0gIT09IG51bGwgJiYgcGxheWVyLnR5cGUgIT09ICdjb21wdXRlcicpIHtcbiAgICAgICAgICAvL3NlY29uZCBjb25kaXRpb24gbWFrZXMgc3VyZSB0aGUgcmVhbCBwbGF5ZXIgZG9lc24ndCBnZXQgYSBnbGltcHNlIG9mIGJvdCdzIGJvYXJkXG5cbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdCA9ICdzaGlwJztcblxuICAgICAgICAgIGl0ZW0uaWQgPSBgJHtpfS0ke2p9YDtcblxuICAgICAgICAgIC8vZHJhZyBhbmQgZHJvcFxuICAgICAgICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmlzRWRpdGFibGUpIHtcbiAgICAgICAgICAgIGl0ZW0uZHJhZ2dhYmxlID0gdHJ1ZTtcblxuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCBldmVudC50YXJnZXQuaWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBsYXllci5nYW1lYm9hcmQuaXNFZGl0YWJsZSkge1xuICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRyb3BwZWRJZCA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHhDb29yZGluYXRlID0gZHJvcHBlZElkLmNoYXJBdCgwKTtcbiAgICAgICAgICAgIGNvbnN0IHlDb29yZGluYXRlID0gZHJvcHBlZElkLmNoYXJBdCgyKTtcblxuICAgICAgICAgICAgcGxheWVyLmdhbWVib2FyZC5tb3ZlU2hpcChcbiAgICAgICAgICAgICAgcGFyc2VJbnQoeENvb3JkaW5hdGUpLFxuICAgICAgICAgICAgICBwYXJzZUludCh5Q29vcmRpbmF0ZSksXG4gICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgIGpcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGVBY3RpdmVQbGF5ZXJzQm9hcmQocGxheWVyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYm9hcmQtaXRlbScpO1xuXG4gICAgICAgIGJvYXJkR3JpZC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBsYXllci5lbGVtZW50UXVlcnkpO1xuXG4gICAgYm9hcmRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgYm9hcmRDb250YWluZXIuYXBwZW5kKGJvYXJkR3JpZCk7XG4gIH1cblxuICBwb3B1bGF0ZU9wcG9uZW50c0JvYXJkKHBsYXllcikge1xuICAgIGNvbnN0IGJvYXJkID0gcGxheWVyLmdhbWVib2FyZC5ib2FyZDtcblxuICAgIGNvbnN0IGJvYXJkR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvYXJkR3JpZC5jbGFzc0xpc3QuYWRkKCdib2FyZC1ncmlkJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgaWYgKCFwbGF5ZXIuZ2FtZWJvYXJkLmlzRWRpdGFibGUpIHtcbiAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGksIGopO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvYXJkW2ldW2pdID09PSAnaGl0Jykge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0ID0gJ2hpdC1zaGlwJztcbiAgICAgICAgfSBlbHNlIGlmIChib2FyZFtpXVtqXSA9PT0gJ2F0dGFja2VkJykge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0ID0gJ2F0dGFja2VkJztcblxuICAgICAgICAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGRvdC5jbGFzc0xpc3QuYWRkKCdkb3QnKTtcbiAgICAgICAgICBpdGVtLmFwcGVuZChkb3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdib2FyZC1pdGVtJyk7XG5cbiAgICAgICAgYm9hcmRHcmlkLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGxheWVyLmVsZW1lbnRRdWVyeSk7XG5cbiAgICBib2FyZENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBib2FyZENvbnRhaW5lci5hcHBlbmQoYm9hcmRHcmlkKTtcbiAgfVxuXG4gIHBvcHVsYXRlQm9hcmQoZmlyc3RQbGF5ZXIsIHNlY29uZFBsYXllciwgcGxheWVyU3dpdGNoZWQgPSBmYWxzZSkge1xuICAgIGlmIChmaXJzdFBsYXllci5pc0FjdGl2ZSkge1xuICAgICAgdGhpcy5wb3B1bGF0ZUFjdGl2ZVBsYXllcnNCb2FyZChmaXJzdFBsYXllcik7XG4gICAgICB0aGlzLnBvcHVsYXRlT3Bwb25lbnRzQm9hcmQoc2Vjb25kUGxheWVyKTtcblxuICAgICAgaWYgKGZpcnN0UGxheWVyLmdhbWVib2FyZC5pc0VkaXRhYmxlKSB0aGlzLnNob3dFZGl0TWVzc2FnZShmaXJzdFBsYXllcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9wdWxhdGVBY3RpdmVQbGF5ZXJzQm9hcmQoc2Vjb25kUGxheWVyKTtcbiAgICAgIHRoaXMucG9wdWxhdGVPcHBvbmVudHNCb2FyZChmaXJzdFBsYXllcik7XG5cbiAgICAgIGlmIChzZWNvbmRQbGF5ZXIudHlwZSA9PT0gJ3JlYWwnICYmIHNlY29uZFBsYXllci5nYW1lYm9hcmQuaXNFZGl0YWJsZSlcbiAgICAgICAgdGhpcy5zaG93RWRpdE1lc3NhZ2Uoc2Vjb25kUGxheWVyKTtcbiAgICB9XG5cbiAgICBpZiAoc2Vjb25kUGxheWVyLnR5cGUgPT09ICdyZWFsJyAmJiBwbGF5ZXJTd2l0Y2hlZClcbiAgICAgIHRoaXMuc2hvd1Bhc3NEZXZpY2VEaWFsb2coXG4gICAgICAgIGZpcnN0UGxheWVyLmlzQWN0aXZlID8gZmlyc3RQbGF5ZXIubmFtZSA6IHNlY29uZFBsYXllci5uYW1lXG4gICAgICApO1xuICAgIGVsc2UgaWYgKHNlY29uZFBsYXllci50eXBlID09PSAnY29tcHV0ZXInKSBlZGl0Qm9hcmREaWFsb2cuY2xvc2UoKTtcbiAgfVxuXG4gIHNob3dFbmREaWFsb2cod2lubmVyKSB7XG4gICAgY29uc3QgZW5kRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZC1kaWFsb2cnKTtcblxuICAgIGlmICh3aW5uZXIudHlwZSA9PT0gJ2NvbXB1dGVyJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZC1kaWFsb2cgLm1lc3NhZ2UnKS50ZXh0Q29udGVudCA9XG4gICAgICAgICdZb3UgbG9zdC4gOi8nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5kLWRpYWxvZyAubWVzc2FnZScpLnRleHRDb250ZW50ID1cbiAgICAgICAgYENvbmdyYXR1bGF0aW9ucyAke3dpbm5lci5uYW1lfSwgeW91IHdvbiFgO1xuICAgIH1cblxuICAgIGVuZERpYWxvZy5zaG93TW9kYWwoKTtcbiAgfVxuXG4gIHNob3dTdGFydE1lbnUoKSB7XG4gICAgY29uc3QgUkVBTF9QTEFZRVJTX0dBTUUgPSAnc3RhcnQgZ2FtZSB3aXRoIHJlYWwgcGxheWVycyc7XG4gICAgY29uc3QgR0FNRV9XSVRIX0JPVCA9ICdzdGFydCBnYW1lIHdpdGggYSBib3QnO1xuXG4gICAgY29uc3Qgc3RhcnREaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtZGlhbG9nJyk7XG4gICAgc3RhcnREaWFsb2cuc2hvd01vZGFsKCk7XG5cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5yZWFsLW9wcG9uZW50LWJ1dHRvbicpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKFJFQUxfUExBWUVSU19HQU1FKTtcblxuICAgICAgICBzdGFydERpYWxvZy5jbG9zZSgpO1xuICAgICAgfSk7XG5cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXdpdGgtYm90LWJ1dHRvbicpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKEdBTUVfV0lUSF9CT1QpO1xuXG4gICAgICAgIHN0YXJ0RGlhbG9nLmNsb3NlKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHNob3dQYXNzRGV2aWNlRGlhbG9nKG5leHRQbGF5ZXJOYW1lKSB7XG4gICAgY29uc3QgcGFzc0RldmljZURpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzLWRldmljZS1kaWFsb2cnKTtcbiAgICBjb25zdCBuZXh0UGxheWVyTmFtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLnBhc3MtZGV2aWNlLWRpYWxvZyBidXR0b24gc3BhbidcbiAgICApO1xuICAgIGNvbnN0IG5leHRQbGF5ZXJOYW1lSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcucGFzcy1kZXZpY2UtZGlhbG9nIGgyIHNwYW4nXG4gICAgKTtcbiAgICBjb25zdCBkZXZpY2VQYXNzZWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy5wYXNzLWRldmljZS1kaWFsb2cgYnV0dG9uJ1xuICAgICk7XG5cbiAgICBuZXh0UGxheWVyTmFtZUhlYWRlci50ZXh0Q29udGVudCA9IG5leHRQbGF5ZXJOYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgbmV4dFBsYXllck5hbWVCdXR0b24udGV4dENvbnRlbnQgPSBuZXh0UGxheWVyTmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgIHBhc3NEZXZpY2VEaWFsb2cuc2hvd01vZGFsKCk7XG5cbiAgICBkZXZpY2VQYXNzZWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBwYXNzRGV2aWNlRGlhbG9nLmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cblxuICBzaG93RWRpdE1lc3NhZ2UocGxheWVyKSB7XG4gICAgY29uc3QgZWRpdEJvYXJkRGlhbG9nQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcuZWRpdC1ib2FyZC1kaWFsb2ctY29udGFpbmVyJ1xuICAgICk7XG5cbiAgICBlZGl0Qm9hcmREaWFsb2dDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSAnWW91IG1heSBtb3ZlIHNoaXBzIGFyb3VuZCB0aGUgYm9hcmQgbm93Lic7XG5cbiAgICBjb25zdCBkb25lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZG9uZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdET05FJztcbiAgICBlZGl0Qm9hcmREaWFsb2dDb250YWluZXIuYXBwZW5kKG1lc3NhZ2UsIGRvbmVCdXR0b24pO1xuXG4gICAgZWRpdEJvYXJkRGlhbG9nLnNob3coKTtcbiAgICBkb25lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZWRpdEJvYXJkRGlhbG9nLmNsb3NlKCk7XG4gICAgICBwbGF5ZXIuZ2FtZWJvYXJkLmlzRWRpdGFibGUgPSBmYWxzZTtcblxuICAgICAgUHViU3ViLnB1Ymxpc2goTkVYVF9QTEFZRVIpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldFVwUGxheUFnYWluQnV0dG9uKCkge1xuICBjb25zdCBwbGF5QWdhaW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheS1hZ2Fpbi1idXR0b24nKTtcblxuICBwbGF5QWdhaW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgUHViU3ViLnB1Ymxpc2goTkVXX0dBTUUpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZC1kaWFsb2cnKS5jbG9zZSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0TmFtZUNsaWNrTGlzdGVuZXJzKCkge1xuICBjb25zdCBjaGFuZ2VOYW1lRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW5nZS1uYW1lcy1kaWFsb2cnKTtcblxuICBjb25zdCBwbGF5ZXJzTmFtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwbGF5ZXJzLW5hbWUnKTtcblxuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgcGxheWVyc05hbWVzKSB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNoYW5nZU5hbWVEaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBjaGFuZ2VOYW1lRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2UtbmFtZXMtZGlhbG9nIGZvcm0nKTtcblxuICBjaGFuZ2VOYW1lRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdXBkYXRlTmFtZXMoXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlyc3QtbmFtZS1pbnB1dCcpLnZhbHVlLFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlY29uZC1uYW1lLWlucHV0JykudmFsdWVcbiAgICApO1xuXG4gICAgY2hhbmdlTmFtZUZvcm0ucmVzZXQoKTtcbiAgICBjaGFuZ2VOYW1lRGlhbG9nLmNsb3NlKCk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2hhbmdlTmFtZURpYWxvZy5jbG9zZSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlTmFtZXMobmFtZTEsIG5hbWUyKSB7XG4gIGNvbnN0IGZpcnN0TmFtZVBsYXllck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcuZmlyc3QtcGxheWVyIC5wbGF5ZXJzLW5hbWUnXG4gICk7XG4gIGNvbnN0IHNlY29uZE5hbWVQbGF5ZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLnNlY29uZC1wbGF5ZXIgLnBsYXllcnMtbmFtZSdcbiAgKTtcblxuICBmaXJzdE5hbWVQbGF5ZXJOYW1lLnRleHRDb250ZW50ID0gbmFtZTEudHJpbSgpID09PSAnJyA/ICdQbGF5ZXIgMScgOiBuYW1lMTtcbiAgc2Vjb25kTmFtZVBsYXllck5hbWUudGV4dENvbnRlbnQgPSBuYW1lMi50cmltKCkgPT09ICcnID8gJ1BsYXllciAyJyA6IG5hbWUyO1xuXG4gIGNvbnN0IENIQU5HRV9OQU1FUyA9ICdjaGFuZ2UgbmFtZXMnO1xuICBQdWJTdWIucHVibGlzaChDSEFOR0VfTkFNRVMsIFtuYW1lMSwgbmFtZTJdKTtcbn1cblxuLy8gZnVuY3Rpb24gc2V0VXBSZXNldEJ1dHRvbigpIHtcbi8vICAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQtYnV0dG9uJyk7XG5cbi8vICAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgICAgUHViU3ViLnB1Ymxpc2goTkVXX0dBTUUpO1xuLy8gICB9KTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gc2V0VXBHb1RvU3RhcnRNZW51QnV0dG9uKCkge1xuLy8gICBjb25zdCBzdGFydE1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtbWVudS1idXR0b24nKTtcbi8vICAgc3RhcnRNZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuXG4vLyAgIH0pXG4vLyB9XG4iLCJpbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwJztcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC9pc0VxdWFsJztcblxuZXhwb3J0IGNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMCB9LCAoKSA9PiBBcnJheSgxMCkuZmlsbChudWxsKSk7XG4gICAgdGhpcy5taXNzZWQgPSBbXTtcbiAgICB0aGlzLmlzRWRpdGFibGUgPSB0cnVlO1xuICB9XG5cbiAgaXNFbXB0eSh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuYm9hcmRbeF1beV0gPT09IG51bGw7XG4gIH1cblxuICBwbGFjZVNoaXAoc2hpcCwgeCwgeSwgb3JpZW50YXRpb24pIHtcbiAgICAvL2NoZWNraW5nIGlmIHRoZXJlIGlzIGZyZWUgc3BhY2UgaW4gYW5kIGFyb3VuZCB0aGUgY2hvc2VuIGFyZWFcbiAgICAvL2Nhc2UgZm9yIGEgaG9yaXpvbnRhbGx5IGFsaWduZWQgc2hpcFxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAvL2NoZWNraW5nIGlmIHNoaXAgaXMgdG9vIGxhcmdlXG4gICAgICBpZiAoeSArIHNoaXAubGVuZ3RoID4gMTApIHJldHVybiBmYWxzZTtcblxuICAgICAgaWYgKCF0aGlzLmNhblNoaXBCZVBsYWNlZEhvcml6b250YWxseShzaGlwLmxlbmd0aCwgeCwgeSkpIHJldHVybiBmYWxzZTtcblxuICAgICAgLy9wbGFjaW5nIGEgc2hpcFxuICAgICAgZm9yIChsZXQgaiA9IHk7IGogPCB5ICsgc2hpcC5sZW5ndGg7IGorKykge1xuICAgICAgICB0aGlzLmJvYXJkW3hdW2pdID0gc2hpcDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vY2FzZSBmb3IgYSB2ZXJ0aWNhbGx5IGFsaWduZWQgc2hpcFxuICAgIGVsc2Uge1xuICAgICAgLy9jaGVja2luZyBpZiBzaGlwIGlzIHRvbyBsYXJnZVxuICAgICAgaWYgKHggKyBzaGlwLmxlbmd0aCA+IDEwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGlmICghdGhpcy5jYW5TaGlwQmVQbGFjZWRWZXJ0aWNhbGx5KHNoaXAubGVuZ3RoLCB4LCB5KSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAvL3BsYWNpbmcgYSBzaGlwXG4gICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbaV1beV0gPSBzaGlwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjYW5TaGlwQmVQbGFjZWRIb3Jpem9udGFsbHkobGVuZ3RoLCB4LCB5LCBzaGlwRXhjZXB0aW9uID0gMCkge1xuICAgIGZvciAobGV0IGkgPSBNYXRoLm1heCh4IC0gMSwgMCk7IGkgPD0gTWF0aC5taW4oOSwgeCArIDEpOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSBNYXRoLm1heCgwLCB5IC0gMSk7IGogPD0gTWF0aC5taW4oOSwgeSArIGxlbmd0aCk7IGorKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIXRoaXMuaXNFbXB0eShpLCBqKSAmJlxuICAgICAgICAgIHRoaXMuYm9hcmRbaV1bal0gJiZcbiAgICAgICAgICAhaXNFcXVhbCh0aGlzLmJvYXJkW2ldW2pdLCBzaGlwRXhjZXB0aW9uKVxuICAgICAgICApXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY2FuU2hpcEJlUGxhY2VkVmVydGljYWxseShsZW5ndGgsIHgsIHksIHNoaXBFeGNlcHRpb24gPSAwKSB7XG4gICAgZm9yIChsZXQgaiA9IE1hdGgubWF4KDAsIHkgLSAxKTsgaiA8PSBNYXRoLm1pbig5LCB5ICsgMSk7IGorKykge1xuICAgICAgZm9yIChsZXQgaSA9IE1hdGgubWF4KDAsIHggLSAxKTsgaSA8PSBNYXRoLm1pbig5LCB4ICsgbGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0VtcHR5KGksIGopICYmICFpc0VxdWFsKHRoaXMuYm9hcmRbaV1bal0sIHNoaXBFeGNlcHRpb24pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICAvL2RpcmVjdGlvbnMgZm9yIGFkamFjZW50IGRpYWdvbmFsIG5laWdoYm9yc1xuICAgIGNvbnN0IGRpcmVjdGlvbnMgPSBbXG4gICAgICB7IHg6IC0xLCB5OiAtMSB9LFxuICAgICAgeyB4OiAtMSwgeTogMSB9LFxuICAgICAgeyB4OiAxLCB5OiAtMSB9LFxuICAgICAgeyB4OiAxLCB5OiAxIH0sXG4gICAgXTtcblxuICAgIGxldCB3YXNIaXQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLmJvYXJkW3hdW3ldID09PSBudWxsKSB7XG4gICAgICB0aGlzLmJvYXJkW3hdW3ldID0gJ2F0dGFja2VkJztcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdGhpcy5ib2FyZFt4XVt5XSAhPT0gbnVsbCAmJlxuICAgICAgdGhpcy5ib2FyZFt4XVt5XSAhPT0gJ2hpdCcgJiZcbiAgICAgIHRoaXMuYm9hcmRbeF1beV0gIT09ICdhdHRhY2tlZCdcbiAgICApIHtcbiAgICAgIHRoaXMuYm9hcmRbeF1beV0uaGl0KCk7XG4gICAgICB0aGlzLmJvYXJkW3hdW3ldID0gJ2hpdCc7XG5cbiAgICAgIC8vbWFya2luZyBhZGphY2VudCBkaWFnb25hbCBuZWlnaGJvcnMgYXMgYXR0YWNrZWRcbiAgICAgIGZvciAoY29uc3QgZCBvZiBkaXJlY3Rpb25zKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldGVkWCA9IHggKyBkLng7XG4gICAgICAgIGNvbnN0IHRhcmdldGVkWSA9IHkgKyBkLnk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRhcmdldGVkWCA+PSAwICYmXG4gICAgICAgICAgdGFyZ2V0ZWRYIDw9IDkgJiZcbiAgICAgICAgICB0YXJnZXRlZFkgPj0gMCAmJlxuICAgICAgICAgIHRhcmdldGVkWSA8PSA5XG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuYm9hcmRbdGFyZ2V0ZWRYXVt0YXJnZXRlZFldID0gJ2F0dGFja2VkJztcbiAgICAgICAgfVxuXG4gICAgICAgIHdhc0hpdCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IFNBTUVfUExBWUVSID0gJ3NhbWUgcGxheWVycyBtb3ZlJztcbiAgICAgIFB1YlN1Yi5wdWJsaXNoKFNBTUVfUExBWUVSKTtcblxuICAgICAgcmV0dXJuIHdhc0hpdDtcbiAgICB9XG5cbiAgICBjb25zdCBORVhUX1BMQVlFUiA9ICduZXh0IHBsYXllcnMgbW92ZSc7XG4gICAgUHViU3ViLnB1Ymxpc2goTkVYVF9QTEFZRVIpO1xuXG4gICAgdGhpcy5taXNzZWQucHVzaChbNiwgNF0pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGhhdmVBbGxCZWVuU3VuaygpIHtcbiAgICByZXR1cm4gIXRoaXMuYm9hcmQuc29tZSgocm93KSA9PlxuICAgICAgcm93LnNvbWUoKGl0ZW0pID0+IGl0ZW0gIT09IG51bGwgJiYgaXRlbSAhPT0gJ2hpdCcgJiYgaXRlbSAhPT0gJ2F0dGFja2VkJylcbiAgICApO1xuICB9XG5cbiAgI2lzUG9zaXRpb25WYWxpZCh4LCB5KSB7XG4gICAgcmV0dXJuIHggPj0gMCAmJiB4IDw9IDkgJiYgeSA+PSAwICYmIHkgPD0gOTtcbiAgfVxuXG4gIGdldE1vdmVkU2hpcFBvc2l0aW9ucyhvcmlnaW5hbFgsIG9yaWdpbmFsWSwgbmV3WCwgbmV3WSkge1xuICAgIGNvbnN0IGRpcmVjdGlvbnMgPSBbXG4gICAgICB7IHg6IC0xLCB5OiAwIH0sXG4gICAgICB7IHg6IDEsIHk6IDAgfSxcbiAgICAgIHsgeDogMCwgeTogMSB9LFxuICAgICAgeyB4OiAwLCB5OiAtMSB9LFxuICAgIF07XG5cbiAgICBsZXQgb2xkUG9zaXRpb25zID0gW1tvcmlnaW5hbFgsIG9yaWdpbmFsWV1dO1xuICAgIGxldCBuZXdQb3NpdGlvbnMgPSBbW25ld1gsIG5ld1ldXTtcblxuICAgIGZvciAobGV0IGRpcmVjdGlvbkluZGV4ID0gMDsgZGlyZWN0aW9uSW5kZXggPD0gMzsgZGlyZWN0aW9uSW5kZXgrKykge1xuICAgICAgbGV0IHhNb3ZlID0gZGlyZWN0aW9uc1tkaXJlY3Rpb25JbmRleF0ueDtcbiAgICAgIGxldCB5TW92ZSA9IGRpcmVjdGlvbnNbZGlyZWN0aW9uSW5kZXhdLnk7XG5cbiAgICAgIC8vZnVuY3Rpb24gaXNFbXB0eSBtYXkgZmFpbCBpZiAoeCx5KSBpZiBvdXQgb2YgYm9hcmQgYm91bmRzLCBzbyBpdCBtdXN0IGJlIGluIHNlY29uZCBwbGFjZVxuICAgICAgd2hpbGUgKFxuICAgICAgICB0aGlzLiNpc1Bvc2l0aW9uVmFsaWQob3JpZ2luYWxYICsgeE1vdmUsIG9yaWdpbmFsWSArIHlNb3ZlKSAmJlxuICAgICAgICAhdGhpcy5pc0VtcHR5KG9yaWdpbmFsWCArIHhNb3ZlLCBvcmlnaW5hbFkgKyB5TW92ZSlcbiAgICAgICkge1xuICAgICAgICBjb25zdCBuZXdYSXRlbSA9IG5ld1ggKyB4TW92ZTtcbiAgICAgICAgY29uc3QgbmV3WUl0ZW0gPSBuZXdZICsgeU1vdmU7XG5cbiAgICAgICAgaWYgKCF0aGlzLiNpc1Bvc2l0aW9uVmFsaWQobmV3WEl0ZW0sIG5ld1lJdGVtKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLmlzRW1wdHkobmV3WEl0ZW0sIG5ld1lJdGVtKSB8fFxuICAgICAgICAgIGlzRXF1YWwoXG4gICAgICAgICAgICB0aGlzLmJvYXJkW25ld1hJdGVtXVtuZXdZSXRlbV0sXG4gICAgICAgICAgICB0aGlzLmJvYXJkW29yaWdpbmFsWF1bb3JpZ2luYWxZXVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgbmV3UG9zaXRpb25zLnB1c2goW25ld1hJdGVtLCBuZXdZSXRlbV0pO1xuICAgICAgICAgIG9sZFBvc2l0aW9ucy5wdXNoKFtvcmlnaW5hbFggKyB4TW92ZSwgb3JpZ2luYWxZICsgeU1vdmVdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB4TW92ZSA9IGRpcmVjdGlvbnNbZGlyZWN0aW9uSW5kZXhdLnggKyB4TW92ZTtcbiAgICAgICAgeU1vdmUgPSBkaXJlY3Rpb25zW2RpcmVjdGlvbkluZGV4XS55ICsgeU1vdmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld1Bvc2l0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuY2FuU2hpcEJlUGxhY2VkSG9yaXpvbnRhbGx5KFxuICAgICAgICAgIG5ld1Bvc2l0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgbmV3UG9zaXRpb25zWzBdWzBdLFxuICAgICAgICAgIG5ld1Bvc2l0aW9uc1swXVsxXSxcbiAgICAgICAgICB0aGlzLmJvYXJkW29yaWdpbmFsWF1bb3JpZ2luYWxZXVxuICAgICAgICApXG4gICAgICApXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiB7IG5ld1Bvc2l0aW9uczogbmV3UG9zaXRpb25zLCBvbGRQb3NpdGlvbnM6IG9sZFBvc2l0aW9ucyB9O1xuICAgIH1cbiAgICAvL2hvcml6b250YWxcbiAgICBlbHNlIGlmIChuZXdQb3NpdGlvbnNbMF1bMF0gPT09IG5ld1Bvc2l0aW9uc1sxXVswXSkge1xuICAgICAgbmV3UG9zaXRpb25zLnNvcnQoKGEsIGIpID0+IGFbMV0gLSBiWzFdKTtcblxuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5jYW5TaGlwQmVQbGFjZWRIb3Jpem9udGFsbHkoXG4gICAgICAgICAgbmV3UG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBuZXdQb3NpdGlvbnNbMF1bMF0sXG4gICAgICAgICAgbmV3UG9zaXRpb25zWzBdWzFdLFxuICAgICAgICAgIHRoaXMuYm9hcmRbb3JpZ2luYWxYXVtvcmlnaW5hbFldXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBvbGRQb3NpdGlvbnMuc29ydCgoYSwgYikgPT4gYVsxXSAtIGJbMV0pO1xuICAgIH1cbiAgICAvL3ZlcnRpY2FsXG4gICAgZWxzZSBpZiAobmV3UG9zaXRpb25zWzBdWzFdID09PSBuZXdQb3NpdGlvbnNbMV1bMV0pIHtcbiAgICAgIG5ld1Bvc2l0aW9ucy5zb3J0KChhLCBiKSA9PiBhWzBdIC0gYlswXSk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuY2FuU2hpcEJlUGxhY2VkVmVydGljYWxseShcbiAgICAgICAgICBuZXdQb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIG5ld1Bvc2l0aW9uc1swXVswXSxcbiAgICAgICAgICBuZXdQb3NpdGlvbnNbMF1bMV0sXG4gICAgICAgICAgdGhpcy5ib2FyZFtvcmlnaW5hbFhdW29yaWdpbmFsWV1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgIG9sZFBvc2l0aW9ucy5zb3J0KChhLCBiKSA9PiBhWzBdIC0gYlswXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbmV3UG9zaXRpb25zOiBuZXdQb3NpdGlvbnMsIG9sZFBvc2l0aW9uczogb2xkUG9zaXRpb25zIH07XG4gIH1cblxuICAvL2xvZ2ljIGZvciBtb3ZpbmcgdGhlIHNoaXAgc2hvdWxkIGJlIGxvY2F0ZWQgaGVyZSwgbm90IGluIGRvbW1hbmFnZXIsIGZvY3VzIG9mIGRvbW1hbmFnZXIgc2hvdWxkIGJlIHRoZSBET00sIGRpc3BsYXlpbmcgZGF0YVxuICBtb3ZlU2hpcChvcmlnaW5hbFgsIG9yaWdpbmFsWSwgbmV3WCwgbmV3WSkge1xuICAgIGlmIChcbiAgICAgIChvcmlnaW5hbFggPT09IG5ld1ggJiYgb3JpZ2luYWxZID09PSBuZXdZKSB8fFxuICAgICAgKCF0aGlzLmlzRW1wdHkobmV3WCwgbmV3WSkgJiZcbiAgICAgICAgIWlzRXF1YWwodGhpcy5ib2FyZFtvcmlnaW5hbFhdW29yaWdpbmFsWV0sIHRoaXMuYm9hcmRbbmV3WF1bbmV3WV0pKVxuICAgIClcbiAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHBvc2l0aW9ucyA9IHRoaXMuZ2V0TW92ZWRTaGlwUG9zaXRpb25zKFxuICAgICAgb3JpZ2luYWxYLFxuICAgICAgb3JpZ2luYWxZLFxuICAgICAgbmV3WCxcbiAgICAgIG5ld1lcbiAgICApO1xuXG4gICAgaWYgKCFwb3NpdGlvbnMpIHJldHVybiBmYWxzZTtcblxuICAgIC8vcmVtb3ZlIHRoZSBvbGQgc2hpcFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zaXRpb25zLm9sZFBvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgW3hPbGQsIHlPbGRdID0gcG9zaXRpb25zLm9sZFBvc2l0aW9uc1tpXTtcblxuICAgICAgdGhpcy5ib2FyZFt4T2xkXVt5T2xkXSA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5wbGFjZVNoaXAoXG4gICAgICBuZXcgU2hpcChwb3NpdGlvbnMubmV3UG9zaXRpb25zLmxlbmd0aCksXG4gICAgICBwb3NpdGlvbnMubmV3UG9zaXRpb25zWzBdWzBdLFxuICAgICAgcG9zaXRpb25zLm5ld1Bvc2l0aW9uc1swXVsxXSxcbiAgICAgIHBvc2l0aW9ucy5uZXdQb3NpdGlvbnMubGVuZ3RoID09PSAxXG4gICAgICAgID8gJ2hvcml6b250YWwnXG4gICAgICAgIDogcG9zaXRpb25zLm5ld1Bvc2l0aW9uc1swXVswXSA9PT0gcG9zaXRpb25zLm5ld1Bvc2l0aW9uc1sxXVswXVxuICAgICAgICAgID8gJ2hvcml6b250YWwnXG4gICAgICAgICAgOiAndmVydGljYWwnXG4gICAgKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZ2V0Qm9hdExlbmd0aHNGcm9tUG9zaXRpb24oeCwgeSkge1xuICAgIGNvbnN0IGRpcmVjdGlvbnMgPSBbXG4gICAgICB7IHg6IC0xLCB5OiAwLCBxdWFudGl0eTogMCB9LFxuICAgICAgeyB4OiAwLCB5OiAxLCBxdWFudGl0eTogMCB9LFxuICAgICAgeyB4OiAxLCB5OiAwLCBxdWFudGl0eTogMCB9LFxuICAgICAgeyB4OiAwLCB5OiAtMSwgcXVhbnRpdHk6IDAgfSxcbiAgICBdO1xuXG4gICAgZm9yIChsZXQgZGlyZWN0aW9uSW5kZXggPSAwOyBkaXJlY3Rpb25JbmRleCA8PSAzOyBkaXJlY3Rpb25JbmRleCsrKSB7XG4gICAgICBsZXQgY3VycmVudFggPSB4ICsgZGlyZWN0aW9uc1tkaXJlY3Rpb25JbmRleF0ueDtcbiAgICAgIGxldCBjdXJyZW50WSA9IHkgKyBkaXJlY3Rpb25zW2RpcmVjdGlvbkluZGV4XS55O1xuXG4gICAgICB3aGlsZSAoXG4gICAgICAgIHRoaXMuI2lzUG9zaXRpb25WYWxpZChjdXJyZW50WCwgY3VycmVudFkpICYmXG4gICAgICAgICF0aGlzLmlzRW1wdHkoY3VycmVudFgsIGN1cnJlbnRZKVxuICAgICAgKSB7XG4gICAgICAgIGRpcmVjdGlvbnNbZGlyZWN0aW9uSW5kZXhdLnF1YW50aXR5Kys7XG5cbiAgICAgICAgY3VycmVudFggKz0gZGlyZWN0aW9uc1tkaXJlY3Rpb25JbmRleF0ueDtcbiAgICAgICAgY3VycmVudFkgKz0gZGlyZWN0aW9uc1tkaXJlY3Rpb25JbmRleF0ueTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgYWJvdmU6IGRpcmVjdGlvbnNbMF0ucXVhbnRpdHksXG4gICAgICByaWdodHdhcmRzOiBkaXJlY3Rpb25zWzFdLnF1YW50aXR5LFxuICAgICAgYmVsb3c6IGRpcmVjdGlvbnNbMl0ucXVhbnRpdHksXG4gICAgICBsZWZ0d2FyZHM6IGRpcmVjdGlvbnNbM10ucXVhbnRpdHksXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuaW1wb3J0IHsgQm90IH0gZnJvbSAnLi9ib3QuanMnO1xuXG4vL1R3byB0eXBlcyBvZiBwbGF5ZXJzOiByZWFsIGFuZCBjb21wdXRlciBwbGF5ZXJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCB0eXBlLCBlbGVtZW50UXVlcnksIGlzQWN0aXZlLCBvcHBvbmVudHNCb2FyZCA9IG51bGwpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy5lbGVtZW50UXVlcnkgPSBlbGVtZW50UXVlcnk7XG4gICAgdGhpcy5pc0FjdGl2ZSA9IGlzQWN0aXZlO1xuICAgIGlmIChvcHBvbmVudHNCb2FyZCAhPT0gbnVsbCAmJiB0eXBlID09PSAnY29tcHV0ZXInKSB7XG4gICAgICB0aGlzLmJvdCA9IG5ldyBCb3Qob3Bwb25lbnRzQm9hcmQpO1xuICAgIH1cbiAgfVxuXG4gIHNldEFzQWN0aXZlKCkge1xuICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgc2V0QXNPcHBvbmVudCgpIHtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICBjaGFuZ2VOYW1lKG5ld05hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMudGltZXNIaXQgPSAwO1xuICAgIHRoaXMuaGFzQmVlblN1bmsgPSBmYWxzZTtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICB0aGlzLnRpbWVzSGl0ICs9IDE7XG5cbiAgICBpZiAodGhpcy50aW1lc0hpdCA9PT0gdGhpcy5sZW5ndGgpIHRoaXMuaGFzQmVlblN1bmsgPSB0cnVlO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLmhhc0JlZW5TdW5rO1xuICB9XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWJsb2NrLWRpbWVuc2lvbjogbWluKDUwcHgsIGNhbGMoNHZ3KSk7XG4gIC0tcHJpbWFyeS1jb2xvcjogIzRmMjA5YjtcbiAgLS1saWdodGVyLWNvbG9yOiAjN2U4N2ZmO1xufVxuXG4qIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi8qRGVmYXVsdCBzdHlsZXMqL1xuYm9keSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxucCxcbnVsW2NsYXNzXSxcbm9sW2NsYXNzXSxcbmxpLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmJsb2NrcXVvdGUsXG5kbCxcbmRkIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcbn1cblxuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMnB4IDE4cHg7XG59XG5cbi5oZWFkZXItYnV0dG9ucyBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuaGVhZGVyIGJ1dHRvbixcbi5zdGFydC1kaWFsb2cgYnV0dG9uLFxuLmRldmljZS1wYXNzZWQtYnV0dG9uLFxuLmVkaXQtYm9hcmQtZGlhbG9nIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuXG4uc3RhcnQtZGlhbG9nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uc3RhcnQtZGlhbG9nIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHggcHg7XG59XG5cbi5zdGFydC1kaWFsb2cgaDEge1xuICBmb250LXNpemU6IDIuNGVtO1xufVxuXG4uc3RhcnQtZGlhbG9nLWNvbnRlbnQsXG4ucGFzcy1kZXZpY2UtZGlhbG9nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGdhcDogbWluKDQwJSwgMzAwcHgpO1xufVxuXG4ucGFzcy1kZXZpY2UtZGlhbG9nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZWRpdC1ib2FyZC1kaWFsb2cge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbn1cblxuLmVkaXQtYm9hcmQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucXVlcnktY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuXG4ucXVlcnktY29udGFpbmVyIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZmlyc3QtcGxheWVyLFxuLnNlY29uZC1wbGF5ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNTAlO1xuICBnYXA6IDEycHg7XG59XG5cbi5ib2FyZC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIHZhcigtLWJsb2NrLWRpbWVuc2lvbikpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgdmFyKC0tYmxvY2stZGltZW5zaW9uKSk7XG59XG5cbi5ib2FyZC1pdGVtIHtcbiAgaGVpZ2h0OiB2YXIoLS1ibG9jay1kaW1lbnNpb24pO1xuICB3aWR0aDogdmFyKC0tYmxvY2stZGltZW5zaW9uKTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbn1cblxuLmJvYXJkLWl0ZW06aG92ZXIsXG4uc3RhcnQtZGlhbG9nIGJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItY29sb3IpO1xufVxuXG4uaGl0LXNoaXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nLXRvcDogLTRweDtcbn1cblxuLmhpdC1zaGlwOjpiZWZvcmUsXG4uaGl0LXNoaXA6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbi5oaXQtc2hpcDo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4uaGl0LXNoaXA6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuLmF0dGFja2VkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kb3Qge1xuICB3aWR0aDogY2FsYyh2YXIoLS1ibG9jay1kaW1lbnNpb24pIC8gMyk7XG4gIGhlaWdodDogY2FsYyh2YXIoLS1ibG9jay1kaW1lbnNpb24pIC8gMyk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cblxuLmVuZC1kaWFsb2csXG4uY2hhbmdlLW5hbWVzLWRpYWxvZyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmVuZC1kaWFsb2ctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uZW5kLWRpYWxvZyBwIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuLmVuZC1kaWFsb2cgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5jaGFuZ2UtbmFtZXMtZGlhbG9nIGZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcbn1cblxuLmNoYW5nZS1uYW1lcy1kaWFsb2cgaW5wdXQsXG4uY2hhbmdlLW5hbWVzLWRpYWxvZyBidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xufVxuXG4uY2hhbmdlLW5hbWVzLWRpYWxvZyBpbnB1dFt0eXBlPSd0ZXh0J10ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xufVxuXG4uY2hhbmdlLW5hbWVzLWRpYWxvZyBpbnB1dFt0eXBlPSdzdWJtaXQnXSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuYnV0dG9uOmhvdmVyLFxuLnBsYXllcnMtbmFtZTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC44O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUNBQXVDO0VBQ3ZDLHdCQUF3QjtFQUN4Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUEsaUJBQWlCO0FBQ2pCOzs7Ozs7Ozs7Ozs7OztFQWNFLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOzs7O0VBSUUsc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlEQUF5RDtFQUN6RCxzREFBc0Q7QUFDeEQ7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTs7RUFFRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWJsb2NrLWRpbWVuc2lvbjogbWluKDUwcHgsIGNhbGMoNHZ3KSk7XFxuICAtLXByaW1hcnktY29sb3I6ICM0ZjIwOWI7XFxuICAtLWxpZ2h0ZXItY29sb3I6ICM3ZTg3ZmY7XFxufVxcblxcbioge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qRGVmYXVsdCBzdHlsZXMqL1xcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxucCxcXG51bFtjbGFzc10sXFxub2xbY2xhc3NdLFxcbmxpLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDEycHggMThweDtcXG59XFxuXFxuLmhlYWRlci1idXR0b25zIGJ1dHRvbjpmaXJzdC1vZi10eXBlIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuaGVhZGVyIGJ1dHRvbixcXG4uc3RhcnQtZGlhbG9nIGJ1dHRvbixcXG4uZGV2aWNlLXBhc3NlZC1idXR0b24sXFxuLmVkaXQtYm9hcmQtZGlhbG9nIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbn1cXG5cXG4uc3RhcnQtZGlhbG9nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5zdGFydC1kaWFsb2cgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEwcHggcHg7XFxufVxcblxcbi5zdGFydC1kaWFsb2cgaDEge1xcbiAgZm9udC1zaXplOiAyLjRlbTtcXG59XFxuXFxuLnN0YXJ0LWRpYWxvZy1jb250ZW50LFxcbi5wYXNzLWRldmljZS1kaWFsb2ctY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZ2FwOiBtaW4oNDAlLCAzMDBweCk7XFxufVxcblxcbi5wYXNzLWRldmljZS1kaWFsb2cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmVkaXQtYm9hcmQtZGlhbG9nIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcbn1cXG5cXG4uZWRpdC1ib2FyZC1kaWFsb2ctY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucXVlcnktY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLnF1ZXJ5LWNvbnRhaW5lciBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmZpcnN0LXBsYXllcixcXG4uc2Vjb25kLXBsYXllciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA1MCU7XFxuICBnYXA6IDEycHg7XFxufVxcblxcbi5ib2FyZC1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgdmFyKC0tYmxvY2stZGltZW5zaW9uKSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgdmFyKC0tYmxvY2stZGltZW5zaW9uKSk7XFxufVxcblxcbi5ib2FyZC1pdGVtIHtcXG4gIGhlaWdodDogdmFyKC0tYmxvY2stZGltZW5zaW9uKTtcXG4gIHdpZHRoOiB2YXIoLS1ibG9jay1kaW1lbnNpb24pO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG59XFxuXFxuLmJvYXJkLWl0ZW06aG92ZXIsXFxuLnN0YXJ0LWRpYWxvZyBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyLWNvbG9yKTtcXG59XFxuXFxuLmhpdC1zaGlwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZy10b3A6IC00cHg7XFxufVxcblxcbi5oaXQtc2hpcDo6YmVmb3JlLFxcbi5oaXQtc2hpcDo6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5oaXQtc2hpcDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLmhpdC1zaGlwOjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cXG4uYXR0YWNrZWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRvdCB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1ibG9jay1kaW1lbnNpb24pIC8gMyk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYmxvY2stZGltZW5zaW9uKSAvIDMpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG59XFxuXFxuLmVuZC1kaWFsb2csXFxuLmNoYW5nZS1uYW1lcy1kaWFsb2cge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLmVuZC1kaWFsb2ctY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uZW5kLWRpYWxvZyBwIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbi5lbmQtZGlhbG9nIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4uY2hhbmdlLW5hbWVzLWRpYWxvZyBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5jaGFuZ2UtbmFtZXMtZGlhbG9nIGlucHV0LFxcbi5jaGFuZ2UtbmFtZXMtZGlhbG9nIGJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxufVxcblxcbi5jaGFuZ2UtbmFtZXMtZGlhbG9nIGlucHV0W3R5cGU9J3RleHQnXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xcbn1cXG5cXG4uY2hhbmdlLW5hbWVzLWRpYWxvZyBpbnB1dFt0eXBlPSdzdWJtaXQnXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICNmZmY7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcblxcbmJ1dHRvbjpob3ZlcixcXG4ucGxheWVycy1uYW1lOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgRE9NTWFuYWdlciB9IGZyb20gJy4vZG9tTWFuYWdlci5qcyc7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllci5qcyc7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwLmpzJztcbmltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJztcblxuY29uc3QgUkVBTF9QTEFZRVJTX0dBTUUgPSAnc3RhcnQgZ2FtZSB3aXRoIHJlYWwgcGxheWVycyc7XG5jb25zdCBHQU1FX1dJVEhfQk9UID0gJ3N0YXJ0IGdhbWUgd2l0aCBhIGJvdCc7XG5jb25zdCBTQU1FX1BMQVlFUiA9ICdzYW1lIHBsYXllcnMgbW92ZSc7XG5jb25zdCBORVhUX1BMQVlFUiA9ICduZXh0IHBsYXllcnMgbW92ZSc7XG5jb25zdCBORVdfR0FNRSA9ICduZXcgZ2FtZSc7XG5jb25zdCBDSEFOR0VfTkFNRVMgPSAnY2hhbmdlIG5hbWVzJztcblxuZnVuY3Rpb24gcmFuZG9taXplU2hpcHMocGxheWVyKSB7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDU7IGkrKykge1xuICAgIGxldCBzaGlwUGxhY2VkID0gZmFsc2U7XG5cbiAgICB3aGlsZSAoIXNoaXBQbGFjZWQpIHtcbiAgICAgIHNoaXBQbGFjZWQgPSBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgbmV3IFNoaXAoaSksXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgICAgICBNYXRoLnJhbmRvbSgpID4gMC41ID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJ1xuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxubGV0IGRvbSA9IG5ldyBET01NYW5hZ2VyKCk7XG5sZXQgZmlyc3RQbGF5ZXI7XG5sZXQgc2Vjb25kUGxheWVyO1xuXG5mdW5jdGlvbiBzdGFydEdhbWUoZmlyc3RQbGF5ZXJUeXBlLCBzZWNvbmRQbGF5ZXJUeXBlKSB7XG4gIGZpcnN0UGxheWVyID0gbmV3IFBsYXllcihcbiAgICAnUGxheWVyIDEnLFxuICAgIGZpcnN0UGxheWVyVHlwZSxcbiAgICAnLmZpcnN0LXBsYXllciAuYm9hcmQtZ3JpZC1jb250YWluZXInLFxuICAgIHRydWVcbiAgKTtcbiAgc2Vjb25kUGxheWVyID0gbmV3IFBsYXllcihcbiAgICAnUGxheWVyIDInLFxuICAgIHNlY29uZFBsYXllclR5cGUsXG4gICAgJy5zZWNvbmQtcGxheWVyIC5ib2FyZC1ncmlkLWNvbnRhaW5lcicsXG4gICAgZmFsc2UsXG4gICAgZmlyc3RQbGF5ZXIuZ2FtZWJvYXJkXG4gICk7XG4gIGlmIChzZWNvbmRQbGF5ZXJUeXBlID09PSAnY29tcHV0ZXInKVxuICAgIHNlY29uZFBsYXllci5nYW1lYm9hcmQuaXNFZGl0YWJsZSA9IGZhbHNlO1xuXG4gIHJhbmRvbWl6ZVNoaXBzKGZpcnN0UGxheWVyKTtcbiAgcmFuZG9taXplU2hpcHMoc2Vjb25kUGxheWVyKTtcblxuICBkb20ucG9wdWxhdGVCb2FyZChmaXJzdFBsYXllciwgc2Vjb25kUGxheWVyKTtcbn1cblxuLy8gZnVuY3Rpb24gbWFrZUJvdE1vdmUoKSB7XG4vLyAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuLy8gICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuLy8gICAvL21ha2luZyBzdXJlIHBvc2l0aW9uIGhhc24ndCBiZWVuIGF0dGFja2VkIHlldFxuLy8gICB3aGlsZSAoXG4vLyAgICAgZmlyc3RQbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkW3hdW3ldICE9PSBudWxsIHx8XG4vLyAgICAgKCFmaXJzdFBsYXllci5nYW1lYm9hcmQuYm9hcmRbeF1beV0pIGluc3RhbmNlb2YgU2hpcFxuLy8gICApIHtcbi8vICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuLy8gICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4vLyAgIH1cblxuLy8gICB3aGlsZSAoXG4vLyAgICAgZmlyc3RQbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkW3hdW3ldID09PSBudWxsIHx8XG4vLyAgICAgZmlyc3RQbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkW3hdW3ldIGluc3RhbmNlb2YgU2hpcFxuLy8gICApIHtcbi8vICAgICBmaXJzdFBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbi8vICAgfVxuLy8gfVxuXG5mdW5jdGlvbiBjaGVja0Zvcldpbm5lcigpIHtcbiAgaWYgKGZpcnN0UGxheWVyLmdhbWVib2FyZC5oYXZlQWxsQmVlblN1bmsoKSkgZG9tLnNob3dFbmREaWFsb2coc2Vjb25kUGxheWVyKTtcbiAgZWxzZSBpZiAoc2Vjb25kUGxheWVyLmdhbWVib2FyZC5oYXZlQWxsQmVlblN1bmsoKSlcbiAgICBkb20uc2hvd0VuZERpYWxvZyhmaXJzdFBsYXllcik7XG59XG5cblB1YlN1Yi5zdWJzY3JpYmUoUkVBTF9QTEFZRVJTX0dBTUUsICgpID0+IHtcbiAgc3RhcnRHYW1lKCdyZWFsJywgJ3JlYWwnKTtcbn0pO1xuXG5QdWJTdWIuc3Vic2NyaWJlKEdBTUVfV0lUSF9CT1QsICgpID0+IHtcbiAgc3RhcnRHYW1lKCdyZWFsJywgJ2NvbXB1dGVyJyk7XG59KTtcblxuLy9zaGlwIHdhcyBoaXQsIHNhbWUgcGxheWVyIG1ha2VzIHRoZSBuZXh0IG1vdmVcblB1YlN1Yi5zdWJzY3JpYmUoU0FNRV9QTEFZRVIsICgpID0+IHtcbiAgaWYgKHNlY29uZFBsYXllci5pc0FjdGl2ZSA9PT0gdHJ1ZSAmJiBzZWNvbmRQbGF5ZXIudHlwZSA9PT0gJ2NvbXB1dGVyJykge1xuICAgIHNlY29uZFBsYXllci5ib3QuYXR0YWNrKCk7XG4gIH1cbiAgZG9tLnBvcHVsYXRlQm9hcmQoZmlyc3RQbGF5ZXIsIHNlY29uZFBsYXllcik7XG4gIGNoZWNrRm9yV2lubmVyKCk7XG59KTtcblxuLy9zaGlwIHdhcyBtaXNzZWQsIG9wcG9uZW50IG1ha2VzIHRoZSBuZXh0IG1vdmUsIGJlY29tZXMgdGhlIGFjdGl2ZSBwbGF5ZXJcblB1YlN1Yi5zdWJzY3JpYmUoTkVYVF9QTEFZRVIsICgpID0+IHtcbiAgaWYgKGZpcnN0UGxheWVyLmlzQWN0aXZlKSB7XG4gICAgZmlyc3RQbGF5ZXIuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICBzZWNvbmRQbGF5ZXIuaXNBY3RpdmUgPSB0cnVlO1xuXG4gICAgaWYgKHNlY29uZFBsYXllci50eXBlID09PSAnY29tcHV0ZXInKSB7XG4gICAgICBzZWNvbmRQbGF5ZXIuYm90LmF0dGFjaygpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmaXJzdFBsYXllci5pc0FjdGl2ZSA9IHRydWU7XG4gICAgc2Vjb25kUGxheWVyLmlzQWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICBkb20ucG9wdWxhdGVCb2FyZChmaXJzdFBsYXllciwgc2Vjb25kUGxheWVyLCB0cnVlKTtcbiAgY2hlY2tGb3JXaW5uZXIoKTtcbn0pO1xuXG5QdWJTdWIuc3Vic2NyaWJlKE5FV19HQU1FLCAoKSA9PlxuICBzdGFydEdhbWUoZmlyc3RQbGF5ZXIudHlwZSwgc2Vjb25kUGxheWVyLnR5cGUpXG4pO1xuXG5QdWJTdWIuc3Vic2NyaWJlKENIQU5HRV9OQU1FUywgKG1lc3NhZ2UsIG5ld05hbWVzKSA9PiB7XG4gIGZpcnN0UGxheWVyLmNoYW5nZU5hbWUobmV3TmFtZXNbMF0pO1xuICBmaXJzdFBsYXllci5jaGFuZ2VOYW1lKG5ld05hbWVzWzFdKTtcbn0pO1xuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYSIsImRlZHVwZSIsInN1cHBvcnRzIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiayIsImlkIiwiX2siLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsImdldE5hdGl2ZSIsInJlcXVpcmUiLCJyb290IiwiRGF0YVZpZXciLCJoYXNoQ2xlYXIiLCJoYXNoRGVsZXRlIiwiaGFzaEdldCIsImhhc2hIYXMiLCJoYXNoU2V0IiwiSGFzaCIsImVudHJpZXMiLCJpbmRleCIsImNsZWFyIiwiZW50cnkiLCJzZXQiLCJwcm90b3R5cGUiLCJnZXQiLCJoYXMiLCJsaXN0Q2FjaGVDbGVhciIsImxpc3RDYWNoZURlbGV0ZSIsImxpc3RDYWNoZUdldCIsImxpc3RDYWNoZUhhcyIsImxpc3RDYWNoZVNldCIsIkxpc3RDYWNoZSIsIk1hcCIsIm1hcENhY2hlQ2xlYXIiLCJtYXBDYWNoZURlbGV0ZSIsIm1hcENhY2hlR2V0IiwibWFwQ2FjaGVIYXMiLCJtYXBDYWNoZVNldCIsIk1hcENhY2hlIiwiUHJvbWlzZSIsIlNldCIsInNldENhY2hlQWRkIiwic2V0Q2FjaGVIYXMiLCJTZXRDYWNoZSIsInZhbHVlcyIsIl9fZGF0YV9fIiwiYWRkIiwic3RhY2tDbGVhciIsInN0YWNrRGVsZXRlIiwic3RhY2tHZXQiLCJzdGFja0hhcyIsInN0YWNrU2V0IiwiU3RhY2siLCJzaXplIiwiU3ltYm9sIiwiVWludDhBcnJheSIsIldlYWtNYXAiLCJhcnJheUZpbHRlciIsImFycmF5IiwicHJlZGljYXRlIiwicmVzSW5kZXgiLCJyZXN1bHQiLCJ2YWx1ZSIsImJhc2VUaW1lcyIsImlzQXJndW1lbnRzIiwiaXNBcnJheSIsImlzQnVmZmVyIiwiaXNJbmRleCIsImlzVHlwZWRBcnJheSIsIm9iamVjdFByb3RvIiwiT2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJhcnJheUxpa2VLZXlzIiwiaW5oZXJpdGVkIiwiaXNBcnIiLCJpc0FyZyIsImlzQnVmZiIsImlzVHlwZSIsInNraXBJbmRleGVzIiwiU3RyaW5nIiwia2V5IiwiY2FsbCIsImFycmF5UHVzaCIsIm9mZnNldCIsImFycmF5U29tZSIsImVxIiwiYXNzb2NJbmRleE9mIiwiYmFzZUdldEFsbEtleXMiLCJvYmplY3QiLCJrZXlzRnVuYyIsInN5bWJvbHNGdW5jIiwiZ2V0UmF3VGFnIiwib2JqZWN0VG9TdHJpbmciLCJudWxsVGFnIiwidW5kZWZpbmVkVGFnIiwic3ltVG9TdHJpbmdUYWciLCJ0b1N0cmluZ1RhZyIsImJhc2VHZXRUYWciLCJpc09iamVjdExpa2UiLCJhcmdzVGFnIiwiYmFzZUlzQXJndW1lbnRzIiwiYmFzZUlzRXF1YWxEZWVwIiwiYmFzZUlzRXF1YWwiLCJvdGhlciIsImJpdG1hc2siLCJjdXN0b21pemVyIiwic3RhY2siLCJlcXVhbEFycmF5cyIsImVxdWFsQnlUYWciLCJlcXVhbE9iamVjdHMiLCJnZXRUYWciLCJDT01QQVJFX1BBUlRJQUxfRkxBRyIsImFycmF5VGFnIiwib2JqZWN0VGFnIiwiZXF1YWxGdW5jIiwib2JqSXNBcnIiLCJvdGhJc0FyciIsIm9ialRhZyIsIm90aFRhZyIsIm9iaklzT2JqIiwib3RoSXNPYmoiLCJpc1NhbWVUYWciLCJvYmpJc1dyYXBwZWQiLCJvdGhJc1dyYXBwZWQiLCJvYmpVbndyYXBwZWQiLCJvdGhVbndyYXBwZWQiLCJpc0Z1bmN0aW9uIiwiaXNNYXNrZWQiLCJpc09iamVjdCIsInRvU291cmNlIiwicmVSZWdFeHBDaGFyIiwicmVJc0hvc3RDdG9yIiwiZnVuY1Byb3RvIiwiRnVuY3Rpb24iLCJmdW5jVG9TdHJpbmciLCJyZUlzTmF0aXZlIiwiUmVnRXhwIiwicmVwbGFjZSIsImJhc2VJc05hdGl2ZSIsInBhdHRlcm4iLCJ0ZXN0IiwiaXNMZW5ndGgiLCJib29sVGFnIiwiZGF0ZVRhZyIsImVycm9yVGFnIiwiZnVuY1RhZyIsIm1hcFRhZyIsIm51bWJlclRhZyIsInJlZ2V4cFRhZyIsInNldFRhZyIsInN0cmluZ1RhZyIsIndlYWtNYXBUYWciLCJhcnJheUJ1ZmZlclRhZyIsImRhdGFWaWV3VGFnIiwiZmxvYXQzMlRhZyIsImZsb2F0NjRUYWciLCJpbnQ4VGFnIiwiaW50MTZUYWciLCJpbnQzMlRhZyIsInVpbnQ4VGFnIiwidWludDhDbGFtcGVkVGFnIiwidWludDE2VGFnIiwidWludDMyVGFnIiwidHlwZWRBcnJheVRhZ3MiLCJiYXNlSXNUeXBlZEFycmF5IiwiaXNQcm90b3R5cGUiLCJuYXRpdmVLZXlzIiwiYmFzZUtleXMiLCJuIiwiaXRlcmF0ZWUiLCJBcnJheSIsImJhc2VVbmFyeSIsImZ1bmMiLCJjYWNoZUhhcyIsImNhY2hlIiwiY29yZUpzRGF0YSIsIkNPTVBBUkVfVU5PUkRFUkVEX0ZMQUciLCJpc1BhcnRpYWwiLCJhcnJMZW5ndGgiLCJvdGhMZW5ndGgiLCJhcnJTdGFja2VkIiwib3RoU3RhY2tlZCIsInNlZW4iLCJhcnJWYWx1ZSIsIm90aFZhbHVlIiwiY29tcGFyZWQiLCJvdGhJbmRleCIsIm1hcFRvQXJyYXkiLCJzZXRUb0FycmF5Iiwic3ltYm9sVGFnIiwic3ltYm9sUHJvdG8iLCJzeW1ib2xWYWx1ZU9mIiwidmFsdWVPZiIsInRhZyIsImJ5dGVMZW5ndGgiLCJieXRlT2Zmc2V0IiwiYnVmZmVyIiwibmFtZSIsIm1lc3NhZ2UiLCJjb252ZXJ0Iiwic3RhY2tlZCIsImdldEFsbEtleXMiLCJvYmpQcm9wcyIsIm9iakxlbmd0aCIsIm90aFByb3BzIiwib2JqU3RhY2tlZCIsInNraXBDdG9yIiwib2JqVmFsdWUiLCJvYmpDdG9yIiwiY29uc3RydWN0b3IiLCJvdGhDdG9yIiwiZnJlZUdsb2JhbCIsImdsb2JhbCIsImdldFN5bWJvbHMiLCJrZXlzIiwiaXNLZXlhYmxlIiwiZ2V0TWFwRGF0YSIsImdldFZhbHVlIiwibmF0aXZlT2JqZWN0VG9TdHJpbmciLCJpc093biIsInVubWFza2VkIiwiZSIsInN0dWJBcnJheSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwibmF0aXZlR2V0U3ltYm9scyIsImdldE93blByb3BlcnR5U3ltYm9scyIsInN5bWJvbCIsInByb21pc2VUYWciLCJkYXRhVmlld0N0b3JTdHJpbmciLCJtYXBDdG9yU3RyaW5nIiwicHJvbWlzZUN0b3JTdHJpbmciLCJzZXRDdG9yU3RyaW5nIiwid2Vha01hcEN0b3JTdHJpbmciLCJBcnJheUJ1ZmZlciIsInJlc29sdmUiLCJDdG9yIiwiY3RvclN0cmluZyIsIm5hdGl2ZUNyZWF0ZSIsIkhBU0hfVU5ERUZJTkVEIiwiTUFYX1NBRkVfSU5URUdFUiIsInJlSXNVaW50IiwidHlwZSIsIm1hc2tTcmNLZXkiLCJ1aWQiLCJleGVjIiwiSUVfUFJPVE8iLCJwcm90byIsImFycmF5UHJvdG8iLCJzcGxpY2UiLCJsYXN0SW5kZXgiLCJwb3AiLCJmb3JFYWNoIiwib3ZlckFyZyIsImZyZWVFeHBvcnRzIiwibm9kZVR5cGUiLCJmcmVlTW9kdWxlIiwibW9kdWxlRXhwb3J0cyIsImZyZWVQcm9jZXNzIiwicHJvY2VzcyIsIm5vZGVVdGlsIiwidHlwZXMiLCJiaW5kaW5nIiwidHJhbnNmb3JtIiwiYXJnIiwiZnJlZVNlbGYiLCJzZWxmIiwiTEFSR0VfQVJSQVlfU0laRSIsInBhaXJzIiwiYXJndW1lbnRzIiwiaXNBcnJheUxpa2UiLCJzdHViRmFsc2UiLCJCdWZmZXIiLCJuYXRpdmVJc0J1ZmZlciIsImlzRXF1YWwiLCJhc3luY1RhZyIsImdlblRhZyIsInByb3h5VGFnIiwibm9kZUlzVHlwZWRBcnJheSIsImZhY3RvcnkiLCJQdWJTdWIiLCJjb25zb2xlIiwid2FybiIsImRlZmluZSIsImFtZCIsIndpbmRvdyIsIm1lc3NhZ2VzIiwibGFzdFVpZCIsIkFMTF9TVUJTQ1JJQklOR19NU0ciLCJoYXNLZXlzIiwib2JqIiwidGhyb3dFeGNlcHRpb24iLCJleCIsInJlVGhyb3dFeGNlcHRpb24iLCJjYWxsU3Vic2NyaWJlcldpdGhEZWxheWVkRXhjZXB0aW9ucyIsInN1YnNjcmliZXIiLCJzZXRUaW1lb3V0IiwiY2FsbFN1YnNjcmliZXJXaXRoSW1tZWRpYXRlRXhjZXB0aW9ucyIsImRlbGl2ZXJNZXNzYWdlIiwib3JpZ2luYWxNZXNzYWdlIiwibWF0Y2hlZE1lc3NhZ2UiLCJpbW1lZGlhdGVFeGNlcHRpb25zIiwic3Vic2NyaWJlcnMiLCJjYWxsU3Vic2NyaWJlciIsInMiLCJjcmVhdGVEZWxpdmVyeUZ1bmN0aW9uIiwiZGVsaXZlck5hbWVzcGFjZWQiLCJ0b3BpYyIsInBvc2l0aW9uIiwibGFzdEluZGV4T2YiLCJzdWJzdHIiLCJoYXNEaXJlY3RTdWJzY3JpYmVyc0ZvciIsImZvdW5kIiwiQm9vbGVhbiIsIm1lc3NhZ2VIYXNTdWJzY3JpYmVycyIsInB1Ymxpc2giLCJzeW5jIiwiZGVsaXZlciIsImhhc1N1YnNjcmliZXJzIiwicHVibGlzaFN5bmMiLCJzdWJzY3JpYmUiLCJ0b2tlbiIsInN1YnNjcmliZUFsbCIsInN1YnNjcmliZU9uY2UiLCJ1bnN1YnNjcmliZSIsImFwcGx5IiwiY2xlYXJBbGxTdWJzY3JpcHRpb25zIiwiY2xlYXJTdWJzY3JpcHRpb25zIiwibSIsImluZGV4T2YiLCJjb3VudFN1YnNjcmlwdGlvbnMiLCJjb3VudCIsImdldFN1YnNjcmlwdGlvbnMiLCJkZXNjZW5kYW50VG9waWNFeGlzdHMiLCJpc1RvcGljIiwiaXNUb2tlbiIsInQiLCJTaGlwIiwiQm90Iiwib3Bwb25lbnRzR2FtZWJvYXJkIiwiYXR0YWNrUXVldWUiLCJhdHRhY2siLCJvcmllbnRhdGlvbiIsIngiLCJ5Iiwic2hpZnQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJib2FyZCIsInJlY2VpdmVBdHRhY2siLCJkaXJlY3Rpb25zIiwiZCIsInRhcmdldGVkWCIsInRhcmdldGVkWSIsInN0eWxlIiwiTkVXX0dBTUUiLCJORVhUX1BMQVlFUiIsImVkaXRCb2FyZERpYWxvZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkRPTU1hbmFnZXIiLCJzZXRVcFBsYXlBZ2FpbkJ1dHRvbiIsInNldE5hbWVDbGlja0xpc3RlbmVycyIsInJlc2V0QnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0TWVudUJ1dHRvbiIsInNob3dTdGFydE1lbnUiLCJwb3B1bGF0ZUFjdGl2ZVBsYXllcnNCb2FyZCIsInBsYXllciIsImdhbWVib2FyZCIsImJvYXJkR3JpZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJqIiwiZG90IiwiYXBwZW5kIiwiaXNFZGl0YWJsZSIsImRyYWdnYWJsZSIsImV2ZW50IiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsInRhcmdldCIsInByZXZlbnREZWZhdWx0IiwiZHJvcHBlZElkIiwiZ2V0RGF0YSIsInhDb29yZGluYXRlIiwiY2hhckF0IiwieUNvb3JkaW5hdGUiLCJtb3ZlU2hpcCIsInBhcnNlSW50IiwiYXBwZW5kQ2hpbGQiLCJib2FyZENvbnRhaW5lciIsImVsZW1lbnRRdWVyeSIsImlubmVySFRNTCIsInBvcHVsYXRlT3Bwb25lbnRzQm9hcmQiLCJwb3B1bGF0ZUJvYXJkIiwiZmlyc3RQbGF5ZXIiLCJzZWNvbmRQbGF5ZXIiLCJwbGF5ZXJTd2l0Y2hlZCIsImlzQWN0aXZlIiwic2hvd0VkaXRNZXNzYWdlIiwic2hvd1Bhc3NEZXZpY2VEaWFsb2ciLCJjbG9zZSIsInNob3dFbmREaWFsb2ciLCJ3aW5uZXIiLCJlbmREaWFsb2ciLCJ0ZXh0Q29udGVudCIsInNob3dNb2RhbCIsIlJFQUxfUExBWUVSU19HQU1FIiwiR0FNRV9XSVRIX0JPVCIsInN0YXJ0RGlhbG9nIiwibmV4dFBsYXllck5hbWUiLCJwYXNzRGV2aWNlRGlhbG9nIiwibmV4dFBsYXllck5hbWVCdXR0b24iLCJuZXh0UGxheWVyTmFtZUhlYWRlciIsImRldmljZVBhc3NlZEJ1dHRvbiIsInRvVXBwZXJDYXNlIiwiZWRpdEJvYXJkRGlhbG9nQ29udGFpbmVyIiwiZG9uZUJ1dHRvbiIsInNob3ciLCJwbGF5QWdhaW5CdXR0b24iLCJjaGFuZ2VOYW1lRGlhbG9nIiwicGxheWVyc05hbWVzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImVsZW1lbnQiLCJjaGFuZ2VOYW1lRm9ybSIsInVwZGF0ZU5hbWVzIiwicmVzZXQiLCJuYW1lMSIsIm5hbWUyIiwiZmlyc3ROYW1lUGxheWVyTmFtZSIsInNlY29uZE5hbWVQbGF5ZXJOYW1lIiwidHJpbSIsIkNIQU5HRV9OQU1FUyIsIkdhbWVib2FyZCIsImZyb20iLCJmaWxsIiwibWlzc2VkIiwiaXNFbXB0eSIsInBsYWNlU2hpcCIsInNoaXAiLCJjYW5TaGlwQmVQbGFjZWRIb3Jpem9udGFsbHkiLCJjYW5TaGlwQmVQbGFjZWRWZXJ0aWNhbGx5Iiwic2hpcEV4Y2VwdGlvbiIsIm1heCIsIm1pbiIsIndhc0hpdCIsImhpdCIsIlNBTUVfUExBWUVSIiwiaGF2ZUFsbEJlZW5TdW5rIiwic29tZSIsInJvdyIsImlzUG9zaXRpb25WYWxpZCIsIiNpc1Bvc2l0aW9uVmFsaWQiLCJnZXRNb3ZlZFNoaXBQb3NpdGlvbnMiLCJvcmlnaW5hbFgiLCJvcmlnaW5hbFkiLCJuZXdYIiwibmV3WSIsIm9sZFBvc2l0aW9ucyIsIm5ld1Bvc2l0aW9ucyIsImRpcmVjdGlvbkluZGV4IiwieE1vdmUiLCJ5TW92ZSIsIm5ld1hJdGVtIiwibmV3WUl0ZW0iLCJzb3J0IiwiYSIsImIiLCJwb3NpdGlvbnMiLCJ4T2xkIiwieU9sZCIsImdldEJvYXRMZW5ndGhzRnJvbVBvc2l0aW9uIiwicXVhbnRpdHkiLCJjdXJyZW50WCIsImN1cnJlbnRZIiwiYWJvdmUiLCJyaWdodHdhcmRzIiwiYmVsb3ciLCJsZWZ0d2FyZHMiLCJQbGF5ZXIiLCJvcHBvbmVudHNCb2FyZCIsImJvdCIsInNldEFzQWN0aXZlIiwic2V0QXNPcHBvbmVudCIsImNoYW5nZU5hbWUiLCJuZXdOYW1lIiwidGltZXNIaXQiLCJoYXNCZWVuU3VuayIsImlzU3VuayIsInJhbmRvbWl6ZVNoaXBzIiwic2hpcFBsYWNlZCIsImRvbSIsInN0YXJ0R2FtZSIsImZpcnN0UGxheWVyVHlwZSIsInNlY29uZFBsYXllclR5cGUiLCJjaGVja0Zvcldpbm5lciIsIm5ld05hbWVzIl0sInNvdXJjZVJvb3QiOiIifQ==