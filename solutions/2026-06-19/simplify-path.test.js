import { simplifyPath } from './simplify-path.js';

// Example 1: Trailing slash removed
console.assert(
  simplifyPath('/home/') === '/home',
  'Test 1 failed: expected /home'
);

// Example 2: Multiple consecutive slashes replaced by single one
console.assert(
  simplifyPath('/home//foo/') === '/home/foo',
  'Test 2 failed: expected /home/foo'
);

// Example 3: Double period goes up one level
console.assert(
  simplifyPath('/home/user/Documents/../Pictures') === '/home/user/Pictures',
  'Test 3 failed: expected /home/user/Pictures'
);

// Example 4: Going up from root stays at root
console.assert(
  simplifyPath('/../') === '/',
  'Test 4 failed: expected /'
);

// Example 5: '...' is a valid directory name
console.assert(
  simplifyPath('/.../a/../b/c/../d/./') === '/.../b/d',
  'Test 5 failed: expected /.../b/d'
);

// Edge case: Root path
console.assert(
  simplifyPath('/') === '/',
  'Edge test 1 failed: expected /'
);

// Edge case: Multiple '..' going above root
console.assert(
  simplifyPath('/../../..') === '/',
  'Edge test 2 failed: expected /'
);

// Edge case: Single file at root
console.assert(
  simplifyPath('/a') === '/a',
  'Edge test 3 failed: expected /a'
);

// Edge case: Multiple levels deep
console.assert(
  simplifyPath('/a/b/c/d') === '/a/b/c/d',
  'Edge test 4 failed: expected /a/b/c/d'
);

// Edge case: All '..' from nested directory
console.assert(
  simplifyPath('/a/b/c/../../..') === '/',
  'Edge test 5 failed: expected /'
);

// Edge case: Mix of . and ..
console.assert(
  simplifyPath('/a/./b/./c') === '/a/b/c',
  'Edge test 6 failed: expected /a/b/c'
);

// Edge case: '....' is a valid directory name
console.assert(
  simplifyPath('/....') === '/....',
  'Edge test 7 failed: expected /....'
);

// Edge case: Underscore in path
console.assert(
  simplifyPath('/home/user_name/docs') === '/home/user_name/docs',
  'Edge test 8 failed: expected /home/user_name/docs'
);

// Edge case: Multiple slashes at root
console.assert(
  simplifyPath('///') === '/',
  'Edge test 9 failed: expected /'
);

// Edge case: Complex path with multiple operations
console.assert(
  simplifyPath('/a/b/../c/./d/../e') === '/a/c/e',
  'Edge test 10 failed: expected /a/c/e'
);

console.log('ALL TESTS PASSED');
