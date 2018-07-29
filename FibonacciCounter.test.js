const FibonacciCounter = require('./FibonacciCounter')
const counter = new FibonacciCounter()

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
    counter.reset()
  })
  it('valueSum can be incremented', () => {
    counter.addToValueSum(10)
    expect(counter.sum).toBe(10)
    counter.addToValueSum(2)
    expect(counter.sum).toBe(12)
    counter.reset()
  })
  it('testValue(2) should be true', () => {
    expect(counter.testValue(2)).toBe(true)
  })
  it('testValue(3) should be false', () => {
    expect(counter.testValue(3)).toBe(false)
  })
  it('nextValue(1,1) should be 2', () => {
    expect(counter.nextValue(1,1)).toBe(2)
    counter.reset()
  })
})

describe('validate calculations', () => {
  it('With a max value of 13 the sum should be 10', () => {
    counter.maximum = 13
    counter.calculateValues()
    expect(counter.sum).toBe(10)
    counter.reset()
  })
  it('With a max value of 987 the sum should be 798', () => {
    counter.maximum = 987
    counter.calculateValues()
    expect(counter.sum).toBe(798)
    counter.reset()
  })
})
