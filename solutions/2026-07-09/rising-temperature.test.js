import { risingTemperature, risingTemperatureFromTable } from './rising-temperature.js';

// Helper to sort result by id for consistent comparison
function sortById(arr) {
  return [...arr].sort((a, b) => a.id - b.id);
}

function assertResultIds(actual, expectedIds, testName) {
  const actualIds = sortById(actual).map(r => r.id);
  const expectedSorted = [...expectedIds].sort((a, b) => a - b);
  console.assert(
    JSON.stringify(actualIds) === JSON.stringify(expectedSorted),
    `${testName}: Expected [${expectedSorted}] but got [${actualIds}]`
  );
}

// Test 1: Example from problem
const weather1 = [
  { id: 1, recordDate: '2015-01-01', temperature: 10 },
  { id: 2, recordDate: '2015-01-02', temperature: 25 },
  { id: 3, recordDate: '2015-01-03', temperature: 20 },
  { id: 4, recordDate: '2015-01-04', temperature: 30 },
];
const result1 = risingTemperature(weather1);
assertResultIds(result1, [2, 4], 'Test 1: Basic example');

// Test 2: Using table format from LeetCode
const input2 = {
  headers: { Weather: ['id', 'recordDate', 'temperature'] },
  rows: { Weather: [[1, '2015-01-01', 10], [2, '2015-01-02', 25], [3, '2015-01-03', 20], [4, '2015-01-04', 30]] }
};
const result2 = risingTemperatureFromTable(input2);
assertResultIds(result2, [2, 4], 'Test 2: Table format input');

// Test 3: All temperatures increasing
const weather3 = [
  { id: 1, recordDate: '2020-01-01', temperature: 5 },
  { id: 2, recordDate: '2020-01-02', temperature: 10 },
  { id: 3, recordDate: '2020-01-03', temperature: 15 },
];
const result3 = risingTemperature(weather3);
assertResultIds(result3, [2, 3], 'Test 3: All increasing temperatures');

// Test 4: All temperatures decreasing
const weather4 = [
  { id: 1, recordDate: '2020-01-01', temperature: 30 },
  { id: 2, recordDate: '2020-01-02', temperature: 20 },
  { id: 3, recordDate: '2020-01-03', temperature: 10 },
];
const result4 = risingTemperature(weather4);
assertResultIds(result4, [], 'Test 4: All decreasing temperatures');

// Test 5: Single row
const weather5 = [
  { id: 1, recordDate: '2020-06-01', temperature: 25 },
];
const result5 = risingTemperature(weather5);
assertResultIds(result5, [], 'Test 5: Single row');

// Test 6: Non-consecutive dates (gap in dates)
const weather6 = [
  { id: 1, recordDate: '2020-01-01', temperature: 10 },
  { id: 2, recordDate: '2020-01-03', temperature: 30 }, // skips Jan 2
  { id: 3, recordDate: '2020-01-04', temperature: 20 },
];
const result6 = risingTemperature(weather6);
// Jan 3 has no previous consecutive day (Jan 2 is missing), Jan 4 > Jan 3 -> id 3
assertResultIds(result6, [3], 'Test 6: Non-consecutive dates');

// Test 7: Same temperature as previous day (not higher)
const weather7 = [
  { id: 1, recordDate: '2021-03-01', temperature: 15 },
  { id: 2, recordDate: '2021-03-02', temperature: 15 },
  { id: 3, recordDate: '2021-03-03', temperature: 20 },
];
const result7 = risingTemperature(weather7);
assertResultIds(result7, [3], 'Test 7: Same temp not counted, only strictly higher');

// Test 8: Month boundary
const weather8 = [
  { id: 1, recordDate: '2020-01-31', temperature: 5 },
  { id: 2, recordDate: '2020-02-01', temperature: 10 },
];
const result8 = risingTemperature(weather8);
assertResultIds(result8, [2], 'Test 8: Month boundary');

// Test 9: Year boundary
const weather9 = [
  { id: 1, recordDate: '2019-12-31', temperature: 0 },
  { id: 2, recordDate: '2020-01-01', temperature: 5 },
];
const result9 = risingTemperature(weather9);
assertResultIds(result9, [2], 'Test 9: Year boundary');

console.log('ALL TESTS PASSED');
