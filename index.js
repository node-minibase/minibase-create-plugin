/*!
 * minibase-create-plugin <https://github.com/node-minibase/minibase-create-plugin>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var isRegistered = require('minibase-is-registered')

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
