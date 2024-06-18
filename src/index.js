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

const insert = (value, root) => {
  if (root === null) {
    // eslint-disable-next-line no-param-reassign
    root = new Node(value);
    return root;
  }
  if (value < root.data) {
    // eslint-disable-next-line no-param-reassign
    root.left = insert(value, root.left);
  } else if (value > root.data) {
    // eslint-disable-next-line no-param-reassign
    root.right = insert(value, root.right);
  }

  return root;
};

const minValue = (node) => {
  let minv = node.data;
  while (node.left !== null) {
    minv = node.left.data;
    // eslint-disable-next-line no-param-reassign
    node = node.left;
  }
  return minv;
};

const deleteItem = (value, root) => {
  if (root === null) {
    return root;
  }

  if (value < root.data) {
    // eslint-disable-next-line no-param-reassign
    root.left = deleteItem(value, root.left);
  } else if (value > root.data) {
    // eslint-disable-next-line no-param-reassign
    root.right = deleteItem(value, root.right);
  } else {
    if (root.left === null) {
      return root.right;
    }
    if (root.right === null) {
      return root.left;
    }

    // eslint-disable-next-line no-param-reassign
    root.data = minValue(root.right);

    // eslint-disable-next-line no-param-reassign
    root.right = deleteItem(root.data, root.right);
  }

  return root;
};

const find = (value, root) => {
  let res;
  if (root === null) {
    return "no data found";
  }
  if (root.data === value) {
    return root.data;
  }

  if (value < root.data) {
    res = find(value, root.left);
  } else if (value > root.data) {
    res = find(value, root.right);
  }

  return res;
};

const levelOrder = (callback, root) => {
  const queue = [];
  let tmp = root;

  while (tmp !== null) {
    callback(tmp);
    if (tmp.left !== null) {
      queue.push(tmp.left);
    }
    if (tmp.right !== null) {
      queue.push(tmp.right);
    }
    tmp = queue.shift();
  }
};

function hello(root) {
  console.log(root.data);
}

function startIt() {
  const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]; // THIS IS NOT THE ARRAY THAT GETS PRINTED OUT

  const newArr = sort(arr);

  const root = new Tree(newArr);

  const start = 0;
  const end = newArr.length - 1;

  root.root = binaryTree(newArr, start, end);
  insert(127, root.root);
  levelOrder(hello, root.root);
  prettyPrint(root.root);
}

startIt();
