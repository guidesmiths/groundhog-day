module.exports = {
  real() {
    return {
      now() {
        return Date.now();
      },
    };
  },
  fake() {

    let time = new Date('2016-02-02T11:00:00.000Z').getTime();

    return {
      now() {
        return time;
      },
      fix(value) {
        time = new Date(value).getTime();
        if (Number.isNaN(time)) throw new Error(`Invalid Date: ${value}`);
        return this;
      },
    };
  },
};
