/*!
 * minibase-create-plugin <https://github.com/node-minibase/minibase-create-plugin>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (https://i.am.charlike.online)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('mukla')
var createPlugin = require('./index')

var plugins = require('base-plugins')
var Base = require('base')

var dush = require('dush')
var app = dush()

test('should return a function that accepts options and returns a plugin', function (done) {
  app.once('error', done)

  var called = 0
  var plugin = createPlugin('fooquxie', function (app, options) {
    test.strictEqual(options.foo, 'bar')
    called++
  })

  app.use(plugin({ foo: 'bar' }))
  test.strictEqual(called, 1)
  test.strictEqual(app.registered.fooquxie, true)
  done()
})

test('should merge plugin options with these passed through .use method', function (done) {
  app.once('error', done)

  var called = false
  var plugin = createPlugin(function (app, options) {
    test.strictEqual(options.aaa, 'bbb')
    test.strictEqual(options.ccc, 12345)
    called = true
  })
  app.use('foo', plugin({ aaa: 'bbb' }), {
    ccc: 12345
  })

  test.strictEqual(called, true)
  test.strictEqual(app.registered.foo, true)
  done()
})

test('should not merge plugin options into app.options', function (done) {
  var called = false
  var app = dush()

  var plugin = createPlugin('zzz', function (app, options) {
    test.strictEqual(app.options.foo, 'bar')
    test.strictEqual(app.options.aaa, undefined)
    test.strictEqual(app.options.ccc, undefined)
    test.strictEqual(options.aaa, 'bbb')
    test.strictEqual(options.ccc, 'ddd')
    called = true
  })

  app.once('error', done)
  app.options = { foo: 'bar' }
  app.use(plugin({ aaa: 'bbb' }), { ccc: 'ddd' })

  test.strictEqual(called, true)
  test.strictEqual(app.registered.zzz, true)
  done()
})

test('should work for raw Base apps, which not use base-plugins', function (done) {
  var plugin = createPlugin(function somePlugin (app, base, options, env) {
    test.strictEqual(arguments.length, 4)
    test.strictEqual(options.abc, 'xyz')
    done()
  })

  var base = new Base()
  base.on('error', done)
  base.use(plugin({ abc: 'xyz' }))
  done()
})

test('should work for Base apps that uses base-plugins', function (done) {
  var base = new Base()
  base.use(plugins())

  var foobarPlugin = createPlugin(function (app, base, options) {
    test.deepEqual(options, {
      xxx: 'vbz',
      baz: 12345
    })
    done()
  })

  base.use(foobarPlugin({ xxx: 'vbz' }), { baz: 12345 })
})
