import { getTenthLine, getTenthLineCounter, getTenthLineSed } from './tenth-line.js';

// Helper to run all three implementations
function runAll(input) {
  return [
    getTenthLine(input),
    getTenthLineCounter(input),
    getTenthLineSed(input),
  ];
}

// Test 1: Provided example with exactly 10 lines
const example1 = 'Line 1\nLine 2\nLine 3\nLine 4\nLine 5\nLine 6\nLine 7\nLine 8\nLine 9\nLine 10';
runAll(example1).forEach(result => {
  console.assert(result === 'Line 10', `Expected 'Line 10', got '${result}'`);
});

// Test 2: File with more than 10 lines
const example2 = 'Line 1\nLine 2\nLine 3\nLine 4\nLine 5\nLine 6\nLine 7\nLine 8\nLine 9\nLine 10\nLine 11\nLine 12';
runAll(example2).forEach(result => {
  console.assert(result === 'Line 10', `Expected 'Line 10', got '${result}'`);
});

// Test 3: File with fewer than 10 lines (should return empty string)
const example3 = 'Line 1\nLine 2\nLine 3';
runAll(example3).forEach(result => {
  console.assert(result === '', `Expected '', got '${result}'`);
});

// Test 4: Empty file
const example4 = '';
runAll(example4).forEach(result => {
  console.assert(result === '', `Expected '', got '${result}'`);
});

// Test 5: Exactly 9 lines
const example5 = 'a\nb\nc\nd\ne\nf\ng\nh\ni';
runAll(example5).forEach(result => {
  console.assert(result === '', `Expected '', got '${result}'`);
});

// Test 6: 10th line is empty
const example6 = 'Line 1\nLine 2\nLine 3\nLine 4\nLine 5\nLine 6\nLine 7\nLine 8\nLine 9\n';
runAll(example6).forEach(result => {
  console.assert(result === '', `Expected '', got '${result}'`);
});

// Test 7: Lines with special characters
const example7 = 'a\nb\nc\nd\ne\nf\ng\nh\ni\nhello world!';
runAll(example7).forEach(result => {
  console.assert(result === 'hello world!', `Expected 'hello world!', got '${result}'`);
});

console.log('ALL TESTS PASSED');
