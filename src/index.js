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

// eslint-disable-next-line default-param-last, consistent-return
const levelOrder = (root, callback = null) => {
  const res = [];
  const queue = [];
  let tmp = root;

  while (tmp !== undefined) {
    if (callback === null) {
      res.push(tmp.data);
    } else {
      callback(tmp);
    }

    if (tmp.left !== null) {
      queue.push(tmp.left);
    }
    if (tmp.right !== null) {
      queue.push(tmp.right);
    }
    tmp = queue.shift();
  }

  if (callback === null) {
    return res;
  }
};

const levelOrderRecursive = (root, queue = [], callback = null) => {
  if (root === undefined) return;

  callback(root);

  if (root.left) {
    queue.push(root.left);
  }
  if (root.right) {
    queue.push(root.right);
  }

  // eslint-disable-next-line no-param-reassign
  levelOrderRecursive(queue.shift(), queue, callback);
};

const inOrder = (root, queue = [], callback = null) => {
  if (root === undefined) return;

  if (callback === null) {
    queue.push(root.data);
  }

  if (root.left) {
    inOrder(root.left, queue, callback);
  }

  if (callback) callback(root);

  if (root.right) {
    inOrder(root.right, queue, callback);
  }

  if (callback === null) {
    // eslint-disable-next-line consistent-return
    return queue;
  }
  // eslint-disable-next-line consistent-return
  return 0;
};

const preOrder = (root, queue = [], callback = null) => {
  if (root === undefined) return;

  if (callback === null) {
    queue.push(root.data);
  }

  if (callback) callback(root);

  if (root.left) {
    preOrder(root.left, queue, callback);
  }

  if (root.right) {
    preOrder(root.right, queue, callback);
  }

  if (callback === null) {
    // eslint-disable-next-line consistent-return
    return queue;
  }
  // eslint-disable-next-line consistent-return
  return 0;
};

const postOrder = (root, queue = [], callback = null) => {
  if (root === undefined) return;

  if (callback === null) {
    queue.push(root.data);
  }

  if (root.left) {
    postOrder(root.left, queue, callback);
  }

  if (root.right) {
    postOrder(root.right, queue, callback);
  }

  if (callback) callback(root);

  if (callback === null) {
    // eslint-disable-next-line consistent-return
    return queue;
  }
  // eslint-disable-next-line consistent-return
  return 0;
};

const height = (root) => {
  // Base Case
  if (root == null) {
    return -1;
  }

  // Store the maximum height of
  // the left and right subtree
  const leftHeight = height(root.left);

  const rightHeight = height(root.right);

  // Update height of the current node
  const ans = Math.max(leftHeight, rightHeight) + 1;

  return ans;
};

function takeHeight(root, x) {
  if (root === null || root === undefined) return;
  let newHeight;

  newHeight = takeHeight(root.left, x);
  newHeight = takeHeight(root.right, x);

  if (root.data === x) {
    newHeight = height(root);
    // eslint-disable-next-line consistent-return
    return newHeight;
  }

  // eslint-disable-next-line consistent-return
  return newHeight;
}

const depth = (root, x) => {
  let newDepth = 0;
  if (root === undefined) return newDepth;

  if (root.left) {
    newDepth += 1;
    newDepth = depth(root.left, x);
  }

  if (root.data !== x) {
    newDepth -= 1;
  }

  if (root.data === x) {
    return newDepth;
  }

  if (root.right) {
    newDepth += 1;
    newDepth = depth(root.right, x);
  }

  return newDepth;
};

function startIt() {
  const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]; // THIS IS NOT THE ARRAY THAT GETS PRINTED OUT

  const newArr = sort(arr);

  const root = new Tree(newArr);

  const start = 0;
  const end = newArr.length - 1;

  root.root = binaryTree(newArr, start, end);
  insert(127, root.root);

  const queue = [];

  console.log(depth(root.root, 1));
  prettyPrint(root.root);
}

startIt();
