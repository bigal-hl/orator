"use strict";

var _excluded = ["version", "host"];
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function (f) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;
    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }
    g.Orator = f();
  }
})(function () {
  var define, module, exports;
  return function () {
    function r(e, n, t) {
      function o(i, f) {
        if (!n[i]) {
          if (!e[i]) {
            var c = "function" == typeof require && require;
            if (!f && c) return c(i, !0);
            if (u) return u(i, !0);
            var a = new Error("Cannot find module '" + i + "'");
            throw a.code = "MODULE_NOT_FOUND", a;
          }
          var p = n[i] = {
            exports: {}
          };
          e[i][0].call(p.exports, function (r) {
            var n = e[i][1][r];
            return o(n || r);
          }, p, p.exports, r, e, n, t);
        }
        return n[i].exports;
      }
      for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
      return o;
    }
    return r;
  }()({
    1: [function (require, module, exports) {
      (function (global) {
        (function () {
          'use strict';

          var objectAssign = require('object-assign');

          // compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
          // original notice:

          /*!
           * The buffer module from node.js, for the browser.
           *
           * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
           * @license  MIT
           */
          function compare(a, b) {
            if (a === b) {
              return 0;
            }
            var x = a.length;
            var y = b.length;
            for (var i = 0, len = Math.min(x, y); i < len; ++i) {
              if (a[i] !== b[i]) {
                x = a[i];
                y = b[i];
                break;
              }
            }
            if (x < y) {
              return -1;
            }
            if (y < x) {
              return 1;
            }
            return 0;
          }
          function isBuffer(b) {
            if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
              return global.Buffer.isBuffer(b);
            }
            return !!(b != null && b._isBuffer);
          }

          // based on node assert, original notice:
          // NB: The URL to the CommonJS spec is kept just for tradition.
          //     node-assert has evolved a lot since then, both in API and behavior.

          // http://wiki.commonjs.org/wiki/Unit_Testing/1.0
          //
          // THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
          //
          // Originally from narwhal.js (http://narwhaljs.org)
          // Copyright (c) 2009 Thomas Robinson <280north.com>
          //
          // Permission is hereby granted, free of charge, to any person obtaining a copy
          // of this software and associated documentation files (the 'Software'), to
          // deal in the Software without restriction, including without limitation the
          // rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
          // sell copies of the Software, and to permit persons to whom the Software is
          // furnished to do so, subject to the following conditions:
          //
          // The above copyright notice and this permission notice shall be included in
          // all copies or substantial portions of the Software.
          //
          // THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
          // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
          // FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
          // AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
          // ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
          // WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

          var util = require('util/');
          var hasOwn = Object.prototype.hasOwnProperty;
          var pSlice = Array.prototype.slice;
          var functionsHaveNames = function () {
            return function foo() {}.name === 'foo';
          }();
          function pToString(obj) {
            return Object.prototype.toString.call(obj);
          }
          function isView(arrbuf) {
            if (isBuffer(arrbuf)) {
              return false;
            }
            if (typeof global.ArrayBuffer !== 'function') {
              return false;
            }
            if (typeof ArrayBuffer.isView === 'function') {
              return ArrayBuffer.isView(arrbuf);
            }
            if (!arrbuf) {
              return false;
            }
            if (arrbuf instanceof DataView) {
              return true;
            }
            if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
              return true;
            }
            return false;
          }
          // 1. The assert module provides functions that throw
          // AssertionError's when particular conditions are not met. The
          // assert module must conform to the following interface.

          var assert = module.exports = ok;

          // 2. The AssertionError is defined in assert.
          // new assert.AssertionError({ message: message,
          //                             actual: actual,
          //                             expected: expected })

          var regex = /\s*function\s+([^\(\s]*)\s*/;
          // based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
          function getName(func) {
            if (!util.isFunction(func)) {
              return;
            }
            if (functionsHaveNames) {
              return func.name;
            }
            var str = func.toString();
            var match = str.match(regex);
            return match && match[1];
          }
          assert.AssertionError = function AssertionError(options) {
            this.name = 'AssertionError';
            this.actual = options.actual;
            this.expected = options.expected;
            this.operator = options.operator;
            if (options.message) {
              this.message = options.message;
              this.generatedMessage = false;
            } else {
              this.message = getMessage(this);
              this.generatedMessage = true;
            }
            var stackStartFunction = options.stackStartFunction || fail;
            if (Error.captureStackTrace) {
              Error.captureStackTrace(this, stackStartFunction);
            } else {
              // non v8 browsers so we can have a stacktrace
              var err = new Error();
              if (err.stack) {
                var out = err.stack;

                // try to strip useless frames
                var fn_name = getName(stackStartFunction);
                var idx = out.indexOf('\n' + fn_name);
                if (idx >= 0) {
                  // once we have located the function frame
                  // we need to strip out everything before it (and its line)
                  var next_line = out.indexOf('\n', idx + 1);
                  out = out.substring(next_line + 1);
                }
                this.stack = out;
              }
            }
          };

          // assert.AssertionError instanceof Error
          util.inherits(assert.AssertionError, Error);
          function truncate(s, n) {
            if (typeof s === 'string') {
              return s.length < n ? s : s.slice(0, n);
            } else {
              return s;
            }
          }
          function inspect(something) {
            if (functionsHaveNames || !util.isFunction(something)) {
              return util.inspect(something);
            }
            var rawname = getName(something);
            var name = rawname ? ': ' + rawname : '';
            return '[Function' + name + ']';
          }
          function getMessage(self) {
            return truncate(inspect(self.actual), 128) + ' ' + self.operator + ' ' + truncate(inspect(self.expected), 128);
          }

          // At present only the three keys mentioned above are used and
          // understood by the spec. Implementations or sub modules can pass
          // other keys to the AssertionError's constructor - they will be
          // ignored.

          // 3. All of the following functions must throw an AssertionError
          // when a corresponding condition is not met, with a message that
          // may be undefined if not provided.  All assertion methods provide
          // both the actual and expected values to the assertion error for
          // display purposes.

          function fail(actual, expected, message, operator, stackStartFunction) {
            throw new assert.AssertionError({
              message: message,
              actual: actual,
              expected: expected,
              operator: operator,
              stackStartFunction: stackStartFunction
            });
          }

          // EXTENSION! allows for well behaved errors defined elsewhere.
          assert.fail = fail;

          // 4. Pure assertion tests whether a value is truthy, as determined
          // by !!guard.
          // assert.ok(guard, message_opt);
          // This statement is equivalent to assert.equal(true, !!guard,
          // message_opt);. To test strictly for the value true, use
          // assert.strictEqual(true, guard, message_opt);.

          function ok(value, message) {
            if (!value) fail(value, true, message, '==', assert.ok);
          }
          assert.ok = ok;

          // 5. The equality assertion tests shallow, coercive equality with
          // ==.
          // assert.equal(actual, expected, message_opt);

          assert.equal = function equal(actual, expected, message) {
            if (actual != expected) fail(actual, expected, message, '==', assert.equal);
          };

          // 6. The non-equality assertion tests for whether two objects are not equal
          // with != assert.notEqual(actual, expected, message_opt);

          assert.notEqual = function notEqual(actual, expected, message) {
            if (actual == expected) {
              fail(actual, expected, message, '!=', assert.notEqual);
            }
          };

          // 7. The equivalence assertion tests a deep equality relation.
          // assert.deepEqual(actual, expected, message_opt);

          assert.deepEqual = function deepEqual(actual, expected, message) {
            if (!_deepEqual(actual, expected, false)) {
              fail(actual, expected, message, 'deepEqual', assert.deepEqual);
            }
          };
          assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
            if (!_deepEqual(actual, expected, true)) {
              fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
            }
          };
          function _deepEqual(actual, expected, strict, memos) {
            // 7.1. All identical values are equivalent, as determined by ===.
            if (actual === expected) {
              return true;
            } else if (isBuffer(actual) && isBuffer(expected)) {
              return compare(actual, expected) === 0;

              // 7.2. If the expected value is a Date object, the actual value is
              // equivalent if it is also a Date object that refers to the same time.
            } else if (util.isDate(actual) && util.isDate(expected)) {
              return actual.getTime() === expected.getTime();

              // 7.3 If the expected value is a RegExp object, the actual value is
              // equivalent if it is also a RegExp object with the same source and
              // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
            } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
              return actual.source === expected.source && actual.global === expected.global && actual.multiline === expected.multiline && actual.lastIndex === expected.lastIndex && actual.ignoreCase === expected.ignoreCase;

              // 7.4. Other pairs that do not both pass typeof value == 'object',
              // equivalence is determined by ==.
            } else if ((actual === null || _typeof(actual) !== 'object') && (expected === null || _typeof(expected) !== 'object')) {
              return strict ? actual === expected : actual == expected;

              // If both values are instances of typed arrays, wrap their underlying
              // ArrayBuffers in a Buffer each to increase performance
              // This optimization requires the arrays to have the same type as checked by
              // Object.prototype.toString (aka pToString). Never perform binary
              // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
              // bit patterns are not identical.
            } else if (isView(actual) && isView(expected) && pToString(actual) === pToString(expected) && !(actual instanceof Float32Array || actual instanceof Float64Array)) {
              return compare(new Uint8Array(actual.buffer), new Uint8Array(expected.buffer)) === 0;

              // 7.5 For all other Object pairs, including Array objects, equivalence is
              // determined by having the same number of owned properties (as verified
              // with Object.prototype.hasOwnProperty.call), the same set of keys
              // (although not necessarily the same order), equivalent values for every
              // corresponding key, and an identical 'prototype' property. Note: this
              // accounts for both named and indexed properties on Arrays.
            } else if (isBuffer(actual) !== isBuffer(expected)) {
              return false;
            } else {
              memos = memos || {
                actual: [],
                expected: []
              };
              var actualIndex = memos.actual.indexOf(actual);
              if (actualIndex !== -1) {
                if (actualIndex === memos.expected.indexOf(expected)) {
                  return true;
                }
              }
              memos.actual.push(actual);
              memos.expected.push(expected);
              return objEquiv(actual, expected, strict, memos);
            }
          }
          function isArguments(object) {
            return Object.prototype.toString.call(object) == '[object Arguments]';
          }
          function objEquiv(a, b, strict, actualVisitedObjects) {
            if (a === null || a === undefined || b === null || b === undefined) return false;
            // if one is a primitive, the other must be same
            if (util.isPrimitive(a) || util.isPrimitive(b)) return a === b;
            if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)) return false;
            var aIsArgs = isArguments(a);
            var bIsArgs = isArguments(b);
            if (aIsArgs && !bIsArgs || !aIsArgs && bIsArgs) return false;
            if (aIsArgs) {
              a = pSlice.call(a);
              b = pSlice.call(b);
              return _deepEqual(a, b, strict);
            }
            var ka = objectKeys(a);
            var kb = objectKeys(b);
            var key, i;
            // having the same number of owned properties (keys incorporates
            // hasOwnProperty)
            if (ka.length !== kb.length) return false;
            //the same set of keys (although not necessarily the same order),
            ka.sort();
            kb.sort();
            //~~~cheap key test
            for (i = ka.length - 1; i >= 0; i--) {
              if (ka[i] !== kb[i]) return false;
            }
            //equivalent values for every corresponding key, and
            //~~~possibly expensive deep test
            for (i = ka.length - 1; i >= 0; i--) {
              key = ka[i];
              if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects)) return false;
            }
            return true;
          }

          // 8. The non-equivalence assertion tests for any deep inequality.
          // assert.notDeepEqual(actual, expected, message_opt);

          assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
            if (_deepEqual(actual, expected, false)) {
              fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
            }
          };
          assert.notDeepStrictEqual = notDeepStrictEqual;
          function notDeepStrictEqual(actual, expected, message) {
            if (_deepEqual(actual, expected, true)) {
              fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
            }
          }

          // 9. The strict equality assertion tests strict equality, as determined by ===.
          // assert.strictEqual(actual, expected, message_opt);

          assert.strictEqual = function strictEqual(actual, expected, message) {
            if (actual !== expected) {
              fail(actual, expected, message, '===', assert.strictEqual);
            }
          };

          // 10. The strict non-equality assertion tests for strict inequality, as
          // determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

          assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
            if (actual === expected) {
              fail(actual, expected, message, '!==', assert.notStrictEqual);
            }
          };
          function expectedException(actual, expected) {
            if (!actual || !expected) {
              return false;
            }
            if (Object.prototype.toString.call(expected) == '[object RegExp]') {
              return expected.test(actual);
            }
            try {
              if (actual instanceof expected) {
                return true;
              }
            } catch (e) {
              // Ignore.  The instanceof check doesn't work for arrow functions.
            }
            if (Error.isPrototypeOf(expected)) {
              return false;
            }
            return expected.call({}, actual) === true;
          }
          function _tryBlock(block) {
            var error;
            try {
              block();
            } catch (e) {
              error = e;
            }
            return error;
          }
          function _throws(shouldThrow, block, expected, message) {
            var actual;
            if (typeof block !== 'function') {
              throw new TypeError('"block" argument must be a function');
            }
            if (typeof expected === 'string') {
              message = expected;
              expected = null;
            }
            actual = _tryBlock(block);
            message = (expected && expected.name ? ' (' + expected.name + ').' : '.') + (message ? ' ' + message : '.');
            if (shouldThrow && !actual) {
              fail(actual, expected, 'Missing expected exception' + message);
            }
            var userProvidedMessage = typeof message === 'string';
            var isUnwantedException = !shouldThrow && util.isError(actual);
            var isUnexpectedException = !shouldThrow && actual && !expected;
            if (isUnwantedException && userProvidedMessage && expectedException(actual, expected) || isUnexpectedException) {
              fail(actual, expected, 'Got unwanted exception' + message);
            }
            if (shouldThrow && actual && expected && !expectedException(actual, expected) || !shouldThrow && actual) {
              throw actual;
            }
          }

          // 11. Expected to throw an error:
          // assert.throws(block, Error_opt, message_opt);

          assert["throws"] = function (block, /*optional*/error, /*optional*/message) {
            _throws(true, block, error, message);
          };

          // EXTENSION! This is annoying to write outside this module.
          assert.doesNotThrow = function (block, /*optional*/error, /*optional*/message) {
            _throws(false, block, error, message);
          };
          assert.ifError = function (err) {
            if (err) throw err;
          };

          // Expose a strict only variant of assert
          function strict(value, message) {
            if (!value) fail(value, true, message, '==', strict);
          }
          assert.strict = objectAssign(strict, assert, {
            equal: assert.strictEqual,
            deepEqual: assert.deepStrictEqual,
            notEqual: assert.notStrictEqual,
            notDeepEqual: assert.notDeepStrictEqual
          });
          assert.strict.strict = assert.strict;
          var objectKeys = Object.keys || function (obj) {
            var keys = [];
            for (var key in obj) {
              if (hasOwn.call(obj, key)) keys.push(key);
            }
            return keys;
          };
        }).call(this);
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {
      "object-assign": 23,
      "util/": 4
    }],
    2: [function (require, module, exports) {
      if (typeof Object.create === 'function') {
        // implementation from standard node.js 'util' module
        module.exports = function inherits(ctor, superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        };
      } else {
        // old school shim for old browsers
        module.exports = function inherits(ctor, superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function TempCtor() {};
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        };
      }
    }, {}],
    3: [function (require, module, exports) {
      module.exports = function isBuffer(arg) {
        return arg && _typeof(arg) === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
      };
    }, {}],
    4: [function (require, module, exports) {
      (function (process, global) {
        (function () {
          // Copyright Joyent, Inc. and other Node contributors.
          //
          // Permission is hereby granted, free of charge, to any person obtaining a
          // copy of this software and associated documentation files (the
          // "Software"), to deal in the Software without restriction, including
          // without limitation the rights to use, copy, modify, merge, publish,
          // distribute, sublicense, and/or sell copies of the Software, and to permit
          // persons to whom the Software is furnished to do so, subject to the
          // following conditions:
          //
          // The above copyright notice and this permission notice shall be included
          // in all copies or substantial portions of the Software.
          //
          // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
          // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
          // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
          // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
          // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
          // USE OR OTHER DEALINGS IN THE SOFTWARE.

          var formatRegExp = /%[sdj%]/g;
          exports.format = function (f) {
            if (!isString(f)) {
              var objects = [];
              for (var i = 0; i < arguments.length; i++) {
                objects.push(inspect(arguments[i]));
              }
              return objects.join(' ');
            }
            var i = 1;
            var args = arguments;
            var len = args.length;
            var str = String(f).replace(formatRegExp, function (x) {
              if (x === '%%') return '%';
              if (i >= len) return x;
              switch (x) {
                case '%s':
                  return String(args[i++]);
                case '%d':
                  return Number(args[i++]);
                case '%j':
                  try {
                    return JSON.stringify(args[i++]);
                  } catch (_) {
                    return '[Circular]';
                  }
                default:
                  return x;
              }
            });
            for (var x = args[i]; i < len; x = args[++i]) {
              if (isNull(x) || !isObject(x)) {
                str += ' ' + x;
              } else {
                str += ' ' + inspect(x);
              }
            }
            return str;
          };

          // Mark that a method should not be used.
          // Returns a modified function which warns once by default.
          // If --no-deprecation is set, then it is a no-op.
          exports.deprecate = function (fn, msg) {
            // Allow for deprecating things in the process of starting up.
            if (isUndefined(global.process)) {
              return function () {
                return exports.deprecate(fn, msg).apply(this, arguments);
              };
            }
            if (process.noDeprecation === true) {
              return fn;
            }
            var warned = false;
            function deprecated() {
              if (!warned) {
                if (process.throwDeprecation) {
                  throw new Error(msg);
                } else if (process.traceDeprecation) {
                  console.trace(msg);
                } else {
                  console.error(msg);
                }
                warned = true;
              }
              return fn.apply(this, arguments);
            }
            return deprecated;
          };
          var debugs = {};
          var debugEnviron;
          exports.debuglog = function (set) {
            if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || '';
            set = set.toUpperCase();
            if (!debugs[set]) {
              if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
                var pid = process.pid;
                debugs[set] = function () {
                  var msg = exports.format.apply(exports, arguments);
                  console.error('%s %d: %s', set, pid, msg);
                };
              } else {
                debugs[set] = function () {};
              }
            }
            return debugs[set];
          };

          /**
           * Echos the value of a value. Trys to print the value out
           * in the best way possible given the different types.
           *
           * @param {Object} obj The object to print out.
           * @param {Object} opts Optional options object that alters the output.
           */
          /* legacy: obj, showHidden, depth, colors*/
          function inspect(obj, opts) {
            // default options
            var ctx = {
              seen: [],
              stylize: stylizeNoColor
            };
            // legacy...
            if (arguments.length >= 3) ctx.depth = arguments[2];
            if (arguments.length >= 4) ctx.colors = arguments[3];
            if (isBoolean(opts)) {
              // legacy...
              ctx.showHidden = opts;
            } else if (opts) {
              // got an "options" object
              exports._extend(ctx, opts);
            }
            // set default options
            if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
            if (isUndefined(ctx.depth)) ctx.depth = 2;
            if (isUndefined(ctx.colors)) ctx.colors = false;
            if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
            if (ctx.colors) ctx.stylize = stylizeWithColor;
            return formatValue(ctx, obj, ctx.depth);
          }
          exports.inspect = inspect;

          // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
          inspect.colors = {
            'bold': [1, 22],
            'italic': [3, 23],
            'underline': [4, 24],
            'inverse': [7, 27],
            'white': [37, 39],
            'grey': [90, 39],
            'black': [30, 39],
            'blue': [34, 39],
            'cyan': [36, 39],
            'green': [32, 39],
            'magenta': [35, 39],
            'red': [31, 39],
            'yellow': [33, 39]
          };

          // Don't use 'blue' not visible on cmd.exe
          inspect.styles = {
            'special': 'cyan',
            'number': 'yellow',
            'boolean': 'yellow',
            'undefined': 'grey',
            'null': 'bold',
            'string': 'green',
            'date': 'magenta',
            // "name": intentionally not styling
            'regexp': 'red'
          };
          function stylizeWithColor(str, styleType) {
            var style = inspect.styles[styleType];
            if (style) {
              return "\x1B[" + inspect.colors[style][0] + 'm' + str + "\x1B[" + inspect.colors[style][1] + 'm';
            } else {
              return str;
            }
          }
          function stylizeNoColor(str, styleType) {
            return str;
          }
          function arrayToHash(array) {
            var hash = {};
            array.forEach(function (val, idx) {
              hash[val] = true;
            });
            return hash;
          }
          function formatValue(ctx, value, recurseTimes) {
            // Provide a hook for user-specified inspect functions.
            // Check that value is an object with an inspect function on it
            if (ctx.customInspect && value && isFunction(value.inspect) &&
            // Filter out the util module, it's inspect function is special
            value.inspect !== exports.inspect &&
            // Also filter out any prototype objects using the circular check.
            !(value.constructor && value.constructor.prototype === value)) {
              var ret = value.inspect(recurseTimes, ctx);
              if (!isString(ret)) {
                ret = formatValue(ctx, ret, recurseTimes);
              }
              return ret;
            }

            // Primitive types cannot have properties
            var primitive = formatPrimitive(ctx, value);
            if (primitive) {
              return primitive;
            }

            // Look up the keys of the object.
            var keys = Object.keys(value);
            var visibleKeys = arrayToHash(keys);
            if (ctx.showHidden) {
              keys = Object.getOwnPropertyNames(value);
            }

            // IE doesn't make error fields non-enumerable
            // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
            if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
              return formatError(value);
            }

            // Some type of object without properties can be shortcutted.
            if (keys.length === 0) {
              if (isFunction(value)) {
                var name = value.name ? ': ' + value.name : '';
                return ctx.stylize('[Function' + name + ']', 'special');
              }
              if (isRegExp(value)) {
                return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
              }
              if (isDate(value)) {
                return ctx.stylize(Date.prototype.toString.call(value), 'date');
              }
              if (isError(value)) {
                return formatError(value);
              }
            }
            var base = '',
              array = false,
              braces = ['{', '}'];

            // Make Array say that they are Array
            if (isArray(value)) {
              array = true;
              braces = ['[', ']'];
            }

            // Make functions say that they are functions
            if (isFunction(value)) {
              var n = value.name ? ': ' + value.name : '';
              base = ' [Function' + n + ']';
            }

            // Make RegExps say that they are RegExps
            if (isRegExp(value)) {
              base = ' ' + RegExp.prototype.toString.call(value);
            }

            // Make dates with properties first say the date
            if (isDate(value)) {
              base = ' ' + Date.prototype.toUTCString.call(value);
            }

            // Make error with message first say the error
            if (isError(value)) {
              base = ' ' + formatError(value);
            }
            if (keys.length === 0 && (!array || value.length == 0)) {
              return braces[0] + base + braces[1];
            }
            if (recurseTimes < 0) {
              if (isRegExp(value)) {
                return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
              } else {
                return ctx.stylize('[Object]', 'special');
              }
            }
            ctx.seen.push(value);
            var output;
            if (array) {
              output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
            } else {
              output = keys.map(function (key) {
                return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
              });
            }
            ctx.seen.pop();
            return reduceToSingleString(output, base, braces);
          }
          function formatPrimitive(ctx, value) {
            if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');
            if (isString(value)) {
              var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
              return ctx.stylize(simple, 'string');
            }
            if (isNumber(value)) return ctx.stylize('' + value, 'number');
            if (isBoolean(value)) return ctx.stylize('' + value, 'boolean');
            // For some reason typeof null is "object", so special case here.
            if (isNull(value)) return ctx.stylize('null', 'null');
          }
          function formatError(value) {
            return '[' + Error.prototype.toString.call(value) + ']';
          }
          function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
            var output = [];
            for (var i = 0, l = value.length; i < l; ++i) {
              if (hasOwnProperty(value, String(i))) {
                output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
              } else {
                output.push('');
              }
            }
            keys.forEach(function (key) {
              if (!key.match(/^\d+$/)) {
                output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
              }
            });
            return output;
          }
          function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
            var name, str, desc;
            desc = Object.getOwnPropertyDescriptor(value, key) || {
              value: value[key]
            };
            if (desc.get) {
              if (desc.set) {
                str = ctx.stylize('[Getter/Setter]', 'special');
              } else {
                str = ctx.stylize('[Getter]', 'special');
              }
            } else {
              if (desc.set) {
                str = ctx.stylize('[Setter]', 'special');
              }
            }
            if (!hasOwnProperty(visibleKeys, key)) {
              name = '[' + key + ']';
            }
            if (!str) {
              if (ctx.seen.indexOf(desc.value) < 0) {
                if (isNull(recurseTimes)) {
                  str = formatValue(ctx, desc.value, null);
                } else {
                  str = formatValue(ctx, desc.value, recurseTimes - 1);
                }
                if (str.indexOf('\n') > -1) {
                  if (array) {
                    str = str.split('\n').map(function (line) {
                      return '  ' + line;
                    }).join('\n').substr(2);
                  } else {
                    str = '\n' + str.split('\n').map(function (line) {
                      return '   ' + line;
                    }).join('\n');
                  }
                }
              } else {
                str = ctx.stylize('[Circular]', 'special');
              }
            }
            if (isUndefined(name)) {
              if (array && key.match(/^\d+$/)) {
                return str;
              }
              name = JSON.stringify('' + key);
              if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
                name = name.substr(1, name.length - 2);
                name = ctx.stylize(name, 'name');
              } else {
                name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
                name = ctx.stylize(name, 'string');
              }
            }
            return name + ': ' + str;
          }
          function reduceToSingleString(output, base, braces) {
            var numLinesEst = 0;
            var length = output.reduce(function (prev, cur) {
              numLinesEst++;
              if (cur.indexOf('\n') >= 0) numLinesEst++;
              return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
            }, 0);
            if (length > 60) {
              return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
            }
            return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
          }

          // NOTE: These type checking functions intentionally don't use `instanceof`
          // because it is fragile and can be easily faked with `Object.create()`.
          function isArray(ar) {
            return Array.isArray(ar);
          }
          exports.isArray = isArray;
          function isBoolean(arg) {
            return typeof arg === 'boolean';
          }
          exports.isBoolean = isBoolean;
          function isNull(arg) {
            return arg === null;
          }
          exports.isNull = isNull;
          function isNullOrUndefined(arg) {
            return arg == null;
          }
          exports.isNullOrUndefined = isNullOrUndefined;
          function isNumber(arg) {
            return typeof arg === 'number';
          }
          exports.isNumber = isNumber;
          function isString(arg) {
            return typeof arg === 'string';
          }
          exports.isString = isString;
          function isSymbol(arg) {
            return _typeof(arg) === 'symbol';
          }
          exports.isSymbol = isSymbol;
          function isUndefined(arg) {
            return arg === void 0;
          }
          exports.isUndefined = isUndefined;
          function isRegExp(re) {
            return isObject(re) && objectToString(re) === '[object RegExp]';
          }
          exports.isRegExp = isRegExp;
          function isObject(arg) {
            return _typeof(arg) === 'object' && arg !== null;
          }
          exports.isObject = isObject;
          function isDate(d) {
            return isObject(d) && objectToString(d) === '[object Date]';
          }
          exports.isDate = isDate;
          function isError(e) {
            return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
          }
          exports.isError = isError;
          function isFunction(arg) {
            return typeof arg === 'function';
          }
          exports.isFunction = isFunction;
          function isPrimitive(arg) {
            return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || _typeof(arg) === 'symbol' ||
            // ES6 symbol
            typeof arg === 'undefined';
          }
          exports.isPrimitive = isPrimitive;
          exports.isBuffer = require('./support/isBuffer');
          function objectToString(o) {
            return Object.prototype.toString.call(o);
          }
          function pad(n) {
            return n < 10 ? '0' + n.toString(10) : n.toString(10);
          }
          var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

          // 26 Feb 16:19:34
          function timestamp() {
            var d = new Date();
            var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
            return [d.getDate(), months[d.getMonth()], time].join(' ');
          }

          // log is just a thin wrapper to console.log that prepends a timestamp
          exports.log = function () {
            console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
          };

          /**
           * Inherit the prototype methods from one constructor into another.
           *
           * The Function.prototype.inherits from lang.js rewritten as a standalone
           * function (not on Function.prototype). NOTE: If this file is to be loaded
           * during bootstrapping this function needs to be rewritten using some native
           * functions as prototype setup using normal JavaScript does not work as
           * expected during bootstrapping (see mirror.js in r114903).
           *
           * @param {function} ctor Constructor function which needs to inherit the
           *     prototype.
           * @param {function} superCtor Constructor function to inherit prototype from.
           */
          exports.inherits = require('inherits');
          exports._extend = function (origin, add) {
            // Don't do anything if add isn't an object
            if (!add || !isObject(add)) return origin;
            var keys = Object.keys(add);
            var i = keys.length;
            while (i--) {
              origin[keys[i]] = add[keys[i]];
            }
            return origin;
          };
          function hasOwnProperty(obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop);
          }
        }).call(this);
      }).call(this, require('_process'), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {
      "./support/isBuffer": 3,
      "_process": 24,
      "inherits": 2
    }],
    5: [function (require, module, exports) {
      /**
      * Fable Core Pre-initialization Service Base
      *
      * For a couple services, we need to be able to instantiate them before the Fable object is fully initialized.
      * This is a base class for those services.
      *
      * @author <steven@velozo.com>
      */
      var FableCoreServiceProviderBase = /*#__PURE__*/function () {
        function FableCoreServiceProviderBase(pOptions, pServiceHash) {
          _classCallCheck(this, FableCoreServiceProviderBase);
          this.fable = false;
          this.options = _typeof(pOptions) === 'object' ? pOptions : {};
          this.serviceType = 'Unknown';

          // The hash will be a non-standard UUID ... the UUID service uses this base class!
          this.UUID = "CORESVC-".concat(Math.floor(Math.random() * (99999 - 10000) + 10000));
          this.Hash = typeof pServiceHash === 'string' ? pServiceHash : "".concat(this.UUID);
        }
        _createClass(FableCoreServiceProviderBase, [{
          key: "connectFable",
          value:
          // After fable is initialized, it would be expected to be wired in as a normal service.
          function connectFable(pFable) {
            this.fable = pFable;
            return true;
          }
        }]);
        return FableCoreServiceProviderBase;
      }();
      _defineProperty(FableCoreServiceProviderBase, "isFableService", true);
      module.exports = FableCoreServiceProviderBase;
    }, {}],
    6: [function (require, module, exports) {
      /**
      * Fable Service Base
      * @author <steven@velozo.com>
      */
      var FableServiceProviderBase = /*#__PURE__*/_createClass(function FableServiceProviderBase(pFable, pOptions, pServiceHash) {
        _classCallCheck(this, FableServiceProviderBase);
        this.fable = pFable;
        this.options = _typeof(pOptions) === 'object' ? pOptions : _typeof(pFable) === 'object' && !pFable.isFable ? pFable : {};
        this.serviceType = 'Unknown';
        if (typeof pFable.getUUID == 'function') {
          this.UUID = pFable.getUUID();
        } else {
          this.UUID = "NoFABLESVC-".concat(Math.floor(Math.random() * (99999 - 10000) + 10000));
        }
        this.Hash = typeof pServiceHash === 'string' ? pServiceHash : "".concat(this.UUID);

        // Pull back a few things
        this.log = this.fable.log;
        this.servicesMap = this.fable.servicesMap;
        this.services = this.fable.services;
      });
      _defineProperty(FableServiceProviderBase, "isFableService", true);
      module.exports = FableServiceProviderBase;
      module.exports.CoreServiceProviderBase = require('./Fable-ServiceProviderBase-Preinit.js');
    }, {
      "./Fable-ServiceProviderBase-Preinit.js": 5
    }],
    7: [function (require, module, exports) {
      'use strict';

      var UTF8_ACCEPT = 12;
      var UTF8_REJECT = 0;
      var UTF8_DATA = [
      // The first part of the table maps bytes to character to a transition.
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 7, 7, 10, 9, 9, 9, 11, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
      // The second part of the table maps a state to a new state when adding a
      // transition.
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 24, 36, 48, 60, 72, 84, 96, 0, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      // The third part maps the current transition to a mask that needs to apply
      // to the byte.
      0x7F, 0x3F, 0x3F, 0x3F, 0x00, 0x1F, 0x0F, 0x0F, 0x0F, 0x07, 0x07, 0x07];
      function decodeURIComponent(uri) {
        var percentPosition = uri.indexOf('%');
        if (percentPosition === -1) return uri;
        var length = uri.length;
        var decoded = '';
        var last = 0;
        var codepoint = 0;
        var startOfOctets = percentPosition;
        var state = UTF8_ACCEPT;
        while (percentPosition > -1 && percentPosition < length) {
          var high = hexCodeToInt(uri[percentPosition + 1], 4);
          var low = hexCodeToInt(uri[percentPosition + 2], 0);
          var _byte = high | low;
          var type = UTF8_DATA[_byte];
          state = UTF8_DATA[256 + state + type];
          codepoint = codepoint << 6 | _byte & UTF8_DATA[364 + type];
          if (state === UTF8_ACCEPT) {
            decoded += uri.slice(last, startOfOctets);
            decoded += codepoint <= 0xFFFF ? String.fromCharCode(codepoint) : String.fromCharCode(0xD7C0 + (codepoint >> 10), 0xDC00 + (codepoint & 0x3FF));
            codepoint = 0;
            last = percentPosition + 3;
            percentPosition = startOfOctets = uri.indexOf('%', last);
          } else if (state === UTF8_REJECT) {
            return null;
          } else {
            percentPosition += 3;
            if (percentPosition < length && uri.charCodeAt(percentPosition) === 37) continue;
            return null;
          }
        }
        return decoded + uri.slice(last);
      }
      var HEX = {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        'a': 10,
        'A': 10,
        'b': 11,
        'B': 11,
        'c': 12,
        'C': 12,
        'd': 13,
        'D': 13,
        'e': 14,
        'E': 14,
        'f': 15,
        'F': 15
      };
      function hexCodeToInt(c, shift) {
        var i = HEX[c];
        return i === undefined ? 255 : i << shift;
      }
      module.exports = decodeURIComponent;
    }, {}],
    8: [function (require, module, exports) {
      'use strict';

      // do not edit .js files directly - edit src/index.jst
      module.exports = function equal(a, b) {
        if (a === b) return true;
        if (a && b && _typeof(a) == 'object' && _typeof(b) == 'object') {
          if (a.constructor !== b.constructor) return false;
          var length, i, keys;
          if (Array.isArray(a)) {
            length = a.length;
            if (length != b.length) return false;
            for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;
            return true;
          }
          if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
          if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
          if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
          keys = Object.keys(a);
          length = keys.length;
          if (length !== Object.keys(b).length) return false;
          for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
          for (i = length; i-- !== 0;) {
            var key = keys[i];
            if (!equal(a[key], b[key])) return false;
          }
          return true;
        }

        // true if both NaN, false otherwise
        return a !== a && b !== b;
      };
    }, {}],
    9: [function (require, module, exports) {
      "use strict";

      var parse = require("./parse");
      var stringify = require("./stringify");
      var fastQuerystring = {
        parse: parse,
        stringify: stringify
      };

      /**
       * Enable TS and JS support
       *
       * - `const qs = require('fast-querystring')`
       * - `import qs from 'fast-querystring'`
       */
      module.exports = fastQuerystring;
      module.exports["default"] = fastQuerystring;
      module.exports.parse = parse;
      module.exports.stringify = stringify;
    }, {
      "./parse": 11,
      "./stringify": 12
    }],
    10: [function (require, module, exports) {
      // This file is taken from Node.js project.
      // Full implementation can be found from https://github.com/nodejs/node/blob/main/lib/internal/querystring.js

      var hexTable = Array.from({
        length: 256
      }, function (_, i) {
        return "%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase();
      });

      // These characters do not need escaping when generating query strings:
      // ! - . _ ~
      // ' ( ) *
      // digits
      // alpha (uppercase)
      // alpha (lowercase)
      // rome-ignore format: the array should not be formatted
      var noEscape = new Int8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      // 0 - 15
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      // 16 - 31
      0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0,
      // 32 - 47
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
      // 48 - 63
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      // 64 - 79
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1,
      // 80 - 95
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      // 96 - 111
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0 // 112 - 127
      ]);

      /**
       * @param {string} str
       * @returns {string}
       */
      function encodeString(str) {
        var len = str.length;
        if (len === 0) return "";
        var out = "";
        var lastPos = 0;
        var i = 0;
        outer: for (; i < len; i++) {
          var c = str.charCodeAt(i);

          // ASCII
          while (c < 0x80) {
            if (noEscape[c] !== 1) {
              if (lastPos < i) out += str.slice(lastPos, i);
              lastPos = i + 1;
              out += hexTable[c];
            }
            if (++i === len) break outer;
            c = str.charCodeAt(i);
          }
          if (lastPos < i) out += str.slice(lastPos, i);

          // Multi-byte characters ...
          if (c < 0x800) {
            lastPos = i + 1;
            out += hexTable[0xc0 | c >> 6] + hexTable[0x80 | c & 0x3f];
            continue;
          }
          if (c < 0xd800 || c >= 0xe000) {
            lastPos = i + 1;
            out += hexTable[0xe0 | c >> 12] + hexTable[0x80 | c >> 6 & 0x3f] + hexTable[0x80 | c & 0x3f];
            continue;
          }
          // Surrogate pair
          ++i;

          // This branch should never happen because all URLSearchParams entries
          // should already be converted to USVString. But, included for
          // completion's sake anyway.
          if (i >= len) {
            throw new Error("URI malformed");
          }
          var c2 = str.charCodeAt(i) & 0x3ff;
          lastPos = i + 1;
          c = 0x10000 + ((c & 0x3ff) << 10 | c2);
          out += hexTable[0xf0 | c >> 18] + hexTable[0x80 | c >> 12 & 0x3f] + hexTable[0x80 | c >> 6 & 0x3f] + hexTable[0x80 | c & 0x3f];
        }
        if (lastPos === 0) return str;
        if (lastPos < len) return out + str.slice(lastPos);
        return out;
      }
      module.exports = {
        encodeString: encodeString
      };
    }, {}],
    11: [function (require, module, exports) {
      "use strict";

      var fastDecode = require("fast-decode-uri-component");
      var plusRegex = /\+/g;
      var Empty = function Empty() {};
      Empty.prototype = Object.create(null);

      /**
       * @callback parse
       * @param {string} input
       */
      function parse(input) {
        // Optimization: Use new Empty() instead of Object.create(null) for performance
        // v8 has a better optimization for initializing functions compared to Object
        var result = new Empty();
        if (typeof input !== "string") {
          return result;
        }
        var inputLength = input.length;
        var key = "";
        var value = "";
        var startingIndex = -1;
        var equalityIndex = -1;
        var shouldDecodeKey = false;
        var shouldDecodeValue = false;
        var keyHasPlus = false;
        var valueHasPlus = false;
        var hasBothKeyValuePair = false;
        var c = 0;

        // Have a boundary of input.length + 1 to access last pair inside the loop.
        for (var i = 0; i < inputLength + 1; i++) {
          c = i !== inputLength ? input.charCodeAt(i) : 38;

          // Handle '&' and end of line to pass the current values to result
          if (c === 38) {
            hasBothKeyValuePair = equalityIndex > startingIndex;

            // Optimization: Reuse equality index to store the end of key
            if (!hasBothKeyValuePair) {
              equalityIndex = i;
            }
            key = input.slice(startingIndex + 1, equalityIndex);

            // Add key/value pair only if the range size is greater than 1; a.k.a. contains at least "="
            if (hasBothKeyValuePair || key.length > 0) {
              // Optimization: Replace '+' with space
              if (keyHasPlus) {
                key = key.replace(plusRegex, " ");
              }

              // Optimization: Do not decode if it's not necessary.
              if (shouldDecodeKey) {
                key = fastDecode(key) || key;
              }
              if (hasBothKeyValuePair) {
                value = input.slice(equalityIndex + 1, i);
                if (valueHasPlus) {
                  value = value.replace(plusRegex, " ");
                }
                if (shouldDecodeValue) {
                  value = fastDecode(value) || value;
                }
              }
              var currentValue = result[key];
              if (currentValue === undefined) {
                result[key] = value;
              } else {
                // Optimization: value.pop is faster than Array.isArray(value)
                if (currentValue.pop) {
                  currentValue.push(value);
                } else {
                  result[key] = [currentValue, value];
                }
              }
            }

            // Reset reading key value pairs
            value = "";
            startingIndex = i;
            equalityIndex = i;
            shouldDecodeKey = false;
            shouldDecodeValue = false;
            keyHasPlus = false;
            valueHasPlus = false;
          }
          // Check '='
          else if (c === 61) {
            if (equalityIndex <= startingIndex) {
              equalityIndex = i;
            }
            // If '=' character occurs again, we should decode the input.
            else {
              shouldDecodeValue = true;
            }
          }
          // Check '+', and remember to replace it with empty space.
          else if (c === 43) {
            if (equalityIndex > startingIndex) {
              valueHasPlus = true;
            } else {
              keyHasPlus = true;
            }
          }
          // Check '%' character for encoding
          else if (c === 37) {
            if (equalityIndex > startingIndex) {
              shouldDecodeValue = true;
            } else {
              shouldDecodeKey = true;
            }
          }
        }
        return result;
      }
      module.exports = parse;
    }, {
      "fast-decode-uri-component": 7
    }],
    12: [function (require, module, exports) {
      "use strict";

      var _require = require("./internals/querystring"),
        encodeString = _require.encodeString;
      function getAsPrimitive(value) {
        var type = _typeof(value);
        if (type === "string") {
          // Length check is handled inside encodeString function
          return encodeString(value);
        } else if (type === "bigint") {
          return value.toString();
        } else if (type === "boolean") {
          return value ? "true" : "false";
        } else if (type === "number" && Number.isFinite(value)) {
          return value < 1e21 ? "" + value : encodeString("" + value);
        }
        return "";
      }

      /**
       * @param {Record<string, string | number | boolean
       * | ReadonlyArray<string | number | boolean> | null>} input
       * @returns {string}
       */
      function stringify(input) {
        var result = "";
        if (input === null || _typeof(input) !== "object") {
          return result;
        }
        var separator = "&";
        var keys = Object.keys(input);
        var keyLength = keys.length;
        var valueLength = 0;
        for (var i = 0; i < keyLength; i++) {
          var key = keys[i];
          var value = input[key];
          var encodedKey = encodeString(key) + "=";
          if (i) {
            result += separator;
          }
          if (Array.isArray(value)) {
            valueLength = value.length;
            for (var j = 0; j < valueLength; j++) {
              if (j) {
                result += separator;
              }

              // Optimization: Dividing into multiple lines improves the performance.
              // Since v8 does not need to care about the '+' character if it was one-liner.
              result += encodedKey;
              result += getAsPrimitive(value[j]);
            }
          } else {
            result += encodedKey;
            result += getAsPrimitive(value);
          }
        }
        return result;
      }
      module.exports = stringify;
    }, {
      "./internals/querystring": 10
    }],
    13: [function (require, module, exports) {
      'use strict';

      /*
        Char codes:
          '!': 33 - !
          '#': 35 - %23
          '$': 36 - %24
          '%': 37 - %25
          '&': 38 - %26
          ''': 39 - '
          '(': 40 - (
          ')': 41 - )
          '*': 42 - *
          '+': 43 - %2B
          ',': 44 - %2C
          '-': 45 - -
          '.': 46 - .
          '/': 47 - %2F
          ':': 58 - %3A
          ';': 59 - %3B
          '=': 61 - %3D
          '?': 63 - %3F
          '@': 64 - %40
          '_': 95 - _
          '~': 126 - ~
      */
      var assert = require('assert');
      var querystring = require('fast-querystring');
      var isRegexSafe = require('safe-regex2');
      var deepEqual = require('fast-deep-equal');
      var _require2 = require('./lib/pretty-print'),
        prettyPrintTree = _require2.prettyPrintTree;
      var _require3 = require('./lib/node'),
        StaticNode = _require3.StaticNode,
        NODE_TYPES = _require3.NODE_TYPES;
      var Constrainer = require('./lib/constrainer');
      var httpMethods = require('./lib/http-methods');
      var httpMethodStrategy = require('./lib/strategies/http-method');
      var _require4 = require('./lib/url-sanitizer'),
        safeDecodeURI = _require4.safeDecodeURI,
        safeDecodeURIComponent = _require4.safeDecodeURIComponent;
      var FULL_PATH_REGEXP = /^https?:\/\/.*?\//;
      var OPTIONAL_PARAM_REGEXP = /(\/:[^/()]*?)\?(\/?)/;
      if (!isRegexSafe(FULL_PATH_REGEXP)) {
        throw new Error('the FULL_PATH_REGEXP is not safe, update this module');
      }
      if (!isRegexSafe(OPTIONAL_PARAM_REGEXP)) {
        throw new Error('the OPTIONAL_PARAM_REGEXP is not safe, update this module');
      }
      function Router(opts) {
        if (!(this instanceof Router)) {
          return new Router(opts);
        }
        opts = opts || {};
        this._opts = opts;
        if (opts.defaultRoute) {
          assert(typeof opts.defaultRoute === 'function', 'The default route must be a function');
          this.defaultRoute = opts.defaultRoute;
        } else {
          this.defaultRoute = null;
        }
        if (opts.onBadUrl) {
          assert(typeof opts.onBadUrl === 'function', 'The bad url handler must be a function');
          this.onBadUrl = opts.onBadUrl;
        } else {
          this.onBadUrl = null;
        }
        if (opts.buildPrettyMeta) {
          assert(typeof opts.buildPrettyMeta === 'function', 'buildPrettyMeta must be a function');
          this.buildPrettyMeta = opts.buildPrettyMeta;
        } else {
          this.buildPrettyMeta = defaultBuildPrettyMeta;
        }
        if (opts.querystringParser) {
          assert(typeof opts.querystringParser === 'function', 'querystringParser must be a function');
          this.querystringParser = opts.querystringParser;
        } else {
          this.querystringParser = function (query) {
            return query === '' ? {} : querystring.parse(query);
          };
        }
        this.caseSensitive = opts.caseSensitive === undefined ? true : opts.caseSensitive;
        this.ignoreTrailingSlash = opts.ignoreTrailingSlash || false;
        this.ignoreDuplicateSlashes = opts.ignoreDuplicateSlashes || false;
        this.maxParamLength = opts.maxParamLength || 100;
        this.allowUnsafeRegex = opts.allowUnsafeRegex || false;
        this.constrainer = new Constrainer(opts.constraints);
        this.routes = [];
        this.trees = {};
      }
      Router.prototype.on = function on(method, path, opts, handler, store) {
        if (typeof opts === 'function') {
          if (handler !== undefined) {
            store = handler;
          }
          handler = opts;
          opts = {};
        }
        // path validation
        assert(typeof path === 'string', 'Path should be a string');
        assert(path.length > 0, 'The path could not be empty');
        assert(path[0] === '/' || path[0] === '*', 'The first character of a path should be `/` or `*`');
        // handler validation
        assert(typeof handler === 'function', 'Handler should be a function');

        // path ends with optional parameter
        var optionalParamMatch = path.match(OPTIONAL_PARAM_REGEXP);
        if (optionalParamMatch) {
          assert(path.length === optionalParamMatch.index + optionalParamMatch[0].length, 'Optional Parameter needs to be the last parameter of the path');
          var pathFull = path.replace(OPTIONAL_PARAM_REGEXP, '$1$2');
          var pathOptional = path.replace(OPTIONAL_PARAM_REGEXP, '$2');
          this.on(method, pathFull, opts, handler, store);
          this.on(method, pathOptional, opts, handler, store);
          return;
        }
        var route = path;
        if (this.ignoreDuplicateSlashes) {
          path = removeDuplicateSlashes(path);
        }
        if (this.ignoreTrailingSlash) {
          path = trimLastSlash(path);
        }
        var methods = Array.isArray(method) ? method : [method];
        var _iterator = _createForOfIteratorHelper(methods),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _method = _step.value;
            assert(typeof _method === 'string', 'Method should be a string');
            assert(httpMethods.includes(_method), "Method '".concat(_method, "' is not an http method."));
            this._on(_method, path, opts, handler, store, route);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      };
      Router.prototype._on = function _on(method, path, opts, handler, store) {
        var constraints = {};
        if (opts.constraints !== undefined) {
          assert(_typeof(opts.constraints) === 'object' && opts.constraints !== null, 'Constraints should be an object');
          if (Object.keys(opts.constraints).length !== 0) {
            constraints = opts.constraints;
          }
        }
        this.constrainer.validateConstraints(constraints);
        // Let the constrainer know if any constraints are being used now
        this.constrainer.noteUsage(constraints);

        // Boot the tree for this method if it doesn't exist yet
        if (this.trees[method] === undefined) {
          this.trees[method] = new StaticNode('/');
        }
        var pattern = path;
        if (pattern === '*' && this.trees[method].prefix.length !== 0) {
          var currentRoot = this.trees[method];
          this.trees[method] = new StaticNode('');
          this.trees[method].staticChildren['/'] = currentRoot;
        }
        var currentNode = this.trees[method];
        var parentNodePathIndex = currentNode.prefix.length;
        var params = [];
        for (var _i = 0; _i <= pattern.length; _i++) {
          if (pattern.charCodeAt(_i) === 58 && pattern.charCodeAt(_i + 1) === 58) {
            // It's a double colon
            _i++;
            continue;
          }
          var isParametricNode = pattern.charCodeAt(_i) === 58 && pattern.charCodeAt(_i + 1) !== 58;
          var isWildcardNode = pattern.charCodeAt(_i) === 42;
          if (isParametricNode || isWildcardNode || _i === pattern.length && _i !== parentNodePathIndex) {
            var staticNodePath = pattern.slice(parentNodePathIndex, _i);
            if (!this.caseSensitive) {
              staticNodePath = staticNodePath.toLowerCase();
            }
            staticNodePath = staticNodePath.split('::').join(':');
            staticNodePath = staticNodePath.split('%').join('%25');
            // add the static part of the route to the tree
            currentNode = currentNode.createStaticChild(staticNodePath);
          }
          if (isParametricNode) {
            var isRegexNode = false;
            var regexps = [];
            var lastParamStartIndex = _i + 1;
            for (var j = lastParamStartIndex;; j++) {
              var charCode = pattern.charCodeAt(j);
              var isRegexParam = charCode === 40;
              var isStaticPart = charCode === 45 || charCode === 46;
              var isEndOfNode = charCode === 47 || j === pattern.length;
              if (isRegexParam || isStaticPart || isEndOfNode) {
                var paramName = pattern.slice(lastParamStartIndex, j);
                params.push(paramName);
                isRegexNode = isRegexNode || isRegexParam || isStaticPart;
                if (isRegexParam) {
                  var endOfRegexIndex = getClosingParenthensePosition(pattern, j);
                  var regexString = pattern.slice(j, endOfRegexIndex + 1);
                  if (!this.allowUnsafeRegex) {
                    assert(isRegexSafe(new RegExp(regexString)), "The regex '".concat(regexString, "' is not safe!"));
                  }
                  regexps.push(trimRegExpStartAndEnd(regexString));
                  j = endOfRegexIndex + 1;
                } else {
                  regexps.push('(.*?)');
                }
                var staticPartStartIndex = j;
                for (; j < pattern.length; j++) {
                  var _charCode = pattern.charCodeAt(j);
                  if (_charCode === 47) break;
                  if (_charCode === 58) {
                    var nextCharCode = pattern.charCodeAt(j + 1);
                    if (nextCharCode === 58) j++;else break;
                  }
                }
                var staticPart = pattern.slice(staticPartStartIndex, j);
                if (staticPart) {
                  staticPart = staticPart.split('::').join(':');
                  staticPart = staticPart.split('%').join('%25');
                  regexps.push(escapeRegExp(staticPart));
                }
                lastParamStartIndex = j + 1;
                if (isEndOfNode || pattern.charCodeAt(j) === 47 || j === pattern.length) {
                  var nodePattern = isRegexNode ? '()' + staticPart : staticPart;
                  var nodePath = pattern.slice(_i, j);
                  pattern = pattern.slice(0, _i + 1) + nodePattern + pattern.slice(j);
                  _i += nodePattern.length;
                  var regex = isRegexNode ? new RegExp('^' + regexps.join('') + '$') : null;
                  currentNode = currentNode.createParametricChild(regex, staticPart || null, nodePath);
                  parentNodePathIndex = _i + 1;
                  break;
                }
              }
            }
          } else if (isWildcardNode) {
            // add the wildcard parameter
            params.push('*');
            currentNode = currentNode.createWildcardChild();
            parentNodePathIndex = _i + 1;
            if (_i !== pattern.length - 1) {
              throw new Error('Wildcard must be the last character in the route');
            }
          }
        }
        if (!this.caseSensitive) {
          pattern = pattern.toLowerCase();
        }
        if (pattern === '*') {
          pattern = '/*';
        }
        var _iterator2 = _createForOfIteratorHelper(this.routes),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var existRoute = _step2.value;
            var routeConstraints = existRoute.opts.constraints || {};
            if (existRoute.method === method && existRoute.pattern === pattern && deepEqual(routeConstraints, constraints)) {
              throw new Error("Method '".concat(method, "' already declared for route '").concat(pattern, "' with constraints '").concat(JSON.stringify(constraints), "'"));
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        var route = {
          method: method,
          path: path,
          pattern: pattern,
          params: params,
          opts: opts,
          handler: handler,
          store: store
        };
        this.routes.push(route);
        currentNode.addRoute(route, this.constrainer);
      };
      Router.prototype.hasConstraintStrategy = function (strategyName) {
        return this.constrainer.hasConstraintStrategy(strategyName);
      };
      Router.prototype.addConstraintStrategy = function (constraints) {
        this.constrainer.addConstraintStrategy(constraints);
        this._rebuild(this.routes);
      };
      Router.prototype.reset = function reset() {
        this.trees = {};
        this.routes = [];
      };
      Router.prototype.off = function off(method, path, constraints) {
        // path validation
        assert(typeof path === 'string', 'Path should be a string');
        assert(path.length > 0, 'The path could not be empty');
        assert(path[0] === '/' || path[0] === '*', 'The first character of a path should be `/` or `*`');
        // options validation
        assert(typeof constraints === 'undefined' || _typeof(constraints) === 'object' && !Array.isArray(constraints) && constraints !== null, 'Constraints should be an object or undefined.');

        // path ends with optional parameter
        var optionalParamMatch = path.match(OPTIONAL_PARAM_REGEXP);
        if (optionalParamMatch) {
          assert(path.length === optionalParamMatch.index + optionalParamMatch[0].length, 'Optional Parameter needs to be the last parameter of the path');
          var pathFull = path.replace(OPTIONAL_PARAM_REGEXP, '$1$2');
          var pathOptional = path.replace(OPTIONAL_PARAM_REGEXP, '$2');
          this.off(method, pathFull, constraints);
          this.off(method, pathOptional, constraints);
          return;
        }
        if (this.ignoreDuplicateSlashes) {
          path = removeDuplicateSlashes(path);
        }
        if (this.ignoreTrailingSlash) {
          path = trimLastSlash(path);
        }
        var methods = Array.isArray(method) ? method : [method];
        var _iterator3 = _createForOfIteratorHelper(methods),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _method2 = _step3.value;
            this._off(_method2, path, constraints);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      };
      Router.prototype._off = function _off(method, path, constraints) {
        // method validation
        assert(typeof method === 'string', 'Method should be a string');
        assert(httpMethods.includes(method), "Method '".concat(method, "' is not an http method."));
        function matcherWithoutConstraints(route) {
          return method !== route.method || path !== route.path;
        }
        function matcherWithConstraints(route) {
          return matcherWithoutConstraints(route) || !deepEqual(constraints, route.opts.constraints || {});
        }
        var predicate = constraints ? matcherWithConstraints : matcherWithoutConstraints;

        // Rebuild tree without the specific route
        var newRoutes = this.routes.filter(predicate);
        this._rebuild(newRoutes);
      };
      Router.prototype.lookup = function lookup(req, res, ctx, done) {
        var _this = this;
        if (typeof ctx === 'function') {
          done = ctx;
          ctx = undefined;
        }
        if (done === undefined) {
          var constraints = this.constrainer.deriveConstraints(req, ctx);
          var handle = this.find(req.method, req.url, constraints);
          return this.callHandler(handle, req, res, ctx);
        }
        this.constrainer.deriveConstraints(req, ctx, function (err, constraints) {
          if (err !== null) {
            done(err);
            return;
          }
          try {
            var _handle = _this.find(req.method, req.url, constraints);
            var result = _this.callHandler(_handle, req, res, ctx);
            done(null, result);
          } catch (err) {
            done(err);
          }
        });
      };
      Router.prototype.callHandler = function callHandler(handle, req, res, ctx) {
        if (handle === null) return this._defaultRoute(req, res, ctx);
        return ctx === undefined ? handle.handler(req, res, handle.params, handle.store, handle.searchParams) : handle.handler.call(ctx, req, res, handle.params, handle.store, handle.searchParams);
      };
      Router.prototype.find = function find(method, path, derivedConstraints) {
        var currentNode = this.trees[method];
        if (currentNode === undefined) return null;
        if (path.charCodeAt(0) !== 47) {
          // 47 is '/'
          path = path.replace(FULL_PATH_REGEXP, '/');
        }

        // This must be run before sanitizeUrl as the resulting function
        // .sliceParameter must be constructed with same URL string used
        // throughout the rest of this function.
        if (this.ignoreDuplicateSlashes) {
          path = removeDuplicateSlashes(path);
        }
        var sanitizedUrl;
        var querystring;
        var shouldDecodeParam;
        try {
          sanitizedUrl = safeDecodeURI(path);
          path = sanitizedUrl.path;
          querystring = sanitizedUrl.querystring;
          shouldDecodeParam = sanitizedUrl.shouldDecodeParam;
        } catch (error) {
          return this._onBadUrl(path);
        }
        if (this.ignoreTrailingSlash) {
          path = trimLastSlash(path);
        }
        var originPath = path;
        if (this.caseSensitive === false) {
          path = path.toLowerCase();
        }
        var maxParamLength = this.maxParamLength;
        var pathIndex = currentNode.prefix.length;
        var params = [];
        var pathLen = path.length;
        var brothersNodesStack = [];
        while (true) {
          if (pathIndex === pathLen && currentNode.isLeafNode) {
            var handle = currentNode.handlerStorage.getMatchingHandler(derivedConstraints);
            if (handle !== null) {
              return {
                handler: handle.handler,
                store: handle.store,
                params: handle._createParamsObject(params),
                searchParams: this.querystringParser(querystring)
              };
            }
          }
          var node = currentNode.getNextNode(path, pathIndex, brothersNodesStack, params.length);
          if (node === null) {
            if (brothersNodesStack.length === 0) {
              return null;
            }
            var brotherNodeState = brothersNodesStack.pop();
            pathIndex = brotherNodeState.brotherPathIndex;
            params.splice(brotherNodeState.paramsCount);
            node = brotherNodeState.brotherNode;
          }
          currentNode = node;

          // static route
          if (currentNode.kind === NODE_TYPES.STATIC) {
            pathIndex += currentNode.prefix.length;
            continue;
          }
          if (currentNode.kind === NODE_TYPES.WILDCARD) {
            var param = originPath.slice(pathIndex);
            if (shouldDecodeParam) {
              param = safeDecodeURIComponent(param);
            }
            params.push(param);
            pathIndex = pathLen;
            continue;
          }
          if (currentNode.kind === NODE_TYPES.PARAMETRIC) {
            var paramEndIndex = originPath.indexOf('/', pathIndex);
            if (paramEndIndex === -1) {
              paramEndIndex = pathLen;
            }
            var _param = originPath.slice(pathIndex, paramEndIndex);
            if (shouldDecodeParam) {
              _param = safeDecodeURIComponent(_param);
            }
            if (currentNode.isRegex) {
              var matchedParameters = currentNode.regex.exec(_param);
              if (matchedParameters === null) continue;
              for (var _i2 = 1; _i2 < matchedParameters.length; _i2++) {
                var matchedParam = matchedParameters[_i2];
                if (matchedParam.length > maxParamLength) {
                  return null;
                }
                params.push(matchedParam);
              }
            } else {
              if (_param.length > maxParamLength) {
                return null;
              }
              params.push(_param);
            }
            pathIndex = paramEndIndex;
          }
        }
      };
      Router.prototype._rebuild = function (routes) {
        this.reset();
        var _iterator4 = _createForOfIteratorHelper(routes),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var route = _step4.value;
            var method = route.method,
              path = route.path,
              opts = route.opts,
              handler = route.handler,
              store = route.store;
            this._on(method, path, opts, handler, store);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      };
      Router.prototype._defaultRoute = function (req, res, ctx) {
        if (this.defaultRoute !== null) {
          return ctx === undefined ? this.defaultRoute(req, res) : this.defaultRoute.call(ctx, req, res);
        } else {
          res.statusCode = 404;
          res.end();
        }
      };
      Router.prototype._onBadUrl = function (path) {
        if (this.onBadUrl === null) {
          return null;
        }
        var onBadUrl = this.onBadUrl;
        return {
          handler: function handler(req, res, ctx) {
            return onBadUrl(path, req, res);
          },
          params: {},
          store: null
        };
      };
      Router.prototype.prettyPrint = function () {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var method = options.method;
        options.buildPrettyMeta = this.buildPrettyMeta.bind(this);
        var tree = null;
        if (method === undefined) {
          var _this$constrainer$str = this.constrainer.strategies,
            version = _this$constrainer$str.version,
            host = _this$constrainer$str.host,
            constraints = _objectWithoutProperties(_this$constrainer$str, _excluded);
          constraints[httpMethodStrategy.name] = httpMethodStrategy;
          var mergedRouter = new Router(_objectSpread(_objectSpread({}, this._opts), {}, {
            constraints: constraints
          }));
          var mergedRoutes = this.routes.map(function (route) {
            var constraints = _objectSpread(_objectSpread({}, route.opts.constraints), {}, _defineProperty({}, httpMethodStrategy.name, route.method));
            return _objectSpread(_objectSpread({}, route), {}, {
              method: 'MERGED',
              opts: {
                constraints: constraints
              }
            });
          });
          mergedRouter._rebuild(mergedRoutes);
          tree = mergedRouter.trees.MERGED;
        } else {
          tree = this.trees[method];
        }
        if (tree == null) return '(empty tree)';
        return prettyPrintTree(tree, options);
      };
      var _loop = function _loop() {
        /* eslint no-prototype-builtins: "off" */
        if (!httpMethods.hasOwnProperty(i)) return "continue";
        var m = httpMethods[i];
        var methodName = m.toLowerCase();
        if (Router.prototype[methodName]) throw new Error('Method already exists: ' + methodName);
        Router.prototype[methodName] = function (path, handler, store) {
          return this.on(m, path, handler, store);
        };
      };
      for (var i in httpMethods) {
        var _ret = _loop();
        if (_ret === "continue") continue;
      }
      Router.prototype.all = function (path, handler, store) {
        this.on(httpMethods, path, handler, store);
      };
      module.exports = Router;
      function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      }
      function removeDuplicateSlashes(path) {
        return path.replace(/\/\/+/g, '/');
      }
      function trimLastSlash(path) {
        if (path.length > 1 && path.charCodeAt(path.length - 1) === 47) {
          return path.slice(0, -1);
        }
        return path;
      }
      function trimRegExpStartAndEnd(regexString) {
        // removes chars that marks start "^" and end "$" of regexp
        if (regexString.charCodeAt(1) === 94) {
          regexString = regexString.slice(0, 1) + regexString.slice(2);
        }
        if (regexString.charCodeAt(regexString.length - 2) === 36) {
          regexString = regexString.slice(0, regexString.length - 2) + regexString.slice(regexString.length - 1);
        }
        return regexString;
      }
      function getClosingParenthensePosition(path, idx) {
        // `path.indexOf()` will always return the first position of the closing parenthese,
        // but it's inefficient for grouped or wrong regexp expressions.
        // see issues #62 and #63 for more info

        var parentheses = 1;
        while (idx < path.length) {
          idx++;

          // ignore skipped chars
          if (path[idx] === '\\') {
            idx++;
            continue;
          }
          if (path[idx] === ')') {
            parentheses--;
          } else if (path[idx] === '(') {
            parentheses++;
          }
          if (!parentheses) return idx;
        }
        throw new TypeError('Invalid regexp expression in "' + path + '"');
      }
      function defaultBuildPrettyMeta(route) {
        // buildPrettyMeta function must return an object, which will be parsed into key/value pairs for display
        if (!route) return {};
        if (!route.store) return {};
        return Object.assign({}, route.store);
      }
    }, {
      "./lib/constrainer": 14,
      "./lib/http-methods": 16,
      "./lib/node": 17,
      "./lib/pretty-print": 18,
      "./lib/strategies/http-method": 21,
      "./lib/url-sanitizer": 22,
      "assert": 1,
      "fast-deep-equal": 8,
      "fast-querystring": 9,
      "safe-regex2": 25
    }],
    14: [function (require, module, exports) {
      'use strict';

      var acceptVersionStrategy = require('./strategies/accept-version');
      var acceptHostStrategy = require('./strategies/accept-host');
      var assert = require('assert');
      var Constrainer = /*#__PURE__*/function () {
        function Constrainer(customStrategies) {
          _classCallCheck(this, Constrainer);
          this.strategies = {
            version: acceptVersionStrategy,
            host: acceptHostStrategy
          };
          this.strategiesInUse = new Set();
          this.asyncStrategiesInUse = new Set();

          // validate and optimize prototypes of given custom strategies
          if (customStrategies) {
            for (var _i3 = 0, _Object$values = Object.values(customStrategies); _i3 < _Object$values.length; _i3++) {
              var strategy = _Object$values[_i3];
              this.addConstraintStrategy(strategy);
            }
          }
        }
        _createClass(Constrainer, [{
          key: "isStrategyUsed",
          value: function isStrategyUsed(strategyName) {
            return this.strategiesInUse.has(strategyName) || this.asyncStrategiesInUse.has(strategyName);
          }
        }, {
          key: "hasConstraintStrategy",
          value: function hasConstraintStrategy(strategyName) {
            var customConstraintStrategy = this.strategies[strategyName];
            if (customConstraintStrategy !== undefined) {
              return customConstraintStrategy.isCustom || this.isStrategyUsed(strategyName);
            }
            return false;
          }
        }, {
          key: "addConstraintStrategy",
          value: function addConstraintStrategy(strategy) {
            assert(typeof strategy.name === 'string' && strategy.name !== '', 'strategy.name is required.');
            assert(strategy.storage && typeof strategy.storage === 'function', 'strategy.storage function is required.');
            assert(strategy.deriveConstraint && typeof strategy.deriveConstraint === 'function', 'strategy.deriveConstraint function is required.');
            if (this.strategies[strategy.name] && this.strategies[strategy.name].isCustom) {
              throw new Error("There already exists a custom constraint with the name ".concat(strategy.name, "."));
            }
            if (this.isStrategyUsed(strategy.name)) {
              throw new Error("There already exists a route with ".concat(strategy.name, " constraint."));
            }
            strategy.isCustom = true;
            strategy.isAsync = strategy.deriveConstraint.length === 3;
            this.strategies[strategy.name] = strategy;
            if (strategy.mustMatchWhenDerived) {
              this.noteUsage(_defineProperty({}, strategy.name, strategy));
            }
          }
        }, {
          key: "deriveConstraints",
          value: function deriveConstraints(req, ctx, done) {
            var constraints = this.deriveSyncConstraints(req, ctx);
            if (done === undefined) {
              return constraints;
            }
            this.deriveAsyncConstraints(constraints, req, ctx, done);
          }
        }, {
          key: "deriveSyncConstraints",
          value: function deriveSyncConstraints(req, ctx) {
            return undefined;
          }

          // When new constraints start getting used, we need to rebuild the deriver to derive them. Do so if we see novel constraints used.
        }, {
          key: "noteUsage",
          value: function noteUsage(constraints) {
            if (constraints) {
              var beforeSize = this.strategiesInUse.size;
              for (var key in constraints) {
                var strategy = this.strategies[key];
                if (strategy.isAsync) {
                  this.asyncStrategiesInUse.add(key);
                } else {
                  this.strategiesInUse.add(key);
                }
              }
              if (beforeSize !== this.strategiesInUse.size) {
                this._buildDeriveConstraints();
              }
            }
          }
        }, {
          key: "newStoreForConstraint",
          value: function newStoreForConstraint(constraint) {
            if (!this.strategies[constraint]) {
              throw new Error("No strategy registered for constraint key ".concat(constraint));
            }
            return this.strategies[constraint].storage();
          }
        }, {
          key: "validateConstraints",
          value: function validateConstraints(constraints) {
            for (var key in constraints) {
              var value = constraints[key];
              if (typeof value === 'undefined') {
                throw new Error('Can\'t pass an undefined constraint value, must pass null or no key at all');
              }
              var strategy = this.strategies[key];
              if (!strategy) {
                throw new Error("No strategy registered for constraint key ".concat(key));
              }
              if (strategy.validate) {
                strategy.validate(value);
              }
            }
          }
        }, {
          key: "deriveAsyncConstraints",
          value: function deriveAsyncConstraints(constraints, req, ctx, done) {
            var _this2 = this;
            var asyncConstraintsCount = this.asyncStrategiesInUse.size;
            if (asyncConstraintsCount === 0) {
              done(null, constraints);
              return;
            }
            constraints = constraints || {};
            var _iterator5 = _createForOfIteratorHelper(this.asyncStrategiesInUse),
              _step5;
            try {
              var _loop2 = function _loop2() {
                var key = _step5.value;
                var strategy = _this2.strategies[key];
                strategy.deriveConstraint(req, ctx, function (err, constraintValue) {
                  if (err !== null) {
                    done(err);
                    return;
                  }
                  constraints[key] = constraintValue;
                  if (--asyncConstraintsCount === 0) {
                    done(null, constraints);
                  }
                });
              };
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                _loop2();
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }

          // Optimization: build a fast function for deriving the constraints for all the strategies at once. We inline the definitions of the version constraint and the host constraint for performance.
          // If no constraining strategies are in use (no routes constrain on host, or version, or any custom strategies) then we don't need to derive constraints for each route match, so don't do anything special, and just return undefined
          // This allows us to not allocate an object to hold constraint values if no constraints are defined.
        }, {
          key: "_buildDeriveConstraints",
          value: function _buildDeriveConstraints() {
            if (this.strategiesInUse.size === 0) return;
            var lines = ['return {'];
            var _iterator6 = _createForOfIteratorHelper(this.strategiesInUse),
              _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var key = _step6.value;
                var strategy = this.strategies[key];
                // Optimization: inline the derivation for the common built in constraints
                if (!strategy.isCustom) {
                  if (key === 'version') {
                    lines.push('   version: req.headers[\'accept-version\'],');
                  } else if (key === 'host') {
                    lines.push('   host: req.headers.host || req.headers[\':authority\'],');
                  } else {
                    throw new Error('unknown non-custom strategy for compiling constraint derivation function');
                  }
                } else {
                  lines.push("  ".concat(strategy.name, ": this.strategies.").concat(key, ".deriveConstraint(req, ctx),"));
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
            lines.push('}');
            this.deriveSyncConstraints = new Function('req', 'ctx', lines.join('\n')).bind(this); // eslint-disable-line
          }
        }]);
        return Constrainer;
      }();
      module.exports = Constrainer;
    }, {
      "./strategies/accept-host": 19,
      "./strategies/accept-version": 20,
      "assert": 1
    }],
    15: [function (require, module, exports) {
      'use strict';

      var httpMethodStrategy = require('./strategies/http-method');
      var HandlerStorage = /*#__PURE__*/function () {
        function HandlerStorage() {
          _classCallCheck(this, HandlerStorage);
          this.unconstrainedHandler = null; // optimized reference to the handler that will match most of the time
          this.constraints = [];
          this.handlers = []; // unoptimized list of handler objects for which the fast matcher function will be compiled
          this.constrainedHandlerStores = null;
        }

        // This is the hot path for node handler finding -- change with care!
        _createClass(HandlerStorage, [{
          key: "getMatchingHandler",
          value: function getMatchingHandler(derivedConstraints) {
            if (derivedConstraints === undefined) {
              return this.unconstrainedHandler;
            }
            return this._getHandlerMatchingConstraints(derivedConstraints);
          }
        }, {
          key: "addHandler",
          value: function addHandler(constrainer, route) {
            var params = route.params;
            var constraints = route.opts.constraints || {};
            var handlerObject = {
              params: params,
              constraints: constraints,
              handler: route.handler,
              store: route.store || null,
              _createParamsObject: this._compileCreateParamsObject(params)
            };
            var constraintsNames = Object.keys(constraints);
            if (constraintsNames.length === 0) {
              this.unconstrainedHandler = handlerObject;
            }
            for (var _i4 = 0, _constraintsNames = constraintsNames; _i4 < _constraintsNames.length; _i4++) {
              var constraint = _constraintsNames[_i4];
              if (!this.constraints.includes(constraint)) {
                if (constraint === 'version') {
                  // always check the version constraint first as it is the most selective
                  this.constraints.unshift(constraint);
                } else {
                  this.constraints.push(constraint);
                }
              }
            }
            var isMergedTree = constraintsNames.includes(httpMethodStrategy.name);
            if (!isMergedTree && this.handlers.length >= 32) {
              throw new Error('find-my-way supports a maximum of 32 route handlers per node when there are constraints, limit reached');
            }
            this.handlers.push(handlerObject);
            // Sort the most constrained handlers to the front of the list of handlers so they are tested first.
            this.handlers.sort(function (a, b) {
              return Object.keys(a.constraints).length - Object.keys(b.constraints).length;
            });
            if (!isMergedTree) {
              this._compileGetHandlerMatchingConstraints(constrainer, constraints);
            }
          }
        }, {
          key: "_compileCreateParamsObject",
          value: function _compileCreateParamsObject(params) {
            var lines = [];
            for (var i = 0; i < params.length; i++) {
              lines.push("'".concat(params[i], "': paramsArray[").concat(i, "]"));
            }
            return new Function('paramsArray', "return {".concat(lines.join(','), "}")); // eslint-disable-line
          }
        }, {
          key: "_getHandlerMatchingConstraints",
          value: function _getHandlerMatchingConstraints() {
            return null;
          }

          // Builds a store object that maps from constraint values to a bitmap of handler indexes which pass the constraint for a value
          // So for a host constraint, this might look like { "fastify.io": 0b0010, "google.ca": 0b0101 }, meaning the 3rd handler is constrainted to fastify.io, and the 2nd and 4th handlers are constrained to google.ca.
          // The store's implementation comes from the strategies provided to the Router.
        }, {
          key: "_buildConstraintStore",
          value: function _buildConstraintStore(store, constraint) {
            for (var i = 0; i < this.handlers.length; i++) {
              var handler = this.handlers[i];
              var constraintValue = handler.constraints[constraint];
              if (constraintValue !== undefined) {
                var indexes = store.get(constraintValue) || 0;
                indexes |= 1 << i; // set the i-th bit for the mask because this handler is constrained by this value https://stackoverflow.com/questions/1436438/how-do-you-set-clear-and-toggle-a-single-bit-in-javascrip
                store.set(constraintValue, indexes);
              }
            }
          }

          // Builds a bitmask for a given constraint that has a bit for each handler index that is 0 when that handler *is* constrained and 1 when the handler *isnt* constrainted. This is opposite to what might be obvious, but is just for convienience when doing the bitwise operations.
        }, {
          key: "_constrainedIndexBitmask",
          value: function _constrainedIndexBitmask(constraint) {
            var mask = 0;
            for (var i = 0; i < this.handlers.length; i++) {
              var handler = this.handlers[i];
              var constraintValue = handler.constraints[constraint];
              if (constraintValue !== undefined) {
                mask |= 1 << i;
              }
            }
            return ~mask;
          }

          // Compile a fast function to match the handlers for this node
          // The function implements a general case multi-constraint matching algorithm.
          // The general idea is this: we have a bunch of handlers, each with a potentially different set of constraints, and sometimes none at all. We're given a list of constraint values and we have to use the constraint-value-comparison strategies to see which handlers match the constraint values passed in.
          // We do this by asking each constraint store which handler indexes match the given constraint value for each store. Trickily, the handlers that a store says match are the handlers constrained by that store, but handlers that aren't constrained at all by that store could still match just fine. So, each constraint store can only describe matches for it, and it won't have any bearing on the handlers it doesn't care about. For this reason, we have to ask each stores which handlers match and track which have been matched (or not cared about) by all of them.
          // We use bitmaps to represent these lists of matches so we can use bitwise operations to implement this efficiently. Bitmaps are cheap to allocate, let us implement this masking behaviour in one CPU instruction, and are quite compact in memory. We start with a bitmap set to all 1s representing every handler that is a match candidate, and then for each constraint, see which handlers match using the store, and then mask the result by the mask of handlers that that store applies to, and bitwise AND with the candidate list. Phew.
          // We consider all this compiling function complexity to be worth it, because the naive implementation that just loops over the handlers asking which stores match is quite a bit slower.
        }, {
          key: "_compileGetHandlerMatchingConstraints",
          value: function _compileGetHandlerMatchingConstraints(constrainer) {
            this.constrainedHandlerStores = {};
            var _iterator7 = _createForOfIteratorHelper(this.constraints),
              _step7;
            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var _constraint = _step7.value;
                var store = constrainer.newStoreForConstraint(_constraint);
                this.constrainedHandlerStores[_constraint] = store;
                this._buildConstraintStore(store, _constraint);
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
            var lines = [];
            lines.push("\n    let candidates = ".concat((1 << this.handlers.length) - 1, "\n    let mask, matches\n    "));
            var _iterator8 = _createForOfIteratorHelper(this.constraints),
              _step8;
            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var _constraint2 = _step8.value;
                // Setup the mask for indexes this constraint applies to. The mask bits are set to 1 for each position if the constraint applies.
                lines.push("\n      mask = ".concat(this._constrainedIndexBitmask(_constraint2), "\n      value = derivedConstraints.").concat(_constraint2, "\n      "));

                // If there's no constraint value, none of the handlers constrained by this constraint can match. Remove them from the candidates.
                // If there is a constraint value, get the matching indexes bitmap from the store, and mask it down to only the indexes this constraint applies to, and then bitwise and with the candidates list to leave only matching candidates left.
                var _strategy = constrainer.strategies[_constraint2];
                var matchMask = _strategy.mustMatchWhenDerived ? 'matches' : '(matches | mask)';
                lines.push("\n      if (value === undefined) {\n        candidates &= mask\n      } else {\n        matches = this.constrainedHandlerStores.".concat(_constraint2, ".get(value) || 0\n        candidates &= ").concat(matchMask, "\n      }\n      if (candidates === 0) return null;\n      "));
              }

              // There are some constraints that can be derived and marked as "must match", where if they are derived, they only match routes that actually have a constraint on the value, like the SemVer version constraint.
              // An example: a request comes in for version 1.x, and this node has a handler that matches the path, but there's no version constraint. For SemVer, the find-my-way semantics do not match this handler to that request.
              // This function is used by Nodes with handlers to match when they don't have any constrained routes to exclude request that do have must match derived constraints present.
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
            for (var constraint in constrainer.strategies) {
              var strategy = constrainer.strategies[constraint];
              if (strategy.mustMatchWhenDerived && !this.constraints.includes(constraint)) {
                lines.push("if (derivedConstraints.".concat(constraint, " !== undefined) return null"));
              }
            }

            // Return the first handler who's bit is set in the candidates https://stackoverflow.com/questions/18134985/how-to-find-index-of-first-set-bit
            lines.push('return this.handlers[Math.floor(Math.log2(candidates))]');
            this._getHandlerMatchingConstraints = new Function('derivedConstraints', lines.join('\n')); // eslint-disable-line
          }
        }]);
        return HandlerStorage;
      }();
      module.exports = HandlerStorage;
    }, {
      "./strategies/http-method": 21
    }],
    16: [function (require, module, exports) {
      'use strict';

      // defined by Node.js http module, a snapshot from Node.js 18.12.0
      var httpMethods = ['ACL', 'BIND', 'CHECKOUT', 'CONNECT', 'COPY', 'DELETE', 'GET', 'HEAD', 'LINK', 'LOCK', 'M-SEARCH', 'MERGE', 'MKACTIVITY', 'MKCALENDAR', 'MKCOL', 'MOVE', 'NOTIFY', 'OPTIONS', 'PATCH', 'POST', 'PROPFIND', 'PROPPATCH', 'PURGE', 'PUT', 'REBIND', 'REPORT', 'SEARCH', 'SOURCE', 'SUBSCRIBE', 'TRACE', 'UNBIND', 'UNLINK', 'UNLOCK', 'UNSUBSCRIBE'];
      module.exports = httpMethods;
    }, {}],
    17: [function (require, module, exports) {
      'use strict';

      var HandlerStorage = require('./handler-storage');
      var NODE_TYPES = {
        STATIC: 0,
        PARAMETRIC: 1,
        WILDCARD: 2
      };
      var Node = /*#__PURE__*/function () {
        function Node() {
          _classCallCheck(this, Node);
          this.isLeafNode = false;
          this.routes = null;
          this.handlerStorage = null;
        }
        _createClass(Node, [{
          key: "addRoute",
          value: function addRoute(route, constrainer) {
            if (this.routes === null) {
              this.routes = [];
            }
            if (this.handlerStorage === null) {
              this.handlerStorage = new HandlerStorage();
            }
            this.isLeafNode = true;
            this.routes.push(route);
            this.handlerStorage.addHandler(constrainer, route);
          }
        }]);
        return Node;
      }();
      var ParentNode = /*#__PURE__*/function (_Node) {
        _inherits(ParentNode, _Node);
        var _super = _createSuper(ParentNode);
        function ParentNode() {
          var _this3;
          _classCallCheck(this, ParentNode);
          _this3 = _super.call(this);
          _this3.staticChildren = {};
          return _this3;
        }
        _createClass(ParentNode, [{
          key: "findStaticMatchingChild",
          value: function findStaticMatchingChild(path, pathIndex) {
            var staticChild = this.staticChildren[path.charAt(pathIndex)];
            if (staticChild === undefined || !staticChild.matchPrefix(path, pathIndex)) {
              return null;
            }
            return staticChild;
          }
        }, {
          key: "createStaticChild",
          value: function createStaticChild(path) {
            if (path.length === 0) {
              return this;
            }
            var staticChild = this.staticChildren[path.charAt(0)];
            if (staticChild) {
              var i = 1;
              for (; i < staticChild.prefix.length; i++) {
                if (path.charCodeAt(i) !== staticChild.prefix.charCodeAt(i)) {
                  staticChild = staticChild.split(this, i);
                  break;
                }
              }
              return staticChild.createStaticChild(path.slice(i));
            }
            var label = path.charAt(0);
            this.staticChildren[label] = new StaticNode(path);
            return this.staticChildren[label];
          }
        }]);
        return ParentNode;
      }(Node);
      var StaticNode = /*#__PURE__*/function (_ParentNode) {
        _inherits(StaticNode, _ParentNode);
        var _super2 = _createSuper(StaticNode);
        function StaticNode(prefix) {
          var _this4;
          _classCallCheck(this, StaticNode);
          _this4 = _super2.call(this);
          _this4.prefix = prefix;
          _this4.wildcardChild = null;
          _this4.parametricChildren = [];
          _this4.kind = NODE_TYPES.STATIC;
          _this4._compilePrefixMatch();
          return _this4;
        }
        _createClass(StaticNode, [{
          key: "createParametricChild",
          value: function createParametricChild(regex, staticSuffix, nodePath) {
            var regexpSource = regex && regex.source;
            var parametricChild = this.parametricChildren.find(function (child) {
              var childRegexSource = child.regex && child.regex.source;
              return childRegexSource === regexpSource;
            });
            if (parametricChild) {
              parametricChild.nodePaths.add(nodePath);
              return parametricChild;
            }
            parametricChild = new ParametricNode(regex, staticSuffix, nodePath);
            this.parametricChildren.push(parametricChild);
            this.parametricChildren.sort(function (child1, child2) {
              if (!child1.isRegex) return 1;
              if (!child2.isRegex) return -1;
              if (child1.staticSuffix === null) return 1;
              if (child2.staticSuffix === null) return -1;
              if (child2.staticSuffix.endsWith(child1.staticSuffix)) return 1;
              if (child1.staticSuffix.endsWith(child2.staticSuffix)) return -1;
              return 0;
            });
            return parametricChild;
          }
        }, {
          key: "createWildcardChild",
          value: function createWildcardChild() {
            if (this.wildcardChild) {
              return this.wildcardChild;
            }
            this.wildcardChild = new WildcardNode();
            return this.wildcardChild;
          }
        }, {
          key: "split",
          value: function split(parentNode, length) {
            var parentPrefix = this.prefix.slice(0, length);
            var childPrefix = this.prefix.slice(length);
            this.prefix = childPrefix;
            this._compilePrefixMatch();
            var staticNode = new StaticNode(parentPrefix);
            staticNode.staticChildren[childPrefix.charAt(0)] = this;
            parentNode.staticChildren[parentPrefix.charAt(0)] = staticNode;
            return staticNode;
          }
        }, {
          key: "getNextNode",
          value: function getNextNode(path, pathIndex, nodeStack, paramsCount) {
            var node = this.findStaticMatchingChild(path, pathIndex);
            var parametricBrotherNodeIndex = 0;
            if (node === null) {
              if (this.parametricChildren.length === 0) {
                return this.wildcardChild;
              }
              node = this.parametricChildren[0];
              parametricBrotherNodeIndex = 1;
            }
            if (this.wildcardChild !== null) {
              nodeStack.push({
                paramsCount: paramsCount,
                brotherPathIndex: pathIndex,
                brotherNode: this.wildcardChild
              });
            }
            for (var i = this.parametricChildren.length - 1; i >= parametricBrotherNodeIndex; i--) {
              nodeStack.push({
                paramsCount: paramsCount,
                brotherPathIndex: pathIndex,
                brotherNode: this.parametricChildren[i]
              });
            }
            return node;
          }
        }, {
          key: "_compilePrefixMatch",
          value: function _compilePrefixMatch() {
            if (this.prefix.length === 1) {
              this.matchPrefix = function () {
                return true;
              };
              return;
            }
            var lines = [];
            for (var i = 1; i < this.prefix.length; i++) {
              var charCode = this.prefix.charCodeAt(i);
              lines.push("path.charCodeAt(i + ".concat(i, ") === ").concat(charCode));
            }
            this.matchPrefix = new Function('path', 'i', "return ".concat(lines.join(' && '))); // eslint-disable-line
          }
        }]);
        return StaticNode;
      }(ParentNode);
      var ParametricNode = /*#__PURE__*/function (_ParentNode2) {
        _inherits(ParametricNode, _ParentNode2);
        var _super3 = _createSuper(ParametricNode);
        function ParametricNode(regex, staticSuffix, nodePath) {
          var _this5;
          _classCallCheck(this, ParametricNode);
          _this5 = _super3.call(this);
          _this5.isRegex = !!regex;
          _this5.regex = regex || null;
          _this5.staticSuffix = staticSuffix || null;
          _this5.kind = NODE_TYPES.PARAMETRIC;
          _this5.nodePaths = new Set([nodePath]);
          return _this5;
        }
        _createClass(ParametricNode, [{
          key: "getNextNode",
          value: function getNextNode(path, pathIndex) {
            return this.findStaticMatchingChild(path, pathIndex);
          }
        }]);
        return ParametricNode;
      }(ParentNode);
      var WildcardNode = /*#__PURE__*/function (_Node2) {
        _inherits(WildcardNode, _Node2);
        var _super4 = _createSuper(WildcardNode);
        function WildcardNode() {
          var _this6;
          _classCallCheck(this, WildcardNode);
          _this6 = _super4.call(this);
          _this6.kind = NODE_TYPES.WILDCARD;
          return _this6;
        }
        _createClass(WildcardNode, [{
          key: "getNextNode",
          value: function getNextNode() {
            return null;
          }
        }]);
        return WildcardNode;
      }(Node);
      module.exports = {
        StaticNode: StaticNode,
        ParametricNode: ParametricNode,
        WildcardNode: WildcardNode,
        NODE_TYPES: NODE_TYPES
      };
    }, {
      "./handler-storage": 15
    }],
    18: [function (require, module, exports) {
      'use strict';

      var deepEqual = require('fast-deep-equal');
      var httpMethodStrategy = require('./strategies/http-method');
      var treeDataSymbol = Symbol('treeData');
      function printObjectTree(obj) {
        var parentPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var tree = '';
        var keys = Object.keys(obj);
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          var value = obj[key];
          var isLast = i === keys.length - 1;
          var nodePrefix = isLast ? '└── ' : '├── ';
          var childPrefix = isLast ? '    ' : '│   ';
          var nodeData = value[treeDataSymbol] || '';
          var prefixedNodeData = nodeData.split('\n').join('\n' + parentPrefix + childPrefix);
          tree += parentPrefix + nodePrefix + key + prefixedNodeData + '\n';
          tree += printObjectTree(value, parentPrefix + childPrefix);
        }
        return tree;
      }
      function parseFunctionName(fn) {
        var fName = fn.name || '';
        fName = fName.replace('bound', '').trim();
        fName = (fName || 'anonymous') + '()';
        return fName;
      }
      function parseMeta(meta) {
        if (Array.isArray(meta)) return meta.map(function (m) {
          return parseMeta(m);
        });
        if (_typeof(meta) === 'symbol') return meta.toString();
        if (typeof meta === 'function') return parseFunctionName(meta);
        return meta;
      }
      function getRouteMetaData(route, options) {
        if (!options.includeMeta) return {};
        var metaDataObject = options.buildPrettyMeta(route);
        var filteredMetaData = {};
        var includeMetaKeys = options.includeMeta;
        if (!Array.isArray(includeMetaKeys)) {
          includeMetaKeys = Reflect.ownKeys(metaDataObject);
        }
        var _iterator9 = _createForOfIteratorHelper(includeMetaKeys),
          _step9;
        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var metaKey = _step9.value;
            if (!Object.prototype.hasOwnProperty.call(metaDataObject, metaKey)) continue;
            var serializedKey = metaKey.toString();
            var metaValue = metaDataObject[metaKey];
            if (metaValue !== undefined && metaValue !== null) {
              var serializedValue = JSON.stringify(parseMeta(metaValue));
              filteredMetaData[serializedKey] = serializedValue;
            }
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
        return filteredMetaData;
      }
      function serializeMetaData(metaData) {
        var serializedMetaData = '';
        for (var _i5 = 0, _Object$entries = Object.entries(metaData); _i5 < _Object$entries.length; _i5++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i5], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];
          serializedMetaData += "\n\u2022 (".concat(key, ") ").concat(value);
        }
        return serializedMetaData;
      }

      // get original merged tree node route
      function normalizeRoute(route) {
        var constraints = _objectSpread({}, route.opts.constraints);
        var method = constraints[httpMethodStrategy.name];
        delete constraints[httpMethodStrategy.name];
        return _objectSpread(_objectSpread({}, route), {}, {
          method: method,
          opts: {
            constraints: constraints
          }
        });
      }
      function serializeRoute(route) {
        var serializedRoute = " (".concat(route.method, ")");
        var constraints = route.opts.constraints || {};
        if (Object.keys(constraints).length !== 0) {
          serializedRoute += ' ' + JSON.stringify(constraints);
        }
        serializedRoute += serializeMetaData(route.metaData);
        return serializedRoute;
      }
      function mergeSimilarRoutes(routes) {
        return routes.reduce(function (mergedRoutes, route) {
          var _iterator10 = _createForOfIteratorHelper(mergedRoutes),
            _step10;
          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var nodeRoute = _step10.value;
              if (deepEqual(route.opts.constraints, nodeRoute.opts.constraints) && deepEqual(route.metaData, nodeRoute.metaData)) {
                nodeRoute.method += ', ' + route.method;
                return mergedRoutes;
              }
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }
          mergedRoutes.push(route);
          return mergedRoutes;
        }, []);
      }
      function serializeNode(node, prefix, options) {
        var routes = node.routes;
        if (options.method === undefined) {
          routes = routes.map(normalizeRoute);
        }
        routes = routes.map(function (route) {
          route.metaData = getRouteMetaData(route, options);
          return route;
        });
        if (options.method === undefined) {
          routes = mergeSimilarRoutes(routes);
        }
        return routes.map(serializeRoute).join("\n".concat(prefix));
      }
      function buildObjectTree(node, tree, prefix, options) {
        if (node.isLeafNode || options.commonPrefix !== false) {
          prefix = prefix || '(empty root node)';
          tree = tree[prefix] = {};
          if (node.isLeafNode) {
            tree[treeDataSymbol] = serializeNode(node, prefix, options);
          }
          prefix = '';
        }
        if (node.staticChildren) {
          for (var _i6 = 0, _Object$values2 = Object.values(node.staticChildren); _i6 < _Object$values2.length; _i6++) {
            var child = _Object$values2[_i6];
            buildObjectTree(child, tree, prefix + child.prefix, options);
          }
        }
        if (node.parametricChildren) {
          for (var _i7 = 0, _Object$values3 = Object.values(node.parametricChildren); _i7 < _Object$values3.length; _i7++) {
            var _child = _Object$values3[_i7];
            var childPrefix = Array.from(_child.nodePaths).join('|');
            buildObjectTree(_child, tree, prefix + childPrefix, options);
          }
        }
        if (node.wildcardChild) {
          buildObjectTree(node.wildcardChild, tree, '*', options);
        }
      }
      function prettyPrintTree(root, options) {
        var objectTree = {};
        buildObjectTree(root, objectTree, root.prefix, options);
        return printObjectTree(objectTree);
      }
      module.exports = {
        prettyPrintTree: prettyPrintTree
      };
    }, {
      "./strategies/http-method": 21,
      "fast-deep-equal": 8
    }],
    19: [function (require, module, exports) {
      'use strict';

      var assert = require('assert');
      function HostStorage() {
        var hosts = {};
        var regexHosts = [];
        return {
          get: function get(host) {
            var exact = hosts[host];
            if (exact) {
              return exact;
            }
            for (var _i8 = 0, _regexHosts = regexHosts; _i8 < _regexHosts.length; _i8++) {
              var regex = _regexHosts[_i8];
              if (regex.host.test(host)) {
                return regex.value;
              }
            }
          },
          set: function set(host, value) {
            if (host instanceof RegExp) {
              regexHosts.push({
                host: host,
                value: value
              });
            } else {
              hosts[host] = value;
            }
          }
        };
      }
      module.exports = {
        name: 'host',
        mustMatchWhenDerived: false,
        storage: HostStorage,
        validate: function validate(value) {
          assert(typeof value === 'string' || Object.prototype.toString.call(value) === '[object RegExp]', 'Host should be a string or a RegExp');
        }
      };
    }, {
      "assert": 1
    }],
    20: [function (require, module, exports) {
      'use strict';

      var assert = require('assert');
      function SemVerStore() {
        if (!(this instanceof SemVerStore)) {
          return new SemVerStore();
        }
        this.store = {};
        this.maxMajor = 0;
        this.maxMinors = {};
        this.maxPatches = {};
      }
      SemVerStore.prototype.set = function (version, store) {
        if (typeof version !== 'string') {
          throw new TypeError('Version should be a string');
        }
        var _version$split = version.split('.'),
          _version$split2 = _slicedToArray(_version$split, 3),
          major = _version$split2[0],
          minor = _version$split2[1],
          patch = _version$split2[2];
        major = Number(major) || 0;
        minor = Number(minor) || 0;
        patch = Number(patch) || 0;
        if (major >= this.maxMajor) {
          this.maxMajor = major;
          this.store.x = store;
          this.store['*'] = store;
          this.store['x.x'] = store;
          this.store['x.x.x'] = store;
        }
        if (minor >= (this.maxMinors[major] || 0)) {
          this.maxMinors[major] = minor;
          this.store["".concat(major, ".x")] = store;
          this.store["".concat(major, ".x.x")] = store;
        }
        if (patch >= (this.store["".concat(major, ".").concat(minor)] || 0)) {
          this.maxPatches["".concat(major, ".").concat(minor)] = patch;
          this.store["".concat(major, ".").concat(minor, ".x")] = store;
        }
        this.store["".concat(major, ".").concat(minor, ".").concat(patch)] = store;
        return this;
      };
      SemVerStore.prototype.get = function (version) {
        return this.store[version];
      };
      module.exports = {
        name: 'version',
        mustMatchWhenDerived: true,
        storage: SemVerStore,
        validate: function validate(value) {
          assert(typeof value === 'string', 'Version should be a string');
        }
      };
    }, {
      "assert": 1
    }],
    21: [function (require, module, exports) {
      'use strict';

      module.exports = {
        name: '__fmw_internal_strategy_merged_tree_http_method__',
        storage: function storage() {
          var handlers = {};
          return {
            get: function get(type) {
              return handlers[type] || null;
            },
            set: function set(type, store) {
              handlers[type] = store;
            }
          };
        },
        deriveConstraint: function deriveConstraint(req) {
          /* istanbul ignore next */
          return req.method;
        },
        mustMatchWhenDerived: true
      };
    }, {}],
    22: [function (require, module, exports) {
      'use strict';

      // It must spot all the chars where decodeURIComponent(x) !== decodeURI(x)
      // The chars are: # $ & + , / : ; = ? @
      function decodeComponentChar(highCharCode, lowCharCode) {
        if (highCharCode === 50) {
          if (lowCharCode === 53) return '%';
          if (lowCharCode === 51) return '#';
          if (lowCharCode === 52) return '$';
          if (lowCharCode === 54) return '&';
          if (lowCharCode === 66) return '+';
          if (lowCharCode === 98) return '+';
          if (lowCharCode === 67) return ',';
          if (lowCharCode === 99) return ',';
          if (lowCharCode === 70) return '/';
          if (lowCharCode === 102) return '/';
          return null;
        }
        if (highCharCode === 51) {
          if (lowCharCode === 65) return ':';
          if (lowCharCode === 97) return ':';
          if (lowCharCode === 66) return ';';
          if (lowCharCode === 98) return ';';
          if (lowCharCode === 68) return '=';
          if (lowCharCode === 100) return '=';
          if (lowCharCode === 70) return '?';
          if (lowCharCode === 102) return '?';
          return null;
        }
        if (highCharCode === 52 && lowCharCode === 48) {
          return '@';
        }
        return null;
      }
      function safeDecodeURI(path) {
        var shouldDecode = false;
        var shouldDecodeParam = false;
        var querystring = '';
        for (var i = 1; i < path.length; i++) {
          var charCode = path.charCodeAt(i);
          if (charCode === 37) {
            var highCharCode = path.charCodeAt(i + 1);
            var lowCharCode = path.charCodeAt(i + 2);
            if (decodeComponentChar(highCharCode, lowCharCode) === null) {
              shouldDecode = true;
            } else {
              shouldDecodeParam = true;
              // %25 - encoded % char. We need to encode one more time to prevent double decoding
              if (highCharCode === 50 && lowCharCode === 53) {
                shouldDecode = true;
                path = path.slice(0, i + 1) + '25' + path.slice(i + 1);
                i += 2;
              }
              i += 2;
            }
            // Some systems do not follow RFC and separate the path and query
            // string with a `;` character (code 59), e.g. `/foo;jsessionid=123456`.
            // Thus, we need to split on `;` as well as `?` and `#`.
          } else if (charCode === 63 || charCode === 59 || charCode === 35) {
            querystring = path.slice(i + 1);
            path = path.slice(0, i);
            break;
          }
        }
        var decodedPath = shouldDecode ? decodeURI(path) : path;
        return {
          path: decodedPath,
          querystring: querystring,
          shouldDecodeParam: shouldDecodeParam
        };
      }
      function safeDecodeURIComponent(uriComponent) {
        var startIndex = uriComponent.indexOf('%');
        if (startIndex === -1) return uriComponent;
        var decoded = '';
        var lastIndex = startIndex;
        for (var i = startIndex; i < uriComponent.length; i++) {
          if (uriComponent.charCodeAt(i) === 37) {
            var highCharCode = uriComponent.charCodeAt(i + 1);
            var lowCharCode = uriComponent.charCodeAt(i + 2);
            var decodedChar = decodeComponentChar(highCharCode, lowCharCode);
            decoded += uriComponent.slice(lastIndex, i) + decodedChar;
            lastIndex = i + 3;
          }
        }
        return uriComponent.slice(0, startIndex) + decoded + uriComponent.slice(lastIndex);
      }
      module.exports = {
        safeDecodeURI: safeDecodeURI,
        safeDecodeURIComponent: safeDecodeURIComponent
      };
    }, {}],
    23: [function (require, module, exports) {
      /*
      object-assign
      (c) Sindre Sorhus
      @license MIT
      */

      'use strict';

      /* eslint-disable no-unused-vars */
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var propIsEnumerable = Object.prototype.propertyIsEnumerable;
      function toObject(val) {
        if (val === null || val === undefined) {
          throw new TypeError('Object.assign cannot be called with null or undefined');
        }
        return Object(val);
      }
      function shouldUseNative() {
        try {
          if (!Object.assign) {
            return false;
          }

          // Detect buggy property enumeration order in older V8 versions.

          // https://bugs.chromium.org/p/v8/issues/detail?id=4118
          var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
          test1[5] = 'de';
          if (Object.getOwnPropertyNames(test1)[0] === '5') {
            return false;
          }

          // https://bugs.chromium.org/p/v8/issues/detail?id=3056
          var test2 = {};
          for (var i = 0; i < 10; i++) {
            test2['_' + String.fromCharCode(i)] = i;
          }
          var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
            return test2[n];
          });
          if (order2.join('') !== '0123456789') {
            return false;
          }

          // https://bugs.chromium.org/p/v8/issues/detail?id=3056
          var test3 = {};
          'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
            test3[letter] = letter;
          });
          if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
            return false;
          }
          return true;
        } catch (err) {
          // We don't expect any of the above to throw, but better to be safe.
          return false;
        }
      }
      module.exports = shouldUseNative() ? Object.assign : function (target, source) {
        var from;
        var to = toObject(target);
        var symbols;
        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);
          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key];
            }
          }
          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
              }
            }
          }
        }
        return to;
      };
    }, {}],
    24: [function (require, module, exports) {
      // shim for using process in browser
      var process = module.exports = {};

      // cached from whatever global is present so that test runners that stub it
      // don't break things.  But we need to wrap it in a try catch in case it is
      // wrapped in strict mode code which doesn't define any globals.  It's inside a
      // function because try/catches deoptimize in certain engines.

      var cachedSetTimeout;
      var cachedClearTimeout;
      function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
      }
      function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
      }
      (function () {
        try {
          if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }
        try {
          if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;
      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
        draining = false;
        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }
        if (queue.length) {
          drainQueue();
        }
      }
      function drainQueue() {
        if (draining) {
          return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;
        var len = queue.length;
        while (len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }
          queueIndex = -1;
          len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }
      process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };

      // v8 likes predictible objects
      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      Item.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      process.title = 'browser';
      process.browser = true;
      process.env = {};
      process.argv = [];
      process.version = ''; // empty string to avoid regexp issues
      process.versions = {};
      function noop() {}
      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.prependListener = noop;
      process.prependOnceListener = noop;
      process.listeners = function (name) {
        return [];
      };
      process.binding = function (name) {
        throw new Error('process.binding is not supported');
      };
      process.cwd = function () {
        return '/';
      };
      process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
      };
      process.umask = function () {
        return 0;
      };
    }, {}],
    25: [function (require, module, exports) {
      'use strict';

      var parse = require('ret');
      var types = parse.types;
      module.exports = function (re, opts) {
        if (!opts) opts = {};
        var replimit = opts.limit === undefined ? 25 : opts.limit;
        if (isRegExp(re)) re = re.source;else if (typeof re !== 'string') re = String(re);
        try {
          re = parse(re);
        } catch (err) {
          return false;
        }
        var reps = 0;
        return function walk(node, starHeight) {
          var i;
          var ok;
          var len;
          if (node.type === types.REPETITION) {
            starHeight++;
            reps++;
            if (starHeight > 1) return false;
            if (reps > replimit) return false;
          }
          if (node.options) {
            for (i = 0, len = node.options.length; i < len; i++) {
              ok = walk({
                stack: node.options[i]
              }, starHeight);
              if (!ok) return false;
            }
          }
          var stack = node.stack || node.value && node.value.stack;
          if (!stack) return true;
          for (i = 0; i < stack.length; i++) {
            ok = walk(stack[i], starHeight);
            if (!ok) return false;
          }
          return true;
        }(re, 0);
      };
      function isRegExp(x) {
        return {}.toString.call(x) === '[object RegExp]';
      }
    }, {
      "ret": 26
    }],
    26: [function (require, module, exports) {
      var util = require('./util');
      var types = require('./types');
      var sets = require('./sets');
      var positions = require('./positions');
      module.exports = function (regexpStr) {
        var i = 0,
          l,
          c,
          start = {
            type: types.ROOT,
            stack: []
          },
          // Keep track of last clause/group and stack.
          lastGroup = start,
          last = start.stack,
          groupStack = [];
        var repeatErr = function repeatErr(i) {
          util.error(regexpStr, "Nothing to repeat at column ".concat(i - 1));
        };

        // Decode a few escaped characters.
        var str = util.strToChars(regexpStr);
        l = str.length;

        // Iterate through each character in string.
        while (i < l) {
          c = str[i++];
          switch (c) {
            // Handle escaped characters, inclues a few sets.
            case '\\':
              c = str[i++];
              switch (c) {
                case 'b':
                  last.push(positions.wordBoundary());
                  break;
                case 'B':
                  last.push(positions.nonWordBoundary());
                  break;
                case 'w':
                  last.push(sets.words());
                  break;
                case 'W':
                  last.push(sets.notWords());
                  break;
                case 'd':
                  last.push(sets.ints());
                  break;
                case 'D':
                  last.push(sets.notInts());
                  break;
                case 's':
                  last.push(sets.whitespace());
                  break;
                case 'S':
                  last.push(sets.notWhitespace());
                  break;
                default:
                  // Check if c is integer.
                  // In which case it's a reference.
                  if (/\d/.test(c)) {
                    last.push({
                      type: types.REFERENCE,
                      value: parseInt(c, 10)
                    });

                    // Escaped character.
                  } else {
                    last.push({
                      type: types.CHAR,
                      value: c.charCodeAt(0)
                    });
                  }
              }
              break;

            // Positionals.
            case '^':
              last.push(positions.begin());
              break;
            case '$':
              last.push(positions.end());
              break;

            // Handle custom sets.
            case '[':
              // Check if this class is 'anti' i.e. [^abc].
              var not;
              if (str[i] === '^') {
                not = true;
                i++;
              } else {
                not = false;
              }

              // Get all the characters in class.
              var classTokens = util.tokenizeClass(str.slice(i), regexpStr);

              // Increase index by length of class.
              i += classTokens[1];
              last.push({
                type: types.SET,
                set: classTokens[0],
                not: not
              });
              break;

            // Class of any character except \n.
            case '.':
              last.push(sets.anyChar());
              break;

            // Push group onto stack.
            case '(':
              // Create group.
              var group = {
                type: types.GROUP,
                stack: [],
                remember: true
              };
              c = str[i];

              // If if this is a special kind of group.
              if (c === '?') {
                c = str[i + 1];
                i += 2;

                // Match if followed by.
                if (c === '=') {
                  group.followedBy = true;

                  // Match if not followed by.
                } else if (c === '!') {
                  group.notFollowedBy = true;
                } else if (c !== ':') {
                  util.error(regexpStr, "Invalid group, character '".concat(c, "'") + " after '?' at column ".concat(i - 1));
                }
                group.remember = false;
              }

              // Insert subgroup into current group stack.
              last.push(group);

              // Remember the current group for when the group closes.
              groupStack.push(lastGroup);

              // Make this new group the current group.
              lastGroup = group;
              last = group.stack;
              break;

            // Pop group out of stack.
            case ')':
              if (groupStack.length === 0) {
                util.error(regexpStr, "Unmatched ) at column ".concat(i - 1));
              }
              lastGroup = groupStack.pop();

              // Check if this group has a PIPE.
              // To get back the correct last stack.
              last = lastGroup.options ? lastGroup.options[lastGroup.options.length - 1] : lastGroup.stack;
              break;

            // Use pipe character to give more choices.
            case '|':
              // Create array where options are if this is the first PIPE
              // in this clause.
              if (!lastGroup.options) {
                lastGroup.options = [lastGroup.stack];
                delete lastGroup.stack;
              }

              // Create a new stack and add to options for rest of clause.
              var stack = [];
              lastGroup.options.push(stack);
              last = stack;
              break;

            // Repetition.
            // For every repetition, remove last element from last stack
            // then insert back a RANGE object.
            // This design is chosen because there could be more than
            // one repetition symbols in a regex i.e. `a?+{2,3}`.
            case '{':
              var rs = /^(\d+)(,(\d+)?)?\}/.exec(str.slice(i)),
                min,
                max;
              if (rs !== null) {
                if (last.length === 0) {
                  repeatErr(i);
                }
                min = parseInt(rs[1], 10);
                max = rs[2] ? rs[3] ? parseInt(rs[3], 10) : Infinity : min;
                i += rs[0].length;
                last.push({
                  type: types.REPETITION,
                  min: min,
                  max: max,
                  value: last.pop()
                });
              } else {
                last.push({
                  type: types.CHAR,
                  value: 123
                });
              }
              break;
            case '?':
              if (last.length === 0) {
                repeatErr(i);
              }
              last.push({
                type: types.REPETITION,
                min: 0,
                max: 1,
                value: last.pop()
              });
              break;
            case '+':
              if (last.length === 0) {
                repeatErr(i);
              }
              last.push({
                type: types.REPETITION,
                min: 1,
                max: Infinity,
                value: last.pop()
              });
              break;
            case '*':
              if (last.length === 0) {
                repeatErr(i);
              }
              last.push({
                type: types.REPETITION,
                min: 0,
                max: Infinity,
                value: last.pop()
              });
              break;

            // Default is a character that is not `\[](){}?+*^$`.
            default:
              last.push({
                type: types.CHAR,
                value: c.charCodeAt(0)
              });
          }
        }

        // Check if any groups have not been closed.
        if (groupStack.length !== 0) {
          util.error(regexpStr, 'Unterminated group');
        }
        return start;
      };
      module.exports.types = types;
    }, {
      "./positions": 27,
      "./sets": 28,
      "./types": 29,
      "./util": 30
    }],
    27: [function (require, module, exports) {
      var types = require('./types');
      exports.wordBoundary = function () {
        return {
          type: types.POSITION,
          value: 'b'
        };
      };
      exports.nonWordBoundary = function () {
        return {
          type: types.POSITION,
          value: 'B'
        };
      };
      exports.begin = function () {
        return {
          type: types.POSITION,
          value: '^'
        };
      };
      exports.end = function () {
        return {
          type: types.POSITION,
          value: '$'
        };
      };
    }, {
      "./types": 29
    }],
    28: [function (require, module, exports) {
      var types = require('./types');
      var INTS = function INTS() {
        return [{
          type: types.RANGE,
          from: 48,
          to: 57
        }];
      };
      var WORDS = function WORDS() {
        return [{
          type: types.CHAR,
          value: 95
        }, {
          type: types.RANGE,
          from: 97,
          to: 122
        }, {
          type: types.RANGE,
          from: 65,
          to: 90
        }].concat(INTS());
      };
      var WHITESPACE = function WHITESPACE() {
        return [{
          type: types.CHAR,
          value: 9
        }, {
          type: types.CHAR,
          value: 10
        }, {
          type: types.CHAR,
          value: 11
        }, {
          type: types.CHAR,
          value: 12
        }, {
          type: types.CHAR,
          value: 13
        }, {
          type: types.CHAR,
          value: 32
        }, {
          type: types.CHAR,
          value: 160
        }, {
          type: types.CHAR,
          value: 5760
        }, {
          type: types.RANGE,
          from: 8192,
          to: 8202
        }, {
          type: types.CHAR,
          value: 8232
        }, {
          type: types.CHAR,
          value: 8233
        }, {
          type: types.CHAR,
          value: 8239
        }, {
          type: types.CHAR,
          value: 8287
        }, {
          type: types.CHAR,
          value: 12288
        }, {
          type: types.CHAR,
          value: 65279
        }];
      };
      var NOTANYCHAR = function NOTANYCHAR() {
        return [{
          type: types.CHAR,
          value: 10
        }, {
          type: types.CHAR,
          value: 13
        }, {
          type: types.CHAR,
          value: 8232
        }, {
          type: types.CHAR,
          value: 8233
        }];
      };

      // Predefined class objects.
      exports.words = function () {
        return {
          type: types.SET,
          set: WORDS(),
          not: false
        };
      };
      exports.notWords = function () {
        return {
          type: types.SET,
          set: WORDS(),
          not: true
        };
      };
      exports.ints = function () {
        return {
          type: types.SET,
          set: INTS(),
          not: false
        };
      };
      exports.notInts = function () {
        return {
          type: types.SET,
          set: INTS(),
          not: true
        };
      };
      exports.whitespace = function () {
        return {
          type: types.SET,
          set: WHITESPACE(),
          not: false
        };
      };
      exports.notWhitespace = function () {
        return {
          type: types.SET,
          set: WHITESPACE(),
          not: true
        };
      };
      exports.anyChar = function () {
        return {
          type: types.SET,
          set: NOTANYCHAR(),
          not: true
        };
      };
    }, {
      "./types": 29
    }],
    29: [function (require, module, exports) {
      module.exports = {
        ROOT: 0,
        GROUP: 1,
        POSITION: 2,
        SET: 3,
        RANGE: 4,
        REPETITION: 5,
        REFERENCE: 6,
        CHAR: 7
      };
    }, {}],
    30: [function (require, module, exports) {
      var types = require('./types');
      var sets = require('./sets');
      var CTRL = '@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^ ?';
      var SLSH = {
        '0': 0,
        't': 9,
        'n': 10,
        'v': 11,
        'f': 12,
        'r': 13
      };

      /**
       * Finds character representations in str and convert all to
       * their respective characters
       *
       * @param {String} str
       * @return {String}
       */
      exports.strToChars = function (str) {
        /* jshint maxlen: false */
        var chars_regex = /(\[\\b\])|(\\)?\\(?:u([A-F0-9]{4})|x([A-F0-9]{2})|(0?[0-7]{2})|c([@A-Z[\\\]^?])|([0tnvfr]))/g;
        str = str.replace(chars_regex, function (s, b, lbs, a16, b16, c8, dctrl, eslsh) {
          if (lbs) {
            return s;
          }
          var code = b ? 8 : a16 ? parseInt(a16, 16) : b16 ? parseInt(b16, 16) : c8 ? parseInt(c8, 8) : dctrl ? CTRL.indexOf(dctrl) : SLSH[eslsh];
          var c = String.fromCharCode(code);

          // Escape special regex characters.
          if (/[[\]{}^$.|?*+()]/.test(c)) {
            c = '\\' + c;
          }
          return c;
        });
        return str;
      };

      /**
       * turns class into tokens
       * reads str until it encounters a ] not preceeded by a \
       *
       * @param {String} str
       * @param {String} regexpStr
       * @return {Array.<Array.<Object>, Number>}
       */
      exports.tokenizeClass = function (str, regexpStr) {
        /* jshint maxlen: false */
        var tokens = [];
        var regexp = /\\(?:(w)|(d)|(s)|(W)|(D)|(S))|((?:(?:\\)(.)|([^\]\\]))-(?:\\)?([^\]]))|(\])|(?:\\)?([^])/g;
        var rs, c;
        while ((rs = regexp.exec(str)) != null) {
          if (rs[1]) {
            tokens.push(sets.words());
          } else if (rs[2]) {
            tokens.push(sets.ints());
          } else if (rs[3]) {
            tokens.push(sets.whitespace());
          } else if (rs[4]) {
            tokens.push(sets.notWords());
          } else if (rs[5]) {
            tokens.push(sets.notInts());
          } else if (rs[6]) {
            tokens.push(sets.notWhitespace());
          } else if (rs[7]) {
            tokens.push({
              type: types.RANGE,
              from: (rs[8] || rs[9]).charCodeAt(0),
              to: rs[10].charCodeAt(0)
            });
          } else if (c = rs[12]) {
            tokens.push({
              type: types.CHAR,
              value: c.charCodeAt(0)
            });
          } else {
            return [tokens, regexp.lastIndex];
          }
        }
        exports.error(regexpStr, 'Unterminated character class');
      };

      /**
       * Shortcut to throw errors.
       *
       * @param {String} regexp
       * @param {String} msg
       */
      exports.error = function (regexp, msg) {
        throw new SyntaxError('Invalid regular expression: /' + regexp + '/: ' + msg);
      };
    }, {
      "./sets": 28,
      "./types": 29
    }],
    31: [function (require, module, exports) {
      // Simple default configuration for application, when none is provided

      module.exports = {
        "Product": "Unnamed_Service",
        "ProductVersion": "0.0.1",
        "ServicePort": 8080
      };
    }, {}],
    32: [function (require, module, exports) {
      /**
      * Default Service Server
      */
      module.exports = require('./Orator-ServiceServer-IPC.js');
    }, {
      "./Orator-ServiceServer-IPC.js": 35
    }],
    33: [function (require, module, exports) {
      var libFableServiceProviderBase = require('fable-serviceproviderbase');
      var OratorServiceServerBase = /*#__PURE__*/function (_libFableServiceProvi) {
        _inherits(OratorServiceServerBase, _libFableServiceProvi);
        var _super5 = _createSuper(OratorServiceServerBase);
        function OratorServiceServerBase(pFable, pOptions, pServiceHash) {
          var _this7;
          _classCallCheck(this, OratorServiceServerBase);
          _this7 = _super5.call(this, pFable, pOptions, pServiceHash);
          _this7.serviceType = 'OratorServiceServer';
          _this7.ServiceServerType = 'Base';
          _this7.Name = _this7.fable.settings.Product;
          _this7.URL = 'BASE_SERVICE_SERVER';
          _this7.Port = _this7.options.ServicePort;
          _this7.Active = false;
          return _this7;
        }

        /*
         * Service Lifecycle Functions
         *************************************************************************/
        _createClass(OratorServiceServerBase, [{
          key: "listen",
          value: function listen(pPort, fCallback) {
            // Sometimes, listen does not listen on network calls.
            this.Active = true;
            return fCallback();
          }
        }, {
          key: "close",
          value: function close(fCallback) {
            this.Active = false;
            return fCallback();
          }
          /*************************************************************************
           * End of Service Lifecycle Functions
           */

          /*
           * Content parsing functions
           *************************************************************************/
        }, {
          key: "bodyParser",
          value: function bodyParser(pOptions) {
            return function (pRequest, pResponse, fNext) {
              fNext();
            };
          }
          /*************************************************************************
           * End of Service Lifecycle Functions
           */

          /*
           * Service Route Creation Functions
           *
           * These base functions provide basic validation for the routes, but don't actually 
           * do anything with them.  The design intent here is to allow derived classes to call
           * these functions to validate that they conform to expected standards.
           *
           * Something like:
          		get (pRoute, ...fRouteProcessingFunctions)
          	{
          		if (!super.get(pRoute, ...fRouteProcessingFunctions))
          		{
          			this.log.error(`Restify provider failed to map route [${pRoute}]!`);
          			return false;
          		}
          			//...now we can do our actual get mapping function!....
          	}
          	 * This pattern and calling super is totally optional, obviously.
           *************************************************************************/
        }, {
          key: "use",
          value: function use(fHandlerFunction) {
            if (typeof fHandlerFunction != 'function') {
              this.log.error("Orator USE global handler mapping failed -- parameter was expected to be a function with prototype function(Request, Response, Next) but type was ".concat(_typeof(fHandlerFunction), " instead of a string."));
              return false;
            }
            return true;
          }
        }, {
          key: "doGet",
          value: function doGet(pRoute) {
            return true;
          }
        }, {
          key: "get",
          value: function get(pRoute) {
            if (typeof pRoute != 'string') {
              this.log.error("Orator GET Route mapping failed -- route parameter was ".concat(_typeof(pRoute), " instead of a string."));
              return false;
            }
            for (var _len = arguments.length, fRouteProcessingFunctions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              fRouteProcessingFunctions[_key - 1] = arguments[_key];
            }
            return this.doGet.apply(this, [pRoute].concat(fRouteProcessingFunctions));
          }
        }, {
          key: "getWithBodyParser",
          value: function getWithBodyParser(pRoute) {
            for (var _len2 = arguments.length, fRouteProcessingFunctions = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              fRouteProcessingFunctions[_key2 - 1] = arguments[_key2];
            }
            return this.get.apply(this, [pRoute, this.bodyParser()].concat(fRouteProcessingFunctions));
          }
        }, {
          key: "doPut",
          value: function doPut(pRoute) {
            return true;
          }
        }, {
          key: "put",
          value: function put(pRoute) {
            if (typeof pRoute != 'string') {
              this.log.error("Orator PUT Route mapping failed -- route parameter was ".concat(_typeof(pRoute), " instead of a string."));
              return false;
            }
            for (var _len3 = arguments.length, fRouteProcessingFunctions = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
              fRouteProcessingFunctions[_key3 - 1] = arguments[_key3];
            }
            return this.doPut.apply(this, [pRoute].concat(fRouteProcessingFunctions));
          }
        }, {
          key: "putWithBodyParser",
          value: function putWithBodyParser(pRoute) {
            for (var _len4 = arguments.length, fRouteProcessingFunctions = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
              fRouteProcessingFunctions[_key4 - 1] = arguments[_key4];
            }
            return this.put.apply(this, [pRoute, this.bodyParser()].concat(fRouteProcessingFunctions));
          }
        }, {
          key: "doPost",
          value: function doPost(pRoute) {
            return true;
          }
        }, {
          key: "post",
          value: function post(pRoute) {
            if (typeof pRoute != 'string') {
              this.log.error("Orator POST Route mapping failed -- route parameter was ".concat(_typeof(pRoute), " instead of a string."));
              return false;
            }
            for (var _len5 = arguments.length, fRouteProcessingFunctions = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
              fRouteProcessingFunctions[_key5 - 1] = arguments[_key5];
            }
            return this.doPost.apply(this, [pRoute].concat(fRouteProcessingFunctions));
          }
        }, {
          key: "postWithBodyParser",
          value: function postWithBodyParser(pRoute) {
            for (var _len6 = arguments.length, fRouteProcessingFunctions = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
              fRouteProcessingFunctions[_key6 - 1] = arguments[_key6];
            }
            return this.post.apply(this, [pRoute, this.bodyParser()].concat(fRouteProcessingFunctions));
          }
        }, {
          key: "doDel",
          value: function doDel(pRoute) {
            return true;
          }
        }, {
          key: "del",
          value: function del(pRoute) {
            if (typeof pRoute != 'string') {
              this.log.error("Orator DEL Route mapping failed -- route parameter was ".concat(_typeof(pRoute), " instead of a string."));
              return false;
            }
            for (var _len7 = arguments.length, fRouteProcessingFunctions = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
              fRouteProcessingFunctions[_key7 - 1] = arguments[_key7];
            }
            return this.doDel.apply(this, [pRoute].concat(fRouteProcessingFunctions));
          }
        }, {
          key: "delWithBodyParser",
          value: function delWithBodyParser(pRoute) {
            for (var _len8 = arguments.length, fRouteProcessingFunctions = new Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
              fRouteProcessingFunctions[_key8 - 1] = arguments[_key8];
            }
            return this.del.apply(this, [pRoute, this.bodyParser()].concat(fRouteProcessingFunctions));
          }
        }, {
          key: "doPatch",
          value: function doPatch(pRoute) {
            return true;
          }
        }, {
          key: "patch",
          value: function patch(pRoute) {
            if (typeof pRoute != 'string') {
              this.log.error("Orator PATCH Route mapping failed -- route parameter was ".concat(_typeof(pRoute), " instead of a string."));
              return false;
            }
            for (var _len9 = arguments.length, fRouteProcessingFunctions = new Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
              fRouteProcessingFunctions[_key9 - 1] = arguments[_key9];
            }
            return this.doPatch.apply(this, [pRoute].concat(fRouteProcessingFunctions));
          }
        }, {
          key: "patchWithBodyParser",
          value: function patchWithBodyParser(pRoute) {
            for (var _len10 = arguments.length, fRouteProcessingFunctions = new Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
              fRouteProcessingFunctions[_key10 - 1] = arguments[_key10];
            }
            return this.patch.apply(this, [pRoute, this.bodyParser()].concat(fRouteProcessingFunctions));
          }
        }, {
          key: "doOpts",
          value: function doOpts(pRoute) {
            return true;
          }
        }, {
          key: "opts",
          value: function opts(pRoute) {
            if (typeof pRoute != 'string') {
              this.log.error("Orator OPTS Route mapping failed -- route parameter was ".concat(_typeof(pRoute), " instead of a string."));
              return false;
            }
            for (var _len11 = arguments.length, fRouteProcessingFunctions = new Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1; _key11 < _len11; _key11++) {
              fRouteProcessingFunctions[_key11 - 1] = arguments[_key11];
            }
            return this.doOpts.apply(this, [pRoute].concat(fRouteProcessingFunctions));
          }
        }, {
          key: "optsWithBodyParser",
          value: function optsWithBodyParser(pRoute) {
            for (var _len12 = arguments.length, fRouteProcessingFunctions = new Array(_len12 > 1 ? _len12 - 1 : 0), _key12 = 1; _key12 < _len12; _key12++) {
              fRouteProcessingFunctions[_key12 - 1] = arguments[_key12];
            }
            return this.opts.apply(this, [pRoute, this.bodyParser()].concat(fRouteProcessingFunctions));
          }
        }, {
          key: "doHead",
          value: function doHead(pRoute) {
            return true;
          }
        }, {
          key: "head",
          value: function head(pRoute) {
            if (typeof pRoute != 'string') {
              this.log.error("Orator HEAD Route mapping failed -- route parameter was ".concat(_typeof(pRoute), " instead of a string."));
              return false;
            }
            return true;
          }
        }, {
          key: "headWithBodyParser",
          value: function headWithBodyParser(pRoute) {
            for (var _len13 = arguments.length, fRouteProcessingFunctions = new Array(_len13 > 1 ? _len13 - 1 : 0), _key13 = 1; _key13 < _len13; _key13++) {
              fRouteProcessingFunctions[_key13 - 1] = arguments[_key13];
            }
            return this.head.apply(this, [pRoute, this.bodyParser()].concat(fRouteProcessingFunctions));
          }
          /*************************************************************************
           * End of Service Route Creation Functions
           */

          // Programmatically invoke a route
        }, {
          key: "invoke",
          value: function invoke(pMethod, pRoute, pData, fCallback) {
            // The base class version of this does nothing
            this.log.debug("Orator invoke called for route [".concat(pRoute, "] and landed on the base class; the service provider likely does not implement programmatic invoke capabilities."), pData);
            return false;
          }
        }]);
        return OratorServiceServerBase;
      }(libFableServiceProviderBase);
      module.exports = OratorServiceServerBase;
    }, {
      "fable-serviceproviderbase": 6
    }],
    34: [function (require, module, exports) {
      var OratorServiceServerIPCSynthesizedResponse = /*#__PURE__*/function () {
        function OratorServiceServerIPCSynthesizedResponse(pHandler, pLog, pRequestGUID) {
          _classCallCheck(this, OratorServiceServerIPCSynthesizedResponse);
          this.log = pLog;
          if (pHandler.hasOwnProperty('params')) {
            this.params = pHandler.params;
          } else {
            this.params = {};
          }
          if (pHandler.hasOwnProperty('searchParams')) {
            this.searchParams = pHandler.searchParams;
          } else {
            this.searchParams = {};
          }
          this.requestGUID = pRequestGUID;
          this.responseData = null;
          this.responseStatus = -1;
        }
        _createClass(OratorServiceServerIPCSynthesizedResponse, [{
          key: "send",
          value: function send(pData) {
            if (typeof pData == 'string') {
              // This is a string!  Append it to the responsedata.
              if (this.responseData === null) {
                this.responseData = pData;
                return true;
              } else if (typeof this.responseData == 'string') {
                this.responseData = this.responseData + pData;
                return true;
              } else {
                this.log("Request ".concat(this.requestGUID, " has tried to send() a string value after send()ing data type ").concat(_typeof(this.responseData), "."), pData);
                return false;
              }
            } else if (_typeof(pData) == 'object') {
              if (this.responseData === null) {
                this.responseData = JSON.stringify(pData);
                return true;
              } else if (typeof this.responseData == 'string') {
                // TODO: Discuss best way to handle this / if to handle this
                this.responseData += this.responseData + JSON.stringify(pData);
                return true;
              } else {
                this.log("Request ".concat(this.requestGUID, " has tried to send() an object value to be auto stringified after send()ing data type ").concat(_typeof(this.responseData), "."), pData);
                return false;
              }
            }
          }
        }]);
        return OratorServiceServerIPCSynthesizedResponse;
      }();
      module.exports = OratorServiceServerIPCSynthesizedResponse;
    }, {}],
    35: [function (require, module, exports) {
      var libOratorServiceServerBase = require('./Orator-ServiceServer-Base.js');

      // A synthesized response object, for simple IPC.
      var libOratorServiceServerIPCSynthesizedResponse = require('./Orator-ServiceServer-IPC-SynthesizedResponse.js');
      // A simple constrainer for the find-my-way router since we aren't using any kind of headers to pass version or host
      //const libOratorServiceServerIPCCustomConstrainer = require('./Orator-ServiceServer-IPC-RouterConstrainer.js');

      // This library is the default router for our services
      var libFindMyWay = require('find-my-way');
      var OratorServiceServerIPC = /*#__PURE__*/function (_libOratorServiceServ) {
        _inherits(OratorServiceServerIPC, _libOratorServiceServ);
        var _super6 = _createSuper(OratorServiceServerIPC);
        function OratorServiceServerIPC(pFable, pOptions, pServiceHash) {
          var _this8;
          _classCallCheck(this, OratorServiceServerIPC);
          _this8 = _super6.call(this, pFable, pOptions, pServiceHash);
          _this8.router = libFindMyWay(_this8.options);
          //this.router.addConstraintStrategy(libOratorServiceServerIPCCustomConstrainer);

          _this8.ServiceServerType = 'IPC';
          _this8.URL = 'IPC';
          _this8.Port = 0;
          _this8.preBehaviorFunctions = [];
          _this8.behaviorMap = {};
          _this8.postBehaviorFunctions = [];
          return _this8;
        }
        _createClass(OratorServiceServerIPC, [{
          key: "use",
          value: function use(fHandlerFunction) {
            return this.addPreBehaviorFunction(fHandlerFunction);
          }
        }, {
          key: "addPreBehaviorFunction",
          value: function addPreBehaviorFunction(fHandlerFunction) {
            if (!_get(_getPrototypeOf(OratorServiceServerIPC.prototype), "use", this).call(this, fHandlerFunction)) {
              this.log.error("IPC provider failed to map USE handler function!");
              return false;
            }
            this.preBehaviorFunctions.push(fHandlerFunction);
            return true;
          }
        }, {
          key: "executePreBehaviorFunctions",
          value: function executePreBehaviorFunctions(pRequest, pResponse, fNext) {
            var _this9 = this;
            var tmpAnticipate = this.fable.serviceManager.instantiateServiceProviderWithoutRegistration('Anticipate');
            var _loop3 = function _loop3() {
              var tmpPreBehaviorFunction = _this9.preBehaviorFunctions[i];
              tmpAnticipate.anticipate(function (fStageComplete) {
                return tmpPreBehaviorFunction(pRequest, pResponse, fStageComplete);
              });
            };
            for (var i = 0; i < this.preBehaviorFunctions.length; i++) {
              _loop3();
            }
            tmpAnticipate.wait(function (pError) {
              if (pError) {
                _this9.log.error("IPC Provider preBehaviorFunction ".concat(pFunctionIndex, " failed with error: ").concat(pError), pError);
              }
              return fNext(pError);
            });
          }
        }, {
          key: "addPostBehaviorFunction",
          value: function addPostBehaviorFunction(fHandlerFunction) {
            if (!_get(_getPrototypeOf(OratorServiceServerIPC.prototype), "use", this).call(this, fHandlerFunction)) {
              this.log.error("IPC provider failed to map USE handler function!");
              return false;
            }
            this.postBehaviorFunctions.push(fHandlerFunction);
            return true;
          }
        }, {
          key: "executePostBehaviorFunctions",
          value: function executePostBehaviorFunctions(pRequest, pResponse, fNext) {
            var _this10 = this;
            var tmpAnticipate = this.fable.serviceManager.instantiateServiceProviderWithoutRegistration('Anticipate');
            var _loop4 = function _loop4() {
              var tmpPostBehaviorFunction = _this10.postBehaviorFunctions[i];
              tmpAnticipate.anticipate(function (fStageComplete) {
                return tmpPostBehaviorFunction(pRequest, pResponse, fStageComplete);
              });
            };
            for (var i = 0; i < this.postBehaviorFunctions.length; i++) {
              _loop4();
            }
            tmpAnticipate.wait(function (pError) {
              if (pError) {
                _this10.log.error("IPC Provider postBehaviorFunction ".concat(pFunctionIndex, " failed with error: ").concat(pError), pError);
              }
              return fNext(pError);
            });
          }

          /*
           * Service Route Creation Functions
           *
           * These base functions provide basic validation for the routes, but don't actually 
           * do anything with them.  The design intent here is to allow derived classes to call
           * these functions to validate that they conform to expected standards.
           *
           * Something like:
          		get (pRoute, ...fRouteProcessingFunctions)
          	{
          		//...now we can do our actual get mapping function!....
          	}
          	 * This pattern and calling super is totally optional, obviously.
           *************************************************************************/
        }, {
          key: "addRouteProcessor",
          value: function addRouteProcessor(pMethod, pRoute, pRouteFunctionArray) {
            // We have a constrainer on IPC so we can control channels eventually, if we like.
            // For now it just makes sure it was added with an IPC service server.
            this.router.on(pMethod, pRoute, this.buildFindMyWayHandler(pRouteFunctionArray));
            return true;
          }
        }, {
          key: "buildFindMyWayHandler",
          value: function buildFindMyWayHandler(pRouteFunctionArray) {
            var _this11 = this;
            var tmpRouteFunctionArray = pRouteFunctionArray;
            return function (pRequest, pResponse, pData) {
              var tmpAnticipate = _this11.fable.serviceManager.instantiateServiceProviderWithoutRegistration('Anticipate');
              tmpAnticipate.anticipate(function (fNext) {
                return _this11.executePreBehaviorFunctions(pRequest, pResponse, fNext);
              });
              var _loop5 = function _loop5() {
                var tmpRouteFunction = tmpRouteFunctionArray[i];
                tmpAnticipate.anticipate(function (fNext) {
                  return tmpRouteFunction(pRequest, pResponse, fNext);
                });
              };
              for (var i = 0; i < tmpRouteFunctionArray.length; i++) {
                _loop5();
              }
              tmpAnticipate.anticipate(function (fStageComplete) {
                return _this11.executePostBehaviorFunctions(pRequest, pResponse, fStageComplete);
              });
              return new Promise(function (fResolve, fReject) {
                tmpAnticipate.wait(function (pBehaviorFunctionError) {
                  if (pBehaviorFunctionError) {
                    _this11.log.error("IPC Provider behavior function ".concat(pFunctionIndex, " failed with error: ").concat(pBehaviorFunctionError), pBehaviorFunctionError);
                    return fReject(pBehaviorFunctionError);
                  }
                  return fResolve();
                });
              });
            };
          }

          // This is the virtualized "body parser"
        }, {
          key: "bodyParser",
          value: function bodyParser() {
            return function (pRequest, pResponse, fNext) {
              return fNext();
            };
          }
        }, {
          key: "doGet",
          value: function doGet(pRoute) {
            for (var _len14 = arguments.length, fRouteProcessingFunctions = new Array(_len14 > 1 ? _len14 - 1 : 0), _key14 = 1; _key14 < _len14; _key14++) {
              fRouteProcessingFunctions[_key14 - 1] = arguments[_key14];
            }
            return this.addRouteProcessor('GET', pRoute, Array.from(fRouteProcessingFunctions));
          }
        }, {
          key: "doPut",
          value: function doPut(pRoute) {
            for (var _len15 = arguments.length, fRouteProcessingFunctions = new Array(_len15 > 1 ? _len15 - 1 : 0), _key15 = 1; _key15 < _len15; _key15++) {
              fRouteProcessingFunctions[_key15 - 1] = arguments[_key15];
            }
            return this.addRouteProcessor('PUT', pRoute, Array.from(fRouteProcessingFunctions));
          }
        }, {
          key: "doPost",
          value: function doPost(pRoute) {
            for (var _len16 = arguments.length, fRouteProcessingFunctions = new Array(_len16 > 1 ? _len16 - 1 : 0), _key16 = 1; _key16 < _len16; _key16++) {
              fRouteProcessingFunctions[_key16 - 1] = arguments[_key16];
            }
            return this.addRouteProcessor('POST', pRoute, Array.from(fRouteProcessingFunctions));
          }
        }, {
          key: "doDel",
          value: function doDel(pRoute) {
            for (var _len17 = arguments.length, fRouteProcessingFunctions = new Array(_len17 > 1 ? _len17 - 1 : 0), _key17 = 1; _key17 < _len17; _key17++) {
              fRouteProcessingFunctions[_key17 - 1] = arguments[_key17];
            }
            return this.addRouteProcessor('DELETE', pRoute, Array.from(fRouteProcessingFunctions));
          }
        }, {
          key: "doPatch",
          value: function doPatch(pRoute) {
            for (var _len18 = arguments.length, fRouteProcessingFunctions = new Array(_len18 > 1 ? _len18 - 1 : 0), _key18 = 1; _key18 < _len18; _key18++) {
              fRouteProcessingFunctions[_key18 - 1] = arguments[_key18];
            }
            return this.addRouteProcessor('PATCH', pRoute, Array.from(fRouteProcessingFunctions));
          }
        }, {
          key: "doOpts",
          value: function doOpts(pRoute) {
            for (var _len19 = arguments.length, fRouteProcessingFunctions = new Array(_len19 > 1 ? _len19 - 1 : 0), _key19 = 1; _key19 < _len19; _key19++) {
              fRouteProcessingFunctions[_key19 - 1] = arguments[_key19];
            }
            return this.addRouteProcessor('OPTIONS', pRoute, Array.from(fRouteProcessingFunctions));
          }
        }, {
          key: "doHead",
          value: function doHead(pRoute) {
            for (var _len20 = arguments.length, fRouteProcessingFunctions = new Array(_len20 > 1 ? _len20 - 1 : 0), _key20 = 1; _key20 < _len20; _key20++) {
              fRouteProcessingFunctions[_key20 - 1] = arguments[_key20];
            }
            return this.addRouteProcessor('HEAD', pRoute, Array.from(fRouteProcessingFunctions));
          }
          /*************************************************************************
           * End of Service Route Creation Functions
           */

          // Programmatically invoke a route
        }, {
          key: "invoke",
          value: function invoke(pMethod, pRoute, pData, fCallback) {
            var _this12 = this;
            // If the data is skipped and a callback is parameter 3, do the right thing
            var tmpCallback = typeof fCallback == 'function' ? fCallback : typeof pData == 'function' ? pData : false;
            if (!tmpCallback) {
              throw new Error("IPC Provider invoke() called without a callback function.");
            }

            // Create a bare minimum request object for IPC to pass to our router
            var tmpRequest = {
              method: pMethod,
              url: pRoute,
              guid: this.fable.getUUID()
            };

            // For now, dealing with no handler constraints.
            var tmpHandler = this.router.find(tmpRequest.method, tmpRequest.url);

            // Create a container for the IPC response data to be aggregated to from send() methodds
            var tmpSynthesizedResponseData = new libOratorServiceServerIPCSynthesizedResponse(tmpHandler, this.log, tmpRequest.guid);

            // Map parsed params back to the request object
            tmpRequest.params = tmpSynthesizedResponseData.params;
            tmpRequest.searchParams = tmpSynthesizedResponseData.searchParams;

            //params: handle._createParamsObject(params)//,
            //searchParams: this.querystringParser(querystring)

            tmpHandler.handler(tmpRequest, tmpSynthesizedResponseData, pData).then(function (pResults) {
              return tmpCallback(null, tmpSynthesizedResponseData.responseData, tmpSynthesizedResponseData, pResults);
            }, function (pError) {
              _this12.log.trace('IPC Response Received', {
                Error: pError
              });
              if (pError) {
                _this12.log.error("IPC Request Error Request GUID [".concat(tmpRequest.guid, "] handling route [").concat(pRoute, "]: ").concat(pError), {
                  Error: pError,
                  Route: pRoute,
                  Data: pData
                });
              }
              return tmpCallback(pError, tmpSynthesizedResponseData.responseData, tmpSynthesizedResponseData);
            });
          }
        }]);
        return OratorServiceServerIPC;
      }(libOratorServiceServerBase);
      module.exports = OratorServiceServerIPC;
    }, {
      "./Orator-ServiceServer-Base.js": 33,
      "./Orator-ServiceServer-IPC-SynthesizedResponse.js": 34,
      "find-my-way": 13
    }],
    36: [function (require, module, exports) {
      /**
      * Orator Service Abstraction
      *
      * @license MIT
      *
      * @author Steven Velozo <steven@velozo.com>
      * @module Orator Service
      */

      var libFableServiceProviderBase = require('fable-serviceproviderbase');
      var libDefaultOratorServiceServer = require('./Orator-Default-ServiceServer.js');
      var defaultOratorConfiguration = require('./Orator-Default-Configuration.js');
      var Orator = /*#__PURE__*/function (_libFableServiceProvi2) {
        _inherits(Orator, _libFableServiceProvi2);
        var _super7 = _createSuper(Orator);
        function Orator(pFable, pOptions, pServiceHash) {
          var _this13;
          _classCallCheck(this, Orator);
          _this13 = _super7.call(this, pFable, pOptions, pServiceHash);
          _this13.serviceType = 'Orator';

          // Create the empty, important logic containers
          _this13.serviceServer = false;
          _this13.serviceServerProvider = false;
          if (typeof pServiceProvider !== 'undefined') {
            _this13.serviceServerProvider = pServiceProvider;
          }

          // Now check to see that the ServicePort is set (this used to be APIServerPort)
          if (!_this13.options.hasOwnProperty('ServicePort')) {
            if (_this13.fable.settings.hasOwnProperty('APIServerPort')) {
              // Automatically migrate the legacy APIServerPort to ServicePort
              _this13.options.ServicePort = _this13.fable.settings.APIServerPort;
            } else {
              // Default to whatever the ... default is!
              _this13.options.ServicePort = defaultOratorConfiguration.ServicePort;
            }
          }

          // Now check to see that the Product name is set
          if (!_this13.options.hasOwnProperty('Product')) {
            _this13.options.Product = defaultOratorConfiguration.Product;
          }
          return _this13;
        }
        _createClass(Orator, [{
          key: "onBeforeInitialize",
          value: function onBeforeInitialize() {
            if (this.fable.settings.LogNoisiness > 3) {
              this.log.trace("Orator [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Product, " onBeforeInitialize:"));
            }
          }
        }, {
          key: "onBeforeInitializeAsync",
          value: function onBeforeInitializeAsync(fNext) {
            this.onBeforeInitialize();
            // Check to see if there is a service server active; if not instantiate one (and use IPC if none is registered with Fable as the default provider)
            if (!this.serviceServer) {
              // If the developer hasn't set this to a service provider class of their own choosing, 
              // TODO: Give the developer a chance to set a service provider instantiation address of their own choosing.
              // use the built-in network-less one.
              if (!this.fable.OratorServiceServer) {
                // If there isn't a default Service Server setup, create one.
                var tmpServiceServerOptions = typeof this.options.ServiceServerOptions == 'undefined' ? {} : this.options.ServiceServerOptions;
                if (!this.fable.serviceManager.servicesMap.hasOwnProperty('OratorServiceServer')) {
                  // Only register IPC if there isn't one yet.
                  this.fable.serviceManager.addServiceType('OratorServiceServer', libDefaultOratorServiceServer);
                }
                this.fable.serviceManager.instantiateServiceProvider('OratorServiceServer', tmpServiceServerOptions, 'OratorServiceServer-AutoInit');
              }
              this.serviceServer = this.fable.OratorServiceServer;
              // For legacy reasons, we also will provide this under the "webServer" variable.
              this.webServer = this.serviceServer;
            } else {
              this.log.warn("Orator attempting to initialize a service server after initialization has already completed.");
            }
            fNext();
          }
        }, {
          key: "onInitialize",
          value: function onInitialize() {
            if (this.fable.settings.LogNoisiness > 3) {
              this.log.trace("Orator [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Product, " onInitialize:"));
            }
          }
        }, {
          key: "onInitializeAsync",
          value: function onInitializeAsync(fNext) {
            this.onInitialize();
            return fNext();
          }
        }, {
          key: "onAfterInitialize",
          value: function onAfterInitialize() {
            if (this.fable.settings.LogNoisiness > 3) {
              this.log.trace("Orator [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Product, " onAfterInitialize:"));
            }
          }
        }, {
          key: "onAfterInitializeAsync",
          value: function onAfterInitializeAsync(fNext) {
            this.onAfterInitialize();
            return fNext();
          }
        }, {
          key: "initialize",
          value: function initialize(fCallback) {
            var _this14 = this;
            // I hate this -- is there a reason to not require a callback?
            var tmpCallback = typeof fCallback === 'function' ? fCallback : function () {};
            if (!this.initializeTimestamp) {
              var tmpAnticipate = this.fable.serviceManager.instantiateServiceProviderWithoutRegistration('Anticipate');
              if (this.fable.LogNoisiness > 3) {
                this.log.trace("Orator [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Product, " beginning initialization steps..."));
              }
              tmpAnticipate.anticipate(this.onBeforeInitializeAsync.bind(this));
              tmpAnticipate.anticipate(this.onInitializeAsync.bind(this));
              tmpAnticipate.anticipate(this.onAfterInitializeAsync.bind(this));
              tmpAnticipate.wait(function (pError) {
                _this14.initializeTimestamp = _this14.fable.log.getTimeStamp();
                if (_this14.fable.LogNoisiness > 2) {
                  _this14.log.trace("Orator [".concat(_this14.UUID, "]::[").concat(_this14.Hash, "] ").concat(_this14.options.Product, " initialization steps complete."));
                }
                return tmpCallback(pError);
              });
            } else {
              this.log.warn("Orator [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Product, " async initialize called but initialization is already completed.  Aborting."));
              // TODO: Should this be returning an error?
              return tmpCallback();
            }
          }
        }, {
          key: "onBeforeStartService",
          value: function onBeforeStartService(fNext) {
            return fNext();
          }
        }, {
          key: "onStartService",
          value: function onStartService(fNext) {
            var _this15 = this;
            this.onAfterInitialize();
            return this.serviceServer.listen(this.options.ServicePort, function (pError) {
              _this15.log.info("".concat(_this15.serviceServer.Name, " listening at ").concat(_this15.serviceServer.URL, " port ").concat(_this15.serviceServer.Port));
              return fNext(pError);
            });
          }
        }, {
          key: "onAfterStartService",
          value: function onAfterStartService(fNext) {
            return fNext();
          }
        }, {
          key: "startService",
          value: function startService(fNext) {
            var _this16 = this;
            var tmpNext = typeof fNext === 'function' ? fNext : function () {};
            var tmpAnticipate = this.fable.serviceManager.instantiateServiceProviderWithoutRegistration('Anticipate');
            if (this.fable.LogNoisiness > 3) {
              this.log.trace("Orator [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Product, " beginning startService steps..."));
            }

            // Auto initialize if there is no serviceServer
            if (!this.serviceServer) {
              tmpAnticipate.anticipate(this.initialize.bind(this));
            }
            tmpAnticipate.anticipate(this.onBeforeStartService.bind(this));
            tmpAnticipate.anticipate(this.onStartService.bind(this));
            tmpAnticipate.anticipate(this.onAfterStartService.bind(this));
            tmpAnticipate.wait(function (pError) {
              _this16.startServiceTimestamp = _this16.fable.log.getTimeStamp();
              if (_this16.fable.LogNoisiness > 2) {
                _this16.log.trace("Orator [".concat(_this16.UUID, "]::[").concat(_this16.Hash, "] ").concat(_this16.options.Product, " startService steps complete."));
              }
              return tmpNext(pError);
            });
          }
        }, {
          key: "stopService",
          value: function stopService(fCallback) {
            var tmpCallback = typeof fCallback === 'function' ? fCallback : function () {};
            if (!this.serviceServer) {
              var tmpMessage = "Orator attempting to stop a service server but the service server has not been intialized yet.";
              this.log.warn(tmpMessage);
              return tmpCallback(tmpMessage);
            }
            if (!this.serviceServer.Active) {
              var _tmpMessage = "Orator attempting to stop a service server but the service server is not actively running.";
              this.log.warn(_tmpMessage);
              return tmpCallback(_tmpMessage);
            }
            return this.serviceServer.close(tmpCallback);
          }
        }, {
          key: "invoke",
          value: function invoke(pMethod, pRoute, pData, fCallback) {
            //this.log.trace(`Orator [${this.UUID}]::[${this.Hash}] ${this.options.Product} invoking ${pMethod} ${pRoute}`);
            return this.serviceServer.invoke(pMethod, pRoute, pData, fCallback);
          }

          /*
           * Legacy Orator Functions
           *************************************************************************/
        }, {
          key: "startWebServer",
          value: function startWebServer(fNext) {
            return this.startService(fNext);
          }

          // For legacy purposes
        }, {
          key: "stopWebServer",
          value: function stopWebServer(fNext) {
            return this.stopService(fNext);
          }

          // For legacy purposes
        }, {
          key: "getWebServer",
          value: function getWebServer() {
            // The old behavior was to lazily construct the service the first time 
            // this accessor function is called.
            if (!this.serviceServer) {
              this.initializeServiceServer();
            }
            return this.serviceServer;
          }
          /*************************************************************************
           * End of Legacy Orator Functions
           */
        }]);
        return Orator;
      }(libFableServiceProviderBase);
      module.exports = Orator;
      module.exports.ServiceServerBase = require('./Orator-ServiceServer-Base.js');
      module.exports.ServiceServerIPC = require('./Orator-ServiceServer-IPC.js');
    }, {
      "./Orator-Default-Configuration.js": 31,
      "./Orator-Default-ServiceServer.js": 32,
      "./Orator-ServiceServer-Base.js": 33,
      "./Orator-ServiceServer-IPC.js": 35,
      "fable-serviceproviderbase": 6
    }]
  }, {}, [36])(36);
});