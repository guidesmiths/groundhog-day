# groundhog-day
A wrapper around ```Date.now()``` with real and fake implementations for temporal unit testing. Inject either the fake or real implementations into your own modules, and use ```clock.now()``` or ```new Date(clock.now())``` instead of ```Date.now()``` and ```new Date()``` to gain control

[![NPM version](https://img.shields.io/npm/v/groundhog-day.svg?style=flat-square)](https://www.npmjs.com/package/groundhog-day)
[![NPM downloads](https://img.shields.io/npm/dm/groundhog-day.svg?style=flat-square)](https://www.npmjs.com/package/groundhog-day)
[![Build Status](https://img.shields.io/travis/guidesmiths/groundhog-day/master.svg)](https://travis-ci.org/guidesmiths/groundhog-day)
[![Code Climate](https://codeclimate.com/github/guidesmiths/groundhog-day/badges/gpa.svg)](https://codeclimate.com/github/guidesmiths/groundhog-day)
[![Test Coverage](https://codeclimate.com/github/guidesmiths/groundhog-day/badges/coverage.svg)](https://codeclimate.com/github/guidesmiths/groundhog-day/coverage)
[![Code Style](https://img.shields.io/badge/code%20style-imperative-brightgreen.svg)](https://github.com/guidesmiths/eslint-config-imperative)
[![Dependency Status](https://david-dm.org/guidesmiths/groundhog-day.svg)](https://david-dm.org/guidesmiths/groundhog-day)
[![devDependencies Status](https://david-dm.org/guidesmiths/groundhog-day/dev-status.svg)](https://david-dm.org/guidesmiths/groundhog-day?type=dev)

# tl;dr
```
const assert = require('assert')
const clock = require('groundhog-day')

assert.equal(clock.fake().now(), 1454410800000) // Always returns Groundhog Day 2016
assert.equal(clock.real().now(), Date.now()) // Always returns the current time in milliseconds
```

#### Fixing Time
```
const assert = require('assert')
const clock = require('groundhog-day')

assert.equal(clock.fake().fix(1469563181761).now(), 1469563181761)
assert.equal(clock.fake().fix(new Date(1469563181761)).now(), 1469563181761)
assert.equal(clock.fake().fix('2016-07-26T19:59:41.761Z').now(), 1469563181761)
```
