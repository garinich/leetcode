// Copy List with Random Pointer — Medium
// https://leetcode.com/problems/copy-list-with-random-pointer/

/**
 * Copy List with Random Pointer
 *
 * Approach: Use a HashMap to map original nodes to their copies.
 * First pass: Create all new nodes and store mapping (original -> copy).
 * Second pass: Set next and random pointers for each copied node
 *              using the HashMap to find the corresponding copy.
 *
 * Time Complexity: O(n) - two passes through the list
 * Space Complexity: O(n) - HashMap storing n node mappings
 */

/**
 * @param {Node} head
 * @return {Node}
 */
export function copyRandomList(head) {
  if (!head) return null;

  // Map from original node to its copy
  const map = new Map();

  // First pass: create all copied nodes
  let curr = head;
  while (curr) {
    map.set(curr, { val: curr.val, next: null, random: null });
    curr = curr.next;
  }

  // Second pass: set next and random pointers
  curr = head;
  while (curr) {
    const copy = map.get(curr);
    if (curr.next) {
      copy.next = map.get(curr.next);
    }
    if (curr.random) {
      copy.random = map.get(curr.random);
    }
    curr = curr.next;
  }

  return map.get(head);
}

/**
 * Helper: Build a linked list from array representation
 * Each element is [val, randomIndex | null]
 */
export function buildList(arr) {
  if (!arr || arr.length === 0) return null;

  const nodes = arr.map(([val]) => ({ val, next: null, random: null }));

  for (let i = 0; i < nodes.length; i++) {
    if (i + 1 < nodes.length) {
      nodes[i].next = nodes[i + 1];
    }
    const randomIdx = arr[i][1];
    if (randomIdx !== null && randomIdx !== undefined) {
      nodes[i].random = nodes[randomIdx];
    }
  }

  return nodes[0];
}

/**
 * Helper: Convert linked list back to array representation
 */
export function listToArray(head) {
  const result = [];
  const nodes = [];
  let curr = head;

  while (curr) {
    nodes.push(curr);
    curr = curr.next;
  }

  const nodeIndexMap = new Map();
  nodes.forEach((node, idx) => nodeIndexMap.set(node, idx));

  for (const node of nodes) {
    const randomIdx = node.random !== null ? nodeIndexMap.get(node.random) : null;
    result.push([node.val, randomIdx !== undefined ? randomIdx : null]);
  }

  return result;
}
