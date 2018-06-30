export default class Stack<T> {
  private data: T[] = [];

  public push(v: T) {
    this.data.push(v);
  }

  public pop(): T | undefined {
    return this.data.length > 0
      ? this.data.splice(this.data.length - 1, 1)[0]
      : undefined;
  }

  public read() {
    return this.data;
  }
}
