'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _dtutils = require('dtutils');

var _dtutils2 = _interopRequireDefault(_dtutils);

var dtStorage = (function () {
  function dtStorage(provider) {
    _classCallCheck(this, dtStorage);

    this.provider = provider;
    this.storage = JSON.parse(JSON.stringify(provider));
  }

  _createClass(dtStorage, [{
    key: 'get',
    value: function get(resource) {
      var provider = this.provider;
      var storage = this.storage;

      var data = storage[resource];

      if (data) {
        try {
          storage[resource] = JSON.parse(data);
        } catch (e) {
          console.log(e);
        }
      } else {
        return null;
      }

      return data;
    }
  }, {
    key: 'post',
    value: function post(resource, body) {
      var provider = this.provider;
      var storage = this.storage;

      storage[resource] = body;

      try {
        provider.setItem(resource, _dtutils2['default'].JSONToString(body));

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

      if (!storage[resource]) {
        this.post(resource, _defineProperty({}, key, null));
      }

      storage[resource][key] = value;

      try {
        var data = _dtutils2['default'].stringToJSON(provider.getItem(resource));
        data[key] = value;

        provider.setItem(resource, _dtutils2['default'].JSONToString(data));
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