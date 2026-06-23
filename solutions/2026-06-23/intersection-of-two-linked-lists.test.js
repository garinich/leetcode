import { getIntersectionNode, ListNode } from './intersection-of-two-linked-lists.js';

// Helper function to build intersecting linked lists
function buildIntersectingLists(listAVals, listBVals, skipA, skipB) {
  // Build list A nodes
  const nodesA = listAVals.map(v => new ListNode(v));
  for (let i = 0; i < nodesA.length - 1; i++) {
    nodesA[i].next = nodesA[i + 1];
  }

  // Build list B nodes up to the intersection point
  const nodesB = [];
  for (let i = 0; i < skipB; i++) {
    nodesB.push(new ListNode(listBVals[i]));
  }
  for (let i = 0; i < nodesB.length - 1; i++) {
    nodesB[i].next = nodesB[i + 1];
  }

  // Connect list B to list A at the intersection point
  if (skipA < nodesA.length && skipB <= listBVals.length) {
    const intersectionNode = nodesA[skipA];
    if (nodesB.length > 0) {
      nodesB[nodesB.length - 1].next = intersectionNode;
    }
  }

  const headA = nodesA.length > 0 ? nodesA[0] : null;
  const headB = nodesB.length > 0 ? nodesB[0] : (skipA < nodesA.length ? nodesA[skipA] : null);

  return { headA, headB, intersectionNode: skipA < nodesA.length ? nodesA[skipA] : null };
}

// Example 1: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
{
  const nodesA = [4,1,8,4,5].map(v => new ListNode(v));
  for (let i = 0; i < nodesA.length - 1; i++) nodesA[i].next = nodesA[i+1];

  const nodesB = [5,6,1].map(v => new ListNode(v));
  for (let i = 0; i < nodesB.length - 1; i++) nodesB[i].next = nodesB[i+1];
  // Connect B to A at index 2 (value 8)
  nodesB[nodesB.length - 1].next = nodesA[2];

  const result = getIntersectionNode(nodesA[0], nodesB[0]);
  console.assert(result === nodesA[2], 'Example 1: Should intersect at node with value 8');
  console.assert(result !== null && result.val === 8, 'Example 1: Intersection node value should be 8');
}

// Example 2: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
{
  const nodesA = [1,9,1,2,4].map(v => new ListNode(v));
  for (let i = 0; i < nodesA.length - 1; i++) nodesA[i].next = nodesA[i+1];

  const nodesB = [3].map(v => new ListNode(v));
  // Connect B to A at index 3 (value 2)
  nodesB[nodesB.length - 1].next = nodesA[3];

  const result = getIntersectionNode(nodesA[0], nodesB[0]);
  console.assert(result === nodesA[3], 'Example 2: Should intersect at node with value 2');
  console.assert(result !== null && result.val === 2, 'Example 2: Intersection node value should be 2');
}

// Example 3: No intersection, listA = [2,6,4], listB = [1,5]
{
  const nodesA = [2,6,4].map(v => new ListNode(v));
  for (let i = 0; i < nodesA.length - 1; i++) nodesA[i].next = nodesA[i+1];

  const nodesB = [1,5].map(v => new ListNode(v));
  for (let i = 0; i < nodesB.length - 1; i++) nodesB[i].next = nodesB[i+1];

  const result = getIntersectionNode(nodesA[0], nodesB[0]);
  console.assert(result === null, 'Example 3: Should return null when no intersection');
}

// Edge case: Both lists are the same single node
{
  const node = new ListNode(1);
  const result = getIntersectionNode(node, node);
  console.assert(result === node, 'Edge case: Same single node should return that node');
}

// Edge case: null inputs
{
  const node = new ListNode(1);
  console.assert(getIntersectionNode(null, node) === null, 'Edge case: null headA should return null');
  console.assert(getIntersectionNode(node, null) === null, 'Edge case: null headB should return null');
  console.assert(getIntersectionNode(null, null) === null, 'Edge case: both null should return null');
}

// Edge case: Intersection at the very first node (entire lists share the same structure)
{
  const sharedNode = new ListNode(5);
  sharedNode.next = new ListNode(10);
  const result = getIntersectionNode(sharedNode, sharedNode);
  console.assert(result === sharedNode, 'Edge case: Intersection at head should return head');
}

// Edge case: Single node lists that do not intersect
{
  const nodeA = new ListNode(1);
  const nodeB = new ListNode(1);
  const result = getIntersectionNode(nodeA, nodeB);
  console.assert(result === null, 'Edge case: Single different nodes should return null');
}

// Edge case: Long list A, short list B with intersection at end
{
  const shared = new ListNode(99);
  const a1 = new ListNode(1);
  const a2 = new ListNode(2);
  const a3 = new ListNode(3);
  a1.next = a2; a2.next = a3; a3.next = shared;

  const b1 = new ListNode(4);
  b1.next = shared;

  const result = getIntersectionNode(a1, b1);
  console.assert(result === shared, 'Edge case: Long list A, short list B intersection');
  console.assert(result.val === 99, 'Edge case: Intersection value should be 99');
}

console.log('ALL TESTS PASSED');
