/*
 * LRU Cache
 * Difficulty: Medium
 * Date: 2026-06-10 | Attempts: 1
 * https://leetcode.com/problems/lru-cache/
 *
 * Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
 * 
 * Implement the LRUCache class:
 * 
 * 	LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
 * 	int get(int key) Return the value of the key if the key exists, otherwise return -1.
 * 	void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
 * 
 * The functions get and put must each run in O(1) average time complexity.
 * 
 * &nbsp;
 * Example 1:
 * 
 * Input
 * ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
 * [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
 * Output
 * [null, null, null, 1, null, -1, null, -1, 3, 4]
 * 
 * Explanation
 * LRUCache lRUCache = new LRUCache(2);
 * lRUCache.put(1, 1); // cache is {1=1}
 * lRUCache.put(2, 2); // cache is {1=1, 2=2}
 * lRUCache.get(1);    // return 1
 * lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
 * lRUCache.get(2);    // returns -1 (not found)
 * lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
 * lRUCache.get(1);    // return -1 (not found)
 * lRUCache.get(3);    // return 3
 * lRUCache.get(4);    // return 4
 * 
 * &nbsp;
 * Constraints:
 * 
 * 	1 <= capacity <= 3000
 * 	0 <= key <= 104
 * 	0 <= value <= 105
 * 	At most 2 * 105 calls will be made to get and put.
 */

/**
 * Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
 * 
 * Approach:
 * - Use a doubly linked list to maintain the order of access (most recent at head, least recent at tail)
 * - Use a Map to store key-node mappings for O(1) lookup
 * - When accessing a node, move it to the head
 * - When capacity is exceeded, remove the tail node
 * 
 * Time Complexity: O(1) for both get and put operations
 * Space Complexity: O(capacity) for storing the cache data
 */

class Node {
    constructor(key = 0, value = 0) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

export class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map(); // key -> node
        
        // Create dummy head and tail nodes
        this.head = new Node();
        this.tail = new Node();
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    
    // Add node right after head
    addNode(node) {
        node.prev = this.head;
        node.next = this.head.next;
        
        this.head.next.prev = node;
        this.head.next = node;
    }
    
    // Remove an existing node from the linked list
    removeNode(node) {
        const prevNode = node.prev;
        const nextNode = node.next;
        
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }
    
    // Move node to head (mark as most recently used)
    moveToHead(node) {
        this.removeNode(node);
        this.addNode(node);
    }
    
    // Remove the last node (least recently used)
    popTail() {
        const lastNode = this.tail.prev;
        this.removeNode(lastNode);
        return lastNode;
    }
    
    get(key) {
        const node = this.cache.get(key);
        
        if (node) {
            // Move the accessed node to the head
            this.moveToHead(node);
            return node.value;
        }
        
        return -1;
    }
    
    put(key, value) {
        const node = this.cache.get(key);
        
        if (node) {
            // Update the value and move to head
            node.value = value;
            this.moveToHead(node);
        } else {
            const newNode = new Node(key, value);
            
            if (this.cache.size >= this.capacity) {
                // Remove the least recently used node
                const tail = this.popTail();
                this.cache.delete(tail.key);
            }
            
            // Add the new node
            this.cache.set(key, newNode);
            this.addNode(newNode);
        }
    }
}