export default class Queue<T> {
  private data: T[] = [];

  public enqueue(v: T) {
    this.data.push(v);
  }

  public dequeue(): T | undefined {
    return this.data.length > 0 ? this.data.splice(0, 1)[0] : undefined;
  }

  public read() {
    return this.data;
  }
}
