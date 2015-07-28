# dtStorage.js

ES6 class for REST-like management local- & sessionStorage.

## Features
* ES6
* local copy of storage (Safari [have bug with storage in private browsing mode](http://stackoverflow.com/questions/14555347/html5-localstorage-error-with-safari-quota-exceeded-err-dom-exception-22-an))

## Install

    npm install --save dtstorage

## Usage
#### constructor(provider)

    import dtStorage from 'dtstorage';
    const MyStorage = new dtStorage(provider)

where `provider` is `localStorage` or `sessionStorage`.

#### get(resource)
get `resource` data

#### post(resource, body)
create new entry in resource

#### patch(resource, key, value)
set `key=value` in `resource`

#### del(resource)
delete `resource`
