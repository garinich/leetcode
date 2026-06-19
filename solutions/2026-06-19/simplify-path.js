// Simplify Path — Medium
// https://leetcode.com/problems/simplify-path/

/**
 * Simplify Unix-style absolute path to its canonical form.
 *
 * Approach:
 * 1. Split the path by '/' to get individual components.
 * 2. Use a stack to process each component:
 *    - Skip empty strings (from multiple slashes) and single periods ('.')
 *    - For '..', pop the stack if non-empty (go up one directory)
 *    - Otherwise, push the component onto the stack (valid directory/file name)
 * 3. Join the stack with '/' and prepend a leading '/'
 *
 * Time Complexity: O(n) where n is the length of the path
 * Space Complexity: O(n) for the stack and split components
 *
 * @param {string} path - Absolute Unix-style path
 * @returns {string} Simplified canonical path
 */
export function simplifyPath(path) {
  const parts = path.split('/');
  const stack = [];

  for (const part of parts) {
    if (part === '' || part === '.') {
      // Skip empty parts (multiple slashes) and current directory references
      continue;
    } else if (part === '..') {
      // Go up one directory level
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      // Valid directory or file name
      stack.push(part);
    }
  }

  return '/' + stack.join('/');
}
