import utils from './utils';

class dtStorage {
  constructor(provider) {
    this.provider = provider;
    this.storage = JSON.parse(provider);
  }

  get(resource) {
    const { provider, storage } = this;
    const data = storage[resource];

    if(data) {
      return data;
    } else {
      throw new ReferenceError(404);
    }
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

    storage[resource][key] = value;

    try {
      let data = utils.stringToJSON(provider.getItem(resource));
      data[key] = value;

      provider.setItem(resource, utils.JSONToString(data))
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
