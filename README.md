# [minibase-create-plugin][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] [![npm downloads][downloads-img]][downloads-url] 

> Utility for [minibase][] and [base][] that helps you create plugins

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
> Install with [npm](https://www.npmjs.com/)

```sh
$ npm i minibase-create-plugin --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const minibaseCreatePlugin = require('minibase-create-plugin')
```

## API

### [minibaseCreatePlugin](index.js#L50)
> Creates a plugin for Base and MiniBase, that uses the [minibase-is-registered][] under the hood to provide more stable and friendly API for plugins.

**Params**

* `name` **{String}**: name of the plugin, passed to `.isRegistered`    
* `fn` **{Function}**: plugin function, passed to `.use` method, so called immediately    
* `returns` **{Function}**: plugin function that should be passed to `.use` method  

**Example**

```js
var minibase = require('minibase')
var createPlugin = require('minibase-create-plugin')

var called = 0

var plugin = createPlugin('foo-bar', function (self) {
  called++
  self.foo = 'bar'
  self.define('qux', function quxMethod () {})
  self.define('abc', function abc () {})
})

minibase.use(plugin)
minibase.use(plugin)

console.log(minibase.foo) // => 'bar'
console.log(minibase.qux) // => Function: qux
console.log(minibase.abc) // => Function: abc
console.log(minibase.registered) // => { 'foo-bar': ['qux', 'abc'] }

// called only once
console.log(called) // => 1
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/node-minibase/minibase-create-plugin/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[base]: https://github.com/node-base/base
[minibase]: https://github.com/node-minibase/minibase

[npmjs-url]: https://www.npmjs.com/package/minibase-create-plugin
[npmjs-img]: https://img.shields.io/npm/v/minibase-create-plugin.svg?label=minibase-create-plugin

[license-url]: https://github.com/node-minibase/minibase-create-plugin/blob/master/LICENSE
[license-img]: https://img.shields.io/npm/l/minibase-create-plugin.svg

[downloads-url]: https://www.npmjs.com/package/minibase-create-plugin
[downloads-img]: https://img.shields.io/npm/dm/minibase-create-plugin.svg

[codeclimate-url]: https://codeclimate.com/github/node-minibase/minibase-create-plugin
[codeclimate-img]: https://img.shields.io/codeclimate/github/node-minibase/minibase-create-plugin.svg

[travis-url]: https://travis-ci.org/node-minibase/minibase-create-plugin
[travis-img]: https://img.shields.io/travis/node-minibase/minibase-create-plugin/master.svg

[coveralls-url]: https://coveralls.io/r/node-minibase/minibase-create-plugin
[coveralls-img]: https://img.shields.io/coveralls/node-minibase/minibase-create-plugin.svg

[david-url]: https://david-dm.org/node-minibase/minibase-create-plugin
[david-img]: https://img.shields.io/david/node-minibase/minibase-create-plugin.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

[minibase-is-registered]: https://github.com/node-minibase/minibase-is-registered