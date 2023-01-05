const { expect } = require("chai");

const Queue = require('../index');

describe('Queue', () => {
  describe('Empty Queue', () => {
    const emptyQueue = new Queue();

    it("should have 0 size", () => {
      expect(emptyQueue.size()).to.equal(0);
    });

    it("should return null when peeked", () => {
      expect(emptyQueue.peek()).to.equal(null);
    });

    it("should return true when isEmpty is called", () => {
      expect(emptyQueue.isEmpty()).to.equal(true);
    });

    it("should return null when dequeued", () => {
      expect(emptyQueue.dequeue()).to.equal(null);
    });

    it("should return true when isEmpty is called", () => {
      expect(emptyQueue.isEmpty()).to.equal(true);
    });
  });
});