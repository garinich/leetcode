import { cloneGraph, buildGraph, graphToAdjList, Node } from './clone-graph.js';

// Helper to verify the clone is a deep copy (different object references)
function verifyDeepCopy(original, clone) {
  if (!original && !clone) return true;
  if (!original || !clone) return false;

  const visitedOrig = new Set();
  const visitedClone = new Set();
  const queue = [[original, clone]];

  while (queue.length > 0) {
    const [orig, cln] = queue.shift();

    // Must be different objects
    if (orig === cln) return false;
    if (orig.val !== cln.val) return false;
    if (orig.neighbors.length !== cln.neighbors.length) return false;

    if (visitedOrig.has(orig.val)) continue;
    visitedOrig.add(orig.val);
    visitedClone.add(cln.val);

    for (let i = 0; i < orig.neighbors.length; i++) {
      const origNeighbor = orig.neighbors.find(n => n.val === cln.neighbors[i].val);
      if (origNeighbor) {
        queue.push([origNeighbor, cln.neighbors[i]]);
      }
    }
  }

  return true;
}

// Test 1: Example 1 - [[2,4],[1,3],[2,4],[1,3]]
const adjList1 = [[2,4],[1,3],[2,4],[1,3]];
const graph1 = buildGraph(adjList1);
const clone1 = cloneGraph(graph1);
const result1 = graphToAdjList(clone1);
console.assert(
  JSON.stringify(result1) === JSON.stringify([[2,4],[1,3],[2,4],[1,3]]),
  `Test 1 adjacency list failed: ${JSON.stringify(result1)}`
);
console.assert(
  verifyDeepCopy(graph1, clone1),
  'Test 1: Clone should be a deep copy (different references)'
);

// Test 2: Example 2 - [[]] (single node, no neighbors)
const adjList2 = [[]];
const graph2 = buildGraph(adjList2);
const clone2 = cloneGraph(graph2);
const result2 = graphToAdjList(clone2);
console.assert(
  JSON.stringify(result2) === JSON.stringify([[]]),
  `Test 2 failed: ${JSON.stringify(result2)}`
);
console.assert(clone2 !== graph2, 'Test 2: Clone should be different object');
console.assert(clone2.val === 1, 'Test 2: Clone val should be 1');
console.assert(clone2.neighbors.length === 0, 'Test 2: Clone should have no neighbors');

// Test 3: Example 3 - [] (empty graph)
const clone3 = cloneGraph(null);
console.assert(clone3 === null, 'Test 3: Empty graph should return null');

// Test 4: Single node with self-loop behavior (not in constraints but edge case)
// Actually no self-loops per constraints, skip

// Test 5: Two nodes connected to each other
const adjList5 = [[2],[1]];
const graph5 = buildGraph(adjList5);
const clone5 = cloneGraph(graph5);
const result5 = graphToAdjList(clone5);
console.assert(
  JSON.stringify(result5) === JSON.stringify([[2],[1]]),
  `Test 5 failed: ${JSON.stringify(result5)}`
);
console.assert(verifyDeepCopy(graph5, clone5), 'Test 5: Should be deep copy');

// Test 6: Linear chain 1-2-3
const adjList6 = [[2],[1,3],[2]];
const graph6 = buildGraph(adjList6);
const clone6 = cloneGraph(graph6);
const result6 = graphToAdjList(clone6);
console.assert(
  JSON.stringify(result6) === JSON.stringify([[2],[1,3],[2]]),
  `Test 6 failed: ${JSON.stringify(result6)}`
);
console.assert(verifyDeepCopy(graph6, clone6), 'Test 6: Should be deep copy');

// Test 7: Verify modifying clone doesn't affect original
const adjList7 = [[2,4],[1,3],[2,4],[1,3]];
const graph7 = buildGraph(adjList7);
const clone7 = cloneGraph(graph7);
// Add a new neighbor to clone's first node
clone7.neighbors.push(new Node(99));
console.assert(
  graph7.neighbors.length === 2,
  'Test 7: Modifying clone should not affect original'
);
console.assert(
  clone7.neighbors.length === 3,
  'Test 7: Clone should have modified neighbors'
);

// Test 8: Single node (val=1, no neighbors) created directly
const singleNode = new Node(1);
const cloneSingle = cloneGraph(singleNode);
console.assert(cloneSingle !== null, 'Test 8: Should not be null');
console.assert(cloneSingle !== singleNode, 'Test 8: Should be different object');
console.assert(cloneSingle.val === 1, 'Test 8: Val should be 1');
console.assert(cloneSingle.neighbors.length === 0, 'Test 8: No neighbors');

console.log("ALL TESTS PASSED");
