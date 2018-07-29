const FibonacciCounter = require('./FibonacciCounter')
const counter = new FibonacciCounter()
counter.calculateValues()
console.log(`With a maximum value of ${counter.maximum} the sum of the even values is: ${counter.sum}`);