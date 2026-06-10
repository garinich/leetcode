import { LRUCache } from './lru-cache.js';

// Test case 1: Basic functionality from the example
const lruCache = new LRUCache(2);
lruCache.put(1, 1);
lruCache.put(2, 2);
console.assert(lruCache.get(1) === 1, 'Should return 1');
lruCache.put(3, 3); // evicts key 2
console.assert(lruCache.get(2) === -1, 'Key 2 should be evicted');
lruCache.put(4, 4); // evicts key 1
console.assert(lruCache.get(1) === -1, 'Key 1 should be evicted');
console.assert(lruCache.get(3) === 3, 'Should return 3');
console.assert(lruCache.get(4) === 4, 'Should return 4');

// Test case 2: Single capacity
const singleCache = new LRUCache(1);
singleCache.put(1, 1);
console.assert(singleCache.get(1) === 1, 'Should return 1');
singleCache.put(2, 2);
console.assert(singleCache.get(1) === -1, 'Key 1 should be evicted');
console.assert(singleCache.get(2) === 2, 'Should return 2');

// Test case 3: Update existing key
const updateCache = new LRUCache(2);
updateCache.put(1, 1);
updateCache.put(2, 2);
updateCache.put(1, 10); // update key 1
console.assert(updateCache.get(1) === 10, 'Should return updated value 10');
console.assert(updateCache.get(2) === 2, 'Key 2 should still exist');
updateCache.put(3, 3); // should evict key 2 (since key 1 was recently updated)
console.assert(updateCache.get(2) === -1, 'Key 2 should be evicted');

// Test case 4: Access pattern affects eviction order
const accessCache = new LRUCache(2);
accessCache.put(1, 1);
accessCache.put(2, 2);
accessCache.get(1); // access key 1, making it more recent than key 2
accessCache.put(3, 3); // should evict key 2
console.assert(accessCache.get(1) === 1, 'Key 1 should still exist');
console.assert(accessCache.get(2) === -1, 'Key 2 should be evicted');
console.assert(accessCache.get(3) === 3, 'Key 3 should exist');

// Test case 5: Large capacity
const largeCache = new LRUCache(3);
largeCache.put(1, 1);
largeCache.put(2, 2);
largeCache.put(3, 3);
console.assert(largeCache.get(1) === 1, 'Should return 1');
console.assert(largeCache.get(2) === 2, 'Should return 2');
console.assert(largeCache.get(3) === 3, 'Should return 3');
largeCache.put(4, 4); // should evict key 1
console.assert(largeCache.get(1) === -1, 'Key 1 should be evicted');

// Test case 6: Key 0 and value 0 (edge values)
const zeroCache = new LRUCache(2);
zeroCache.put(0, 0);
console.assert(zeroCache.get(0) === 0, 'Should handle key 0 and value 0');
zeroCache.put(1, 0);
console.assert(zeroCache.get(1) === 0, 'Should handle value 0');

// Test case 7: Non-existent key
const emptyCache = new LRUCache(1);
console.assert(emptyCache.get(1) === -1, 'Non-existent key should return -1');

console.log('ALL TESTS PASSED');