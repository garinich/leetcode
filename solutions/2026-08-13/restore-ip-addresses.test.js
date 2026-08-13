import { restoreIpAddresses } from './restore-ip-addresses.js';

function arraysEqualIgnoreOrder(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const sorted1 = [...arr1].sort();
  const sorted2 = [...arr2].sort();
  return sorted1.every((val, idx) => val === sorted2[idx]);
}

// Example 1
const result1 = restoreIpAddresses("25525511135");
console.assert(
  arraysEqualIgnoreOrder(result1, ["255.255.11.135", "255.255.111.35"]),
  `Test 1 failed: ${JSON.stringify(result1)}`
);

// Example 2
const result2 = restoreIpAddresses("0000");
console.assert(
  arraysEqualIgnoreOrder(result2, ["0.0.0.0"]),
  `Test 2 failed: ${JSON.stringify(result2)}`
);

// Example 3
const result3 = restoreIpAddresses("101023");
console.assert(
  arraysEqualIgnoreOrder(result3, ["1.0.10.23", "1.0.102.3", "10.1.0.23", "10.10.2.3", "101.0.2.3"]),
  `Test 3 failed: ${JSON.stringify(result3)}`
);

// Edge case: too short to form valid IP
const result4 = restoreIpAddresses("1");
console.assert(
  arraysEqualIgnoreOrder(result4, []),
  `Test 4 failed: ${JSON.stringify(result4)}`
);

// Edge case: too long
const result5 = restoreIpAddresses("12345678901234567890");
console.assert(
  arraysEqualIgnoreOrder(result5, []),
  `Test 5 failed: ${JSON.stringify(result5)}`
);

// Edge case: all zeros longer than 4
const result6 = restoreIpAddresses("00000");
console.assert(
  arraysEqualIgnoreOrder(result6, []),
  `Test 6 failed: ${JSON.stringify(result6)}`
);

// Edge case: valid single digit segments
const result7 = restoreIpAddresses("1111");
console.assert(
  arraysEqualIgnoreOrder(result7, ["1.1.1.1"]),
  `Test 7 failed: ${JSON.stringify(result7)}`
);

// Edge case: leading zeros in segment
const result8 = restoreIpAddresses("010010");
console.assert(
  arraysEqualIgnoreOrder(result8, ["0.10.0.10", "0.100.1.0"]),
  `Test 8 failed: ${JSON.stringify(result8)}`
);

// Edge case: exactly at boundaries (255)
const result9 = restoreIpAddresses("255255255255");
console.assert(
  arraysEqualIgnoreOrder(result9, ["255.255.255.255"]),
  `Test 9 failed: ${JSON.stringify(result9)}`
);

console.log("ALL TESTS PASSED");
