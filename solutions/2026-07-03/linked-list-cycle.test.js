import { hasCycle, buildLinkedList, ListNode } from './linked-list-cycle.js';

// Example 1: [3,2,0,-4], pos=1 => true
const list1 = buildLinkedList([3, 2, 0, -4], 1);
console.assert(hasCycle(list1) === true, 'Test 1 failed: expected true for cycle at pos 1');

// Example 2: [1,2], pos=0 => true
const list2 = buildLinkedList([1, 2], 0);
console.assert(hasCycle(list2) === true, 'Test 2 failed: expected true for cycle at pos 0');

// Example 3: [1], pos=-1 => false
const list3 = buildLinkedList([1], -1);
console.assert(hasCycle(list3) === false, 'Test 3 failed: expected false for no cycle');

// Edge case: empty list
const list4 = buildLinkedList([], -1);
console.assert(hasCycle(list4) === false, 'Test 4 failed: expected false for empty list');

// Edge case: null head
console.assert(hasCycle(null) === false, 'Test 5 failed: expected false for null head');

// Edge case: single node no cycle
const list6 = buildLinkedList([5], -1);
console.assert(hasCycle(list6) === false, 'Test 6 failed: expected false for single node no cycle');

// Edge case: single node with cycle to itself
const singleNode = new ListNode(1);
singleNode.next = singleNode;
console.assert(hasCycle(singleNode) === true, 'Test 7 failed: expected true for single node self-cycle');

// Edge case: two nodes no cycle
const list8 = buildLinkedList([1, 2], -1);
console.assert(hasCycle(list8) === false, 'Test 8 failed: expected false for two nodes no cycle');

// Edge case: longer list no cycle
const list9 = buildLinkedList([1, 2, 3, 4, 5], -1);
console.assert(hasCycle(list9) === false, 'Test 9 failed: expected false for longer list no cycle');

// Edge case: longer list with cycle at beginning
const list10 = buildLinkedList([1, 2, 3, 4, 5], 0);
console.assert(hasCycle(list10) === true, 'Test 10 failed: expected true for cycle at start');

// Edge case: longer list with cycle in middle
const list11 = buildLinkedList([1, 2, 3, 4, 5], 2);
console.assert(hasCycle(list11) === true, 'Test 11 failed: expected true for cycle in middle');

console.log('ALL TESTS PASSED');
