import { sortedListToBST, ListNode, TreeNode } from './convert-sorted-list-to-binary-search-tree.js';

// Helper function to create linked list from array
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to check if tree is height-balanced
function isBalanced(root) {
    function getHeight(node) {
        if (!node) return 0;
        const leftHeight = getHeight(node.left);
        const rightHeight = getHeight(node.right);
        if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }
        return Math.max(leftHeight, rightHeight) + 1;
    }
    return getHeight(root) !== -1;
}

// Helper function to check if tree is a valid BST
function isValidBST(root, min = -Infinity, max = Infinity) {
    if (!root) return true;
    if (root.val <= min || root.val >= max) return false;
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
}

// Helper function to get inorder traversal
function inorderTraversal(root) {
    const result = [];
    function inorder(node) {
        if (!node) return;
        inorder(node.left);
        result.push(node.val);
        inorder(node.right);
    }
    inorder(root);
    return result;
}

// Test case 1: Example 1 - [-10,-3,0,5,9]
const head1 = createLinkedList([-10, -3, 0, 5, 9]);
const result1 = sortedListToBST(head1);
console.assert(isBalanced(result1), 'Test 1: Tree should be balanced');
console.assert(isValidBST(result1), 'Test 1: Tree should be valid BST');
const inorder1 = inorderTraversal(result1);
console.assert(JSON.stringify(inorder1) === JSON.stringify([-10, -3, 0, 5, 9]), 'Test 1: Inorder traversal should match original list');

// Test case 2: Example 2 - []
const head2 = createLinkedList([]);
const result2 = sortedListToBST(head2);
console.assert(result2 === null, 'Test 2: Empty list should return null');

// Test case 3: Single element
const head3 = createLinkedList([1]);
const result3 = sortedListToBST(head3);
console.assert(result3.val === 1, 'Test 3: Single element should be root');
console.assert(result3.left === null && result3.right === null, 'Test 3: Single element should have no children');
console.assert(isBalanced(result3), 'Test 3: Single node should be balanced');

// Test case 4: Two elements
const head4 = createLinkedList([1, 3]);
const result4 = sortedListToBST(head4);
console.assert(isBalanced(result4), 'Test 4: Two elements should be balanced');
console.assert(isValidBST(result4), 'Test 4: Two elements should form valid BST');
const inorder4 = inorderTraversal(result4);
console.assert(JSON.stringify(inorder4) === JSON.stringify([1, 3]), 'Test 4: Inorder should match original');

// Test case 5: Larger array with negative and positive numbers
const head5 = createLinkedList([-5, -3, -1, 0, 1, 3, 5, 7, 9]);
const result5 = sortedListToBST(head5);
console.assert(isBalanced(result5), 'Test 5: Larger array should be balanced');
console.assert(isValidBST(result5), 'Test 5: Larger array should form valid BST');
const inorder5 = inorderTraversal(result5);
console.assert(JSON.stringify(inorder5) === JSON.stringify([-5, -3, -1, 0, 1, 3, 5, 7, 9]), 'Test 5: Inorder should match original');

// Test case 6: All negative numbers
const head6 = createLinkedList([-10, -8, -6, -4, -2]);
const result6 = sortedListToBST(head6);
console.assert(isBalanced(result6), 'Test 6: All negative should be balanced');
console.assert(isValidBST(result6), 'Test 6: All negative should form valid BST');
const inorder6 = inorderTraversal(result6);
console.assert(JSON.stringify(inorder6) === JSON.stringify([-10, -8, -6, -4, -2]), 'Test 6: Inorder should match original');

// Test case 7: Large values within constraints
const head7 = createLinkedList([-100000, 0, 100000]);
const result7 = sortedListToBST(head7);
console.assert(isBalanced(result7), 'Test 7: Large values should be balanced');
console.assert(isValidBST(result7), 'Test 7: Large values should form valid BST');
const inorder7 = inorderTraversal(result7);
console.assert(JSON.stringify(inorder7) === JSON.stringify([-100000, 0, 100000]), 'Test 7: Inorder should match original');

console.log('ALL TESTS PASSED');