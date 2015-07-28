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