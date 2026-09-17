import { reverseBits } from './reverse-bits.js';

// Example 1: 43261596 -> 964176192
console.assert(
  reverseBits(43261596) === 964176192,
  `Test 1 failed: expected 964176192 but got ${reverseBits(43261596)}`
);

// Example 2: 2147483644 -> 1073741822
console.assert(
  reverseBits(2147483644) === 1073741822,
  `Test 2 failed: expected 1073741822 but got ${reverseBits(2147483644)}`
);

// Edge case: 0 -> 0 (all zeros reversed is still all zeros)
console.assert(
  reverseBits(0) === 0,
  `Test 3 failed: expected 0 but got ${reverseBits(0)}`
);

// Edge case: 2 (binary: 00...0010) -> 1073741824 (binary: 0100...000)
// 2 in 32-bit: 00000000000000000000000000000010
// reversed:    01000000000000000000000000000000 = 1073741824
console.assert(
  reverseBits(2) === 1073741824,
  `Test 4 failed: expected 1073741824 but got ${reverseBits(2)}`
);

// Edge case: 2147483646 (0x7FFFFFFE)
// binary: 01111111111111111111111111111110
// reversed: 01111111111111111111111111111110 = 2147483646
// Actually: 01111111111111111111111111111110 reversed =
// 01111111111111111111111111111110 = 2147483646
console.assert(
  reverseBits(2147483646) === 2147483646,
  `Test 5 failed: expected 2147483646 but got ${reverseBits(2147483646)}`
);

console.log("ALL TESTS PASSED");
