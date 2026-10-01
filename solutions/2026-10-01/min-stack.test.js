import { MinStack } from './min-stack.js';

// Test 1: Example from problem
{
  const minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  console.assert(minStack.getMin() === -3, 'Test 1a: getMin should return -3');
  minStack.pop();
  console.assert(minStack.top() === 0, 'Test 1b: top should return 0');
  console.assert(minStack.getMin() === -2, 'Test 1c: getMin should return -2');
}

// Test 2: Single element
{
  const minStack = new MinStack();
  minStack.push(5);
  console.assert(minStack.top() === 5, 'Test 2a: top should return 5');
  console.assert(minStack.getMin() === 5, 'Test 2b: getMin should return 5');
  minStack.pop();
}

// Test 3: Duplicate minimums
{
  const minStack = new MinStack();
  minStack.push(1);
  minStack.push(1);
  minStack.push(1);
  console.assert(minStack.getMin() === 1, 'Test 3a: getMin should return 1');
  minStack.pop();
  console.assert(minStack.getMin() === 1, 'Test 3b: getMin should still return 1 after pop');
}

// Test 4: Min changes as elements are popped
{
  const minStack = new MinStack();
  minStack.push(3);
  minStack.push(2);
  minStack.push(1);
  console.assert(minStack.getMin() === 1, 'Test 4a: getMin should return 1');
  minStack.pop();
  console.assert(minStack.getMin() === 2, 'Test 4b: getMin should return 2 after pop');
  minStack.pop();
  console.assert(minStack.getMin() === 3, 'Test 4c: getMin should return 3 after second pop');
}

// Test 5: Negative numbers
{
  const minStack = new MinStack();
  minStack.push(-1);
  minStack.push(-2);
  minStack.push(-3);
  console.assert(minStack.getMin() === -3, 'Test 5a: getMin should return -3');
  minStack.pop();
  console.assert(minStack.getMin() === -2, 'Test 5b: getMin should return -2');
}

// Test 6: Push increasing order
{
  const minStack = new MinStack();
  minStack.push(1);
  minStack.push(2);
  minStack.push(3);
  console.assert(minStack.getMin() === 1, 'Test 6a: getMin should return 1');
  console.assert(minStack.top() === 3, 'Test 6b: top should return 3');
  minStack.pop();
  console.assert(minStack.top() === 2, 'Test 6c: top should return 2 after pop');
  console.assert(minStack.getMin() === 1, 'Test 6d: getMin should still return 1');
}

// Test 7: Large and small values
{
  const minStack = new MinStack();
  minStack.push(2147483647);
  minStack.push(-2147483648);
  console.assert(minStack.getMin() === -2147483648, 'Test 7a: getMin should return -2147483648');
  minStack.pop();
  console.assert(minStack.getMin() === 2147483647, 'Test 7b: getMin should return 2147483647');
}

console.log('ALL TESTS PASSED');
