const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
  it('Returns empty arr if empty arr is passed', () => {
    expect(twoSum([], 10)).to.eql([]);
  })

  it('Returns arr suming to target', () =>{
    expect(twoSum([1,2,3], 5)).to.eql([2,3]);
  })
  
  it('Returns empty array if no two elements sums to target', () =>{
    expect(twoSum([1,2,3], 7)).to.eql([]);
  })

  it('Returns an array with of values that add up to target using distinct elements', () =>{
    expect(twoSum([1,3,4], 6)).to.eql());
  })
})

