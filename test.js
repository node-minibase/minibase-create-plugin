/*!
 * minibase-create-plugin <https://github.com/node-minibase/minibase-create-plugin>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('mukla')
var plugin = require('./index')
var MiniBase = require('minibase').MiniBase

test('should throw TypeError if `name` not a string', function (done) {
  function fixture () {
    plugin(123)
  }
  test.throws(fixture, TypeError)
  test.throws(fixture, /expect `name` to be string/)
  done()
})

test('should throw TypeError if `fn` not a function', function (done) {
  function fixture () {
    plugin('foo-bar', 123)
  }
  test.throws(fixture, TypeError)
  test.throws(fixture, /expect `fn` to be function/)
  done()
})

test('should register plugin by name to `app.registered`', function (done) {
  var app = new MiniBase()
  app.use(plugin('base-foo', function (self) {
    self.foo = 'bar'
  }))
  test.ok(app.registered['base-foo'])
  test.strictEqual(app._pluginName, 'base-foo')
  test.strictEqual(app.foo, 'bar')

  app.use(plugin('second-qux', function (self) {
    self.bar = 'qux'
  }))
  test.ok(app.registered['second-qux'])
  test.strictEqual(app._pluginName, 'second-qux')
  test.strictEqual(app.bar, 'qux')
  done()
})

test('should invoke plugin once, because using isRegistered', function (done) {
  var base = new MiniBase()
  var called = 0
  function fn (opts) {
    return plugin('foo-qux', function noop () {
      called++
    })
  }

  base.use(fn())
  base.use(fn())

  test.strictEqual(called, 1)
  done()
})
