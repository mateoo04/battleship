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
          item.id = `${i}-${j}`;

          //drag and drop
          if (!player.gameboard.hasBeenAttacked) {
            item.draggable = true;
            item.addEventListener('dragstart', event => {
              event.dataTransfer.setData('text/plain', event.target.id);
            });
          }
        }
        if (!player.gameboard.hasBeenAttacked) {
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
      this.populateActivePlayersBoard(secondPlayer);
      this.populateOpponentsBoard(firstPlayer);
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
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__);



class Gameboard {
  constructor() {
    this.board = Array.from({
      length: 10
    }, () => Array(10).fill(null));
    this.missed = [];

    //tracks if the board has been attacked for the purpose of drag and drop
    this.hasBeenAttacked = false;
  }
  #isEmpty(x, y) {
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
        if (!this.#isEmpty(i, j) && this.board[i][j] && !lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default()(this.board[i][j], shipException)) return false;
      }
    }
    return true;
  }
  canShipBePlacedVertically(length, x, y, shipException = 0) {
    for (let j = Math.max(0, y - 1); j <= Math.min(9, y + 1); j++) {
      for (let i = Math.max(0, x - 1); i <= Math.min(9, x + length); i++) {
        if (!this.#isEmpty(i, j) && !lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default()(this.board[i][j], shipException)) {
          return false;
        }
      }
    }
    return true;
  }
  receiveAttack(x, y) {
    this.hasBeenAttacked = true;
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

      //function #isEmpty may fail if (x,y) if out of board bounds, so it must be in second place
      while (this.#isPositionValid(originalX + xMove, originalY + yMove) && !this.#isEmpty(originalX + xMove, originalY + yMove)) {
        const newXItem = newX + xMove;
        const newYItem = newY + yMove;
        if (!this.#isPositionValid(newXItem, newYItem)) return false;
        if (this.#isEmpty(newXItem, newYItem) || lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default()(this.board[newXItem][newYItem], this.board[originalX][originalY])) {
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
    if (originalX === newX && originalY === newY || !this.#isEmpty(newX, newY) && !lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default()(this.board[originalX][originalY], this.board[newX][newY])) return false;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,uCAAuC;EACvC,wBAAwB;EACxB,wBAAwB;AAC1B;;AAEA;EACE,yCAAyC;AAC3C;;AAEA,iBAAiB;AACjB;;;;;;;;;;;;;;EAcE,SAAS;AACX;;AAEA;;EAEE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,kBAAkB;AACpB;;AAEA;EACE,sCAAsC;EACtC,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,UAAU;EACV,SAAS;AACX;;AAEA;EACE,aAAa;EACb,yDAAyD;EACzD,sDAAsD;AACxD;;AAEA;EACE,8BAA8B;EAC9B,6BAA6B;EAC7B,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;;EAEE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,YAAY;EACZ,WAAW;EACX,WAAW;EACX,sCAAsC;AACxC;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,uCAAuC;EACvC,wCAAwC;EACxC,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,sCAAsC;EACtC,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;;EAEE,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,sCAAsC;EACtC,iBAAiB;EACjB,WAAW;EACX,eAAe;AACjB;;AAEA;;EAEE,eAAe;EACf,YAAY;AACd","sourcesContent":[":root {\n  --block-dimension: min(50px, calc(4vw));\n  --primary-color: #4f209b;\n  --lighter-color: #7e87ff;\n}\n\n* {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n/*Default styles*/\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nul[class],\nol[class],\nli,\nfigure,\nfigcaption,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: min-content 1fr;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 18px;\n}\n\nheader button {\n  background-color: var(--primary-color);\n  border: none;\n  border-radius: 20px;\n  color: #fff;\n  font-weight: bold;\n  padding: 8px 20px;\n}\n\nmain {\n  display: flex;\n}\n\n.first-player,\n.second-player {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 50%;\n  gap: 12px;\n}\n\n.board-grid {\n  display: grid;\n  grid-template-columns: repeat(10, var(--block-dimension));\n  grid-template-rows: repeat(10, var(--block-dimension));\n}\n\n.board-item {\n  height: var(--block-dimension);\n  width: var(--block-dimension);\n  border: 1px solid #000;\n}\n\n.board-item:hover {\n  cursor: pointer;\n  opacity: 0.8;\n}\n\n.ship {\n  background-color: var(--lighter-color);\n}\n\n.hit-ship {\n  position: relative;\n  border: 1px solid black;\n  padding-top: -4px;\n}\n\n.hit-ship::before,\n.hit-ship::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 100%;\n  height: 3px;\n  background-color: var(--primary-color);\n}\n\n.hit-ship::before {\n  transform: rotate(45deg);\n}\n\n.hit-ship::after {\n  transform: rotate(-45deg);\n}\n\n.attacked {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.dot {\n  width: calc(var(--block-dimension) / 3);\n  height: calc(var(--block-dimension) / 3);\n  border-radius: 50%;\n  background-color: #000;\n}\n\ndialog {\n  border: none;\n  border-radius: 20px;\n}\n\n.end-dialog-container {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.end-dialog p {\n  font-size: 1.5em;\n}\n\n.end-dialog button {\n  background-color: var(--primary-color);\n  border: none;\n  border-radius: 20px;\n  color: #fff;\n  font-weight: bold;\n  padding: 8px;\n}\n\n.change-names-dialog form {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.change-names-dialog input,\n.change-names-dialog button {\n  border-radius: 20px;\n  border: none;\n  padding: 8px 16px;\n}\n\n.change-names-dialog input[type='text'] {\n  background-color: #e9e9e9;\n}\n\n.change-names-dialog input[type='submit'] {\n  background-color: var(--primary-color);\n  font-weight: bold;\n  color: #fff;\n  margin-top: 8px;\n}\n\nbutton:hover,\n.players-name:hover {\n  cursor: pointer;\n  opacity: 0.8;\n}\n"],"sourceRoot":""}]);
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
  randomizeShips(firstPlayer);
  randomizeShips(secondPlayer);
  dom.populateBoard(firstPlayer, secondPlayer);
}
function randomizeShips(player) {
  for (let i = 1; i <= 5; i++) {
    let shipPlaced = false;
    while (!shipPlaced) {
      shipPlaced = player.gameboard.placeShip(new _ship_js__WEBPACK_IMPORTED_MODULE_2__.Ship(i), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.random() > 0.5 ? 'horizontal' : 'vertical');
    }
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLG1CQUFtQixVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsZ0NBQWdDLDRDQUE0Qyw2QkFBNkIsNkJBQTZCLEdBQUcsT0FBTyw4Q0FBOEMsR0FBRyxnSUFBZ0ksY0FBYyxHQUFHLGlCQUFpQixpQkFBaUIsZ0JBQWdCLEdBQUcsVUFBVSxrQkFBa0Isd0NBQXdDLEdBQUcsWUFBWSxrQkFBa0IsbUNBQW1DLHVCQUF1QixHQUFHLG1CQUFtQiwyQ0FBMkMsaUJBQWlCLHdCQUF3QixnQkFBZ0Isc0JBQXNCLHNCQUFzQixHQUFHLFVBQVUsa0JBQWtCLEdBQUcsb0NBQW9DLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixpQkFBaUIsZUFBZSxjQUFjLEdBQUcsaUJBQWlCLGtCQUFrQiw4REFBOEQsMkRBQTJELEdBQUcsaUJBQWlCLG1DQUFtQyxrQ0FBa0MsMkJBQTJCLEdBQUcsdUJBQXVCLG9CQUFvQixpQkFBaUIsR0FBRyxXQUFXLDJDQUEyQyxHQUFHLGVBQWUsdUJBQXVCLDRCQUE0QixzQkFBc0IsR0FBRywwQ0FBMEMsZ0JBQWdCLHVCQUF1QixXQUFXLFlBQVksYUFBYSxjQUFjLGlCQUFpQixnQkFBZ0IsZ0JBQWdCLDJDQUEyQyxHQUFHLHVCQUF1Qiw2QkFBNkIsR0FBRyxzQkFBc0IsOEJBQThCLEdBQUcsZUFBZSxrQkFBa0Isd0JBQXdCLDRCQUE0QixHQUFHLFVBQVUsNENBQTRDLDZDQUE2Qyx1QkFBdUIsMkJBQTJCLEdBQUcsWUFBWSxpQkFBaUIsd0JBQXdCLEdBQUcsMkJBQTJCLGtCQUFrQiwyQkFBMkIsY0FBYyxHQUFHLG1CQUFtQixxQkFBcUIsR0FBRyx3QkFBd0IsMkNBQTJDLGlCQUFpQix3QkFBd0IsZ0JBQWdCLHNCQUFzQixpQkFBaUIsR0FBRywrQkFBK0Isa0JBQWtCLDJCQUEyQixhQUFhLEdBQUcsOERBQThELHdCQUF3QixpQkFBaUIsc0JBQXNCLEdBQUcsNkNBQTZDLDhCQUE4QixHQUFHLCtDQUErQywyQ0FBMkMsc0JBQXNCLGdCQUFnQixvQkFBb0IsR0FBRyx3Q0FBd0Msb0JBQW9CLGlCQUFpQixHQUFHLHFCQUFxQjtBQUM3cUk7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUx2QyxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7QUN4QmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTZDO0FBQ1I7QUFDSjtBQUNGO0FBRS9CLE1BQU1oQyxRQUFRLEdBQUcsVUFBVTtBQUMzQixNQUFNQyxXQUFXLEdBQUcsYUFBYTtBQUNqQyxNQUFNcEYsUUFBUSxHQUFHLFVBQVU7QUFDM0IsTUFBTThELFlBQVksR0FBRyxjQUFjO0FBRW5DLElBQUl1RCxHQUFHLEdBQUcsSUFBSXBILHNEQUFVLENBQUMsQ0FBQztBQUMxQixJQUFJc0MsV0FBVztBQUNmLElBQUlDLFlBQVk7QUFFaEIsU0FBUzhFLGdCQUFnQkEsQ0FBQSxFQUFHO0VBQzFCL0UsV0FBVyxHQUFHLElBQUlzRSw4Q0FBTSxDQUN0QixVQUFVLEVBQ1YsTUFBTSxFQUNOLHFDQUFxQyxFQUNyQyxJQUNGLENBQUM7RUFDRHJFLFlBQVksR0FBRyxJQUFJcUUsOENBQU0sQ0FDdkIsVUFBVSxFQUNWLFVBQVUsRUFDVixzQ0FDRixDQUFDO0VBRURVLGNBQWMsQ0FBQ2hGLFdBQVcsQ0FBQztFQUMzQmdGLGNBQWMsQ0FBQy9FLFlBQVksQ0FBQztFQUU1QjZFLEdBQUcsQ0FBQy9FLGFBQWEsQ0FBQ0MsV0FBVyxFQUFFQyxZQUFZLENBQUM7QUFDOUM7QUFFQSxTQUFTK0UsY0FBY0EsQ0FBQ2pILE1BQU0sRUFBRTtFQUM5QixLQUFLLElBQUlwVyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLElBQUksQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRTtJQUMzQixJQUFJc2QsVUFBVSxHQUFHLEtBQUs7SUFFdEIsT0FBTyxDQUFDQSxVQUFVLEVBQUU7TUFDbEJBLFVBQVUsR0FBR2xILE1BQU0sQ0FBQ0UsU0FBUyxDQUFDaUUsU0FBUyxDQUNyQyxJQUFJVCwwQ0FBSSxDQUFDOVosQ0FBQyxDQUFDLEVBQ1g2YSxJQUFJLENBQUMwQyxLQUFLLENBQUMxQyxJQUFJLENBQUMyQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUM5QjNDLElBQUksQ0FBQzBDLEtBQUssQ0FBQzFDLElBQUksQ0FBQzJDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQzlCM0MsSUFBSSxDQUFDMkMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsWUFBWSxHQUFHLFVBQ3ZDLENBQUM7SUFDSDtFQUNGO0FBQ0Y7QUFFQSxTQUFTQyxXQUFXQSxDQUFBLEVBQUc7RUFDckIsTUFBTXBELENBQUMsR0FBR1EsSUFBSSxDQUFDMEMsS0FBSyxDQUFDMUMsSUFBSSxDQUFDMkMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7RUFDeEMsTUFBTWxELENBQUMsR0FBR08sSUFBSSxDQUFDMEMsS0FBSyxDQUFDMUMsSUFBSSxDQUFDMkMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7RUFFeEMsT0FDRW5GLFdBQVcsQ0FBQy9CLFNBQVMsQ0FBQ0QsS0FBSyxDQUFDZ0UsQ0FBQyxDQUFDLENBQUNDLENBQUMsQ0FBQyxLQUFLLElBQUksSUFDMUNqQyxXQUFXLENBQUMvQixTQUFTLENBQUNELEtBQUssQ0FBQ2dFLENBQUMsQ0FBQyxDQUFDQyxDQUFDLENBQUMsWUFBWVIsMENBQUksRUFDakQ7SUFDQXpCLFdBQVcsQ0FBQy9CLFNBQVMsQ0FBQzZCLGFBQWEsQ0FBQ2tDLENBQUMsRUFBRUMsQ0FBQyxDQUFDO0VBQzNDO0FBQ0Y7QUFFQSxTQUFTb0QsY0FBY0EsQ0FBQSxFQUFHO0VBQ3hCLElBQUlyRixXQUFXLENBQUMvQixTQUFTLENBQUM2RSxlQUFlLENBQUMsQ0FBQyxFQUFFZ0MsR0FBRyxDQUFDM0UsYUFBYSxDQUFDRixZQUFZLENBQUMsQ0FBQyxLQUN4RSxJQUFJQSxZQUFZLENBQUNoQyxTQUFTLENBQUM2RSxlQUFlLENBQUMsQ0FBQyxFQUMvQ2dDLEdBQUcsQ0FBQzNFLGFBQWEsQ0FBQ0gsV0FBVyxDQUFDO0FBQ2xDO0FBRUFqRywwREFBZ0IsQ0FBQzZJLFFBQVEsRUFBRSxNQUFNO0VBQy9CLElBQUkzQyxZQUFZLENBQUNDLFFBQVEsS0FBSyxJQUFJLEVBQUU7SUFDbENrRixXQUFXLENBQUMsQ0FBQztFQUNmO0VBRUFOLEdBQUcsQ0FBQy9FLGFBQWEsQ0FBQ0MsV0FBVyxFQUFFQyxZQUFZLENBQUM7RUFDNUNvRixjQUFjLENBQUMsQ0FBQztBQUNsQixDQUFDLENBQUM7QUFFRnRMLDBEQUFnQixDQUFDOEksV0FBVyxFQUFFLE1BQU07RUFDbEMsSUFBSTdDLFdBQVcsQ0FBQ0UsUUFBUSxFQUFFO0lBQ3hCRixXQUFXLENBQUNFLFFBQVEsR0FBRyxLQUFLO0lBQzVCRCxZQUFZLENBQUNDLFFBQVEsR0FBRyxJQUFJO0lBRTVCa0YsV0FBVyxDQUFDLENBQUM7RUFDZixDQUFDLE1BQU07SUFDTHBGLFdBQVcsQ0FBQ0UsUUFBUSxHQUFHLElBQUk7SUFDM0JELFlBQVksQ0FBQ0MsUUFBUSxHQUFHLEtBQUs7RUFDL0I7RUFFQTRFLEdBQUcsQ0FBQy9FLGFBQWEsQ0FBQ0MsV0FBVyxFQUFFQyxZQUFZLENBQUM7RUFDNUNvRixjQUFjLENBQUMsQ0FBQztBQUNsQixDQUFDLENBQUM7QUFFRnRMLDBEQUFnQixDQUFDMEQsUUFBUSxFQUFFLE1BQU1zSCxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7QUFFcERoTCwwREFBZ0IsQ0FBQ3dILFlBQVksRUFBRSxDQUFDek0sT0FBTyxFQUFFd1EsUUFBUSxLQUFLO0VBQ3BEdEYsV0FBVyxDQUFDeUUsVUFBVSxDQUFDYSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDbkN0RixXQUFXLENBQUN5RSxVQUFVLENBQUNhLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUM7QUFFRlAsZ0JBQWdCLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19EYXRhVmlldy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fSGFzaC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTGlzdENhY2hlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcENhY2hlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19Qcm9taXNlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TZXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1NldENhY2hlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TdGFjay5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19VaW50OEFycmF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19XZWFrTWFwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheVNvbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldEFsbEtleXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzRXF1YWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc0VxdWFsRGVlcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlS2V5cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRpbWVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVW5hcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NhY2hlSGFzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3JlSnNEYXRhLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19lcXVhbEFycmF5cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZXF1YWxCeVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZXF1YWxPYmplY3RzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRBbGxLZXlzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0U3ltYm9scy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0VGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaENsZWFyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoRGVsZXRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoR2V0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoU2V0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0tleWFibGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzTWFza2VkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc1Byb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlR2V0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlS2V5cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbm9kZVV0aWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vdmVyQXJnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19yb290LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRDYWNoZUFkZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2V0Q2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrRGVsZXRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0dldC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tIYXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrU2V0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL190b1NvdXJjZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9lcS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRXF1YWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2tleXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvc3R1YkFycmF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJGYWxzZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3B1YnN1Yi1qcy9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lTWFuYWdlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBEYXRhVmlldyA9IGdldE5hdGl2ZShyb290LCAnRGF0YVZpZXcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhVmlldztcbiIsInZhciBoYXNoQ2xlYXIgPSByZXF1aXJlKCcuL19oYXNoQ2xlYXInKSxcbiAgICBoYXNoRGVsZXRlID0gcmVxdWlyZSgnLi9faGFzaERlbGV0ZScpLFxuICAgIGhhc2hHZXQgPSByZXF1aXJlKCcuL19oYXNoR2V0JyksXG4gICAgaGFzaEhhcyA9IHJlcXVpcmUoJy4vX2hhc2hIYXMnKSxcbiAgICBoYXNoU2V0ID0gcmVxdWlyZSgnLi9faGFzaFNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoO1xuIiwidmFyIGxpc3RDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlQ2xlYXInKSxcbiAgICBsaXN0Q2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVEZWxldGUnKSxcbiAgICBsaXN0Q2FjaGVHZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVHZXQnKSxcbiAgICBsaXN0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVIYXMnKSxcbiAgICBsaXN0Q2FjaGVTZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RDYWNoZTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG4iLCJ2YXIgbWFwQ2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX21hcENhY2hlQ2xlYXInKSxcbiAgICBtYXBDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX21hcENhY2hlRGVsZXRlJyksXG4gICAgbWFwQ2FjaGVHZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZUdldCcpLFxuICAgIG1hcENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVIYXMnKSxcbiAgICBtYXBDYWNoZVNldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcENhY2hlO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXQ7XG4iLCJ2YXIgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpLFxuICAgIHNldENhY2hlQWRkID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVBZGQnKSxcbiAgICBzZXRDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX3NldENhY2hlSGFzJyk7XG5cbi8qKlxuICpcbiAqIENyZWF0ZXMgYW4gYXJyYXkgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIHVuaXF1ZSB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW3ZhbHVlc10gVGhlIHZhbHVlcyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU2V0Q2FjaGUodmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzID09IG51bGwgPyAwIDogdmFsdWVzLmxlbmd0aDtcblxuICB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHRoaXMuYWRkKHZhbHVlc1tpbmRleF0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTZXRDYWNoZWAuXG5TZXRDYWNoZS5wcm90b3R5cGUuYWRkID0gU2V0Q2FjaGUucHJvdG90eXBlLnB1c2ggPSBzZXRDYWNoZUFkZDtcblNldENhY2hlLnByb3RvdHlwZS5oYXMgPSBzZXRDYWNoZUhhcztcblxubW9kdWxlLmV4cG9ydHMgPSBTZXRDYWNoZTtcbiIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBzdGFja0NsZWFyID0gcmVxdWlyZSgnLi9fc3RhY2tDbGVhcicpLFxuICAgIHN0YWNrRGVsZXRlID0gcmVxdWlyZSgnLi9fc3RhY2tEZWxldGUnKSxcbiAgICBzdGFja0dldCA9IHJlcXVpcmUoJy4vX3N0YWNrR2V0JyksXG4gICAgc3RhY2tIYXMgPSByZXF1aXJlKCcuL19zdGFja0hhcycpLFxuICAgIHN0YWNrU2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVpbnQ4QXJyYXk7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBXZWFrTWFwO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RmlsdGVyO1xuIiwidmFyIGJhc2VUaW1lcyA9IHJlcXVpcmUoJy4vX2Jhc2VUaW1lcycpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSxcbiAgICAgIGlzQXJnID0gIWlzQXJyICYmIGlzQXJndW1lbnRzKHZhbHVlKSxcbiAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiAhaXNBcmcgJiYgaXNCdWZmZXIodmFsdWUpLFxuICAgICAgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksXG4gICAgICBza2lwSW5kZXhlcyA9IGlzQXJyIHx8IGlzQXJnIHx8IGlzQnVmZiB8fCBpc1R5cGUsXG4gICAgICByZXN1bHQgPSBza2lwSW5kZXhlcyA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZykgOiBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoXG4gICAgICAgICAgIC8vIFNhZmFyaSA5IGhhcyBlbnVtZXJhYmxlIGBhcmd1bWVudHMubGVuZ3RoYCBpbiBzdHJpY3QgbW9kZS5cbiAgICAgICAgICAga2V5ID09ICdsZW5ndGgnIHx8XG4gICAgICAgICAgIC8vIE5vZGUuanMgMC4xMCBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiBidWZmZXJzLlxuICAgICAgICAgICAoaXNCdWZmICYmIChrZXkgPT0gJ29mZnNldCcgfHwga2V5ID09ICdwYXJlbnQnKSkgfHxcbiAgICAgICAgICAgLy8gUGhhbnRvbUpTIDIgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gdHlwZWQgYXJyYXlzLlxuICAgICAgICAgICAoaXNUeXBlICYmIChrZXkgPT0gJ2J1ZmZlcicgfHwga2V5ID09ICdieXRlTGVuZ3RoJyB8fCBrZXkgPT0gJ2J5dGVPZmZzZXQnKSkgfHxcbiAgICAgICAgICAgLy8gU2tpcCBpbmRleCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICBpc0luZGV4KGtleSwgbGVuZ3RoKVxuICAgICAgICApKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUxpa2VLZXlzO1xuIiwiLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UHVzaDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnNvbWVgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW55IGVsZW1lbnQgcGFzc2VzIHRoZSBwcmVkaWNhdGUgY2hlY2ssXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheVNvbWUoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlTb21lO1xuIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc29jSW5kZXhPZjtcbiIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldEFsbEtleXNgIGFuZCBgZ2V0QWxsS2V5c0luYCB3aGljaCB1c2VzXG4gKiBga2V5c0Z1bmNgIGFuZCBgc3ltYm9sc0Z1bmNgIHRvIGdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzeW1ib2xzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzRnVuYywgc3ltYm9sc0Z1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXNGdW5jKG9iamVjdCk7XG4gIHJldHVybiBpc0FycmF5KG9iamVjdCkgPyByZXN1bHQgOiBhcnJheVB1c2gocmVzdWx0LCBzeW1ib2xzRnVuYyhvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0QWxsS2V5cztcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0FyZ3VtZW50cztcbiIsInZhciBiYXNlSXNFcXVhbERlZXAgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbERlZXAnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzRXF1YWxgIHdoaWNoIHN1cHBvcnRzIHBhcnRpYWwgY29tcGFyaXNvbnNcbiAqIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBVbm9yZGVyZWQgY29tcGFyaXNvblxuICogIDIgLSBQYXJ0aWFsIGNvbXBhcmlzb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgdmFsdWVgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIGlmICh2YWx1ZSA9PT0gb3RoZXIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCB8fCBvdGhlciA9PSBudWxsIHx8ICghaXNPYmplY3RMaWtlKHZhbHVlKSAmJiAhaXNPYmplY3RMaWtlKG90aGVyKSkpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcjtcbiAgfVxuICByZXR1cm4gYmFzZUlzRXF1YWxEZWVwKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgYmFzZUlzRXF1YWwsIHN0YWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbDtcbiIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgZXF1YWxBcnJheXMgPSByZXF1aXJlKCcuL19lcXVhbEFycmF5cycpLFxuICAgIGVxdWFsQnlUYWcgPSByZXF1aXJlKCcuL19lcXVhbEJ5VGFnJyksXG4gICAgZXF1YWxPYmplY3RzID0gcmVxdWlyZSgnLi9fZXF1YWxPYmplY3RzJyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbGAgZm9yIGFycmF5cyBhbmQgb2JqZWN0cyB3aGljaCBwZXJmb3Jtc1xuICogZGVlcCBjb21wYXJpc29ucyBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGVuYWJsaW5nIG9iamVjdHMgd2l0aCBjaXJjdWxhclxuICogcmVmZXJlbmNlcyB0byBiZSBjb21wYXJlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWxEZWVwKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIG9iaklzQXJyID0gaXNBcnJheShvYmplY3QpLFxuICAgICAgb3RoSXNBcnIgPSBpc0FycmF5KG90aGVyKSxcbiAgICAgIG9ialRhZyA9IG9iaklzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob2JqZWN0KSxcbiAgICAgIG90aFRhZyA9IG90aElzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob3RoZXIpO1xuXG4gIG9ialRhZyA9IG9ialRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb2JqVGFnO1xuICBvdGhUYWcgPSBvdGhUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG90aFRhZztcblxuICB2YXIgb2JqSXNPYmogPSBvYmpUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgb3RoSXNPYmogPSBvdGhUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgaXNTYW1lVGFnID0gb2JqVGFnID09IG90aFRhZztcblxuICBpZiAoaXNTYW1lVGFnICYmIGlzQnVmZmVyKG9iamVjdCkpIHtcbiAgICBpZiAoIWlzQnVmZmVyKG90aGVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBvYmpJc0FyciA9IHRydWU7XG4gICAgb2JqSXNPYmogPSBmYWxzZTtcbiAgfVxuICBpZiAoaXNTYW1lVGFnICYmICFvYmpJc09iaikge1xuICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgcmV0dXJuIChvYmpJc0FyciB8fCBpc1R5cGVkQXJyYXkob2JqZWN0KSlcbiAgICAgID8gZXF1YWxBcnJheXMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaylcbiAgICAgIDogZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCBvYmpUYWcsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xuICB9XG4gIGlmICghKGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRykpIHtcbiAgICB2YXIgb2JqSXNXcmFwcGVkID0gb2JqSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsICdfX3dyYXBwZWRfXycpLFxuICAgICAgICBvdGhJc1dyYXBwZWQgPSBvdGhJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCAnX193cmFwcGVkX18nKTtcblxuICAgIGlmIChvYmpJc1dyYXBwZWQgfHwgb3RoSXNXcmFwcGVkKSB7XG4gICAgICB2YXIgb2JqVW53cmFwcGVkID0gb2JqSXNXcmFwcGVkID8gb2JqZWN0LnZhbHVlKCkgOiBvYmplY3QsXG4gICAgICAgICAgb3RoVW53cmFwcGVkID0gb3RoSXNXcmFwcGVkID8gb3RoZXIudmFsdWUoKSA6IG90aGVyO1xuXG4gICAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgICAgcmV0dXJuIGVxdWFsRnVuYyhvYmpVbndyYXBwZWQsIG90aFVud3JhcHBlZCwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spO1xuICAgIH1cbiAgfVxuICBpZiAoIWlzU2FtZVRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICByZXR1cm4gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsRGVlcDtcbiIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNNYXNrZWQgPSByZXF1aXJlKCcuL19pc01hc2tlZCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYXRpdmU7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzVHlwZWRBcnJheTtcbiIsInZhciBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXMnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVGltZXM7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuYXJ5O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBgY2FjaGVgIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYWNoZSBUaGUgY2FjaGUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gY2FjaGVIYXMoY2FjaGUsIGtleSkge1xuICByZXR1cm4gY2FjaGUuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FjaGVIYXM7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlSnNEYXRhO1xuIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheVNvbWUgPSByZXF1aXJlKCcuL19hcnJheVNvbWUnKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGFycmF5cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtBcnJheX0gb3RoZXIgVGhlIG90aGVyIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBhcnJheWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJyYXlzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQXJyYXlzKGFycmF5LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgYXJyTGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoZXIubGVuZ3RoO1xuXG4gIGlmIChhcnJMZW5ndGggIT0gb3RoTGVuZ3RoICYmICEoaXNQYXJ0aWFsICYmIG90aExlbmd0aCA+IGFyckxlbmd0aCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gQ2hlY2sgdGhhdCBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIGFyclN0YWNrZWQgPSBzdGFjay5nZXQoYXJyYXkpO1xuICB2YXIgb3RoU3RhY2tlZCA9IHN0YWNrLmdldChvdGhlcik7XG4gIGlmIChhcnJTdGFja2VkICYmIG90aFN0YWNrZWQpIHtcbiAgICByZXR1cm4gYXJyU3RhY2tlZCA9PSBvdGhlciAmJiBvdGhTdGFja2VkID09IGFycmF5O1xuICB9XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gdHJ1ZSxcbiAgICAgIHNlZW4gPSAoYml0bWFzayAmIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcpID8gbmV3IFNldENhY2hlIDogdW5kZWZpbmVkO1xuXG4gIHN0YWNrLnNldChhcnJheSwgb3RoZXIpO1xuICBzdGFjay5zZXQob3RoZXIsIGFycmF5KTtcblxuICAvLyBJZ25vcmUgbm9uLWluZGV4IHByb3BlcnRpZXMuXG4gIHdoaWxlICgrK2luZGV4IDwgYXJyTGVuZ3RoKSB7XG4gICAgdmFyIGFyclZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2luZGV4XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBhcnJWYWx1ZSwgaW5kZXgsIG90aGVyLCBhcnJheSwgc3RhY2spXG4gICAgICAgIDogY3VzdG9taXplcihhcnJWYWx1ZSwgb3RoVmFsdWUsIGluZGV4LCBhcnJheSwgb3RoZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgaWYgKGNvbXBhcmVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChjb21wYXJlZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKHNlZW4pIHtcbiAgICAgIGlmICghYXJyYXlTb21lKG90aGVyLCBmdW5jdGlvbihvdGhWYWx1ZSwgb3RoSW5kZXgpIHtcbiAgICAgICAgICAgIGlmICghY2FjaGVIYXMoc2Vlbiwgb3RoSW5kZXgpICYmXG4gICAgICAgICAgICAgICAgKGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzZWVuLnB1c2gob3RoSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCEoXG4gICAgICAgICAgYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8XG4gICAgICAgICAgICBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaylcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKGFycmF5KTtcbiAgc3RhY2tbJ2RlbGV0ZSddKG90aGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEFycmF5cztcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBVaW50OEFycmF5ID0gcmVxdWlyZSgnLi9fVWludDhBcnJheScpLFxuICAgIGVxID0gcmVxdWlyZSgnLi9lcScpLFxuICAgIGVxdWFsQXJyYXlzID0gcmVxdWlyZSgnLi9fZXF1YWxBcnJheXMnKSxcbiAgICBtYXBUb0FycmF5ID0gcmVxdWlyZSgnLi9fbWFwVG9BcnJheScpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVmFsdWVPZiA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udmFsdWVPZiA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGNvbXBhcmluZyBvYmplY3RzIG9mXG4gKiB0aGUgc2FtZSBgdG9TdHJpbmdUYWdgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY29tcGFyaW5nIHZhbHVlcyB3aXRoIHRhZ3Mgb2ZcbiAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIG9yIGBTdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnIFRoZSBgdG9TdHJpbmdUYWdgIG9mIHRoZSBvYmplY3RzIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCB0YWcsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgaWYgKChvYmplY3QuYnl0ZUxlbmd0aCAhPSBvdGhlci5ieXRlTGVuZ3RoKSB8fFxuICAgICAgICAgIChvYmplY3QuYnl0ZU9mZnNldCAhPSBvdGhlci5ieXRlT2Zmc2V0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBvYmplY3QgPSBvYmplY3QuYnVmZmVyO1xuICAgICAgb3RoZXIgPSBvdGhlci5idWZmZXI7XG5cbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgaWYgKChvYmplY3QuYnl0ZUxlbmd0aCAhPSBvdGhlci5ieXRlTGVuZ3RoKSB8fFxuICAgICAgICAgICFlcXVhbEZ1bmMobmV3IFVpbnQ4QXJyYXkob2JqZWN0KSwgbmV3IFVpbnQ4QXJyYXkob3RoZXIpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgICAvLyBDb2VyY2UgYm9vbGVhbnMgdG8gYDFgIG9yIGAwYCBhbmQgZGF0ZXMgdG8gbWlsbGlzZWNvbmRzLlxuICAgICAgLy8gSW52YWxpZCBkYXRlcyBhcmUgY29lcmNlZCB0byBgTmFOYC5cbiAgICAgIHJldHVybiBlcSgrb2JqZWN0LCArb3RoZXIpO1xuXG4gICAgY2FzZSBlcnJvclRhZzpcbiAgICAgIHJldHVybiBvYmplY3QubmFtZSA9PSBvdGhlci5uYW1lICYmIG9iamVjdC5tZXNzYWdlID09IG90aGVyLm1lc3NhZ2U7XG5cbiAgICBjYXNlIHJlZ2V4cFRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIC8vIENvZXJjZSByZWdleGVzIHRvIHN0cmluZ3MgYW5kIHRyZWF0IHN0cmluZ3MsIHByaW1pdGl2ZXMgYW5kIG9iamVjdHMsXG4gICAgICAvLyBhcyBlcXVhbC4gU2VlIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1yZWdleHAucHJvdG90eXBlLnRvc3RyaW5nXG4gICAgICAvLyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAgcmV0dXJuIG9iamVjdCA9PSAob3RoZXIgKyAnJyk7XG5cbiAgICBjYXNlIG1hcFRhZzpcbiAgICAgIHZhciBjb252ZXJ0ID0gbWFwVG9BcnJheTtcblxuICAgIGNhc2Ugc2V0VGFnOlxuICAgICAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRztcbiAgICAgIGNvbnZlcnQgfHwgKGNvbnZlcnQgPSBzZXRUb0FycmF5KTtcblxuICAgICAgaWYgKG9iamVjdC5zaXplICE9IG90aGVyLnNpemUgJiYgIWlzUGFydGlhbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gICAgICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICAgICAgaWYgKHN0YWNrZWQpIHtcbiAgICAgICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gICAgICB9XG4gICAgICBiaXRtYXNrIHw9IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUc7XG5cbiAgICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgICAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICAgICAgdmFyIHJlc3VsdCA9IGVxdWFsQXJyYXlzKGNvbnZlcnQob2JqZWN0KSwgY29udmVydChvdGhlciksIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xuICAgICAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgY2FzZSBzeW1ib2xUYWc6XG4gICAgICBpZiAoc3ltYm9sVmFsdWVPZikge1xuICAgICAgICByZXR1cm4gc3ltYm9sVmFsdWVPZi5jYWxsKG9iamVjdCkgPT0gc3ltYm9sVmFsdWVPZi5jYWxsKG90aGVyKTtcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxCeVRhZztcbiIsInZhciBnZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fZ2V0QWxsS2V5cycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDE7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBvYmplY3RzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcsXG4gICAgICBvYmpQcm9wcyA9IGdldEFsbEtleXMob2JqZWN0KSxcbiAgICAgIG9iakxlbmd0aCA9IG9ialByb3BzLmxlbmd0aCxcbiAgICAgIG90aFByb3BzID0gZ2V0QWxsS2V5cyhvdGhlciksXG4gICAgICBvdGhMZW5ndGggPSBvdGhQcm9wcy5sZW5ndGg7XG5cbiAgaWYgKG9iakxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIWlzUGFydGlhbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgaW5kZXggPSBvYmpMZW5ndGg7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICBpZiAoIShpc1BhcnRpYWwgPyBrZXkgaW4gb3RoZXIgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCBrZXkpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICAvLyBDaGVjayB0aGF0IGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgb2JqU3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICB2YXIgb3RoU3RhY2tlZCA9IHN0YWNrLmdldChvdGhlcik7XG4gIGlmIChvYmpTdGFja2VkICYmIG90aFN0YWNrZWQpIHtcbiAgICByZXR1cm4gb2JqU3RhY2tlZCA9PSBvdGhlciAmJiBvdGhTdGFja2VkID09IG9iamVjdDtcbiAgfVxuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICBzdGFjay5zZXQob3RoZXIsIG9iamVjdCk7XG5cbiAgdmFyIHNraXBDdG9yID0gaXNQYXJ0aWFsO1xuICB3aGlsZSAoKytpbmRleCA8IG9iakxlbmd0aCkge1xuICAgIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltrZXldO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIG9ialZhbHVlLCBrZXksIG90aGVyLCBvYmplY3QsIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIob2JqVmFsdWUsIG90aFZhbHVlLCBrZXksIG9iamVjdCwgb3RoZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKCEoY29tcGFyZWQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gKG9ialZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMob2JqVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykpXG4gICAgICAgICAgOiBjb21wYXJlZFxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBza2lwQ3RvciB8fCAoc2tpcEN0b3IgPSBrZXkgPT0gJ2NvbnN0cnVjdG9yJyk7XG4gIH1cbiAgaWYgKHJlc3VsdCAmJiAhc2tpcEN0b3IpIHtcbiAgICB2YXIgb2JqQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgICAgb3RoQ3RvciA9IG90aGVyLmNvbnN0cnVjdG9yO1xuXG4gICAgLy8gTm9uIGBPYmplY3RgIG9iamVjdCBpbnN0YW5jZXMgd2l0aCBkaWZmZXJlbnQgY29uc3RydWN0b3JzIGFyZSBub3QgZXF1YWwuXG4gICAgaWYgKG9iakN0b3IgIT0gb3RoQ3RvciAmJlxuICAgICAgICAoJ2NvbnN0cnVjdG9yJyBpbiBvYmplY3QgJiYgJ2NvbnN0cnVjdG9yJyBpbiBvdGhlcikgJiZcbiAgICAgICAgISh0eXBlb2Ygb2JqQ3RvciA9PSAnZnVuY3Rpb24nICYmIG9iakN0b3IgaW5zdGFuY2VvZiBvYmpDdG9yICYmXG4gICAgICAgICAgdHlwZW9mIG90aEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvdGhDdG9yIGluc3RhbmNlb2Ygb3RoQ3RvcikpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgc3RhY2tbJ2RlbGV0ZSddKG90aGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbE9iamVjdHM7XG4iLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG4iLCJ2YXIgYmFzZUdldEFsbEtleXMgPSByZXF1aXJlKCcuL19iYXNlR2V0QWxsS2V5cycpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXMob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXMsIGdldFN5bWJvbHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXM7XG4iLCJ2YXIgaXNLZXlhYmxlID0gcmVxdWlyZSgnLi9faXNLZXlhYmxlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXBEYXRhO1xuIiwidmFyIGJhc2VJc05hdGl2ZSA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hdGl2ZScpLFxuICAgIGdldFZhbHVlID0gcmVxdWlyZSgnLi9fZ2V0VmFsdWUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG4iLCJ2YXIgYXJyYXlGaWx0ZXIgPSByZXF1aXJlKCcuL19hcnJheUZpbHRlcicpLFxuICAgIHN0dWJBcnJheSA9IHJlcXVpcmUoJy4vc3R1YkFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICByZXR1cm4gYXJyYXlGaWx0ZXIobmF0aXZlR2V0U3ltYm9scyhvYmplY3QpLCBmdW5jdGlvbihzeW1ib2wpIHtcbiAgICByZXR1cm4gcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIHN5bWJvbCk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRTeW1ib2xzO1xuIiwidmFyIERhdGFWaWV3ID0gcmVxdWlyZSgnLi9fRGF0YVZpZXcnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBQcm9taXNlID0gcmVxdWlyZSgnLi9fUHJvbWlzZScpLFxuICAgIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIFdlYWtNYXAgPSByZXF1aXJlKCcuL19XZWFrTWFwJyksXG4gICAgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm9taXNlVGFnID0gJ1tvYmplY3QgUHJvbWlzZV0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzLCBzZXRzLCBhbmQgd2Vha21hcHMuICovXG52YXIgZGF0YVZpZXdDdG9yU3RyaW5nID0gdG9Tb3VyY2UoRGF0YVZpZXcpLFxuICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgIHByb21pc2VDdG9yU3RyaW5nID0gdG9Tb3VyY2UoUHJvbWlzZSksXG4gICAgc2V0Q3RvclN0cmluZyA9IHRvU291cmNlKFNldCksXG4gICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzIDwgNi5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGJhc2VHZXRUYWcodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogJyc7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFnO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VmFsdWU7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hDbGVhcjtcbiIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaERlbGV0ZTtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hHZXQ7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGFzO1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHRoaXMuc2l6ZSArPSB0aGlzLmhhcyhrZXkpID8gMCA6IDE7XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoU2V0O1xuIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG5cbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGUgPT0gJ251bWJlcicgfHxcbiAgICAgICh0eXBlICE9ICdzeW1ib2wnICYmIHJlSXNVaW50LnRlc3QodmFsdWUpKSkgJiZcbiAgICAgICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXlhYmxlO1xuIiwidmFyIGNvcmVKc0RhdGEgPSByZXF1aXJlKCcuL19jb3JlSnNEYXRhJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrZWQ7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQcm90b3R5cGU7XG4iLCIvKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlQ2xlYXI7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVEZWxldGU7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlR2V0O1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVIYXM7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVTZXQ7XG4iLCJ2YXIgSGFzaCA9IHJlcXVpcmUoJy4vX0hhc2gnKSxcbiAgICBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlQ2xlYXI7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVEZWxldGU7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlR2V0O1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVIYXM7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlU2V0O1xuIiwiLyoqXG4gKiBDb252ZXJ0cyBgbWFwYCB0byBpdHMga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUga2V5LXZhbHVlIHBhaXJzLlxuICovXG5mdW5jdGlvbiBtYXBUb0FycmF5KG1hcCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICBtYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gW2tleSwgdmFsdWVdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBUb0FycmF5O1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUNyZWF0ZTtcbiIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5cztcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIC8vIFVzZSBgdXRpbC50eXBlc2AgZm9yIE5vZGUuanMgMTArLlxuICAgIHZhciB0eXBlcyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlICYmIGZyZWVNb2R1bGUucmVxdWlyZSgndXRpbCcpLnR5cGVzO1xuXG4gICAgaWYgKHR5cGVzKSB7XG4gICAgICByZXR1cm4gdHlwZXM7XG4gICAgfVxuXG4gICAgLy8gTGVnYWN5IGBwcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKWAgZm9yIE5vZGUuanMgPCAxMC5cbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vZGVVdGlsO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuIiwiLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIEFkZHMgYHZhbHVlYCB0byB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGFkZFxuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAYWxpYXMgcHVzaFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2FjaGUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVBZGQodmFsdWUpIHtcbiAgdGhpcy5fX2RhdGFfXy5zZXQodmFsdWUsIEhBU0hfVU5ERUZJTkVEKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVBZGQ7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGluIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlSGFzKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVIYXM7XG4iLCIvKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFRvQXJyYXk7XG4iLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tDbGVhcjtcbiIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0RlbGV0ZTtcbiIsIi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0dldDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tIYXM7XG4iLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBkYXRhLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHRoaXMuc2l6ZSA9ICsrZGF0YS5zaXplO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja1NldDtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1NvdXJjZTtcbiIsIi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxO1xuIiwidmFyIGJhc2VJc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vX2Jhc2VJc0FyZ3VtZW50cycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcbiIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290JyksXG4gICAgc3R1YkZhbHNlID0gcmVxdWlyZSgnLi9zdHViRmFsc2UnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQnVmZmVyO1xuIiwidmFyIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWwnKTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhIGRlZXAgY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlXG4gKiBlcXVpdmFsZW50LlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBzdXBwb3J0cyBjb21wYXJpbmcgYXJyYXlzLCBhcnJheSBidWZmZXJzLCBib29sZWFucyxcbiAqIGRhdGUgb2JqZWN0cywgZXJyb3Igb2JqZWN0cywgbWFwcywgbnVtYmVycywgYE9iamVjdGAgb2JqZWN0cywgcmVnZXhlcyxcbiAqIHNldHMsIHN0cmluZ3MsIHN5bWJvbHMsIGFuZCB0eXBlZCBhcnJheXMuIGBPYmplY3RgIG9iamVjdHMgYXJlIGNvbXBhcmVkXG4gKiBieSB0aGVpciBvd24sIG5vdCBpbmhlcml0ZWQsIGVudW1lcmFibGUgcHJvcGVydGllcy4gRnVuY3Rpb25zIGFuZCBET01cbiAqIG5vZGVzIGFyZSBjb21wYXJlZCBieSBzdHJpY3QgZXF1YWxpdHksIGkuZS4gYD09PWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uaXNFcXVhbChvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBvYmplY3QgPT09IG90aGVyO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNFcXVhbCh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNFcXVhbDtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG4iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcbiIsInZhciBiYXNlSXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fYmFzZUlzVHlwZWRBcnJheScpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNUeXBlZEFycmF5ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KG5ldyBVaW50OEFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShbXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNUeXBlZEFycmF5ID0gbm9kZUlzVHlwZWRBcnJheSA/IGJhc2VVbmFyeShub2RlSXNUeXBlZEFycmF5KSA6IGJhc2VJc1R5cGVkQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNUeXBlZEFycmF5O1xuIiwidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXMgPSByZXF1aXJlKCcuL19iYXNlS2V5cycpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QpIDogYmFzZUtleXMob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGVtcHR5IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZW1wdHkgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheXMgPSBfLnRpbWVzKDIsIF8uc3R1YkFycmF5KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xuICogLy8gPT4gW1tdLCBbXV1cbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViQXJyYXk7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkZhbHNlO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAsMjAxMSwyMDEyLDIwMTMsMjAxNCBNb3JnYW4gUm9kZXJpY2sgaHR0cDovL3JvZGVyaWNrLmRrXG4gKiBMaWNlbnNlOiBNSVQgLSBodHRwOi8vbXJnbnJkcmNrLm1pdC1saWNlbnNlLm9yZ1xuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tcm9kZXJpY2svUHViU3ViSlNcbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3Rvcnkpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBQdWJTdWIgPSB7fTtcblxuICAgIGlmIChyb290LlB1YlN1Yikge1xuICAgICAgICBQdWJTdWIgPSByb290LlB1YlN1YjtcbiAgICAgICAgY29uc29sZS53YXJuKFwiUHViU3ViIGFscmVhZHkgbG9hZGVkLCB1c2luZyBleGlzdGluZyB2ZXJzaW9uXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QuUHViU3ViID0gUHViU3ViO1xuICAgICAgICBmYWN0b3J5KFB1YlN1Yik7XG4gICAgfVxuICAgIC8vIENvbW1vbkpTIGFuZCBOb2RlLmpzIG1vZHVsZSBzdXBwb3J0XG4gICAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jyl7XG4gICAgICAgIGlmIChtb2R1bGUgIT09IHVuZGVmaW5lZCAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gUHViU3ViOyAvLyBOb2RlLmpzIHNwZWNpZmljIGBtb2R1bGUuZXhwb3J0c2BcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRzLlB1YlN1YiA9IFB1YlN1YjsgLy8gQ29tbW9uSlMgbW9kdWxlIDEuMS4xIHNwZWNcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gUHViU3ViOyAvLyBDb21tb25KU1xuICAgIH1cbiAgICAvLyBBTUQgc3VwcG9ydFxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4gICAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKXtcbiAgICAgICAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gUHViU3ViOyB9KTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby11bmRlZiAqL1xuICAgIH1cblxufSgoIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdyApIHx8IHRoaXMsIGZ1bmN0aW9uIChQdWJTdWIpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBtZXNzYWdlcyA9IHt9LFxuICAgICAgICBsYXN0VWlkID0gLTEsXG4gICAgICAgIEFMTF9TVUJTQ1JJQklOR19NU0cgPSAnKic7XG5cbiAgICBmdW5jdGlvbiBoYXNLZXlzKG9iail7XG4gICAgICAgIHZhciBrZXk7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gb2JqKXtcbiAgICAgICAgICAgIGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSApe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB0aHJvd3MgdGhlIHBhc3NlZCBleGNlcHRpb24sIGZvciB1c2UgYXMgYXJndW1lbnQgZm9yIHNldFRpbWVvdXRcbiAgICAgKiBAYWxpYXMgdGhyb3dFeGNlcHRpb25cbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSBleCBBbiBFcnJvciBvYmplY3RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0aHJvd0V4Y2VwdGlvbiggZXggKXtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlVGhyb3dFeGNlcHRpb24oKXtcbiAgICAgICAgICAgIHRocm93IGV4O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGxTdWJzY3JpYmVyV2l0aERlbGF5ZWRFeGNlcHRpb25zKCBzdWJzY3JpYmVyLCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyKCBtZXNzYWdlLCBkYXRhICk7XG4gICAgICAgIH0gY2F0Y2goIGV4ICl7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCB0aHJvd0V4Y2VwdGlvbiggZXggKSwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxsU3Vic2NyaWJlcldpdGhJbW1lZGlhdGVFeGNlcHRpb25zKCBzdWJzY3JpYmVyLCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHN1YnNjcmliZXIoIG1lc3NhZ2UsIGRhdGEgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxpdmVyTWVzc2FnZSggb3JpZ2luYWxNZXNzYWdlLCBtYXRjaGVkTWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICB2YXIgc3Vic2NyaWJlcnMgPSBtZXNzYWdlc1ttYXRjaGVkTWVzc2FnZV0sXG4gICAgICAgICAgICBjYWxsU3Vic2NyaWJlciA9IGltbWVkaWF0ZUV4Y2VwdGlvbnMgPyBjYWxsU3Vic2NyaWJlcldpdGhJbW1lZGlhdGVFeGNlcHRpb25zIDogY2FsbFN1YnNjcmliZXJXaXRoRGVsYXllZEV4Y2VwdGlvbnMsXG4gICAgICAgICAgICBzO1xuXG4gICAgICAgIGlmICggIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggbWVzc2FnZXMsIG1hdGNoZWRNZXNzYWdlICkgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHMgaW4gc3Vic2NyaWJlcnMpe1xuICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc3Vic2NyaWJlcnMsIHMpKXtcbiAgICAgICAgICAgICAgICBjYWxsU3Vic2NyaWJlciggc3Vic2NyaWJlcnNbc10sIG9yaWdpbmFsTWVzc2FnZSwgZGF0YSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiggbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZGVsaXZlck5hbWVzcGFjZWQoKXtcbiAgICAgICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuXG4gICAgICAgICAgICAvLyBkZWxpdmVyIHRoZSBtZXNzYWdlIGFzIGl0IGlzIG5vd1xuICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UobWVzc2FnZSwgbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyk7XG5cbiAgICAgICAgICAgIC8vIHRyaW0gdGhlIGhpZXJhcmNoeSBhbmQgZGVsaXZlciBtZXNzYWdlIHRvIGVhY2ggbGV2ZWxcbiAgICAgICAgICAgIHdoaWxlKCBwb3NpdGlvbiAhPT0gLTEgKXtcbiAgICAgICAgICAgICAgICB0b3BpYyA9IHRvcGljLnN1YnN0ciggMCwgcG9zaXRpb24gKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCcuJyk7XG4gICAgICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UoIG1lc3NhZ2UsIHRvcGljLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGl2ZXJNZXNzYWdlKG1lc3NhZ2UsIEFMTF9TVUJTQ1JJQklOR19NU0csIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhc0RpcmVjdFN1YnNjcmliZXJzRm9yKCBtZXNzYWdlICkge1xuICAgICAgICB2YXIgdG9waWMgPSBTdHJpbmcoIG1lc3NhZ2UgKSxcbiAgICAgICAgICAgIGZvdW5kID0gQm9vbGVhbihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIG1lc3NhZ2VzLCB0b3BpYyApICYmIGhhc0tleXMobWVzc2FnZXNbdG9waWNdKSk7XG5cbiAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1lc3NhZ2VIYXNTdWJzY3JpYmVycyggbWVzc2FnZSApe1xuICAgICAgICB2YXIgdG9waWMgPSBTdHJpbmcoIG1lc3NhZ2UgKSxcbiAgICAgICAgICAgIGZvdW5kID0gaGFzRGlyZWN0U3Vic2NyaWJlcnNGb3IodG9waWMpIHx8IGhhc0RpcmVjdFN1YnNjcmliZXJzRm9yKEFMTF9TVUJTQ1JJQklOR19NU0cpLFxuICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG5cbiAgICAgICAgd2hpbGUgKCAhZm91bmQgJiYgcG9zaXRpb24gIT09IC0xICl7XG4gICAgICAgICAgICB0b3BpYyA9IHRvcGljLnN1YnN0ciggMCwgcG9zaXRpb24gKTtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuICAgICAgICAgICAgZm91bmQgPSBoYXNEaXJlY3RTdWJzY3JpYmVyc0Zvcih0b3BpYyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgc3luYywgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICBtZXNzYWdlID0gKHR5cGVvZiBtZXNzYWdlID09PSAnc3ltYm9sJykgPyBtZXNzYWdlLnRvU3RyaW5nKCkgOiBtZXNzYWdlO1xuXG4gICAgICAgIHZhciBkZWxpdmVyID0gY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiggbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApLFxuICAgICAgICAgICAgaGFzU3Vic2NyaWJlcnMgPSBtZXNzYWdlSGFzU3Vic2NyaWJlcnMoIG1lc3NhZ2UgKTtcblxuICAgICAgICBpZiAoICFoYXNTdWJzY3JpYmVycyApe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBzeW5jID09PSB0cnVlICl7XG4gICAgICAgICAgICBkZWxpdmVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCBkZWxpdmVyLCAwICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHVibGlzaGVzIHRoZSBtZXNzYWdlLCBwYXNzaW5nIHRoZSBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgcHVibGlzaFxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gcHVibGlzaFxuICAgICAqIEBwYXJhbSB7fSBkYXRhIFRoZSBkYXRhIHRvIHBhc3MgdG8gc3Vic2NyaWJlcnNcbiAgICAgKiBAcmV0dXJuIHsgQm9vbGVhbiB9XG4gICAgICovXG4gICAgUHViU3ViLnB1Ymxpc2ggPSBmdW5jdGlvbiggbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICByZXR1cm4gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgZmFsc2UsIFB1YlN1Yi5pbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFB1Ymxpc2hlcyB0aGUgbWVzc2FnZSBzeW5jaHJvbm91c2x5LCBwYXNzaW5nIHRoZSBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgcHVibGlzaFN5bmNcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHB1Ymxpc2hcbiAgICAgKiBAcGFyYW0ge30gZGF0YSBUaGUgZGF0YSB0byBwYXNzIHRvIHN1YnNjcmliZXJzXG4gICAgICogQHJldHVybiB7IEJvb2xlYW4gfVxuICAgICAqL1xuICAgIFB1YlN1Yi5wdWJsaXNoU3luYyA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHJldHVybiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCB0cnVlLCBQdWJTdWIuaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRoZSBwYXNzZWQgZnVuY3Rpb24gdG8gdGhlIHBhc3NlZCBtZXNzYWdlLiBFdmVyeSByZXR1cm5lZCB0b2tlbiBpcyB1bmlxdWUgYW5kIHNob3VsZCBiZSBzdG9yZWQgaWYgeW91IG5lZWQgdG8gdW5zdWJzY3JpYmVcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBzdWJzY3JpYmUgdG9cbiAgICAgKiBAcGFyYW0geyBGdW5jdGlvbiB9IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBhIG5ldyBtZXNzYWdlIGlzIHB1Ymxpc2hlZFxuICAgICAqIEByZXR1cm4geyBTdHJpbmcgfVxuICAgICAqL1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUgPSBmdW5jdGlvbiggbWVzc2FnZSwgZnVuYyApe1xuICAgICAgICBpZiAoIHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lc3NhZ2UgPSAodHlwZW9mIG1lc3NhZ2UgPT09ICdzeW1ib2wnKSA/IG1lc3NhZ2UudG9TdHJpbmcoKSA6IG1lc3NhZ2U7XG5cbiAgICAgICAgLy8gbWVzc2FnZSBpcyBub3QgcmVnaXN0ZXJlZCB5ZXRcbiAgICAgICAgaWYgKCAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBtZXNzYWdlcywgbWVzc2FnZSApICl7XG4gICAgICAgICAgICBtZXNzYWdlc1ttZXNzYWdlXSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9yY2luZyB0b2tlbiBhcyBTdHJpbmcsIHRvIGFsbG93IGZvciBmdXR1cmUgZXhwYW5zaW9ucyB3aXRob3V0IGJyZWFraW5nIHVzYWdlXG4gICAgICAgIC8vIGFuZCBhbGxvdyBmb3IgZWFzeSB1c2UgYXMga2V5IG5hbWVzIGZvciB0aGUgJ21lc3NhZ2VzJyBvYmplY3RcbiAgICAgICAgdmFyIHRva2VuID0gJ3VpZF8nICsgU3RyaW5nKCsrbGFzdFVpZCk7XG4gICAgICAgIG1lc3NhZ2VzW21lc3NhZ2VdW3Rva2VuXSA9IGZ1bmM7XG5cbiAgICAgICAgLy8gcmV0dXJuIHRva2VuIGZvciB1bnN1YnNjcmliaW5nXG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9O1xuXG4gICAgUHViU3ViLnN1YnNjcmliZUFsbCA9IGZ1bmN0aW9uKCBmdW5jICl7XG4gICAgICAgIHJldHVybiBQdWJTdWIuc3Vic2NyaWJlKEFMTF9TVUJTQ1JJQklOR19NU0csIGZ1bmMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRoZSBwYXNzZWQgZnVuY3Rpb24gdG8gdGhlIHBhc3NlZCBtZXNzYWdlIG9uY2VcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlT25jZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gc3Vic2NyaWJlIHRvXG4gICAgICogQHBhcmFtIHsgRnVuY3Rpb24gfSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gYSBuZXcgbWVzc2FnZSBpcyBwdWJsaXNoZWRcbiAgICAgKiBAcmV0dXJuIHsgUHViU3ViIH1cbiAgICAgKi9cbiAgICBQdWJTdWIuc3Vic2NyaWJlT25jZSA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBmdW5jICl7XG4gICAgICAgIHZhciB0b2tlbiA9IFB1YlN1Yi5zdWJzY3JpYmUoIG1lc3NhZ2UsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvLyBiZWZvcmUgZnVuYyBhcHBseSwgdW5zdWJzY3JpYmUgbWVzc2FnZVxuICAgICAgICAgICAgUHViU3ViLnVuc3Vic2NyaWJlKCB0b2tlbiApO1xuICAgICAgICAgICAgZnVuYy5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUHViU3ViO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIHN1YnNjcmlwdGlvbnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIGNsZWFyQWxsU3Vic2NyaXB0aW9uc1xuICAgICAqL1xuICAgIFB1YlN1Yi5jbGVhckFsbFN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjbGVhckFsbFN1YnNjcmlwdGlvbnMoKXtcbiAgICAgICAgbWVzc2FnZXMgPSB7fTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgc3Vic2NyaXB0aW9ucyBieSB0aGUgdG9waWNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIGNsZWFyQWxsU3Vic2NyaXB0aW9uc1xuICAgICAqIEByZXR1cm4geyBpbnQgfVxuICAgICAqL1xuICAgIFB1YlN1Yi5jbGVhclN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjbGVhclN1YnNjcmlwdGlvbnModG9waWMpe1xuICAgICAgICB2YXIgbTtcbiAgICAgICAgZm9yIChtIGluIG1lc3NhZ2VzKXtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDApe1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlc1ttXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgICBDb3VudCBzdWJzY3JpcHRpb25zIGJ5IHRoZSB0b3BpY1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgY291bnRTdWJzY3JpcHRpb25zXG4gICAgICogQHJldHVybiB7IEFycmF5IH1cbiAgICAqL1xuICAgIFB1YlN1Yi5jb3VudFN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjb3VudFN1YnNjcmlwdGlvbnModG9waWMpe1xuICAgICAgICB2YXIgbTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChtIGluIG1lc3NhZ2VzKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCBtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yICh0b2tlbiBpbiBtZXNzYWdlc1ttXSkge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICAgR2V0cyBzdWJzY3JpcHRpb25zIGJ5IHRoZSB0b3BpY1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgZ2V0U3Vic2NyaXB0aW9uc1xuICAgICovXG4gICAgUHViU3ViLmdldFN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBnZXRTdWJzY3JpcHRpb25zKHRvcGljKXtcbiAgICAgICAgdmFyIG07XG4gICAgICAgIHZhciBsaXN0ID0gW107XG4gICAgICAgIGZvciAobSBpbiBtZXNzYWdlcyl7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCBtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwKXtcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2gobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgc3Vic2NyaXB0aW9uc1xuICAgICAqXG4gICAgICogLSBXaGVuIHBhc3NlZCBhIHRva2VuLCByZW1vdmVzIGEgc3BlY2lmaWMgc3Vic2NyaXB0aW9uLlxuICAgICAqXG5cdCAqIC0gV2hlbiBwYXNzZWQgYSBmdW5jdGlvbiwgcmVtb3ZlcyBhbGwgc3Vic2NyaXB0aW9ucyBmb3IgdGhhdCBmdW5jdGlvblxuICAgICAqXG5cdCAqIC0gV2hlbiBwYXNzZWQgYSB0b3BpYywgcmVtb3ZlcyBhbGwgc3Vic2NyaXB0aW9ucyBmb3IgdGhhdCB0b3BpYyAoaGllcmFyY2h5KVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlT25jZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB8IEZ1bmN0aW9uIH0gdmFsdWUgQSB0b2tlbiwgZnVuY3Rpb24gb3IgdG9waWMgdG8gdW5zdWJzY3JpYmUgZnJvbVxuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgd2l0aCBhIHRva2VuXG4gICAgICogdmFyIHRva2VuID0gUHViU3ViLnN1YnNjcmliZSgnbXl0b3BpYycsIG15RnVuYyk7XG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKHRva2VuKTtcbiAgICAgKiBAZXhhbXBsZSAvLyBVbnN1YnNjcmliaW5nIHdpdGggYSBmdW5jdGlvblxuICAgICAqIFB1YlN1Yi51bnN1YnNjcmliZShteUZ1bmMpO1xuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgZnJvbSBhIHRvcGljXG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKCdteXRvcGljJyk7XG4gICAgICovXG4gICAgUHViU3ViLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICB2YXIgZGVzY2VuZGFudFRvcGljRXhpc3RzID0gZnVuY3Rpb24odG9waWMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbTtcbiAgICAgICAgICAgICAgICBmb3IgKCBtIGluIG1lc3NhZ2VzICl7XG4gICAgICAgICAgICAgICAgICAgIGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCBtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhIGRlc2NlbmRhbnQgb2YgdGhlIHRvcGljIGV4aXN0czpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzVG9waWMgICAgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCB2YWx1ZSkgfHwgZGVzY2VuZGFudFRvcGljRXhpc3RzKHZhbHVlKSApLFxuICAgICAgICAgICAgaXNUb2tlbiAgICA9ICFpc1RvcGljICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycsXG4gICAgICAgICAgICBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nLFxuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2UsXG4gICAgICAgICAgICBtLCBtZXNzYWdlLCB0O1xuXG4gICAgICAgIGlmIChpc1RvcGljKXtcbiAgICAgICAgICAgIFB1YlN1Yi5jbGVhclN1YnNjcmlwdGlvbnModmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICggbSBpbiBtZXNzYWdlcyApe1xuICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIG1lc3NhZ2VzLCBtICkgKXtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZXNbbV07XG5cbiAgICAgICAgICAgICAgICBpZiAoIGlzVG9rZW4gJiYgbWVzc2FnZVt2YWx1ZV0gKXtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VbdmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9rZW5zIGFyZSB1bmlxdWUsIHNvIHdlIGNhbiBqdXN0IHN0b3AgaGVyZVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKCB0IGluIG1lc3NhZ2UgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZSwgdCkgJiYgbWVzc2FnZVt0XSA9PT0gdmFsdWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlW3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59KSk7XG4iLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBORVdfR0FNRSA9ICduZXcgZ2FtZSc7XG5cbmV4cG9ydCBjbGFzcyBET01NYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc2V0VXBQbGF5QWdhaW5CdXR0b24oKTtcbiAgICBzZXROYW1lQ2xpY2tMaXN0ZW5lcnMoKTtcbiAgICBzZXRVcFJlc2V0QnV0dG9uKCk7XG4gIH1cblxuICBwb3B1bGF0ZUFjdGl2ZVBsYXllcnNCb2FyZChwbGF5ZXIpIHtcbiAgICBjb25zdCBib2FyZCA9IHBsYXllci5nYW1lYm9hcmQuYm9hcmQ7XG5cbiAgICBjb25zdCBib2FyZEdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2FyZEdyaWQuY2xhc3NMaXN0LmFkZCgnYm9hcmQtZ3JpZCcpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGlmIChib2FyZFtpXVtqXSA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdCA9ICdoaXQtc2hpcCc7XG4gICAgICAgIH0gZWxzZSBpZiAoYm9hcmRbaV1bal0gPT09ICdhdHRhY2tlZCcpIHtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdCA9ICdhdHRhY2tlZCc7XG5cbiAgICAgICAgICBjb25zdCBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBkb3QuY2xhc3NMaXN0LmFkZCgnZG90Jyk7XG4gICAgICAgICAgaXRlbS5hcHBlbmQoZG90KTtcbiAgICAgICAgfSBlbHNlIGlmIChib2FyZFtpXVtqXSAhPT0gbnVsbCkge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0ID0gJ3NoaXAnO1xuXG4gICAgICAgICAgaXRlbS5pZCA9IGAke2l9LSR7an1gO1xuXG4gICAgICAgICAgLy9kcmFnIGFuZCBkcm9wXG4gICAgICAgICAgaWYgKCFwbGF5ZXIuZ2FtZWJvYXJkLmhhc0JlZW5BdHRhY2tlZCkge1xuICAgICAgICAgICAgaXRlbS5kcmFnZ2FibGUgPSB0cnVlO1xuXG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIGV2ZW50LnRhcmdldC5pZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBsYXllci5nYW1lYm9hcmQuaGFzQmVlbkF0dGFja2VkKSB7XG4gICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3QgZHJvcHBlZElkID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQnKTtcblxuICAgICAgICAgICAgY29uc3QgeENvb3JkaW5hdGUgPSBkcm9wcGVkSWQuY2hhckF0KDApO1xuICAgICAgICAgICAgY29uc3QgeUNvb3JkaW5hdGUgPSBkcm9wcGVkSWQuY2hhckF0KDIpO1xuXG4gICAgICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLm1vdmVTaGlwKFxuICAgICAgICAgICAgICBwYXJzZUludCh4Q29vcmRpbmF0ZSksXG4gICAgICAgICAgICAgIHBhcnNlSW50KHlDb29yZGluYXRlKSxcbiAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgalxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZUFjdGl2ZVBsYXllcnNCb2FyZChwbGF5ZXIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdib2FyZC1pdGVtJyk7XG5cbiAgICAgICAgYm9hcmRHcmlkLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGxheWVyLmVsZW1lbnRRdWVyeSk7XG5cbiAgICBib2FyZENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBib2FyZENvbnRhaW5lci5hcHBlbmQoYm9hcmRHcmlkKTtcbiAgfVxuXG4gIHBvcHVsYXRlT3Bwb25lbnRzQm9hcmQocGxheWVyKSB7XG4gICAgY29uc3QgYm9hcmQgPSBwbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkO1xuXG4gICAgY29uc3QgYm9hcmRHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm9hcmRHcmlkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWdyaWQnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soaSwgaik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vcmVtb3ZlIGVsc2UgbGF0ZXIsIHBsYXllcnMgc2hvdWxkbid0IHNlZSBlYWNoIG90aGVycyBib2F0c1xuICAgICAgICBpZiAoYm9hcmRbaV1bal0gPT09ICdoaXQnKSB7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QgPSAnaGl0LXNoaXAnO1xuICAgICAgICB9IGVsc2UgaWYgKGJvYXJkW2ldW2pdID09PSAnYXR0YWNrZWQnKSB7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QgPSAnYXR0YWNrZWQnO1xuXG4gICAgICAgICAgY29uc3QgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgZG90LmNsYXNzTGlzdC5hZGQoJ2RvdCcpO1xuICAgICAgICAgIGl0ZW0uYXBwZW5kKGRvdCk7XG4gICAgICAgIH0gZWxzZSBpZiAoYm9hcmRbaV1bal0gIT09IG51bGwpIHtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdCA9ICdzaGlwJztcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYm9hcmQtaXRlbScpO1xuXG4gICAgICAgIGJvYXJkR3JpZC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBsYXllci5lbGVtZW50UXVlcnkpO1xuXG4gICAgYm9hcmRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgYm9hcmRDb250YWluZXIuYXBwZW5kKGJvYXJkR3JpZCk7XG4gIH1cblxuICBwb3B1bGF0ZUJvYXJkKGZpcnN0UGxheWVyLCBzZWNvbmRQbGF5ZXIpIHtcbiAgICBpZiAoZmlyc3RQbGF5ZXIuaXNBY3RpdmUpIHtcbiAgICAgIHRoaXMucG9wdWxhdGVBY3RpdmVQbGF5ZXJzQm9hcmQoZmlyc3RQbGF5ZXIpO1xuICAgICAgdGhpcy5wb3B1bGF0ZU9wcG9uZW50c0JvYXJkKHNlY29uZFBsYXllcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9wdWxhdGVBY3RpdmVQbGF5ZXJzQm9hcmQoc2Vjb25kUGxheWVyKTtcbiAgICAgIHRoaXMucG9wdWxhdGVPcHBvbmVudHNCb2FyZChmaXJzdFBsYXllcik7XG4gICAgfVxuICB9XG5cbiAgc2hvd0VuZERpYWxvZyh3aW5uZXIpIHtcbiAgICBjb25zdCBlbmREaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5kLWRpYWxvZycpO1xuICAgIGNvbnNvbGUubG9nKCd3aW4nKTtcblxuICAgIGlmICh3aW5uZXIudHlwZSA9PT0gJ2NvbXB1dGVyJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZC1kaWFsb2cgLm1lc3NhZ2UnKS50ZXh0Q29udGVudCA9XG4gICAgICAgICdZb3UgbG9zZS4gOi8nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5kLWRpYWxvZyAubWVzc2FnZScpLnRleHRDb250ZW50ID1cbiAgICAgICAgJ1lvdSB3b24sIGNvbmdyYXR1bGF0aW9ucyEnO1xuICAgIH1cblxuICAgIGVuZERpYWxvZy5zaG93TW9kYWwoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRVcFBsYXlBZ2FpbkJ1dHRvbigpIHtcbiAgY29uc3QgcGxheUFnYWluQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXktYWdhaW4tYnV0dG9uJyk7XG5cbiAgcGxheUFnYWluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIFB1YlN1Yi5wdWJsaXNoKE5FV19HQU1FKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmQtZGlhbG9nJykuY2xvc2UoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldE5hbWVDbGlja0xpc3RlbmVycygpIHtcbiAgY29uc3QgY2hhbmdlTmFtZURpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2UtbmFtZXMtZGlhbG9nJyk7XG5cbiAgY29uc3QgcGxheWVyc05hbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGxheWVycy1uYW1lJyk7XG5cbiAgZm9yIChjb25zdCBlbGVtZW50IG9mIHBsYXllcnNOYW1lcykge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjaGFuZ2VOYW1lRGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgY2hhbmdlTmFtZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbmdlLW5hbWVzLWRpYWxvZyBmb3JtJyk7XG5cbiAgY2hhbmdlTmFtZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHVwZGF0ZU5hbWVzKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpcnN0LW5hbWUtaW5wdXQnKS52YWx1ZSxcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWNvbmQtbmFtZS1pbnB1dCcpLnZhbHVlXG4gICAgKTtcblxuICAgIGNoYW5nZU5hbWVGb3JtLnJlc2V0KCk7XG4gICAgY2hhbmdlTmFtZURpYWxvZy5jbG9zZSgpO1xuICB9KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNoYW5nZU5hbWVEaWFsb2cuY2xvc2UoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZU5hbWVzKG5hbWUxLCBuYW1lMikge1xuICBjb25zdCBmaXJzdE5hbWVQbGF5ZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLmZpcnN0LXBsYXllciAucGxheWVycy1uYW1lJ1xuICApO1xuICBjb25zdCBzZWNvbmROYW1lUGxheWVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy5zZWNvbmQtcGxheWVyIC5wbGF5ZXJzLW5hbWUnXG4gICk7XG5cbiAgZmlyc3ROYW1lUGxheWVyTmFtZS50ZXh0Q29udGVudCA9IG5hbWUxLnRyaW0oKSA9PT0gJycgPyAnUGxheWVyIDEnIDogbmFtZTE7XG4gIHNlY29uZE5hbWVQbGF5ZXJOYW1lLnRleHRDb250ZW50ID0gbmFtZTIudHJpbSgpID09PSAnJyA/ICdQbGF5ZXIgMicgOiBuYW1lMjtcblxuICBjb25zdCBDSEFOR0VfTkFNRVMgPSAnY2hhbmdlIG5hbWVzJztcbiAgUHViU3ViLnB1Ymxpc2goQ0hBTkdFX05BTUVTLCBbbmFtZTEsIG5hbWUyXSk7XG59XG5cbmZ1bmN0aW9uIHNldFVwUmVzZXRCdXR0b24oKSB7XG4gIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0LWJ1dHRvbicpO1xuXG4gIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIFB1YlN1Yi5wdWJsaXNoKE5FV19HQU1FKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwJztcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC9pc0VxdWFsJztcblxuZXhwb3J0IGNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMCB9LCAoKSA9PiBBcnJheSgxMCkuZmlsbChudWxsKSk7XG4gICAgdGhpcy5taXNzZWQgPSBbXTtcblxuICAgIC8vdHJhY2tzIGlmIHRoZSBib2FyZCBoYXMgYmVlbiBhdHRhY2tlZCBmb3IgdGhlIHB1cnBvc2Ugb2YgZHJhZyBhbmQgZHJvcFxuICAgIHRoaXMuaGFzQmVlbkF0dGFja2VkID0gZmFsc2U7XG4gIH1cblxuICAjaXNFbXB0eSh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuYm9hcmRbeF1beV0gPT09IG51bGw7XG4gIH1cblxuICBwbGFjZVNoaXAoc2hpcCwgeCwgeSwgb3JpZW50YXRpb24pIHtcbiAgICAvL2NoZWNraW5nIGlmIHRoZXJlIGlzIGZyZWUgc3BhY2UgaW4gYW5kIGFyb3VuZCB0aGUgY2hvc2VuIGFyZWFcbiAgICAvL2Nhc2UgZm9yIGEgaG9yaXpvbnRhbGx5IGFsaWduZWQgc2hpcFxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAvL2NoZWNraW5nIGlmIHNoaXAgaXMgdG9vIGxhcmdlXG4gICAgICBpZiAoeSArIHNoaXAubGVuZ3RoID4gMTApIHJldHVybiBmYWxzZTtcblxuICAgICAgaWYgKCF0aGlzLmNhblNoaXBCZVBsYWNlZEhvcml6b250YWxseShzaGlwLmxlbmd0aCwgeCwgeSkpIHJldHVybiBmYWxzZTtcblxuICAgICAgLy9wbGFjaW5nIGEgc2hpcFxuICAgICAgZm9yIChsZXQgaiA9IHk7IGogPCB5ICsgc2hpcC5sZW5ndGg7IGorKykge1xuICAgICAgICB0aGlzLmJvYXJkW3hdW2pdID0gc2hpcDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vY2FzZSBmb3IgYSB2ZXJ0aWNhbGx5IGFsaWduZWQgc2hpcFxuICAgIGVsc2Uge1xuICAgICAgLy9jaGVja2luZyBpZiBzaGlwIGlzIHRvbyBsYXJnZVxuICAgICAgaWYgKHggKyBzaGlwLmxlbmd0aCA+IDEwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGlmICghdGhpcy5jYW5TaGlwQmVQbGFjZWRWZXJ0aWNhbGx5KHNoaXAubGVuZ3RoLCB4LCB5KSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAvL3BsYWNpbmcgYSBzaGlwXG4gICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbaV1beV0gPSBzaGlwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjYW5TaGlwQmVQbGFjZWRIb3Jpem9udGFsbHkobGVuZ3RoLCB4LCB5LCBzaGlwRXhjZXB0aW9uID0gMCkge1xuICAgIGZvciAobGV0IGkgPSBNYXRoLm1heCh4IC0gMSwgMCk7IGkgPD0gTWF0aC5taW4oOSwgeCArIDEpOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSBNYXRoLm1heCgwLCB5IC0gMSk7IGogPD0gTWF0aC5taW4oOSwgeSArIGxlbmd0aCk7IGorKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIXRoaXMuI2lzRW1wdHkoaSwgaikgJiZcbiAgICAgICAgICB0aGlzLmJvYXJkW2ldW2pdICYmXG4gICAgICAgICAgIWlzRXF1YWwodGhpcy5ib2FyZFtpXVtqXSwgc2hpcEV4Y2VwdGlvbilcbiAgICAgICAgKVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNhblNoaXBCZVBsYWNlZFZlcnRpY2FsbHkobGVuZ3RoLCB4LCB5LCBzaGlwRXhjZXB0aW9uID0gMCkge1xuICAgIGZvciAobGV0IGogPSBNYXRoLm1heCgwLCB5IC0gMSk7IGogPD0gTWF0aC5taW4oOSwgeSArIDEpOyBqKyspIHtcbiAgICAgIGZvciAobGV0IGkgPSBNYXRoLm1heCgwLCB4IC0gMSk7IGkgPD0gTWF0aC5taW4oOSwgeCArIGxlbmd0aCk7IGkrKykge1xuICAgICAgICBpZiAoIXRoaXMuI2lzRW1wdHkoaSwgaikgJiYgIWlzRXF1YWwodGhpcy5ib2FyZFtpXVtqXSwgc2hpcEV4Y2VwdGlvbikpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgIHRoaXMuaGFzQmVlbkF0dGFja2VkID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLmJvYXJkW3hdW3ldID09PSBudWxsKSB7XG4gICAgICB0aGlzLmJvYXJkW3hdW3ldID0gJ2F0dGFja2VkJztcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdGhpcy5ib2FyZFt4XVt5XSAhPT0gbnVsbCAmJlxuICAgICAgdGhpcy5ib2FyZFt4XVt5XSAhPT0gJ2hpdCcgJiZcbiAgICAgIHRoaXMuYm9hcmRbeF1beV0gIT09ICdhdHRhY2tlZCdcbiAgICApIHtcbiAgICAgIHRoaXMuYm9hcmRbeF1beV0uaGl0KCk7XG4gICAgICB0aGlzLmJvYXJkW3hdW3ldID0gJ2hpdCc7XG5cbiAgICAgIGNvbnN0IFNISVBfSElUID0gJ3NoaXAgaGl0JztcbiAgICAgIFB1YlN1Yi5wdWJsaXNoKFNISVBfSElUKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgU0hJUF9NSVNTRUQgPSAnc2hpcCBtaXNzZWQnO1xuICAgIFB1YlN1Yi5wdWJsaXNoKFNISVBfTUlTU0VEKTtcblxuICAgIHRoaXMubWlzc2VkLnB1c2goWzYsIDRdKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBoYXZlQWxsQmVlblN1bmsoKSB7XG4gICAgcmV0dXJuICF0aGlzLmJvYXJkLnNvbWUoKHJvdykgPT5cbiAgICAgIHJvdy5zb21lKChpdGVtKSA9PiBpdGVtICE9PSBudWxsICYmIGl0ZW0gIT09ICdoaXQnICYmIGl0ZW0gIT09ICdhdHRhY2tlZCcpXG4gICAgKTtcbiAgfVxuXG4gICNpc1Bvc2l0aW9uVmFsaWQoeCwgeSkge1xuICAgIHJldHVybiB4ID49IDAgJiYgeCA8PSA5ICYmIHkgPj0gMCAmJiB5IDw9IDk7XG4gIH1cblxuICBnZXRNb3ZlZFNoaXBQb3NpdGlvbnMob3JpZ2luYWxYLCBvcmlnaW5hbFksIG5ld1gsIG5ld1kpIHtcbiAgICBjb25zdCBkaXJlY3Rpb25zID0gW1xuICAgICAgeyB4OiAtMSwgeTogMCB9LFxuICAgICAgeyB4OiAxLCB5OiAwIH0sXG4gICAgICB7IHg6IDAsIHk6IDEgfSxcbiAgICAgIHsgeDogMCwgeTogLTEgfSxcbiAgICBdO1xuXG4gICAgbGV0IG9sZFBvc2l0aW9ucyA9IFtbb3JpZ2luYWxYLCBvcmlnaW5hbFldXTtcbiAgICBsZXQgbmV3UG9zaXRpb25zID0gW1tuZXdYLCBuZXdZXV07XG5cbiAgICBmb3IgKGxldCBkaXJlY3Rpb25JbmRleCA9IDA7IGRpcmVjdGlvbkluZGV4IDw9IDM7IGRpcmVjdGlvbkluZGV4KyspIHtcbiAgICAgIGxldCB4TW92ZSA9IGRpcmVjdGlvbnNbZGlyZWN0aW9uSW5kZXhdLng7XG4gICAgICBsZXQgeU1vdmUgPSBkaXJlY3Rpb25zW2RpcmVjdGlvbkluZGV4XS55O1xuXG4gICAgICAvL2Z1bmN0aW9uICNpc0VtcHR5IG1heSBmYWlsIGlmICh4LHkpIGlmIG91dCBvZiBib2FyZCBib3VuZHMsIHNvIGl0IG11c3QgYmUgaW4gc2Vjb25kIHBsYWNlXG4gICAgICB3aGlsZSAoXG4gICAgICAgIHRoaXMuI2lzUG9zaXRpb25WYWxpZChvcmlnaW5hbFggKyB4TW92ZSwgb3JpZ2luYWxZICsgeU1vdmUpICYmXG4gICAgICAgICF0aGlzLiNpc0VtcHR5KG9yaWdpbmFsWCArIHhNb3ZlLCBvcmlnaW5hbFkgKyB5TW92ZSlcbiAgICAgICkge1xuICAgICAgICBjb25zdCBuZXdYSXRlbSA9IG5ld1ggKyB4TW92ZTtcbiAgICAgICAgY29uc3QgbmV3WUl0ZW0gPSBuZXdZICsgeU1vdmU7XG5cbiAgICAgICAgaWYgKCF0aGlzLiNpc1Bvc2l0aW9uVmFsaWQobmV3WEl0ZW0sIG5ld1lJdGVtKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLiNpc0VtcHR5KG5ld1hJdGVtLCBuZXdZSXRlbSkgfHxcbiAgICAgICAgICBpc0VxdWFsKFxuICAgICAgICAgICAgdGhpcy5ib2FyZFtuZXdYSXRlbV1bbmV3WUl0ZW1dLFxuICAgICAgICAgICAgdGhpcy5ib2FyZFtvcmlnaW5hbFhdW29yaWdpbmFsWV1cbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIG5ld1Bvc2l0aW9ucy5wdXNoKFtuZXdYSXRlbSwgbmV3WUl0ZW1dKTtcbiAgICAgICAgICBvbGRQb3NpdGlvbnMucHVzaChbb3JpZ2luYWxYICsgeE1vdmUsIG9yaWdpbmFsWSArIHlNb3ZlXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgeE1vdmUgPSBkaXJlY3Rpb25zW2RpcmVjdGlvbkluZGV4XS54ICsgeE1vdmU7XG4gICAgICAgIHlNb3ZlID0gZGlyZWN0aW9uc1tkaXJlY3Rpb25JbmRleF0ueSArIHlNb3ZlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdQb3NpdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLmNhblNoaXBCZVBsYWNlZEhvcml6b250YWxseShcbiAgICAgICAgICBuZXdQb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIG5ld1Bvc2l0aW9uc1swXVswXSxcbiAgICAgICAgICBuZXdQb3NpdGlvbnNbMF1bMV0sXG4gICAgICAgICAgdGhpcy5ib2FyZFtvcmlnaW5hbFhdW29yaWdpbmFsWV1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4geyBuZXdQb3NpdGlvbnM6IG5ld1Bvc2l0aW9ucywgb2xkUG9zaXRpb25zOiBvbGRQb3NpdGlvbnMgfTtcbiAgICB9XG4gICAgLy9ob3Jpem9udGFsXG4gICAgZWxzZSBpZiAobmV3UG9zaXRpb25zWzBdWzBdID09PSBuZXdQb3NpdGlvbnNbMV1bMF0pIHtcbiAgICAgIG5ld1Bvc2l0aW9ucy5zb3J0KChhLCBiKSA9PiBhWzFdIC0gYlsxXSk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuY2FuU2hpcEJlUGxhY2VkSG9yaXpvbnRhbGx5KFxuICAgICAgICAgIG5ld1Bvc2l0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgbmV3UG9zaXRpb25zWzBdWzBdLFxuICAgICAgICAgIG5ld1Bvc2l0aW9uc1swXVsxXSxcbiAgICAgICAgICB0aGlzLmJvYXJkW29yaWdpbmFsWF1bb3JpZ2luYWxZXVxuICAgICAgICApXG4gICAgICApXG4gICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgb2xkUG9zaXRpb25zLnNvcnQoKGEsIGIpID0+IGFbMV0gLSBiWzFdKTtcbiAgICB9XG4gICAgLy92ZXJ0aWNhbFxuICAgIGVsc2UgaWYgKG5ld1Bvc2l0aW9uc1swXVsxXSA9PT0gbmV3UG9zaXRpb25zWzFdWzFdKSB7XG4gICAgICBuZXdQb3NpdGlvbnMuc29ydCgoYSwgYikgPT4gYVswXSAtIGJbMF0pO1xuXG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLmNhblNoaXBCZVBsYWNlZFZlcnRpY2FsbHkoXG4gICAgICAgICAgbmV3UG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBuZXdQb3NpdGlvbnNbMF1bMF0sXG4gICAgICAgICAgbmV3UG9zaXRpb25zWzBdWzFdLFxuICAgICAgICAgIHRoaXMuYm9hcmRbb3JpZ2luYWxYXVtvcmlnaW5hbFldXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBvbGRQb3NpdGlvbnMuc29ydCgoYSwgYikgPT4gYVswXSAtIGJbMF0pO1xuICAgIH1cblxuICAgIHJldHVybiB7IG5ld1Bvc2l0aW9uczogbmV3UG9zaXRpb25zLCBvbGRQb3NpdGlvbnM6IG9sZFBvc2l0aW9ucyB9O1xuICB9XG5cbiAgLy9sb2dpYyBmb3IgbW92aW5nIHRoZSBzaGlwIHNob3VsZCBiZSBsb2NhdGVkIGhlcmUsIG5vdCBpbiBkb21tYW5hZ2VyLCBmb2N1cyBvZiBkb21tYW5hZ2VyIHNob3VsZCBiZSB0aGUgRE9NLCBkaXNwbGF5aW5nIGRhdGFcbiAgbW92ZVNoaXAob3JpZ2luYWxYLCBvcmlnaW5hbFksIG5ld1gsIG5ld1kpIHtcbiAgICBpZiAoXG4gICAgICAob3JpZ2luYWxYID09PSBuZXdYICYmIG9yaWdpbmFsWSA9PT0gbmV3WSkgfHxcbiAgICAgICghdGhpcy4jaXNFbXB0eShuZXdYLCBuZXdZKSAmJlxuICAgICAgICAhaXNFcXVhbCh0aGlzLmJvYXJkW29yaWdpbmFsWF1bb3JpZ2luYWxZXSwgdGhpcy5ib2FyZFtuZXdYXVtuZXdZXSkpXG4gICAgKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgcG9zaXRpb25zID0gdGhpcy5nZXRNb3ZlZFNoaXBQb3NpdGlvbnMoXG4gICAgICBvcmlnaW5hbFgsXG4gICAgICBvcmlnaW5hbFksXG4gICAgICBuZXdYLFxuICAgICAgbmV3WVxuICAgICk7XG5cbiAgICBpZiAoIXBvc2l0aW9ucykgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy9yZW1vdmUgdGhlIG9sZCBzaGlwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NpdGlvbnMub2xkUG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBbeE9sZCwgeU9sZF0gPSBwb3NpdGlvbnMub2xkUG9zaXRpb25zW2ldO1xuXG4gICAgICB0aGlzLmJvYXJkW3hPbGRdW3lPbGRdID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLnBsYWNlU2hpcChcbiAgICAgIG5ldyBTaGlwKHBvc2l0aW9ucy5uZXdQb3NpdGlvbnMubGVuZ3RoKSxcbiAgICAgIHBvc2l0aW9ucy5uZXdQb3NpdGlvbnNbMF1bMF0sXG4gICAgICBwb3NpdGlvbnMubmV3UG9zaXRpb25zWzBdWzFdLFxuICAgICAgcG9zaXRpb25zLm5ld1Bvc2l0aW9ucy5sZW5ndGggPT09IDFcbiAgICAgICAgPyAnaG9yaXpvbnRhbCdcbiAgICAgICAgOiBwb3NpdGlvbnMubmV3UG9zaXRpb25zWzBdWzBdID09PSBwb3NpdGlvbnMubmV3UG9zaXRpb25zWzFdWzBdXG4gICAgICAgICAgPyAnaG9yaXpvbnRhbCdcbiAgICAgICAgICA6ICd2ZXJ0aWNhbCdcbiAgICApO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcblxuLy9Ud28gdHlwZXMgb2YgcGxheWVyczogcmVhbCBhbmQgY29tcHV0ZXIgcGxheWVyXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgdHlwZSwgZWxlbWVudFF1ZXJ5LCBpc0FjdGl2ZSA9IGZhbHNlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuZWxlbWVudFF1ZXJ5ID0gZWxlbWVudFF1ZXJ5O1xuICAgIHRoaXMuaXNBY3RpdmUgPSBpc0FjdGl2ZTtcbiAgfVxuXG4gIHNldEFzQWN0aXZlKCkge1xuICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgc2V0QXNPcHBvbmVudCgpIHtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICBjaGFuZ2VOYW1lKG5ld05hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMudGltZXNIaXQgPSAwO1xuICAgIHRoaXMuaGFzQmVlblN1bmsgPSBmYWxzZTtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICB0aGlzLnRpbWVzSGl0ICs9IDE7XG5cbiAgICBpZiAodGhpcy50aW1lc0hpdCA9PT0gdGhpcy5sZW5ndGgpIHRoaXMuaGFzQmVlblN1bmsgPSB0cnVlO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLmhhc0JlZW5TdW5rO1xuICB9XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWJsb2NrLWRpbWVuc2lvbjogbWluKDUwcHgsIGNhbGMoNHZ3KSk7XG4gIC0tcHJpbWFyeS1jb2xvcjogIzRmMjA5YjtcbiAgLS1saWdodGVyLWNvbG9yOiAjN2U4N2ZmO1xufVxuXG4qIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi8qRGVmYXVsdCBzdHlsZXMqL1xuYm9keSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxucCxcbnVsW2NsYXNzXSxcbm9sW2NsYXNzXSxcbmxpLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmJsb2NrcXVvdGUsXG5kbCxcbmRkIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcbn1cblxuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMnB4IDE4cHg7XG59XG5cbmhlYWRlciBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmZpcnN0LXBsYXllcixcbi5zZWNvbmQtcGxheWVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDUwJTtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uYm9hcmQtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCB2YXIoLS1ibG9jay1kaW1lbnNpb24pKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIHZhcigtLWJsb2NrLWRpbWVuc2lvbikpO1xufVxuXG4uYm9hcmQtaXRlbSB7XG4gIGhlaWdodDogdmFyKC0tYmxvY2stZGltZW5zaW9uKTtcbiAgd2lkdGg6IHZhcigtLWJsb2NrLWRpbWVuc2lvbik7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG59XG5cbi5ib2FyZC1pdGVtOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlci1jb2xvcik7XG59XG5cbi5oaXQtc2hpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmctdG9wOiAtNHB4O1xufVxuXG4uaGl0LXNoaXA6OmJlZm9yZSxcbi5oaXQtc2hpcDo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuLmhpdC1zaGlwOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5oaXQtc2hpcDo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4uYXR0YWNrZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmRvdCB7XG4gIHdpZHRoOiBjYWxjKHZhcigtLWJsb2NrLWRpbWVuc2lvbikgLyAzKTtcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJsb2NrLWRpbWVuc2lvbikgLyAzKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuXG5kaWFsb2cge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5lbmQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbn1cblxuLmVuZC1kaWFsb2cgcCB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi5lbmQtZGlhbG9nIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uY2hhbmdlLW5hbWVzLWRpYWxvZyBmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5jaGFuZ2UtbmFtZXMtZGlhbG9nIGlucHV0LFxuLmNoYW5nZS1uYW1lcy1kaWFsb2cgYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbn1cblxuLmNoYW5nZS1uYW1lcy1kaWFsb2cgaW5wdXRbdHlwZT0ndGV4dCddIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcbn1cblxuLmNoYW5nZS1uYW1lcy1kaWFsb2cgaW5wdXRbdHlwZT0nc3VibWl0J10ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbmJ1dHRvbjpob3Zlcixcbi5wbGF5ZXJzLW5hbWU6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuODtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVDQUF1QztFQUN2Qyx3QkFBd0I7RUFDeEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBLGlCQUFpQjtBQUNqQjs7Ozs7Ozs7Ozs7Ozs7RUFjRSxTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYix5REFBeUQ7RUFDekQsc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLDZCQUE2QjtFQUM3QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBOztFQUVFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tYmxvY2stZGltZW5zaW9uOiBtaW4oNTBweCwgY2FsYyg0dncpKTtcXG4gIC0tcHJpbWFyeS1jb2xvcjogIzRmMjA5YjtcXG4gIC0tbGlnaHRlci1jb2xvcjogIzdlODdmZjtcXG59XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLypEZWZhdWx0IHN0eWxlcyovXFxuYm9keSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5wLFxcbnVsW2NsYXNzXSxcXG5vbFtjbGFzc10sXFxubGksXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMTJweCAxOHB4O1xcbn1cXG5cXG5oZWFkZXIgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiA4cHggMjBweDtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZmlyc3QtcGxheWVyLFxcbi5zZWNvbmQtcGxheWVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLmJvYXJkLWdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCB2YXIoLS1ibG9jay1kaW1lbnNpb24pKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCB2YXIoLS1ibG9jay1kaW1lbnNpb24pKTtcXG59XFxuXFxuLmJvYXJkLWl0ZW0ge1xcbiAgaGVpZ2h0OiB2YXIoLS1ibG9jay1kaW1lbnNpb24pO1xcbiAgd2lkdGg6IHZhcigtLWJsb2NrLWRpbWVuc2lvbik7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbn1cXG5cXG4uYm9hcmQtaXRlbTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItY29sb3IpO1xcbn1cXG5cXG4uaGl0LXNoaXAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nLXRvcDogLTRweDtcXG59XFxuXFxuLmhpdC1zaGlwOjpiZWZvcmUsXFxuLmhpdC1zaGlwOjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmhpdC1zaGlwOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4uaGl0LXNoaXA6OmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxufVxcblxcbi5hdHRhY2tlZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZG90IHtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWJsb2NrLWRpbWVuc2lvbikgLyAzKTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1ibG9jay1kaW1lbnNpb24pIC8gMyk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLmVuZC1kaWFsb2ctY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uZW5kLWRpYWxvZyBwIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbi5lbmQtZGlhbG9nIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4uY2hhbmdlLW5hbWVzLWRpYWxvZyBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5jaGFuZ2UtbmFtZXMtZGlhbG9nIGlucHV0LFxcbi5jaGFuZ2UtbmFtZXMtZGlhbG9nIGJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxufVxcblxcbi5jaGFuZ2UtbmFtZXMtZGlhbG9nIGlucHV0W3R5cGU9J3RleHQnXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xcbn1cXG5cXG4uY2hhbmdlLW5hbWVzLWRpYWxvZyBpbnB1dFt0eXBlPSdzdWJtaXQnXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICNmZmY7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcblxcbmJ1dHRvbjpob3ZlcixcXG4ucGxheWVycy1uYW1lOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgRE9NTWFuYWdlciB9IGZyb20gJy4vZG9tTWFuYWdlci5qcyc7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllci5qcyc7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwLmpzJztcbmltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJztcblxuY29uc3QgU0hJUF9ISVQgPSAnc2hpcCBoaXQnO1xuY29uc3QgU0hJUF9NSVNTRUQgPSAnc2hpcCBtaXNzZWQnO1xuY29uc3QgTkVXX0dBTUUgPSAnbmV3IGdhbWUnO1xuY29uc3QgQ0hBTkdFX05BTUVTID0gJ2NoYW5nZSBuYW1lcyc7XG5cbmxldCBkb20gPSBuZXcgRE9NTWFuYWdlcigpO1xubGV0IGZpcnN0UGxheWVyO1xubGV0IHNlY29uZFBsYXllcjtcblxuZnVuY3Rpb24gc3RhcnRHYW1lV2l0aEJvdCgpIHtcbiAgZmlyc3RQbGF5ZXIgPSBuZXcgUGxheWVyKFxuICAgICdQbGF5ZXIgMScsXG4gICAgJ3JlYWwnLFxuICAgICcuZmlyc3QtcGxheWVyIC5ib2FyZC1ncmlkLWNvbnRhaW5lcicsXG4gICAgdHJ1ZVxuICApO1xuICBzZWNvbmRQbGF5ZXIgPSBuZXcgUGxheWVyKFxuICAgICdQbGF5ZXIgMicsXG4gICAgJ2NvbXB1dGVyJyxcbiAgICAnLnNlY29uZC1wbGF5ZXIgLmJvYXJkLWdyaWQtY29udGFpbmVyJ1xuICApO1xuXG4gIHJhbmRvbWl6ZVNoaXBzKGZpcnN0UGxheWVyKTtcbiAgcmFuZG9taXplU2hpcHMoc2Vjb25kUGxheWVyKTtcblxuICBkb20ucG9wdWxhdGVCb2FyZChmaXJzdFBsYXllciwgc2Vjb25kUGxheWVyKTtcbn1cblxuZnVuY3Rpb24gcmFuZG9taXplU2hpcHMocGxheWVyKSB7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDU7IGkrKykge1xuICAgIGxldCBzaGlwUGxhY2VkID0gZmFsc2U7XG5cbiAgICB3aGlsZSAoIXNoaXBQbGFjZWQpIHtcbiAgICAgIHNoaXBQbGFjZWQgPSBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgbmV3IFNoaXAoaSksXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgICAgICBNYXRoLnJhbmRvbSgpID4gMC41ID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJ1xuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZUJvdE1vdmUoKSB7XG4gIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgd2hpbGUgKFxuICAgIGZpcnN0UGxheWVyLmdhbWVib2FyZC5ib2FyZFt4XVt5XSA9PT0gbnVsbCB8fFxuICAgIGZpcnN0UGxheWVyLmdhbWVib2FyZC5ib2FyZFt4XVt5XSBpbnN0YW5jZW9mIFNoaXBcbiAgKSB7XG4gICAgZmlyc3RQbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tGb3JXaW5uZXIoKSB7XG4gIGlmIChmaXJzdFBsYXllci5nYW1lYm9hcmQuaGF2ZUFsbEJlZW5TdW5rKCkpIGRvbS5zaG93RW5kRGlhbG9nKHNlY29uZFBsYXllcik7XG4gIGVsc2UgaWYgKHNlY29uZFBsYXllci5nYW1lYm9hcmQuaGF2ZUFsbEJlZW5TdW5rKCkpXG4gICAgZG9tLnNob3dFbmREaWFsb2coZmlyc3RQbGF5ZXIpO1xufVxuXG5QdWJTdWIuc3Vic2NyaWJlKFNISVBfSElULCAoKSA9PiB7XG4gIGlmIChzZWNvbmRQbGF5ZXIuaXNBY3RpdmUgPT09IHRydWUpIHtcbiAgICBtYWtlQm90TW92ZSgpO1xuICB9XG5cbiAgZG9tLnBvcHVsYXRlQm9hcmQoZmlyc3RQbGF5ZXIsIHNlY29uZFBsYXllcik7XG4gIGNoZWNrRm9yV2lubmVyKCk7XG59KTtcblxuUHViU3ViLnN1YnNjcmliZShTSElQX01JU1NFRCwgKCkgPT4ge1xuICBpZiAoZmlyc3RQbGF5ZXIuaXNBY3RpdmUpIHtcbiAgICBmaXJzdFBsYXllci5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIHNlY29uZFBsYXllci5pc0FjdGl2ZSA9IHRydWU7XG5cbiAgICBtYWtlQm90TW92ZSgpO1xuICB9IGVsc2Uge1xuICAgIGZpcnN0UGxheWVyLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICBzZWNvbmRQbGF5ZXIuaXNBY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGRvbS5wb3B1bGF0ZUJvYXJkKGZpcnN0UGxheWVyLCBzZWNvbmRQbGF5ZXIpO1xuICBjaGVja0Zvcldpbm5lcigpO1xufSk7XG5cblB1YlN1Yi5zdWJzY3JpYmUoTkVXX0dBTUUsICgpID0+IHN0YXJ0R2FtZVdpdGhCb3QoKSk7XG5cblB1YlN1Yi5zdWJzY3JpYmUoQ0hBTkdFX05BTUVTLCAobWVzc2FnZSwgbmV3TmFtZXMpID0+IHtcbiAgZmlyc3RQbGF5ZXIuY2hhbmdlTmFtZShuZXdOYW1lc1swXSk7XG4gIGZpcnN0UGxheWVyLmNoYW5nZU5hbWUobmV3TmFtZXNbMV0pO1xufSk7XG5cbnN0YXJ0R2FtZVdpdGhCb3QoKTtcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJpZCIsIl9rIiwicHVzaCIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJnZXROYXRpdmUiLCJyZXF1aXJlIiwicm9vdCIsIkRhdGFWaWV3IiwiaGFzaENsZWFyIiwiaGFzaERlbGV0ZSIsImhhc2hHZXQiLCJoYXNoSGFzIiwiaGFzaFNldCIsIkhhc2giLCJlbnRyaWVzIiwiaW5kZXgiLCJjbGVhciIsImVudHJ5Iiwic2V0IiwicHJvdG90eXBlIiwiZ2V0IiwiaGFzIiwibGlzdENhY2hlQ2xlYXIiLCJsaXN0Q2FjaGVEZWxldGUiLCJsaXN0Q2FjaGVHZXQiLCJsaXN0Q2FjaGVIYXMiLCJsaXN0Q2FjaGVTZXQiLCJMaXN0Q2FjaGUiLCJNYXAiLCJtYXBDYWNoZUNsZWFyIiwibWFwQ2FjaGVEZWxldGUiLCJtYXBDYWNoZUdldCIsIm1hcENhY2hlSGFzIiwibWFwQ2FjaGVTZXQiLCJNYXBDYWNoZSIsIlByb21pc2UiLCJTZXQiLCJzZXRDYWNoZUFkZCIsInNldENhY2hlSGFzIiwiU2V0Q2FjaGUiLCJ2YWx1ZXMiLCJfX2RhdGFfXyIsImFkZCIsInN0YWNrQ2xlYXIiLCJzdGFja0RlbGV0ZSIsInN0YWNrR2V0Iiwic3RhY2tIYXMiLCJzdGFja1NldCIsIlN0YWNrIiwic2l6ZSIsIlN5bWJvbCIsIlVpbnQ4QXJyYXkiLCJXZWFrTWFwIiwiYXJyYXlGaWx0ZXIiLCJhcnJheSIsInByZWRpY2F0ZSIsInJlc0luZGV4IiwicmVzdWx0IiwidmFsdWUiLCJiYXNlVGltZXMiLCJpc0FyZ3VtZW50cyIsImlzQXJyYXkiLCJpc0J1ZmZlciIsImlzSW5kZXgiLCJpc1R5cGVkQXJyYXkiLCJvYmplY3RQcm90byIsIk9iamVjdCIsImhhc093blByb3BlcnR5IiwiYXJyYXlMaWtlS2V5cyIsImluaGVyaXRlZCIsImlzQXJyIiwiaXNBcmciLCJpc0J1ZmYiLCJpc1R5cGUiLCJza2lwSW5kZXhlcyIsIlN0cmluZyIsImtleSIsImNhbGwiLCJhcnJheVB1c2giLCJvZmZzZXQiLCJhcnJheVNvbWUiLCJlcSIsImFzc29jSW5kZXhPZiIsImJhc2VHZXRBbGxLZXlzIiwib2JqZWN0Iiwia2V5c0Z1bmMiLCJzeW1ib2xzRnVuYyIsImdldFJhd1RhZyIsIm9iamVjdFRvU3RyaW5nIiwibnVsbFRhZyIsInVuZGVmaW5lZFRhZyIsInN5bVRvU3RyaW5nVGFnIiwidG9TdHJpbmdUYWciLCJiYXNlR2V0VGFnIiwiaXNPYmplY3RMaWtlIiwiYXJnc1RhZyIsImJhc2VJc0FyZ3VtZW50cyIsImJhc2VJc0VxdWFsRGVlcCIsImJhc2VJc0VxdWFsIiwib3RoZXIiLCJiaXRtYXNrIiwiY3VzdG9taXplciIsInN0YWNrIiwiZXF1YWxBcnJheXMiLCJlcXVhbEJ5VGFnIiwiZXF1YWxPYmplY3RzIiwiZ2V0VGFnIiwiQ09NUEFSRV9QQVJUSUFMX0ZMQUciLCJhcnJheVRhZyIsIm9iamVjdFRhZyIsImVxdWFsRnVuYyIsIm9iaklzQXJyIiwib3RoSXNBcnIiLCJvYmpUYWciLCJvdGhUYWciLCJvYmpJc09iaiIsIm90aElzT2JqIiwiaXNTYW1lVGFnIiwib2JqSXNXcmFwcGVkIiwib3RoSXNXcmFwcGVkIiwib2JqVW53cmFwcGVkIiwib3RoVW53cmFwcGVkIiwiaXNGdW5jdGlvbiIsImlzTWFza2VkIiwiaXNPYmplY3QiLCJ0b1NvdXJjZSIsInJlUmVnRXhwQ2hhciIsInJlSXNIb3N0Q3RvciIsImZ1bmNQcm90byIsIkZ1bmN0aW9uIiwiZnVuY1RvU3RyaW5nIiwicmVJc05hdGl2ZSIsIlJlZ0V4cCIsInJlcGxhY2UiLCJiYXNlSXNOYXRpdmUiLCJwYXR0ZXJuIiwidGVzdCIsImlzTGVuZ3RoIiwiYm9vbFRhZyIsImRhdGVUYWciLCJlcnJvclRhZyIsImZ1bmNUYWciLCJtYXBUYWciLCJudW1iZXJUYWciLCJyZWdleHBUYWciLCJzZXRUYWciLCJzdHJpbmdUYWciLCJ3ZWFrTWFwVGFnIiwiYXJyYXlCdWZmZXJUYWciLCJkYXRhVmlld1RhZyIsImZsb2F0MzJUYWciLCJmbG9hdDY0VGFnIiwiaW50OFRhZyIsImludDE2VGFnIiwiaW50MzJUYWciLCJ1aW50OFRhZyIsInVpbnQ4Q2xhbXBlZFRhZyIsInVpbnQxNlRhZyIsInVpbnQzMlRhZyIsInR5cGVkQXJyYXlUYWdzIiwiYmFzZUlzVHlwZWRBcnJheSIsImlzUHJvdG90eXBlIiwibmF0aXZlS2V5cyIsImJhc2VLZXlzIiwibiIsIml0ZXJhdGVlIiwiQXJyYXkiLCJiYXNlVW5hcnkiLCJmdW5jIiwiY2FjaGVIYXMiLCJjYWNoZSIsImNvcmVKc0RhdGEiLCJDT01QQVJFX1VOT1JERVJFRF9GTEFHIiwiaXNQYXJ0aWFsIiwiYXJyTGVuZ3RoIiwib3RoTGVuZ3RoIiwiYXJyU3RhY2tlZCIsIm90aFN0YWNrZWQiLCJzZWVuIiwiYXJyVmFsdWUiLCJvdGhWYWx1ZSIsImNvbXBhcmVkIiwib3RoSW5kZXgiLCJtYXBUb0FycmF5Iiwic2V0VG9BcnJheSIsInN5bWJvbFRhZyIsInN5bWJvbFByb3RvIiwic3ltYm9sVmFsdWVPZiIsInZhbHVlT2YiLCJ0YWciLCJieXRlTGVuZ3RoIiwiYnl0ZU9mZnNldCIsImJ1ZmZlciIsIm5hbWUiLCJtZXNzYWdlIiwiY29udmVydCIsInN0YWNrZWQiLCJnZXRBbGxLZXlzIiwib2JqUHJvcHMiLCJvYmpMZW5ndGgiLCJvdGhQcm9wcyIsIm9ialN0YWNrZWQiLCJza2lwQ3RvciIsIm9ialZhbHVlIiwib2JqQ3RvciIsImNvbnN0cnVjdG9yIiwib3RoQ3RvciIsImZyZWVHbG9iYWwiLCJnbG9iYWwiLCJnZXRTeW1ib2xzIiwia2V5cyIsImlzS2V5YWJsZSIsImdldE1hcERhdGEiLCJnZXRWYWx1ZSIsIm5hdGl2ZU9iamVjdFRvU3RyaW5nIiwiaXNPd24iLCJ1bm1hc2tlZCIsImUiLCJzdHViQXJyYXkiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIm5hdGl2ZUdldFN5bWJvbHMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW1ib2wiLCJwcm9taXNlVGFnIiwiZGF0YVZpZXdDdG9yU3RyaW5nIiwibWFwQ3RvclN0cmluZyIsInByb21pc2VDdG9yU3RyaW5nIiwic2V0Q3RvclN0cmluZyIsIndlYWtNYXBDdG9yU3RyaW5nIiwiQXJyYXlCdWZmZXIiLCJyZXNvbHZlIiwiQ3RvciIsImN0b3JTdHJpbmciLCJuYXRpdmVDcmVhdGUiLCJIQVNIX1VOREVGSU5FRCIsIk1BWF9TQUZFX0lOVEVHRVIiLCJyZUlzVWludCIsInR5cGUiLCJtYXNrU3JjS2V5IiwidWlkIiwiZXhlYyIsIklFX1BST1RPIiwicHJvdG8iLCJhcnJheVByb3RvIiwic3BsaWNlIiwibGFzdEluZGV4IiwicG9wIiwiZm9yRWFjaCIsIm92ZXJBcmciLCJmcmVlRXhwb3J0cyIsIm5vZGVUeXBlIiwiZnJlZU1vZHVsZSIsIm1vZHVsZUV4cG9ydHMiLCJmcmVlUHJvY2VzcyIsInByb2Nlc3MiLCJub2RlVXRpbCIsInR5cGVzIiwiYmluZGluZyIsInRyYW5zZm9ybSIsImFyZyIsImZyZWVTZWxmIiwic2VsZiIsIkxBUkdFX0FSUkFZX1NJWkUiLCJwYWlycyIsImFyZ3VtZW50cyIsImlzQXJyYXlMaWtlIiwic3R1YkZhbHNlIiwiQnVmZmVyIiwibmF0aXZlSXNCdWZmZXIiLCJpc0VxdWFsIiwiYXN5bmNUYWciLCJnZW5UYWciLCJwcm94eVRhZyIsIm5vZGVJc1R5cGVkQXJyYXkiLCJmYWN0b3J5IiwiUHViU3ViIiwiY29uc29sZSIsIndhcm4iLCJkZWZpbmUiLCJhbWQiLCJ3aW5kb3ciLCJtZXNzYWdlcyIsImxhc3RVaWQiLCJBTExfU1VCU0NSSUJJTkdfTVNHIiwiaGFzS2V5cyIsIm9iaiIsInRocm93RXhjZXB0aW9uIiwiZXgiLCJyZVRocm93RXhjZXB0aW9uIiwiY2FsbFN1YnNjcmliZXJXaXRoRGVsYXllZEV4Y2VwdGlvbnMiLCJzdWJzY3JpYmVyIiwic2V0VGltZW91dCIsImNhbGxTdWJzY3JpYmVyV2l0aEltbWVkaWF0ZUV4Y2VwdGlvbnMiLCJkZWxpdmVyTWVzc2FnZSIsIm9yaWdpbmFsTWVzc2FnZSIsIm1hdGNoZWRNZXNzYWdlIiwiaW1tZWRpYXRlRXhjZXB0aW9ucyIsInN1YnNjcmliZXJzIiwiY2FsbFN1YnNjcmliZXIiLCJzIiwiY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiIsImRlbGl2ZXJOYW1lc3BhY2VkIiwidG9waWMiLCJwb3NpdGlvbiIsImxhc3RJbmRleE9mIiwic3Vic3RyIiwiaGFzRGlyZWN0U3Vic2NyaWJlcnNGb3IiLCJmb3VuZCIsIkJvb2xlYW4iLCJtZXNzYWdlSGFzU3Vic2NyaWJlcnMiLCJwdWJsaXNoIiwic3luYyIsImRlbGl2ZXIiLCJoYXNTdWJzY3JpYmVycyIsInB1Ymxpc2hTeW5jIiwic3Vic2NyaWJlIiwidG9rZW4iLCJzdWJzY3JpYmVBbGwiLCJzdWJzY3JpYmVPbmNlIiwidW5zdWJzY3JpYmUiLCJhcHBseSIsImNsZWFyQWxsU3Vic2NyaXB0aW9ucyIsImNsZWFyU3Vic2NyaXB0aW9ucyIsIm0iLCJpbmRleE9mIiwiY291bnRTdWJzY3JpcHRpb25zIiwiY291bnQiLCJnZXRTdWJzY3JpcHRpb25zIiwiZGVzY2VuZGFudFRvcGljRXhpc3RzIiwiaXNUb3BpYyIsImlzVG9rZW4iLCJ0Iiwic3R5bGUiLCJORVdfR0FNRSIsIkRPTU1hbmFnZXIiLCJzZXRVcFBsYXlBZ2FpbkJ1dHRvbiIsInNldE5hbWVDbGlja0xpc3RlbmVycyIsInNldFVwUmVzZXRCdXR0b24iLCJwb3B1bGF0ZUFjdGl2ZVBsYXllcnNCb2FyZCIsInBsYXllciIsImJvYXJkIiwiZ2FtZWJvYXJkIiwiYm9hcmRHcmlkIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiaiIsImRvdCIsImFwcGVuZCIsImhhc0JlZW5BdHRhY2tlZCIsImRyYWdnYWJsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJ0YXJnZXQiLCJwcmV2ZW50RGVmYXVsdCIsImRyb3BwZWRJZCIsImdldERhdGEiLCJ4Q29vcmRpbmF0ZSIsImNoYXJBdCIsInlDb29yZGluYXRlIiwibW92ZVNoaXAiLCJwYXJzZUludCIsImFwcGVuZENoaWxkIiwiYm9hcmRDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiZWxlbWVudFF1ZXJ5IiwiaW5uZXJIVE1MIiwicG9wdWxhdGVPcHBvbmVudHNCb2FyZCIsInJlY2VpdmVBdHRhY2siLCJwb3B1bGF0ZUJvYXJkIiwiZmlyc3RQbGF5ZXIiLCJzZWNvbmRQbGF5ZXIiLCJpc0FjdGl2ZSIsInNob3dFbmREaWFsb2ciLCJ3aW5uZXIiLCJlbmREaWFsb2ciLCJsb2ciLCJ0ZXh0Q29udGVudCIsInNob3dNb2RhbCIsInBsYXlBZ2FpbkJ1dHRvbiIsImNsb3NlIiwiY2hhbmdlTmFtZURpYWxvZyIsInBsYXllcnNOYW1lcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJlbGVtZW50IiwiY2hhbmdlTmFtZUZvcm0iLCJ1cGRhdGVOYW1lcyIsInJlc2V0IiwibmFtZTEiLCJuYW1lMiIsImZpcnN0TmFtZVBsYXllck5hbWUiLCJzZWNvbmROYW1lUGxheWVyTmFtZSIsInRyaW0iLCJDSEFOR0VfTkFNRVMiLCJyZXNldEJ1dHRvbiIsIlNoaXAiLCJHYW1lYm9hcmQiLCJmcm9tIiwiZmlsbCIsIm1pc3NlZCIsImlzRW1wdHkiLCIjaXNFbXB0eSIsIngiLCJ5IiwicGxhY2VTaGlwIiwic2hpcCIsIm9yaWVudGF0aW9uIiwiY2FuU2hpcEJlUGxhY2VkSG9yaXpvbnRhbGx5IiwiY2FuU2hpcEJlUGxhY2VkVmVydGljYWxseSIsInNoaXBFeGNlcHRpb24iLCJNYXRoIiwibWF4IiwibWluIiwiaGl0IiwiU0hJUF9ISVQiLCJTSElQX01JU1NFRCIsImhhdmVBbGxCZWVuU3VuayIsInNvbWUiLCJyb3ciLCJpc1Bvc2l0aW9uVmFsaWQiLCIjaXNQb3NpdGlvblZhbGlkIiwiZ2V0TW92ZWRTaGlwUG9zaXRpb25zIiwib3JpZ2luYWxYIiwib3JpZ2luYWxZIiwibmV3WCIsIm5ld1kiLCJkaXJlY3Rpb25zIiwib2xkUG9zaXRpb25zIiwibmV3UG9zaXRpb25zIiwiZGlyZWN0aW9uSW5kZXgiLCJ4TW92ZSIsInlNb3ZlIiwibmV3WEl0ZW0iLCJuZXdZSXRlbSIsInNvcnQiLCJhIiwiYiIsInBvc2l0aW9ucyIsInhPbGQiLCJ5T2xkIiwiUGxheWVyIiwic2V0QXNBY3RpdmUiLCJzZXRBc09wcG9uZW50IiwiY2hhbmdlTmFtZSIsIm5ld05hbWUiLCJ0aW1lc0hpdCIsImhhc0JlZW5TdW5rIiwiaXNTdW5rIiwiZG9tIiwic3RhcnRHYW1lV2l0aEJvdCIsInJhbmRvbWl6ZVNoaXBzIiwic2hpcFBsYWNlZCIsImZsb29yIiwicmFuZG9tIiwibWFrZUJvdE1vdmUiLCJjaGVja0Zvcldpbm5lciIsIm5ld05hbWVzIl0sInNvdXJjZVJvb3QiOiIifQ==