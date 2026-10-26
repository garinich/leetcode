// Isomorphic Strings — Easy
// https://leetcode.com/problems/isomorphic-strings/

/**
 * Determines if two strings are isomorphic.
 *
 * Approach:
 * - Use two maps: one from s->t and one from t->s to ensure bijective mapping.
 * - For each character pair (s[i], t[i]):
 *   - If s[i] is already mapped, check it maps to t[i].
 *   - If t[i] is already mapped back, check it maps back to s[i].
 *   - Otherwise, create both mappings.
 * - If any inconsistency is found, return false.
 *
 * Time Complexity: O(n) where n is the length of the strings.
 * Space Complexity: O(1) since the maps hold at most 128 ASCII characters.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  const sToT = new Map();
  const tToS = new Map();

  for (let i = 0; i < s.length; i++) {
    const sc = s[i];
    const tc = t[i];

    if (sToT.has(sc)) {
      if (sToT.get(sc) !== tc) return false;
    } else {
      if (tToS.has(tc)) return false;
      sToT.set(sc, tc);
      tToS.set(tc, sc);
    }
  }

  return true;
}
