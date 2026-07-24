import { connect } from './populating-next-right-pointers-in-each-node.js';

// Node class definition
class Node {
  constructor(val, left = null, right = null, next = null) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.next = next;
  }
}

// Helper to build a perfect binary tree from array
function buildTree(arr) {
  if (!arr || arr.length === 0) return null;

  const root = new Node(arr[0]);
  const queue = [root];
  let i = 1;

  while (i < arr.length) {
    const node = queue.shift();
    if (i < arr.length && arr[i] !== null) {
      node.left = new Node(arr[i]);
      queue.push(node.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null) {
      node.right = new Node(arr[i]);
      queue.push(node.right);
    }
    i++;
  }

  return root;
}

// Helper to serialize tree with next pointers to array format like [1,#,2,3,#,...]
function serialize(root) {
  if (!root) return [];

  const result = [];
  let levelStart = root;

  while (levelStart) {
    let current = levelStart;
    while (current) {
      result.push(current.val);
      current = current.next;
    }
    result.push('#');
    levelStart = levelStart.left;
  }

  return result;
}

// Helper to get next pointer values for all nodes level by level
function getNextValues(root) {
  if (!root) return [];

  const result = [];
  let levelStart = root;

  while (levelStart) {
    let current = levelStart;
    while (current) {
      result.push(current.next ? current.next.val : null);
      current = current.next;
    }
    levelStart = levelStart.left;
  }

  return result;
}

// Test 1: Example from problem - [1,2,3,4,5,6,7]
const tree1 = buildTree([1, 2, 3, 4, 5, 6, 7]);
const result1 = connect(tree1);
const serialized1 = serialize(result1);
console.assert(
  JSON.stringify(serialized1) === JSON.stringify([1, '#', 2, 3, '#', 4, 5, 6, 7, '#']),
  `Test 1 failed: ${JSON.stringify(serialized1)}`
);

// Verify specific next pointers for tree1
const nextVals1 = getNextValues(result1);
// Level 0: root(1) -> null
// Level 1: 2->3, 3->null
// Level 2: 4->5, 5->6, 6->7, 7->null
console.assert(nextVals1[0] === null, 'Root next should be null');
console.assert(nextVals1[1] === 3, 'Node 2 next should be 3');
console.assert(nextVals1[2] === null, 'Node 3 next should be null');
console.assert(nextVals1[3] === 5, 'Node 4 next should be 5');
console.assert(nextVals1[4] === 6, 'Node 5 next should be 6');
console.assert(nextVals1[5] === 7, 'Node 6 next should be 7');
console.assert(nextVals1[6] === null, 'Node 7 next should be null');

// Test 2: Empty tree
const tree2 = buildTree([]);
const result2 = connect(tree2);
console.assert(result2 === null, 'Test 2 failed: empty tree should return null');

// Test 3: Single node
const tree3 = buildTree([1]);
const result3 = connect(tree3);
console.assert(result3 !== null, 'Test 3: root should not be null');
console.assert(result3.next === null, 'Test 3: single node next should be null');
const serialized3 = serialize(result3);
console.assert(
  JSON.stringify(serialized3) === JSON.stringify([1, '#']),
  `Test 3 failed: ${JSON.stringify(serialized3)}`
);

// Test 4: Larger perfect binary tree with 15 nodes (4 levels)
const tree4 = buildTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
const result4 = connect(tree4);
const serialized4 = serialize(result4);
console.assert(
  JSON.stringify(serialized4) === JSON.stringify([1, '#', 2, 3, '#', 4, 5, 6, 7, '#', 8, 9, 10, 11, 12, 13, 14, 15, '#']),
  `Test 4 failed: ${JSON.stringify(serialized4)}`
);

// Test 5: Three-node tree (root with left and right)
const tree5 = buildTree([1, 2, 3]);
const result5 = connect(tree5);
console.assert(result5.left.next === result5.right, 'Test 5: left.next should point to right');
console.assert(result5.right.next === null, 'Test 5: right.next should be null');

console.log("ALL TESTS PASSED");
