(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var dtStorage = (function () {
  function dtStorage(provider) {
    _classCallCheck(this, dtStorage);

    this.provider = provider;
    this.storage = JSON.parse(provider);
  }

  _createClass(dtStorage, [{
    key: 'get',
    value: function get(resource) {
      var provider = this.provider;
      var storage = this.storage;

      var data = storage[resource];

      if (data) {
        return data;
      } else {
        throw new ReferenceError(404);
      }
    }
  }, {
    key: 'post',
    value: function post(resource, body) {
      var provider = this.provider;
      var storage = this.storage;

      storage[resource] = body;

      try {
        provider.setItem(resource, _utils2['default'].JSONToString(body));

        return storage[resource];
      } catch (e) {
        throw new Error(e);
      }
    }
  }, {
    key: 'patch',
    value: function patch(resource, key, value) {
      var provider = this.provider;
      var storage = this.storage;

      storage[resource][key] = value;

      try {
        var data = _utils2['default'].stringToJSON(provider.getItem(resource));
        data[key] = value;

        provider.setItem(resource, _utils2['default'].JSONToString(data));
      } catch (e) {
        throw new Error(e);
      }

      return storage[resource];
    }
  }, {
    key: 'del',
    value: function del(resource) {
      var provider = this.provider;
      var storage = this.storage;

      delete provider[resource];

      try {
        provider.removeItem(resource);
      } catch (e) {
        throw new Error(e);
      }
    }
  }]);

  return dtStorage;
})();

exports['default'] = dtStorage;
module.exports = exports['default'];

},{"./utils":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var utils = {
  JSONToString: function JSONToString(value) {
    return JSON.stringify(value);
  },

  stringToJSON: function stringToJSON(value) {
    if (typeof value !== 'string') {
      return undefined;
    }

    try {
      return JSON.parse(value);
    } catch (e) {
      return value || undefined;
    }
  },

  isEmpty: function isEmpty(obj) {
    return !Object.keys(obj).length > 0;
  },

  getObjectIdInArrayByKey: function getObjectIdInArrayByKey(source, key, value) {
    for (var i = 0; i < source.length; i++) {
      if (source[i][key] === value) {
        return i;
      }
    }
  }
};

exports['default'] = utils;
module.exports = exports['default'];

},{}]},{},[1]);
