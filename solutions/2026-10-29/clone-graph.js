// Clone Graph — Medium
// https://leetcode.com/problems/clone-graph/

/**
 * Clone Graph - Deep copy of a connected undirected graph
 *
 * Approach: BFS/DFS with a HashMap to track visited nodes
 * - Use a Map to store original node -> cloned node mapping
 * - Traverse the graph using BFS
 * - For each node, create a clone if not already created
 * - For each neighbor, create clone if not exists, then add to current clone's neighbors
 *
 * Time Complexity: O(V + E) where V = vertices, E = edges
 * Space Complexity: O(V) for the visited map and queue
 */

/**
 * Node class definition
 */
export class Node {
  constructor(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

/**
 * Clone the graph using BFS
 * @param {Node} node - Reference node to start cloning from
 * @returns {Node} - Deep copy of the graph
 */
export function cloneGraph(node) {
  if (!node) return null;

  // Map from original node to its clone
  const visited = new Map();

  // BFS queue
  const queue = [node];

  // Create clone of the starting node
  visited.set(node, new Node(node.val));

  while (queue.length > 0) {
    const current = queue.shift();
    const currentClone = visited.get(current);

    for (const neighbor of current.neighbors) {
      if (!visited.has(neighbor)) {
        // Create clone for unvisited neighbor
        visited.set(neighbor, new Node(neighbor.val));
        queue.push(neighbor);
      }
      // Add cloned neighbor to current clone's neighbors
      currentClone.neighbors.push(visited.get(neighbor));
    }
  }

  return visited.get(node);
}

/**
 * Helper: Build graph from adjacency list
 * @param {number[][]} adjList
 * @returns {Node|null}
 */
export function buildGraph(adjList) {
  if (!adjList || adjList.length === 0) return null;

  const nodes = [];
  for (let i = 0; i < adjList.length; i++) {
    nodes.push(new Node(i + 1));
  }

  for (let i = 0; i < adjList.length; i++) {
    for (const neighborVal of adjList[i]) {
      nodes[i].neighbors.push(nodes[neighborVal - 1]);
    }
  }

  return nodes[0];
}

/**
 * Helper: Convert graph back to adjacency list for comparison
 * @param {Node|null} node
 * @returns {number[][]}
 */
export function graphToAdjList(node) {
  if (!node) return [];

  const result = [];
  const visited = new Map();
  const queue = [node];
  visited.set(node.val, node);

  // BFS to collect all nodes
  while (queue.length > 0) {
    const current = queue.shift();
    result.push({ val: current.val, neighbors: current.neighbors.map(n => n.val) });
    for (const neighbor of current.neighbors) {
      if (!visited.has(neighbor.val)) {
        visited.set(neighbor.val, neighbor);
        queue.push(neighbor);
      }
    }
  }

  // Sort by val and build adjacency list
  result.sort((a, b) => a.val - b.val);
  return result.map(r => r.neighbors.sort((a, b) => a - b));
}
