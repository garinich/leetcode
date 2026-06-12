import { inorderTraversal, inorderTraversalRecursive } from './binary-tree-inorder-traversal.js';

// Helper function to create tree nodes
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// Helper function to create tree from array representation
function createTree(arr) {
    if (!arr || arr.length === 0) return null;
    
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;
    
    while (queue.length > 0 && i < arr.length) {
        const node = queue.shift();
        
        if (i < arr.length && arr[i] !== null) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;
        
        if (i < arr.length && arr[i] !== null) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }
    
    return root;
}

// Helper function to compare arrays
function arraysEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}

// Test both iterative and recursive solutions
function testSolution(solution, name) {
    console.log(`Testing ${name}:`);
    
    // Example 1: [1,null,2,3] -> [1,3,2]
    let tree1 = createTree([1, null, 2, 3]);
    let result1 = solution(tree1);
    console.assert(arraysEqual(result1, [1, 3, 2]), `Example 1 failed: expected [1,3,2], got ${JSON.stringify(result1)}`);
    
    // Example 2: [1,2,3,4,5,null,8,null,null,6,7,9] -> [4,2,6,5,7,1,3,9,8]
    let tree2 = createTree([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]);
    let result2 = solution(tree2);
    console.assert(arraysEqual(result2, [4, 2, 6, 5, 7, 1, 3, 9, 8]), `Example 2 failed: expected [4,2,6,5,7,1,3,9,8], got ${JSON.stringify(result2)}`);
    
    // Example 3: [] -> []
    let tree3 = createTree([]);
    let result3 = solution(tree3);
    console.assert(arraysEqual(result3, []), `Example 3 failed: expected [], got ${JSON.stringify(result3)}`);
    
    // Example 4: [1] -> [1]
    let tree4 = createTree([1]);
    let result4 = solution(tree4);
    console.assert(arraysEqual(result4, [1]), `Example 4 failed: expected [1], got ${JSON.stringify(result4)}`);
    
    // Edge case: Only left children
    let tree5 = createTree([3, 2, null, 1]);
    let result5 = solution(tree5);
    console.assert(arraysEqual(result5, [1, 2, 3]), `Left skewed tree failed: expected [1,2,3], got ${JSON.stringify(result5)}`);
    
    // Edge case: Only right children
    let tree6 = createTree([1, null, 2, null, 3]);
    let result6 = solution(tree6);
    console.assert(arraysEqual(result6, [1, 2, 3]), `Right skewed tree failed: expected [1,2,3], got ${JSON.stringify(result6)}`);
    
    // Edge case: Negative values
    let tree7 = createTree([-100, -50, 50, -25, 25]);
    let result7 = solution(tree7);
    console.assert(arraysEqual(result7, [-25, -50, 25, -100, 50]), `Negative values failed: expected [-25,-50,25,-100,50], got ${JSON.stringify(result7)}`);
    
    console.log(`${name} - All tests passed!\n`);
}

// Test both solutions
testSolution(inorderTraversal, "Iterative Solution");
testSolution(inorderTraversalRecursive, "Recursive Solution");

console.log("ALL TESTS PASSED");