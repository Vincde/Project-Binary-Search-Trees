// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import Tree, { sort, merge } from "./tree";

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
console.log(sort(arr));
