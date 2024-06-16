// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member, import/extensions
import Tree, { sort, merge } from "./tree.js";

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function binaryTree(arr, start, end) {
  if (start > end) return null;

  const mid = Math.floor((start + end) / 2);

  const root = new Node(arr[mid]);

  root.left = binaryTree(arr, start, mid - 1);
  root.right = binaryTree(arr, mid + 1, end);

  return root;
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

function startIt() {
  const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]; // THIS IS NOT THE ARRAY THAT GETS PRINTED OUT

  const newArr = sort(arr);

  const root = new Tree(newArr);

  const start = 0;
  const end = newArr.length - 1;

  root.root = binaryTree(newArr, start, end);
  prettyPrint(root.root);
}

startIt();
