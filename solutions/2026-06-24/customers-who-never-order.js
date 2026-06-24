// Customers Who Never Order — Easy
// https://leetcode.com/problems/customers-who-never-order/

/**
 * Customers Who Never Order
 *
 * Approach:
 * - Use a LEFT JOIN between Customers and Orders on customer ID
 * - Filter rows where the Orders side is NULL (meaning no matching order exists)
 * - This is a SQL problem, but we simulate it in JavaScript by:
 *   1. Building a Set of customerIds from the Orders table
 *   2. Filtering Customers whose id is NOT in that Set
 *   3. Returning their names under the column "Customers"
 *
 * Time Complexity: O(n + m) where n = number of customers, m = number of orders
 * Space Complexity: O(m) for storing the set of customerIds
 *
 * @param {Array<{id: number, name: string}>} customers
 * @param {Array<{id: number, customerId: number}>} orders
 * @returns {Array<{Customers: string}>}
 */
export function findCustomers(customers, orders) {
  const orderedCustomerIds = new Set(orders.map(order => order.customerId));

  return customers
    .filter(customer => !orderedCustomerIds.has(customer.id))
    .map(customer => ({ Customers: customer.name }));
}
