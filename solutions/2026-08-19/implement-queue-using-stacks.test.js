import { MyQueue } from './implement-queue-using-stacks.js';

// Example 1 from problem
{
  const myQueue = new MyQueue();
  myQueue.push(1);
  myQueue.push(2);
  console.assert(myQueue.peek() === 1, 'Example1: peek should return 1');
  console.assert(myQueue.pop() === 1, 'Example1: pop should return 1');
  console.assert(myQueue.empty() === false, 'Example1: empty should return false');
}

// Single element
{
  const q = new MyQueue();
  q.push(5);
  console.assert(q.empty() === false, 'Single: not empty after push');
  console.assert(q.peek() === 5, 'Single: peek returns 5');
  console.assert(q.pop() === 5, 'Single: pop returns 5');
  console.assert(q.empty() === true, 'Single: empty after pop');
}

// FIFO order with multiple elements
{
  const q = new MyQueue();
  q.push(1);
  q.push(2);
  q.push(3);
  console.assert(q.pop() === 1, 'FIFO: first pop returns 1');
  console.assert(q.pop() === 2, 'FIFO: second pop returns 2');
  q.push(4);
  console.assert(q.pop() === 3, 'FIFO: third pop returns 3');
  console.assert(q.pop() === 4, 'FIFO: fourth pop returns 4');
  console.assert(q.empty() === true, 'FIFO: empty after all pops');
}

// Interleaved push and pop
{
  const q = new MyQueue();
  q.push(1);
  console.assert(q.pop() === 1, 'Interleaved: pop 1');
  q.push(2);
  q.push(3);
  console.assert(q.peek() === 2, 'Interleaved: peek 2');
  console.assert(q.pop() === 2, 'Interleaved: pop 2');
  console.assert(q.peek() === 3, 'Interleaved: peek 3');
  console.assert(q.pop() === 3, 'Interleaved: pop 3');
  console.assert(q.empty() === true, 'Interleaved: empty');
}

// Empty check on new queue
{
  const q = new MyQueue();
  console.assert(q.empty() === true, 'Empty: new queue is empty');
}

// peek does not remove element
{
  const q = new MyQueue();
  q.push(7);
  q.push(8);
  console.assert(q.peek() === 7, 'Peek: returns 7');
  console.assert(q.peek() === 7, 'Peek: still returns 7 after second peek');
  console.assert(q.pop() === 7, 'Peek: pop returns 7');
  console.assert(q.peek() === 8, 'Peek: now returns 8');
}

console.log('ALL TESTS PASSED');
