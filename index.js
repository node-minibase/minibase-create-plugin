/*!
 * minibase-create-plugin <https://github.com/tunnckoCore/minibase-create-plugin>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (https://i.am.charlike.online)
 * Released under the MIT license.
 */

'use strict'

var mixinDeep = require('mixin-deep')
var betterUse = require('dush-better-use')

module.exports = function minibaseCreatePlugin (name, fn) {
  return function _generatedPlugin (options) {
    return function _generatedPlugin (app, opts) {
      app.use(betterUse())
      app.use(name, fn, mixinDeep({}, options, opts))
      return app
    }
  }
}
