class FibonacciCounter {
    constructor () {
        this.valueMaximum = 4000000
        this.valueSum = 0
        this.valuePrevious = 0
        this.valueCurrent = 1
        this.valueNext = 0
    }
    get sum() {
        return this.valueSum
    }
    set sum(value) {
        this.valueSum = value
    }
    get maximum() {
        return this.valueMaximum
    }
    set maximum(newValueMaximum) {
        this.valueMaximum = newValueMaximum
    }
    get next() {
        return this.valueNext
    }
    set next(value) {
        this.valueNext = value
    }
    get current() {
        return this.valueCurrent
    }
    set current(value) {
        this.valueCurrent = value
    }
    get previous() {
        return this.valuePrevious
    }
    set previous(value) {
        this.valuePrevious = value
    }
    nextValue(a=0, b=0) {
        return a + b
    }
    testValue(value) {
        if (value % 2 === 0) {
            return true
        }
        return false
    }
    addToValueSum(value) {
        this.valueSum = this.sum + value
        return this.valueSum
    }
    calculateValues() {
        while (this.next <= this.maximum) {
            this.next = this.nextValue(this.previous, this.current)
            this.previous = this.current
            this.current = this.next
            
            if (this.testValue(this.next)) {
                this.addToValueSum(this.next)
            }
        }
    }
    reset() {
        this.maximum = 4000000
        this.sum = 0
        this.previous = 0
        this.current = 1
        this.next = 0
    }
}

module.exports = FibonacciCounter