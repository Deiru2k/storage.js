import utils from 'dtutils';

class dtStorage {
  constructor(provider) {
    this.provider = provider;
    this.storage = JSON.parse(JSON.stringify(provider));
  }

  get(resource) {
    const { provider, storage } = this;
    const data = storage[resource];

    if (data) {
      try {
        storage[resource] = JSON.parse(data);
      } catch(e) {
        console.log(e);
      }
    } else {
      return null;
    }

    return data;
  }

  post(resource, body) {
    const { provider, storage } = this;
    storage[resource] = body;

    try {
      provider.setItem(resource, utils.JSONToString(body));

      return storage[resource];
    } catch(e) {
      throw new Error(e);
    }
  }

  patch(resource, key, value) {
    const { provider, storage } = this;

    if (!storage[resource]) {
      this.post(resource, { [key]: null});
    }

    storage[resource][key] = value;

    try {
      let data = utils.stringToJSON(provider.getItem(resource));
      data[key] = value;

      provider.setItem(resource, utils.JSONToString(data));
    } catch(e) {
      throw new Error(e);
    }

    return storage[resource];
  }

  del(resource) {
    const { provider, storage } = this;
    delete provider[resource];

    try {
      provider.removeItem(resource);
    } catch(e) {
      throw new Error(e);
    }
  }
}

export default dtStorage;
