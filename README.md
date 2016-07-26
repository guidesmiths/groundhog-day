[![Build Status](https://img.shields.io/travis/guidesmiths/prepper/master.svg)](https://travis-ci.org/guidesmiths/prepper)
[![Code Style](https://img.shields.io/badge/code%20style-imperative-brightgreen.svg)](https://github.com/guidesmiths/eslint-config-imperative)

# groundhog-day
An wrapper around ```Date.now()``` with real and fake implementations for temporal unit testing. Inject either the fake or real implementations into your own modules, and use ```clock.now()``` or ```new Date(clock.now())``` instead of ```Date.now()``` and ```new Date()``` to gain control

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
