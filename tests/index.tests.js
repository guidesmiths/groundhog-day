var assert = require('assert')
var clock = require('..')

describe('Fake Clock', function() {

    it('should default to groundhog day', function() {
        assert.equal(clock.fake().now(), 1454410800000)
    })

    it('should fixed time', function() {
        assert.equal(clock.fake().fix(1469563181761).now(), 1469563181761)
        assert.equal(clock.fake().fix(new Date(1469563181761)).now(), 1469563181761)
        assert.equal(clock.fake().fix(new Date(1469563181761).toISOString()).now(), 1469563181761)
    })

    it('should reject attempts to fix time to an invalid value', function() {
        assert.throws(function() {
            clock.fake().fix("foo")
        }, /Invalid Date: foo/)
    })

})

describe('Real Clock', function() {

    it('should use correct time', function() {
        assert.ok(Math.abs(clock.real().now() - Date.now()) < 100)
    })

})