var Evergage = (function (exports) {
  'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  var REACT_ELEMENT_TYPE;

  function _jsx(type, props, key, children) {
    if (!REACT_ELEMENT_TYPE) {
      REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7;
    }

    var defaultProps = type && type.defaultProps;
    var childrenLength = arguments.length - 3;

    if (!props && childrenLength !== 0) {
      props = {
        children: void 0
      };
    }

    if (props && defaultProps) {
      for (var propName in defaultProps) {
        if (props[propName] === void 0) {
          props[propName] = defaultProps[propName];
        }
      }
    } else if (!props) {
      props = defaultProps || {};
    }

    if (childrenLength === 1) {
      props.children = children;
    } else if (childrenLength > 1) {
      var childArray = new Array(childrenLength);

      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 3];
      }

      props.children = childArray;
    }

    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: type,
      key: key === undefined ? null : '' + key,
      ref: null,
      props: props,
      _owner: null
    };
  }

  function _asyncIterator(iterable) {
    var method;

    if (typeof Symbol !== "undefined") {
      if (Symbol.asyncIterator) {
        method = iterable[Symbol.asyncIterator];
        if (method != null) return method.call(iterable);
      }

      if (Symbol.iterator) {
        method = iterable[Symbol.iterator];
        if (method != null) return method.call(iterable);
      }
    }

    throw new TypeError("Object is not async iterable");
  }

  function _AwaitValue(value) {
    this.wrapped = value;
  }

  function _AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;
        var wrappedAwait = value instanceof _AwaitValue;
        Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) {
          if (wrappedAwait) {
            resume("next", arg);
            return;
          }

          settle(result.done ? "return" : "normal", arg);
        }, function (err) {
          resume("throw", err);
        });
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    _AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  _AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  _AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  _AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  function _wrapAsyncGenerator(fn) {
    return function () {
      return new _AsyncGenerator(fn.apply(this, arguments));
    };
  }

  function _awaitAsyncGenerator(value) {
    return new _AwaitValue(value);
  }

  function _asyncGeneratorDelegate(inner, awaitWrap) {
    var iter = {},
        waiting = false;

    function pump(key, value) {
      waiting = true;
      value = new Promise(function (resolve) {
        resolve(inner[key](value));
      });
      return {
        done: false,
        value: awaitWrap(value)
      };
    }

    ;

    if (typeof Symbol === "function" && Symbol.iterator) {
      iter[Symbol.iterator] = function () {
        return this;
      };
    }

    iter.next = function (value) {
      if (waiting) {
        waiting = false;
        return value;
      }

      return pump("next", value);
    };

    if (typeof inner.throw === "function") {
      iter.throw = function (value) {
        if (waiting) {
          waiting = false;
          throw value;
        }

        return pump("throw", value);
      };
    }

    if (typeof inner.return === "function") {
      iter.return = function (value) {
        return pump("return", value);
      };
    }

    return iter;
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineEnumerableProperties(obj, descs) {
    for (var key in descs) {
      var desc = descs[key];
      desc.configurable = desc.enumerable = true;
      if ("value" in desc) desc.writable = true;
      Object.defineProperty(obj, key, desc);
    }

    if (Object.getOwnPropertySymbols) {
      var objectSymbols = Object.getOwnPropertySymbols(descs);

      for (var i = 0; i < objectSymbols.length; i++) {
        var sym = objectSymbols[i];
        var desc = descs[sym];
        desc.configurable = desc.enumerable = true;
        if ("value" in desc) desc.writable = true;
        Object.defineProperty(obj, sym, desc);
      }
    }

    return obj;
  }

  function _defaults(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = Object.getOwnPropertyDescriptor(defaults, key);

      if (value && value.configurable && obj[key] === undefined) {
        Object.defineProperty(obj, key, value);
      }
    }

    return obj;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(source, true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
      return !!right[Symbol.hasInstance](left);
    } else {
      return left instanceof right;
    }
  }

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

            if (desc.get || desc.set) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) {
      throw new TypeError("Cannot instantiate an arrow function");
    }
  }

  function _objectDestructuringEmpty(obj) {
    if (obj == null) throw new TypeError("Cannot destructure undefined");
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      set = Reflect.set;
    } else {
      set = function set(target, property, value, receiver) {
        var base = _superPropBase(target, property);

        var desc;

        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property);

          if (desc.set) {
            desc.set.call(receiver, value);
            return true;
          } else if (!desc.writable) {
            return false;
          }
        }

        desc = Object.getOwnPropertyDescriptor(receiver, property);

        if (desc) {
          if (!desc.writable) {
            return false;
          }

          desc.value = value;
          Object.defineProperty(receiver, property, desc);
        } else {
          _defineProperty(receiver, property, value);
        }

        return true;
      };
    }

    return set(target, property, value, receiver);
  }

  function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);

    if (!s && isStrict) {
      throw new Error('failed to set property');
    }

    return value;
  }

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    strings.raw = raw;
    return strings;
  }

  function _temporalRef(val, name) {
    if (val === _temporalUndefined) {
      throw new ReferenceError(name + " is not defined - temporal dead zone");
    } else {
      return val;
    }
  }

  function _readOnlyError(name) {
    throw new Error("\"" + name + "\" is read-only");
  }

  function _classNameTDZError(name) {
    throw new Error("Class \"" + name + "\" cannot be referenced in computed property keys.");
  }

  var _temporalUndefined = {};

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _slicedToArrayLoose(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimitLoose(arr, i) || _nonIterableRest();
  }

  function _toArray(arr) {
    return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _iterableToArrayLimitLoose(arr, i) {
    var _arr = [];

    for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
      _arr.push(_step.value);

      if (i && _arr.length === i) break;
    }

    return _arr;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  function _skipFirstGeneratorNext(fn) {
    return function () {
      var it = fn.apply(this, arguments);
      it.next();
      return it;
    };
  }

  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];

    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }

    return (hint === "string" ? String : Number)(input);
  }

  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");

    return typeof key === "symbol" ? key : String(key);
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.');
  }

  function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object.keys(descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object.defineProperty(target, property, desc);
      desc = null;
    }

    return desc;
  }

  var id = 0;

  function _classPrivateFieldLooseKey(name) {
    return "__private_" + id++ + "_" + name;
  }

  function _classPrivateFieldLooseBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
      throw new TypeError("attempted to use private field on non-instance");
    }

    return receiver;
  }

  function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = privateMap.get(receiver);

    if (!descriptor) {
      throw new TypeError("attempted to get private field on non-instance");
    }

    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }

    return descriptor.value;
  }

  function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = privateMap.get(receiver);

    if (!descriptor) {
      throw new TypeError("attempted to set private field on non-instance");
    }

    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        throw new TypeError("attempted to set read only private field");
      }

      descriptor.value = value;
    }

    return value;
  }

  function _classPrivateFieldDestructureSet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to set private field on non-instance");
    }

    var descriptor = privateMap.get(receiver);

    if (descriptor.set) {
      if (!("__destrObj" in descriptor)) {
        descriptor.__destrObj = {
          set value(v) {
            descriptor.set.call(receiver, v);
          }

        };
      }

      return descriptor.__destrObj;
    } else {
      if (!descriptor.writable) {
        throw new TypeError("attempted to set read only private field");
      }

      return descriptor;
    }
  }

  function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }

    return descriptor.value;
  }

  function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }

    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
    return value;
  }

  function _classStaticPrivateMethodGet(receiver, classConstructor, method) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }

    return method;
  }

  function _classStaticPrivateMethodSet() {
    throw new TypeError("attempted to set read only static private field");
  }

  function _decorate(decorators, factory, superClass, mixins) {
    var api = _getDecoratorsApi();

    if (mixins) {
      for (var i = 0; i < mixins.length; i++) {
        api = mixins[i](api);
      }
    }

    var r = factory(function initialize(O) {
      api.initializeInstanceElements(O, decorated.elements);
    }, superClass);
    var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators);
    api.initializeClassElements(r.F, decorated.elements);
    return api.runClassFinishers(r.F, decorated.finishers);
  }

  function _getDecoratorsApi() {
    _getDecoratorsApi = function () {
      return api;
    };

    var api = {
      elementsDefinitionOrder: [["method"], ["field"]],
      initializeInstanceElements: function (O, elements) {
        ["method", "field"].forEach(function (kind) {
          elements.forEach(function (element) {
            if (element.kind === kind && element.placement === "own") {
              this.defineClassElement(O, element);
            }
          }, this);
        }, this);
      },
      initializeClassElements: function (F, elements) {
        var proto = F.prototype;
        ["method", "field"].forEach(function (kind) {
          elements.forEach(function (element) {
            var placement = element.placement;

            if (element.kind === kind && (placement === "static" || placement === "prototype")) {
              var receiver = placement === "static" ? F : proto;
              this.defineClassElement(receiver, element);
            }
          }, this);
        }, this);
      },
      defineClassElement: function (receiver, element) {
        var descriptor = element.descriptor;

        if (element.kind === "field") {
          var initializer = element.initializer;
          descriptor = {
            enumerable: descriptor.enumerable,
            writable: descriptor.writable,
            configurable: descriptor.configurable,
            value: initializer === void 0 ? void 0 : initializer.call(receiver)
          };
        }

        Object.defineProperty(receiver, element.key, descriptor);
      },
      decorateClass: function (elements, decorators) {
        var newElements = [];
        var finishers = [];
        var placements = {
          static: [],
          prototype: [],
          own: []
        };
        elements.forEach(function (element) {
          this.addElementPlacement(element, placements);
        }, this);
        elements.forEach(function (element) {
          if (!_hasDecorators(element)) return newElements.push(element);
          var elementFinishersExtras = this.decorateElement(element, placements);
          newElements.push(elementFinishersExtras.element);
          newElements.push.apply(newElements, elementFinishersExtras.extras);
          finishers.push.apply(finishers, elementFinishersExtras.finishers);
        }, this);

        if (!decorators) {
          return {
            elements: newElements,
            finishers: finishers
          };
        }

        var result = this.decorateConstructor(newElements, decorators);
        finishers.push.apply(finishers, result.finishers);
        result.finishers = finishers;
        return result;
      },
      addElementPlacement: function (element, placements, silent) {
        var keys = placements[element.placement];

        if (!silent && keys.indexOf(element.key) !== -1) {
          throw new TypeError("Duplicated element (" + element.key + ")");
        }

        keys.push(element.key);
      },
      decorateElement: function (element, placements) {
        var extras = [];
        var finishers = [];

        for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) {
          var keys = placements[element.placement];
          keys.splice(keys.indexOf(element.key), 1);
          var elementObject = this.fromElementDescriptor(element);
          var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject);
          element = elementFinisherExtras.element;
          this.addElementPlacement(element, placements);

          if (elementFinisherExtras.finisher) {
            finishers.push(elementFinisherExtras.finisher);
          }

          var newExtras = elementFinisherExtras.extras;

          if (newExtras) {
            for (var j = 0; j < newExtras.length; j++) {
              this.addElementPlacement(newExtras[j], placements);
            }

            extras.push.apply(extras, newExtras);
          }
        }

        return {
          element: element,
          finishers: finishers,
          extras: extras
        };
      },
      decorateConstructor: function (elements, decorators) {
        var finishers = [];

        for (var i = decorators.length - 1; i >= 0; i--) {
          var obj = this.fromClassDescriptor(elements);
          var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj);

          if (elementsAndFinisher.finisher !== undefined) {
            finishers.push(elementsAndFinisher.finisher);
          }

          if (elementsAndFinisher.elements !== undefined) {
            elements = elementsAndFinisher.elements;

            for (var j = 0; j < elements.length - 1; j++) {
              for (var k = j + 1; k < elements.length; k++) {
                if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) {
                  throw new TypeError("Duplicated element (" + elements[j].key + ")");
                }
              }
            }
          }
        }

        return {
          elements: elements,
          finishers: finishers
        };
      },
      fromElementDescriptor: function (element) {
        var obj = {
          kind: element.kind,
          key: element.key,
          placement: element.placement,
          descriptor: element.descriptor
        };
        var desc = {
          value: "Descriptor",
          configurable: true
        };
        Object.defineProperty(obj, Symbol.toStringTag, desc);
        if (element.kind === "field") obj.initializer = element.initializer;
        return obj;
      },
      toElementDescriptors: function (elementObjects) {
        if (elementObjects === undefined) return;
        return _toArray(elementObjects).map(function (elementObject) {
          var element = this.toElementDescriptor(elementObject);
          this.disallowProperty(elementObject, "finisher", "An element descriptor");
          this.disallowProperty(elementObject, "extras", "An element descriptor");
          return element;
        }, this);
      },
      toElementDescriptor: function (elementObject) {
        var kind = String(elementObject.kind);

        if (kind !== "method" && kind !== "field") {
          throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"');
        }

        var key = _toPropertyKey(elementObject.key);

        var placement = String(elementObject.placement);

        if (placement !== "static" && placement !== "prototype" && placement !== "own") {
          throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"');
        }

        var descriptor = elementObject.descriptor;
        this.disallowProperty(elementObject, "elements", "An element descriptor");
        var element = {
          kind: kind,
          key: key,
          placement: placement,
          descriptor: Object.assign({}, descriptor)
        };

        if (kind !== "field") {
          this.disallowProperty(elementObject, "initializer", "A method descriptor");
        } else {
          this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor");
          this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor");
          this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor");
          element.initializer = elementObject.initializer;
        }

        return element;
      },
      toElementFinisherExtras: function (elementObject) {
        var element = this.toElementDescriptor(elementObject);

        var finisher = _optionalCallableProperty(elementObject, "finisher");

        var extras = this.toElementDescriptors(elementObject.extras);
        return {
          element: element,
          finisher: finisher,
          extras: extras
        };
      },
      fromClassDescriptor: function (elements) {
        var obj = {
          kind: "class",
          elements: elements.map(this.fromElementDescriptor, this)
        };
        var desc = {
          value: "Descriptor",
          configurable: true
        };
        Object.defineProperty(obj, Symbol.toStringTag, desc);
        return obj;
      },
      toClassDescriptor: function (obj) {
        var kind = String(obj.kind);

        if (kind !== "class") {
          throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"');
        }

        this.disallowProperty(obj, "key", "A class descriptor");
        this.disallowProperty(obj, "placement", "A class descriptor");
        this.disallowProperty(obj, "descriptor", "A class descriptor");
        this.disallowProperty(obj, "initializer", "A class descriptor");
        this.disallowProperty(obj, "extras", "A class descriptor");

        var finisher = _optionalCallableProperty(obj, "finisher");

        var elements = this.toElementDescriptors(obj.elements);
        return {
          elements: elements,
          finisher: finisher
        };
      },
      runClassFinishers: function (constructor, finishers) {
        for (var i = 0; i < finishers.length; i++) {
          var newConstructor = (0, finishers[i])(constructor);

          if (newConstructor !== undefined) {
            if (typeof newConstructor !== "function") {
              throw new TypeError("Finishers must return a constructor.");
            }

            constructor = newConstructor;
          }
        }

        return constructor;
      },
      disallowProperty: function (obj, name, objectType) {
        if (obj[name] !== undefined) {
          throw new TypeError(objectType + " can't have a ." + name + " property.");
        }
      }
    };
    return api;
  }

  function _createElementDescriptor(def) {
    var key = _toPropertyKey(def.key);

    var descriptor;

    if (def.kind === "method") {
      descriptor = {
        value: def.value,
        writable: true,
        configurable: true,
        enumerable: false
      };
    } else if (def.kind === "get") {
      descriptor = {
        get: def.value,
        configurable: true,
        enumerable: false
      };
    } else if (def.kind === "set") {
      descriptor = {
        set: def.value,
        configurable: true,
        enumerable: false
      };
    } else if (def.kind === "field") {
      descriptor = {
        configurable: true,
        writable: true,
        enumerable: true
      };
    }

    var element = {
      kind: def.kind === "field" ? "field" : "method",
      key: key,
      placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype",
      descriptor: descriptor
    };
    if (def.decorators) element.decorators = def.decorators;
    if (def.kind === "field") element.initializer = def.value;
    return element;
  }

  function _coalesceGetterSetter(element, other) {
    if (element.descriptor.get !== undefined) {
      other.descriptor.get = element.descriptor.get;
    } else {
      other.descriptor.set = element.descriptor.set;
    }
  }

  function _coalesceClassElements(elements) {
    var newElements = [];

    var isSameElement = function (other) {
      return other.kind === "method" && other.key === element.key && other.placement === element.placement;
    };

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var other;

      if (element.kind === "method" && (other = newElements.find(isSameElement))) {
        if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) {
          if (_hasDecorators(element) || _hasDecorators(other)) {
            throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated.");
          }

          other.descriptor = element.descriptor;
        } else {
          if (_hasDecorators(element)) {
            if (_hasDecorators(other)) {
              throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ").");
            }

            other.decorators = element.decorators;
          }

          _coalesceGetterSetter(element, other);
        }
      } else {
        newElements.push(element);
      }
    }

    return newElements;
  }

  function _hasDecorators(element) {
    return element.decorators && element.decorators.length;
  }

  function _isDataDescriptor(desc) {
    return desc !== undefined && !(desc.value === undefined && desc.writable === undefined);
  }

  function _optionalCallableProperty(obj, name) {
    var value = obj[name];

    if (value !== undefined && typeof value !== "function") {
      throw new TypeError("Expected '" + name + "' to be a function");
    }

    return value;
  }

  function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }

    return fn;
  }

  function _classPrivateMethodSet() {
    throw new TypeError("attempted to reassign private method");
  }

  function _wrapRegExp(re, groups) {
    _wrapRegExp = function (re, groups) {
      return new BabelRegExp(re, groups);
    };

    var _RegExp = _wrapNativeSuper(RegExp);

    var _super = RegExp.prototype;

    var _groups = new WeakMap();

    function BabelRegExp(re, groups) {
      var _this = _RegExp.call(this, re);

      _groups.set(_this, groups);

      return _this;
    }

    _inherits(BabelRegExp, _RegExp);

    BabelRegExp.prototype.exec = function (str) {
      var result = _super.exec.call(this, str);

      if (result) result.groups = buildGroups(result, this);
      return result;
    };

    BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {
      if (typeof substitution === "string") {
        var groups = _groups.get(this);

        return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) {
          return "$" + groups[name];
        }));
      } else if (typeof substitution === "function") {
        var _this = this;

        return _super[Symbol.replace].call(this, str, function () {
          var args = [];
          args.push.apply(args, arguments);

          if (typeof args[args.length - 1] !== "object") {
            args.push(buildGroups(args, _this));
          }

          return substitution.apply(this, args);
        });
      } else {
        return _super[Symbol.replace].call(this, str, substitution);
      }
    };

    function buildGroups(result, re) {
      var g = _groups.get(re);

      return Object.keys(g).reduce(function (groups, name) {
        groups[name] = result[g[name]];
        return groups;
      }, Object.create(null));
    }

    return _wrapRegExp.apply(this, arguments);
  }

  // tslint:disable variable-name ban-types no-empty
  var levels = ['error', 'warn', 'info', 'debug', 'trace'];

  var Log =
  /*#__PURE__*/
  function () {
    function Log()
    /* NONE */
    {
      var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      _classCallCheck(this, Log);

      this.console = window.console;
      this.level = level;
      this.prefix = prefix;
      this.buildLogFunctions();
    }

    _createClass(Log, [{
      key: "shouldLog",
      value: function shouldLog(level) {
        return level <= this.level;
      }
      /**
       * Sets the logging level
       *
       * @param level logging level to change the logger into
       */

    }, {
      key: "setLoggingLevel",
      value: function setLoggingLevel(level) {
        this.level = typeof level === 'string' ? levels.indexOf(level.toLowerCase()) + 1 : level || 0
        /* NONE */
        ;
        this.buildLogFunctions();
      }
    }, {
      key: "getLoggingLevel",
      value: function getLoggingLevel() {
        return this.level;
      }
      /**
       *
       * sets the logging level so that all log lines will be logged with as such
       *
       * `[INFO]({PREFIX}): ...`
       *
       * @param {string} prefix logging prefix
       */

    }, {
      key: "setPrefix",
      value: function setPrefix(prefix) {
        this.prefix = prefix;
        this.buildLogFunctions();
      }
    }, {
      key: "getPrefix",
      value: function getPrefix() {
        return this.prefix;
      }
    }, {
      key: "buildLogFunctions",
      value: function buildLogFunctions() {
        var _this = this;

        levels.forEach(function (value, i) {
          var level = levels[i];
          _this[level] = _this.shouldLog(i + 1) ? _this.getLogFn(level) : function () {};
        });
      }
    }, {
      key: "getLogFn",
      value: function getLogFn(consoleMethod) {
        return Function.prototype.bind.call(this.console.log, this.console, "[".concat(consoleMethod.toUpperCase(), "]").concat(this.prefix ? '(' + this.prefix + ')' : '', ":"));
      }
    }]);

    return Log;
  }();

  var Logger = new Log();

  // tslint:disable variable-name
  var PROD_TRACKER_DOMAIN = 'evergage.com'; // TODO: use evgcdn?

  var PROD_CDN_DOMAIN = "cdn.".concat(PROD_TRACKER_DOMAIN);
  var DEFAULT_CONFIG = {
    sendEvents: true,

    /* defaults for client values */
    minimumActivityTimeToRegister: 300,
    timeOnPageTimerLengthMillis: 60000,

    /* defaults for server values */
    trackAnonymousVisitors: true,
    corsAllowedOrigins: ['*'],
    rememberMeUserIdsMillis: 63072000000,
    actionRateLimiterConfig: {
      globalLimit: 10,
      globalTimeRange: 5000,
      perActionLimit: 5,
      perActionTimeRange: 2000
    }
  }; // TODO: Typescript beacon - Version hard coded for now...

  var BEACON_VERSION = 16; // Channel

  var BEACON_CHANNEL = "Web"; // Cookie ID's

  var COOKIE_NAME_PREFIX = '_evg';
  var VISITOR_COOKIE_ID = 'a';
  var NAMED_COOKIE_ID_CLASSIC = 'n'; // Session storage ID

  var SESSION_STORAGE_KEY_PREFIX = '_evg';
  var STORAGE_INFO = {
    anonymousId: {
      ids: {// No local storage ID for visitor cookie
      },
      timeoutDays: 730 // 2 years

    }
  }; // Test Messages Query Parameter

  var TEST_MESSAGES_QUERY_PARAM = "evergageTestMessages";
  var READABLE_EVENT_QUERY_PARAM = "isReadableEvent"; // Invalid User/Account Strings

  var INVALID_USER_OR_ACCOUNT_STRINGS = ['null', 'undefined', 'false', '0', '[object Object]']; // Event receiver paths

  var MESSAGE_STAT_RECEIVER_PATH = '/msreceiver';
  var EVENT_RECEIVER_PATH = '/api2/event/';
  var PING_RECEIVER_PATH = '/pr';
  var ERROR_RECEIVER_PATH = '/er'; // Maximum GET request size. Most browswers (not IE) have limit around 8kb.

  /** @const */

  var MAX_GET_REQUEST_SIZE = 8192; // Custom field names and values are each truncated before being sent in the request or recorded in the cookie.
  // @sync com.apptegic.common.domain.data.validation.DefaultEventValidator.DEFAULT_MAX_FIELD_VALUE_LENGTH_CHARS

  /** @const */

  var CUSTOM_FIELD_MAX_LENGTH = 1024; // URL fields ("url" and "urlref") are each truncated before being sent in the request or recorded in the cookie.
  // @sync com.apptegic.common.domain.data.validation.DefaultEventValidator.DEFAULT_MAX_URL_VALUE_LENGTH_CHARS

  /** @const */

  var URL_FIELDS_MAX_LENGTH = 3072;
  var TITLE_FIELD_MAX_LENGTH = 1024; // Rate limit the number of error events sent per page load

  /** @const */

  var ERROR_EVENT_LIMIT = 3;
  var CampaignStatType;

  (function (CampaignStatType) {
    CampaignStatType["Impression"] = "i";
    CampaignStatType["Clickthrough"] = "c";
    CampaignStatType["Dismissal"] = "d";
    CampaignStatType["Unsubscribe"] = "u";
    CampaignStatType["Send"] = "s";
  })(CampaignStatType || (CampaignStatType = {}));

  (function (ItemType) {
    ItemType["Product"] = "Product";
    ItemType["Category"] = "Category";
  })(exports.ItemType || (exports.ItemType = {}));

  ;

  var Signal =
  /*#__PURE__*/
  function () {
    function Signal() {
      _classCallCheck(this, Signal);

      this.listeners = [];
    }

    _createClass(Signal, [{
      key: "on",
      value: function on(listener) {
        var _this = this;

        (this.listeners = this.listeners || []).push(listener);
        return function () {
          _this.listeners = _this.listeners.filter(function (i) {
            return i !== listener;
          });
        };
      }
    }, {
      key: "once",
      value: function once(listener) {
        var _this2 = this;

        return this.on(function () {
          _this2.unbindAll();

          try {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            listener.apply(_this2, args);
          } catch (e) {
            Logger.error('Signal listener callback error: ' + e);
          }
        });
      }
    }, {
      key: "emit",
      value: function emit() {
        var _this3 = this;

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        this.listeners.length !== 0 && this.listeners.forEach(function (listener) {
          try {
            listener.apply(_this3, args);
          } catch (e) {
            Logger.error('Signal listener callback error: ' + e);
          }
        });
      }
    }, {
      key: "unbindAll",
      value: function unbindAll() {
        this.listeners = [];
      }
    }]);

    return Signal;
  }();
  var unbindMySignals = function unbindMySignals(typeWithSignals) {
    Logger.debug('Unbinding all signals for type: ', typeWithSignals);
    Object.keys(typeWithSignals).forEach(function (signal) {
      if (typeWithSignals[signal].unbindAll) {
        typeWithSignals[signal].unbindAll();
      }
    });
  };

  // tslint:disable ban-types
  var state = {
    endpointConfig: {},
    beaconConfig: DEFAULT_CONFIG,
    visitor: {},
    beaconState: null
  };
  var beaconStateListeners = new Signal();
  var setBeaconState = function setBeaconState(beaconState) {
    state.beaconState = beaconState;
    beaconStateListeners.emit(beaconState);
  };
  var getVisitor = function getVisitor() {
    return state.visitor || {};
  };

  /*
   * Copyright (C) 2010-2019 Evergage, Inc.
   * All rights reserved.
   */

  /** uses the web browser to parse URLs */
  function urlParse(href) {
    var parser = document.createElement('a');
    parser.href = href;
    return parser;
  }

  function sha1 (r) {
    var o,
        e,
        t,
        f,
        n,
        a = [],
        c = [e = 1732584193, t = 4023233417, ~e, ~t, 3285377520],
        u = [],
        d = unescape(encodeURI(r)) + "",
        g = d.length;

    for (u[r = --g / 4 + 2 | 15] = 8 * g; ~g;) {
      u[g >> 2] |= d.charCodeAt(g) << 8 * ~g--;
    }

    for (o = g = 0; o < r; o += 16) {
      for (e = c; g < 80; e = [e[4] + (a[g] = g < 16 ? ~~u[o + g] : 2 * d | d < 0) + 1518500249 + [t & f | ~t & n, d = 341275144 + (t ^ f ^ n), 882459459 + (t & f | t & n | f & n), d + 1535694389][g++ / 5 >> 2] + ((d = e[0]) << 5 | d >>> 27), d, t << 30 | t >>> 2, f, n]) {
        d = a[g - 3] ^ a[g - 8] ^ a[g - 14] ^ a[g - 16], t = e[1], f = e[2], n = e[3];
      }

      for (g = 5; g;) {
        c[--g] += e[g];
      }
    }

    for (d = ""; g < 40;) {
      d += (c[g >> 3] >> 4 * (7 - g++) & 15).toString(16);
    }

    return d;
  }

  // The only thing we have to fear is fear itself, and:
  var spiders = [/bot/i, /spider/i, /facebookexternalhit/i, /simplepie/i, /yahooseeker/i, /embedly/i, /quora link preview/i, /outbrain/i, /vkshare/i, /monit/i, /Pingability/i, /Monitoring/i, /WinHttpRequest/i, /Apache-HttpClient/i, /getprismatic.com/i, /python-requests/i, /Twurly/i, /yandex/i, /browserproxy/i, /crawler/i, /Qwantify/i, /Yahoo! Slurp/i, /pinterest/i, /Tumblr\/14.0.835.186/i, /Tumblr Agent 14.0/i];
  var isSpider = function isSpider(ua) {
    return spiders.some(function (spider) {
      return spider.test(ua);
    });
  };
  var userAgentIsRobot = function userAgentIsRobot() {
    return isSpider(getUserAgent());
  };
  var getUserAgent = function getUserAgent() {
    return window.navigator.userAgent || '';
  };
  var getNavigatorPlatform = function getNavigatorPlatform() {
    return window.navigator.platform || '';
  };
  var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 && navigator.userAgent && navigator.userAgent.indexOf('CriOS') == -1 && navigator.userAgent.indexOf('FxiOS') == -1;

  /* resolved locally */
  /**
   * generateUuid
   * @return {String} a pseudo-unique ID to fingerprint a user.
   */

  function generateUuid() {
    var dateTime = new Date().getTime;
    var raw = getUserAgent() + getNavigatorPlatform() + dateTime + JSON.stringify({}) + Math.random();
    return sha1(raw).slice(0, 16);
  }

  function addEventListener(target, eventType, eventHandler, useCapture) {
    if (target.addEventListener) {
      target.addEventListener(eventType, eventHandler, useCapture);
      return true;
    }

    return false;
  }
  function removeEventListener(target, eventType, eventHandler, useCapture) {
    if (target.removeEventListener) {
      target.removeEventListener(eventType, eventHandler, useCapture);
      return true;
    }

    return false;
  }
  function isNotNull(property) {
    return isDefined(property) && property !== null;
  }
  function isNull(property) {
    return !isNotNull(property);
  }
  function isNullOrEmptyString(property) {
    return isNull(property) || property === '';
  }
  function isDefined(property) {
    return typeof property !== 'undefined';
  }
  function isFunction(property) {
    return typeof property === 'function';
  }
  function isObject(property) {
    return _typeof(property) === 'object';
  }
  function truncateUrlField(url) {
    return url.substring(0, URL_FIELDS_MAX_LENGTH);
  }
  function truncateTitleField(title) {
    return title.substring(0, TITLE_FIELD_MAX_LENGTH);
  }
  function getNormalizedTitle() {
    return document.title.trim().replace(/\s{2,}/g, ' ');
  }
  function getCurrentUrl() {
    return urlParse(window.location.href).href;
  }
  function getCurrentUrlPath() {
    return urlParse(window.location.href).pathname;
  }
  function getCurrentHostname() {
    return urlParse(window.location.href).hostname;
  }
  function getCurrentProtocol() {
    var protocol = urlParse(window.location.href).protocol;
    return protocol === 'https:' ? 'https' : 'http';
  }
  function getCurrentTitle() {
    return truncateTitleField(getNormalizedTitle());
  }

  function determineTrackerUrl(endpointConfig) {
    var account = endpointConfig.account;
    return "https://".concat(account, ".").concat(PROD_TRACKER_DOMAIN);
  }
  function determineCdnUrl(endpointConfig) {
    return "https://".concat(PROD_CDN_DOMAIN);
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
  }

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  function getCjsExportFromNamespace (n) {
  	return n && n['default'] || n;
  }

  var js_cookie = createCommonjsModule(function (module, exports) {
    /*!
     * JavaScript Cookie v2.2.1
     * https://github.com/js-cookie/js-cookie
     *
     * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
     * Released under the MIT license
     */
    ;

    (function (factory) {
      var registeredInModuleLoader;

      if (typeof undefined === 'function' && undefined.amd) {
        undefined(factory);
        registeredInModuleLoader = true;
      }

      if ('object' === 'object') {
        module.exports = factory();
        registeredInModuleLoader = true;
      }

      if (!registeredInModuleLoader) {
        var OldCookies = window.Cookies;
        var api = window.Cookies = factory();

        api.noConflict = function () {
          window.Cookies = OldCookies;
          return api;
        };
      }
    })(function () {
      function extend() {
        var i = 0;
        var result = {};

        for (; i < arguments.length; i++) {
          var attributes = arguments[i];

          for (var key in attributes) {
            result[key] = attributes[key];
          }
        }

        return result;
      }

      function decode(s) {
        return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
      }

      function init(converter) {
        function api() {}

        function set(key, value, attributes) {
          if (typeof document === 'undefined') {
            return;
          }

          attributes = extend({
            path: '/'
          }, api.defaults, attributes);

          if (typeof attributes.expires === 'number') {
            attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
          } // We're using "expires" because "max-age" is not supported by IE


          attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

          try {
            var result = JSON.stringify(value);

            if (/^[\{\[]/.test(result)) {
              value = result;
            }
          } catch (e) {}

          value = converter.write ? converter.write(value, key) : encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
          key = encodeURIComponent(String(key)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
          var stringifiedAttributes = '';

          for (var attributeName in attributes) {
            if (!attributes[attributeName]) {
              continue;
            }

            stringifiedAttributes += '; ' + attributeName;

            if (attributes[attributeName] === true) {
              continue;
            } // Considers RFC 6265 section 5.2:
            // ...
            // 3.  If the remaining unparsed-attributes contains a %x3B (";")
            //     character:
            // Consume the characters of the unparsed-attributes up to,
            // not including, the first %x3B (";") character.
            // ...


            stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
          }

          return document.cookie = key + '=' + value + stringifiedAttributes;
        }

        function get(key, json) {
          if (typeof document === 'undefined') {
            return;
          }

          var jar = {}; // To prevent the for loop in the first place assign an empty array
          // in case there are no cookies at all.

          var cookies = document.cookie ? document.cookie.split('; ') : [];
          var i = 0;

          for (; i < cookies.length; i++) {
            var parts = cookies[i].split('=');
            var cookie = parts.slice(1).join('=');

            if (!json && cookie.charAt(0) === '"') {
              cookie = cookie.slice(1, -1);
            }

            try {
              var name = decode(parts[0]);
              cookie = (converter.read || converter)(cookie, name) || decode(cookie);

              if (json) {
                try {
                  cookie = JSON.parse(cookie);
                } catch (e) {}
              }

              jar[name] = cookie;

              if (key === name) {
                break;
              }
            } catch (e) {}
          }

          return key ? jar[key] : jar;
        }

        api.set = set;

        api.get = function (key) {
          return get(key, false
          /* read as raw */
          );
        };

        api.getJSON = function (key) {
          return get(key, true
          /* read as json */
          );
        };

        api.remove = function (key, attributes) {
          set(key, '', extend(attributes, {
            expires: -1
          }));
        };

        api.defaults = {};
        api.withConverter = init;
        return api;
      }

      return init(function () {});
    });
  });

  // tslint:disable variable-name

  var Cookie = js_cookie;
  /**
   * A sha1 of the current account, dataset and cookieDomainHash joined with periods
   */

  var cookieHash;

  var generateCookieDomainHash = function generateCookieDomainHash(cookieDomain) {
    return sha1(cookieDomain + '/').slice(0, 4); // 4 hexits = 16 bits
  };

  var setCookieHash = function setCookieHash(account, dataset, cookieDomain) {
    cookieHash = sha1("".concat(account, ".").concat(dataset, ".").concat(generateCookieDomainHash(cookieDomain))).slice(0, 4);
  };

  var getCookieName = function getCookieName(cookieShortId) {
    return "".concat(COOKIE_NAME_PREFIX).concat(cookieShortId, "_").concat(cookieHash);
  };

  var read = function read(cookieShortId) {
    return Cookie.getJSON(getCookieName(cookieShortId));
  };

  var write = function write(cookieShortId, cookieValue, daysToExpire, cookieDomain) {
    Cookie.set(getCookieName(cookieShortId), cookieValue, {
      expires: daysToExpire,
      domain: cookieDomain
    });
  };

  var remove = function remove(cookieShortId, options) {
    Cookie.remove(getCookieName(cookieShortId), options);
  };

  var Cookies = {
    setCookieHash: setCookieHash,
    read: read,
    write: write,
    remove: remove
  };

  var storageKeyPrefix;

  var getStorageKey = function getStorageKey(localStorageId) {
    return storageKeyPrefix + localStorageId;
  };

  var setStorageKeyPrefix = function setStorageKeyPrefix(account, dataset) {
    storageKeyPrefix = SESSION_STORAGE_KEY_PREFIX + '|' + account + '|' + dataset + '|';
  };
  /**
   * Looks up a key in sessionStorage
   * @param {String} sessionStorageId - Id to look up
   */


  var readSessionStorage = function readSessionStorage(sessionStorageId) {
    var key = getStorageKey(sessionStorageId);
    var sessionStorageValue = sessionStorage.getItem(key);

    if (sessionStorageValue) {
      return sessionStorageValue;
    }
  };
  /**
   * Writes value under provided Id in storage cache (jStorage)
   * @param {String} sessionStorageId - Id to store value under
   * @param {mixed} value - value to store under Id
   */


  var writeSessionStorage = function writeSessionStorage(sessionStorageId, value) {
    var key = getStorageKey(sessionStorageId);
    sessionStorage.setItem(key, value);
  };

  var SessionStorage = {
    read: readSessionStorage,
    write: writeSessionStorage,
    setStorageKeyPrefix: setStorageKeyPrefix
  };

  var sessionTicket = 'sessionTicket';
  var sessionTicketValue = '*';
  var refreshVisitorSession = function refreshVisitorSession() {
    Logger.trace('Refreshing session');
    var ses = SessionStorage.read(sessionTicket);
    if (!ses) SessionStorage.write(sessionTicket, sessionTicketValue);
  };

  var parseVisitorCookie = function parseVisitorCookie(visitorCookie) {
    return {
      uuid: visitorCookie.uuid,
      affinityId: visitorCookie.affinityId,
      persistedUserId: visitorCookie.puid,
      persistedAccountId: visitorCookie.paid
    };
  };

  var buildVisitorCookie = function buildVisitorCookie(visitor) {
    return {
      uuid: visitor.uuid,
      puid: visitor.persistedUserId,
      paid: visitor.persistedAccountId,
      affinityId: visitor.affinityId
    };
  };

  var storeVisitor = function storeVisitor(visitor) {
    Cookies.write(VISITOR_COOKIE_ID, buildVisitorCookie(visitor), STORAGE_INFO.anonymousId.timeoutDays, state.beaconConfig.cookieDomain);
    var visitorCookie = Cookies.read(VISITOR_COOKIE_ID);

    if (visitorCookie) {
      Logger.debug("Stored visitor cookie. ".concat(JSON.stringify(visitorCookie)));
    }

    return visitor;
  };
  var visitorIsAnonymous = function visitorIsAnonymous(visitor) {
    return visitor.persistedAccountId == null && visitor.persistedUserId == null;
  };

  var getCurrentDomainWithoutWWW = function getCurrentDomainWithoutWWW(currentDomain) {
    return currentDomain.indexOf("www") === 0 ? currentDomain.substring(4, currentDomain.length) : currentDomain;
  };

  var convertClassicAnonymousCookie = function convertClassicAnonymousCookie(visitorCookie) {
    if (!visitorCookie || _typeof(visitorCookie) === "object") {
      return;
    }

    var cookieParts = visitorCookie.split(".");

    if (cookieParts.length > 0) {
      state.visitor.uuid = cookieParts[0];

      if (cookieParts.length > 1 && cookieParts[1]) {
        state.visitor.affinityId = cookieParts[1];
      }
    }

    Cookies.remove(VISITOR_COOKIE_ID, {
      domain: state.beaconConfig.cookieDomain
    });
    Cookies.remove(VISITOR_COOKIE_ID, {
      domain: getCurrentDomainWithoutWWW(location.hostname)
    });
  };

  var convertClassicNamedCookie = function convertClassicNamedCookie(classicNamedCookie) {
    if (!classicNamedCookie || _typeof(classicNamedCookie) !== "object") {
      return;
    }

    if (classicNamedCookie.puid && typeof classicNamedCookie.puid === "string") {
      state.visitor.persistedUserId = classicNamedCookie.puid;
    }

    if (classicNamedCookie.paid && typeof classicNamedCookie.paid === "string") {
      state.visitor.persistedAccountId = classicNamedCookie.paid;
    }

    Cookies.remove(NAMED_COOKIE_ID_CLASSIC, {
      domain: state.beaconConfig.cookieDomain
    });
    Cookies.remove(NAMED_COOKIE_ID_CLASSIC, {
      domain: getCurrentDomainWithoutWWW(location.hostname)
    });
  };

  var handleClassicCookie = function handleClassicCookie(visitorCookie, classicNamedCookie) {
    convertClassicAnonymousCookie(visitorCookie);
    convertClassicNamedCookie(classicNamedCookie);
  };

  var classicCookieExists = function classicCookieExists(visitorCookie, classicNamedCookie) {
    return typeof visitorCookie === "string" && visitorCookie.length > 0 || classicNamedCookie != null && _typeof(classicNamedCookie) === "object";
  };

  var cookieExists = function cookieExists(visitorCookie) {
    return !!(visitorCookie && _typeof(visitorCookie) === "object" && Object.keys(visitorCookie).length > 0);
  };

  var loadVisitor = function loadVisitor() {
    var visitorCookie = Cookies.read(VISITOR_COOKIE_ID);
    var classicNamedCookie = Cookies.read(NAMED_COOKIE_ID_CLASSIC);

    if (!cookieExists(visitorCookie)) {
      if (classicCookieExists(visitorCookie, classicNamedCookie)) {
        handleClassicCookie(visitorCookie, classicNamedCookie);
        Logger.debug("Classic cookie detected with anonymousId: ".concat(getVisitor().uuid));
      } else {
        state.visitor.uuid = generateUuid();
        Logger.debug("Created new visitor record. anonymousId: ".concat(getVisitor().uuid));
      }
    } else {
      state.visitor = _objectSpread2({}, state.visitor, {}, parseVisitorCookie(visitorCookie));
      Logger.debug("Loaded visitor record from cookie: ".concat(JSON.stringify(getVisitor())));
    }

    var visitor = getVisitor();
    storeVisitor(visitor);
    return visitor;
  };

  var Signals = function Signals() {
    _classCallCheck(this, Signals);
  };
  Signals.onEventSend = new Signal();
  Signals.onStatSend = new Signal();
  Signals.onEventResponse = new Signal();
  Signals.onFireException = new Signal();
  Signals.onPageMatchStatusUpdated = new Signal();
  Signals.onInitSitemap = new Signal(); // for deprecated Evergage.addResponseListener

  Signals.onDeprecatedEventResponse = new Signal();

  Signals.unbindAll = function () {
    unbindMySignals(Signals);
  };

  // tslint:disable no-empty-interface forin
  /**
   * Registers an exception with Evergage server, viewable via the Event Stream.
   *
   * #### Basic usage example:
   * ```javascript
   * try {
   *     Evergage.sendEvent({ action: "Login" });
   * } catch(e) {
   *     Evergage.sendException(e, "Login");
   * }
   * ```
   *
   *
   * @param exception An Error object for the exception
   * @param errorSection A tag for categorizing the error
   * @param dontLogException Whether to send but silently not log the exception
   *
   */

  var sendException = function sendException(exception, errorSection, dontLogException) {
    Signals.onFireException.emit(exception, errorSection);
    Logger.warn('sendException', {
      event: event,
      errorSection: errorSection
    });
  };
  var CustomEvents = {
    OnEventResponse: "evergage:onEventResponse",
    OnEventSend: "evergage:onEventSend",
    OnStatSend: "evergage:onStatSend",
    OnException: "evergage:onException",
    OnTemplateDisplayEnd: "evergage:onTemplateDisplayEnd",
    OnPageMatchStatusUpdated: "evergage:onPageMatchStatusUpdated",
    OnInit: "evergage:onInit",
    OnInitSitemap: "evergage:onInitSitemap"
  };
  function setLoggingLevel(level) {
    Logger.setLoggingLevel(level);
  }
  function getLoggingLevel() {
    return Logger.getLoggingLevel();
  }
  /**
   * Used by the next-gen chrome and legacy chrome extensions
   */

  var getVersion = function getVersion() {
    return BEACON_VERSION;
  };
  var addResponseListener = function addResponseListener(listener) {
    Logger.warn("Evergage.addResponseListener is deprecated. Use the Evergage.CustomEvents.OnEventReponse event instead.");
    return Signals.onDeprecatedEventResponse.on(listener);
  }; // no-op, deprecated

  var addEventListener$1 = function addEventListener(listener) {
    Logger.warn("Evergage.addEventListener is deprecated. Use the Evergage.CustomEvents.OnEventSend event instead.");
    return null;
  };

  var MatchStatus;

  (function (MatchStatus) {
    MatchStatus["Pending"] = "pending";
    MatchStatus["Running"] = "running";
    MatchStatus["Selected"] = "selected";
    MatchStatus["Matched"] = "matched";
    MatchStatus["Rejected"] = "rejected";
  })(MatchStatus || (MatchStatus = {}));

  var DEFAULT_SETTINGS = {
    canonicalizeIds: false,
    runOnTranslatedPage: false,
    setDefaultListPrice: false,
    truncateTranslated: true
  };
  var SiteMapConfig = function SiteMapConfig(config) {
    _classCallCheck(this, SiteMapConfig);

    this.global = {};
    this.pageTypes = [];
    this.pageTypeDefault = {};
    this.settings = DEFAULT_SETTINGS;
    this.currentKey = null;

    if (config) {
      this.global = config.global || {};
      this.pageTypes = config.pageTypes || [];
      this.settings = _objectSpread2({}, DEFAULT_SETTINGS, {}, config.settings);
      this.currentKey = null;
    } else {
      this.global = {};
      this.pageTypes = [];
      this.settings = DEFAULT_SETTINGS;
      this.currentKey = null;
    }
  };

  // tslint:disable variable-name max-classes-per-file no-object-mutation
  var sitemapState = {
    result: {
      backgroundPage: null,
      currentPage: null,
      matchedConfig: null,
      matchStatus: null
    },
    config: {
      pageTypes: [],
      currentKey: null,
      settings: DEFAULT_SETTINGS
    },
    campaignResponses: []
  };

  'use strict';

  var has = Object.prototype.hasOwnProperty,
      undef;
  /**
   * Decode a URI encoded string.
   *
   * @param {String} input The URI encoded string.
   * @returns {String|Null} The decoded string.
   * @api private
   */

  function decode(input) {
    try {
      return decodeURIComponent(input.replace(/\+/g, ' '));
    } catch (e) {
      return null;
    }
  }
  /**
   * Attempts to encode a given input.
   *
   * @param {String} input The string that needs to be encoded.
   * @returns {String|Null} The encoded string.
   * @api private
   */


  function encode(input) {
    try {
      return encodeURIComponent(input);
    } catch (e) {
      return null;
    }
  }
  /**
   * Simple query string parser.
   *
   * @param {String} query The query string that needs to be parsed.
   * @returns {Object}
   * @api public
   */


  function querystring(query) {
    var parser = /([^=?&]+)=?([^&]*)/g,
        result = {},
        part;

    while (part = parser.exec(query)) {
      var key = decode(part[1]),
          value = decode(part[2]); //
      // Prevent overriding of existing properties. This ensures that build-in
      // methods like `toString` or __proto__ are not overriden by malicious
      // querystrings.
      //
      // In the case if failed decoding, we want to omit the key/value pairs
      // from the result.
      //

      if (key === null || value === null || key in result) continue;
      result[key] = value;
    }

    return result;
  }
  /**
   * Transform a query string to an object.
   *
   * @param {Object} obj Object that should be transformed.
   * @param {String} prefix Optional prefix.
   * @returns {String}
   * @api public
   */


  function querystringify(obj, prefix) {
    prefix = prefix || '';
    var pairs = [],
        value,
        key; //
    // Optionally prefix with a '?' if needed
    //

    if ('string' !== typeof prefix) prefix = '?';

    for (key in obj) {
      if (has.call(obj, key)) {
        value = obj[key]; //
        // Edge cases where we actually want to encode the value to an empty
        // string instead of the stringified value.
        //

        if (!value && (value === null || value === undef || isNaN(value))) {
          value = '';
        }

        key = encodeURIComponent(key);
        value = encodeURIComponent(value); //
        // If we failed to encode the strings, we should bail out as we don't
        // want to add invalid strings to the query.
        //

        if (key === null || value === null) continue;
        pairs.push(key + '=' + value);
      }
    }

    return pairs.length ? prefix + pairs.join('&') : '';
  } //
  // Expose the module.
  //


  var stringify = querystringify;
  var parse = querystring;
  var querystringify_1 = {
    stringify: stringify,
    parse: parse
  };

  var limitExceeded = false;
  var sentEvents = [];

  var eventWithinLimitTimeRange = function eventWithinLimitTimeRange(limitTimeRange, eventWithTime, now) {
    return now - eventWithTime.time < limitTimeRange;
  };

  var triggerLimitExceeded = function triggerLimitExceeded() {
    limitExceeded = true;
    return false;
  };

  var canSendEvent = function canSendEvent(actionName) {
    if (limitExceeded) {
      Logger.info('Event Rate Limiter previously triggered. Event sending disabled.');
      return false;
    }

    var now = Date.now();
    var globalCounter = 0;
    var perEventCounter = 0;
    var timeRangeMax = Math.max(state.beaconConfig.actionRateLimiterConfig.globalTimeRange, state.beaconConfig.actionRateLimiterConfig.perActionTimeRange);
    sentEvents.push({
      name: actionName,
      time: now
    }); // Actions in reverse chronological order, loop backwards to start with most recent.

    for (var index = sentEvents.length - 1; index >= 0; index--) {
      if (!eventWithinLimitTimeRange(timeRangeMax, sentEvents[index], now)) {
        sentEvents.splice(0, index + 1);
        break;
      }

      if (eventWithinLimitTimeRange(state.beaconConfig.actionRateLimiterConfig.globalTimeRange, sentEvents[index], now)) {
        globalCounter++;

        if (globalCounter > state.beaconConfig.actionRateLimiterConfig.globalLimit) {
          return triggerLimitExceeded();
        }
      }

      if (eventWithinLimitTimeRange(state.beaconConfig.actionRateLimiterConfig.perActionTimeRange, sentEvents[index], now)) {
        if (sentEvents[index].name === actionName) {
          perEventCounter++;

          if (perEventCounter > state.beaconConfig.actionRateLimiterConfig.perActionLimit) {
            return triggerLimitExceeded();
          }
        }
      }
    }

    return true;
  };

  /* MIT https://github.com/kenwheeler/cash */
  var doc = document,
      win = window,
      div = doc.createElement('div'),
      _Array$prototype = Array.prototype,
      filter = _Array$prototype.filter,
      indexOf = _Array$prototype.indexOf,
      map = _Array$prototype.map,
      push = _Array$prototype.push,
      reverse = _Array$prototype.reverse,
      slice = _Array$prototype.slice,
      some = _Array$prototype.some,
      splice = _Array$prototype.splice;
  var idRe = /^#[\w-]*$/,
      classRe = /^\.[\w-]*$/,
      htmlRe = /<.+>/,
      tagRe = /^\w+$/; // @require ./variables.ts

  function find(selector) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : doc;
    return !isDocument(context) && !isElement(context) ? [] : classRe.test(selector) ? context.getElementsByClassName(selector.slice(1)) : tagRe.test(selector) ? context.getElementsByTagName(selector) : context.querySelectorAll(selector);
  } // @require ./find.ts
  // @require ./variables.ts


  var Cash =
  /*#__PURE__*/
  function () {
    function Cash(selector) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : doc;

      _classCallCheck(this, Cash);

      if (!selector) return;
      if (isCash(selector)) return selector;
      var eles = selector;

      if (isString(selector)) {
        var ctx = isCash(context) ? context[0] : context;
        eles = idRe.test(selector) ? ctx.getElementById(selector.slice(1)) : htmlRe.test(selector) ? parseHTML(selector) : find(selector, ctx);
        if (!eles) return;
      } else if (isFunction$1(selector)) {
        return this.ready(selector); //FIXME: `fn.ready` is not included in `core`, but it's actually a core functionality
      }

      if (eles.nodeType || eles === win) eles = [eles];
      this.length = eles.length;

      for (var i = 0, l = this.length; i < l; i++) {
        this[i] = eles[i];
      }
    }

    _createClass(Cash, [{
      key: "init",
      value: function init(selector, context) {
        return new Cash(selector, context);
      }
    }]);

    return Cash;
  }();

  var cash = Cash.prototype.init;
  cash.fn = cash.prototype = Cash.prototype; // Ensuring that `cash () instanceof cash`

  Cash.prototype.length = 0;
  Cash.prototype.splice = splice; // Ensuring a cash collection gets printed as array-like in Chrome's devtools

  if (typeof Symbol === 'function') {
    Cash.prototype[Symbol['iterator']] = Array.prototype[Symbol['iterator']];
  }

  Cash.prototype.get = function (index) {
    if (index === undefined) return slice.call(this);
    return this[index < 0 ? index + this.length : index];
  };

  Cash.prototype.eq = function (index) {
    return cash(this.get(index));
  };

  Cash.prototype.first = function () {
    return this.eq(0);
  };

  Cash.prototype.last = function () {
    return this.eq(-1);
  };

  Cash.prototype.map = function (callback) {
    return cash(map.call(this, function (ele, i) {
      return callback.call(ele, i, ele);
    }));
  };

  Cash.prototype.slice = function () {
    return cash(slice.apply(this, arguments));
  }; // @require ./cash.ts


  var dashAlphaRe = /-([a-z])/g;

  function camelCaseReplace(match, letter) {
    return letter.toUpperCase();
  }

  function camelCase(str) {
    return str.replace(dashAlphaRe, camelCaseReplace);
  }

  cash.camelCase = camelCase;

  function each(arr, callback) {
    for (var i = 0, l = arr.length; i < l; i++) {
      if (callback.call(arr[i], i, arr[i]) === false) break;
    }
  }

  cash.each = each;

  Cash.prototype.each = function (callback) {
    each(this, callback);
    return this;
  };

  Cash.prototype.removeProp = function (prop) {
    return this.each(function (i, ele) {
      delete ele[prop];
    });
  }; // @require ./cash.ts


  function extend(target) {
    for (var _len = arguments.length, objs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      objs[_key - 1] = arguments[_key];
    }

    var args = arguments,
        length = args.length;

    for (var i = length < 2 ? 0 : 1; i < length; i++) {
      for (var key in args[i]) {
        target[key] = args[i][key];
      }
    }

    return target;
  }

  Cash.prototype.extend = function (plugins) {
    return extend(cash.fn, plugins);
  };

  cash.extend = extend;
  cash.guid = 1; // @require ./cash.ts

  function matches(ele, selector) {
    var matches = ele && (ele['matches'] || ele['webkitMatchesSelector'] || ele['mozMatchesSelector'] || ele['msMatchesSelector'] || ele['oMatchesSelector']);
    // console.log('ele', ele);
    // console.log('selector', selector);
    // console.log('matches', matches);
    return !!matches && matches.call(ele, selector);
  }

  cash.matches = matches; // @require ./variables.ts

  function pluck(arr, prop, deep) {
    var plucked = [];

    for (var i = 0, l = arr.length; i < l; i++) {
      var _val = arr[i][prop];

      while (_val != null) {
        plucked.push(_val);
        if (!deep) break;
        _val = _val[prop];
      }
    }

    return plucked;
  } // @require ./cash.ts


  function isCash(x) {
    return x instanceof Cash;
  }

  function isWindow(x) {
    return !!x && x === x.window;
  }

  function isDocument(x) {
    return !!x && x.nodeType === 9;
  }

  function isElement(x) {
    return !!x && x.nodeType === 1;
  }

  function isFunction$1(x) {
    return typeof x === 'function';
  }

  function isString(x) {
    return typeof x === 'string';
  }

  function isNumeric(x) {
    return !isNaN(parseFloat(x)) && isFinite(x);
  }

  var isArray = Array.isArray;
  cash.isWindow = isWindow;
  cash.isFunction = isFunction$1;
  cash.isString = isString;
  cash.isNumeric = isNumeric;
  cash.isArray = isArray;

  Cash.prototype.prop = function (prop, value) {
    if (!prop) return;

    if (isString(prop)) {
      if (arguments.length < 2) return this[0] && this[0][prop];
      return this.each(function (i, ele) {
        ele[prop] = value;
      });
    }

    for (var key in prop) {
      this.prop(key, prop[key]);
    }

    return this;
  }; // @require ./matches.ts
  // @require ./type_checking.ts


  function getCompareFunction(comparator) {
    return isString(comparator) ? function (i, ele) {
      return matches(ele, comparator);
    } : isFunction$1(comparator) ? comparator : isCash(comparator) ? function (i, ele) {
      return comparator.is(ele);
    } : function (i, ele) {
      return ele === comparator;
    };
  }

  Cash.prototype.filter = function (comparator) {
    if (!comparator) return cash();
    var compare = getCompareFunction(comparator);
    return cash(filter.call(this, function (ele, i) {
      return compare.call(ele, i, ele);
    }));
  }; // @require collection/filter.ts


  function filtered(collection, comparator) {
    return !comparator || !collection.length ? collection : collection.filter(comparator);
  } // @require ./type_checking.ts


  var splitValuesRe = /\S+/g;

  function getSplitValues(str) {
    return isString(str) ? str.match(splitValuesRe) || [] : [];
  }

  Cash.prototype.hasClass = function (cls) {
    return cls && some.call(this, function (ele) {
      return ele.classList.contains(cls);
    });
  };

  Cash.prototype.removeAttr = function (attr) {
    var attrs = getSplitValues(attr);
    if (!attrs.length) return this;
    return this.each(function (i, ele) {
      each(attrs, function (i, a) {
        ele.removeAttribute(a);
      });
    });
  };

  function attr(attr, value) {
    if (!attr) return;

    if (isString(attr)) {
      if (arguments.length < 2) {
        if (!this[0]) return;

        var _value = this[0].getAttribute(attr);

        return _value === null ? undefined : _value;
      }

      if (value === undefined) return this;
      if (value === null) return this.removeAttr(attr);
      return this.each(function (i, ele) {
        ele.setAttribute(attr, value);
      });
    }

    for (var key in attr) {
      this.attr(key, attr[key]);
    }

    return this;
  }

  Cash.prototype.attr = attr;

  Cash.prototype.toggleClass = function (cls, force) {
    var classes = getSplitValues(cls),
        isForce = force !== undefined;
    if (!classes.length) return this;
    return this.each(function (i, ele) {
      each(classes, function (i, c) {
        if (isForce) {
          force ? ele.classList.add(c) : ele.classList.remove(c);
        } else {
          ele.classList.toggle(c);
        }
      });
    });
  };

  Cash.prototype.addClass = function (cls) {
    return this.toggleClass(cls, true);
  };

  Cash.prototype.removeClass = function (cls) {
    return !arguments.length ? this.attr('class', '') : this.toggleClass(cls, false);
  }; // @optional ./add_class.ts
  // @optional ./attr.ts
  // @optional ./has_class.ts
  // @optional ./prop.ts
  // @optional ./remove_attr.ts
  // @optional ./remove_class.ts
  // @optional ./remove_prop.ts
  // @optional ./toggle_class.ts
  // @require ./cash.ts
  // @require ./variables


  function unique(arr) {
    return arr.length > 1 ? filter.call(arr, function (item, index, self) {
      return indexOf.call(self, item) === index;
    }) : arr;
  }

  cash.unique = unique;

  Cash.prototype.add = function (selector, context) {
    return cash(unique(this.get().concat(cash(selector, context).get())));
  }; // @require core/type_checking.ts
  // @require core/variables.ts


  function computeStyle(ele, prop, isVariable) {
    if (!isElement(ele) || !prop) return;
    var style = win.getComputedStyle(ele, null);
    return prop ? isVariable ? style.getPropertyValue(prop) || undefined : style[prop] : style;
  } // @require ./compute_style.ts


  function computeStyleInt(ele, prop) {
    return parseInt(computeStyle(ele, prop), 10) || 0;
  }

  var cssVariableRe = /^--/; // @require ./variables.ts

  function isCSSVariable(prop) {
    return cssVariableRe.test(prop);
  } // @require core/camel_case.ts
  // @require core/cash.ts
  // @require core/each.ts
  // @require core/variables.ts
  // @require ./is_css_variable.ts


  var prefixedProps = {},
      style = div.style,
      vendorsPrefixes = ['webkit', 'moz', 'ms', 'o'];

  function getPrefixedProp(prop) {
    var isVariable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : isCSSVariable(prop);
    if (isVariable) return prop;

    if (!prefixedProps[prop]) {
      var propCC = camelCase(prop),
          propUC = "".concat(propCC.charAt(0).toUpperCase()).concat(propCC.slice(1)),
          props = "".concat(propCC, " ").concat(vendorsPrefixes.join("".concat(propUC, " "))).concat(propUC).split(' ');
      each(props, function (i, p) {
        if (p in style) {
          prefixedProps[prop] = p;
          return false;
        }
      });
    }

    return prefixedProps[prop];
  }

  ;
  cash.prefixedProp = getPrefixedProp; // @require core/type_checking.ts
  // @require ./is_css_variable.ts

  var numericProps = {
    animationIterationCount: true,
    columnCount: true,
    flexGrow: true,
    flexShrink: true,
    fontWeight: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    widows: true,
    zIndex: true
  };

  function getSuffixedValue(prop, value) {
    var isVariable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : isCSSVariable(prop);
    return !isVariable && !numericProps[prop] && isNumeric(value) ? "".concat(value, "px") : value;
  }

  function css(prop, value) {
    if (isString(prop)) {
      var isVariable = isCSSVariable(prop);
      prop = getPrefixedProp(prop, isVariable);
      if (arguments.length < 2) return this[0] && computeStyle(this[0], prop, isVariable);
      if (!prop) return this;
      value = getSuffixedValue(prop, value, isVariable);
      return this.each(function (i, ele) {
        if (!isElement(ele)) return;

        if (isVariable) {
          ele.style.setProperty(prop, value); //TSC
        } else {
          ele.style[prop] = value; //TSC
        }
      });
    }

    for (var key in prop) {
      this.css(key, prop[key]);
    }

    return this;
  }

  ;
  Cash.prototype.css = css; // @optional ./css.ts
  // @require core/camel_case.ts

  function getData(ele, key) {
    var value = ele.dataset ? ele.dataset[key] || ele.dataset[camelCase(key)] : ele.getAttribute("data-".concat(key));

    try {
      return JSON.parse(value);
    } catch (_a) {}

    return value;
  } // @require core/camel_case.ts


  function setData(ele, key, value) {
    try {
      value = JSON.stringify(value);
    } catch (_a) {}

    if (ele.dataset) {
      ele.dataset[camelCase(key)] = value;
    } else {
      ele.setAttribute("data-".concat(key), value);
    }
  }

  var dataAttributeRe = /^data-(.+)/;

  function data(name, value) {
    var _this = this;

    if (!name) {
      if (!this[0]) return;
      var datas = {};
      each(this[0].attributes, function (i, attr) {
        var match = attr.name.match(dataAttributeRe);
        if (!match) return;
        datas[match[1]] = _this.data(match[1]);
      });
      return datas;
    }

    if (isString(name)) {
      if (value === undefined) return this[0] && getData(this[0], name);
      return this.each(function (i, ele) {
        return setData(ele, name, value);
      });
    }

    for (var key in name) {
      this.data(key, name[key]);
    }

    return this;
  }

  Cash.prototype.data = data; // @optional ./data.ts
  // @require css/helpers/compute_style_int.ts

  function getExtraSpace(ele, xAxis) {
    return computeStyleInt(ele, "border".concat(xAxis ? 'Left' : 'Top', "Width")) + computeStyleInt(ele, "padding".concat(xAxis ? 'Left' : 'Top')) + computeStyleInt(ele, "padding".concat(xAxis ? 'Right' : 'Bottom')) + computeStyleInt(ele, "border".concat(xAxis ? 'Right' : 'Bottom', "Width"));
  }

  each(['Width', 'Height'], function (i, prop) {
    Cash.prototype["inner".concat(prop)] = function () {
      if (!this[0]) return;
      if (isWindow(this[0])) return win["inner".concat(prop)];
      return this[0]["client".concat(prop)];
    };
  });
  each(['width', 'height'], function (index, prop) {
    Cash.prototype[prop] = function (value) {
      if (!this[0]) return value === undefined ? undefined : this;

      if (!arguments.length) {
        if (isWindow(this[0])) return this[0][camelCase("outer-".concat(prop))];
        return this[0].getBoundingClientRect()[prop] - getExtraSpace(this[0], !index);
      }

      var valueNumber = parseInt(value, 10); //TSC

      return this.each(function (i, ele) {
        if (!isElement(ele)) return;
        var boxSizing = computeStyle(ele, 'boxSizing');
        ele.style[prop] = getSuffixedValue(prop, valueNumber + (boxSizing === 'border-box' ? getExtraSpace(ele, !index) : 0));
      });
    };
  });
  each(['Width', 'Height'], function (index, prop) {
    Cash.prototype["outer".concat(prop)] = function (includeMargins) {
      if (!this[0]) return;
      if (isWindow(this[0])) return win["outer".concat(prop)];
      return this[0]["offset".concat(prop)] + (includeMargins ? computeStyleInt(this[0], "margin".concat(!index ? 'Left' : 'Top')) + computeStyleInt(this[0], "margin".concat(!index ? 'Right' : 'Bottom')) : 0);
    };
  }); // @optional ./inner.ts
  // @optional ./normal.ts
  // @optional ./outer.ts
  // @require css/helpers/compute_style.ts

  var defaultDisplay = {};

  function getDefaultDisplay(tagName) {
    if (defaultDisplay[tagName]) return defaultDisplay[tagName];
    var ele = doc.createElement(tagName);
    doc.body.appendChild(ele);
    var display = computeStyle(ele, 'display');
    doc.body.removeChild(ele);
    return defaultDisplay[tagName] = display !== 'none' ? display : 'block';
  } // @require css/helpers/compute_style.ts


  function isHidden(ele) {
    return computeStyle(ele, 'display') === 'none';
  }

  Cash.prototype.toggle = function (force) {
    return this.each(function (i, ele) {
      var show = force !== undefined ? force : isHidden(ele);

      if (show) {
        ele.style.display = '';

        if (isHidden(ele)) {
          ele.style.display = getDefaultDisplay(ele.tagName);
        }
      } else {
        ele.style.display = 'none';
      }
    });
  };

  Cash.prototype.hide = function () {
    return this.toggle(false);
  };

  Cash.prototype.show = function () {
    return this.toggle(true);
  }; // @optional ./hide.ts
  // @optional ./show.ts
  // @optional ./toggle.ts


  function hasNamespaces(ns1, ns2) {
    return !ns2 || !some.call(ns2, function (ns) {
      return ns1.indexOf(ns) < 0;
    });
  }

  var eventsNamespace = '__cashEvents',
      eventsNamespacesSeparator = '.',
      eventsFocus = {
    focus: 'focusin',
    blur: 'focusout'
  },
      eventsHover = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  },
      eventsMouseRe = /^(?:mouse|pointer|contextmenu|drag|drop|click|dblclick)/i; // @require ./variables.ts

  function getEventNameBubbling(name) {
    return eventsHover[name] || eventsFocus[name] || name;
  } // @require ./variables.ts


  function getEventsCache(ele) {
    return ele[eventsNamespace] = ele[eventsNamespace] || {};
  } // @require core/guid.ts
  // @require events/helpers/get_events_cache.ts


  function addEvent(ele, name, namespaces, selector, callback) {
    callback.guid = callback.guid || cash.guid++;
    var eventCache = getEventsCache(ele);
    eventCache[name] = eventCache[name] || [];
    eventCache[name].push([namespaces, selector, callback]);
    ele.addEventListener(name, callback);
  } // @require ./variables.ts


  function parseEventName(eventName) {
    var parts = eventName.split(eventsNamespacesSeparator);
    return [parts[0], parts.slice(1).sort()]; // [name, namespace[]]
  } // @require ./get_events_cache.ts
  // @require ./has_namespaces.ts
  // @require ./parse_event_name.ts


  function removeEvent(ele, name, namespaces, selector, callback) {
    var cache = getEventsCache(ele);

    if (!name) {
      for (name in cache) {
        removeEvent(ele, name, namespaces, selector, callback);
      }

      delete ele[eventsNamespace];
    } else if (cache[name]) {
      cache[name] = cache[name].filter(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 3),
            ns = _ref2[0],
            sel = _ref2[1],
            cb = _ref2[2];

        if (callback && cb.guid !== callback.guid || !hasNamespaces(ns, namespaces) || selector && selector !== sel) return true;
        ele.removeEventListener(name, cb);
      });
    }
  }

  Cash.prototype.off = function (eventFullName, selector, callback) {
    var _this2 = this;

    if (eventFullName === undefined) {
      this.each(function (i, ele) {
        return removeEvent(ele);
      });
    } else {
      if (isFunction$1(selector)) {
        callback = selector;
        selector = '';
      }

      each(getSplitValues(eventFullName), function (i, eventFullName) {
        var _parseEventName = parseEventName(getEventNameBubbling(eventFullName)),
            _parseEventName2 = _slicedToArray(_parseEventName, 2),
            name = _parseEventName2[0],
            namespaces = _parseEventName2[1];

        _this2.each(function (i, ele) {
          return removeEvent(ele, name, namespaces, selector, callback);
        }); //TSC

      });
    }

    return this;
  };

  function on(eventFullName, selector, callback, _one) {
    var _this3 = this;

    if (!isString(eventFullName)) {
      for (var key in eventFullName) {
        this.on(key, selector, eventFullName[key]);
      }

      return this;
    }

    if (isFunction$1(selector)) {
      callback = selector;
      selector = '';
    }

    each(getSplitValues(eventFullName), function (i, eventFullName) {
      var _parseEventName3 = parseEventName(getEventNameBubbling(eventFullName)),
          _parseEventName4 = _slicedToArray(_parseEventName3, 2),
          name = _parseEventName4[0],
          namespaces = _parseEventName4[1];

      _this3.each(function (i, ele) {
        var finalCallback = function finalCallback(event) {
          if (event.namespace && !hasNamespaces(namespaces, event.namespace.split(eventsNamespacesSeparator))) return;
          var thisArg = ele;

          if (selector) {
            var target = event.target;

            while (!matches(target, selector)) {
              //TSC
              if (target === ele) return;
              target = target.parentNode;
              if (!target) return;
            }

            thisArg = target;
            event.__delegate = true;
          }

          if (event.__delegate) {
            Object.defineProperty(event, 'currentTarget', {
              configurable: true,
              get: function get() {
                return thisArg;
              }
            });
          }

          var returnValue = callback.call(thisArg, event, event.data); //TSC

          if (_one) {
            removeEvent(ele, name, namespaces, selector, finalCallback); //TSC
          }

          if (returnValue === false) {
            event.preventDefault();
            event.stopPropagation();
          }
        };

        finalCallback.guid = callback['guid'] = callback['guid'] || cash.guid++; //TSC

        addEvent(ele, name, namespaces, selector, finalCallback); //TSC
      });
    });
    return this;
  }

  Cash.prototype.on = on;

  function one(eventFullName, selector, callback) {
    return this.on(eventFullName, selector, callback, true); //TSC
  }

  ;
  Cash.prototype.one = one;

  Cash.prototype.ready = function (callback) {
    var finalCallback = function finalCallback() {
      return callback(cash);
    };

    if (doc.readyState !== 'loading') {
      setTimeout(finalCallback);
    } else {
      doc.addEventListener('DOMContentLoaded', finalCallback);
    }

    return this;
  };

  Cash.prototype.trigger = function (eventFullName, data) {
    var evt;

    if (isString(eventFullName)) {
      var _parseEventName5 = parseEventName(eventFullName),
          _parseEventName6 = _slicedToArray(_parseEventName5, 2),
          name = _parseEventName6[0],
          namespaces = _parseEventName6[1],
          type = eventsMouseRe.test(name) ? 'MouseEvents' : 'HTMLEvents';

      evt = doc.createEvent(type);
      evt.initEvent(name, true, true);
      evt.namespace = namespaces.join(eventsNamespacesSeparator);
    } else {
      evt = eventFullName;
    }

    evt.data = data;
    var isEventFocus = evt.type in eventsFocus;
    return this.each(function (i, ele) {
      if (isEventFocus && isFunction$1(ele[evt.type])) {
        ele[evt.type]();
      } else {
        ele.dispatchEvent(evt);
      }
    });
  }; // @optional ./off.ts
  // @optional ./on.ts
  // @optional ./one.ts
  // @optional ./ready.ts
  // @optional ./trigger.ts
  // @require core/pluck.ts
  // @require core/variables.ts


  function getValue(ele) {
    if (ele.multiple) return pluck(filter.call(ele.options, function (option) {
      return option.selected && !option.disabled && !option.parentNode.disabled;
    }), 'value');
    return ele.value || '';
  }

  var queryEncodeSpaceRe = /%20/g;

  function queryEncode(prop, value) {
    return "&".concat(encodeURIComponent(prop), "=").concat(encodeURIComponent(value).replace(queryEncodeSpaceRe, '+'));
  } // @require core/cash.ts
  // @require core/each.ts
  // @require core/type_checking.ts
  // @require ./helpers/get_value.ts
  // @require ./helpers/query_encode.ts


  var skippableRe = /file|reset|submit|button|image/i,
      checkableRe = /radio|checkbox/i;

  Cash.prototype.serialize = function () {
    var query = '';
    this.each(function (i, ele) {
      each(ele.elements || [ele], function (i, ele) {
        if (ele.disabled || !ele.name || ele.tagName === 'FIELDSET' || skippableRe.test(ele.type) || checkableRe.test(ele.type) && !ele.checked) return;
        var value = getValue(ele);
        if (value === undefined) return;
        var values = isArray(value) ? value : [value];
        each(values, function (i, value) {
          query += queryEncode(ele.name, value);
        });
      });
    });
    return query.substr(1);
  };

  function val(value) {
    if (value === undefined) return this[0] && getValue(this[0]);
    return this.each(function (i, ele) {
      if (ele.tagName === 'SELECT') {
        var eleValue = isArray(value) ? value : value === null ? [] : [value];
        each(ele.options, function (i, option) {
          option.selected = eleValue.indexOf(option.value) >= 0;
        });
      } else {
        ele.value = value === null ? '' : value;
      }
    });
  }

  Cash.prototype.val = val;

  Cash.prototype.clone = function () {
    return this.map(function (i, ele) {
      return ele.cloneNode(true);
    });
  };

  Cash.prototype.detach = function () {
    return this.each(function (i, ele) {
      if (ele.parentNode) {
        ele.parentNode.removeChild(ele);
      }
    });
  }; // @require ./cash.ts
  // @require ./variables.ts
  // @require ./type_checking.ts
  // @require collection/get.ts
  // @require manipulation/detach.ts


  var fragmentRe = /^\s*<(\w+)[^>]*>/,
      singleTagRe = /^\s*<(\w+)\s*\/?>(?:<\/\1>)?\s*$/;
  var containers;

  function initContainers() {
    if (containers) return;
    var table = doc.createElement('table'),
        tr = doc.createElement('tr');
    containers = {
      '*': div,
      tr: doc.createElement('tbody'),
      td: tr,
      th: tr,
      thead: table,
      tbody: table,
      tfoot: table
    };
  }

  function parseHTML(html) {
    initContainers();
    if (!isString(html)) return [];
    if (singleTagRe.test(html)) return [doc.createElement(RegExp.$1)];
    var fragment = fragmentRe.test(html) && RegExp.$1,
        container = containers[fragment] || containers['*'];
    container.innerHTML = html;
    return cash(container.childNodes).detach().get();
  }

  cash.parseHTML = parseHTML;

  Cash.prototype.empty = function () {
    return this.each(function (i, ele) {
      while (ele.firstChild) {
        ele.removeChild(ele.firstChild);
      }
    });
  };

  function html(html) {
    if (html === undefined) return this[0] && this[0].innerHTML;
    return this.each(function (i, ele) {
      ele.innerHTML = html;
    });
  }

  Cash.prototype.html = html;

  Cash.prototype.remove = function () {
    return this.detach().off();
  };

  function text(text) {
    if (text === undefined) return this[0] ? this[0].textContent : '';
    return this.each(function (i, ele) {
      ele.textContent = text;
    });
  }

  ;
  Cash.prototype.text = text;

  Cash.prototype.unwrap = function () {
    this.parent().each(function (i, ele) {
      var $ele = cash(ele);
      $ele.replaceWith($ele.children());
    });
    return this;
  }; // @require core/cash.ts
  // @require core/variables.ts


  var docEle = doc.documentElement;

  Cash.prototype.offset = function () {
    var ele = this[0];
    if (!ele) return;
    var rect = ele.getBoundingClientRect();
    return {
      top: rect.top + win.pageYOffset - docEle.clientTop,
      left: rect.left + win.pageXOffset - docEle.clientLeft
    };
  };

  Cash.prototype.offsetParent = function () {
    return cash(this[0] && this[0].offsetParent);
  };

  Cash.prototype.position = function () {
    var ele = this[0];
    if (!ele) return;
    return {
      left: ele.offsetLeft,
      top: ele.offsetTop
    };
  };

  Cash.prototype.children = function (comparator) {
    var result = [];
    this.each(function (i, ele) {
      push.apply(result, ele.children);
    });
    return filtered(cash(unique(result)), comparator);
  };

  Cash.prototype.contents = function () {
    var result = [];
    this.each(function (i, ele) {
      push.apply(result, ele.tagName === 'IFRAME' ? [ele.contentDocument] : ele.childNodes);
    });
    return cash(unique(result));
  };

  Cash.prototype.find = function (selector) {
    var result = [];

    for (var i = 0, l = this.length; i < l; i++) {
      var found = find(selector, this[i]);

      if (found.length) {
        push.apply(result, found);
      }
    }

    return cash(unique(result));
  }; // @require collection/filter.ts
  // @require traversal/find.ts


  var scriptTypeRe = /^$|^module$|\/(?:java|ecma)script/i,
      HTMLCDATARe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function evalScripts(node) {
    var collection = cash(node);
    collection.filter('script').add(collection.find('script')).each(function (i, ele) {
      if (!ele.src && scriptTypeRe.test(ele.type)) {
        // The script type is supported
        if (ele.ownerDocument.documentElement.contains(ele)) {
          // The element is attached to the DOM // Using `documentElement` for broader browser support
          eval(ele.textContent.replace(HTMLCDATARe, ''));
        }
      }
    });
  } // @require ./eval_scripts.ts


  function insertElement(anchor, child, prepend, prependTarget) {
    if (prepend) {
      anchor.insertBefore(child, prependTarget);
    } else {
      anchor.appendChild(child);
    }

    evalScripts(child);
  } // @require core/each.ts
  // @require core/type_checking.ts
  // @require ./insert_element.ts


  function insertContent(parent, child, prepend) {
    each(parent, function (index, parentEle) {
      each(child, function (i, childEle) {
        insertElement(parentEle, !index ? childEle : childEle.cloneNode(true), prepend, prepend && parentEle.firstChild);
      });
    });
  }

  Cash.prototype.append = function () {
    var _this4 = this;

    each(arguments, function (i, selector) {
      insertContent(_this4, cash(selector));
    });
    return this;
  };

  Cash.prototype.appendTo = function (selector) {
    insertContent(cash(selector), this);
    return this;
  };

  Cash.prototype.insertAfter = function (selector) {
    var _this5 = this;

    cash(selector).each(function (index, ele) {
      var parent = ele.parentNode;

      if (parent) {
        _this5.each(function (i, e) {
          insertElement(parent, !index ? e : e.cloneNode(true), true, ele.nextSibling);
        });
      }
    });
    return this;
  };

  Cash.prototype.after = function () {
    var _this6 = this;

    each(reverse.apply(arguments), function (i, selector) {
      reverse.apply(cash(selector).slice()).insertAfter(_this6);
    });
    return this;
  };

  Cash.prototype.insertBefore = function (selector) {
    var _this7 = this;

    cash(selector).each(function (index, ele) {
      var parent = ele.parentNode;

      if (parent) {
        _this7.each(function (i, e) {
          insertElement(parent, !index ? e : e.cloneNode(true), true, ele);
        });
      }
    });
    return this;
  };

  Cash.prototype.before = function () {
    var _this8 = this;

    each(arguments, function (i, selector) {
      cash(selector).insertBefore(_this8);
    });
    return this;
  };

  Cash.prototype.prepend = function () {
    var _this9 = this;

    each(arguments, function (i, selector) {
      insertContent(_this9, cash(selector), true);
    });
    return this;
  };

  Cash.prototype.prependTo = function (selector) {
    insertContent(cash(selector), reverse.apply(this.slice()), true);
    return this;
  };

  Cash.prototype.replaceWith = function (selector) {
    return this.before(selector).remove();
  };

  Cash.prototype.replaceAll = function (selector) {
    cash(selector).replaceWith(this);
    return this;
  };

  Cash.prototype.wrapAll = function (selector) {
    if (this[0]) {
      var structure = cash(selector);
      this.first().before(structure);
      var wrapper = structure[0];

      while (wrapper.children.length) {
        wrapper = wrapper.firstElementChild;
      }

      this.appendTo(wrapper);
    }

    return this;
  };

  Cash.prototype.wrap = function (selector) {
    return this.each(function (index, ele) {
      var wrapper = cash(selector)[0];
      cash(ele).wrapAll(!index ? wrapper : wrapper.cloneNode(true));
    });
  };

  Cash.prototype.wrapInner = function (selector) {
    return this.each(function (i, ele) {
      var $ele = cash(ele),
          contents = $ele.contents();
      contents.length ? contents.wrapAll(selector) : $ele.append(selector);
    });
  };

  Cash.prototype.has = function (selector) {
    var comparator = isString(selector) ? function (i, ele) {
      return !!find(selector, ele).length;
    } : function (i, ele) {
      return ele.contains(selector);
    };
    return this.filter(comparator);
  };

  Cash.prototype.is = function (comparator) {
    if (!comparator || !this[0]) return false;
    var compare = getCompareFunction(comparator);
    var check = false;
    this.each(function (i, ele) {
      check = compare.call(ele, i, ele);
      return !check;
    });
    return check;
  };

  Cash.prototype.next = function (comparator, _all) {
    return filtered(cash(unique(pluck(this, 'nextElementSibling', _all))), comparator);
  };

  Cash.prototype.nextAll = function (comparator) {
    return this.next(comparator, true);
  };

  Cash.prototype.not = function (comparator) {
    if (!comparator || !this[0]) return this;
    var compare = getCompareFunction(comparator);
    return this.filter(function (i, ele) {
      return !compare.call(ele, i, ele);
    });
  };

  Cash.prototype.parent = function (comparator) {
    return filtered(cash(unique(pluck(this, 'parentNode'))), comparator);
  };

  Cash.prototype.index = function (selector) {
    var child = selector ? cash(selector)[0] : this[0],
        collection = selector ? this : cash(child).parent().children();
    return indexOf.call(collection, child);
  };

  Cash.prototype.closest = function (comparator) {
    if (!comparator || !this[0]) return cash();
    var filtered = this.filter(comparator);
    if (filtered.length) return filtered;
    return this.parent().closest(comparator);
  };

  Cash.prototype.parents = function (comparator) {
    return filtered(cash(unique(pluck(this, 'parentElement', true))), comparator);
  };

  Cash.prototype.prev = function (comparator, _all) {
    return filtered(cash(unique(pluck(this, 'previousElementSibling', _all))), comparator);
  };

  Cash.prototype.prevAll = function (comparator) {
    return this.prev(comparator, true);
  };

  Cash.prototype.siblings = function (comparator) {
    var result = [];
    this.each(function (i, ele) {
      push.apply(result, cash(ele).parent().children(function (ci, child) {
        return child !== ele;
      }));
    });
    return filtered(cash(unique(result)), comparator);
  }; // @optional ./children.ts

  var getPathnameFromLocation = function getPathnameFromLocation(location) {
    if (!location) {
      return '';
    }

    return location.pathname;
  };

  var getPathname = function getPathname(url) {
    if (!url) {
      return '';
    }

    return getPathnameFromLocation(urlParse(url));
  };

  var getParameterByName = function getParameterByName(name, url) {
    var queryString = typeof url === "undefined" ? location.search : url;
    var parsed = parse(queryString);
    return parsed[name] || '';
  };

  var extractFirstGroup = function extractFirstGroup(regex, str) {
    var matcher = regex.exec(str);

    if (matcher && matcher.length === 2) {
      return matcher[1];
    } else {
      return null;
    }
  };

  var getLastPathComponent = function getLastPathComponent(url) {
    return extractFirstGroup(/[/]?([^/]*)[/]?$/, getPathname(url));
  };

  var qualifyUrl = function qualifyUrl(unqualified) {
    if (typeof unqualified !== 'string' || unqualified.trim() === '') {
      return null;
    }

    var parser = urlParse(unqualified); // get qualified url

    return parser.href;
  };

  var removeQueryString = function removeQueryString(url) {
    if (!url) {
      return '';
    }

    var parser = urlParse(url);
    var pathname = getPathnameFromLocation(parser);
    var isHttpOrHttpsUri = parser.protocol === 'http:' && parser.port === '80' || parser.protocol === 'https:' && parser.port === '443';
    var host = isHttpOrHttpsUri ? parser.hostname : parser.host;
    return [parser.protocol, '//', host, pathname].join('');
  };

  var getLastPathComponentWithoutExtension = function getLastPathComponentWithoutExtension(url) {
    var last = getLastPathComponent(qualifyUrl(url));
    var indexOfDot = last.lastIndexOf('.');

    if (indexOfDot >= 0) {
      return last.substring(0, indexOfDot);
    } else {
      return last;
    }
  };

  var getUtagFirstForField = function getUtagFirstForField(fieldName) {
    var utagData = window.utag_data;

    if (utagData && utagData[fieldName] && utagData[fieldName].length >= 0) {
      if (Array.isArray(utagData[fieldName])) {
        return utagData[fieldName][0];
      } else {
        return utagData[fieldName];
      }
    }
  };

  var getFloatValue = function getFloatValue(text) {
    if (text && typeof text === 'string') {
      var asFloat = parseFloat(text.replace(/[^0-9.]+/g, ''));

      if (isNaN(asFloat)) {
        return null;
      } else {
        return asFloat;
      }
    } else {
      return null;
    }
  };

  var getIntegerValue = function getIntegerValue(text) {
    if (text && typeof text === 'string') {
      var asInt = parseInt(text.trim().replace(/[^0-9.]+/g, ''), 10);

      if (isNaN(asInt)) {
        return null;
      } else {
        return asInt;
      }
    } else {
      return null;
    }
  };

  var buildLineItemFromPageState = function buildLineItemFromPageState(quantitySelector) {
    if (sitemapState.result.currentPage && sitemapState.result.currentPage.catalog) {
      var pageData = sitemapState.result.currentPage.catalog[exports.ItemType.Product];

      if (!pageData) {
        return null;
      }

      return {
        _id: pageData._id,
        price: pageData.price,
        quantity: getFloatValue(cash(quantitySelector).val())
      };
    }
  };

  var getValueFromNestedObject = function getValueFromNestedObject(path, obj) {
    var cur = obj || window;
    var elems = path.split('.');
    var match;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = elems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var elem = _step.value;
        match = /(\w+)\[([0-9]+)\]/.exec(elem);

        if (cur[elem]) {
          cur = cur[elem];
        } else if (match) {
          if (cur[match[1]]) {
            cur = cur[match[1]][parseInt(match[2], 10)];

            if (!cur) {
              return null;
            }
          }
        } else {
          return null;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return cur;
  };

  var cookie = js_cookie;
  var util = {
    extractFirstGroup: extractFirstGroup,
    getLastPathComponent: getLastPathComponent,
    getLastPathComponentWithoutExtension: getLastPathComponentWithoutExtension,
    getParameterByName: getParameterByName,
    getPathname: getPathname,
    qualifyUrl: qualifyUrl,
    removeQueryString: removeQueryString,
    getFloatValue: getFloatValue,
    getIntegerValue: getIntegerValue,
    getUtagFirstForField: getUtagFirstForField,
    getValueFromNestedObject: getValueFromNestedObject,
    buildLineItemFromPageState: buildLineItemFromPageState,
    cookie: cookie
  };

  var OneWayReceiver =
  /*#__PURE__*/
  function () {
    function OneWayReceiver(baseURL) {
      _classCallCheck(this, OneWayReceiver);

      this.baseURL = baseURL;
    }

    _createClass(OneWayReceiver, [{
      key: "send",
      value: function send(params) {
        prepareParamValues(params);
        var url = this.baseURL + '?' + stringify(params);

        if (navigator && navigator.sendBeacon) {
          var blob = new Blob([], {
            type: 'application/x-www-form-urlencoded'
          });
          return navigator.sendBeacon(url, blob);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.send();
        }
      }
    }]);

    return OneWayReceiver;
  }();

  var ErrorReceiver =
  /*#__PURE__*/
  function (_OneWayReceiver) {
    _inherits(ErrorReceiver, _OneWayReceiver);

    function ErrorReceiver(baseUrl) {
      var _this;

      _classCallCheck(this, ErrorReceiver);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ErrorReceiver).call(this, baseUrl));
      _this.numberOfEventsSent = 0;
      return _this;
    }

    _createClass(ErrorReceiver, [{
      key: "send",
      value: function send(params) {
        if (this.numberOfEventsSent < ERROR_EVENT_LIMIT) {
          this.numberOfEventsSent++;
          return _get(_getPrototypeOf(ErrorReceiver.prototype), "send", this).call(this, params);
        }
      }
    }]);

    return ErrorReceiver;
  }(OneWayReceiver);

  var EventReceiver =
  /*#__PURE__*/
  function () {
    function EventReceiver(baseURL) {
      _classCallCheck(this, EventReceiver);

      this.baseURL = baseURL;
    }

    _createClass(EventReceiver, [{
      key: "send",
      value: function send(payload) {
        var _this2 = this;

        // prepareParamValues(params); TODO: do we need to trim/truncate values?
        return new Promise(function (resolve, reject) {
          if (!canSendEvent(payload["action"
          /* ACTION */
          ])) {
            reject({
              message: 'Event Rate Limiter triggered'
            });
            return;
          }

          var payloadString;

          try {
            payloadString = JSON.stringify(payload);
          } catch (e) {
            reject({
              message: "Unable to stringify event JSON: " + e
            });
          }

          var xhr = new XMLHttpRequest();

          xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
              try {
                var responseJson = JSON.parse(xhr.response);
                resolve(responseJson);
              } catch (e) {
                reject({
                  status: this.status,
                  message: 'Unable to parse response:' + xhr.response
                });
              }
            } else {
              reject({
                status: this.status,
                statusText: xhr.statusText,
                message: xhr.responseText
              });
            }
          };

          xhr.onerror = function () {
            reject({
              status: this.status,
              statusText: xhr.statusText,
              message: xhr.responseText
            });
          };

          if (payload.debug && payload.debug.explanations) {
            xhr.withCredentials = true;
          }

          if (getParameterByName(READABLE_EVENT_QUERY_PARAM) == "true") {
            _this2.sendPost(xhr, _this2.baseURL, payloadString);

            return;
          }

          try {
            if (!/^[\x20-\x7E]+$/.test(payloadString)) {
              throw new Error("GET request payload contains non-ASCII characters, try sending POST request");
            }

            var _payload = encodeURIComponent(window.btoa(payloadString));

            var url = _this2.baseURL + "?event=" + _payload;

            if (url.length > MAX_GET_REQUEST_SIZE) {
              throw new Error("GET request URL exceeds 8192 characters, try sending POST request");
            }

            _this2.sendGet(xhr, url);
          } catch (e) {
            _this2.sendPost(xhr, _this2.baseURL, payloadString);
          }
        });
      }
    }, {
      key: "sendGet",
      value: function sendGet(xhr, url) {
        xhr.open('GET', url, true);
        xhr.setRequestHeader('Accept', 'application/json, text/javascript, */*; q=0.01');
        xhr.send();
      }
    }, {
      key: "sendPost",
      value: function sendPost(xhr, url, payload) {
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Accept', 'application/json, text/javascript, */*; q=0.01');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('event=' + encodeURIComponent(payload));
      }
    }]);

    return EventReceiver;
  }();

  var prepareParamValues = function prepareParamValues(params) {
    Object.keys(params).forEach(function (key) {
      var value = params[key];

      if (typeof value == 'number' || typeof value === 'boolean' || value == null) {
        return;
      } else if (typeof value == 'string') {
        params[key] = truncateParamValue(key, value);
      } else if (typeof value == 'function') {
        delete params[key];
      } else {
        params[key] = JSON.stringify(value);
      }
    });
  };

  var truncateParamValue = function truncateParamValue(key, value) {
    switch (key) {
      case "url"
      /* URL */
      :
      case "urlref"
      /* URLREF */
      :
        return value.substring(0, URL_FIELDS_MAX_LENGTH);

      case "title"
      /* TITLE */
      :
        return value.substring(0, TITLE_FIELD_MAX_LENGTH);

      default:
        return value.substring(0, CUSTOM_FIELD_MAX_LENGTH);
    }
  };

  var eventReceiverUrl = function eventReceiverUrl(trackerURL) {
    return trackerURL + EVENT_RECEIVER_PATH + state.endpointConfig.dataset;
  };

  var oneWayReceiverUrl = function oneWayReceiverUrl(trackerURL) {
    return trackerURL + MESSAGE_STAT_RECEIVER_PATH;
  };

  var pingReceiverUrl = function pingReceiverUrl(trackerURL) {
    return trackerURL + PING_RECEIVER_PATH;
  };

  var errorReceiverUrl = function errorReceiverUrl(trackerURL) {
    return trackerURL + ERROR_RECEIVER_PATH;
  };

  var eventReceiver;
  var oneWayReceiver;
  var pingReceiver;
  var errorReceiver;

  var initEventReceivers = function initEventReceivers(baseURL) {
    eventReceiver = new EventReceiver(eventReceiverUrl(baseURL));
    oneWayReceiver = new OneWayReceiver(oneWayReceiverUrl(baseURL));
    pingReceiver = new OneWayReceiver(pingReceiverUrl(baseURL));
    errorReceiver = new ErrorReceiver(errorReceiverUrl(baseURL));
  };

  var _SAFARI_PROP_MAP, _MOZILLA_PROP_MAP;

  var shouldIncludeAnonFlag = function shouldIncludeAnonFlag(event) {
    return !event["userId"
    /* USER_ID */
    ] && !event["_persistedUserId"
    /* PERSISTED_USER_ID */
    ] && !event["_persistedAccountId"
    /* PERSISTED_ACCOUNT_ID */
    ];
  };

  var addBaseParamsToEvent = function addBaseParamsToEvent(event) {
    event[".bv"
    /* BEACON_VERSION */
    ] = BEACON_VERSION; // hard coded for now.

    event["_ak"
    /* ACCOUNT_KEY_PARAMETER */
    ] = state.endpointConfig.account;
    event["_ds"
    /* DATASET_NAME_PARAMETER */
    ] = state.endpointConfig.dataset;
    event[".scv"
    /* SITE_CONFIG_VERSION */
    ] = state.endpointConfig.siteConfigVersion;
    event["channel"
    /* CHANNEL */
    ] = BEACON_CHANNEL; // hard coded for now.

    event["_r"
    /* RANDOM_PARAM */
    ] = String(Math.random()).slice(2, 8);
  };

  var addUserFieldsToEvent = function addUserFieldsToEvent(flatEvent) {
    var visitor = getVisitor();

    if (flatEvent["userId"
    /* USER_ID */
    ]) {
      flatEvent["_reqPersistedEntityIds"
      /* REQ_PERSISTED_ENTITY_IDS */
      ] = "";
    } else if (visitor.persistedUserId) {
      flatEvent["_persistedUserId"
      /* PERSISTED_USER_ID */
      ] = visitor.persistedUserId;
    }

    if (state.beaconConfig.trackAnonymousVisitors) {
      // we pass the anon id always
      flatEvent[".anonId"
      /* ANON_ID */
      ] = visitor.uuid;

      if (visitor.affinityId != null) {
        flatEvent[".aaId"
        /* ANON_AFFINITY_ID */
        ] = visitor.affinityId;
      }

      if (shouldIncludeAnonFlag(flatEvent)) {
        flatEvent["_anon"
        /* ANON */
        ] = 'true';
      }
    }

    return flatEvent;
  };

  var CUSTOM_FIELD_MAX_LENGTH$1 = 1024;
  var numToTrimTo = CUSTOM_FIELD_MAX_LENGTH$1 - 50;
  var numCharsThreeQuarters = Math.round(0.75 * numToTrimTo);
  var numCharsOneQuarter = Math.round(0.25 * numToTrimTo);

  var trimLogComponent = function trimLogComponent(value) {
    var logComponentString = "".concat(value); //converts value to a string
    // Trim even if it's within 50 of the max custom field length, just to be sure

    if (logComponentString == null || logComponentString.length <= numToTrimTo) {
      // No trimming required.
      return logComponentString;
    }

    var numCharsBeginning = numCharsThreeQuarters;
    var numCharsEnding = numCharsOneQuarter;

    if (numCharsBeginning + numCharsEnding != numToTrimTo) {
      numCharsBeginning += numToTrimTo - (numCharsBeginning + numCharsEnding);
    }

    var separatorString = " ... ";

    if (numCharsEnding > 10) {
      numCharsEnding -= separatorString.length;
    } else if (numCharsBeginning > 10) {
      numCharsBeginning -= separatorString.length;
    }

    return logComponentString.substring(0, numCharsBeginning) + separatorString + logComponentString.substring(logComponentString.length - numCharsEnding);
  };

  var parseExceptionCommon = function parseExceptionCommon(flatEvent, _ref) {
    var header = _ref.header,
        fileName = _ref.fileName,
        line = _ref.line,
        column = _ref.column;

    if (!!header) {
      flatEvent[".ef"
      /* ERROR_HEADER */
      ] = trimLogComponent(header);
    }

    flatEvent[".eu"
    /* ERROR_FILE_NAME */
    ] = trimLogComponent(fileName);
    flatEvent[".el"
    /* ERROR_LINE */
    ] = trimLogComponent(line);
    flatEvent[".ec"
    /* ERROR_COLUMN */
    ] = trimLogComponent(column);
    return flatEvent;
  };

  var SAFARI_PROP_MAP = (_SAFARI_PROP_MAP = {}, _defineProperty(_SAFARI_PROP_MAP, ".eu"
  /* ERROR_FILE_NAME */
  , 'sourceURL'), _defineProperty(_SAFARI_PROP_MAP, ".el"
  /* ERROR_LINE */
  , 'line'), _defineProperty(_SAFARI_PROP_MAP, ".ec"
  /* ERROR_COLUMN */
  , 'column'), _SAFARI_PROP_MAP);
  var MOZILLA_PROP_MAP = (_MOZILLA_PROP_MAP = {}, _defineProperty(_MOZILLA_PROP_MAP, ".eu"
  /* ERROR_FILE_NAME */
  , 'fileName'), _defineProperty(_MOZILLA_PROP_MAP, ".el"
  /* ERROR_LINE */
  , 'lineNumber'), _defineProperty(_MOZILLA_PROP_MAP, ".ec"
  /* ERROR_COLUMN */
  , 'columnNumber'), _MOZILLA_PROP_MAP);

  var parseException = function parseException(flatEvent, exception, propMap) {
    if (!exception) {
      return flatEvent;
    }

    return parseExceptionCommon(flatEvent, {
      header: !!exception.stack && typeof exception.stack === "string" && exception.stack.substring(0, exception.stack.indexOf("@")),
      fileName: exception[propMap[".eu"
      /* ERROR_FILE_NAME */
      ]],
      line: exception[propMap[".el"
      /* ERROR_LINE */
      ]],
      column: exception[propMap[".ec"
      /* ERROR_COLUMN */
      ]]
    });
  };

  var parseDefaultException = function parseDefaultException(flatEvent, exception) {
    if (!exception || !exception.stack || typeof exception.stack !== "string") {
      return flatEvent;
    }

    var caller_line = exception.stack.split("\n")[1];
    var fullLine = caller_line.substring(caller_line.indexOf("at ") + 3);
    var matches = fullLine.match(/(.*) \((.*):(\d+):(\d+)\)/);

    if (Array.isArray(matches)) {
      return parseExceptionCommon(flatEvent, {
        header: matches[1],
        fileName: matches[2],
        line: matches[3],
        column: matches[4]
      });
    }

    return flatEvent;
  };

  var getBrowserInfo = function getBrowserInfo() {
    var agent = window.navigator.userAgent.toLowerCase();
    var name = "unknown"
    /* UNKNOWN */
    ;
    var regexName = '';

    switch (true) {
      case agent.indexOf("edge") > -1:
        name = "ie"
        /* MSIE */
        ;
        regexName = 'edge';
        break;

      case agent.indexOf("trident") > -1:
        name = "ie"
        /* MSIE */
        ;
        regexName = 'trident';
        break;

      case agent.indexOf("chrome") > -1 && !!window['chrome']:
        name = "chrome"
        /* CHROME */
        ;
        regexName = name;
        break;

      case agent.indexOf("firefox") > -1:
        name = "mozilla"
        /* MOZILLA */
        ;
        regexName = name;
        break;

      case agent.indexOf("safari") > -1:
        name = "safari"
        /* SAFARI */
        ;
        regexName = name;
        break;
    }

    if (name !== "unknown"
    /* UNKNOWN */
    ) {
        var regex = new RegExp("".concat(regexName, "/(.*?)s"), 'gm');
        var match = regex.exec(agent);
        var version = parseInt(!!match && match[1]);
        return {
          name: name,
          version: isNaN(version) ? null : version
        };
      }

    return {
      name: name,
      version: null
    };
  };

  var addErrorFieldsToEvent = function addErrorFieldsToEvent(flatEvent, exception, context) {
    var message = exception.message;
    flatEvent[".em"
    /* ERROR_MESSAGE */
    ] = trimLogComponent(message || exception);
    flatEvent[".es"
    /* ERROR_SECTION */
    ] = context;
    var browser = getBrowserInfo();
    flatEvent[".vt"
    /* BROWSER_NAME */
    ] = browser.name;

    if (!!browser.version) {
      flatEvent[".vn"
      /* BROWSER_VERSION */
      ] = browser.version;
    }

    switch (browser.name) {
      case "safari"
      /* SAFARI */
      :
        parseException(flatEvent, exception, SAFARI_PROP_MAP);
        break;

      case "mozilla"
      /* MOZILLA */
      :
        parseException(flatEvent, exception, MOZILLA_PROP_MAP);
        break;

      default:
        parseDefaultException(flatEvent, exception);
        break;
    }

    return flatEvent;
  };

  var toFlatItem = function toFlatItem(catalogPayload) {
    var itemType = Object.keys(catalogPayload)[0];

    if (!itemType) {
      return {};
    }

    var item = catalogPayload[itemType];
    var serverItem = {
      type: itemType,
      _id: item._id,
      name: item.name,
      url: item.url,
      imageUrl: item.imageUrl,
      description: item.description
    };

    if (item["price"]) {
      var product = item;
      serverItem.priceDescription = product.priceDescription;
      serverItem.price = product.price;
      serverItem.listPrice = product.listPrice;
      serverItem.currency = product.currency;
      serverItem.inventoryCount = product.inventoryCount;
      serverItem.alternateId = product.alternateId;
    }

    if (Array.isArray(item.categories)) {
      serverItem.categories = item.categories.map(function (category) {
        if (typeof category === 'string') {
          return {
            _id: category,
            type: exports.ItemType.Category
          };
        }

        return category;
      });
    }

    if (isObject(item.dimensions)) {
      serverItem.dimensions = {};

      for (var dimension in item.dimensions) {
        if (item.dimensions.hasOwnProperty(dimension)) {
          var values = item.dimensions[dimension];
          Array.isArray(values) ? serverItem.dimensions[dimension] = values : serverItem.dimensions[dimension] = [values];
        }
      }
    }

    return serverItem;
  };

  var getFlatItemStats = function getFlatItemStats(catalogItems) {
    var serverItemsInStat = [];
    Object.keys(catalogItems).forEach(function (itemTypeKey) {
      serverItemsInStat = serverItemsInStat.concat(getFlatItemStatsForItemType(itemTypeKey, catalogItems[itemTypeKey]));
    });
    return serverItemsInStat;
  };

  var getFlatItemStatsForItemType = function getFlatItemStatsForItemType(itemTypeKey, items) {
    return items.map(function (itemId) {
      var keyForStat = itemTypeKeyToCampaignStatName(itemTypeKey);
      return {
        _id: itemId,
        type: keyForStat,
        tagType: keyForStat === "t" ? itemTypeKey : undefined
      };
    });
  };

  var itemTypeKeyToCampaignStatName = function itemTypeKeyToCampaignStatName(itemType) {
    switch (itemType) {
      case "Product":
        return "p";

      case "Article":
        return "a";

      case "Blog":
        return "b";

      case "Category":
        return "c";

      case "Promotion":
        return "P";

      default:
        return "t";
      //Assume it's a dimension and the input param is the tagType.
    }
  };

  var toFlatCampaignStat = function toFlatCampaignStat(stat) {
    var campaignStat = {
      type: "e"
      /* Experience */
      ,
      id: stat.experienceId,
      stat: CampaignStatType[stat.stat],
      ug: stat.control ? 'Control' : undefined
    };

    if (stat.catalog) {
      campaignStat["piks"] = getFlatItemStats(stat.catalog);
    }

    return campaignStat;
  };

  var sendStatEventFlat = function sendStatEventFlat(event) {
    var flatEvent = {};
    flatEvent[".cStat"
    /* CAMPAIGN_STATS */
    ] = JSON.stringify(event.campaignStats.map(toFlatCampaignStat));
    addBaseParamsToEvent(flatEvent);
    addUserFieldsToEvent(flatEvent);
    oneWayReceiver.send(flatEvent);
  };
  var toFlatError = function toFlatError(error, context) {
    var flatError = {};
    addBaseParamsToEvent(flatError);
    addUserFieldsToEvent(flatError);
    addErrorFieldsToEvent(flatError, error, context);
    return flatError;
  };
  var sendPingEventFlat = function sendPingEventFlat(event) {
    var flatEvent = {};
    flatEvent[".top"
    /* TIME_ON_PAGE */
    ] = '' + event.timeOnPageMillis;

    if (event.catalog && Object.keys(event.catalog).length > 0) {
      flatEvent["item"
      /* ITEM */
      ] = JSON.stringify(toFlatItem(event.catalog));
    }

    if (event.action) {
      flatEvent["action"
      /* ACTION */
      ] = event.action;
    }

    addBaseParamsToEvent(flatEvent);
    addUserFieldsToEvent(flatEvent);
    pingReceiver.send(flatEvent);
  };

  (function (ItemAction) {
    ItemAction["ViewItem"] = "View Item";
    ItemAction["ViewItemOutOfStock"] = "View Item Out Of Stock";
    ItemAction["ViewItemDetail"] = "View Item Detail";
    ItemAction["QuickViewItem"] = "Quick View Item";
    ItemAction["StopQuickViewItem"] = "Stop Quick View Item";
    ItemAction["ViewCategory"] = "View Category";
    ItemAction["ViewTag"] = "View Tag";
    ItemAction["AddToCart"] = "Add To Cart";
    ItemAction["ViewCart"] = "View Cart";
    ItemAction["Purchase"] = "Purchase";
    ItemAction["Share"] = "Share";
    ItemAction["Review"] = "Review";
    ItemAction["Comment"] = "Comment";
    ItemAction["Favorite"] = "Favorite";
    ItemAction["Search"] = "Search";
    ItemAction["SearchViewResults"] = "Search View Results";
    ItemAction["SearchClick"] = "Search Click";
    ItemAction["ClickThrough"] = "Click Through";
    ItemAction["UpdateLineItem"] = "Update Line Item";
    ItemAction["RemoveFromCart"] = "Remove From Cart";
    ItemAction["ViewBanditItems"] = "View Bandit Items";
  })(exports.ItemAction || (exports.ItemAction = {}));

  var sendStructuredEvent = function sendStructuredEvent(event) {
    prepareStructuredEvent(event);
    validateStructuredEvent(event);
    Signals.onEventSend.emit(event);
    handleSpecialEvent(event);
    return new Promise(function (resolve, reject) {
      eventReceiver.send(event).then(function (response) {
        handlePersistedIdentityInResponse(response);
        Logger.debug('Received event response: ', response);
        Signals.onEventResponse.emit(response, event);
        Signals.onDeprecatedEventResponse.emit(response);
        resolve(response);
      });
    });
  };

  var handleSpecialEvent = function handleSpecialEvent(event) {
    switch (event.itemAction) {
      case exports.ItemAction.QuickViewItem:
        sitemapState.result = _objectSpread2({}, sitemapState.result, {
          backgroundPage: sitemapState.result.backgroundPage || sitemapState.result.currentPage,
          currentPage: _objectSpread2({}, event, {
            action: event.action || exports.ItemAction.QuickViewItem,
            itemAction: exports.ItemAction.QuickViewItem
          })
        });
        break;

      case exports.ItemAction.StopQuickViewItem:
        sitemapState.result = _objectSpread2({}, sitemapState.result, {
          backgroundPage: null,
          currentPage: sitemapState.result.backgroundPage || sitemapState.result.currentPage
        });
        break;
    }
  };

  var prepareStructuredEvent = function prepareStructuredEvent(event) {
    prepareSourcePayload(event);
    prepareUserPayload(event);
    prepareAccountPayload(event);
    prepareDebugPayload(event);
  };

  var prepareSourcePayload = function prepareSourcePayload(event) {
    var flags = event.flags;
    event.source = event.source || {};
    event.source = _objectSpread2({}, event.source || {}, {
      pageType: event.source.pageType || getPageTypeFromSitemapState(),
      url: event.source.url || window.location.href,
      urlReferrer: event.source.urlReferrer || document.referrer,
      channel: event.source.channel || BEACON_CHANNEL,
      contentZones: prepareContentZonesForSourcePayload(event.source, (flags || {}).pageView),
      time: event.source.time,
      configVersion: state.endpointConfig.siteConfigVersion,
      beaconVersion: BEACON_VERSION
    });
  };

  var prepareContentZonesForSourcePayload = function prepareContentZonesForSourcePayload(eventSource, pageView) {
    return (eventSource.contentZones || []).reduce(function (allZones, contentZone) {
      if (!pageView && _typeof(contentZone) === "object" && (contentZone || {}).name) {
        Logger.warn("Using content zone objects in 'sendEvent' will soon be deprecated in favor of zone names as strings");
      }

      var contentZoneName = typeof contentZone === "string" && contentZone !== "" ? contentZone : (contentZone || {}).name;
      if (typeof contentZoneName === "string" && contentZoneName !== "") allZones.push(contentZoneName);
      return allZones;
    }, []);
  };

  var prepareUserPayload = function prepareUserPayload(event) {
    var visitor = getVisitor();
    event.user = _objectSpread2({}, event.user || {}, {
      anonId: visitor.uuid
    });

    if (visitor.persistedUserId) {
      event.user.encryptedId = visitor.persistedUserId;
    }
  };

  var prepareAccountPayload = function prepareAccountPayload(event) {
    var visitor = getVisitor();
    event.account = event.account || {};

    if (visitor.persistedAccountId) {
      event.account.encryptedId = visitor.persistedAccountId;
    }
  };

  var prepareDebugPayload = function prepareDebugPayload(event) {
    var experienceIds = util.getParameterByName(TEST_MESSAGES_QUERY_PARAM);

    if (experienceIds) {
      event.debug ? event.debug.testMessages = experienceIds : event.debug = {
        testMessages: experienceIds
      };
    }
  };

  var getPageTypeFromSitemapState = function getPageTypeFromSitemapState() {
    if (sitemapState.result.currentPage && sitemapState.result.currentPage.source) {
      return sitemapState.result.currentPage.source.pageType;
    }
  };

  var validateStructuredEvent = function validateStructuredEvent(event) {
    return validateCatalogDimensions(event);
  };

  var validateCatalogDimensions = function validateCatalogDimensions(event) {
    if (event.catalog && Object.keys(event.catalog).length > 0) {
      Object.keys(event.catalog).forEach(function (itemType) {
        if (event.catalog[itemType] && event.catalog[itemType].dimensions) {
          var dimensions = event.catalog[itemType].dimensions;
          Object.keys(dimensions).forEach(function (dimension) {
            if (!Array.isArray(dimensions[dimension])) {
              Signals.onFireException.emit(new Error("".concat(dimension, " is not an array. Dimensions must have type of string[]")), "Sitemap");
              return false;
            }
          });
        }
      });
    }

    return true;
  };

  var handlePersistedIdentityInResponse = function handlePersistedIdentityInResponse(response) {
    var visitor = getVisitor();
    var persistedUserId = response.persistedUserId,
        anonAffinityId = response.anonAffinityId;

    if (persistedUserId) {
      var entityId = persistedUserId.entityId,
          accountId = persistedUserId.accountId;

      if (entityId) {
        visitor.persistedUserId = entityId;
      }

      if (accountId) {
        visitor.persistedAccountId = accountId;
      }
    }

    if (anonAffinityId && anonAffinityId !== visitor.affinityId) {
      visitor.affinityId = anonAffinityId;
    }

    storeVisitor(visitor);
  };

  var sendEvent = function sendEvent(event) {
    event = handleOnActionEvent(event);
    return state.beaconConfig.sendEvents ? sendStructuredEvent(event) : Promise.resolve(event);
  };
  var sendStat = function sendStat(event) {
    event.campaignStats.forEach(function (campaignStat) {
      var campaignResponse = sitemapState.campaignResponses.find(function (campaignResponse) {
        return campaignResponse.experienceId === campaignStat.experienceId;
      });
      Signals.onStatSend.emit(campaignStat, campaignResponse);
    });
    return state.beaconConfig.sendEvents ? sendStatEventFlat(event) : Promise.resolve(event);
  };
  var sendPing = function sendPing(event) {
    return state.beaconConfig.sendEvents ? sendPingEventFlat(event) : Promise.resolve(event);
  };

  var handleOnActionEvent = function handleOnActionEvent(event) {
    event = matchedConfigOnActionEvent(event);
    event = globalOnActionEvent(event);
    return event;
  };

  var matchedConfigOnActionEvent = function matchedConfigOnActionEvent(event) {
    var matchedConfig = sitemapState.result.matchedConfig;

    try {
      event = matchedConfig && matchedConfig.onActionEvent ? matchedConfig.onActionEvent(event) : event;

      if (_typeof(event) === 'object') {
        return event;
      } else {
        Signals.onFireException.emit(new Error("onActionEvent failed for the ".concat(sitemapState.result.matchedConfig.name, " page config. Must return an object or null.")), 'Site-wide Javascript');
      }
    } catch (e) {
      Signals.onFireException.emit(new Error("onActionEvent failed for the ".concat(sitemapState.result.matchedConfig.name, " page config. ").concat(e.message, ".")), 'Site-wide Javascript');
    }
  };

  var globalOnActionEvent = function globalOnActionEvent(event) {
    var siteMapConfig = sitemapState.config;

    try {
      event = siteMapConfig.global && siteMapConfig.global.onActionEvent ? siteMapConfig.global.onActionEvent(event) : event;

      if (_typeof(event) === 'object') {
        return event;
      } else {
        Signals.onFireException.emit(new Error("onActionEvent failed for the global page config. Must return an object or null."), 'Site-wide Javascript');
      }
    } catch (e) {
      Signals.onFireException.emit(new Error("onActionEvent failed for the global page config. ".concat(e.message, ".")), 'Site-wide Javascript');
    }
  };

  /** Creates a shallow copy of the source object using the top-level properties specified. */
  var pickFields = function pickFields(sourceObj, properties) {
    var pickedObject = {
      _id: null
    };
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = properties[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var property = _step.value;

        if (typeof sourceObj[property] !== 'undefined') {
          Object.assign(pickedObject, _defineProperty({}, property, sourceObj[property]));
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return pickedObject;
  };

  var sparsifyLineItem = function sparsifyLineItem(lineItem) {
    var sparseLineItem = lineItem;

    if (sparseLineItem.item) {
      Object.assign(sparseLineItem, {
        item: sparsifyCatalogItem(sparseLineItem.item)
      });
    }

    return sparseLineItem;
  };

  var sparsifyCatalogItem = function sparsifyCatalogItem(item) {
    var sparseItem = pickFields(item, ['_id', 'type', 'price', 'currency', 'categories']);

    if (Array.isArray(sparseItem.categories)) {
      var newCategories = [];

      for (var i = 0; i < sparseItem.categories.length; i++) {
        Object.assign(newCategories, _defineProperty({}, i, sparsifyItemIdOnly(sparseItem.categories[i])));
      }

      Object.assign(sparseItem, {
        categories: newCategories
      });
    }

    return sparseItem;
  };

  var sparsifyItemIdOnly = function sparsifyItemIdOnly(item) {
    return pickFields(item, ['_id', 'type']);
  };
  var sparsifyPreservingRelatedItems = function sparsifyPreservingRelatedItems(item) {
    var sparseItem = pickFields(item, ['_id', 'type', 'dimensions', 'categories']);

    if (Array.isArray(sparseItem.categories)) {
      var newCategories = [];

      for (var i = 0; i < sparseItem.categories.length; i++) {
        newCategories.push(sparsifyItemIdOnly(sparseItem.categories[i]), i);
      }

      sparseItem = _objectSpread2({}, sparseItem, {
        categories: newCategories
      });
    }

    return sparseItem;
  };

  var listenerAndContentZoneSearchInterval;
  var startListenerAndContentZoneSearch = function startListenerAndContentZoneSearch() {
    cancelListenerAndContentZoneSearch();

    if (pageHasMissingZonesOrListeners()) {
      listenerAndContentZoneSearchInterval = setInterval(function () {
        var updated = false;
        var intervalTimerStart = new Date().getTime();
        var listenerState = sitemapState.result.matchedConfig.listeners.map(function (d) {
          if (d.selectorFound) {
            return d;
          } else {
            var listener = attemptToBindListener(d);
            updated = listener.selectorFound || updated;
            return listener;
          }
        });
        var contentZoneState = sitemapState.result.matchedConfig.contentZones.map(function (c) {
          if (c.selectorFound) {
            return c;
          } else {
            var contentZone = attemptToFindContentZone(c);
            updated = contentZone.selectorFound || updated;
            return contentZone;
          }
        });

        if (updated) {
          Object.assign(sitemapState.result.matchedConfig, _objectSpread2({}, sitemapState.result.matchedConfig, {
            contentZones: contentZoneState,
            listeners: listenerState
          }));
        }

        var intervalTimerEnd = new Date().getTime();
        var intervalRunningTime = intervalTimerEnd - intervalTimerStart;

        if (intervalRunningTime > 50 || !pageHasMissingZonesOrListeners()) {
          cancelListenerAndContentZoneSearch();
        }
      }, 1000);
    }
  };

  var pageHasMissingZonesOrListeners = function pageHasMissingZonesOrListeners() {
    if (sitemapState.result.matchedConfig) {
      var _sitemapState$result$ = sitemapState.result.matchedConfig,
          listeners = _sitemapState$result$.listeners,
          contentZones = _sitemapState$result$.contentZones;

      if (listeners && contentZones) {
        return listeners.filter(function (d) {
          return !d.selectorFound;
        }).length || contentZones.filter(function (c) {
          return !c.selectorFound;
        }).length;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  var cancelListenerAndContentZoneSearch = function cancelListenerAndContentZoneSearch() {
    if (typeof listenerAndContentZoneSearchInterval === 'number') {
      clearInterval(listenerAndContentZoneSearchInterval);
    }

    listenerAndContentZoneSearchInterval = null;
  };

  var sendEventWithOptions = function sendEventWithOptions(listener) {
    Logger.warn("ListenerOptions are deprecated. Please use a callback in the Listener instead.");

    var event = _objectSpread2({}, listener.options, {
      user: {}
    });

    sendEvent(event);
  };

  var sendEventWithCallback = function sendEventWithCallback(event, listener) {
    try {
      listener.callback(event);
    } catch (e) {
      Signals.onFireException.emit(new Error("Listener callback on ".concat(listener.bind, " bound to ").concat(listener.selector, " failed for the ").concat(sitemapState.result.matchedConfig.name, " page config. ").concat(e.message, ".")), 'Site-wide Javascript');
    }
  };

  var attemptToBindListener = function attemptToBindListener(listenerConfig) {
    var elements = cash(listenerConfig.selector);

    var listener = _objectSpread2({}, listenerConfig, {
      selectorFound: elements.length > 0
    });

    elements.on(listener.bind, function (event) {
      listener.options ? sendEventWithOptions(listener) : sendEventWithCallback(event, listener);
    });
    return listener;
  };
  var attemptToFindContentZone = function attemptToFindContentZone(zoneConfig) {
    var selectorFound = !(zoneConfig || {}).selector || cash((zoneConfig || {}).selector).length > 0;
    return _objectSpread2({}, zoneConfig, {
      selectorFound: selectorFound
    });
  };
  var removeCurrentListeners = function removeCurrentListeners() {
    if (sitemapState.result && sitemapState.result.matchedConfig && sitemapState.result.matchedConfig.listeners) {
      sitemapState.result.matchedConfig.listeners.forEach(function (listener) {
        cash(listener.selector).off(listener.bind);
      });
    }
  };

  var DO_NOT_TRUNCATE = {
    _id: true,
    currency: true,
    inventoryCount: true,
    price: true,
    tagType: true,
    type: true
  };

  var detectTranslate = function detectTranslate() {
    // These checks can't trigger cross origin error
    var googleTranslate = cash('script[src*="//translate.googleusercontent.com"]').length > 0;
    var chromeTranslate = cash('html.translated-ltr').length > 0 || cash('html.translated-rtl').length > 0;

    if (googleTranslate || chromeTranslate) {
      Logger.debug('page is translated');
      return true;
    }

    try {
      var bingTranslate = cash(window.parent.document).find('script[src*="//www.microsofttranslator.com"]').length > 0;
      var worldLingoTranslate = cash(window.parent.document).find('frame[src*="//www.worldlingo.com"]').length > 0;

      if (bingTranslate || worldLingoTranslate) {
        Logger.debug('page is translated');
        return true;
      } else {
        Logger.debug('page is not translated');
        return false;
      }
    } catch (e) {
      // These checks can cause cross origin error
      Logger.debug('exception caught, assuming page is untranslated ' + e);
      return false;
    }
  };

  var truncateTranslatedCatalog = function truncateTranslatedCatalog(catalogPayload) {
    if (detectTranslate()) {
      Object.keys(catalogPayload).forEach(function (itemKey) {
        var item = catalogPayload[itemKey];
        Object.keys(item).forEach(function (key) {
          if (!DO_NOT_TRUNCATE[key]) {
            delete item[key]; // tslint:disable-line no-delete no-object-mutation
          }
        });
      });
    }

    return catalogPayload;
  };

  var matchPageConfig = function matchPageConfig(pageConfigs) {
    return new Promise(function (resolve, reject) {
      if (!pageConfigs.length) {
        reject("No pages defined");
      }

      var defaultPageConfig = sitemapState.config.pageTypeDefault;

      if (defaultPageConfig) {
        setDefaultPageConfigToPending(defaultPageConfig);
      }

      setPageConfigsToPending(pageConfigs);
      pageConfigs.map(function (pageConfig) {
        isPageMatch(pageConfig).then(function (isMatch) {
          if (isMatch) {
            if (defaultPageConfig) {
              rejectPageMatchStatus(defaultPageConfig);
            }

            selectPageMatchStatus(pageConfig);
            resolve(pageConfig);
          } else {
            rejectPageMatchStatus(pageConfig);

            if (!unresolvedPageMatchExists(pageConfigs)) {
              if (defaultPageConfig) {
                selectPageMatchStatus(defaultPageConfig);
                resolve(defaultPageConfig);
              } else {
                reject("No matching page found");
              }
            }
          }
        }).catch(function (e) {
          Signals.onFireException.emit(new Error("isMatch failed while evaluating the ".concat(pageConfig.name, " page config")), 'Site-wide Javascript');
        });
      });
    });
  };
  var removeOutstandingPageMatchResolvers = function removeOutstandingPageMatchResolvers() {
    var state = sitemapState;

    if (state.result.matchStatus) {
      state.result.matchStatus.forEach(function (s) {
        if (s.status === MatchStatus.Running) {
          s._reject();
        }
      });
      sitemapState.result.matchStatus = [];
    }

    Signals.onPageMatchStatusUpdated.emit(sitemapState.result.matchStatus);
  };

  var setPageConfigsToPending = function setPageConfigsToPending(pageConfigs) {
    pageConfigs.forEach(function (config) {
      handleUpdateResultMatchStatus({
        pageName: config.name,
        status: MatchStatus.Pending
      });
    });
  };

  var setDefaultPageConfigToPending = function setDefaultPageConfigToPending(defaultPageConfig) {
    handleUpdateResultMatchStatus({
      pageName: defaultPageConfig.name,
      status: MatchStatus.Pending
    });
  };

  var selectPageMatchStatus = function selectPageMatchStatus(pageConfig) {
    handleUpdateResultMatchStatus({
      pageName: pageConfig.name,
      endTime: Date.now(),
      status: sitemapState.result.matchStatus.find(function (s) {
        return s.status === MatchStatus.Selected;
      }) ? MatchStatus.Matched : MatchStatus.Selected
    });
  };

  var rejectPageMatchStatus = function rejectPageMatchStatus(pageConfig) {
    handleUpdateResultMatchStatus({
      pageName: pageConfig.name,
      status: MatchStatus.Rejected,
      endTime: Date.now()
    });
  };

  var unresolvedPageMatchExists = function unresolvedPageMatchExists(pageConfigs) {
    var unresolvedMatches = sitemapState.result.matchStatus.filter(function (pageConfig) {
      return pageConfig.status === MatchStatus.Rejected;
    }, 0).length;
    return unresolvedMatches < pageConfigs.length;
  };

  var isPageMatch = function isPageMatch(pageConfig) {
    return new Promise(function (resolve, reject) {
      handleUpdateResultMatchStatus({
        pageName: pageConfig.name,
        status: MatchStatus.Running,
        startTime: Date.now(),
        _reject: reject
      });

      if (typeof pageConfig.isMatch === 'function') {
        var funcValue = pageConfig.isMatch();

        if (_typeof(funcValue) === 'object') {
          funcValue.then(function (isMatch) {
            resolve(isMatch);
          }).catch(function () {// TODO: log this, do anything else?
          });
        } else {
          resolve(funcValue);
        }
      } else {
        Signals.onFireException.emit(new Error("isMatch failed while evaluating the ".concat(pageConfig.name, " page config. isMatch must be a function.")), 'Site-wide Javascript');
      }
    });
  };

  var handleUpdateResultMatchStatus = function handleUpdateResultMatchStatus(matchStatus) {
    sitemapState.result.matchStatus = [].concat(_toConsumableArray(sitemapState.result.matchStatus || []), [matchStatus]);
    Signals.onPageMatchStatusUpdated.emit(sitemapState.result.matchStatus);
  };

  var buildCart = function buildCart(lineItemConfig, itemKey) {
    var lineItems = [];
    var resolvedConfig = buildNestedAttributes(lineItemConfig);

    if (Object.keys(resolvedConfig).length === 0) {
      return {
        complete: {
          Product: []
        }
      };
    }

    try {
      lineItems = buildMultipleLineItem(resolvedConfig);
      lineItems = cleanLineItems(lineItems, sitemapState.config.settings.canonicalizeIds);
      addValueToState(itemKey, lineItems, "cart");
    } catch (e) {
      Signals.onFireException.emit(new Error("getValue for ".concat(itemKey, " failed on ").concat(sitemapState.result.matchedConfig.name, " while evaulating custom function. ").concat(e.message, ".")), 'Site-wide Javascript');
    }

    return {
      complete: {
        Product: lineItems
      }
    };
  };
  var buildItem = function buildItem(itemConfig, itemType) {
    var item = {
      _id: null
    };
    Object.keys(itemConfig).forEach(function (key) {
      sitemapState.config.currentKey = key;
      var resolvedValue;

      try {
        var valueFromConfig = itemConfig[key];

        if (key === "attributes" || key === "dimensions") {
          resolvedValue = buildNestedAttributes(valueFromConfig);
        } else {
          resolvedValue = typeof valueFromConfig === "function" ? valueFromConfig() : valueFromConfig;

          if (key === "categories") {
            resolvedValue = buildCategoriesAttribute(resolvedValue);
          }
        }

        resolvedValue = cleanValue(key, resolvedValue, sitemapState.config.settings.canonicalizeIds);
        addValueToState(key, resolvedValue);
      } catch (e) {
        Signals.onFireException.emit(new Error("getValue for ".concat(key, " failed on ").concat(sitemapState.result.matchedConfig.name, " while evaulating custom function. ").concat(e.message, ".")), 'Site-wide Javascript');
      }

      if (resolvedValue || typeof resolvedValue === "number" || typeof resolvedValue === "boolean") {
        item[key] = resolvedValue;
      }
    });
    var eventItem = {};
    eventItem[itemType] = item;
    return eventItem;
  };
  var buildOrder = function buildOrder(orderConfig) {
    var order = {};
    Object.keys(orderConfig).forEach(function (key) {
      sitemapState.config.currentKey = key;

      try {
        var resolvedValue;
        var valueFromConfig = orderConfig[key];

        if (key === "lineItems") {
          resolvedValue = typeof valueFromConfig === "function" ? valueFromConfig() : buildNestedAttributes(orderConfig.lineItems);

          if (_typeof(resolvedValue) === "object") {
            resolvedValue = buildMultipleLineItem(resolvedValue);
          }
        } else {
          resolvedValue = typeof valueFromConfig === "function" ? valueFromConfig() : valueFromConfig;
        }

        resolvedValue = cleanValue(key, resolvedValue, sitemapState.config.settings.canonicalizeIds);
        addValueToState(key, resolvedValue, "order");
        order[key] = resolvedValue;
      } catch (e) {
        Signals.onFireException.emit(new Error("getValue for ".concat(key, " failed on ").concat(sitemapState.result.matchedConfig.name, " while evaulating custom function. ").concat(e.message, ".")), 'Site-wide Javascript');
      }
    });
    return {
      Product: order
    };
  };

  var buildMultipleLineItem = function buildMultipleLineItem(multipleLineItem) {
    var numItems;

    if (multipleLineItem._id) {
      numItems = multipleLineItem._id.length;
    } else if (multipleLineItem.sku) {
      numItems = multipleLineItem.sku.length;
    } else {
      Signals.onFireException.emit(new Error("Either _id or sku must be defined for lineItems"), 'Sitemap');
    }

    var unformattedLineItems = [];

    var _loop = function _loop() {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      if (value.length != numItems) {
        Signals.onFireException.emit(new Error("Resolving mutliple values for ".concat(key, " failed on ").concat(sitemapState.result.matchedConfig.name, ". ").concat(key, " does not have the same number of values as _id")), 'Site-wide Javascript');
      } else {
        value.forEach(function (val, i) {
          if (!unformattedLineItems[i]) {
            unformattedLineItems[i] = {
              _id: null,
              quantity: null
            };
          }

          unformattedLineItems[i][key] = val;
        });
      }
    };

    for (var _i = 0, _Object$entries = Object.entries(multipleLineItem); _i < _Object$entries.length; _i++) {
      _loop();
    }

    return unformattedLineItems;
  };

  var buildCategoriesAttribute = function buildCategoriesAttribute(categoriesValue) {
    return categoriesValue.map(function (categoryId) {
      return {
        type: "c",
        _id: categoryId
      };
    });
  };

  var buildNestedAttributes = function buildNestedAttributes(nestedAttributeConfig) {
    var nestedAttributes = {};
    Object.keys(nestedAttributeConfig).forEach(function (nestedKey) {
      var nestedAttributeValue = nestedAttributeConfig[nestedKey];
      var resolvedNestedAttributeValue = typeof nestedAttributeValue === "function" ? nestedAttributeValue() : nestedAttributeValue;

      if (resolvedNestedAttributeValue) {
        nestedAttributes[nestedKey] = resolvedNestedAttributeValue;
      }
    });
    return nestedAttributes;
  };

  var addValueToState = function addValueToState(key, value, stateCurrentPageProp) {
    var state = sitemapState.result;
    stateCurrentPageProp = stateCurrentPageProp || "catalog"; // state.currentPage[stateCurrentPageProp] = state.currentPage[stateCurrentPageProp] || {}

    if (state.currentPage && state.currentPage[stateCurrentPageProp]) {
      state.currentPage[stateCurrentPageProp][key] = value;
      Object.assign(sitemapState, _objectSpread2({}, state));
    }
  };

  var cleanValue = function cleanValue(key, value) {
    var canonicalizeIds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var currentValue = value;

    if (Array.isArray(value)) {
      if (key === "lineItems") {
        currentValue = cleanLineItems(value, canonicalizeIds);
      } else {
        currentValue = value.map(function (val) {
          return cleanSingleValue(key, val, canonicalizeIds);
        });
      }
    } else {
      currentValue = cleanSingleValue(key, value, canonicalizeIds);
    }

    return currentValue;
  };

  var cleanLineItems = function cleanLineItems(lineItems) {
    var canonicalizeIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return lineItems.map(function (lineItem) {
      return cleanLineItem(lineItem, canonicalizeIds);
    });
  };

  var cleanLineItem = function cleanLineItem(lineItem) {
    var canonicalizeIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    for (var lineItemKey in lineItem) {
      if (lineItemKey === "item") {
        for (var itemKey in lineItem[lineItemKey]) {
          lineItem[lineItemKey][itemKey] = cleanValue(itemKey, lineItem[lineItemKey][itemKey], canonicalizeIds);
        }
      } else {
        lineItem[lineItemKey] = cleanValue(lineItemKey, lineItem[lineItemKey], canonicalizeIds);
      }
    }

    return lineItem;
  };

  var cleanSingleValue = function cleanSingleValue(key, value) {
    var canonicalizeIds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var currentValue = value;

    if ((key === 'price' || key === 'listPrice' || key === 'totalValue' || key === 'rating') && typeof currentValue === 'string') {
      currentValue = getFloatValue(currentValue);
    }

    if (key === 'url' || key === 'imageUrl') {
      currentValue = qualifyUrl(currentValue);
    }

    if ((key === '_id' || key === 'sku' || key === 'orderId') && typeof currentValue === 'number') {
      currentValue = currentValue.toString();
    }

    if (canonicalizeIds && typeof currentValue === 'string' && (key === '_id' || key === 'sku' || key === 'orderId' || key === 'alternateId' || key === 'parentId')) {
      currentValue = currentValue.toUpperCase();
    }

    if (typeof currentValue === 'string') {
      if (currentValue.indexOf('&') >= 0) {
        var textarea = document.createElement('textarea');
        Object.assign(textarea, {
          innerHTML: currentValue
        });
        currentValue = textarea.value;
      }

      currentValue = currentValue.trim();
    }

    if (key === 'description' && typeof currentValue === 'string' && currentValue.length > 200) {
      currentValue = currentValue.substr(0, 197) + '...';
    }

    if ((key === 'quantity' || key === 'inventoryCount' || key === 'numRatings') && typeof currentValue === 'string') {
      currentValue = getIntegerValue(currentValue);
    }

    return currentValue;
  };

  var setConfig = function setConfig(config) {
    config.global = config.global || {};

    if (_typeof(config.global) != "object") {
      Signals.onFireException.emit(new Error("The global config has a type of ".concat(_typeof(config.global), ", but it must be an object")), 'Sitewide Javascript');
    }

    Object.assign(sitemapState.config, _objectSpread2({}, config));
    Signals.onInitSitemap.emit(sitemapState.config);
  };
  var updateSettings = function updateSettings(settings) {
    return Object.assign(sitemapState.config.settings, _objectSpread2({}, settings));
  };
  var runSpecificConfig = function runSpecificConfig(pageConfig) {
    Object.assign(sitemapState.config, {
      pageTypes: [pageConfig]
    });
    run(sitemapState.config);
  };
  var initSitemap = function initSitemap(siteMapConfig) {
    run(siteMapConfig);
    return true;
  };
  var getState = function getState() {
    return sitemapState;
  };
  var getCurrentPage = function getCurrentPage() {
    return sitemapState.result.currentPage || {};
  };
  var getContentZoneSelector = function getContentZoneSelector(contentZoneName) {
    var matchedConfig = getState().result.matchedConfig;

    var _ref = matchedConfig || {},
        contentZones = _ref.contentZones;

    if (!contentZones) {
      return null;
    }

    var contentZone = contentZones.find(function (contentZone) {
      return contentZone.name === contentZoneName;
    });
    return !!contentZone && !!contentZone.selector ? contentZone.selector : null;
  };

  var isOrderConfig = function isOrderConfig(pageConfig) {
    return pageConfig.itemAction === exports.ItemAction.Purchase || !!(pageConfig && pageConfig.order);
  };

  var isCartConfig = function isCartConfig(pageConfig) {
    return pageConfig.itemAction === exports.ItemAction.ViewCart || !!(pageConfig && pageConfig.cart && pageConfig.cart.complete);
  };

  var build = function build(config) {
    matchPageConfig(config.pageTypes).then(mergeConfigWithGlobal).then(handleConfig).catch(function (e) {
      Signals.onFireException.emit(new Error("Unhandled exception: ".concat(e)), 'Site-wide Javascript');
    });
  };

  var handleConfig = function handleConfig(pageConfig) {
    sitemapState.result.matchedConfig = _objectSpread2({}, pageConfig, {
      contentZones: processContentZonesForMatchedConfig(pageConfig),
      listeners: processListeners(pageConfig)
    });
    sitemapState.result.currentPage = _objectSpread2({}, sitemapState.result.currentPage || {}, {
      action: processPageLoadAction(pageConfig),
      itemAction: processItemAction(pageConfig),
      source: {
        pageType: pageConfig.name,
        locale: processLocale(pageConfig),
        contentZones: processContentZonesForCurrentPage(pageConfig)
      },
      flags: {
        pageView: true
      },
      user: {},
      performance: {},
      debug: {}
    });

    if (isCartConfig(pageConfig)) {
      sitemapState.result.currentPage.itemAction = exports.ItemAction.ViewCart;
      sitemapState.result.currentPage.cart = processCartConfig(pageConfig);
    } else if (isOrderConfig(pageConfig)) {
      sitemapState.result.currentPage.itemAction = exports.ItemAction.Purchase;
      sitemapState.result.currentPage.order = processOrderConfig(pageConfig);
    } else {
      sitemapState.result.currentPage.catalog = processCatalogConfig(pageConfig);
    }
  };

  var processCartConfig = function processCartConfig(pageConfig) {
    if (!pageConfig.catalog && !pageConfig.cart && !pageConfig.order) {
      return {};
    }

    var cartConfig;

    if (pageConfig.cart) {
      cartConfig = pageConfig.cart;
    } else if (pageConfig.order || pageConfig.catalog) {
      var transformedItemType = {};
      var pageConfigCartObject = pageConfig.order || pageConfig.catalog;
      Object.keys(pageConfigCartObject).forEach(function (itemTypeKey) {
        var itemType = pageConfigCartObject[itemTypeKey];

        if (itemType && itemType.lineItems) {
          var lineItems = itemType.lineItems;
          transformedItemType[itemTypeKey] = lineItems;
        }
      });
      cartConfig = {
        complete: transformedItemType
      };
    }

    if (cartConfig.complete) {
      var completeCartConfig = cartConfig.complete;

      for (var itemKey in completeCartConfig) {
        if (!Array.isArray(itemKey.match(/[A-Z]/))) {
          Signals.onFireException.emit(new Error("Item types must be capitalized. Did you mean ".concat(itemKey.replace(/^\w/, function (letter) {
            return letter.toUpperCase();
          }), "?")), 'Sitewide Javascript');
          return {};
        }

        return buildCart(completeCartConfig[itemKey], itemKey);
      }
    }
  };

  var processOrderConfig = function processOrderConfig(pageConfig) {
    if (!pageConfig.catalog && !pageConfig.order) {
      return {};
    }

    var orderConfigWithItemType = pageConfig.order || pageConfig.catalog;

    for (var itemKey in orderConfigWithItemType) {
      if (!Array.isArray(itemKey.match(/[A-Z]/))) {
        Signals.onFireException.emit(new Error("Item types must be capitalized. Did you mean ".concat(itemKey.replace(/^\w/, function (letter) {
          return letter.toUpperCase();
        }), "?")), 'Sitewide Javascript');
        return {};
      }

      var orderConfig = orderConfigWithItemType[itemKey];
      return buildOrder(orderConfig);
    }
  };

  var processCatalogConfig = function processCatalogConfig(pageConfig) {
    if (!pageConfig.catalog) {
      return {};
    }

    for (var itemKey in pageConfig.catalog) {
      if (!Array.isArray(itemKey.match(/[A-Z]/))) {
        Signals.onFireException.emit(new Error("Item types must be capitalized. Did you mean ".concat(itemKey.replace(/^\w/, function (letter) {
          return letter.toUpperCase();
        }), "?")), 'Sitewide Javascript');
        return {};
      }

      var itemConfig = pageConfig.catalog[itemKey];
      return processItemConfig(itemConfig, itemKey);
    }
  };

  var processItemConfig = function processItemConfig(itemConfig, itemKey) {
    var data = buildItem(itemConfig, itemKey);
    Object.keys(data).forEach(function (itemType) {
      if (!data[itemType]._id) {
        Signals.onFireException.emit(new Error("Invalid ".concat(itemKey, ", missing _id for the ").concat(sitemapState.result.matchedConfig.name, " page config.")), 'Site-wide Javascript');
      }
    });
    return sitemapState.config.settings.truncateTranslated ? truncateTranslatedCatalog(data) : data;
  };

  var processContentZonesForMatchedConfig = function processContentZonesForMatchedConfig(pageConfig) {
    return (pageConfig.contentZones || []).reduce(function (allZones, zoneConfig) {
      var foundContentZone = attemptToFindContentZone(zoneConfig);
      if (typeof (foundContentZone || {}).name === "string" && (foundContentZone || {}).name !== "") allZones.push(foundContentZone);
      return allZones;
    }, []);
  };

  var processContentZonesForCurrentPage = function processContentZonesForCurrentPage(pageConfig) {
    return (pageConfig.contentZones || []).reduce(function (allZones, zoneConfig) {
      var foundContentZone = attemptToFindContentZone(zoneConfig);
      if (typeof (foundContentZone || {}).name === "string" && (foundContentZone || {}).name !== "") allZones.push((foundContentZone || {}).name);
      return allZones;
    }, []);
  };

  var processListeners = function processListeners(pageConfig) {
    return (pageConfig.listeners || []).map(function (listenerConfig) {
      return attemptToBindListener(listenerConfig);
    });
  };

  var processLocale = function processLocale(pageConfig) {
    return typeof pageConfig.locale === "function" ? pageConfig.locale() : pageConfig.locale;
  };

  var processPageLoadAction = function processPageLoadAction(pageConfig) {
    return typeof pageConfig.action === "function" ? pageConfig.action() : pageConfig.action;
  };

  var processItemAction = function processItemAction(pageConfig) {
    return pageConfig.catalog ? pageConfig.itemAction || exports.ItemAction.ViewItem : null;
  };

  var mergeDeep = function mergeDeep() {
    var isObject = function isObject(obj) {
      return obj && _typeof(obj) === 'object';
    };

    for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {
      objects[_key] = arguments[_key];
    }

    return objects.reduce(function (prev, obj) {
      Object.keys(obj).forEach(function (key) {
        var pVal = prev[key];
        var oVal = obj[key];

        if (Array.isArray(pVal) && Array.isArray(oVal)) {
          Object.assign(prev, _defineProperty({}, key, pVal.concat.apply(pVal, _toConsumableArray(oVal))));
        } else if (isObject(pVal) && isObject(oVal)) {
          Object.assign(prev, _defineProperty({}, key, mergeDeep(pVal, oVal)));
        } else {
          Object.assign(prev, _defineProperty({}, key, oVal));
        }
      });
      return prev;
    }, {});
  };

  var mergeConfigWithGlobal = function mergeConfigWithGlobal(pageConfig) {
    var global = sitemapState.config.global || {};
    var globalOnActionEvent = global.onActionEvent;
    delete global.onActionEvent;
    var mergedConfig = mergeDeep(global, pageConfig);
    global.onActionEvent = globalOnActionEvent;
    return mergedConfig;
  };

  var validatePageConfigs = function validatePageConfigs(siteMapConfig) {
    try {
      validateGlobalConfig(siteMapConfig.global);
      validateDefaultConfig(siteMapConfig.pageTypeDefault);
      validatePageTypeConfigs(siteMapConfig.pageTypes);
      return true;
    } catch (e) {
      Signals.onFireException.emit(new Error(e), 'Sitemap');
      return false;
    }
  };

  var validateDefaultConfig = function validateDefaultConfig(defaultConfig) {
    if (defaultConfig) {
      Object.keys(defaultConfig).forEach(function (key) {
        if (key !== "contentZones" && key !== "listeners" && key !== "locale" && key !== "name" && key != "onActionEvent") {
          throw new Error("".concat(key, " is not a valid default config attribute."));
        }
      });
    }
  };

  var validateGlobalConfig = function validateGlobalConfig(globalConfig) {
    if (globalConfig) {
      Object.keys(globalConfig).forEach(function (key) {
        if (key !== "contentZones" && key !== "listeners" && key !== "locale" && key != "onActionEvent") {
          throw new Error("".concat(key, " is not a valid global config attribute."));
        }
      });
    }
  };

  var validatePageTypeConfigs = function validatePageTypeConfigs(pageConfigs) {
    pageConfigs.forEach(function (pageConfig) {
      if (!pageConfig.name || !pageConfig.isMatch) {
        throw new Error("All page configs must have a name and isMatch attribute defined");
      }
    });
  };

  var processResult = function processResult() {
    var result = sitemapState.result;
    sendEvent(sitemapState.result.currentPage);
    sitemapState.result = result;
  };

  var run = function run(siteMapConfig) {
    setConfig(siteMapConfig);
    removeCurrentListeners();
    removeOutstandingPageMatchResolvers();
    cancelListenerAndContentZoneSearch();

    if (!sitemapState.config.settings.runOnTranslatedPage && detectTranslate()) {
      return;
    }

    if (!validatePageConfigs(siteMapConfig)) {
      return;
    }

    matchPageConfig(siteMapConfig.pageTypes).then(mergeConfigWithGlobal).then(handleConfig).then(processResult).then(startListenerAndContentZoneSearch).catch(function (e) {
      Signals.onFireException.emit(new Error("Unhandled exception: ".concat(e)), 'Site-wide Javascript');
    });
  };

  // tslint:disable no-string-literal
  var timeOnPage = 0;
  var lastActiveTimestamp = -1;
  var lastPingRequestSent = -1;
  var activityPingRequestTimeout;
  var setUserInactiveTimeout;
  var unbindActivityListener;
  function cancelActivityTracking() {
    Logger.debug('Cancelling activity tracking.');
    clearTimeout(activityPingRequestTimeout);
    activityPingRequestTimeout = -1;
    removeEventListener(window, 'unload', unloadFunction);
    removeEventListener(window, 'blur', windowBlurFunction);
    removeEventListener(window, 'focus', windowFocusFunction);
    removeEventListener(document, 'mousemove keydown scroll click', activityRegistered);
  }

  function refreshActivityTrackingBeforeSendEvent(actionEvent) {
    if (actionEvent.itemAction && actionEvent.itemAction.includes('View')) {
      setupActivityTimers();
    }
  }

  function sendExistingActivityTimersAndClear(dontSendSmallIncrements) {
    if (activityPingRequestTimeout !== -1) {
      sendActivityPingRequest(false, dontSendSmallIncrements);
      clearTimeout(activityPingRequestTimeout);
      activityPingRequestTimeout = -1;
    }
  }
  function setupActivityTimers() {
    if (state.beaconConfig.doNotTrackPingRequestsForActions) {
      return;
    }

    sendExistingActivityTimersAndClear(true);

    if (unbindActivityListener) {
      unbindActivityListener();
    }

    unbindActivityListener = Signals.onEventSend.on(refreshActivityTrackingBeforeSendEvent);
    var possibleNewTimestamp = Date.now();

    if (lastActiveTimestamp === -1 || possibleNewTimestamp - lastActiveTimestamp >= state.beaconConfig.minimumActivityTimeToRegister) {
      lastActiveTimestamp = possibleNewTimestamp;
    }

    activityPingRequestTimeout = setTimeout(function () {
      sendActivityPingRequest(true);
    }, state.beaconConfig.timeOnPageTimerLengthMillis);
    Logger.info('Setting up time on page listeners.');
    removeEventListener(window, 'unload', unloadFunction);
    addEventListener(window, 'unload', unloadFunction);
    removeEventListener(window, 'blur', windowBlurFunction);
    addEventListener(window, 'blur', windowBlurFunction);
    removeEventListener(window, 'focus', windowFocusFunction);
    addEventListener(window, 'focus', windowFocusFunction);
    removeEventListener(document, 'mousemove keydown scroll click', activityRegistered);
    addEventListener(document, 'mousemove keydown scroll click', activityRegistered);
  }

  function sendActivityPingRequest(shouldResetTimer, dontSendSmallIncrements) {
    var currentTime = Date.now();

    if (lastActiveTimestamp !== -1) {
      var timeSinceLastActive = currentTime - lastActiveTimestamp;

      if (state.beaconConfig.timeOnPageTimerLengthMillis < timeSinceLastActive) {
        setUserInactive();
      } else {
        Logger.trace("Evergage: timeOnPage before: sendActivityPingRequest: ".concat(timeOnPage));
        timeOnPage += timeSinceLastActive;
        Logger.trace("Evergage: timeOnPage after: sendActivityPingRequest: ".concat(timeOnPage));

        if (setUserInactiveTimeout !== -1) {
          clearTimeout(setUserInactiveTimeout);
        }

        setUserInactiveTimeout = setTimeout(setUserInactive, state.beaconConfig.timeOnPageTimerLengthMillis - timeSinceLastActive);
      }
    }

    if (timeOnPage > 0) {
      // The user's clock probably got set back.  Rezero the clock so future activity will get correctly tracked
      timeOnPage = Math.min(timeOnPage, state.beaconConfig.timeOnPageTimerLengthMillis);

      if (dontSendSmallIncrements !== true || timeOnPage >= 2000) {
        sendPing(buildPingRequest(timeOnPage));
      }

      timeOnPage = 0;
    } // The user's clock probably got set back.  Rezero the clock so future activity will get correctly tracked


    if (timeOnPage < 0) {
      timeOnPage = 0;
    }

    if (shouldResetTimer) {
      if (activityPingRequestTimeout !== -1) {
        clearTimeout(activityPingRequestTimeout);
      } // only reason not to reset is if multiple viewItem calls occur on the same page


      activityPingRequestTimeout = setTimeout(function () {
        sendActivityPingRequest(true);
      }, state.beaconConfig.timeOnPageTimerLengthMillis);
    }
  }

  function buildPingRequest(time) {
    var pingEvent = {};
    var currentPage = getCurrentPage();

    if (currentPage && currentPage.itemAction && currentPage.catalog) {
      pingEvent.catalog = {};
      Object.keys(currentPage.catalog).forEach(function (currentPageItemKey) {
        var currentPageItem = currentPage.catalog[currentPageItemKey];
        pingEvent.catalog[currentPageItemKey] = state.beaconConfig.trackContextualRelatedItems ? sparsifyPreservingRelatedItems(currentPageItem) : sparsifyItemIdOnly(currentPageItem);

        if (currentPage.action != null) {
          pingEvent.action = currentPage.action;
        }
      });
    }

    pingEvent.timeOnPageMillis = time;
    return pingEvent;
  }

  function unloadFunction(event) {
    sendExistingActivityTimersAndClear();
  }

  function windowBlurFunction(event) {
    try {
      Logger.trace('Evergage: window blurred');
      setUserInactive();
    } catch (exception) {
      sendException(exception, 'windowBlurFunction');
    }
  }

  function windowFocusFunction(event) {
    try {
      Logger.trace('Evergage: window focused');
      activityRegistered();
    } catch (exception) {
      sendException(exception, 'windowFocusFunction');
    }
  }

  function setUserInactive() {
    try {
      if (setUserInactiveTimeout !== -1) {
        clearTimeout(setUserInactiveTimeout);
        setUserInactiveTimeout = -1;
      }

      var currentTime = Date.now();
      var timeToAdd = 0;

      if (lastActiveTimestamp !== -1) {
        timeToAdd = currentTime - lastActiveTimestamp;
      }

      if (lastPingRequestSent !== -1) {
        var timeSinceLastPingRequest = currentTime - lastPingRequestSent;

        if (timeSinceLastPingRequest < timeToAdd || timeToAdd === 0) {
          timeToAdd = timeSinceLastPingRequest;
        }
      }

      Logger.trace("Evergage: timeOnPage before: setUserInactive: ".concat(timeOnPage));
      timeOnPage += timeToAdd;
      Logger.trace("Evergage: timeOnPage after: setUserInactive: ".concat(timeOnPage));
      lastActiveTimestamp = -1;
    } catch (exception) {
      sendException(exception, 'setUserInactive');
    }
  }

  function activityRegistered() {
    Logger.trace('activity registered');

    try {
      if (setUserInactiveTimeout !== -1) {
        clearTimeout(setUserInactiveTimeout);
        setUserInactiveTimeout = -1;
      }

      var possibleNewTimestamp = Date.now();

      if (lastActiveTimestamp === -1 || possibleNewTimestamp - lastActiveTimestamp >= state.beaconConfig.minimumActivityTimeToRegister) {
        if (lastActiveTimestamp !== -1) {
          Logger.trace("Evergage: timeOnPage before: activityRegistered: ".concat(timeOnPage));
          timeOnPage += possibleNewTimestamp - Math.max(lastActiveTimestamp, lastPingRequestSent);
          Logger.trace("Evergage: timeOnPage after: activityRegistered: ".concat(timeOnPage));
        }

        lastActiveTimestamp = possibleNewTimestamp;
      }
    } catch (exception) {
      sendException(exception, 'activityRegistered');
    }
  }

  var Activity = {
    setupActivityTimers: setupActivityTimers,
    activityRegistered: activityRegistered,
    setUserInactive: setUserInactive
  };

  function listener(bind, selector, optionsOrCallback) {
    if (_typeof(optionsOrCallback) === "object") {
      return {
        bind: bind,
        selector: selector,
        options: optionsOrCallback
      };
    } else if (typeof optionsOrCallback === "function") {
      return {
        bind: bind,
        selector: selector,
        callback: optionsOrCallback
      };
    } else {
      return null;
    }
  }

  var fromSelector = function fromSelector(selector, transform) {
    return function () {
      if (typeof selector != 'string') {
        Signals.onFireException.emit(new Error("getValue for ".concat(sitemapState.config.currentKey, " failed on ").concat(sitemapState.result.matchedConfig.name, ". Selector must be a string.")), 'Site-wide Javascript');
        return null;
      }

      var resolvedValue = cash(selector).first().text();
      resolvedValue = internalTransform(transform, resolvedValue);
      return resolvedValue;
    };
  };

  var fromSelectorAttribute = function fromSelectorAttribute(selector, attribute, transform) {
    return function () {
      if (typeof selector != 'string') {
        Signals.onFireException.emit(new Error("getValue for ".concat(sitemapState.config.currentKey, " failed on ").concat(sitemapState.result.matchedConfig.name, ". Selector must be a string.")), 'Site-wide Javascript');
        return null;
      }

      if (typeof attribute != 'string') {
        Signals.onFireException.emit(new Error("getValue for ".concat(sitemapState.config.currentKey, " failed on ").concat(sitemapState.result.matchedConfig.name, ". Attribute must be a string.")), 'Site-wide Javascript');
        return null;
      }

      var resolvedValue = cash(selector).first().attr(attribute);
      resolvedValue = internalTransform(transform, resolvedValue);
      return resolvedValue;
    };
  };

  var fromSelectorMultiple = function fromSelectorMultiple(selector, transform) {
    return function () {
      if (typeof selector != 'string') {
        Signals.onFireException.emit(new Error("getValue for ".concat(sitemapState.config.currentKey, " failed on ").concat(sitemapState.result.matchedConfig.name, ". Selector must be a string.")), 'Site-wide Javascript');
        return null;
      }

      var selectedElements = cash(selector);
      var resolvedValue = selectedElements.get().map(function (elem) {
        return cash(elem).text();
      });
      ;
      resolvedValue = internalTransform(transform, resolvedValue);
      return resolvedValue;
    };
  };

  var fromSelectorAttributeMultiple = function fromSelectorAttributeMultiple(selector, attribute, transform) {
    return function () {
      if (typeof selector != 'string') {
        Signals.onFireException.emit(new Error("getValue for ".concat(sitemapState.config.currentKey, " failed on ").concat(sitemapState.result.matchedConfig.name, ". Selector must be a string.")), 'Site-wide Javascript');
        return null;
      }

      if (typeof attribute != 'string') {
        Signals.onFireException.emit(new Error("getValue for ".concat(sitemapState.config.currentKey, " failed on ").concat(sitemapState.result.matchedConfig.name, ". Attribute must be a string.")), 'Site-wide Javascript');
        return null;
      }

      var selectedElements = cash(selector);
      var resolvedValue = selectedElements.get().map(function (elem) {
        return cash(elem).attr(attribute);
      });
      ;
      resolvedValue = internalTransform(transform, resolvedValue);
      return resolvedValue;
    };
  };

  var fromItemProp = function fromItemProp(itemProp, transform) {
    return function () {
      var resolvedValue = cash("[itemprop='" + itemProp + "']").first().attr("content");
      resolvedValue = internalTransform(transform, resolvedValue);
      return resolvedValue;
    };
  };

  var fromMeta = function fromMeta(metaTag, transform) {
    return function () {
      var resolvedValue = cash("meta[name='" + metaTag + "']").first().attr("content") || cash("meta[property='" + metaTag + "']").first().attr("content");
      resolvedValue = internalTransform(transform, resolvedValue);
      return resolvedValue;
    };
  };

  var fromWindow = function fromWindow(path, transform) {
    return function () {
      var resolvedValue = getValueFromNestedObject(path);
      resolvedValue = internalTransform(transform, resolvedValue);
      return resolvedValue;
    };
  };

  var fromJsonLd = function fromJsonLd(path, transform) {
    return function () {
      var json = cash("script[type='application/ld+json']").first().text();

      try {
        var parsedJson = JSON.parse(json);

        if (!path) {
          return internalTransform(transform, parsedJson);
        } else {
          var resolvedValue = getValueFromNestedObject(path, parsedJson);
          return internalTransform(transform, resolvedValue);
        }
      } catch (e) {
        Signals.onFireException.emit(new Error("Parsing JSON-LD for ".concat(sitemapState.config.currentKey, " failed on ").concat(sitemapState.result.matchedConfig.name, ". ").concat(e)), 'Site-wide Javascript');
      }
    };
  };

  var fromCanonical = function fromCanonical(transform) {
    return function () {
      var resolvedValue = cash('link[rel=canonical]').attr("href");
      resolvedValue = internalTransform(transform, resolvedValue);
      return resolvedValue;
    };
  };

  var fromHref = function fromHref(transform) {
    return function () {
      var resolvedValue = window.location.href;
      resolvedValue = internalTransform(transform, resolvedValue);
      return resolvedValue;
    };
  };

  var buildCategoryId = function buildCategoryId(selector, startFrom, ignoreLast, transform) {
    return function () {
      var elements = Array.from(cash(selector));

      if (startFrom) {
        elements = elements.slice(startFrom);
      }

      if (ignoreLast) {
        elements = elements.slice(0, -1);
      }

      var idParts = [];
      elements.forEach(function (elem) {
        var idPart = cash(elem).text().trim();

        if (idPart) {
          idParts.push(idPart);
        } else {
          Signals.onFireException.emit(new Error("buildCategoryId for ".concat(sitemapState.config.currentKey, " failed on ").concat(sitemapState.result.matchedConfig.name, ". A category part is null.")), 'Site-wide Javascript');
        }
      });
      var categoryId = idParts.join('|');
      categoryId = internalTransform(transform, categoryId);
      return categoryId;
    };
  };

  var buildCategoryIdAttribute = function buildCategoryIdAttribute(selector, attribute, startFrom, ignoreLast, transform) {
    return function () {
      var elements = Array.from(cash(selector));

      if (startFrom) {
        elements = elements.slice(startFrom);
      }

      if (ignoreLast) {
        elements = elements.slice(0, -1);
      }

      var idParts = [];
      elements.forEach(function (elem) {
        var idPart = cash(elem).attr(attribute).trim();

        if (idPart) {
          idParts.push(idPart);
        } else {
          Signals.onFireException.emit(new Error("buildCategoryId for ".concat(sitemapState.config.currentKey, " failed on ").concat(sitemapState.result.matchedConfig.name, ". A category part is null.")), 'Site-wide Javascript');
        }
      });
      var categoryId = idParts.join('|');
      categoryId = internalTransform(transform, categoryId);
      return categoryId;
    };
  };

  var checkMultiple = function checkMultiple() {
    for (var _len = arguments.length, resolvers = new Array(_len), _key = 0; _key < _len; _key++) {
      resolvers[_key] = arguments[_key];
    }

    resolvers.forEach(function (resolver) {
      var resolvedValue = resolver();

      if (resolvedValue) {
        return resolvedValue;
      }
    });
  };

  var internalTransform = function internalTransform(transformFunc, resolvedValue) {
    if (transformFunc) {
      try {
        return transformFunc(resolvedValue);
      } catch (e) {
        Signals.onFireException.emit(new Error("getValue for ".concat(sitemapState.config.currentKey, " failed on ").concat(sitemapState.result.matchedConfig.name, " inside of the custom transform function. ").concat(e)), 'Site-wide Javascript');
        return null;
      }
    }

    return resolvedValue;
  };

  var resolvers = {
    fromSelector: fromSelector,
    fromSelectorAttribute: fromSelectorAttribute,
    fromSelectorMultiple: fromSelectorMultiple,
    fromSelectorAttributeMultiple: fromSelectorAttributeMultiple,
    fromItemProp: fromItemProp,
    fromMeta: fromMeta,
    fromWindow: fromWindow,
    fromJsonLd: fromJsonLd,
    fromCanonical: fromCanonical,
    fromHref: fromHref,
    buildCategoryId: buildCategoryId,
    buildCategoryIdAttribute: buildCategoryIdAttribute
  };

  // tslint:disable variable-name
  var cashDom = cash;

  var onBeforeInitHook = function onBeforeInitHook() {
    return true;
  };

  var unbindOnFireException;
  var unbindOnEventResponse;
  var unbindOnSendEvent;
  var unbindOnPageMatchStatusUpdated;
  var unbindOnStatSend;
  var unbindOnInitSitemap;
  var onBeforeInit = function onBeforeInit(callback, cancel) {
    Logger.warn("Evergage.onBeforeInit is deprecated. Use the Evergage.CustomEvents.OnInit event instead.");
    callback(state.endpointConfig, {});
    return false;
  };

  function unbindPublicSignalsToDocument() {
    if (unbindOnFireException) {
      unbindOnFireException();
    }

    if (unbindOnEventResponse) {
      unbindOnEventResponse();
    }

    if (unbindOnSendEvent) {
      unbindOnSendEvent();
    }

    if (unbindOnPageMatchStatusUpdated) {
      unbindOnPageMatchStatusUpdated();
    }

    if (unbindOnInitSitemap) {
      unbindOnInitSitemap();
    }
  }

  function bindPublicSignalsToDocument() {
    // unbind when Evergage is reinitialized without new page load (e.g. VE)
    unbindPublicSignalsToDocument();
    unbindOnFireException = Signals.onFireException.on(function (error, context) {
      document.dispatchEvent(new CustomEvent(CustomEvents.OnException, {
        detail: {
          error: error,
          context: context
        }
      }));
      errorReceiver.send(toFlatError(error, context));
    });
    unbindOnEventResponse = Signals.onEventResponse.on(function (response, actionEvent) {
      var experienceIdsFromEvent = response.campaignResponses.map(function (campaignResponseFromEvent) {
        return campaignResponseFromEvent.experienceId;
      });
      sitemapState.campaignResponses = [].concat(_toConsumableArray(response.campaignResponses), _toConsumableArray(sitemapState.campaignResponses.filter(function (campaignResponse) {
        return !experienceIdsFromEvent.includes(campaignResponse.experienceId);
      })));
      document.dispatchEvent(new CustomEvent(CustomEvents.OnEventResponse, {
        detail: {
          response: response,
          actionEvent: actionEvent
        }
      }));
    });
    unbindOnSendEvent = Signals.onEventSend.on(function (actionEvent) {
      document.dispatchEvent(new CustomEvent(CustomEvents.OnEventSend, {
        detail: {
          actionEvent: actionEvent
        }
      }));
    });
    unbindOnStatSend = Signals.onStatSend.on(function (campaignStat, campaignResponse) {
      document.dispatchEvent(new CustomEvent(CustomEvents.OnStatSend, {
        detail: {
          campaignStat: campaignStat,
          campaignResponse: campaignResponse
        }
      }));
    });
    unbindOnPageMatchStatusUpdated = Signals.onPageMatchStatusUpdated.on(function (matchStatus) {
      document.dispatchEvent(new CustomEvent(CustomEvents.OnPageMatchStatusUpdated, {
        detail: {
          matchStatus: matchStatus
        }
      }));
    });
    unbindOnInitSitemap = Signals.onInitSitemap.on(function (sitemapConfig) {
      document.dispatchEvent(new CustomEvent(CustomEvents.OnInitSitemap, {
        detail: {
          sitemapConfig: sitemapConfig
        }
      }));
    });
  }

  function reset() {
    Logger.debug('Unbinding signal subscriptions.');

    try {
      Signals.unbindAll();
    } catch (e) {
      Logger.debug('Failed to unbind Experience.Signals', e);
    }
  }

  function checkEnv() {
    if (userAgentIsRobot()) {
      return shutDown('You are a robot.');
    } // Casting visibilityState to avoid complaints about 'prerender' no longer being a valid VisibilityState value
    // in TypeScript 3.7.  Some browsers might still return this, even though it's deprecated.


    var preRendered = document.visibilityState === 'prerender';

    if (preRendered && isSafari) {
      return shutDown('Page is pre-rendered and loaded in Safari.');
    }

    return true;
  }

  function shutDown(reason) {
    Logger.info("Shutting down beacon: ".concat(reason));
    setBeaconState("shutDown"
    /* SHUT_DOWN */
    );
    return false;
  }
  var getConfig = function getConfig() {
    var endpointConfig = state.endpointConfig,
        config = state.beaconConfig;
    return _objectSpread2({}, endpointConfig, {}, config);
  };
  var configure = function configure(endpointConfig, config) {
    if (state.beaconState == "running"
    /* RUNNING */
    ) {
        reset();
      }

    setBeaconState("initializing"
    /* INITIALIZING */
    );
    state.endpointConfig = _objectSpread2({}, state.endpointConfig, {}, endpointConfig);
    var _state$endpointConfig = state.endpointConfig,
        account = _state$endpointConfig.account,
        dataset = _state$endpointConfig.dataset,
        siteConfigVersion = _state$endpointConfig.siteConfigVersion;

    if (!account || !dataset) {
      return shutDown('account/dataset undefined. Check your beacon configuration.');
    }

    if (!siteConfigVersion) {
      return shutDown('beacon config version undefined');
    }

    if (!state.endpointConfig.cdnUrl) state.endpointConfig.cdnUrl = determineCdnUrl({
      account: account,
      dataset: dataset
    });

    if (!state.endpointConfig.cdnUrl) {
      return shutDown('cdnUrl undefined. Check your beacon configuration.');
    }

    if (!state.endpointConfig.trackerUrl) state.endpointConfig.trackerUrl = determineTrackerUrl({
      account: account,
      dataset: dataset
    });

    if (!state.endpointConfig.trackerUrl) {
      return shutDown('trackerUrl undefined. Check your beacon configuration.');
    }

    state.beaconConfig = _objectSpread2({}, state.beaconConfig, {}, config);
    setBeaconState("configured"
    /* CONFIGURED */
    );
  };
  var init = function init(beaconConfig) {
    var shouldInit = document.dispatchEvent(new CustomEvent(CustomEvents.OnInit, {
      detail: {
        beaconConfig: _objectSpread2({}, state.beaconConfig, {}, state.endpointConfig, {}, beaconConfig)
      },
      cancelable: true
    }));
    return new Promise(function (resolve) {
      if (shouldInit && onBeforeInitHook(state.endpointConfig, beaconConfig)) {
        if (!checkEnv()) {
          return;
        }

        var _state$endpointConfig2 = state.endpointConfig,
            account = _state$endpointConfig2.account,
            dataset = _state$endpointConfig2.dataset,
            trackerUrl = _state$endpointConfig2.trackerUrl; // default to setting trackerUrl from the endpoint config passed to Evergage.configure
        // if trackerUrl is present in Evergage.init({ trackerUrl: '' }) within sitewide allow
        // it to overwrite the trackerUrl when spreading beaconConfig into state.config below

        state.beaconConfig = _objectSpread2({}, state.beaconConfig, {
          trackerUrl: trackerUrl
        }, beaconConfig);
        var cookieDomain = state.beaconConfig.cookieDomain;

        if (!cookieDomain) {
          cookieDomain = window.location.hostname;
        }

        Cookies.setCookieHash(account, dataset, cookieDomain);
        SessionStorage.setStorageKeyPrefix(account, dataset);
        loadVisitor();
        refreshVisitorSession();
        initEventReceivers(state.beaconConfig.trackerUrl);
        bindPublicSignalsToDocument();
        Activity.setupActivityTimers(); // In case Evergage.shutDown() was invoked in siteWideJS

        if (state.beaconState !== "shutDown"
        /* SHUT_DOWN */
        ) {
            Logger.debug("Initialized Tracking Beacon v".concat(BEACON_VERSION, " for account[").concat(account, "] dataset[").concat(dataset, "]"));
            setBeaconState("running"
            /* RUNNING */
            );
            resolve(state);
            return true;
          }
      } else {
        cancelActivityTracking();
        Logger.debug('Initialization aborted onBeforeInitHook() returned false.');
      }
    });
  };
  var reinit = function reinit() {
    init(getConfig()).then(function () {
      initSitemap(sitemapState.config);
    });
  };

  exports.CustomEvents = CustomEvents;
  exports.addEventListener = addEventListener$1;
  exports.addResponseListener = addResponseListener;
  exports.build = build;
  exports.cashDom = cashDom;
  exports.configure = configure;
  exports.getConfig = getConfig;
  exports.getContentZoneSelector = getContentZoneSelector;
  exports.getCurrentPage = getCurrentPage;
  exports.getLoggingLevel = getLoggingLevel;
  exports.getState = getState;
  exports.getVersion = getVersion;
  exports.init = init;
  exports.initSitemap = initSitemap;
  exports.listener = listener;
  exports.log = Logger;
  exports.onBeforeInit = onBeforeInit;
  exports.reinit = reinit;
  exports.resolvers = resolvers;
  exports.runSpecificConfig = runSpecificConfig;
  exports.sendEvent = sendEvent;
  exports.sendException = sendException;
  exports.sendStat = sendStat;
  exports.setConfig = setConfig;
  exports.setLoggingLevel = setLoggingLevel;
  exports.shutDown = shutDown;
  exports.util = util;

  return exports;

}({}));
//# sourceMappingURL=evergage.js.map

(function configureEvergage() {
    try {
       Evergage.configure({
           account: "training",
           dataset: "amask",
           cdnUrl: "https://cdn.evergage.com",
           trackerUrl: "https://training.us-1.evergage.com",
           siteConfigVersion: "127"
       },{"allowBotTraffic":false,"corsAllowedOrigins":["*"],"defaultCurrency":"USD","defaultLocale":null,"disableQtipWindowScroll":false,"doNotStoreCookiesRequireProvidedAnonId":false,"doNotTrackPingRequestsForActions":false,"enableCorsRestrictedOrigins":false,"enableMessageRotation":false,"enableRememberMeUserIds":false,"enableTemplateEsc":false,"hideContentSections":true,"hideContentSectionsMillis":5000,"hidePagesForRedirect":false,"hidePagesForRedirectMillis":1000,"lastModified":1601048502021,"preventSensitiveDataCapture":false,"rememberMeUserIdsMillis":63072000000,"sendErrorEvents":true,"showPoweredBy":false,"siteConfigExecBeforePageReady":false,"spaRouteChangeTimeout":500,"trackAnonymousVisitors":true,"trackContextualRelatedItems":false,"trackSubdomainAsCompany":false,"trackUnknownPagesByTitle":false,"treatHashChangeAsPageLoad":false}       );
    } catch (e) {
          console.error(e);
    }
})();


try {
    const CAMPAIGN_STAT_ATTRIBUTE = {
            CAMPAIGN: "data-evg-campaign-id",
            EXPERIENCE: "data-evg-experience-id",
            USER_GROUP: "data-evg-user-group",
            CLICKTHROUGH: "data-evg-clickthrough",
            IGNORE_CLICKTHROUGH: "data-evg-ignore-clickthrough",
            DISMISSAL: "data-evg-dismissal",
            ITEM: "data-evg-item-id",
            ITEM_TYPE: "data-evg-item-type"
        };

        const CAMPAIGN_STAT_TYPE = {
            IMPRESSION: "Impression",
            CLICKTHROUGH: "Clickthrough",
            DISMISSAL: "Dismissal"
        };

        const CAMPAIGN_STAT_USER_GROUP = {
            TEST: "Test",
            CONTROL: "Control"
        };

        document.addEventListener(Evergage.CustomEvents.OnTemplateDisplayEnd, (event) => {
            if (validateOnTemplateDisplayEndEvent(event)) {
                const payload = event.detail.payload;
                const campaignElement = getCampaignElementFromPayload(payload);
                sendImpression(payload, campaignElement);
                bindCampaignClickthroughsAndDismissals(campaignElement);
            }
        });

        const sendImpression = (payload, campaignElement) => {
            const userGroup = payload.userGroup;
            const stat = {
                control: userGroup === CAMPAIGN_STAT_USER_GROUP.CONTROL,
                experienceId: payload.experience,
                stat: CAMPAIGN_STAT_TYPE.IMPRESSION
            };
            const itemStats = generateItemStats(campaignElement);
            if (Object.keys(itemStats).length > 0) {
                stat.catalog = itemStats;
            }
            if (userGroup === CAMPAIGN_STAT_USER_GROUP.CONTROL || (userGroup === CAMPAIGN_STAT_USER_GROUP.TEST && campaignElement.length > 0)) {
                Evergage.sendStat({campaignStats: [stat]});
            } else {
                Evergage.log.warn("campaignStatsTracking.js", "Experience", payload.experience, "not found in DOM.");
            }
        };

        const generateItemStats = (campaignElement) => {
            const catalogStats = {};
            const itemNodes = Evergage.cashDom(campaignElement).find("[" + CAMPAIGN_STAT_ATTRIBUTE.ITEM_TYPE + "]");
            if (!itemNodes || itemNodes.length === 0) {
                return catalogStats;
            }
            Array.from(itemNodes).forEach(function(itemNode) {
                const itemId = Evergage.cashDom(itemNode).attr(CAMPAIGN_STAT_ATTRIBUTE.ITEM);
                const itemType = Evergage.cashDom(itemNode).attr(CAMPAIGN_STAT_ATTRIBUTE.ITEM_TYPE);
                if (itemId && itemType) {
                    if (!catalogStats[itemType]) {
                        catalogStats[itemType] = [];
                    }
                    catalogStats[itemType].push(itemId);
                }
            });
            return catalogStats;
        }

        const getCampaignElementFromPayload = (payload) => {
            const experienceId = payload.experience;
            const campaignSelector = "[" + CAMPAIGN_STAT_ATTRIBUTE.EXPERIENCE + "=" + "'" + experienceId + "'" + "]";
            return Evergage.cashDom(campaignSelector);
        };

        const getCampaignClickthroughAndDismissalElements = (campaignElement) => {
            return Evergage.cashDom(campaignElement).find(`
                a,
                [${CAMPAIGN_STAT_ATTRIBUTE.CLICKTHROUGH}],
                [${CAMPAIGN_STAT_ATTRIBUTE.DISMISSAL}] a,
                [${CAMPAIGN_STAT_ATTRIBUTE.DISMISSAL}]
            `);
        };

        const sendClickthroughOrDismissal = (e) => {
            if (Evergage.cashDom(e.target).closest(`[${CAMPAIGN_STAT_ATTRIBUTE.IGNORE_CLICKTHROUGH}]`).length > 0) {
                return;
            }
            const campaignElement = Evergage.cashDom(e.target).closest(`[${CAMPAIGN_STAT_ATTRIBUTE.EXPERIENCE}]`);
            if (campaignElement.length > 0) {
                const stat = {
                    control: campaignElement.attr(CAMPAIGN_STAT_ATTRIBUTE.USER_GROUP) === CAMPAIGN_STAT_USER_GROUP.CONTROL,
                    experienceId: campaignElement.attr(CAMPAIGN_STAT_ATTRIBUTE.EXPERIENCE),
                    stat: Evergage.cashDom(e.target).closest(`[${CAMPAIGN_STAT_ATTRIBUTE.CLICKTHROUGH}]`).length > 0 || Evergage.cashDom(e.target).closest("a").length > 0
                        ? CAMPAIGN_STAT_TYPE.CLICKTHROUGH
                        : CAMPAIGN_STAT_TYPE.DISMISSAL
                };

                if (stat.stat === CAMPAIGN_STAT_TYPE.CLICKTHROUGH) {
                    const itemClickthroughStats = generateItemClickthroughStats(e.target);
                    if (Object.keys(itemClickthroughStats).length > 0) {
                        stat.catalog = itemClickthroughStats;
                    }
                }

                Evergage.sendStat({campaignStats: [stat]});
            }
        };

        const generateItemClickthroughStats = (target) => {
            const itemStats = {};
            const itemId = Evergage.cashDom(target).closest("[" + CAMPAIGN_STAT_ATTRIBUTE.ITEM + "]").attr(CAMPAIGN_STAT_ATTRIBUTE.ITEM);
            const itemType = Evergage.cashDom(target).closest("[" + CAMPAIGN_STAT_ATTRIBUTE.ITEM_TYPE + "]").attr(CAMPAIGN_STAT_ATTRIBUTE.ITEM_TYPE);

            if (itemId && itemType) {
                itemStats[itemType] = [itemId];
            }
            return itemStats;
        }

        const bindCampaignClickthroughsAndDismissals = (campaignElement) => {
            const elements = getCampaignClickthroughAndDismissalElements(campaignElement);
            elements.off("click", sendClickthroughOrDismissal);
            elements.on("click", sendClickthroughOrDismissal);
        };

        const validateOnTemplateDisplayEndEvent = (event) => {
            if (!event.detail) {
                Evergage.log.warn("campaignStatsTracking.js", "No detail object found for onTemplateDisplayEndEvent", event);
                return false;
            }
            if (!event.detail.payload) {
                Evergage.log.warn("campaignStatsTracking.js", "No payload object found for onTemplateDisplayEndEvent", event);
                return false;
            }
            if (!event.detail.payload.campaign) {
                Evergage.log.warn("campaignStatsTracking.js", "No campaign found in payload object", event.detail);
                return false;
            }
            if (!event.detail.payload.experience) {
                Evergage.log.warn("campaignStatsTracking.js", "No experience found in payload object", event.detail);
                return false;
            }
            if (!event.detail.payload.userGroup) {
                Evergage.log.warn("campaignStatsTracking.js", "No user group found in payload object", event.detail);
                return false;
            }
            return true;
        };

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Campaign Stats Tracking:campaignStatsTracking.js");
    }
};


try {
    Evergage.ComparisonShopping = Evergage.ComparisonShopping || (() => {
            const config = {
                actionName: "Comparison Shopping",
                pageTypeToRunOn: "product_detail",
            };

            const state = {
                copied: false,
                currentItem: null,
                currentItemNameLower: "",
                selection: "",
            };

            const internal = {
                mapOptionsToConfig: (options) => {
                    for (const key in config) {
                        if (options.hasOwnProperty(key) && typeof options[key] === typeof config[key] && options[key] !== "") {
                            config[key] = options[key];
                        } else if (options.hasOwnProperty(key)) {
                            Evergage.log.debug(`ComparisonShopping: ${key} is not the correct type.`);
                        }
                    }
                },
                resetCopiedAndSelectionState: () => {
                    state.copied = false;
                    state.selection = "";
                },
                updateCurrentItemInState: (currentItem) => {
                    state.currentItem = currentItem || state.currentItem;
                    state.currentItemNameLower = ((state.currentItem || {}).name || "").toLowerCase().trim();
                },
                updateState: (currentItem) => {
                    internal.updateCurrentItemInState(currentItem);
                },
            };

            const callbacks = {
                handleBlur: () => {
                    try {
                        const {
                            copied,
                            currentItemNameLower,
                            selection
                        } = state;

                        if (copied && selection && currentItemNameLower && currentItemNameLower.includes(selection)) {
                            console.log("Sending Comparison Shopping Event for itemId:", currentItemNameLower);
                            const { contentZones } = ((Evergage.getState().result || {}).matchedConfig || []);
                            Evergage.sendEvent({
                                action: config.actionName,
                                source: {
                                    contentZones: contentZones
                                }
                            });
                            internal.resetCopiedAndSelectionState();
                        }
                    } catch (e) {
                        Evergage.sendException(e, "ComparisonShopping: actions.handleBlur");
                    }
                },
                refreshSelection: () => {
                    state.selection = window.getSelection().toString().toLowerCase().trim();
                },
                setCopiedToTrue: () => {
                    state.copied = true;
                },
            };

            const actions = {
                bindComparisonShop: () => {
                    const {
                        handleBlur,
                        refreshSelection,
                        setCopiedToTrue
                    } = callbacks;

                    if (typeof window.ClipboardEvent === "function" && typeof window.getSelection === "function") {
                        Evergage.cashDom("body").off('.evg-comparison-shopping');
                        Evergage.cashDom("body").on('mouseup.evg-comparison-shopping touchend.evg-comparison-shopping', refreshSelection);
                        Evergage.cashDom("body").on('copy.evg-comparison-shopping', setCopiedToTrue);
                        window.addEventListener('blur', handleBlur);
                    }
                },
            };

            const beaconListeners = {
                addOnEventResponse: () => {
                    document.addEventListener(Evergage.CustomEvents.OnEventResponse, (domEvent) => {
                        try {
                            const {
                                catalog,
                                flags,
                                source
                            } = ((domEvent.detail || {}).actionEvent || {});

                            if ((flags || {}).pageView && source.pageType === config.pageTypeToRunOn) {
                                const currentItem = catalog.Product;
                                if (currentItem) {
                                    internal.updateState(currentItem);
                                    actions.bindComparisonShop();
                                }
                            }
                            return domEvent;
                        } catch (e) {
                            Evergage.sendException(e, "ComparisonShopping: beaconListeners.addOnEventResponse");
                        }
                    })
                },
            };

            return {
                configure: (options) => {
                    if (typeof options === "object") {
                        internal.mapOptionsToConfig(options)
                    }
                },
                init: function() {
                    if ((window.frameElement || {}).id === "siteEditorFrame") return;

                    for (const key in beaconListeners) {
                        beaconListeners[key]();
                    }
                },
            };
        })();
} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Commerce:comparisonShopping.js");
    }
};


try {
    Evergage.DisplayUtils = Evergage.DisplayUtils || (function () {
            var unbindByIds = {};

            function generateId() {
                var id = Math.random().toString(36).slice(2);
                while (unbindByIds[id]) {
                    id = Math.random().toString(36).slice(2);
                }
                return id;
            }

            function getBindId(providedId, defaultId, useRandomId) {
                return providedId || (useRandomId ? generateId() : defaultId);
            }

            function buildBaseMethods(bindId, useRandomId) {
                return {
                    pageElementLoaded: function (targetSelector, observerSelector) {
                        observerSelector = typeof observerSelector === "string" ? observerSelector : "body";
                        if (typeof targetSelector !== "string" || targetSelector === "" || typeof observerSelector !== "string" || observerSelector === "") {
                            throw new Error("[pageElementLoaded] Invalid arguments");
                        }

                        return new Promise(function (resolve) {
                            var targetElements = Evergage.cashDom(targetSelector);
                            if (targetElements.length > 0) {
                                resolve(targetElements[0]);
                            } else {
                                var observerNode = Evergage.cashDom(observerSelector)[0];
                                var observer = new MutationObserver(function (mutationList, observer) {
                                    for (var mutationRecord of mutationList) {
                                        if (mutationRecord.addedNodes && mutationRecord.addedNodes.length > 0) {
                                            for (var addedNode of mutationRecord.addedNodes) {
                                                var targetElement = Evergage.cashDom(addedNode).is(targetSelector)
                                                    ? addedNode
                                                    : Evergage.cashDom(addedNode).find(targetSelector).get(0);
                                                if (targetElement) {
                                                    if (bindId) {
                                                        bindingMethods.unbind(bindId);
                                                    } else {
                                                        observer.disconnect();
                                                    }
                                                    resolve(targetElement);
                                                    return;
                                                }
                                            }
                                        }
                                    }
                                });
                                observer.observe(observerNode, {
                                    childList: true,
                                    subtree: true,
                                });
                            }

                            bindId = getBindId(bindId, "<pageElementLoaded>" + targetSelector, useRandomId);
                            unbindByIds[bindId] = function () {
                                observer && observer.disconnect();
                            };
                        });
                    },
                    pageElementVisible: function (selector, percentage) {
                        var threshold = percentage || 0;
                        if (typeof selector !== "string" || selector === "" || typeof threshold !== "number" || threshold < 0 || threshold > 1) {
                            throw new Error("[pageElementVisible] Invalid arguments");
                        }

                        return new Promise(function (resolve) {
                            var target = Evergage.cashDom(selector);
                            var options = {
                                threshold: threshold,
                            };
                            var observer = new IntersectionObserver(callbackFn, options);

                            function callbackFn(entries, observer) {
                                for (var i = 0; i < entries.length; i++) {
                                    if (entries[i].isIntersecting) {
                                        if (bindId) {
                                            bindingMethods.unbind(bindId);
                                        } else {
                                            observer.disconnect();
                                        }
                                        resolve(entries[i]);
                                        break;
                                    }
                                }
                            }

                            observer.observe(target[0]);
                            bindId = getBindId(bindId, "<pageElementVisible>" + selector, useRandomId);
                            unbindByIds[bindId] = function () {
                                observer.disconnect();
                            };
                        });
                    },
                    pageExit: function (delay) {
                        delay = delay || 0;
                        if (typeof delay !== "number" || delay < 0) {
                            throw new Error("[pageExit] Invalid arguments");
                        }

                        return new Promise(function (resolve) {
                            var $target = Evergage.cashDom(document);
                            var events = "mousemove";
                            var timer;

                            function onmousemove(e) {
                                clearTimeout(timer);
                                if (e.pageY - window.pageYOffset <= 10) {
                                    timer = delay > 0 ? setTimeout(callbackFn.bind(this, e), delay) : callbackFn.call(this, e);
                                }
                            }

                            function callbackFn(e) {
                                if (bindId) {
                                    bindingMethods.unbind(bindId);
                                } else {
                                    $target.off(events, onmousemove);
                                }
                                clearTimeout(timer);
                                resolve(e);
                            }

                            $target.on(events, onmousemove);

                            bindId = getBindId(bindId, "<pageExit>", useRandomId);
                            unbindByIds[bindId] = function () {
                                $target.off(events, onmousemove);
                            };
                        });
                    },
                    pageInactive: function (ms) {
                        if (typeof ms !== "number" || ms <= 0) {
                            throw new Error("[pageInactive] Invalid arguments");
                        }

                        function _pageInactive(ms, state) {
                            var promise = new Promise(function (resolve) {
                                var $target = Evergage.cashDom(document);
                                var resetEvents = "mousemove click scroll keyup keydown";
                                var idleTimer;

                                function callbackFn(e) {
                                    e = e || new Event("pageInactive");
                                    if (bindId && !state.isSubscribe) {
                                        bindingMethods.unbind(bindId);
                                    } else {
                                        $target.off(resetEvents, resetTimer);
                                    }
                                    resolve(e);
                                }

                                function resetTimer(e) {
                                    clearTimeout(idleTimer);
                                    idleTimer = setTimeout(callbackFn.bind(this, e), ms);
                                }

                                resetTimer();

                                $target.on(resetEvents, resetTimer);
                            });

                            promise.subscribe = function subscribe(callback) {
                                delete promise.subscribe;
                                state.isSubscribe = true;
                                promise.then(function (event) {
                                    event.disconnect = function () {
                                        if (bindId) {
                                            bindingMethods.unbind(bindId);
                                        } else {
                                            state.isDisconnected = true;
                                        }
                                    };
                                    callback(event);
                                    !state.isDisconnected && _pageInactive(ms, state).subscribe(callback);
                                });
                                return promise;
                            };

                            return promise;
                        }

                        var state = {
                            isDisconnected: false,
                            isSubscribe: false,
                        };

                        bindId = getBindId(bindId, "<pageInactive>", useRandomId);
                        unbindByIds[bindId] = function () {
                            state.isDisconnected = true;
                        };

                        return _pageInactive(ms, state);
                    },
                    pageScroll: function (percentage) {
                        if (typeof percentage !== "number" || percentage < 0 || percentage > 1) {
                            throw new Error("[pageScroll] Invalid arguments");
                        }

                        return new Promise(function (resolve) {
                            var $target = Evergage.cashDom(document);
                            var events = "scroll";

                            function callbackFn(e) {
                                resolve(e);
                                if (bindId) {
                                    bindingMethods.unbind(bindId);
                                } else {
                                    $target.off(events, onScroll);
                                }
                            }

                            function onScroll(e) {
                                var scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
                                if (scrollPercentage >= percentage) {
                                    callbackFn.call(this, e);
                                }
                            }

                            $target.on(events, onScroll);

                            bindId = getBindId(bindId, "<pageScroll>", useRandomId);
                            unbindByIds[bindId] = function () {
                                $target.off(events, onScroll);
                            };
                        });
                    },
                };
            }

            function buildBindingMethods() {
                return {
                    bind: function (id) {
                        if (id && unbindByIds[id]) {
                            unbindByIds[id]();
                            delete unbindByIds[id];
                        }
                        return buildBaseMethods(id);
                    },
                    unbind: function (id) {
                        if (!id || typeof id !== "string" || typeof unbindByIds[id] !== "function") return null;
                        unbindByIds[id]();
                        delete unbindByIds[id];
                    },
                    getBindings: function () {
                        return unbindByIds;
                    },
                    clearBindings: function () {
                        for (var id in unbindByIds) {
                            if (unbindByIds.hasOwnProperty(id)) {
                                unbindByIds[id]();
                                delete unbindByIds[id];
                            }
                        }
                    }
                };
            }

            var baseMethods = buildBaseMethods(null, true);
            var bindingMethods = buildBindingMethods();
            return Object.assign(baseMethods, bindingMethods);
        })();

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Display Utilities:displayUtils.js");
    }
};


try {
    /**
         *  Personalization Flicker Defense
         */
        Evergage.FlickerDefender = Evergage.FlickerDefender || (() => {
            const personalizationSectionsSelector = "head > style.evergagePersonalizationSections";

            let pageMatchTimeout = 1000;
            let redisplayTimeout = Evergage.getConfig().hideContentSectionsMillis || 2500;

            let personalizedSectionsString = "";
            let sectionsHaveEverBeenHidden = false;
            let hasBeenHidden = false;
            let shouldReshowNow = false;
            let hiddenSections = {};

            const utils = {
                getGlobalContentZoneSelectors: () => {
                    return ((Evergage.getState().config.global || {}).contentZones || [])
                        .filter((contentZone) => (contentZone || {}).selector)
                        .map((contentZone) => contentZone.selector);
                },
                getPageTypeContentZoneSelectors: () => {
                    const { pageTypes } = Evergage.getState().config;
                    return pageTypes.length < 1
                        ? []
                        : pageTypes
                            .map((pageType) => pageType.contentZones || [])
                            .reduce((acc, contentZonesArr) => acc.concat(contentZonesArr), [])
                            .filter((contentZone) => (contentZone || {}).selector)
                            .map((contentZone) => contentZone.selector);
                },
                buildContentZoneSelectors: () => {
                    return [
                        ...new Set([
                            ...utils.getGlobalContentZoneSelectors(),
                            ...utils.getPageTypeContentZoneSelectors()
                        ])
                    ];
                },
                addToPersonalizedSectionsString: (selector) => {
                    if (typeof selector === "string") {
                        try {
                            document.querySelector(selector);
                            if (personalizedSectionsString !== "") {
                                personalizedSectionsString += ", ";
                            }
                            personalizedSectionsString += selector;
                        } catch (exception) {
                            Evergage.sendException(exception, "hideSectionsInvalidCSSSelector");
                        }
                    }
                },
                hasBeenReshown: () => {
                    return Evergage.cashDom(personalizationSectionsSelector).length === 0;
                }
            };

            const actions = {
                hideSections: () => {
                    if (sectionsHaveEverBeenHidden) return;

                    const selectors = utils.buildContentZoneSelectors();
                    if (selectors.length === 0) {
                        Evergage.log.debug("Evergage: Issue with malformed request in hideSections.");
                        return;
                    }
                    for (const selector of selectors) {
                        utils.addToPersonalizedSectionsString(selector);
                    }

                    if (!personalizedSectionsString) return;

                    const head = document.head || document.getElementsByTagName("head")[0];
                    const style = document.createElement("style");
                    Evergage.cashDom(style)
                        .attr({ type: "text/css", class: "evergagePersonalizationSections" })
                        .text(`${personalizedSectionsString} { visibility: hidden !important; }`);

                    clearTimeout(window.evergageReshowPersonalizedSectionsTimeout);
                    window.evergageReshowPersonalizedSectionsTimeout = setTimeout(function () {
                        if (utils.hasBeenReshown()) return;
                        shouldReshowNow = true;
                        actions.reshowPersonalizedSectionsNow();
                    }, redisplayTimeout);

                    head.appendChild(style);
                    sectionsHaveEverBeenHidden = true;
                },
                reshowPersonalizedSections: () => {
                    if (utils.hasBeenReshown()) return;
                    try {
                        if (typeof window.requestAnimationFrame === "function") {
                            Evergage.log.info("Evergage: Scheduling for next animation frame redisplay of sections of the page marked for personalization.");
                            window.requestAnimationFrame(actions.reshowPersonalizedSectionsNow);
                        } else {
                            actions.reshowPersonalizedSectionsNow();
                        }
                    } catch (exception) {
                        Evergage.sendException(exception, "reshowPersonalizedSections");
                    }
                },
                reshowReadyPersonalizedSections: () => {
                    Evergage.cashDom(personalizationSectionsSelector).text(`${personalizedSectionsString} { visibility: hidden !important }`);
                    Evergage.log.info(`Evergage: Redisplaying the following sections of the page marked for personalization: ${personalizedSectionsString}`);
                },
                reshowAllPersonalizedSections: () => {
                    Evergage.cashDom(personalizationSectionsSelector).remove();
                    Evergage.log.info("Evergage: Redisplaying outstanding sections of the page marked for personalization.");
                },
                reshowPersonalizedSectionsNow: () => {
                    if (utils.hasBeenReshown()) return;
                    try {
                        if (shouldReshowNow || Object.keys(hiddenSections).length === 0) {
                            actions.reshowAllPersonalizedSections();
                        } else if (Object.keys(hiddenSections).length > 0) {
                            personalizedSectionsString = "";
                            for (const contentZone in hiddenSections) {
                                utils.addToPersonalizedSectionsString(hiddenSections[contentZone]);
                            }
                            actions.reshowReadyPersonalizedSections();
                        }
                    } catch (exception) {
                        Evergage.sendException(exception, "reshowPersonalizedSectionsNow");
                    }
                }
            };

            const beaconListeners = {
                addOnInit: () => {
                    document.addEventListener(Evergage.CustomEvents.OnInit, (domEvent) => {
                        clearTimeout(window.evergagePageMatchTimeout);
                        window.evergagePageMatchTimeout = setTimeout(function () {
                            const { pageType } = (Evergage.getCurrentPage().source || {});
                            if (utils.hasBeenReshown() || (typeof pageType === "string" && pageType !== "")) return;
                            shouldReshowNow = true;
                            actions.reshowPersonalizedSectionsNow();
                        }, pageMatchTimeout);
                    });
                },
                addPageMatchStatusUpdated: () => {
                    document.addEventListener(Evergage.CustomEvents.OnPageMatchStatusUpdated, (domEvent) => {
                        if (!hasBeenHidden) {
                            actions.hideSections();
                            if (Evergage.cashDom(personalizationSectionsSelector).length > 0) {
                                hasBeenHidden = true;
                            }
                        }
                    });
                },
                addOnEventResponse: () => {
                    document.addEventListener(Evergage.CustomEvents.OnEventResponse, (domEvent) => {
                        const { campaignResponses } = ((domEvent.detail || {}).response || {});
                        if ((campaignResponses || []).length >= 1) {
                            personalizedSectionsString = "";
                            for (const campaign of campaignResponses) {
                                const { contentZone } = ((campaign || {}).payload || {});
                                const contentZoneSelector = Evergage.getContentZoneSelector(((campaign || {}).payload || {}).contentZone);
                                if (typeof contentZoneSelector === "string") {
                                    hiddenSections[contentZone] = contentZoneSelector;
                                    utils.addToPersonalizedSectionsString(contentZoneSelector);
                                }
                            }
                            if (!personalizedSectionsString) {
                                actions.reshowPersonalizedSections();
                                return;
                            }

                            Evergage.cashDom(personalizationSectionsSelector).text(`${personalizedSectionsString} { visibility: hidden !important; }`);
                        } else {
                            actions.reshowPersonalizedSections();
                        }
                    });
                },
                addOnTemplateDisplayEnd: () => {
                    document.addEventListener(Evergage.CustomEvents.OnTemplateDisplayEnd, (domEvent) => {
                        if (utils.hasBeenReshown()) return;
                        const { contentZone } = ((domEvent.detail || {}).payload || {});
                        if (typeof contentZone === "string" && hiddenSections[contentZone]) {
                            delete hiddenSections[contentZone];
                        }
                        actions.reshowPersonalizedSections();
                    });
                },
            };

            return {
                setPageMatchTimeout: (millis) => {
                    if (typeof millis === "number") {
                        pageMatchTimeout = parseInt(millis);
                    }
                },
                setRedisplayTimeout: (millis) => {
                    if (typeof millis === "number") {
                        redisplayTimeout = parseInt(millis);
                    }
                },
                init: function() {
                    for (const key in beaconListeners) {
                        beaconListeners[key]();
                    }
                }
            };
        })();

        if (typeof Evergage.FlickerDefender.init === "function" && (window.frameElement || {}).id !== "siteEditorFrame") {
            Evergage.FlickerDefender.init();
        }

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Flicker Defender:flickerDefender.js");
    }
};


try {
    !function(e,t){for(var n in t)e[n]=t[n]}(window,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){"use strict";n.r(t),n.d(t,"extend",function(){return l}),n.d(t,"toString",function(){return c}),n.d(t,"isFunction",function(){return s}),n.d(t,"isArray",function(){return u}),n.d(t,"indexOf",function(){return p}),n.d(t,"escapeExpression",function(){return f}),n.d(t,"isEmpty",function(){return d}),n.d(t,"createFrame",function(){return h}),n.d(t,"blockParams",function(){return m}),n.d(t,"appendContextPath",function(){return g});const r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},o=/[&<>"'`=]/g,a=/[&<>"'`=]/;function i(e){return r[e]}function l(e){for(let t=1;t<arguments.length;t++)for(let n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}let c=Object.prototype.toString,s=function(e){return"function"==typeof e};s(/x/)&&(s=function(e){return"function"==typeof e&&"[object Function]"===c.call(e)});const u=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===c.call(e)};function p(e,t){for(let n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1}function f(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}return a.test(e)?e.replace(o,i):e}function d(e){return!e&&0!==e||!(!u(e)||0!==e.length)}function h(e){let t=l({},e);return t._parent=e,t}function m(e,t){return e.path=t,e}function g(e,t){return(e?e+".":"")+t}},function(e,t,n){"use strict";const r=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function o(e,t){let n,a,i,l,c=t&&t.loc;c&&(n=c.start.line,a=c.end.line,i=c.start.column,l=c.end.column,e+=" - "+n+":"+i);let s=Error.prototype.constructor.call(this,e);for(let e=0;e<r.length;e++)this[r[e]]=s[r[e]];Error.captureStackTrace&&Error.captureStackTrace(this,o);try{c&&(this.lineNumber=n,this.endLineNumber=a,Object.defineProperty?(Object.defineProperty(this,"column",{value:i,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:l,enumerable:!0})):(this.column=i,this.endColumn=l))}catch(e){}}o.prototype=new Error,t.a=o},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=n(10),a=n(3),i=r(n(4)),l=new Map,c=new Map,s=new Set,u=function(){return document.getElementsByTagName("html").length>0&&null!=document.getElementsByTagName("html")[0].getAttribute(i.VE_LOADING_ATTRIBUTE)||null!=document.getElementById(i.VE_ACTIVE_ELEMENT_ID)||"true"===localStorage.getItem(i.VE_INDICATOR_FLAG)||document.location.href.includes(i.TEST_TEMPLATE_PARAMETER)},p=function(e){return l.get(e)},f=function(e,t){return[e,t.campaign,t.experience].join(":")};t.executeBundles=function(e){e&&e.forEach(function(e){try{Function("TemplateService",e.bundle)({registerTemplate:t.registerTemplate})}catch(e){a.dispatchError(e)}})},t.registerTemplate=function(e){var t=new o.Template(e);l.set(e.name,t)},t.resetTemplate=function(e,t){var n=f(e,t),r=c.get(n);if(r)try{r()}catch(e){a.dispatchError(e)}c.delete(n)},t.renderTemplate=function(e,t){if(l.has(e)){var n=p(e).render(t);c.set(f(e,t),n)}},t.handleCampaignResponses=function(e){u()||e.filter(function(e){return"ng"===e.type}).filter(function(e){return!h(e)}).forEach(function(e){switch(e.userGroup){case"Default":d(e);break;case"Control":t.executeControl(e)}})};var d=function(e){e.templateNames.forEach(function(n){t.renderTemplate(n,e.payload)})};t.executeControl=function(e){e.templateNames.forEach(function(t){var n=p(t),r=e.payload;if(n.control)try{var o=n.control(r);window.Promise&&window.Promise.resolve(o)===o?o.then(function(){a.dispatchTemplateDisplay(r)}):a.dispatchTemplateDisplay(r)}catch(e){a.dispatchError(e)}})};var h=function(e){return e.payload.contentZone&&s.has(e.payload.contentZone)};t.restrictContentZone=function(e){e&&s.add(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getQueryParam=function(e){var t=location.search;e=e.replace(/[[]/,"\\[").replace(/[\]]/,"\\]");var n=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(t);return null===n?"":decodeURIComponent(n[1].replace(/\+/g," "))},t.dispatchTemplateDisplay=function(e){document.dispatchEvent(new CustomEvent(window.Evergage.CustomEvents.OnTemplateDisplayEnd,{detail:{payload:e}}))},t.dispatchError=function(e){document.dispatchEvent(new CustomEvent(window.Evergage.CustomEvents.OnException,{detail:{error:new Error(e),context:"Handlebars Template Gear"}}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TEST_TEMPLATE_STORAGE_KEY="testTemplate",t.TEST_TEMPLATE_PARAMETER="evergageTestTemplate",t.VE_LOADING_ATTRIBUTE="evergagevisualeditorloading",t.VE_INDICATOR_FLAG="evgVE",t.VE_ACTIVE_ELEMENT_ID="evg_ui-visual-editor"},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(e){var r=n(0),o=n(1);t.a=function(t){t.registerHelper("each",function(t,n){if(!n)throw new o.a("Must pass iterator to #each");let a,i,l=n.fn,c=n.inverse,s=0,u="";function p(e,n,o){a&&(a.key=e,a.index=n,a.first=0===n,a.last=!!o,i&&(a.contextPath=i+e)),u+=l(t[e],{data:a,blockParams:Object(r.blockParams)([t[e],e],[i+e,null])})}if(n.data&&n.ids&&(i=Object(r.appendContextPath)(n.data.contextPath,n.ids[0])+"."),Object(r.isFunction)(t)&&(t=t.call(this)),n.data&&(a=Object(r.createFrame)(n.data)),t&&"object"==typeof t)if(Object(r.isArray)(t))for(let e=t.length;s<e;s++)s in t&&p(s,s,s===t.length-1);else if(e.Symbol&&t[e.Symbol.iterator]){const n=[],r=t[e.Symbol.iterator]();for(let e=r.next();!e.done;e=r.next())n.push(e.value);for(let e=(t=n).length;s<e;s++)p(s,s,s===t.length-1)}else{let e;Object.keys(t).forEach(t=>{void 0!==e&&p(e,s-1),e=t,s++}),void 0!==e&&p(e,s-1,!0)}return 0===s&&(u=c(this)),u})}}).call(this,n(5))},function(e,t,n){"use strict";(function(e){t.a=function(t){let n=void 0!==e?e:window,r=n.Handlebars;t.noConflict=function(){return n.Handlebars===t&&(n.Handlebars=r),t}}}).call(this,n(5))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),o=n(11),a=n(2);function i(){/complete|interactive|loaded/.test(document.readyState)?(r.renderTestTemplate(),o.initPreview()):document.addEventListener("DOMContentLoaded",function(){r.renderTestTemplate(),o.initPreview()})}document.addEventListener(window.Evergage.CustomEvents.OnEventResponse,function(e){a.executeBundles(e.detail.response.compiledCampaignTemplates),a.handleCampaignResponses(e.detail.response.campaignResponses)}),t.render=i,i()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=n(3),a=n(4);t.renderTestTemplate=function(){if("true"==o.getQueryParam(a.TEST_TEMPLATE_PARAMETER)){var e=i();addEventListener("storage",function(t){t.key==a.TEST_TEMPLATE_STORAGE_KEY&&(e&&r.resetTemplate(e.templateName,e.templateConfig),e=i())})}};var i=function(){var e=localStorage.getItem(a.TEST_TEMPLATE_STORAGE_KEY);if(e)try{var t=JSON.parse(e);return r.executeBundles(t.templates),r.renderTemplate(t.templateName,t.templateConfig),r.restrictContentZone(t.templateConfig.contentZone),t}catch(e){}}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(12)),a=n(3),i=function(){function e(e){var t=this;if(this.getContentZoneFromMatchedConfig=function(e){var t=window.Evergage.getState().result.matchedConfig;return e.contentZone&&t&&t.contentZones&&0!==t.contentZones.length&&t.contentZones.find(function(t){return t.name===e.contentZone})||null},this.applyRender=function(e){var n=t.getContentZoneFromMatchedConfig(e);n&&t.executeInsertionForTarget(n,e)},this.replaceContentAtTarget=function(e,t){t.innerHTML=e},this.name=e.name,this.apply=e.apply,this.reset=e.reset,this.control=e.control,e.handlebars)try{this.generateHtml=o.default.template(e.handlebars),o.default.partials[e.name]=o.default.template(e.handlebars)}catch(e){a.dispatchError(e)}else this.generateHtml=function(){}}return e.prototype.render=function(e){try{var t=this.apply(e,this.generateHtml,this.applyRender);return window.Promise&&window.Promise.resolve(t)===t?t.then(function(){a.dispatchTemplateDisplay(e)}):a.dispatchTemplateDisplay(e),this.reset.bind(this,e,this.generateHtml)}catch(e){a.dispatchError(e)}},e.prototype.executeInsertionForTarget=function(e,t){if(this.generateHtml){var n=e.selector;try{var r=document.querySelector(n);if(!r){var o='Could not render template. Content zone "'+e.name+'" defined but the selector "'+n+'" not found on the page.';return void a.dispatchError(o)}var i=this.generateHtml(t);if(!i)return;this.replaceContentAtTarget(i,r)}catch(e){a.dispatchError(e)}}},e}();t.Template=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),o=n(2);t.initPreview=function(){window.Evergage.Render={render:function(e,t,n){var a=JSON.stringify({templateName:e,templateConfig:t,templates:n});window.localStorage.setItem(r.TEST_TEMPLATE_STORAGE_KEY,a),o.resetTemplate(e,t),o.executeBundles(n),o.renderTemplate(e,t)},reset:o.resetTemplate},window.Evergage.getContentZoneSelector=function(e){var t=(window.Evergage.getState().result.matchedConfig||{}).contentZones;if(!t)return null;var n=t.find(function(t){return t.name===e});return n&&n.selector?n.selector:null}}},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"VERSION",function(){return b}),n.d(r,"COMPILER_REVISION",function(){return w}),n.d(r,"LAST_COMPATIBLE_COMPILER_REVISION",function(){return y}),n.d(r,"REVISION_CHANGES",function(){return T}),n.d(r,"HandlebarsEnvironment",function(){return _}),n.d(r,"log",function(){return O}),n.d(r,"createFrame",function(){return a.createFrame}),n.d(r,"logger",function(){return E});var o={};n.r(o),n.d(o,"checkRevision",function(){return j}),n.d(o,"template",function(){return M}),n.d(o,"wrapProgram",function(){return S}),n.d(o,"resolvePartial",function(){return C}),n.d(o,"invokePartial",function(){return k}),n.d(o,"noop",function(){return A});var a=n(0),i=n(1),l=function(e){e.registerHelper("blockHelperMissing",function(t,n){let r=n.inverse,o=n.fn;if(!0===t)return o(this);if(!1===t||null==t)return r(this);if(Object(a.isArray)(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):r(this);if(n.data&&n.ids){let e=Object(a.createFrame)(n.data);e.contextPath=Object(a.appendContextPath)(n.data.contextPath,n.name),n={data:e}}return o(t,n)})},c=n(6),s=function(e){e.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new i.a('Missing helper: "'+arguments[arguments.length-1].name+'"')})},u=function(e){e.registerHelper("if",function(e,t){if(2!=arguments.length)throw new i.a("#if requires exactly one argument");return Object(a.isFunction)(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||Object(a.isEmpty)(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,n){if(2!=arguments.length)throw new i.a("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})})},p=function(e){e.registerHelper("log",function(){let t=[void 0],n=arguments[arguments.length-1];for(let e=0;e<arguments.length-1;e++)t.push(arguments[e]);let r=1;null!=n.hash.level?r=n.hash.level:n.data&&null!=n.data.level&&(r=n.data.level),t[0]=r,e.log(...t)})};const f=/^(constructor|__defineGetter__|__defineSetter__|__lookupGetter__|__proto__)$/;var d=function(e){e.registerHelper("lookup",function(e,t){return e?!f.test(String(t))||Object.prototype.propertyIsEnumerable.call(e,t)?e[t]:void 0:e})},h=function(e){e.registerHelper("with",function(e,t){if(2!=arguments.length)throw new i.a("#with requires exactly one argument");Object(a.isFunction)(e)&&(e=e.call(this));let n=t.fn;if(Object(a.isEmpty)(e))return t.inverse(this);{let r=t.data;return t.data&&t.ids&&((r=Object(a.createFrame)(t.data)).contextPath=Object(a.appendContextPath)(t.data.contextPath,t.ids[0])),n(e,{data:r,blockParams:Object(a.blockParams)([e],[r&&r.contextPath])})}})};function m(e,t,n){e.helpers[t]&&(e.hooks[t]=e.helpers[t],n||delete e.helpers[t])}var g=function(e){e.registerDecorator("inline",function(e,t,n,r){let o=e;return t.partials||(t.partials={},o=function(r,o){let i=n.partials;n.partials=Object(a.extend)({},i,t.partials);let l=e(r,o);return n.partials=i,l}),t.partials[r.args[0]]=r.fn,o})};let v={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){let t=Object(a.indexOf)(v.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e,...t){if(e=v.lookupLevel(e),"undefined"!=typeof console&&v.lookupLevel(v.level)<=e){let n=v.methodMap[e];console[n]||(n="log"),console[n](...t)}}};var E=v;const b="4.5.3",w=8,y=7,T={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};function _(e,t,n){var r;this.helpers=e||{},this.partials=t||{},this.decorators=n||{},l(r=this),Object(c.a)(r),s(r),u(r),p(r),d(r),h(r),function(e){g(e)}(this)}_.prototype={constructor:_,logger:E,log:E.log,registerHelper:function(e,t){if("[object Object]"===a.toString.call(e)){if(t)throw new i.a("Arg not supported with multiple helpers");Object(a.extend)(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===a.toString.call(e))Object(a.extend)(this.partials,e);else{if(void 0===t)throw new i.a(`Attempting to register a partial called "${e}" as undefined`);this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===a.toString.call(e)){if(t)throw new i.a("Arg not supported with multiple decorators");Object(a.extend)(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]}};let O=E.log;function P(e){this.string=e}P.prototype.toString=P.prototype.toHTML=function(){return""+this.string};var x=P;function j(e){const t=e&&e[0]||1;if(!(t>=y&&t<=w)){if(t<y){const e=T[w],n=T[t];throw new i.a("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+e+") or downgrade your runtime to an older version ("+n+").")}throw new i.a("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}}function M(e,t){if(!t)throw new i.a("No environment passed to template");if(!e||!e.main)throw new i.a("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);const n=e.compiler&&7===e.compiler[0];let r={strict:function(e,t,n){if(!(e&&t in e))throw new i.a('"'+t+'" not defined in '+e,{loc:n});return e[t]},lookup:function(e,t){const n=e.length;for(let r=0;r<n;r++)if(e[r]&&null!=e[r][t])return e[r][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:a.escapeExpression,invokePartial:function(n,r,o){o.hash&&(r=a.extend({},r,o.hash),o.ids&&(o.ids[0]=!0)),n=t.VM.resolvePartial.call(this,n,r,o);let l=a.extend({},o,{hooks:this.hooks}),c=t.VM.invokePartial.call(this,n,r,l);if(null==c&&t.compile&&(o.partials[o.name]=t.compile(n,e.compilerOptions,t),c=o.partials[o.name](r,l)),null!=c){if(o.indent){let e=c.split("\n");for(let t=0,n=e.length;t<n&&(e[t]||t+1!==n);t++)e[t]=o.indent+e[t];c=e.join("\n")}return c}throw new i.a("The partial "+o.name+" could not be compiled when running in runtime-only mode")},fn:function(t){let n=e[t];return n.decorator=e[t+"_d"],n},programs:[],program:function(e,t,n,r,o){let a=this.programs[e],i=this.fn(e);return t||o||r||n?a=S(this,e,i,t,n,r,o):a||(a=this.programs[e]=S(this,e,i)),a},data:function(e,t){for(;e&&t--;)e=e._parent;return e},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function o(t,n={}){let i=n.data;o._setup(n),!n.partial&&e.useData&&(i=function(e,t){t&&"root"in t||((t=t?Object(a.createFrame)(t):{}).root=e);return t}(t,i));let l,c=e.useBlockParams?[]:void 0;function s(t){return""+e.main(r,t,r.helpers,r.partials,i,c,l)}return e.useDepths&&(l=n.depths?t!=n.depths[0]?[t].concat(n.depths):n.depths:[t]),(s=I(e.main,s,r,n.depths||[],i,c))(t,n)}return o.isTop=!0,o._setup=function(o){if(o.partial)r.helpers=o.helpers,r.partials=o.partials,r.decorators=o.decorators,r.hooks=o.hooks;else{r.helpers=a.extend({},t.helpers,o.helpers),e.usePartial&&(r.partials=a.extend({},t.partials,o.partials)),(e.usePartial||e.useDecorators)&&(r.decorators=a.extend({},t.decorators,o.decorators)),r.hooks={};let i=o.allowCallsToHelperMissing||n;m(r,"helperMissing",i),m(r,"blockHelperMissing",i)}},o._child=function(t,n,o,a){if(e.useBlockParams&&!o)throw new i.a("must pass block params");if(e.useDepths&&!a)throw new i.a("must pass parent depths");return S(r,t,e[t],n,0,o,a)},o}function S(e,t,n,r,o,a,i){function l(t,o={}){let l=i;return!i||t==i[0]||t===e.nullContext&&null===i[0]||(l=[t].concat(i)),n(e,t,e.helpers,e.partials,o.data||r,a&&[o.blockParams].concat(a),l)}return(l=I(n,l,e,i,r,a)).program=t,l.depth=i?i.length:0,l.blockParams=o||0,l}function C(e,t,n){return e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name],e}function k(e,t,n){const r=n.data&&n.data["partial-block"];let o;if(n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath),n.fn&&n.fn!==A){n.data=Object(a.createFrame)(n.data);let e=n.fn;o=n.data["partial-block"]=function(t,n={}){return n.data=Object(a.createFrame)(n.data),n.data["partial-block"]=r,e(t,n)},e.partials&&(n.partials=a.extend({},n.partials,e.partials))}if(void 0===e&&o&&(e=o),void 0===e)throw new i.a("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)}function A(){return""}function I(e,t,n,r,o,i){if(e.decorator){let l={};t=e.decorator(t,l,n,r&&r[0],o,i,r),a.extend(t,l)}return t}var H=n(7);function L(){let e=new _;return a.extend(e,r),e.SafeString=x,e.Exception=i.a,e.Utils=a,e.escapeExpression=a.escapeExpression,e.VM=o,e.template=function(t){return M(t,e)},e}let R=L();R.create=L,Object(H.a)(R),R.default=R;t.default=R}]));
} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Handlebars Templates:index.js");
    }
};


try {
    // syncs with @frontend/packages/ui-chrome-extension/src/constants.ts#CUSTOM_EVENT.MESSAGE_FROM_INTERACTION_STUDIO_TOOLS_GEAR
        var VE_CUSTOM_EVENT_NAME = 'msg_from_interaction_studio_tools_gear';
        // syncs with @frontend/packages/ui-chrome-extension/src/constants.ts#EVENT_TYPE.MESSAGE_FROM_INTERACTION_STUDIO_TOOLS_GEAR
        var TO_LAUNCHER_MESSAGE_TYPE = 'nxve_messageFromInteractionStudioToolsGear';

        var TO_LAUNCHER_PAYLOAD_TYPE = 'beaconSDK_domEvent';

        function sendMessageToEvergageLauncher(message) {
            try {
                document.dispatchEvent(
                    new CustomEvent(VE_CUSTOM_EVENT_NAME, {
                        detail: JSON.stringify(message),
                    })
                );
            } catch (e) {
                console.error(e);
            }
        }

        var eventLinkId = null;

        if (Evergage !== null) {
            document.addEventListener(Evergage.CustomEvents.OnInit, function (
                domEvent
            ) {
                sendMessageToEvergageLauncher({
                    type: TO_LAUNCHER_MESSAGE_TYPE,
                    payload: {
                        type: TO_LAUNCHER_PAYLOAD_TYPE,
                        payload: {
                            name: Evergage.CustomEvents.OnInit,
                            detail: domEvent.detail,
                        },
                    },
                });
            });

            document.addEventListener(Evergage.CustomEvents.OnEventSend, function (
                domEvent
            ) {
                eventLinkId = Math.random().toString().slice(2);

                domEvent.detail.actionEvent._toolsEventLinkId = eventLinkId;
                domEvent.detail.actionEvent.debug = Object.assign(
                    domEvent.detail.actionEvent.debug
                        ? domEvent.detail.actionEvent.debug
                        : {},
                    { explanations: true }
                );

                sendMessageToEvergageLauncher({
                    type: TO_LAUNCHER_MESSAGE_TYPE,
                    payload: {
                        type: TO_LAUNCHER_PAYLOAD_TYPE,
                        payload: {
                            name: Evergage.CustomEvents.OnEventSend,
                            detail: domEvent.detail,
                        },
                    },
                });
            });

            document.addEventListener(Evergage.CustomEvents.OnEventResponse, function (
                domEvent
            ) {
                if (domEvent.detail) {
                    const currentPage = Evergage.getCurrentPage();
                    const sitemapConfig = Evergage.getState().config;
                    const matchedPageConfig =
                        Evergage.getState().result &&
                        Evergage.getState().result.matchedConfig;

                    eventLinkId = null;

                    sendMessageToEvergageLauncher({
                        type: TO_LAUNCHER_MESSAGE_TYPE,
                        payload: {
                            type: TO_LAUNCHER_PAYLOAD_TYPE,
                            payload: {
                                name: Evergage.CustomEvents.OnEventResponse,
                                detail: {
                                    response: domEvent.detail.response,
                                    currentPage: currentPage,
                                    sitemapConfig: sitemapConfig,
                                    matchedPageConfig: matchedPageConfig,
                                },
                            },
                        },
                    });
                }
            });
        }

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Interaction Studio Tools:interactionStudioTools.js");
    }
};


try {
    (function() {
            function injectVisualEditorLaunchScript(account) {
                try {
                    var scriptTag = document.createElement('script');
                    var scriptUrl = 'https://cdn.evergage.com/visual-editor/launch.js';
                    if (Evergage.getConfig().trackerUrl) {
                        scriptUrl = Evergage.getConfig().trackerUrl + '/visual-editor/launch.js'
                    }
                    scriptTag.setAttribute('id', 'evergageVisualEditorLaunchScript');
                    scriptTag.src = scriptUrl;
                    if (document.getElementById('evergageVisualEditorLaunchScript') == null) {
                        document.head.appendChild(scriptTag);
                    } else {
                        Evergage.log.info('Launch script is already here.');
                    }
                } catch (err) {
                    Evergage.log.info('Failed to fetch the siteEditorFramein page services: ' + err);
                }
            }

            function getUrlBoolean(name) {
                name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
                var results = regex.exec(location.search);
                return results === null ? null : results[1] === 'true';
            }

            var veParam = getUrlBoolean('evergageEditor');
            var testTemplateParam = getUrlBoolean('evergageTestTemplate');

            var isVESiteEditorFrame = window.frameElement && window.frameElement.id === 'siteEditorFrame';
            var enabledInStorage = function() {
                return window.localStorage['evgVE'] === 'true';
            };

            // honor and set local storage based off queryParam
            if (veParam !== null) {
                window.localStorage.setItem('evgVE', veParam);
            }

            // trigger off of localStorage only
            // chrome extension reads/sets localStorage more easily than modifying the currentTab URL
            if ((!enabledInStorage() || !(enabledInStorage() && !testTemplateParam)) && !isVESiteEditorFrame) {
                return;
            }

            if (window.top === window.self || isVESiteEditorFrame) {
                document.addEventListener(Evergage.CustomEvents.OnInit, (event) => {
                    const beaconConfig = event.detail.beaconConfig;
                    injectVisualEditorLaunchScript(beaconConfig.account);
                    event.preventDefault();
                }, { once: true });
            }
        })();

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Visual Editor:visualEditor.js");
    }
};


try {
        var evgr = Evergage.resolvers;
        Evergage
            .init()
            .then(() => {
                const config = {
                    global: {},
                    pageTypeDefault: {
                        name: "Slick Test"
                    },
                    pageTypes: [
                        {
                            name: "Test Page",
                            isMatch: () => Evergage.cashDom('body').length > 0
                        }
                    ]
                }

                Evergage.initSitemap(config);
            });
} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
          console.error("siteWideJavascriptError" + e);    }
};
