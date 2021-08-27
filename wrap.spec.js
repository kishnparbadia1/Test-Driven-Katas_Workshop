const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it('Returns a string if a string was provided', () => {
    expect(wrap("abc", 10)).to.equal("abc");
  });

  it('Returns a string with a newline character', () => {
    expect(wrap("lorem ipsum", 10)).to.include("\n");
  });

  it('Returns a string with a column no greater than max length', () => {
    expect(wrap("lorem ipsum", 10)).to.equal("lorem\nipsum");
    expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)).to.equal("Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.")
  });
});
