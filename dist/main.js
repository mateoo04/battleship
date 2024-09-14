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
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_1__);


class Bot {
  constructor(opponentsGameboard) {
    this.opponentsGameboard = opponentsGameboard;
    this.attackQueue = [];
  }
  async attack() {
    const BOT_MOVE = 'bot is making a move';
    pubsub_js__WEBPACK_IMPORTED_MODULE_1___default().publish(BOT_MOVE);
    await delay(3000);
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
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_1__);


const NEW_GAME = 'new game';
const NEXT_PLAYER = 'next players move';
const BOT_MOVE = 'bot is making a move';
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
    document.querySelector(`${player.elementQuery} .players-name`).style.color = '#34495e';
    const boardContainer = document.querySelector(`${player.elementQuery}  .board-grid-container`);
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
pubsub_js__WEBPACK_IMPORTED_MODULE_1___default().subscribe(BOT_MOVE, () => {
  const botMoveDialog = document.querySelector('.bot-attack-dialog');
  botMoveDialog.showModal();
  setTimeout(() => botMoveDialog.close(), 2000);
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
  animation: move 0.9s ease-in-out infinite;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --block-dimension: min(50px, calc(4vw));\n  --primary-color: #34495e;\n}\n\n* {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n/*Default styles*/\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nul[class],\nol[class],\nli,\nfigure,\nfigcaption,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: min-content 1fr;\n}\n\n/*Background animation*/\nbody,\n.start-dialog {\n  background: radial-gradient(circle, #b1afff, #bbe9ff, #fffed3);\n  animation: pulseBackground 6s ease-in-out infinite;\n}\n\n@keyframes pulseBackground {\n  0%,\n  100% {\n    background-size: 100% 100%;\n  }\n  50% {\n    background-size: 200% 200%;\n  }\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 18px;\n}\n\n.header-buttons button:first-of-type {\n  margin-right: 10px;\n}\n\nheader button,\n.start-dialog button,\n.device-passed-button,\n.edit-board-dialog button {\n  border: none;\n  border-radius: 20px;\n  font-weight: bold;\n  padding: 10px 20px;\n}\n\nheader button,\n.start-dialog button {\n  background-color: #fff;\n  color: #000;\n}\n\n.device-passed-button,\n.edit-board-dialog button {\n  background-color: var(--primary-color);\n  color: #fff;\n}\n\n.start-dialog {\n  background-color: #fff;\n  width: 100vw;\n  height: 100vh;\n  margin: 0 auto;\n  border: none;\n}\n\n.start-dialog button {\n  padding: 10px px;\n}\n\n.start-dialog h1 {\n  font-size: 2.4em;\n}\n\n.start-dialog-content,\n.pass-device-dialog-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  gap: min(40%, 300px);\n}\n\n.pass-device-dialog {\n  background-color: #fff;\n  width: 100vw;\n  height: 100vh;\n  margin: 0 auto;\n  border: none;\n}\n\n.edit-board-dialog {\n  position: fixed;\n  bottom: 10px;\n  border-radius: 20px;\n  border: 0;\n}\n\n.edit-board-dialog-container {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  align-items: center;\n}\n\n.query-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 8px;\n}\n\n.query-container p {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\nmain {\n  display: flex;\n}\n\n.first-player,\n.second-player {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 50%;\n  gap: 12px;\n}\n\n.board-grid {\n  display: grid;\n  grid-template-columns: repeat(10, var(--block-dimension));\n  grid-template-rows: repeat(10, var(--block-dimension));\n}\n\n.board-item {\n  height: var(--block-dimension);\n  width: var(--block-dimension);\n  border: 1px solid var(--primary-color);\n}\n\n.board-item:hover,\n.start-dialog button:hover {\n  cursor: pointer;\n  opacity: 0.8;\n}\n\n.ship {\n  background-color: var(--primary-color);\n}\n\n.hit-ship {\n  position: relative;\n  border: 1px solid black;\n  padding-top: -4px;\n}\n\n.hit-ship::before,\n.hit-ship::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 100%;\n  height: 3px;\n  background-color: var(--primary-color);\n}\n\n.hit-ship::before {\n  transform: rotate(45deg);\n}\n\n.hit-ship::after {\n  transform: rotate(-45deg);\n}\n\n.attacked {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.dot {\n  width: calc(var(--block-dimension) / 3);\n  height: calc(var(--block-dimension) / 3);\n  border-radius: 50%;\n  background-color: var(--primary-color);\n}\n\n.end-dialog,\n.change-names-dialog,\n.bot-attack-dialog {\n  border: none;\n  border-radius: 20px;\n}\n\n.bot-attack-dialog-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n\n.process-animation {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: var(--primary-color);\n  animation: move 0.9s ease-in-out infinite;\n  margin: 0 30%;\n}\n\n@keyframes move {\n  0% {\n    align-self: baseline;\n  }\n  100% {\n    align-self: flex-end;\n  }\n}\n\n.end-dialog-container {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.end-dialog p {\n  font-size: 1.5em;\n}\n\n.end-dialog button {\n  background-color: var(--primary-color);\n  border: none;\n  border-radius: 20px;\n  color: #fff;\n  font-weight: bold;\n  padding: 8px;\n}\n\n.change-names-dialog form {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.change-names-dialog input,\n.change-names-dialog button {\n  border-radius: 20px;\n  border: none;\n  padding: 8px 16px;\n}\n\n.change-names-dialog input[type='text'] {\n  background-color: #e9e9e9;\n}\n\n.change-names-dialog input[type='submit'] {\n  background-color: var(--primary-color);\n  font-weight: bold;\n  color: #fff;\n  margin-top: 8px;\n}\n\nbutton:hover,\n.players-name:hover {\n  cursor: pointer;\n  opacity: 0.8;\n}\n"],"sourceRoot":""}]);
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
  firstPlayer = new _player_js__WEBPACK_IMPORTED_MODULE_1__.Player('Player 1', firstPlayerType, '.first-player', true);
  secondPlayer = new _player_js__WEBPACK_IMPORTED_MODULE_1__.Player('Player 2', secondPlayerType, '.second-player', false, firstPlayer.gameboard);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxtQkFBbUIsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE9BQU8sWUFBWSxhQUFhLE9BQU8sS0FBSyxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxRQUFRLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlB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ckMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19IYXNoLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19MaXN0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTWFwQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1NldC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU2V0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N0YWNrLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1VpbnQ4QXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1dlYWtNYXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5RmlsdGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUxpa2VLZXlzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheVB1c2guanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5U29tZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNFcXVhbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzRXF1YWxEZWVwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNOYXRpdmUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VLZXlzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVGltZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsQXJyYXlzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19lcXVhbEJ5VGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19lcXVhbE9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldEFsbEtleXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldE1hcERhdGEuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRTeW1ib2xzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hHZXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hIYXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hTZXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzS2V5YWJsZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNNYXNrZWQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlSGFzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19uYXRpdmVLZXlzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19ub2RlVXRpbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldENhY2hlQWRkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tDbGVhci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0hhcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tTZXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2VxLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJndW1lbnRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheUxpa2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNCdWZmZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNFcXVhbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzTGVuZ3RoLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gva2V5cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zdHViQXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvc3R1YkZhbHNlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvcHVic3ViLWpzL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ib3QuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb21NYW5hZ2VyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVNYW5hZ2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFWaWV3O1xuIiwidmFyIGhhc2hDbGVhciA9IHJlcXVpcmUoJy4vX2hhc2hDbGVhcicpLFxuICAgIGhhc2hEZWxldGUgPSByZXF1aXJlKCcuL19oYXNoRGVsZXRlJyksXG4gICAgaGFzaEdldCA9IHJlcXVpcmUoJy4vX2hhc2hHZXQnKSxcbiAgICBoYXNoSGFzID0gcmVxdWlyZSgnLi9faGFzaEhhcycpLFxuICAgIGhhc2hTZXQgPSByZXF1aXJlKCcuL19oYXNoU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2g7XG4iLCJ2YXIgbGlzdENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVDbGVhcicpLFxuICAgIGxpc3RDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZURlbGV0ZScpLFxuICAgIGxpc3RDYWNoZUdldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUdldCcpLFxuICAgIGxpc3RDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUhhcycpLFxuICAgIGxpc3RDYWNoZVNldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdENhY2hlO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcDtcbiIsInZhciBtYXBDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVDbGVhcicpLFxuICAgIG1hcENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVEZWxldGUnKSxcbiAgICBtYXBDYWNoZUdldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlR2V0JyksXG4gICAgbWFwQ2FjaGVIYXMgPSByZXF1aXJlKCcuL19tYXBDYWNoZUhhcycpLFxuICAgIG1hcENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwQ2FjaGU7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldDtcbiIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyksXG4gICAgc2V0Q2FjaGVBZGQgPSByZXF1aXJlKCcuL19zZXRDYWNoZUFkZCcpLFxuICAgIHNldENhY2hlSGFzID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVIYXMnKTtcblxuLyoqXG4gKlxuICogQ3JlYXRlcyBhbiBhcnJheSBjYWNoZSBvYmplY3QgdG8gc3RvcmUgdW5pcXVlIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbdmFsdWVzXSBUaGUgdmFsdWVzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTZXRDYWNoZSh2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMgPT0gbnVsbCA/IDAgOiB2YWx1ZXMubGVuZ3RoO1xuXG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGU7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdGhpcy5hZGQodmFsdWVzW2luZGV4XSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFNldENhY2hlYC5cblNldENhY2hlLnByb3RvdHlwZS5hZGQgPSBTZXRDYWNoZS5wcm90b3R5cGUucHVzaCA9IHNldENhY2hlQWRkO1xuU2V0Q2FjaGUucHJvdG90eXBlLmhhcyA9IHNldENhY2hlSGFzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldENhY2hlO1xuIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIHN0YWNrQ2xlYXIgPSByZXF1aXJlKCcuL19zdGFja0NsZWFyJyksXG4gICAgc3RhY2tEZWxldGUgPSByZXF1aXJlKCcuL19zdGFja0RlbGV0ZScpLFxuICAgIHN0YWNrR2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tHZXQnKSxcbiAgICBzdGFja0hhcyA9IHJlcXVpcmUoJy4vX3N0YWNrSGFzJyksXG4gICAgc3RhY2tTZXQgPSByZXF1aXJlKCcuL19zdGFja1NldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhY2s7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gVWludDhBcnJheTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYWtNYXA7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5maWx0ZXJgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlGaWx0ZXIoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzSW5kZXggPSAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmVzdWx0W3Jlc0luZGV4KytdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlGaWx0ZXI7XG4iLCJ2YXIgYmFzZVRpbWVzID0gcmVxdWlyZSgnLi9fYmFzZVRpbWVzJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TGlrZUtleXM7XG4iLCIvKipcbiAqIEFwcGVuZHMgdGhlIGVsZW1lbnRzIG9mIGB2YWx1ZXNgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlQdXNoO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uc29tZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbnkgZWxlbWVudCBwYXNzZXMgdGhlIHByZWRpY2F0ZSBjaGVjayxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5U29tZShhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVNvbWU7XG4iLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzb2NJbmRleE9mO1xuIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0QWxsS2V5c2AgYW5kIGBnZXRBbGxLZXlzSW5gIHdoaWNoIHVzZXNcbiAqIGBrZXlzRnVuY2AgYW5kIGBzeW1ib2xzRnVuY2AgdG8gZ2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN5bWJvbHNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNGdW5jLCBzeW1ib2xzRnVuYykge1xuICB2YXIgcmVzdWx0ID0ga2V5c0Z1bmMob2JqZWN0KTtcbiAgcmV0dXJuIGlzQXJyYXkob2JqZWN0KSA/IHJlc3VsdCA6IGFycmF5UHVzaChyZXN1bHQsIHN5bWJvbHNGdW5jKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRBbGxLZXlzO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzQXJndW1lbnRzO1xuIiwidmFyIGJhc2VJc0VxdWFsRGVlcCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsRGVlcCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNFcXVhbGAgd2hpY2ggc3VwcG9ydHMgcGFydGlhbCBjb21wYXJpc29uc1xuICogYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuXG4gKiAgMSAtIFVub3JkZXJlZCBjb21wYXJpc29uXG4gKiAgMiAtIFBhcnRpYWwgY29tcGFyaXNvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spIHtcbiAgaWYgKHZhbHVlID09PSBvdGhlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsIHx8IG90aGVyID09IG51bGwgfHwgKCFpc09iamVjdExpa2UodmFsdWUpICYmICFpc09iamVjdExpa2Uob3RoZXIpKSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyO1xuICB9XG4gIHJldHVybiBiYXNlSXNFcXVhbERlZXAodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBiYXNlSXNFcXVhbCwgc3RhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsO1xuIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgZXF1YWxCeVRhZyA9IHJlcXVpcmUoJy4vX2VxdWFsQnlUYWcnKSxcbiAgICBlcXVhbE9iamVjdHMgPSByZXF1aXJlKCcuL19lcXVhbE9iamVjdHMnKSxcbiAgICBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsYCBmb3IgYXJyYXlzIGFuZCBvYmplY3RzIHdoaWNoIHBlcmZvcm1zXG4gKiBkZWVwIGNvbXBhcmlzb25zIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMgZW5hYmxpbmcgb2JqZWN0cyB3aXRoIGNpcmN1bGFyXG4gKiByZWZlcmVuY2VzIHRvIGJlIGNvbXBhcmVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbERlZXAob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgb2JqSXNBcnIgPSBpc0FycmF5KG9iamVjdCksXG4gICAgICBvdGhJc0FyciA9IGlzQXJyYXkob3RoZXIpLFxuICAgICAgb2JqVGFnID0gb2JqSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvYmplY3QpLFxuICAgICAgb3RoVGFnID0gb3RoSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvdGhlcik7XG5cbiAgb2JqVGFnID0gb2JqVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvYmpUYWc7XG4gIG90aFRhZyA9IG90aFRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb3RoVGFnO1xuXG4gIHZhciBvYmpJc09iaiA9IG9ialRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBvdGhJc09iaiA9IG90aFRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBpc1NhbWVUYWcgPSBvYmpUYWcgPT0gb3RoVGFnO1xuXG4gIGlmIChpc1NhbWVUYWcgJiYgaXNCdWZmZXIob2JqZWN0KSkge1xuICAgIGlmICghaXNCdWZmZXIob3RoZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIG9iaklzQXJyID0gdHJ1ZTtcbiAgICBvYmpJc09iaiA9IGZhbHNlO1xuICB9XG4gIGlmIChpc1NhbWVUYWcgJiYgIW9iaklzT2JqKSB7XG4gICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICByZXR1cm4gKG9iaklzQXJyIHx8IGlzVHlwZWRBcnJheShvYmplY3QpKVxuICAgICAgPyBlcXVhbEFycmF5cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKVxuICAgICAgOiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIG9ialRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gIH1cbiAgaWYgKCEoYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHKSkge1xuICAgIHZhciBvYmpJc1dyYXBwZWQgPSBvYmpJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgJ19fd3JhcHBlZF9fJyksXG4gICAgICAgIG90aElzV3JhcHBlZCA9IG90aElzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsICdfX3dyYXBwZWRfXycpO1xuXG4gICAgaWYgKG9iaklzV3JhcHBlZCB8fCBvdGhJc1dyYXBwZWQpIHtcbiAgICAgIHZhciBvYmpVbndyYXBwZWQgPSBvYmpJc1dyYXBwZWQgPyBvYmplY3QudmFsdWUoKSA6IG9iamVjdCxcbiAgICAgICAgICBvdGhVbndyYXBwZWQgPSBvdGhJc1dyYXBwZWQgPyBvdGhlci52YWx1ZSgpIDogb3RoZXI7XG5cbiAgICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgICByZXR1cm4gZXF1YWxGdW5jKG9ialVud3JhcHBlZCwgb3RoVW53cmFwcGVkLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgfVxuICB9XG4gIGlmICghaXNTYW1lVGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHJldHVybiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzRXF1YWxEZWVwO1xuIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc01hc2tlZCA9IHJlcXVpcmUoJy4vX2lzTWFza2VkJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hdGl2ZTtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNUeXBlZEFycmF5O1xuIiwidmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXM7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUaW1lcztcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5hcnk7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBhIGBjYWNoZWAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNhY2hlIFRoZSBjYWNoZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBjYWNoZUhhcyhjYWNoZSwga2V5KSB7XG4gIHJldHVybiBjYWNoZS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYWNoZUhhcztcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcmVKc0RhdGE7XG4iLCJ2YXIgU2V0Q2FjaGUgPSByZXF1aXJlKCcuL19TZXRDYWNoZScpLFxuICAgIGFycmF5U29tZSA9IHJlcXVpcmUoJy4vX2FycmF5U29tZScpLFxuICAgIGNhY2hlSGFzID0gcmVxdWlyZSgnLi9fY2FjaGVIYXMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgYXJyYXlzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge0FycmF5fSBvdGhlciBUaGUgb3RoZXIgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYGFycmF5YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBhcnJheXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxBcnJheXMoYXJyYXksIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcsXG4gICAgICBhcnJMZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBvdGhMZW5ndGggPSBvdGhlci5sZW5ndGg7XG5cbiAgaWYgKGFyckxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIShpc1BhcnRpYWwgJiYgb3RoTGVuZ3RoID4gYXJyTGVuZ3RoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBDaGVjayB0aGF0IGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgYXJyU3RhY2tlZCA9IHN0YWNrLmdldChhcnJheSk7XG4gIHZhciBvdGhTdGFja2VkID0gc3RhY2suZ2V0KG90aGVyKTtcbiAgaWYgKGFyclN0YWNrZWQgJiYgb3RoU3RhY2tlZCkge1xuICAgIHJldHVybiBhcnJTdGFja2VkID09IG90aGVyICYmIG90aFN0YWNrZWQgPT0gYXJyYXk7XG4gIH1cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSB0cnVlLFxuICAgICAgc2VlbiA9IChiaXRtYXNrICYgQ09NUEFSRV9VTk9SREVSRURfRkxBRykgPyBuZXcgU2V0Q2FjaGUgOiB1bmRlZmluZWQ7XG5cbiAgc3RhY2suc2V0KGFycmF5LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgYXJyYXkpO1xuXG4gIC8vIElnbm9yZSBub24taW5kZXggcHJvcGVydGllcy5cbiAgd2hpbGUgKCsraW5kZXggPCBhcnJMZW5ndGgpIHtcbiAgICB2YXIgYXJyVmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJbaW5kZXhdO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIGFyclZhbHVlLCBpbmRleCwgb3RoZXIsIGFycmF5LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKGFyclZhbHVlLCBvdGhWYWx1ZSwgaW5kZXgsIGFycmF5LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICBpZiAoY29tcGFyZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGNvbXBhcmVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoc2Vlbikge1xuICAgICAgaWYgKCFhcnJheVNvbWUob3RoZXIsIGZ1bmN0aW9uKG90aFZhbHVlLCBvdGhJbmRleCkge1xuICAgICAgICAgICAgaWYgKCFjYWNoZUhhcyhzZWVuLCBvdGhJbmRleCkgJiZcbiAgICAgICAgICAgICAgICAoYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlZW4ucHVzaChvdGhJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIShcbiAgICAgICAgICBhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHxcbiAgICAgICAgICAgIGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKVxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10oYXJyYXkpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQXJyYXlzO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIFVpbnQ4QXJyYXkgPSByZXF1aXJlKCcuL19VaW50OEFycmF5JyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyksXG4gICAgZXF1YWxBcnJheXMgPSByZXF1aXJlKCcuL19lcXVhbEFycmF5cycpLFxuICAgIG1hcFRvQXJyYXkgPSByZXF1aXJlKCcuL19tYXBUb0FycmF5JyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgY29tcGFyaW5nIG9iamVjdHMgb2ZcbiAqIHRoZSBzYW1lIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjb21wYXJpbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdHMgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIHRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgKG9iamVjdC5ieXRlT2Zmc2V0ICE9IG90aGVyLmJ5dGVPZmZzZXQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIG9iamVjdCA9IG9iamVjdC5idWZmZXI7XG4gICAgICBvdGhlciA9IG90aGVyLmJ1ZmZlcjtcblxuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgIWVxdWFsRnVuYyhuZXcgVWludDhBcnJheShvYmplY3QpLCBuZXcgVWludDhBcnJheShvdGhlcikpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICAgIC8vIENvZXJjZSBib29sZWFucyB0byBgMWAgb3IgYDBgIGFuZCBkYXRlcyB0byBtaWxsaXNlY29uZHMuXG4gICAgICAvLyBJbnZhbGlkIGRhdGVzIGFyZSBjb2VyY2VkIHRvIGBOYU5gLlxuICAgICAgcmV0dXJuIGVxKCtvYmplY3QsICtvdGhlcik7XG5cbiAgICBjYXNlIGVycm9yVGFnOlxuICAgICAgcmV0dXJuIG9iamVjdC5uYW1lID09IG90aGVyLm5hbWUgJiYgb2JqZWN0Lm1lc3NhZ2UgPT0gb3RoZXIubWVzc2FnZTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgLy8gQ29lcmNlIHJlZ2V4ZXMgdG8gc3RyaW5ncyBhbmQgdHJlYXQgc3RyaW5ncywgcHJpbWl0aXZlcyBhbmQgb2JqZWN0cyxcbiAgICAgIC8vIGFzIGVxdWFsLiBTZWUgaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXJlZ2V4cC5wcm90b3R5cGUudG9zdHJpbmdcbiAgICAgIC8vIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICByZXR1cm4gb2JqZWN0ID09IChvdGhlciArICcnKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgdmFyIGNvbnZlcnQgPSBtYXBUb0FycmF5O1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHO1xuICAgICAgY29udmVydCB8fCAoY29udmVydCA9IHNldFRvQXJyYXkpO1xuXG4gICAgICBpZiAob2JqZWN0LnNpemUgIT0gb3RoZXIuc2l6ZSAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgICAgIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gICAgICBpZiAoc3RhY2tlZCkge1xuICAgICAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgICAgIH1cbiAgICAgIGJpdG1hc2sgfD0gQ09NUEFSRV9VTk9SREVSRURfRkxBRztcblxuICAgICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gICAgICB2YXIgcmVzdWx0ID0gZXF1YWxBcnJheXMoY29udmVydChvYmplY3QpLCBjb252ZXJ0KG90aGVyKSwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gICAgICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIGlmIChzeW1ib2xWYWx1ZU9mKSB7XG4gICAgICAgIHJldHVybiBzeW1ib2xWYWx1ZU9mLmNhbGwob2JqZWN0KSA9PSBzeW1ib2xWYWx1ZU9mLmNhbGwob3RoZXIpO1xuICAgICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEJ5VGFnO1xuIiwidmFyIGdldEFsbEtleXMgPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIG9iamVjdHMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIG9ialByb3BzID0gZ2V0QWxsS2V5cyhvYmplY3QpLFxuICAgICAgb2JqTGVuZ3RoID0gb2JqUHJvcHMubGVuZ3RoLFxuICAgICAgb3RoUHJvcHMgPSBnZXRBbGxLZXlzKG90aGVyKSxcbiAgICAgIG90aExlbmd0aCA9IG90aFByb3BzLmxlbmd0aDtcblxuICBpZiAob2JqTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBpbmRleCA9IG9iakxlbmd0aDtcbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB2YXIga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIGlmICghKGlzUGFydGlhbCA/IGtleSBpbiBvdGhlciA6IGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsIGtleSkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8vIENoZWNrIHRoYXQgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIHZhciBvYmpTdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gIHZhciBvdGhTdGFja2VkID0gc3RhY2suZ2V0KG90aGVyKTtcbiAgaWYgKG9ialN0YWNrZWQgJiYgb3RoU3RhY2tlZCkge1xuICAgIHJldHVybiBvYmpTdGFja2VkID09IG90aGVyICYmIG90aFN0YWNrZWQgPT0gb2JqZWN0O1xuICB9XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgb2JqZWN0KTtcblxuICB2YXIgc2tpcEN0b3IgPSBpc1BhcnRpYWw7XG4gIHdoaWxlICgrK2luZGV4IDwgb2JqTGVuZ3RoKSB7XG4gICAga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2tleV07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgb2JqVmFsdWUsIGtleSwgb3RoZXIsIG9iamVjdCwgc3RhY2spXG4gICAgICAgIDogY3VzdG9taXplcihvYmpWYWx1ZSwgb3RoVmFsdWUsIGtleSwgb2JqZWN0LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoIShjb21wYXJlZCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyAob2JqVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhvYmpWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSlcbiAgICAgICAgICA6IGNvbXBhcmVkXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHNraXBDdG9yIHx8IChza2lwQ3RvciA9IGtleSA9PSAnY29uc3RydWN0b3InKTtcbiAgfVxuICBpZiAocmVzdWx0ICYmICFza2lwQ3Rvcikge1xuICAgIHZhciBvYmpDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgICBvdGhDdG9yID0gb3RoZXIuY29uc3RydWN0b3I7XG5cbiAgICAvLyBOb24gYE9iamVjdGAgb2JqZWN0IGluc3RhbmNlcyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVhbC5cbiAgICBpZiAob2JqQ3RvciAhPSBvdGhDdG9yICYmXG4gICAgICAgICgnY29uc3RydWN0b3InIGluIG9iamVjdCAmJiAnY29uc3RydWN0b3InIGluIG90aGVyKSAmJlxuICAgICAgICAhKHR5cGVvZiBvYmpDdG9yID09ICdmdW5jdGlvbicgJiYgb2JqQ3RvciBpbnN0YW5jZW9mIG9iakN0b3IgJiZcbiAgICAgICAgICB0eXBlb2Ygb3RoQ3RvciA9PSAnZnVuY3Rpb24nICYmIG90aEN0b3IgaW5zdGFuY2VvZiBvdGhDdG9yKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsT2JqZWN0cztcbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcbiIsInZhciBiYXNlR2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRBbGxLZXlzJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QWxsS2V5cztcbiIsInZhciBpc0tleWFibGUgPSByZXF1aXJlKCcuL19pc0tleWFibGUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hcERhdGE7XG4iLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgZ2V0VmFsdWUgPSByZXF1aXJlKCcuL19nZXRWYWx1ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcbiIsInZhciBhcnJheUZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5RmlsdGVyJyksXG4gICAgc3R1YkFycmF5ID0gcmVxdWlyZSgnLi9zdHViQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHMgPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHJldHVybiBhcnJheUZpbHRlcihuYXRpdmVHZXRTeW1ib2xzKG9iamVjdCksIGZ1bmN0aW9uKHN5bWJvbCkge1xuICAgIHJldHVybiBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgc3ltYm9sKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHM7XG4iLCJ2YXIgRGF0YVZpZXcgPSByZXF1aXJlKCcuL19EYXRhVmlldycpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIFByb21pc2UgPSByZXF1aXJlKCcuL19Qcm9taXNlJyksXG4gICAgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgV2Vha01hcCA9IHJlcXVpcmUoJy4vX1dlYWtNYXAnKSxcbiAgICBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYWc7XG4iLCIvKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRWYWx1ZTtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaENsZWFyO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoRGVsZXRlO1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEdldDtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hIYXM7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hTZXQ7XG4iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcblxuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZSA9PSAnbnVtYmVyJyB8fFxuICAgICAgKHR5cGUgIT0gJ3N5bWJvbCcgJiYgcmVJc1VpbnQudGVzdCh2YWx1ZSkpKSAmJlxuICAgICAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJbmRleDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleWFibGU7XG4iLCJ2YXIgY29yZUpzRGF0YSA9IHJlcXVpcmUoJy4vX2NvcmVKc0RhdGEnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc01hc2tlZDtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Byb3RvdHlwZTtcbiIsIi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVDbGVhcjtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgLS10aGlzLnNpemU7XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZURlbGV0ZTtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVHZXQ7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUhhcztcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICArK3RoaXMuc2l6ZTtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZVNldDtcbiIsInZhciBIYXNoID0gcmVxdWlyZSgnLi9fSGFzaCcpLFxuICAgIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVDbGVhcjtcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZURlbGV0ZTtcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVHZXQ7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUhhcztcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSksXG4gICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgKz0gZGF0YS5zaXplID09IHNpemUgPyAwIDogMTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVTZXQ7XG4iLCIvKipcbiAqIENvbnZlcnRzIGBtYXBgIHRvIGl0cyBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBrZXktdmFsdWUgcGFpcnMuXG4gKi9cbmZ1bmN0aW9uIG1hcFRvQXJyYXkobWFwKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobWFwLnNpemUpO1xuXG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSBba2V5LCB2YWx1ZV07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcFRvQXJyYXk7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlQ3JlYXRlO1xuIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgLy8gVXNlIGB1dGlsLnR5cGVzYCBmb3IgTm9kZS5qcyAxMCsuXG4gICAgdmFyIHR5cGVzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlKCd1dGlsJykudHlwZXM7XG5cbiAgICBpZiAodHlwZXMpIHtcbiAgICAgIHJldHVybiB0eXBlcztcbiAgICB9XG5cbiAgICAvLyBMZWdhY3kgYHByb2Nlc3MuYmluZGluZygndXRpbCcpYCBmb3IgTm9kZS5qcyA8IDEwLlxuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbm9kZVV0aWw7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcbiIsIi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJBcmc7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG4iLCIvKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogQWRkcyBgdmFsdWVgIHRvIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgYWRkXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBhbGlhcyBwdXNoXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjYWNoZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUFkZCh2YWx1ZSkge1xuICB0aGlzLl9fZGF0YV9fLnNldCh2YWx1ZSwgSEFTSF9VTkRFRklORUQpO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUFkZDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgaW4gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVIYXModmFsdWUpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUhhcztcbiIsIi8qKlxuICogQ29udmVydHMgYHNldGAgdG8gYW4gYXJyYXkgb2YgaXRzIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gc2V0VG9BcnJheShzZXQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShzZXQuc2l6ZSk7XG5cbiAgc2V0LmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VG9BcnJheTtcbiIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0NsZWFyO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIHJlc3VsdCA9IGRhdGFbJ2RlbGV0ZSddKGtleSk7XG5cbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrRGVsZXRlO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSBzdGFjayB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tHZXQoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrR2V0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0hhcztcbiIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgIHZhciBwYWlycyA9IGRhdGEuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgdGhpcy5zaXplID0gKytkYXRhLnNpemU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICB9XG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrU2V0O1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU291cmNlO1xuIiwiLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXE7XG4iLCJ2YXIgYmFzZUlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9fYmFzZUlzQXJndW1lbnRzJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKSxcbiAgICBzdHViRmFsc2UgPSByZXF1aXJlKCcuL3N0dWJGYWxzZScpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNCdWZmZXI7XG4iLCJ2YXIgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbCcpO1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgZGVlcCBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmVcbiAqIGVxdWl2YWxlbnQuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIHN1cHBvcnRzIGNvbXBhcmluZyBhcnJheXMsIGFycmF5IGJ1ZmZlcnMsIGJvb2xlYW5zLFxuICogZGF0ZSBvYmplY3RzLCBlcnJvciBvYmplY3RzLCBtYXBzLCBudW1iZXJzLCBgT2JqZWN0YCBvYmplY3RzLCByZWdleGVzLFxuICogc2V0cywgc3RyaW5ncywgc3ltYm9scywgYW5kIHR5cGVkIGFycmF5cy4gYE9iamVjdGAgb2JqZWN0cyBhcmUgY29tcGFyZWRcbiAqIGJ5IHRoZWlyIG93biwgbm90IGluaGVyaXRlZCwgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLiBGdW5jdGlvbnMgYW5kIERPTVxuICogbm9kZXMgYXJlIGNvbXBhcmVkIGJ5IHN0cmljdCBlcXVhbGl0eSwgaS5lLiBgPT09YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5pc0VxdWFsKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIG9iamVjdCA9PT0gb3RoZXI7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0VxdWFsKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0VxdWFsO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcbiIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwidmFyIGJhc2VJc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19iYXNlSXNUeXBlZEFycmF5JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc1R5cGVkQXJyYXk7XG4iLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXM7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5cyk7XG4gKiAvLyA9PiBbW10sIFtdXVxuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5c1swXSA9PT0gYXJyYXlzWzFdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIHN0dWJBcnJheSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJBcnJheTtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViRmFsc2U7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMCwyMDExLDIwMTIsMjAxMywyMDE0IE1vcmdhbiBSb2RlcmljayBodHRwOi8vcm9kZXJpY2suZGtcbiAqIExpY2Vuc2U6IE1JVCAtIGh0dHA6Ly9tcmducmRyY2subWl0LWxpY2Vuc2Uub3JnXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL21yb2Rlcmljay9QdWJTdWJKU1xuICovXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSl7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIFB1YlN1YiA9IHt9O1xuXG4gICAgaWYgKHJvb3QuUHViU3ViKSB7XG4gICAgICAgIFB1YlN1YiA9IHJvb3QuUHViU3ViO1xuICAgICAgICBjb25zb2xlLndhcm4oXCJQdWJTdWIgYWxyZWFkeSBsb2FkZWQsIHVzaW5nIGV4aXN0aW5nIHZlcnNpb25cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdC5QdWJTdWIgPSBQdWJTdWI7XG4gICAgICAgIGZhY3RvcnkoUHViU3ViKTtcbiAgICB9XG4gICAgLy8gQ29tbW9uSlMgYW5kIE5vZGUuanMgbW9kdWxlIHN1cHBvcnRcbiAgICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKXtcbiAgICAgICAgaWYgKG1vZHVsZSAhPT0gdW5kZWZpbmVkICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBQdWJTdWI7IC8vIE5vZGUuanMgc3BlY2lmaWMgYG1vZHVsZS5leHBvcnRzYFxuICAgICAgICB9XG4gICAgICAgIGV4cG9ydHMuUHViU3ViID0gUHViU3ViOyAvLyBDb21tb25KUyBtb2R1bGUgMS4xLjEgc3BlY1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBQdWJTdWI7IC8vIENvbW1vbkpTXG4gICAgfVxuICAgIC8vIEFNRCBzdXBwb3J0XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbiAgICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpe1xuICAgICAgICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBQdWJTdWI7IH0pO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVuZGVmICovXG4gICAgfVxuXG59KCggdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93ICkgfHwgdGhpcywgZnVuY3Rpb24gKFB1YlN1Yil7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIG1lc3NhZ2VzID0ge30sXG4gICAgICAgIGxhc3RVaWQgPSAtMSxcbiAgICAgICAgQUxMX1NVQlNDUklCSU5HX01TRyA9ICcqJztcblxuICAgIGZ1bmN0aW9uIGhhc0tleXMob2JqKXtcbiAgICAgICAgdmFyIGtleTtcblxuICAgICAgICBmb3IgKGtleSBpbiBvYmope1xuICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpICl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHRocm93cyB0aGUgcGFzc2VkIGV4Y2VwdGlvbiwgZm9yIHVzZSBhcyBhcmd1bWVudCBmb3Igc2V0VGltZW91dFxuICAgICAqIEBhbGlhcyB0aHJvd0V4Y2VwdGlvblxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7IE9iamVjdCB9IGV4IEFuIEVycm9yIG9iamVjdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRocm93RXhjZXB0aW9uKCBleCApe1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gcmVUaHJvd0V4Y2VwdGlvbigpe1xuICAgICAgICAgICAgdGhyb3cgZXg7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsbFN1YnNjcmliZXJXaXRoRGVsYXllZEV4Y2VwdGlvbnMoIHN1YnNjcmliZXIsIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIoIG1lc3NhZ2UsIGRhdGEgKTtcbiAgICAgICAgfSBjYXRjaCggZXggKXtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoIHRocm93RXhjZXB0aW9uKCBleCApLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGxTdWJzY3JpYmVyV2l0aEltbWVkaWF0ZUV4Y2VwdGlvbnMoIHN1YnNjcmliZXIsIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgc3Vic2NyaWJlciggbWVzc2FnZSwgZGF0YSApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGl2ZXJNZXNzYWdlKCBvcmlnaW5hbE1lc3NhZ2UsIG1hdGNoZWRNZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIHZhciBzdWJzY3JpYmVycyA9IG1lc3NhZ2VzW21hdGNoZWRNZXNzYWdlXSxcbiAgICAgICAgICAgIGNhbGxTdWJzY3JpYmVyID0gaW1tZWRpYXRlRXhjZXB0aW9ucyA/IGNhbGxTdWJzY3JpYmVyV2l0aEltbWVkaWF0ZUV4Y2VwdGlvbnMgOiBjYWxsU3Vic2NyaWJlcldpdGhEZWxheWVkRXhjZXB0aW9ucyxcbiAgICAgICAgICAgIHM7XG5cbiAgICAgICAgaWYgKCAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBtZXNzYWdlcywgbWF0Y2hlZE1lc3NhZ2UgKSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAocyBpbiBzdWJzY3JpYmVycyl7XG4gICAgICAgICAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzdWJzY3JpYmVycywgcykpe1xuICAgICAgICAgICAgICAgIGNhbGxTdWJzY3JpYmVyKCBzdWJzY3JpYmVyc1tzXSwgb3JpZ2luYWxNZXNzYWdlLCBkYXRhICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEZWxpdmVyeUZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBkZWxpdmVyTmFtZXNwYWNlZCgpe1xuICAgICAgICAgICAgdmFyIHRvcGljID0gU3RyaW5nKCBtZXNzYWdlICksXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG5cbiAgICAgICAgICAgIC8vIGRlbGl2ZXIgdGhlIG1lc3NhZ2UgYXMgaXQgaXMgbm93XG4gICAgICAgICAgICBkZWxpdmVyTWVzc2FnZShtZXNzYWdlLCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zKTtcblxuICAgICAgICAgICAgLy8gdHJpbSB0aGUgaGllcmFyY2h5IGFuZCBkZWxpdmVyIG1lc3NhZ2UgdG8gZWFjaCBsZXZlbFxuICAgICAgICAgICAgd2hpbGUoIHBvc2l0aW9uICE9PSAtMSApe1xuICAgICAgICAgICAgICAgIHRvcGljID0gdG9waWMuc3Vic3RyKCAwLCBwb3NpdGlvbiApO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoJy4nKTtcbiAgICAgICAgICAgICAgICBkZWxpdmVyTWVzc2FnZSggbWVzc2FnZSwgdG9waWMsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UobWVzc2FnZSwgQUxMX1NVQlNDUklCSU5HX01TRywgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFzRGlyZWN0U3Vic2NyaWJlcnNGb3IoIG1lc3NhZ2UgKSB7XG4gICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgZm91bmQgPSBCb29sZWFuKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggbWVzc2FnZXMsIHRvcGljICkgJiYgaGFzS2V5cyhtZXNzYWdlc1t0b3BpY10pKTtcblxuICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWVzc2FnZUhhc1N1YnNjcmliZXJzKCBtZXNzYWdlICl7XG4gICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgZm91bmQgPSBoYXNEaXJlY3RTdWJzY3JpYmVyc0Zvcih0b3BpYykgfHwgaGFzRGlyZWN0U3Vic2NyaWJlcnNGb3IoQUxMX1NVQlNDUklCSU5HX01TRyksXG4gICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcblxuICAgICAgICB3aGlsZSAoICFmb3VuZCAmJiBwb3NpdGlvbiAhPT0gLTEgKXtcbiAgICAgICAgICAgIHRvcGljID0gdG9waWMuc3Vic3RyKCAwLCBwb3NpdGlvbiApO1xuICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG4gICAgICAgICAgICBmb3VuZCA9IGhhc0RpcmVjdFN1YnNjcmliZXJzRm9yKHRvcGljKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCBzeW5jLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIG1lc3NhZ2UgPSAodHlwZW9mIG1lc3NhZ2UgPT09ICdzeW1ib2wnKSA/IG1lc3NhZ2UudG9TdHJpbmcoKSA6IG1lc3NhZ2U7XG5cbiAgICAgICAgdmFyIGRlbGl2ZXIgPSBjcmVhdGVEZWxpdmVyeUZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICksXG4gICAgICAgICAgICBoYXNTdWJzY3JpYmVycyA9IG1lc3NhZ2VIYXNTdWJzY3JpYmVycyggbWVzc2FnZSApO1xuXG4gICAgICAgIGlmICggIWhhc1N1YnNjcmliZXJzICl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHN5bmMgPT09IHRydWUgKXtcbiAgICAgICAgICAgIGRlbGl2ZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoIGRlbGl2ZXIsIDAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaXNoZXMgdGhlIG1lc3NhZ2UsIHBhc3NpbmcgdGhlIGRhdGEgdG8gaXQncyBzdWJzY3JpYmVyc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBwdWJsaXNoXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBwdWJsaXNoXG4gICAgICogQHBhcmFtIHt9IGRhdGEgVGhlIGRhdGEgdG8gcGFzcyB0byBzdWJzY3JpYmVyc1xuICAgICAqIEByZXR1cm4geyBCb29sZWFuIH1cbiAgICAgKi9cbiAgICBQdWJTdWIucHVibGlzaCA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHJldHVybiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCBmYWxzZSwgUHViU3ViLmltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHVibGlzaGVzIHRoZSBtZXNzYWdlIHN5bmNocm9ub3VzbHksIHBhc3NpbmcgdGhlIGRhdGEgdG8gaXQncyBzdWJzY3JpYmVyc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBwdWJsaXNoU3luY1xuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gcHVibGlzaFxuICAgICAqIEBwYXJhbSB7fSBkYXRhIFRoZSBkYXRhIHRvIHBhc3MgdG8gc3Vic2NyaWJlcnNcbiAgICAgKiBAcmV0dXJuIHsgQm9vbGVhbiB9XG4gICAgICovXG4gICAgUHViU3ViLnB1Ymxpc2hTeW5jID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgcmV0dXJuIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIHRydWUsIFB1YlN1Yi5pbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZXMgdGhlIHBhc3NlZCBmdW5jdGlvbiB0byB0aGUgcGFzc2VkIG1lc3NhZ2UuIEV2ZXJ5IHJldHVybmVkIHRva2VuIGlzIHVuaXF1ZSBhbmQgc2hvdWxkIGJlIHN0b3JlZCBpZiB5b3UgbmVlZCB0byB1bnN1YnNjcmliZVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHN1YnNjcmliZSB0b1xuICAgICAqIEBwYXJhbSB7IEZ1bmN0aW9uIH0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGEgbmV3IG1lc3NhZ2UgaXMgcHVibGlzaGVkXG4gICAgICogQHJldHVybiB7IFN0cmluZyB9XG4gICAgICovXG4gICAgUHViU3ViLnN1YnNjcmliZSA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBmdW5jICl7XG4gICAgICAgIGlmICggdHlwZW9mIGZ1bmMgIT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVzc2FnZSA9ICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N5bWJvbCcpID8gbWVzc2FnZS50b1N0cmluZygpIDogbWVzc2FnZTtcblxuICAgICAgICAvLyBtZXNzYWdlIGlzIG5vdCByZWdpc3RlcmVkIHlldFxuICAgICAgICBpZiAoICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIG1lc3NhZ2VzLCBtZXNzYWdlICkgKXtcbiAgICAgICAgICAgIG1lc3NhZ2VzW21lc3NhZ2VdID0ge307XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JjaW5nIHRva2VuIGFzIFN0cmluZywgdG8gYWxsb3cgZm9yIGZ1dHVyZSBleHBhbnNpb25zIHdpdGhvdXQgYnJlYWtpbmcgdXNhZ2VcbiAgICAgICAgLy8gYW5kIGFsbG93IGZvciBlYXN5IHVzZSBhcyBrZXkgbmFtZXMgZm9yIHRoZSAnbWVzc2FnZXMnIG9iamVjdFxuICAgICAgICB2YXIgdG9rZW4gPSAndWlkXycgKyBTdHJpbmcoKytsYXN0VWlkKTtcbiAgICAgICAgbWVzc2FnZXNbbWVzc2FnZV1bdG9rZW5dID0gZnVuYztcblxuICAgICAgICAvLyByZXR1cm4gdG9rZW4gZm9yIHVuc3Vic2NyaWJpbmdcbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH07XG5cbiAgICBQdWJTdWIuc3Vic2NyaWJlQWxsID0gZnVuY3Rpb24oIGZ1bmMgKXtcbiAgICAgICAgcmV0dXJuIFB1YlN1Yi5zdWJzY3JpYmUoQUxMX1NVQlNDUklCSU5HX01TRywgZnVuYyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZXMgdGhlIHBhc3NlZCBmdW5jdGlvbiB0byB0aGUgcGFzc2VkIG1lc3NhZ2Ugb25jZVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVPbmNlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBzdWJzY3JpYmUgdG9cbiAgICAgKiBAcGFyYW0geyBGdW5jdGlvbiB9IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBhIG5ldyBtZXNzYWdlIGlzIHB1Ymxpc2hlZFxuICAgICAqIEByZXR1cm4geyBQdWJTdWIgfVxuICAgICAqL1xuICAgIFB1YlN1Yi5zdWJzY3JpYmVPbmNlID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGZ1bmMgKXtcbiAgICAgICAgdmFyIHRva2VuID0gUHViU3ViLnN1YnNjcmliZSggbWVzc2FnZSwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIC8vIGJlZm9yZSBmdW5jIGFwcGx5LCB1bnN1YnNjcmliZSBtZXNzYWdlXG4gICAgICAgICAgICBQdWJTdWIudW5zdWJzY3JpYmUoIHRva2VuICk7XG4gICAgICAgICAgICBmdW5jLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBQdWJTdWI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgc3Vic2NyaXB0aW9uc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgY2xlYXJBbGxTdWJzY3JpcHRpb25zXG4gICAgICovXG4gICAgUHViU3ViLmNsZWFyQWxsU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGNsZWFyQWxsU3Vic2NyaXB0aW9ucygpe1xuICAgICAgICBtZXNzYWdlcyA9IHt9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBzdWJzY3JpcHRpb25zIGJ5IHRoZSB0b3BpY1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgY2xlYXJBbGxTdWJzY3JpcHRpb25zXG4gICAgICogQHJldHVybiB7IGludCB9XG4gICAgICovXG4gICAgUHViU3ViLmNsZWFyU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGNsZWFyU3Vic2NyaXB0aW9ucyh0b3BpYyl7XG4gICAgICAgIHZhciBtO1xuICAgICAgICBmb3IgKG0gaW4gbWVzc2FnZXMpe1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlcywgbSkgJiYgbS5pbmRleE9mKHRvcGljKSA9PT0gMCl7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VzW21dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAgIENvdW50IHN1YnNjcmlwdGlvbnMgYnkgdGhlIHRvcGljXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBjb3VudFN1YnNjcmlwdGlvbnNcbiAgICAgKiBAcmV0dXJuIHsgQXJyYXkgfVxuICAgICovXG4gICAgUHViU3ViLmNvdW50U3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGNvdW50U3Vic2NyaXB0aW9ucyh0b3BpYyl7XG4gICAgICAgIHZhciBtO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgICAgdmFyIHRva2VuO1xuICAgICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgICBmb3IgKG0gaW4gbWVzc2FnZXMpIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKHRva2VuIGluIG1lc3NhZ2VzW21dKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgICBHZXRzIHN1YnNjcmlwdGlvbnMgYnkgdGhlIHRvcGljXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBnZXRTdWJzY3JpcHRpb25zXG4gICAgKi9cbiAgICBQdWJTdWIuZ2V0U3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGdldFN1YnNjcmlwdGlvbnModG9waWMpe1xuICAgICAgICB2YXIgbTtcbiAgICAgICAgdmFyIGxpc3QgPSBbXTtcbiAgICAgICAgZm9yIChtIGluIG1lc3NhZ2VzKXtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDApe1xuICAgICAgICAgICAgICAgIGxpc3QucHVzaChtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBzdWJzY3JpcHRpb25zXG4gICAgICpcbiAgICAgKiAtIFdoZW4gcGFzc2VkIGEgdG9rZW4sIHJlbW92ZXMgYSBzcGVjaWZpYyBzdWJzY3JpcHRpb24uXG4gICAgICpcblx0ICogLSBXaGVuIHBhc3NlZCBhIGZ1bmN0aW9uLCByZW1vdmVzIGFsbCBzdWJzY3JpcHRpb25zIGZvciB0aGF0IGZ1bmN0aW9uXG4gICAgICpcblx0ICogLSBXaGVuIHBhc3NlZCBhIHRvcGljLCByZW1vdmVzIGFsbCBzdWJzY3JpcHRpb25zIGZvciB0aGF0IHRvcGljIChoaWVyYXJjaHkpXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVPbmNlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIHwgRnVuY3Rpb24gfSB2YWx1ZSBBIHRva2VuLCBmdW5jdGlvbiBvciB0b3BpYyB0byB1bnN1YnNjcmliZSBmcm9tXG4gICAgICogQGV4YW1wbGUgLy8gVW5zdWJzY3JpYmluZyB3aXRoIGEgdG9rZW5cbiAgICAgKiB2YXIgdG9rZW4gPSBQdWJTdWIuc3Vic2NyaWJlKCdteXRvcGljJywgbXlGdW5jKTtcbiAgICAgKiBQdWJTdWIudW5zdWJzY3JpYmUodG9rZW4pO1xuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgd2l0aCBhIGZ1bmN0aW9uXG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKG15RnVuYyk7XG4gICAgICogQGV4YW1wbGUgLy8gVW5zdWJzY3JpYmluZyBmcm9tIGEgdG9waWNcbiAgICAgKiBQdWJTdWIudW5zdWJzY3JpYmUoJ215dG9waWMnKTtcbiAgICAgKi9cbiAgICBQdWJTdWIudW5zdWJzY3JpYmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgIHZhciBkZXNjZW5kYW50VG9waWNFeGlzdHMgPSBmdW5jdGlvbih0b3BpYykge1xuICAgICAgICAgICAgICAgIHZhciBtO1xuICAgICAgICAgICAgICAgIGZvciAoIG0gaW4gbWVzc2FnZXMgKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDAgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGEgZGVzY2VuZGFudCBvZiB0aGUgdG9waWMgZXhpc3RzOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNUb3BpYyAgICA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIHZhbHVlKSB8fCBkZXNjZW5kYW50VG9waWNFeGlzdHModmFsdWUpICksXG4gICAgICAgICAgICBpc1Rva2VuICAgID0gIWlzVG9waWMgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyxcbiAgICAgICAgICAgIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicsXG4gICAgICAgICAgICByZXN1bHQgPSBmYWxzZSxcbiAgICAgICAgICAgIG0sIG1lc3NhZ2UsIHQ7XG5cbiAgICAgICAgaWYgKGlzVG9waWMpe1xuICAgICAgICAgICAgUHViU3ViLmNsZWFyU3Vic2NyaXB0aW9ucyh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKCBtIGluIG1lc3NhZ2VzICl7XG4gICAgICAgICAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggbWVzc2FnZXMsIG0gKSApe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlc1ttXTtcblxuICAgICAgICAgICAgICAgIGlmICggaXNUb2tlbiAmJiBtZXNzYWdlW3ZhbHVlXSApe1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWVzc2FnZVt2YWx1ZV07XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAvLyB0b2tlbnMgYXJlIHVuaXF1ZSwgc28gd2UgY2FuIGp1c3Qgc3RvcCBoZXJlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoIHQgaW4gbWVzc2FnZSApe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlLCB0KSAmJiBtZXNzYWdlW3RdID09PSB2YWx1ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VbdF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn0pKTtcbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tICcuL3NoaXAuanMnO1xuaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnO1xuXG5leHBvcnQgY2xhc3MgQm90IHtcbiAgY29uc3RydWN0b3Iob3Bwb25lbnRzR2FtZWJvYXJkKSB7XG4gICAgdGhpcy5vcHBvbmVudHNHYW1lYm9hcmQgPSBvcHBvbmVudHNHYW1lYm9hcmQ7XG4gICAgdGhpcy5hdHRhY2tRdWV1ZSA9IFtdO1xuICB9XG5cbiAgYXN5bmMgYXR0YWNrKCkge1xuICAgIGNvbnN0IEJPVF9NT1ZFID0gJ2JvdCBpcyBtYWtpbmcgYSBtb3ZlJztcbiAgICBQdWJTdWIucHVibGlzaChCT1RfTU9WRSk7XG4gICAgYXdhaXQgZGVsYXkoMzAwMCk7XG5cbiAgICBsZXQgb3JpZW50YXRpb24gPSBudWxsO1xuICAgIGxldCB4O1xuICAgIGxldCB5O1xuXG4gICAgaWYgKHRoaXMuYXR0YWNrUXVldWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICB4ID0gdGhpcy5hdHRhY2tRdWV1ZVswXS54O1xuICAgICAgeSA9IHRoaXMuYXR0YWNrUXVldWVbMF0ueTtcbiAgICAgIG9yaWVudGF0aW9uID0gdGhpcy5hdHRhY2tRdWV1ZVswXS5vcmllbnRhdGlvbjtcblxuICAgICAgdGhpcy5hdHRhY2tRdWV1ZS5zaGlmdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICAgICAgLy9tYWtpbmcgc3VyZSBwb3NpdGlvbiBoYXNuJ3QgYmVlbiBhdHRhY2tlZCB5ZXRcbiAgICAgIHdoaWxlIChcbiAgICAgICAgIShcbiAgICAgICAgICB0aGlzLm9wcG9uZW50c0dhbWVib2FyZC5ib2FyZFt4XVt5XSA9PT0gbnVsbCB8fFxuICAgICAgICAgIHRoaXMub3Bwb25lbnRzR2FtZWJvYXJkLmJvYXJkW3hdW3ldIGluc3RhbmNlb2YgU2hpcFxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHBvbmVudHNHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KSkge1xuICAgICAgY29uc3QgZGlyZWN0aW9ucyA9IFtcbiAgICAgICAgeyB4OiAtMSwgeTogMCB9LFxuICAgICAgICB7IHg6IDAsIHk6IDEgfSxcbiAgICAgICAgeyB4OiAxLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMCwgeTogLTEgfSxcbiAgICAgIF07XG5cbiAgICAgIGZvciAoY29uc3QgZCBvZiBkaXJlY3Rpb25zKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldGVkWCA9IHggKyBkLng7XG4gICAgICAgIGNvbnN0IHRhcmdldGVkWSA9IHkgKyBkLnk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRhcmdldGVkWCA+PSAwICYmXG4gICAgICAgICAgdGFyZ2V0ZWRYIDw9IDkgJiZcbiAgICAgICAgICB0YXJnZXRlZFkgPj0gMCAmJlxuICAgICAgICAgIHRhcmdldGVkWSA8PSA5XG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuYXR0YWNrUXVldWUucHVzaCh7XG4gICAgICAgICAgICB4OiB0YXJnZXRlZFgsXG4gICAgICAgICAgICB5OiB0YXJnZXRlZFksXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogZC54ID09PSAwID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvL2xvb3BpbmcgdGhyb3VnaCB0aGUgYXR0YWNrIHF1ZXVlIHRvIHJlbW92ZSBlbGVtZW50cyBvZiBhbiBpbmFkZXF1YXRlIG9yaWVudGF0aW9uXG4gICAgICBpZiAob3JpZW50YXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmF0dGFja1F1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYXR0YWNrUXVldWVbaV0ub3JpZW50YXRpb24gIT09IG9yaWVudGF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmF0dGFja1F1ZXVlLnNwbGljZShpLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gW3gsIHldO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlbGF5KG1zKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuIiwiaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUuY3NzJztcbmltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJztcblxuY29uc3QgTkVXX0dBTUUgPSAnbmV3IGdhbWUnO1xuY29uc3QgTkVYVF9QTEFZRVIgPSAnbmV4dCBwbGF5ZXJzIG1vdmUnO1xuY29uc3QgQk9UX01PVkUgPSAnYm90IGlzIG1ha2luZyBhIG1vdmUnO1xuY29uc3QgZWRpdEJvYXJkRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtYm9hcmQtZGlhbG9nJyk7XG5cbmV4cG9ydCBjbGFzcyBET01NYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc2V0VXBQbGF5QWdhaW5CdXR0b24oKTtcbiAgICBzZXROYW1lQ2xpY2tMaXN0ZW5lcnMoKTtcblxuICAgIC8vcmVzZXQgYnV0dG9uXG4gICAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQtYnV0dG9uJyk7XG5cbiAgICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIFB1YlN1Yi5wdWJsaXNoKE5FV19HQU1FKTtcbiAgICB9KTtcblxuICAgIC8vaGVhZGVyIGJ1dHRvbiB0byBzaG93IHN0YXJ0IG1lbnVcbiAgICBjb25zdCBzdGFydE1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtbWVudS1idXR0b24nKTtcbiAgICBzdGFydE1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnNob3dTdGFydE1lbnUoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2hvd1N0YXJ0TWVudSgpO1xuICB9XG5cbiAgcG9wdWxhdGVBY3RpdmVQbGF5ZXJzQm9hcmQocGxheWVyKSB7XG4gICAgY29uc3QgYm9hcmQgPSBwbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkO1xuXG4gICAgY29uc3QgYm9hcmRHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm9hcmRHcmlkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWdyaWQnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBpZiAoYm9hcmRbaV1bal0gPT09ICdoaXQnKSB7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QgPSAnaGl0LXNoaXAnO1xuICAgICAgICB9IGVsc2UgaWYgKGJvYXJkW2ldW2pdID09PSAnYXR0YWNrZWQnKSB7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QgPSAnYXR0YWNrZWQnO1xuXG4gICAgICAgICAgY29uc3QgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgZG90LmNsYXNzTGlzdC5hZGQoJ2RvdCcpO1xuICAgICAgICAgIGl0ZW0uYXBwZW5kKGRvdCk7XG4gICAgICAgIH0gZWxzZSBpZiAoYm9hcmRbaV1bal0gIT09IG51bGwgJiYgcGxheWVyLnR5cGUgIT09ICdjb21wdXRlcicpIHtcbiAgICAgICAgICAvL3NlY29uZCBjb25kaXRpb24gbWFrZXMgc3VyZSB0aGUgcmVhbCBwbGF5ZXIgZG9lc24ndCBnZXQgYSBnbGltcHNlIG9mIGJvdCdzIGJvYXJkXG5cbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdCA9ICdzaGlwJztcblxuICAgICAgICAgIGl0ZW0uaWQgPSBgJHtpfS0ke2p9YDtcblxuICAgICAgICAgIC8vZHJhZyBhbmQgZHJvcFxuICAgICAgICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmlzRWRpdGFibGUpIHtcbiAgICAgICAgICAgIGl0ZW0uZHJhZ2dhYmxlID0gdHJ1ZTtcblxuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCBldmVudC50YXJnZXQuaWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBsYXllci5nYW1lYm9hcmQuaXNFZGl0YWJsZSkge1xuICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRyb3BwZWRJZCA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHhDb29yZGluYXRlID0gZHJvcHBlZElkLmNoYXJBdCgwKTtcbiAgICAgICAgICAgIGNvbnN0IHlDb29yZGluYXRlID0gZHJvcHBlZElkLmNoYXJBdCgyKTtcblxuICAgICAgICAgICAgcGxheWVyLmdhbWVib2FyZC5tb3ZlU2hpcChcbiAgICAgICAgICAgICAgcGFyc2VJbnQoeENvb3JkaW5hdGUpLFxuICAgICAgICAgICAgICBwYXJzZUludCh5Q29vcmRpbmF0ZSksXG4gICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgIGpcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGVBY3RpdmVQbGF5ZXJzQm9hcmQocGxheWVyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYm9hcmQtaXRlbScpO1xuXG4gICAgICAgIGJvYXJkR3JpZC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke3BsYXllci5lbGVtZW50UXVlcnl9IC5wbGF5ZXJzLW5hbWVgKS5zdHlsZS5jb2xvciA9XG4gICAgICAnIzM0NDk1ZSc7XG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYCR7cGxheWVyLmVsZW1lbnRRdWVyeX0gIC5ib2FyZC1ncmlkLWNvbnRhaW5lcmBcbiAgICApO1xuXG4gICAgYm9hcmRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgYm9hcmRDb250YWluZXIuYXBwZW5kKGJvYXJkR3JpZCk7XG4gIH1cblxuICBwb3B1bGF0ZU9wcG9uZW50c0JvYXJkKHBsYXllcikge1xuICAgIGNvbnN0IGJvYXJkID0gcGxheWVyLmdhbWVib2FyZC5ib2FyZDtcblxuICAgIGNvbnN0IGJvYXJkR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvYXJkR3JpZC5jbGFzc0xpc3QuYWRkKCdib2FyZC1ncmlkJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgaWYgKCFwbGF5ZXIuZ2FtZWJvYXJkLmlzRWRpdGFibGUpIHtcbiAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGksIGopO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvYXJkW2ldW2pdID09PSAnaGl0Jykge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0ID0gJ2hpdC1zaGlwJztcbiAgICAgICAgfSBlbHNlIGlmIChib2FyZFtpXVtqXSA9PT0gJ2F0dGFja2VkJykge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0ID0gJ2F0dGFja2VkJztcblxuICAgICAgICAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGRvdC5jbGFzc0xpc3QuYWRkKCdkb3QnKTtcbiAgICAgICAgICBpdGVtLmFwcGVuZChkb3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdib2FyZC1pdGVtJyk7XG5cbiAgICAgICAgYm9hcmRHcmlkLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7cGxheWVyLmVsZW1lbnRRdWVyeX0gLnBsYXllcnMtbmFtZWApLnN0eWxlLmNvbG9yID1cbiAgICAgICcjZmZmJztcbiAgICBjb25zdCBib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgJHtwbGF5ZXIuZWxlbWVudFF1ZXJ5fSAgLmJvYXJkLWdyaWQtY29udGFpbmVyYFxuICAgICk7XG5cbiAgICBib2FyZENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBib2FyZENvbnRhaW5lci5hcHBlbmQoYm9hcmRHcmlkKTtcbiAgfVxuXG4gIHBvcHVsYXRlQm9hcmQoZmlyc3RQbGF5ZXIsIHNlY29uZFBsYXllciwgcGxheWVyU3dpdGNoZWQgPSBmYWxzZSkge1xuICAgIGlmIChmaXJzdFBsYXllci5pc0FjdGl2ZSkge1xuICAgICAgdGhpcy5wb3B1bGF0ZUFjdGl2ZVBsYXllcnNCb2FyZChmaXJzdFBsYXllcik7XG4gICAgICB0aGlzLnBvcHVsYXRlT3Bwb25lbnRzQm9hcmQoc2Vjb25kUGxheWVyKTtcblxuICAgICAgaWYgKGZpcnN0UGxheWVyLmdhbWVib2FyZC5pc0VkaXRhYmxlKSB0aGlzLnNob3dFZGl0TWVzc2FnZShmaXJzdFBsYXllcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9wdWxhdGVBY3RpdmVQbGF5ZXJzQm9hcmQoc2Vjb25kUGxheWVyKTtcbiAgICAgIHRoaXMucG9wdWxhdGVPcHBvbmVudHNCb2FyZChmaXJzdFBsYXllcik7XG5cbiAgICAgIGlmIChzZWNvbmRQbGF5ZXIudHlwZSA9PT0gJ3JlYWwnICYmIHNlY29uZFBsYXllci5nYW1lYm9hcmQuaXNFZGl0YWJsZSlcbiAgICAgICAgdGhpcy5zaG93RWRpdE1lc3NhZ2Uoc2Vjb25kUGxheWVyKTtcbiAgICB9XG5cbiAgICBpZiAoc2Vjb25kUGxheWVyLnR5cGUgPT09ICdyZWFsJyAmJiBwbGF5ZXJTd2l0Y2hlZClcbiAgICAgIHRoaXMuc2hvd1Bhc3NEZXZpY2VEaWFsb2coXG4gICAgICAgIGZpcnN0UGxheWVyLmlzQWN0aXZlID8gZmlyc3RQbGF5ZXIubmFtZSA6IHNlY29uZFBsYXllci5uYW1lXG4gICAgICApO1xuICAgIGVsc2UgaWYgKHNlY29uZFBsYXllci50eXBlID09PSAnY29tcHV0ZXInKSBlZGl0Qm9hcmREaWFsb2cuY2xvc2UoKTtcbiAgfVxuXG4gIHNob3dFbmREaWFsb2cod2lubmVyKSB7XG4gICAgY29uc3QgZW5kRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZC1kaWFsb2cnKTtcblxuICAgIGlmICh3aW5uZXIudHlwZSA9PT0gJ2NvbXB1dGVyJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZC1kaWFsb2cgLm1lc3NhZ2UnKS50ZXh0Q29udGVudCA9XG4gICAgICAgICdZb3UgbG9zdC4gOi8nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5kLWRpYWxvZyAubWVzc2FnZScpLnRleHRDb250ZW50ID1cbiAgICAgICAgYENvbmdyYXR1bGF0aW9ucyAke3dpbm5lci5uYW1lfSwgeW91IHdvbiFgO1xuICAgIH1cblxuICAgIGVuZERpYWxvZy5zaG93TW9kYWwoKTtcbiAgfVxuXG4gIHNob3dTdGFydE1lbnUoKSB7XG4gICAgY29uc3QgUkVBTF9QTEFZRVJTX0dBTUUgPSAnc3RhcnQgZ2FtZSB3aXRoIHJlYWwgcGxheWVycyc7XG4gICAgY29uc3QgR0FNRV9XSVRIX0JPVCA9ICdzdGFydCBnYW1lIHdpdGggYSBib3QnO1xuXG4gICAgY29uc3Qgc3RhcnREaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtZGlhbG9nJyk7XG4gICAgc3RhcnREaWFsb2cuc2hvd01vZGFsKCk7XG5cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5yZWFsLW9wcG9uZW50LWJ1dHRvbicpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKFJFQUxfUExBWUVSU19HQU1FKTtcblxuICAgICAgICBzdGFydERpYWxvZy5jbG9zZSgpO1xuICAgICAgfSk7XG5cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXdpdGgtYm90LWJ1dHRvbicpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKEdBTUVfV0lUSF9CT1QpO1xuXG4gICAgICAgIHN0YXJ0RGlhbG9nLmNsb3NlKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHNob3dQYXNzRGV2aWNlRGlhbG9nKG5leHRQbGF5ZXJOYW1lKSB7XG4gICAgY29uc3QgcGFzc0RldmljZURpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzLWRldmljZS1kaWFsb2cnKTtcbiAgICBjb25zdCBuZXh0UGxheWVyTmFtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLnBhc3MtZGV2aWNlLWRpYWxvZyBidXR0b24gc3BhbidcbiAgICApO1xuICAgIGNvbnN0IG5leHRQbGF5ZXJOYW1lSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcucGFzcy1kZXZpY2UtZGlhbG9nIGgyIHNwYW4nXG4gICAgKTtcbiAgICBjb25zdCBkZXZpY2VQYXNzZWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy5wYXNzLWRldmljZS1kaWFsb2cgYnV0dG9uJ1xuICAgICk7XG5cbiAgICBuZXh0UGxheWVyTmFtZUhlYWRlci50ZXh0Q29udGVudCA9IG5leHRQbGF5ZXJOYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgbmV4dFBsYXllck5hbWVCdXR0b24udGV4dENvbnRlbnQgPSBuZXh0UGxheWVyTmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgIHBhc3NEZXZpY2VEaWFsb2cuc2hvd01vZGFsKCk7XG5cbiAgICBkZXZpY2VQYXNzZWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBwYXNzRGV2aWNlRGlhbG9nLmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cblxuICBzaG93RWRpdE1lc3NhZ2UocGxheWVyKSB7XG4gICAgY29uc3QgZWRpdEJvYXJkRGlhbG9nQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcuZWRpdC1ib2FyZC1kaWFsb2ctY29udGFpbmVyJ1xuICAgICk7XG5cbiAgICBlZGl0Qm9hcmREaWFsb2dDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSAnWW91IG1heSBtb3ZlIHNoaXBzIGFyb3VuZCB0aGUgYm9hcmQgbm93Lic7XG5cbiAgICBjb25zdCBkb25lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZG9uZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdET05FJztcbiAgICBlZGl0Qm9hcmREaWFsb2dDb250YWluZXIuYXBwZW5kKG1lc3NhZ2UsIGRvbmVCdXR0b24pO1xuXG4gICAgZWRpdEJvYXJkRGlhbG9nLnNob3coKTtcbiAgICBkb25lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZWRpdEJvYXJkRGlhbG9nLmNsb3NlKCk7XG4gICAgICBwbGF5ZXIuZ2FtZWJvYXJkLmlzRWRpdGFibGUgPSBmYWxzZTtcblxuICAgICAgUHViU3ViLnB1Ymxpc2goTkVYVF9QTEFZRVIpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldFVwUGxheUFnYWluQnV0dG9uKCkge1xuICBjb25zdCBwbGF5QWdhaW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheS1hZ2Fpbi1idXR0b24nKTtcblxuICBwbGF5QWdhaW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgUHViU3ViLnB1Ymxpc2goTkVXX0dBTUUpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZC1kaWFsb2cnKS5jbG9zZSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0TmFtZUNsaWNrTGlzdGVuZXJzKCkge1xuICBjb25zdCBjaGFuZ2VOYW1lRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW5nZS1uYW1lcy1kaWFsb2cnKTtcblxuICBjb25zdCBwbGF5ZXJzTmFtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwbGF5ZXJzLW5hbWUnKTtcblxuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgcGxheWVyc05hbWVzKSB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNoYW5nZU5hbWVEaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBjaGFuZ2VOYW1lRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2UtbmFtZXMtZGlhbG9nIGZvcm0nKTtcblxuICBjaGFuZ2VOYW1lRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdXBkYXRlTmFtZXMoXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlyc3QtbmFtZS1pbnB1dCcpLnZhbHVlLFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlY29uZC1uYW1lLWlucHV0JykudmFsdWVcbiAgICApO1xuXG4gICAgY2hhbmdlTmFtZUZvcm0ucmVzZXQoKTtcbiAgICBjaGFuZ2VOYW1lRGlhbG9nLmNsb3NlKCk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2hhbmdlTmFtZURpYWxvZy5jbG9zZSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlTmFtZXMobmFtZTEsIG5hbWUyKSB7XG4gIGNvbnN0IGZpcnN0TmFtZVBsYXllck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcuZmlyc3QtcGxheWVyIC5wbGF5ZXJzLW5hbWUnXG4gICk7XG4gIGNvbnN0IHNlY29uZE5hbWVQbGF5ZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLnNlY29uZC1wbGF5ZXIgLnBsYXllcnMtbmFtZSdcbiAgKTtcblxuICBmaXJzdE5hbWVQbGF5ZXJOYW1lLnRleHRDb250ZW50ID0gbmFtZTEudHJpbSgpID09PSAnJyA/ICdQbGF5ZXIgMScgOiBuYW1lMTtcbiAgc2Vjb25kTmFtZVBsYXllck5hbWUudGV4dENvbnRlbnQgPSBuYW1lMi50cmltKCkgPT09ICcnID8gJ1BsYXllciAyJyA6IG5hbWUyO1xuXG4gIGNvbnN0IENIQU5HRV9OQU1FUyA9ICdjaGFuZ2UgbmFtZXMnO1xuICBQdWJTdWIucHVibGlzaChDSEFOR0VfTkFNRVMsIFtuYW1lMSwgbmFtZTJdKTtcbn1cblxuUHViU3ViLnN1YnNjcmliZShCT1RfTU9WRSwgKCkgPT4ge1xuICBjb25zdCBib3RNb3ZlRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvdC1hdHRhY2stZGlhbG9nJyk7XG4gIGJvdE1vdmVEaWFsb2cuc2hvd01vZGFsKCk7XG5cbiAgc2V0VGltZW91dCgoKSA9PiBib3RNb3ZlRGlhbG9nLmNsb3NlKCksIDIwMDApO1xufSk7XG4iLCJpbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwJztcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC9pc0VxdWFsJztcblxuZXhwb3J0IGNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMCB9LCAoKSA9PiBBcnJheSgxMCkuZmlsbChudWxsKSk7XG4gICAgdGhpcy5taXNzZWQgPSBbXTtcbiAgICB0aGlzLmlzRWRpdGFibGUgPSB0cnVlO1xuICB9XG5cbiAgaXNFbXB0eSh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuYm9hcmRbeF1beV0gPT09IG51bGw7XG4gIH1cblxuICBwbGFjZVNoaXAoc2hpcCwgeCwgeSwgb3JpZW50YXRpb24pIHtcbiAgICAvL2NoZWNraW5nIGlmIHRoZXJlIGlzIGZyZWUgc3BhY2UgaW4gYW5kIGFyb3VuZCB0aGUgY2hvc2VuIGFyZWFcbiAgICAvL2Nhc2UgZm9yIGEgaG9yaXpvbnRhbGx5IGFsaWduZWQgc2hpcFxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAvL2NoZWNraW5nIGlmIHNoaXAgaXMgdG9vIGxhcmdlXG4gICAgICBpZiAoeSArIHNoaXAubGVuZ3RoID4gMTApIHJldHVybiBmYWxzZTtcblxuICAgICAgaWYgKCF0aGlzLmNhblNoaXBCZVBsYWNlZEhvcml6b250YWxseShzaGlwLmxlbmd0aCwgeCwgeSkpIHJldHVybiBmYWxzZTtcblxuICAgICAgLy9wbGFjaW5nIGEgc2hpcFxuICAgICAgZm9yIChsZXQgaiA9IHk7IGogPCB5ICsgc2hpcC5sZW5ndGg7IGorKykge1xuICAgICAgICB0aGlzLmJvYXJkW3hdW2pdID0gc2hpcDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vY2FzZSBmb3IgYSB2ZXJ0aWNhbGx5IGFsaWduZWQgc2hpcFxuICAgIGVsc2Uge1xuICAgICAgLy9jaGVja2luZyBpZiBzaGlwIGlzIHRvbyBsYXJnZVxuICAgICAgaWYgKHggKyBzaGlwLmxlbmd0aCA+IDEwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGlmICghdGhpcy5jYW5TaGlwQmVQbGFjZWRWZXJ0aWNhbGx5KHNoaXAubGVuZ3RoLCB4LCB5KSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAvL3BsYWNpbmcgYSBzaGlwXG4gICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbaV1beV0gPSBzaGlwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjYW5TaGlwQmVQbGFjZWRIb3Jpem9udGFsbHkobGVuZ3RoLCB4LCB5LCBzaGlwRXhjZXB0aW9uID0gMCkge1xuICAgIGZvciAobGV0IGkgPSBNYXRoLm1heCh4IC0gMSwgMCk7IGkgPD0gTWF0aC5taW4oOSwgeCArIDEpOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSBNYXRoLm1heCgwLCB5IC0gMSk7IGogPD0gTWF0aC5taW4oOSwgeSArIGxlbmd0aCk7IGorKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIXRoaXMuaXNFbXB0eShpLCBqKSAmJlxuICAgICAgICAgIHRoaXMuYm9hcmRbaV1bal0gJiZcbiAgICAgICAgICAhaXNFcXVhbCh0aGlzLmJvYXJkW2ldW2pdLCBzaGlwRXhjZXB0aW9uKVxuICAgICAgICApXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY2FuU2hpcEJlUGxhY2VkVmVydGljYWxseShsZW5ndGgsIHgsIHksIHNoaXBFeGNlcHRpb24gPSAwKSB7XG4gICAgZm9yIChsZXQgaiA9IE1hdGgubWF4KDAsIHkgLSAxKTsgaiA8PSBNYXRoLm1pbig5LCB5ICsgMSk7IGorKykge1xuICAgICAgZm9yIChsZXQgaSA9IE1hdGgubWF4KDAsIHggLSAxKTsgaSA8PSBNYXRoLm1pbig5LCB4ICsgbGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0VtcHR5KGksIGopICYmICFpc0VxdWFsKHRoaXMuYm9hcmRbaV1bal0sIHNoaXBFeGNlcHRpb24pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICAvL2RpcmVjdGlvbnMgZm9yIGFkamFjZW50IGRpYWdvbmFsIG5laWdoYm9yc1xuICAgIGNvbnN0IGRpcmVjdGlvbnMgPSBbXG4gICAgICB7IHg6IC0xLCB5OiAtMSB9LFxuICAgICAgeyB4OiAtMSwgeTogMSB9LFxuICAgICAgeyB4OiAxLCB5OiAtMSB9LFxuICAgICAgeyB4OiAxLCB5OiAxIH0sXG4gICAgXTtcblxuICAgIGxldCB3YXNIaXQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLmJvYXJkW3hdW3ldID09PSBudWxsKSB7XG4gICAgICB0aGlzLmJvYXJkW3hdW3ldID0gJ2F0dGFja2VkJztcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdGhpcy5ib2FyZFt4XVt5XSAhPT0gbnVsbCAmJlxuICAgICAgdGhpcy5ib2FyZFt4XVt5XSAhPT0gJ2hpdCcgJiZcbiAgICAgIHRoaXMuYm9hcmRbeF1beV0gIT09ICdhdHRhY2tlZCdcbiAgICApIHtcbiAgICAgIHRoaXMuYm9hcmRbeF1beV0uaGl0KCk7XG4gICAgICB0aGlzLmJvYXJkW3hdW3ldID0gJ2hpdCc7XG5cbiAgICAgIC8vbWFya2luZyBhZGphY2VudCBkaWFnb25hbCBuZWlnaGJvcnMgYXMgYXR0YWNrZWRcbiAgICAgIGZvciAoY29uc3QgZCBvZiBkaXJlY3Rpb25zKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldGVkWCA9IHggKyBkLng7XG4gICAgICAgIGNvbnN0IHRhcmdldGVkWSA9IHkgKyBkLnk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRhcmdldGVkWCA+PSAwICYmXG4gICAgICAgICAgdGFyZ2V0ZWRYIDw9IDkgJiZcbiAgICAgICAgICB0YXJnZXRlZFkgPj0gMCAmJlxuICAgICAgICAgIHRhcmdldGVkWSA8PSA5XG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuYm9hcmRbdGFyZ2V0ZWRYXVt0YXJnZXRlZFldID0gJ2F0dGFja2VkJztcbiAgICAgICAgfVxuXG4gICAgICAgIHdhc0hpdCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IFNBTUVfUExBWUVSID0gJ3NhbWUgcGxheWVycyBtb3ZlJztcbiAgICAgIFB1YlN1Yi5wdWJsaXNoKFNBTUVfUExBWUVSKTtcblxuICAgICAgcmV0dXJuIHdhc0hpdDtcbiAgICB9XG5cbiAgICBjb25zdCBORVhUX1BMQVlFUiA9ICduZXh0IHBsYXllcnMgbW92ZSc7XG4gICAgUHViU3ViLnB1Ymxpc2goTkVYVF9QTEFZRVIpO1xuXG4gICAgdGhpcy5taXNzZWQucHVzaChbNiwgNF0pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGhhdmVBbGxCZWVuU3VuaygpIHtcbiAgICByZXR1cm4gIXRoaXMuYm9hcmQuc29tZSgocm93KSA9PlxuICAgICAgcm93LnNvbWUoKGl0ZW0pID0+IGl0ZW0gIT09IG51bGwgJiYgaXRlbSAhPT0gJ2hpdCcgJiYgaXRlbSAhPT0gJ2F0dGFja2VkJylcbiAgICApO1xuICB9XG5cbiAgI2lzUG9zaXRpb25WYWxpZCh4LCB5KSB7XG4gICAgcmV0dXJuIHggPj0gMCAmJiB4IDw9IDkgJiYgeSA+PSAwICYmIHkgPD0gOTtcbiAgfVxuXG4gIGdldE1vdmVkU2hpcFBvc2l0aW9ucyhvcmlnaW5hbFgsIG9yaWdpbmFsWSwgbmV3WCwgbmV3WSkge1xuICAgIGNvbnN0IGRpcmVjdGlvbnMgPSBbXG4gICAgICB7IHg6IC0xLCB5OiAwIH0sXG4gICAgICB7IHg6IDEsIHk6IDAgfSxcbiAgICAgIHsgeDogMCwgeTogMSB9LFxuICAgICAgeyB4OiAwLCB5OiAtMSB9LFxuICAgIF07XG5cbiAgICBsZXQgb2xkUG9zaXRpb25zID0gW1tvcmlnaW5hbFgsIG9yaWdpbmFsWV1dO1xuICAgIGxldCBuZXdQb3NpdGlvbnMgPSBbW25ld1gsIG5ld1ldXTtcblxuICAgIGZvciAobGV0IGRpcmVjdGlvbkluZGV4ID0gMDsgZGlyZWN0aW9uSW5kZXggPD0gMzsgZGlyZWN0aW9uSW5kZXgrKykge1xuICAgICAgbGV0IHhNb3ZlID0gZGlyZWN0aW9uc1tkaXJlY3Rpb25JbmRleF0ueDtcbiAgICAgIGxldCB5TW92ZSA9IGRpcmVjdGlvbnNbZGlyZWN0aW9uSW5kZXhdLnk7XG5cbiAgICAgIC8vZnVuY3Rpb24gaXNFbXB0eSBtYXkgZmFpbCBpZiAoeCx5KSBpZiBvdXQgb2YgYm9hcmQgYm91bmRzLCBzbyBpdCBtdXN0IGJlIGluIHNlY29uZCBwbGFjZVxuICAgICAgd2hpbGUgKFxuICAgICAgICB0aGlzLiNpc1Bvc2l0aW9uVmFsaWQob3JpZ2luYWxYICsgeE1vdmUsIG9yaWdpbmFsWSArIHlNb3ZlKSAmJlxuICAgICAgICAhdGhpcy5pc0VtcHR5KG9yaWdpbmFsWCArIHhNb3ZlLCBvcmlnaW5hbFkgKyB5TW92ZSlcbiAgICAgICkge1xuICAgICAgICBjb25zdCBuZXdYSXRlbSA9IG5ld1ggKyB4TW92ZTtcbiAgICAgICAgY29uc3QgbmV3WUl0ZW0gPSBuZXdZICsgeU1vdmU7XG5cbiAgICAgICAgaWYgKCF0aGlzLiNpc1Bvc2l0aW9uVmFsaWQobmV3WEl0ZW0sIG5ld1lJdGVtKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLmlzRW1wdHkobmV3WEl0ZW0sIG5ld1lJdGVtKSB8fFxuICAgICAgICAgIGlzRXF1YWwoXG4gICAgICAgICAgICB0aGlzLmJvYXJkW25ld1hJdGVtXVtuZXdZSXRlbV0sXG4gICAgICAgICAgICB0aGlzLmJvYXJkW29yaWdpbmFsWF1bb3JpZ2luYWxZXVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgbmV3UG9zaXRpb25zLnB1c2goW25ld1hJdGVtLCBuZXdZSXRlbV0pO1xuICAgICAgICAgIG9sZFBvc2l0aW9ucy5wdXNoKFtvcmlnaW5hbFggKyB4TW92ZSwgb3JpZ2luYWxZICsgeU1vdmVdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB4TW92ZSA9IGRpcmVjdGlvbnNbZGlyZWN0aW9uSW5kZXhdLnggKyB4TW92ZTtcbiAgICAgICAgeU1vdmUgPSBkaXJlY3Rpb25zW2RpcmVjdGlvbkluZGV4XS55ICsgeU1vdmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld1Bvc2l0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuY2FuU2hpcEJlUGxhY2VkSG9yaXpvbnRhbGx5KFxuICAgICAgICAgIG5ld1Bvc2l0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgbmV3UG9zaXRpb25zWzBdWzBdLFxuICAgICAgICAgIG5ld1Bvc2l0aW9uc1swXVsxXSxcbiAgICAgICAgICB0aGlzLmJvYXJkW29yaWdpbmFsWF1bb3JpZ2luYWxZXVxuICAgICAgICApXG4gICAgICApXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiB7IG5ld1Bvc2l0aW9uczogbmV3UG9zaXRpb25zLCBvbGRQb3NpdGlvbnM6IG9sZFBvc2l0aW9ucyB9O1xuICAgIH1cbiAgICAvL2hvcml6b250YWxcbiAgICBlbHNlIGlmIChuZXdQb3NpdGlvbnNbMF1bMF0gPT09IG5ld1Bvc2l0aW9uc1sxXVswXSkge1xuICAgICAgbmV3UG9zaXRpb25zLnNvcnQoKGEsIGIpID0+IGFbMV0gLSBiWzFdKTtcblxuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5jYW5TaGlwQmVQbGFjZWRIb3Jpem9udGFsbHkoXG4gICAgICAgICAgbmV3UG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBuZXdQb3NpdGlvbnNbMF1bMF0sXG4gICAgICAgICAgbmV3UG9zaXRpb25zWzBdWzFdLFxuICAgICAgICAgIHRoaXMuYm9hcmRbb3JpZ2luYWxYXVtvcmlnaW5hbFldXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBvbGRQb3NpdGlvbnMuc29ydCgoYSwgYikgPT4gYVsxXSAtIGJbMV0pO1xuICAgIH1cbiAgICAvL3ZlcnRpY2FsXG4gICAgZWxzZSBpZiAobmV3UG9zaXRpb25zWzBdWzFdID09PSBuZXdQb3NpdGlvbnNbMV1bMV0pIHtcbiAgICAgIG5ld1Bvc2l0aW9ucy5zb3J0KChhLCBiKSA9PiBhWzBdIC0gYlswXSk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuY2FuU2hpcEJlUGxhY2VkVmVydGljYWxseShcbiAgICAgICAgICBuZXdQb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIG5ld1Bvc2l0aW9uc1swXVswXSxcbiAgICAgICAgICBuZXdQb3NpdGlvbnNbMF1bMV0sXG4gICAgICAgICAgdGhpcy5ib2FyZFtvcmlnaW5hbFhdW29yaWdpbmFsWV1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgIG9sZFBvc2l0aW9ucy5zb3J0KChhLCBiKSA9PiBhWzBdIC0gYlswXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbmV3UG9zaXRpb25zOiBuZXdQb3NpdGlvbnMsIG9sZFBvc2l0aW9uczogb2xkUG9zaXRpb25zIH07XG4gIH1cblxuICAvL2xvZ2ljIGZvciBtb3ZpbmcgdGhlIHNoaXAgc2hvdWxkIGJlIGxvY2F0ZWQgaGVyZSwgbm90IGluIGRvbW1hbmFnZXIsIGZvY3VzIG9mIGRvbW1hbmFnZXIgc2hvdWxkIGJlIHRoZSBET00sIGRpc3BsYXlpbmcgZGF0YVxuICBtb3ZlU2hpcChvcmlnaW5hbFgsIG9yaWdpbmFsWSwgbmV3WCwgbmV3WSkge1xuICAgIGlmIChcbiAgICAgIChvcmlnaW5hbFggPT09IG5ld1ggJiYgb3JpZ2luYWxZID09PSBuZXdZKSB8fFxuICAgICAgKCF0aGlzLmlzRW1wdHkobmV3WCwgbmV3WSkgJiZcbiAgICAgICAgIWlzRXF1YWwodGhpcy5ib2FyZFtvcmlnaW5hbFhdW29yaWdpbmFsWV0sIHRoaXMuYm9hcmRbbmV3WF1bbmV3WV0pKVxuICAgIClcbiAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHBvc2l0aW9ucyA9IHRoaXMuZ2V0TW92ZWRTaGlwUG9zaXRpb25zKFxuICAgICAgb3JpZ2luYWxYLFxuICAgICAgb3JpZ2luYWxZLFxuICAgICAgbmV3WCxcbiAgICAgIG5ld1lcbiAgICApO1xuXG4gICAgaWYgKCFwb3NpdGlvbnMpIHJldHVybiBmYWxzZTtcblxuICAgIC8vcmVtb3ZlIHRoZSBvbGQgc2hpcFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zaXRpb25zLm9sZFBvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgW3hPbGQsIHlPbGRdID0gcG9zaXRpb25zLm9sZFBvc2l0aW9uc1tpXTtcblxuICAgICAgdGhpcy5ib2FyZFt4T2xkXVt5T2xkXSA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5wbGFjZVNoaXAoXG4gICAgICBuZXcgU2hpcChwb3NpdGlvbnMubmV3UG9zaXRpb25zLmxlbmd0aCksXG4gICAgICBwb3NpdGlvbnMubmV3UG9zaXRpb25zWzBdWzBdLFxuICAgICAgcG9zaXRpb25zLm5ld1Bvc2l0aW9uc1swXVsxXSxcbiAgICAgIHBvc2l0aW9ucy5uZXdQb3NpdGlvbnMubGVuZ3RoID09PSAxXG4gICAgICAgID8gJ2hvcml6b250YWwnXG4gICAgICAgIDogcG9zaXRpb25zLm5ld1Bvc2l0aW9uc1swXVswXSA9PT0gcG9zaXRpb25zLm5ld1Bvc2l0aW9uc1sxXVswXVxuICAgICAgICAgID8gJ2hvcml6b250YWwnXG4gICAgICAgICAgOiAndmVydGljYWwnXG4gICAgKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZ2V0Qm9hdExlbmd0aHNGcm9tUG9zaXRpb24oeCwgeSkge1xuICAgIGNvbnN0IGRpcmVjdGlvbnMgPSBbXG4gICAgICB7IHg6IC0xLCB5OiAwLCBxdWFudGl0eTogMCB9LFxuICAgICAgeyB4OiAwLCB5OiAxLCBxdWFudGl0eTogMCB9LFxuICAgICAgeyB4OiAxLCB5OiAwLCBxdWFudGl0eTogMCB9LFxuICAgICAgeyB4OiAwLCB5OiAtMSwgcXVhbnRpdHk6IDAgfSxcbiAgICBdO1xuXG4gICAgZm9yIChsZXQgZGlyZWN0aW9uSW5kZXggPSAwOyBkaXJlY3Rpb25JbmRleCA8PSAzOyBkaXJlY3Rpb25JbmRleCsrKSB7XG4gICAgICBsZXQgY3VycmVudFggPSB4ICsgZGlyZWN0aW9uc1tkaXJlY3Rpb25JbmRleF0ueDtcbiAgICAgIGxldCBjdXJyZW50WSA9IHkgKyBkaXJlY3Rpb25zW2RpcmVjdGlvbkluZGV4XS55O1xuXG4gICAgICB3aGlsZSAoXG4gICAgICAgIHRoaXMuI2lzUG9zaXRpb25WYWxpZChjdXJyZW50WCwgY3VycmVudFkpICYmXG4gICAgICAgICF0aGlzLmlzRW1wdHkoY3VycmVudFgsIGN1cnJlbnRZKVxuICAgICAgKSB7XG4gICAgICAgIGRpcmVjdGlvbnNbZGlyZWN0aW9uSW5kZXhdLnF1YW50aXR5Kys7XG5cbiAgICAgICAgY3VycmVudFggKz0gZGlyZWN0aW9uc1tkaXJlY3Rpb25JbmRleF0ueDtcbiAgICAgICAgY3VycmVudFkgKz0gZGlyZWN0aW9uc1tkaXJlY3Rpb25JbmRleF0ueTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgYWJvdmU6IGRpcmVjdGlvbnNbMF0ucXVhbnRpdHksXG4gICAgICByaWdodHdhcmRzOiBkaXJlY3Rpb25zWzFdLnF1YW50aXR5LFxuICAgICAgYmVsb3c6IGRpcmVjdGlvbnNbMl0ucXVhbnRpdHksXG4gICAgICBsZWZ0d2FyZHM6IGRpcmVjdGlvbnNbM10ucXVhbnRpdHksXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuaW1wb3J0IHsgQm90IH0gZnJvbSAnLi9ib3QuanMnO1xuXG4vL1R3byB0eXBlcyBvZiBwbGF5ZXJzOiByZWFsIGFuZCBjb21wdXRlciBwbGF5ZXJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCB0eXBlLCBlbGVtZW50UXVlcnksIGlzQWN0aXZlLCBvcHBvbmVudHNCb2FyZCA9IG51bGwpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy5lbGVtZW50UXVlcnkgPSBlbGVtZW50UXVlcnk7XG4gICAgdGhpcy5pc0FjdGl2ZSA9IGlzQWN0aXZlO1xuICAgIGlmIChvcHBvbmVudHNCb2FyZCAhPT0gbnVsbCAmJiB0eXBlID09PSAnY29tcHV0ZXInKSB7XG4gICAgICB0aGlzLmJvdCA9IG5ldyBCb3Qob3Bwb25lbnRzQm9hcmQpO1xuICAgIH1cbiAgfVxuXG4gIHNldEFzQWN0aXZlKCkge1xuICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgc2V0QXNPcHBvbmVudCgpIHtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICBjaGFuZ2VOYW1lKG5ld05hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMudGltZXNIaXQgPSAwO1xuICAgIHRoaXMuaGFzQmVlblN1bmsgPSBmYWxzZTtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICB0aGlzLnRpbWVzSGl0ICs9IDE7XG5cbiAgICBpZiAodGhpcy50aW1lc0hpdCA9PT0gdGhpcy5sZW5ndGgpIHRoaXMuaGFzQmVlblN1bmsgPSB0cnVlO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLmhhc0JlZW5TdW5rO1xuICB9XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWJsb2NrLWRpbWVuc2lvbjogbWluKDUwcHgsIGNhbGMoNHZ3KSk7XG4gIC0tcHJpbWFyeS1jb2xvcjogIzM0NDk1ZTtcbn1cblxuKiB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4vKkRlZmF1bHQgc3R5bGVzKi9cbmJvZHksXG5oMSxcbmgyLFxuaDMsXG5oNCxcbnAsXG51bFtjbGFzc10sXG5vbFtjbGFzc10sXG5saSxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5ibG9ja3F1b3RlLFxuZGwsXG5kZCB7XG4gIG1hcmdpbjogMDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XG59XG5cbi8qQmFja2dyb3VuZCBhbmltYXRpb24qL1xuYm9keSxcbi5zdGFydC1kaWFsb2cge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjYjFhZmZmLCAjYmJlOWZmLCAjZmZmZWQzKTtcbiAgYW5pbWF0aW9uOiBwdWxzZUJhY2tncm91bmQgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgcHVsc2VCYWNrZ3JvdW5kIHtcbiAgMCUsXG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDIwMCU7XG4gIH1cbn1cblxuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMnB4IDE4cHg7XG59XG5cbi5oZWFkZXItYnV0dG9ucyBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuaGVhZGVyIGJ1dHRvbixcbi5zdGFydC1kaWFsb2cgYnV0dG9uLFxuLmRldmljZS1wYXNzZWQtYnV0dG9uLFxuLmVkaXQtYm9hcmQtZGlhbG9nIGJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuaGVhZGVyIGJ1dHRvbixcbi5zdGFydC1kaWFsb2cgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5kZXZpY2UtcGFzc2VkLWJ1dHRvbixcbi5lZGl0LWJvYXJkLWRpYWxvZyBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zdGFydC1kaWFsb2cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5zdGFydC1kaWFsb2cgYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweCBweDtcbn1cblxuLnN0YXJ0LWRpYWxvZyBoMSB7XG4gIGZvbnQtc2l6ZTogMi40ZW07XG59XG5cbi5zdGFydC1kaWFsb2ctY29udGVudCxcbi5wYXNzLWRldmljZS1kaWFsb2ctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgZ2FwOiBtaW4oNDAlLCAzMDBweCk7XG59XG5cbi5wYXNzLWRldmljZS1kaWFsb2cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5lZGl0LWJvYXJkLWRpYWxvZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXI6IDA7XG59XG5cbi5lZGl0LWJvYXJkLWRpYWxvZy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnF1ZXJ5LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLnF1ZXJ5LWNvbnRhaW5lciBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmZpcnN0LXBsYXllcixcbi5zZWNvbmQtcGxheWVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDUwJTtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uYm9hcmQtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCB2YXIoLS1ibG9jay1kaW1lbnNpb24pKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIHZhcigtLWJsb2NrLWRpbWVuc2lvbikpO1xufVxuXG4uYm9hcmQtaXRlbSB7XG4gIGhlaWdodDogdmFyKC0tYmxvY2stZGltZW5zaW9uKTtcbiAgd2lkdGg6IHZhcigtLWJsb2NrLWRpbWVuc2lvbik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG4uYm9hcmQtaXRlbTpob3Zlcixcbi5zdGFydC1kaWFsb2cgYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbi5oaXQtc2hpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmctdG9wOiAtNHB4O1xufVxuXG4uaGl0LXNoaXA6OmJlZm9yZSxcbi5oaXQtc2hpcDo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuLmhpdC1zaGlwOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5oaXQtc2hpcDo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4uYXR0YWNrZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmRvdCB7XG4gIHdpZHRoOiBjYWxjKHZhcigtLWJsb2NrLWRpbWVuc2lvbikgLyAzKTtcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJsb2NrLWRpbWVuc2lvbikgLyAzKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuLmVuZC1kaWFsb2csXG4uY2hhbmdlLW5hbWVzLWRpYWxvZyxcbi5ib3QtYXR0YWNrLWRpYWxvZyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmJvdC1hdHRhY2stZGlhbG9nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbi5wcm9jZXNzLWFuaW1hdGlvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGFuaW1hdGlvbjogbW92ZSAwLjlzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICBtYXJnaW46IDAgMzAlO1xufVxuXG5Aa2V5ZnJhbWVzIG1vdmUge1xuICAwJSB7XG4gICAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIH1cbn1cblxuLmVuZC1kaWFsb2ctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uZW5kLWRpYWxvZyBwIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuLmVuZC1kaWFsb2cgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5jaGFuZ2UtbmFtZXMtZGlhbG9nIGZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcbn1cblxuLmNoYW5nZS1uYW1lcy1kaWFsb2cgaW5wdXQsXG4uY2hhbmdlLW5hbWVzLWRpYWxvZyBidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xufVxuXG4uY2hhbmdlLW5hbWVzLWRpYWxvZyBpbnB1dFt0eXBlPSd0ZXh0J10ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xufVxuXG4uY2hhbmdlLW5hbWVzLWRpYWxvZyBpbnB1dFt0eXBlPSdzdWJtaXQnXSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuYnV0dG9uOmhvdmVyLFxuLnBsYXllcnMtbmFtZTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC44O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUNBQXVDO0VBQ3ZDLHdCQUF3QjtBQUMxQjs7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Q0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTs7RUFFRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWJsb2NrLWRpbWVuc2lvbjogbWluKDUwcHgsIGNhbGMoNHZ3KSk7XFxuICAtLXByaW1hcnktY29sb3I6ICMzNDQ5NWU7XFxufVxcblxcbioge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qRGVmYXVsdCBzdHlsZXMqL1xcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxucCxcXG51bFtjbGFzc10sXFxub2xbY2xhc3NdLFxcbmxpLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbn1cXG5cXG4vKkJhY2tncm91bmQgYW5pbWF0aW9uKi9cXG5ib2R5LFxcbi5zdGFydC1kaWFsb2cge1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI2IxYWZmZiwgI2JiZTlmZiwgI2ZmZmVkMyk7XFxuICBhbmltYXRpb246IHB1bHNlQmFja2dyb3VuZCA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBwdWxzZUJhY2tncm91bmQge1xcbiAgMCUsXFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICB9XFxuICA1MCUge1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMjAwJTtcXG4gIH1cXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxMnB4IDE4cHg7XFxufVxcblxcbi5oZWFkZXItYnV0dG9ucyBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbmhlYWRlciBidXR0b24sXFxuLnN0YXJ0LWRpYWxvZyBidXR0b24sXFxuLmRldmljZS1wYXNzZWQtYnV0dG9uLFxcbi5lZGl0LWJvYXJkLWRpYWxvZyBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbn1cXG5cXG5oZWFkZXIgYnV0dG9uLFxcbi5zdGFydC1kaWFsb2cgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLmRldmljZS1wYXNzZWQtYnV0dG9uLFxcbi5lZGl0LWJvYXJkLWRpYWxvZyBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLnN0YXJ0LWRpYWxvZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uc3RhcnQtZGlhbG9nIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxMHB4IHB4O1xcbn1cXG5cXG4uc3RhcnQtZGlhbG9nIGgxIHtcXG4gIGZvbnQtc2l6ZTogMi40ZW07XFxufVxcblxcbi5zdGFydC1kaWFsb2ctY29udGVudCxcXG4ucGFzcy1kZXZpY2UtZGlhbG9nLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGdhcDogbWluKDQwJSwgMzAwcHgpO1xcbn1cXG5cXG4ucGFzcy1kZXZpY2UtZGlhbG9nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5lZGl0LWJvYXJkLWRpYWxvZyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4uZWRpdC1ib2FyZC1kaWFsb2ctY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucXVlcnktY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLnF1ZXJ5LWNvbnRhaW5lciBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmZpcnN0LXBsYXllcixcXG4uc2Vjb25kLXBsYXllciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA1MCU7XFxuICBnYXA6IDEycHg7XFxufVxcblxcbi5ib2FyZC1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgdmFyKC0tYmxvY2stZGltZW5zaW9uKSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgdmFyKC0tYmxvY2stZGltZW5zaW9uKSk7XFxufVxcblxcbi5ib2FyZC1pdGVtIHtcXG4gIGhlaWdodDogdmFyKC0tYmxvY2stZGltZW5zaW9uKTtcXG4gIHdpZHRoOiB2YXIoLS1ibG9jay1kaW1lbnNpb24pO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5ib2FyZC1pdGVtOmhvdmVyLFxcbi5zdGFydC1kaWFsb2cgYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5oaXQtc2hpcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmctdG9wOiAtNHB4O1xcbn1cXG5cXG4uaGl0LXNoaXA6OmJlZm9yZSxcXG4uaGl0LXNoaXA6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4uaGl0LXNoaXA6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5oaXQtc2hpcDo6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuXFxuLmF0dGFja2VkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kb3Qge1xcbiAgd2lkdGg6IGNhbGModmFyKC0tYmxvY2stZGltZW5zaW9uKSAvIDMpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJsb2NrLWRpbWVuc2lvbikgLyAzKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4uZW5kLWRpYWxvZyxcXG4uY2hhbmdlLW5hbWVzLWRpYWxvZyxcXG4uYm90LWF0dGFjay1kaWFsb2cge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLmJvdC1hdHRhY2stZGlhbG9nLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnByb2Nlc3MtYW5pbWF0aW9uIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBhbmltYXRpb246IG1vdmUgMC45cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcXG4gIG1hcmdpbjogMCAzMCU7XFxufVxcblxcbkBrZXlmcmFtZXMgbW92ZSB7XFxuICAwJSB7XFxuICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgfVxcbn1cXG5cXG4uZW5kLWRpYWxvZy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5lbmQtZGlhbG9nIHAge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuLmVuZC1kaWFsb2cgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi5jaGFuZ2UtbmFtZXMtZGlhbG9nIGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLmNoYW5nZS1uYW1lcy1kaWFsb2cgaW5wdXQsXFxuLmNoYW5nZS1uYW1lcy1kaWFsb2cgYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA4cHggMTZweDtcXG59XFxuXFxuLmNoYW5nZS1uYW1lcy1kaWFsb2cgaW5wdXRbdHlwZT0ndGV4dCddIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XFxufVxcblxcbi5jaGFuZ2UtbmFtZXMtZGlhbG9nIGlucHV0W3R5cGU9J3N1Ym1pdCddIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogI2ZmZjtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyLFxcbi5wbGF5ZXJzLW5hbWU6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBET01NYW5hZ2VyIH0gZnJvbSAnLi9kb21NYW5hZ2VyLmpzJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyLmpzJztcbmltcG9ydCB7IFNoaXAgfSBmcm9tICcuL3NoaXAuanMnO1xuaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnO1xuXG5jb25zdCBSRUFMX1BMQVlFUlNfR0FNRSA9ICdzdGFydCBnYW1lIHdpdGggcmVhbCBwbGF5ZXJzJztcbmNvbnN0IEdBTUVfV0lUSF9CT1QgPSAnc3RhcnQgZ2FtZSB3aXRoIGEgYm90JztcbmNvbnN0IFNBTUVfUExBWUVSID0gJ3NhbWUgcGxheWVycyBtb3ZlJztcbmNvbnN0IE5FWFRfUExBWUVSID0gJ25leHQgcGxheWVycyBtb3ZlJztcbmNvbnN0IE5FV19HQU1FID0gJ25ldyBnYW1lJztcbmNvbnN0IENIQU5HRV9OQU1FUyA9ICdjaGFuZ2UgbmFtZXMnO1xuXG5mdW5jdGlvbiByYW5kb21pemVTaGlwcyhwbGF5ZXIpIHtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNTsgaSsrKSB7XG4gICAgbGV0IHNoaXBQbGFjZWQgPSBmYWxzZTtcblxuICAgIHdoaWxlICghc2hpcFBsYWNlZCkge1xuICAgICAgc2hpcFBsYWNlZCA9IHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKFxuICAgICAgICBuZXcgU2hpcChpKSxcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICAgIE1hdGgucmFuZG9tKCkgPiAwLjUgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5sZXQgZG9tID0gbmV3IERPTU1hbmFnZXIoKTtcbmxldCBmaXJzdFBsYXllcjtcbmxldCBzZWNvbmRQbGF5ZXI7XG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZShmaXJzdFBsYXllclR5cGUsIHNlY29uZFBsYXllclR5cGUpIHtcbiAgZmlyc3RQbGF5ZXIgPSBuZXcgUGxheWVyKCdQbGF5ZXIgMScsIGZpcnN0UGxheWVyVHlwZSwgJy5maXJzdC1wbGF5ZXInLCB0cnVlKTtcbiAgc2Vjb25kUGxheWVyID0gbmV3IFBsYXllcihcbiAgICAnUGxheWVyIDInLFxuICAgIHNlY29uZFBsYXllclR5cGUsXG4gICAgJy5zZWNvbmQtcGxheWVyJyxcbiAgICBmYWxzZSxcbiAgICBmaXJzdFBsYXllci5nYW1lYm9hcmRcbiAgKTtcbiAgaWYgKHNlY29uZFBsYXllclR5cGUgPT09ICdjb21wdXRlcicpXG4gICAgc2Vjb25kUGxheWVyLmdhbWVib2FyZC5pc0VkaXRhYmxlID0gZmFsc2U7XG5cbiAgcmFuZG9taXplU2hpcHMoZmlyc3RQbGF5ZXIpO1xuICByYW5kb21pemVTaGlwcyhzZWNvbmRQbGF5ZXIpO1xuXG4gIGRvbS5wb3B1bGF0ZUJvYXJkKGZpcnN0UGxheWVyLCBzZWNvbmRQbGF5ZXIpO1xufVxuXG4vLyBmdW5jdGlvbiBtYWtlQm90TW92ZSgpIHtcbi8vICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4vLyAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4vLyAgIC8vbWFraW5nIHN1cmUgcG9zaXRpb24gaGFzbid0IGJlZW4gYXR0YWNrZWQgeWV0XG4vLyAgIHdoaWxlIChcbi8vICAgICBmaXJzdFBsYXllci5nYW1lYm9hcmQuYm9hcmRbeF1beV0gIT09IG51bGwgfHxcbi8vICAgICAoIWZpcnN0UGxheWVyLmdhbWVib2FyZC5ib2FyZFt4XVt5XSkgaW5zdGFuY2VvZiBTaGlwXG4vLyAgICkge1xuLy8gICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4vLyAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbi8vICAgfVxuXG4vLyAgIHdoaWxlIChcbi8vICAgICBmaXJzdFBsYXllci5nYW1lYm9hcmQuYm9hcmRbeF1beV0gPT09IG51bGwgfHxcbi8vICAgICBmaXJzdFBsYXllci5nYW1lYm9hcmQuYm9hcmRbeF1beV0gaW5zdGFuY2VvZiBTaGlwXG4vLyAgICkge1xuLy8gICAgIGZpcnN0UGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuLy8gICB9XG4vLyB9XG5cbmZ1bmN0aW9uIGNoZWNrRm9yV2lubmVyKCkge1xuICBpZiAoZmlyc3RQbGF5ZXIuZ2FtZWJvYXJkLmhhdmVBbGxCZWVuU3VuaygpKSBkb20uc2hvd0VuZERpYWxvZyhzZWNvbmRQbGF5ZXIpO1xuICBlbHNlIGlmIChzZWNvbmRQbGF5ZXIuZ2FtZWJvYXJkLmhhdmVBbGxCZWVuU3VuaygpKVxuICAgIGRvbS5zaG93RW5kRGlhbG9nKGZpcnN0UGxheWVyKTtcbn1cblxuUHViU3ViLnN1YnNjcmliZShSRUFMX1BMQVlFUlNfR0FNRSwgKCkgPT4ge1xuICBzdGFydEdhbWUoJ3JlYWwnLCAncmVhbCcpO1xufSk7XG5cblB1YlN1Yi5zdWJzY3JpYmUoR0FNRV9XSVRIX0JPVCwgKCkgPT4ge1xuICBzdGFydEdhbWUoJ3JlYWwnLCAnY29tcHV0ZXInKTtcbn0pO1xuXG4vL3NoaXAgd2FzIGhpdCwgc2FtZSBwbGF5ZXIgbWFrZXMgdGhlIG5leHQgbW92ZVxuUHViU3ViLnN1YnNjcmliZShTQU1FX1BMQVlFUiwgKCkgPT4ge1xuICBpZiAoc2Vjb25kUGxheWVyLmlzQWN0aXZlID09PSB0cnVlICYmIHNlY29uZFBsYXllci50eXBlID09PSAnY29tcHV0ZXInKSB7XG4gICAgc2Vjb25kUGxheWVyLmJvdC5hdHRhY2soKTtcbiAgfVxuICBkb20ucG9wdWxhdGVCb2FyZChmaXJzdFBsYXllciwgc2Vjb25kUGxheWVyKTtcbiAgY2hlY2tGb3JXaW5uZXIoKTtcbn0pO1xuXG4vL3NoaXAgd2FzIG1pc3NlZCwgb3Bwb25lbnQgbWFrZXMgdGhlIG5leHQgbW92ZSwgYmVjb21lcyB0aGUgYWN0aXZlIHBsYXllclxuUHViU3ViLnN1YnNjcmliZShORVhUX1BMQVlFUiwgKCkgPT4ge1xuICBpZiAoZmlyc3RQbGF5ZXIuaXNBY3RpdmUpIHtcbiAgICBmaXJzdFBsYXllci5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIHNlY29uZFBsYXllci5pc0FjdGl2ZSA9IHRydWU7XG5cbiAgICBpZiAoc2Vjb25kUGxheWVyLnR5cGUgPT09ICdjb21wdXRlcicpIHtcbiAgICAgIHNlY29uZFBsYXllci5ib3QuYXR0YWNrKCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZpcnN0UGxheWVyLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICBzZWNvbmRQbGF5ZXIuaXNBY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGRvbS5wb3B1bGF0ZUJvYXJkKGZpcnN0UGxheWVyLCBzZWNvbmRQbGF5ZXIsIHRydWUpO1xuICBjaGVja0Zvcldpbm5lcigpO1xufSk7XG5cblB1YlN1Yi5zdWJzY3JpYmUoTkVXX0dBTUUsICgpID0+XG4gIHN0YXJ0R2FtZShmaXJzdFBsYXllci50eXBlLCBzZWNvbmRQbGF5ZXIudHlwZSlcbik7XG5cblB1YlN1Yi5zdWJzY3JpYmUoQ0hBTkdFX05BTUVTLCAobWVzc2FnZSwgbmV3TmFtZXMpID0+IHtcbiAgZmlyc3RQbGF5ZXIuY2hhbmdlTmFtZShuZXdOYW1lc1swXSk7XG4gIGZpcnN0UGxheWVyLmNoYW5nZU5hbWUobmV3TmFtZXNbMV0pO1xufSk7XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiaWQiLCJfayIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwiZ2V0TmF0aXZlIiwicmVxdWlyZSIsInJvb3QiLCJEYXRhVmlldyIsImhhc2hDbGVhciIsImhhc2hEZWxldGUiLCJoYXNoR2V0IiwiaGFzaEhhcyIsImhhc2hTZXQiLCJIYXNoIiwiZW50cmllcyIsImluZGV4IiwiY2xlYXIiLCJlbnRyeSIsInNldCIsInByb3RvdHlwZSIsImdldCIsImhhcyIsImxpc3RDYWNoZUNsZWFyIiwibGlzdENhY2hlRGVsZXRlIiwibGlzdENhY2hlR2V0IiwibGlzdENhY2hlSGFzIiwibGlzdENhY2hlU2V0IiwiTGlzdENhY2hlIiwiTWFwIiwibWFwQ2FjaGVDbGVhciIsIm1hcENhY2hlRGVsZXRlIiwibWFwQ2FjaGVHZXQiLCJtYXBDYWNoZUhhcyIsIm1hcENhY2hlU2V0IiwiTWFwQ2FjaGUiLCJQcm9taXNlIiwiU2V0Iiwic2V0Q2FjaGVBZGQiLCJzZXRDYWNoZUhhcyIsIlNldENhY2hlIiwidmFsdWVzIiwiX19kYXRhX18iLCJhZGQiLCJzdGFja0NsZWFyIiwic3RhY2tEZWxldGUiLCJzdGFja0dldCIsInN0YWNrSGFzIiwic3RhY2tTZXQiLCJTdGFjayIsInNpemUiLCJTeW1ib2wiLCJVaW50OEFycmF5IiwiV2Vha01hcCIsImFycmF5RmlsdGVyIiwiYXJyYXkiLCJwcmVkaWNhdGUiLCJyZXNJbmRleCIsInJlc3VsdCIsInZhbHVlIiwiYmFzZVRpbWVzIiwiaXNBcmd1bWVudHMiLCJpc0FycmF5IiwiaXNCdWZmZXIiLCJpc0luZGV4IiwiaXNUeXBlZEFycmF5Iiwib2JqZWN0UHJvdG8iLCJPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsImFycmF5TGlrZUtleXMiLCJpbmhlcml0ZWQiLCJpc0FyciIsImlzQXJnIiwiaXNCdWZmIiwiaXNUeXBlIiwic2tpcEluZGV4ZXMiLCJTdHJpbmciLCJrZXkiLCJjYWxsIiwiYXJyYXlQdXNoIiwib2Zmc2V0IiwiYXJyYXlTb21lIiwiZXEiLCJhc3NvY0luZGV4T2YiLCJiYXNlR2V0QWxsS2V5cyIsIm9iamVjdCIsImtleXNGdW5jIiwic3ltYm9sc0Z1bmMiLCJnZXRSYXdUYWciLCJvYmplY3RUb1N0cmluZyIsIm51bGxUYWciLCJ1bmRlZmluZWRUYWciLCJzeW1Ub1N0cmluZ1RhZyIsInRvU3RyaW5nVGFnIiwiYmFzZUdldFRhZyIsImlzT2JqZWN0TGlrZSIsImFyZ3NUYWciLCJiYXNlSXNBcmd1bWVudHMiLCJiYXNlSXNFcXVhbERlZXAiLCJiYXNlSXNFcXVhbCIsIm90aGVyIiwiYml0bWFzayIsImN1c3RvbWl6ZXIiLCJzdGFjayIsImVxdWFsQXJyYXlzIiwiZXF1YWxCeVRhZyIsImVxdWFsT2JqZWN0cyIsImdldFRhZyIsIkNPTVBBUkVfUEFSVElBTF9GTEFHIiwiYXJyYXlUYWciLCJvYmplY3RUYWciLCJlcXVhbEZ1bmMiLCJvYmpJc0FyciIsIm90aElzQXJyIiwib2JqVGFnIiwib3RoVGFnIiwib2JqSXNPYmoiLCJvdGhJc09iaiIsImlzU2FtZVRhZyIsIm9iaklzV3JhcHBlZCIsIm90aElzV3JhcHBlZCIsIm9ialVud3JhcHBlZCIsIm90aFVud3JhcHBlZCIsImlzRnVuY3Rpb24iLCJpc01hc2tlZCIsImlzT2JqZWN0IiwidG9Tb3VyY2UiLCJyZVJlZ0V4cENoYXIiLCJyZUlzSG9zdEN0b3IiLCJmdW5jUHJvdG8iLCJGdW5jdGlvbiIsImZ1bmNUb1N0cmluZyIsInJlSXNOYXRpdmUiLCJSZWdFeHAiLCJyZXBsYWNlIiwiYmFzZUlzTmF0aXZlIiwicGF0dGVybiIsInRlc3QiLCJpc0xlbmd0aCIsImJvb2xUYWciLCJkYXRlVGFnIiwiZXJyb3JUYWciLCJmdW5jVGFnIiwibWFwVGFnIiwibnVtYmVyVGFnIiwicmVnZXhwVGFnIiwic2V0VGFnIiwic3RyaW5nVGFnIiwid2Vha01hcFRhZyIsImFycmF5QnVmZmVyVGFnIiwiZGF0YVZpZXdUYWciLCJmbG9hdDMyVGFnIiwiZmxvYXQ2NFRhZyIsImludDhUYWciLCJpbnQxNlRhZyIsImludDMyVGFnIiwidWludDhUYWciLCJ1aW50OENsYW1wZWRUYWciLCJ1aW50MTZUYWciLCJ1aW50MzJUYWciLCJ0eXBlZEFycmF5VGFncyIsImJhc2VJc1R5cGVkQXJyYXkiLCJpc1Byb3RvdHlwZSIsIm5hdGl2ZUtleXMiLCJiYXNlS2V5cyIsIm4iLCJpdGVyYXRlZSIsIkFycmF5IiwiYmFzZVVuYXJ5IiwiZnVuYyIsImNhY2hlSGFzIiwiY2FjaGUiLCJjb3JlSnNEYXRhIiwiQ09NUEFSRV9VTk9SREVSRURfRkxBRyIsImlzUGFydGlhbCIsImFyckxlbmd0aCIsIm90aExlbmd0aCIsImFyclN0YWNrZWQiLCJvdGhTdGFja2VkIiwic2VlbiIsImFyclZhbHVlIiwib3RoVmFsdWUiLCJjb21wYXJlZCIsIm90aEluZGV4IiwibWFwVG9BcnJheSIsInNldFRvQXJyYXkiLCJzeW1ib2xUYWciLCJzeW1ib2xQcm90byIsInN5bWJvbFZhbHVlT2YiLCJ2YWx1ZU9mIiwidGFnIiwiYnl0ZUxlbmd0aCIsImJ5dGVPZmZzZXQiLCJidWZmZXIiLCJuYW1lIiwibWVzc2FnZSIsImNvbnZlcnQiLCJzdGFja2VkIiwiZ2V0QWxsS2V5cyIsIm9ialByb3BzIiwib2JqTGVuZ3RoIiwib3RoUHJvcHMiLCJvYmpTdGFja2VkIiwic2tpcEN0b3IiLCJvYmpWYWx1ZSIsIm9iakN0b3IiLCJjb25zdHJ1Y3RvciIsIm90aEN0b3IiLCJmcmVlR2xvYmFsIiwiZ2xvYmFsIiwiZ2V0U3ltYm9scyIsImtleXMiLCJpc0tleWFibGUiLCJnZXRNYXBEYXRhIiwiZ2V0VmFsdWUiLCJuYXRpdmVPYmplY3RUb1N0cmluZyIsImlzT3duIiwidW5tYXNrZWQiLCJlIiwic3R1YkFycmF5IiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJuYXRpdmVHZXRTeW1ib2xzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9sIiwicHJvbWlzZVRhZyIsImRhdGFWaWV3Q3RvclN0cmluZyIsIm1hcEN0b3JTdHJpbmciLCJwcm9taXNlQ3RvclN0cmluZyIsInNldEN0b3JTdHJpbmciLCJ3ZWFrTWFwQ3RvclN0cmluZyIsIkFycmF5QnVmZmVyIiwicmVzb2x2ZSIsIkN0b3IiLCJjdG9yU3RyaW5nIiwibmF0aXZlQ3JlYXRlIiwiSEFTSF9VTkRFRklORUQiLCJNQVhfU0FGRV9JTlRFR0VSIiwicmVJc1VpbnQiLCJ0eXBlIiwibWFza1NyY0tleSIsInVpZCIsImV4ZWMiLCJJRV9QUk9UTyIsInByb3RvIiwiYXJyYXlQcm90byIsInNwbGljZSIsImxhc3RJbmRleCIsInBvcCIsImZvckVhY2giLCJvdmVyQXJnIiwiZnJlZUV4cG9ydHMiLCJub2RlVHlwZSIsImZyZWVNb2R1bGUiLCJtb2R1bGVFeHBvcnRzIiwiZnJlZVByb2Nlc3MiLCJwcm9jZXNzIiwibm9kZVV0aWwiLCJ0eXBlcyIsImJpbmRpbmciLCJ0cmFuc2Zvcm0iLCJhcmciLCJmcmVlU2VsZiIsInNlbGYiLCJMQVJHRV9BUlJBWV9TSVpFIiwicGFpcnMiLCJhcmd1bWVudHMiLCJpc0FycmF5TGlrZSIsInN0dWJGYWxzZSIsIkJ1ZmZlciIsIm5hdGl2ZUlzQnVmZmVyIiwiaXNFcXVhbCIsImFzeW5jVGFnIiwiZ2VuVGFnIiwicHJveHlUYWciLCJub2RlSXNUeXBlZEFycmF5IiwiZmFjdG9yeSIsIlB1YlN1YiIsImNvbnNvbGUiLCJ3YXJuIiwiZGVmaW5lIiwiYW1kIiwid2luZG93IiwibWVzc2FnZXMiLCJsYXN0VWlkIiwiQUxMX1NVQlNDUklCSU5HX01TRyIsImhhc0tleXMiLCJvYmoiLCJ0aHJvd0V4Y2VwdGlvbiIsImV4IiwicmVUaHJvd0V4Y2VwdGlvbiIsImNhbGxTdWJzY3JpYmVyV2l0aERlbGF5ZWRFeGNlcHRpb25zIiwic3Vic2NyaWJlciIsInNldFRpbWVvdXQiLCJjYWxsU3Vic2NyaWJlcldpdGhJbW1lZGlhdGVFeGNlcHRpb25zIiwiZGVsaXZlck1lc3NhZ2UiLCJvcmlnaW5hbE1lc3NhZ2UiLCJtYXRjaGVkTWVzc2FnZSIsImltbWVkaWF0ZUV4Y2VwdGlvbnMiLCJzdWJzY3JpYmVycyIsImNhbGxTdWJzY3JpYmVyIiwicyIsImNyZWF0ZURlbGl2ZXJ5RnVuY3Rpb24iLCJkZWxpdmVyTmFtZXNwYWNlZCIsInRvcGljIiwicG9zaXRpb24iLCJsYXN0SW5kZXhPZiIsInN1YnN0ciIsImhhc0RpcmVjdFN1YnNjcmliZXJzRm9yIiwiZm91bmQiLCJCb29sZWFuIiwibWVzc2FnZUhhc1N1YnNjcmliZXJzIiwicHVibGlzaCIsInN5bmMiLCJkZWxpdmVyIiwiaGFzU3Vic2NyaWJlcnMiLCJwdWJsaXNoU3luYyIsInN1YnNjcmliZSIsInRva2VuIiwic3Vic2NyaWJlQWxsIiwic3Vic2NyaWJlT25jZSIsInVuc3Vic2NyaWJlIiwiYXBwbHkiLCJjbGVhckFsbFN1YnNjcmlwdGlvbnMiLCJjbGVhclN1YnNjcmlwdGlvbnMiLCJtIiwiaW5kZXhPZiIsImNvdW50U3Vic2NyaXB0aW9ucyIsImNvdW50IiwiZ2V0U3Vic2NyaXB0aW9ucyIsImRlc2NlbmRhbnRUb3BpY0V4aXN0cyIsImlzVG9waWMiLCJpc1Rva2VuIiwidCIsIlNoaXAiLCJCb3QiLCJvcHBvbmVudHNHYW1lYm9hcmQiLCJhdHRhY2tRdWV1ZSIsImF0dGFjayIsIkJPVF9NT1ZFIiwiZGVsYXkiLCJvcmllbnRhdGlvbiIsIngiLCJ5Iiwic2hpZnQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJib2FyZCIsInJlY2VpdmVBdHRhY2siLCJkaXJlY3Rpb25zIiwiZCIsInRhcmdldGVkWCIsInRhcmdldGVkWSIsIm1zIiwic3R5bGUiLCJORVdfR0FNRSIsIk5FWFRfUExBWUVSIiwiZWRpdEJvYXJkRGlhbG9nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiRE9NTWFuYWdlciIsInNldFVwUGxheUFnYWluQnV0dG9uIiwic2V0TmFtZUNsaWNrTGlzdGVuZXJzIiwicmVzZXRCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnRNZW51QnV0dG9uIiwic2hvd1N0YXJ0TWVudSIsInBvcHVsYXRlQWN0aXZlUGxheWVyc0JvYXJkIiwicGxheWVyIiwiZ2FtZWJvYXJkIiwiYm9hcmRHcmlkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImoiLCJkb3QiLCJhcHBlbmQiLCJpc0VkaXRhYmxlIiwiZHJhZ2dhYmxlIiwiZXZlbnQiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwidGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJkcm9wcGVkSWQiLCJnZXREYXRhIiwieENvb3JkaW5hdGUiLCJjaGFyQXQiLCJ5Q29vcmRpbmF0ZSIsIm1vdmVTaGlwIiwicGFyc2VJbnQiLCJhcHBlbmRDaGlsZCIsImVsZW1lbnRRdWVyeSIsImNvbG9yIiwiYm9hcmRDb250YWluZXIiLCJpbm5lckhUTUwiLCJwb3B1bGF0ZU9wcG9uZW50c0JvYXJkIiwicG9wdWxhdGVCb2FyZCIsImZpcnN0UGxheWVyIiwic2Vjb25kUGxheWVyIiwicGxheWVyU3dpdGNoZWQiLCJpc0FjdGl2ZSIsInNob3dFZGl0TWVzc2FnZSIsInNob3dQYXNzRGV2aWNlRGlhbG9nIiwiY2xvc2UiLCJzaG93RW5kRGlhbG9nIiwid2lubmVyIiwiZW5kRGlhbG9nIiwidGV4dENvbnRlbnQiLCJzaG93TW9kYWwiLCJSRUFMX1BMQVlFUlNfR0FNRSIsIkdBTUVfV0lUSF9CT1QiLCJzdGFydERpYWxvZyIsIm5leHRQbGF5ZXJOYW1lIiwicGFzc0RldmljZURpYWxvZyIsIm5leHRQbGF5ZXJOYW1lQnV0dG9uIiwibmV4dFBsYXllck5hbWVIZWFkZXIiLCJkZXZpY2VQYXNzZWRCdXR0b24iLCJ0b1VwcGVyQ2FzZSIsImVkaXRCb2FyZERpYWxvZ0NvbnRhaW5lciIsImRvbmVCdXR0b24iLCJzaG93IiwicGxheUFnYWluQnV0dG9uIiwiY2hhbmdlTmFtZURpYWxvZyIsInBsYXllcnNOYW1lcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJlbGVtZW50IiwiY2hhbmdlTmFtZUZvcm0iLCJ1cGRhdGVOYW1lcyIsInJlc2V0IiwibmFtZTEiLCJuYW1lMiIsImZpcnN0TmFtZVBsYXllck5hbWUiLCJzZWNvbmROYW1lUGxheWVyTmFtZSIsInRyaW0iLCJDSEFOR0VfTkFNRVMiLCJib3RNb3ZlRGlhbG9nIiwiR2FtZWJvYXJkIiwiZnJvbSIsImZpbGwiLCJtaXNzZWQiLCJpc0VtcHR5IiwicGxhY2VTaGlwIiwic2hpcCIsImNhblNoaXBCZVBsYWNlZEhvcml6b250YWxseSIsImNhblNoaXBCZVBsYWNlZFZlcnRpY2FsbHkiLCJzaGlwRXhjZXB0aW9uIiwibWF4IiwibWluIiwid2FzSGl0IiwiaGl0IiwiU0FNRV9QTEFZRVIiLCJoYXZlQWxsQmVlblN1bmsiLCJzb21lIiwicm93IiwiaXNQb3NpdGlvblZhbGlkIiwiI2lzUG9zaXRpb25WYWxpZCIsImdldE1vdmVkU2hpcFBvc2l0aW9ucyIsIm9yaWdpbmFsWCIsIm9yaWdpbmFsWSIsIm5ld1giLCJuZXdZIiwib2xkUG9zaXRpb25zIiwibmV3UG9zaXRpb25zIiwiZGlyZWN0aW9uSW5kZXgiLCJ4TW92ZSIsInlNb3ZlIiwibmV3WEl0ZW0iLCJuZXdZSXRlbSIsInNvcnQiLCJhIiwiYiIsInBvc2l0aW9ucyIsInhPbGQiLCJ5T2xkIiwiZ2V0Qm9hdExlbmd0aHNGcm9tUG9zaXRpb24iLCJxdWFudGl0eSIsImN1cnJlbnRYIiwiY3VycmVudFkiLCJhYm92ZSIsInJpZ2h0d2FyZHMiLCJiZWxvdyIsImxlZnR3YXJkcyIsIlBsYXllciIsIm9wcG9uZW50c0JvYXJkIiwiYm90Iiwic2V0QXNBY3RpdmUiLCJzZXRBc09wcG9uZW50IiwiY2hhbmdlTmFtZSIsIm5ld05hbWUiLCJ0aW1lc0hpdCIsImhhc0JlZW5TdW5rIiwiaXNTdW5rIiwicmFuZG9taXplU2hpcHMiLCJzaGlwUGxhY2VkIiwiZG9tIiwic3RhcnRHYW1lIiwiZmlyc3RQbGF5ZXJUeXBlIiwic2Vjb25kUGxheWVyVHlwZSIsImNoZWNrRm9yV2lubmVyIiwibmV3TmFtZXMiXSwic291cmNlUm9vdCI6IiJ9