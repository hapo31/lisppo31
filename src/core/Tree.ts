export default class Tree<T = string> {
  private root = new TreeImpl<T>();

  constructor(v: T) {
    this.root.value = v;
  }

  public push(v: T) {
    return this.pushStrategy(v, this.root);
  }

  public read() {
    return this.root.read();
  }

  // public pop() {}

  private pushStrategy(v: T, treeImpl: TreeImpl<T>): TreeImpl<T> {
    if (!treeImpl.value) {
      treeImpl.value = v;
      return treeImpl;
    } else if (!treeImpl.left) {
      treeImpl.left = new TreeImpl(v);
      return this.pushStrategy(v, treeImpl.left);
    } else if (!treeImpl.right) {
      treeImpl.right = new TreeImpl(v);
      return this.pushStrategy(v, treeImpl.right);
    }

    // ここに来ることはないが、型推論のために値を返す
    return treeImpl;
  }

  // private popStrategy(treeImpl: TreeImpl<T>): T | undefined {
  //   if (treeImpl.right) {
  //     return this.popStrategy(treeImpl.right);
  //   } else if (treeImpl.left) {
  //     return this.popStrategy(treeImpl.left);
  //   } else if (treeImpl.value != null) {
  //     return treeImpl.value;
  //   } else {
  //     return undefined;
  //   }
  // }
}

class TreeImpl<T> {
  public value?: T;
  public left?: TreeImpl<T>;
  public right?: TreeImpl<T>;

  private cache: T[] | null = null;

  constructor(v?: T) {
    this.value = v;
  }

  public read(value?: T, left?: TreeImpl<T>, right?: TreeImpl<T>): T[] {
    return this.cache != null
      ? this.cache
      : (this.cache = (left ? this.read(left.value, left.left, left.right) : [])
          .concat(value || [])
          .concat(
            right ? this.read(right.value, right.left, right.right) : []
          ));
  }
}

const n: [number, string] = [12, "hoge"];

const [a, b] = n;

const x = n[0];
const y = n[1];
const z = n[2];
n.forEach(v => {});
