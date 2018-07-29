const FibonacciCounter = require('./FibonacciCounter')
const counter = new FibonacciCounter()
//console.log(counter.count);
describe('validate initial setup', () => {
  it('valueSum should be 0', () => {
    expect(counter.sum).toBe(0)
  })
  it('valueMaximum should be 4000000', () => {
    expect(counter.maximum).toBe(4000000)
  })
  it('valueMaximum can be changed to 1000000', () => {
    counter.maximum = 1000000
    expect(counter.maximum).toBe(1000000)
  })
})