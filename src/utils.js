const utils = {
  JSONToString(value) {
    return JSON.stringify(value);
  },

  stringToJSON(value) {
    if (typeof value !== 'string') {
      return undefined
    }

    try {
      return JSON.parse(value)
    } catch(e) {
      return value || undefined
    }
  },

  isEmpty(obj) {
    return !Object.keys(obj).length > 0;
  },

  getObjectIdInArrayByKey(source, key, value) {
    for (var i = 0; i < source.length; i++) {
      if (source[i][key] === value) {
        return i;
      }
    }
  }
}

export default utils;
