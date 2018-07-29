class FibonacciCounter {
    constructor () {
        this.valueMaximum = 4000000
        this.valueSum = 0
    }
    get sum() {
        return this.valueSum
    }
    get maximum() {
        return this.valueMaximum
    }
    set maximum(newValueMaximum) {
        this.valueMaximum = newValueMaximum
    }
}

module.exports = FibonacciCounter