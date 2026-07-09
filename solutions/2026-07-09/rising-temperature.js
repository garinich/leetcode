// Rising Temperature — Easy
// https://leetcode.com/problems/rising-temperature/

/**
 * Rising Temperature
 *
 * Approach:
 * This is a SQL problem, but we solve it in JavaScript by simulating the query.
 * We join the Weather table with itself where one record's date is exactly
 * one day after another record's date, and the temperature is higher.
 *
 * SQL equivalent:
 * SELECT w1.id
 * FROM Weather w1
 * JOIN Weather w2
 * ON DATEDIFF(w1.recordDate, w2.recordDate) = 1
 * WHERE w1.temperature > w2.temperature;
 *
 * Algorithm:
 * 1. Create a map from recordDate -> {id, temperature} for O(1) lookups
 * 2. For each row, check if there's a record from the previous day
 * 3. If previous day exists and current temperature > previous temperature, include id
 *
 * Time Complexity: O(n) where n is number of rows
 * Space Complexity: O(n) for the map
 */

/**
 * Finds all ids where temperature is higher than the previous day
 * @param {Array<{id: number, recordDate: string, temperature: number}>} weather
 * @returns {Array<{id: number}>}
 */
export function risingTemperature(weather) {
  // Build a map from date string to row data
  const dateMap = new Map();

  for (const row of weather) {
    const dateStr = typeof row.recordDate === 'string'
      ? row.recordDate
      : row.recordDate.toISOString().split('T')[0];
    dateMap.set(dateStr, { id: row.id, temperature: row.temperature });
  }

  const result = [];

  for (const row of weather) {
    const dateStr = typeof row.recordDate === 'string'
      ? row.recordDate
      : row.recordDate.toISOString().split('T')[0];

    // Calculate previous day
    const currentDate = new Date(dateStr + 'T00:00:00Z');
    const prevDate = new Date(currentDate);
    prevDate.setUTCDate(prevDate.getUTCDate() - 1);
    const prevDateStr = prevDate.toISOString().split('T')[0];

    if (dateMap.has(prevDateStr)) {
      const prevRow = dateMap.get(prevDateStr);
      if (row.temperature > prevRow.temperature) {
        result.push({ id: row.id });
      }
    }
  }

  return result;
}

/**
 * Processes raw table input (headers + rows format from LeetCode)
 * @param {Object} input - { headers: { Weather: [...] }, rows: { Weather: [...] } }
 * @returns {Array<{id: number}>}
 */
export function risingTemperatureFromTable(input) {
  const headers = input.headers.Weather;
  const rows = input.rows.Weather;

  const weather = rows.map(row => {
    const obj = {};
    headers.forEach((header, idx) => {
      obj[header] = row[idx];
    });
    return obj;
  });

  return risingTemperature(weather);
}
