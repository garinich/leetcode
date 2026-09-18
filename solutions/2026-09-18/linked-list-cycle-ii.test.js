import { detectCycle, ListNode } from './linked-list-cycle-ii.js';

// Helper: build linked list with optional cycle
function buildList(values, pos) {
  if (!values || values.length === 0) return null;

  const nodes = values.map(v => new ListNode(v));

  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }

  if (pos !== -1 && pos < nodes.length) {
    nodes[nodes.length - 1].next = nodes[pos];
  }

  return { head: nodes[0], cycleNode: pos !== -1 ? nodes[pos] : null };
}

// Test 1: [3,2,0,-4], pos=1 => cycle starts at node index 1
{
  const { head, cycleNode } = buildList([3, 2, 0, -4], 1);
  const result = detectCycle(head);
  console.assert(result === cycleNode, 'Test 1 Failed: expected node with val 2');
  console.assert(result !== null && result.val === 2, 'Test 1 Failed: node value should be 2');
}

// Test 2: [1,2], pos=0 => cycle starts at node index 0
{
  const { head, cycleNode } = buildList([1, 2], 0);
  const result = detectCycle(head);
  console.assert(result === cycleNode, 'Test 2 Failed: expected node with val 1');
  console.assert(result !== null && result.val === 1, 'Test 2 Failed: node value should be 1');
}

// Test 3: [1], pos=-1 => no cycle
{
  const { head } = buildList([1], -1);
  const result = detectCycle(head);
  console.assert(result === null, 'Test 3 Failed: expected null (no cycle)');
}

// Test 4: empty list
{
  const result = detectCycle(null);
  console.assert(result === null, 'Test 4 Failed: empty list should return null');
}

// Test 5: single node with self-loop
{
  const node = new ListNode(1);
  node.next = node;
  const result = detectCycle(node);
  console.assert(result === node, 'Test 5 Failed: single node self-loop should return that node');
}

// Test 6: no cycle, long list
{
  const { head } = buildList([1, 2, 3, 4, 5], -1);
  const result = detectCycle(head);
  console.assert(result === null, 'Test 6 Failed: no cycle should return null');
}

// Test 7: cycle at last node back to first
{
  const { head, cycleNode } = buildList([1, 2, 3, 4, 5], 0);
  const result = detectCycle(head);
  console.assert(result === cycleNode, 'Test 7 Failed: cycle start should be first node');
  console.assert(result !== null && result.val === 1, 'Test 7 Failed: node value should be 1');
}

// Test 8: cycle starts near end
{
  const { head, cycleNode } = buildList([1, 2, 3, 4, 5], 3);
  const result = detectCycle(head);
  console.assert(result === cycleNode, 'Test 8 Failed: cycle start should be node index 3');
  console.assert(result !== null && result.val === 4, 'Test 8 Failed: node value should be 4');
}

console.log('ALL TESTS PASSED');
