import { MyStack } from './implement-stack-using-queues.js';

// Example test case from problem
const myStack1 = new MyStack();
myStack1.push(1);
myStack1.push(2);
console.assert(myStack1.top() === 2, 'Test 1 failed: top should be 2');
console.assert(myStack1.pop() === 2, 'Test 2 failed: pop should return 2');
console.assert(myStack1.empty() === false, 'Test 3 failed: stack should not be empty');

// Test empty stack
const myStack2 = new MyStack();
console.assert(myStack2.empty() === true, 'Test 4 failed: new stack should be empty');

// Test single element
const myStack3 = new MyStack();
myStack3.push(5);
console.assert(myStack3.top() === 5, 'Test 5 failed: top should be 5');
console.assert(myStack3.pop() === 5, 'Test 6 failed: pop should return 5');
console.assert(myStack3.empty() === true, 'Test 7 failed: stack should be empty after pop');

// Test LIFO order with multiple elements
const myStack4 = new MyStack();
myStack4.push(1);
myStack4.push(2);
myStack4.push(3);
console.assert(myStack4.pop() === 3, 'Test 8 failed: pop should return 3');
console.assert(myStack4.pop() === 2, 'Test 9 failed: pop should return 2');
console.assert(myStack4.pop() === 1, 'Test 10 failed: pop should return 1');
console.assert(myStack4.empty() === true, 'Test 11 failed: stack should be empty');

// Test top does not remove element
const myStack5 = new MyStack();
myStack5.push(9);
console.assert(myStack5.top() === 9, 'Test 12 failed: top should return 9');
console.assert(myStack5.top() === 9, 'Test 13 failed: top should still return 9');
console.assert(myStack5.empty() === false, 'Test 14 failed: stack should not be empty');

// Test push after pop
const myStack6 = new MyStack();
myStack6.push(1);
myStack6.push(2);
myStack6.pop();
myStack6.push(3);
console.assert(myStack6.top() === 3, 'Test 15 failed: top should be 3 after push');
console.assert(myStack6.pop() === 3, 'Test 16 failed: pop should return 3');
console.assert(myStack6.pop() === 1, 'Test 17 failed: pop should return 1');
console.assert(myStack6.empty() === true, 'Test 18 failed: stack should be empty');

console.log('ALL TESTS PASSED');
