import { solution } from './first-bad-version.js';

// Helper to create isBadVersion mock for a given bad version threshold
function createIsBadVersion(bad) {
  return function(version) {
    return version >= bad;
  };
}

// Test case 1: n = 5, bad = 4
{
  const bad = 4;
  const isBadVersion = createIsBadVersion(bad);
  const findFirstBadVersion = solution(isBadVersion);
  const result = findFirstBadVersion(5);
  console.assert(result === 4, `Test 1 failed: expected 4, got ${result}`);
}

// Test case 2: n = 1, bad = 1
{
  const bad = 1;
  const isBadVersion = createIsBadVersion(bad);
  const findFirstBadVersion = solution(isBadVersion);
  const result = findFirstBadVersion(1);
  console.assert(result === 1, `Test 2 failed: expected 1, got ${result}`);
}

// Edge case: bad version is the first (n = 10, bad = 1)
{
  const bad = 1;
  const isBadVersion = createIsBadVersion(bad);
  const findFirstBadVersion = solution(isBadVersion);
  const result = findFirstBadVersion(10);
  console.assert(result === 1, `Test 3 failed: expected 1, got ${result}`);
}

// Edge case: bad version is the last (n = 10, bad = 10)
{
  const bad = 10;
  const isBadVersion = createIsBadVersion(bad);
  const findFirstBadVersion = solution(isBadVersion);
  const result = findFirstBadVersion(10);
  console.assert(result === 10, `Test 4 failed: expected 10, got ${result}`);
}

// Edge case: n = 2, bad = 2
{
  const bad = 2;
  const isBadVersion = createIsBadVersion(bad);
  const findFirstBadVersion = solution(isBadVersion);
  const result = findFirstBadVersion(2);
  console.assert(result === 2, `Test 5 failed: expected 2, got ${result}`);
}

// Edge case: n = 2, bad = 1
{
  const bad = 1;
  const isBadVersion = createIsBadVersion(bad);
  const findFirstBadVersion = solution(isBadVersion);
  const result = findFirstBadVersion(2);
  console.assert(result === 1, `Test 6 failed: expected 1, got ${result}`);
}

// Large n test: n = 2^31 - 1, bad = 2^31 - 1
{
  const bad = 2147483647;
  const isBadVersion = createIsBadVersion(bad);
  const findFirstBadVersion = solution(isBadVersion);
  const result = findFirstBadVersion(2147483647);
  console.assert(result === 2147483647, `Test 7 failed: expected 2147483647, got ${result}`);
}

console.log("ALL TESTS PASSED");
