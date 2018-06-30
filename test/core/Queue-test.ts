import chai from "chai";
const assert = chai.assert;

import Queue from "../../src/core/Queue";

describe("Queue", () => {
  const queue = new Queue<number>();

  it("FirstIn-FirstOut", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    assert.strictEqual(queue.dequeue(), 1);
    assert.strictEqual(queue.dequeue(), 2);
    assert.strictEqual(queue.dequeue(), 3);
  });

  it("値がないときにundefinedが返る", () => {
    assert.strictEqual(queue.dequeue(), undefined);
  });
});
