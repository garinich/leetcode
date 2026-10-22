// Employees Earning More Than Their Managers — Easy
// https://leetcode.com/problems/employees-earning-more-than-their-managers/

/**
 * Employees Earning More Than Their Managers
 *
 * Approach:
 * - We simulate a SQL self-join on the Employee table.
 * - For each employee, we look up their manager's salary using the managerId.
 * - If the employee's salary is greater than their manager's salary, we include them.
 *
 * Time Complexity: O(n) - We build a map of id -> salary in O(n), then iterate employees in O(n).
 * Space Complexity: O(n) - We store all employee records in a Map.
 *
 * SQL equivalent:
 * SELECT e1.name AS Employee
 * FROM Employee e1
 * JOIN Employee e2 ON e1.managerId = e2.id
 * WHERE e1.salary > e2.salary;
 */

/**
 * @param {Array<{id: number, name: string, salary: number, managerId: number|null}>} employees
 * @returns {Array<{Employee: string}>}
 */
export function findEmployeesEarningMoreThanManagers(employees) {
  // Build a map from employee id to their salary for quick lookup
  const salaryMap = new Map();
  for (const emp of employees) {
    salaryMap.set(emp.id, emp.salary);
  }

  const result = [];

  for (const emp of employees) {
    // Only consider employees who have a manager
    if (emp.managerId !== null && emp.managerId !== undefined) {
      const managerSalary = salaryMap.get(emp.managerId);
      // If manager exists and employee earns more
      if (managerSalary !== undefined && emp.salary > managerSalary) {
        result.push({ Employee: emp.name });
      }
    }
  }

  return result;
}
