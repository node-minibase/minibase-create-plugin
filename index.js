/*!
 * minibase-create-plugin <https://github.com/node-minibase/minibase-create-plugin>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (http://i.am.charlike.online)
 * Released under the MIT license.
 */

'use strict'

var isRegistered = require('minibase-is-registered')

/**
 * > Creates a plugin for Base and MiniBase, that uses
 * the [minibase-is-registered][] under the hood to provide more
 * stable and friendly API for plugins.
 *
 * **Example**
 *
 * ```js
 * var minibase = require('minibase')
 * var createPlugin = require('minibase-create-plugin')
 *
 * var called = 0
 *
 * var plugin = createPlugin('foo-bar', function (self) {
 *   called++
 *   self.foo = 'bar'
 *   self.define('qux', function quxMethod () {})
 *   self.define('abc', function abc () {})
 * })
 *
 * minibase.use(plugin)
 * minibase.use(plugin)
 *
 * console.log(minibase.foo) // => 'bar'
 * console.log(minibase.qux) // => Function: qux
 * console.log(minibase.abc) // => Function: abc
 * console.log(minibase.registered) // => { 'foo-bar': ['qux', 'abc'] }
 *
 * // called only once
 * console.log(called) // => 1
 * ```
 *
 * @param  {String}   `name` name of the plugin, passed to `.isRegistered`
 * @param  {Function} `fn` plugin function, passed to `.use` method, so called immediately
 * @return {Function} plugin function that should be passed to `.use` method
 * @api public
 */

module.exports = function minibaseCreatePlugin (name, fn) {
  if (typeof name !== 'string') {
    throw new TypeError('minibase-create-plugin: expect `name` to be string')
  }
  if (typeof fn !== 'function') {
    throw new TypeError('minibase-create-plugin: expect `fn` to be function')
  }
  return function plugin (self) {
    self.use(isRegistered())

    /* istanbul ignore next */
    if (self.isRegistered(name)) return

    self.use(fn)
    return plugin
  }
}
