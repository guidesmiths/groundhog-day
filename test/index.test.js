const { ok, strictEqual: eq, throws } = require('node:assert');
const { describe, it } = require('zunit');
const { fake, real } = require('..');

describe('clocks', () => {

  it('fake clock should default to groundhog day', () => {
    eq(fake.now(), 1454410800000);
  });

  it('fake clock should fixed time', () => {
    eq(fake.fix(1469563181761).now(), 1469563181761);
    eq(fake.fix(new Date(1469563181761)).now(), 1469563181761);
    eq(fake.fix(new Date(1469563181761).toISOString()).now(), 1469563181761);
  });

  it('fake clock should reject attempts to fix time to an invalid value', () => {
    throws(() => {
      fake.fix('foo');
    }, /Invalid Date: foo/);
  });

  it('real clock should use correct time', () => {
    ok(Math.abs(real.now() - Date.now()) < 100);
  });
});
