import { readBinaryWatch } from './binary-watch.js';

// Helper to check if two arrays have the same elements (order-independent)
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  const sortedA = [...a].sort();
  const sortedB = [...b].sort();
  return sortedA.every((val, idx) => val === sortedB[idx]);
}

// Example 1: turnedOn = 1
const result1 = readBinaryWatch(1);
const expected1 = ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"];
console.assert(arraysEqual(result1, expected1), `Test 1 failed: got ${JSON.stringify(result1)}`);

// Example 2: turnedOn = 9
const result2 = readBinaryWatch(9);
const expected2 = [];
console.assert(arraysEqual(result2, expected2), `Test 2 failed: got ${JSON.stringify(result2)}`);

// Edge case: turnedOn = 0 => only "0:00"
const result3 = readBinaryWatch(0);
const expected3 = ["0:00"];
console.assert(arraysEqual(result3, expected3), `Test 3 failed: got ${JSON.stringify(result3)}`);

// Edge case: turnedOn = 10 => empty (max bits for 11:59 is 4+5=9 but let's verify max valid)
const result4 = readBinaryWatch(10);
console.assert(result4.length === 0, `Test 4 failed: expected empty array, got ${JSON.stringify(result4)}`);

// Edge case: turnedOn = 8
const result5 = readBinaryWatch(8);
// All results should have valid hours (0-11) and minutes (0-59)
const validFormat = result5.every(time => {
  const [h, m] = time.split(':');
  const hour = parseInt(h);
  const minute = parseInt(m);
  return hour >= 0 && hour < 12 && minute >= 0 && minute < 60 && m.length === 2;
});
console.assert(validFormat, `Test 5 failed: invalid time format in ${JSON.stringify(result5)}`);

// Edge case: turnedOn = 2
const result6 = readBinaryWatch(2);
const expected6 = [
  "0:03","0:05","0:06","0:09","0:10","0:12","0:17","0:18","0:20","0:24",
  "0:33","0:34","0:36","0:40","0:48","1:01","1:02","1:04","1:08","1:16",
  "1:32","2:01","2:02","2:04","2:08","2:16","2:32","3:00","4:01","4:02",
  "4:04","4:08","4:16","4:32","5:00","6:00","8:01","8:02","8:04","8:08",
  "8:16","8:32","9:00","10:00"
];
console.assert(arraysEqual(result6, expected6), `Test 6 failed: got ${JSON.stringify(result6)}`);

// Verify no leading zeros in hours
const result7 = readBinaryWatch(3);
const noLeadingZero = result7.every(time => {
  const hour = time.split(':')[0];
  return hour === '0' || !hour.startsWith('0');
});
console.assert(noLeadingZero, `Test 7 failed: leading zero in hours found in ${JSON.stringify(result7)}`);

// Verify minutes always have 2 digits
const twoDigitMinutes = result7.every(time => {
  const minute = time.split(':')[1];
  return minute.length === 2;
});
console.assert(twoDigitMinutes, `Test 8 failed: minutes not 2 digits in ${JSON.stringify(result7)}`);

console.log("ALL TESTS PASSED");
