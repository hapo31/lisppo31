import chai from "chai";
const assert = chai.assert;

import Stack from "../../src/core/Stack";

describe("Stack", () => {
  const stack = new Stack<number>();

  it("FirstIn-LastOut", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    assert.strictEqual(stack.pop(), 3);
    assert.strictEqual(stack.pop(), 2);
    assert.strictEqual(stack.pop(), 1);
  });

  it("値がないときにundefinedが返る", () => {
    assert.strictEqual(stack.pop(), undefined);
  });
});
