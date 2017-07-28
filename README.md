# groundhog-day

groundhog-day is a wrapper around ```Date.now()``` with real and fake implementations. The real implementation returns the current time, the fake implementation returns a fixed time (defaults to Groundhog day). Use the real implementation in your production code, but inject the fake implementation in tests for predictable results.

[![NPM version](https://img.shields.io/npm/v/groundhog-day.svg?style=flat-square)](https://www.npmjs.com/package/groundhog-day)
[![NPM downloads](https://img.shields.io/npm/dm/groundhog-day.svg?style=flat-square)](https://www.npmjs.com/package/groundhog-day)
[![Build Status](https://img.shields.io/travis/guidesmiths/groundhog-day/master.svg)](https://travis-ci.org/guidesmiths/groundhog-day)
[![Code Climate](https://codeclimate.com/github/guidesmiths/groundhog-day/badges/gpa.svg)](https://codeclimate.com/github/guidesmiths/groundhog-day)
[![Test Coverage](https://codeclimate.com/github/guidesmiths/groundhog-day/badges/coverage.svg)](https://codeclimate.com/github/guidesmiths/groundhog-day/coverage)
[![Code Style](https://img.shields.io/badge/code%20style-imperative-brightgreen.svg)](https://github.com/guidesmiths/eslint-config-imperative)
[![Dependency Status](https://david-dm.org/guidesmiths/groundhog-day.svg)](https://david-dm.org/guidesmiths/groundhog-day)
[![devDependencies Status](https://david-dm.org/guidesmiths/groundhog-day/dev-status.svg)](https://david-dm.org/guidesmiths/groundhog-day?type=dev)


## TL;DR

### 1. Use a fake clock in tests
```js
const Server = require('../server')
const request = require('request')
const clock = require('groundhog-day').fake()
const assert = require('assert')

describe('Server', () => {

  let server

  before(done => {
    server = new Server(clock)
    server.start(done)
  })

  after(done => {
    server.stop(done)
  })

  it('should set last modified header', done => {
    request.get('http://localhost/demo', (err, res, body) => {
      assert.ok(err)
      assert.equal(res.headers['last-modified'], 'Tue, 2 Feb 2016 11:00:00 GMT')  // Groundhog Day
    })
  })
})
```

### 2. Use a real clock in production
```js
const Server = require('./server')
const clock = require('groundhog-day').real()
new Server(clock).start(err => {
    if (err) process.exit(1)
    console.log('Listening')
})
```

### Fixing Time
You can configure the fixed time returned by the fake clock in any of the following ways:

By specifying the number of milliseconds
```js
const clock = require('groundhog-day').fake()
clock.fix(1469563181761)
```

By specifying a date instance
```js
const clock = require('groundhog-day').fake()
clock.fix(new Date(1469563181761))
```

By specifying a date string
```js
const clock = require('groundhog-day').fake()
clock.fix(new Date('2016-07-26T19:59:41.761Z'))
```
