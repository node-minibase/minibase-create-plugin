# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.0.1"></a>
## [2.0.1](https://github.com/node-minibase/minibase-create-plugin/compare/v2.0.0...v2.0.1) (2017-04-03)


### Bug Fixes

* **compat:** make it work for apps based on Base or Base+base-plugins ([b630cf4](https://github.com/node-minibase/minibase-create-plugin/commit/b630cf4)), closes [#3](https://github.com/node-minibase/minibase-create-plugin/issues/3)



<a name="2.0.0"></a>
# [2.0.0](https://github.com/node-minibase/minibase-create-plugin/compare/v1.0.3...v2.0.0) (2017-04-02)


### Bug Fixes

* **package:** update package description ([ee73741](https://github.com/node-minibase/minibase-create-plugin/commit/ee73741))


### Code Refactoring

* **rewrite:** switch to use dush-better-use ([4e8537b](https://github.com/node-minibase/minibase-create-plugin/commit/4e8537b))


### BREAKING CHANGES

* rewrite: Refactor. Now it returns a function that accepts optional options object, when
called it retusn a function that should be passed to .use method, it is just a convention plugins to
be written this way - function that accepts options (optional) and returns a plugin function. Like:
createPlugin([name,] fn) -> plugin; plugin([options]) -> fn; app.use(fn)



<a name="1.0.3"></a>
## [1.0.3](https://github.com/node-minibase/minibase-create-plugin/compare/v1.0.2...v1.0.3) (2016-12-05)


### Bug Fixes

* **deps:** bump deps, allow failures on appveyor ([8e2f017](https://github.com/node-minibase/minibase-create-plugin/commit/8e2f017))
* **update:** codementor link, and fix banners ([923b2c6](https://github.com/node-minibase/minibase-create-plugin/commit/923b2c6))



<a name="1.0.2"></a>
## [1.0.2](https://github.com/node-minibase/minibase-create-plugin/compare/v1.0.1...v1.0.2) (2016-11-17)


### Bug Fixes

* **chore:** add windows builds, using appveyor ([dabde17](https://github.com/node-minibase/minibase-create-plugin/commit/dabde17))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/node-minibase/minibase-create-plugin/compare/v1.0.0...v1.0.1) (2016-11-09)


### Bug Fixes

* **logo:** add logo ([2adf018](https://github.com/node-minibase/minibase-create-plugin/commit/2adf018))





## 1.0.0 - 2016-11-08
- First release
- semantic versioning
- add keywords
- add docs
- add tests
- implement

## 0.0.0 - 2016-11-08
- Initial commit