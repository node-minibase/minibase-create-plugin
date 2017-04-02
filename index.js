/*!
 * minibase-create-plugin <https://github.com/node-minibase/minibase-create-plugin>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (https://i.am.charlike.online)
 * Released under the MIT license.
 */

'use strict'

var mixinDeep = require('mixin-deep')
var betterUse = require('dush-better-use')

/**
 * > A helper function for creating Base/MiniBase plugins. These
 * plugins will be protected by `.isRegistered` too, so plugin
 * will be called only once. If plugin fail, it will emit `error`
 * event, because this utility uses [dush-better-use][] under the hood.
 * The plugin options are not merged with the `app.options`.
 *
 * **Example**
 *
 * ```js
 * var createPlugin = require('minibase-create-plugin')
 *
 * var dush = require('dush')
 * var app = dush()
 *
 * var called = 0
 * var plugin = createPlugin('zazzy', function (app, options) {
 *   console.log(app.options) // => undefined
 *   console.log(options) // => { foo: 'bar', aaa: 123 }
 *   called++
 * })
 *
 * var fn = plugin({ foo: 'bar' })
 *
 * app.use(fn, { aaa: 123 })
 * app.use(fn)
 * app.use(fn, { zz: 'zz' })
 *
 * // called only once
 * console.log(called) // => 1
 *
 * // included at app registered cache
 * console.log(app.registered) // => { zazzy: true }
 * ```
 *
 * @param  {String|Function} `[name]` optional, name of the plugin; or `fn` plugin
 * @param  {Function} `fn` a plugin function, called with `(app, options)` signature,
 *                         where `options` is the passed object to the returned function
 * @return {Function} a function that accepts optional `options` object and returns a function
 *                    that should be passed to `.use` method. Options are also merged
 *                    with the options passed to the second/third argument of `.use` method,
 *                    but not with the `app.options` - they are separate things and that's up to you
 * @api public
 */

module.exports = function minibaseCreatePlugin (name, fn) {
  return function _generatedPlugin (options) {
    return function _generatedPlugin (app, opts) {
      app.use(betterUse())
      app.use(name, fn, mixinDeep({}, options, opts))
      return app
    }
  }
}
