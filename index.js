module.exports = {
    real: function() {
        return {
            now: function() {
                return Date.now()
            }
        }
    },
    fake: function() {

        var time = new Date('2016-02-02T11:00:00.000Z').getTime()

        return {
            now: function() {
                return time
            },
            fix: function(value) {
                time = new Date(value).getTime()
                if (isNaN(time)) throw new Error('Invalid Date: ' + value)
                return this
            }
        }
    }
}
