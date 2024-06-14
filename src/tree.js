/* eslint-disable no-param-reassign */
export default class Tree {
  constructor(arr) {
    this.arr = arr;
    this.root = null;
  }
}

export function merge(left, right) {
  let i = 0;
  let j = 0;
  const res = [];

  while (i < left.length && j < right.length) {
    if (left[i] === right[j]) {
      res.push(left[i]);
      i += 1;
      j += 1;
    } else if (left[i] < right[j]) {
      res.push(left[i]);
      i += 1;
    } else {
      res.push(right[j]);
      j += 1;
    }
  }

  while (i < left.length) {
    res.push(left[i]);
    i += 1;
  }

  while (j < right.length) {
    res.push(right[j]);
    j += 1;
  }

  return res;
}

export function sort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = sort(arr.slice(0, mid));
  const right = sort(arr.slice(mid));

  return merge(left, right);
}
