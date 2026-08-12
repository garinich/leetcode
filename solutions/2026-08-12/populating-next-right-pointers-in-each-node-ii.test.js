import { connect, buildTree, serialize, Node } from './populating-next-right-pointers-in-each-node-ii.js';

// Test 1: Example 1 - [1,2,3,4,5,null,7]
const tree1 = buildTree([1, 2, 3, 4, 5, null, 7]);
connect(tree1);
const result1 = serialize(tree1);
console.assert(
  result1 === '1,#,2,3,#,4,5,7,#',
  `Test 1 failed: expected '1,#,2,3,#,4,5,7,#' but got '${result1}'`
);

// Test 2: Example 2 - empty tree
const tree2 = buildTree([]);
const result2 = connect(tree2);
console.assert(
  result2 === null,
  `Test 2 failed: expected null but got ${result2}`
);

// Test 3: Single node
const tree3 = buildTree([1]);
connect(tree3);
const result3 = serialize(tree3);
console.assert(
  result3 === '1,#',
  `Test 3 failed: expected '1,#' but got '${result3}'`
);

// Test 4: Two levels, complete binary tree
const tree4 = buildTree([1, 2, 3]);
connect(tree4);
const result4 = serialize(tree4);
console.assert(
  result4 === '1,#,2,3,#',
  `Test 4 failed: expected '1,#,2,3,#' but got '${result4}'`
);

// Test 5: Only left children
const tree5 = buildTree([1, 2, null, 3, null, null, null]);
connect(tree5);
const result5 = serialize(tree5);
console.assert(
  result5 === '1,#,2,#,3,#',
  `Test 5 failed: expected '1,#,2,#,3,#' but got '${result5}'`
);

// Test 6: Only right children
const tree6 = new Node(1);
tree6.right = new Node(2);
tree6.right.right = new Node(3);
connect(tree6);
const result6 = serialize(tree6);
console.assert(
  result6 === '1,#,2,#,3,#',
  `Test 6 failed: expected '1,#,2,#,3,#' but got '${result6}'`
);

// Test 7: Verify next pointers are correctly set
const tree7 = buildTree([1, 2, 3, 4, 5, null, 7]);
connect(tree7);
// Level 1: 1 -> null
console.assert(tree7.next === null, 'Test 7a failed: root.next should be null');
// Level 2: 2 -> 3 -> null
console.assert(tree7.left.val === 2, 'Test 7b failed');
console.assert(tree7.right.val === 3, 'Test 7c failed');
console.assert(tree7.left.next === tree7.right, 'Test 7d failed: 2.next should point to 3');
console.assert(tree7.right.next === null, 'Test 7e failed: 3.next should be null');
// Level 3: 4 -> 5 -> 7 -> null
const node4 = tree7.left.left;
const node5 = tree7.left.right;
const node7 = tree7.right.right;
console.assert(node4.val === 4, 'Test 7f failed');
console.assert(node5.val === 5, 'Test 7g failed');
console.assert(node7.val === 7, 'Test 7h failed');
console.assert(node4.next === node5, 'Test 7i failed: 4.next should point to 5');
console.assert(node5.next === node7, 'Test 7j failed: 5.next should point to 7');
console.assert(node7.next === null, 'Test 7k failed: 7.next should be null');

// Test 8: Asymmetric tree with nodes only on certain sides
const tree8 = new Node(1);
tree8.left = new Node(2);
tree8.right = new Node(3);
tree8.left.right = new Node(4);
tree8.right.right = new Node(5);
connect(tree8);
console.assert(tree8.left.next === tree8.right, 'Test 8a failed');
console.assert(tree8.left.right.next === tree8.right.right, 'Test 8b failed: 4.next should point to 5');
console.assert(tree8.right.right.next === null, 'Test 8c failed');

console.log('ALL TESTS PASSED');
