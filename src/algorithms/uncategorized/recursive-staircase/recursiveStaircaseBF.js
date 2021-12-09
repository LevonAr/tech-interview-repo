/**
 * Created:  5/12/21
 * To Solve: Leetcode 70: Climbing Stairs
 * (Brute Force Solution)
 *
 * @param {number} n - Number of stairs to climb on.
 * @returns {number} - Number of ways to climb a staircase.
 */
function recursiveStaircaseBF(n) {
  if (n <= 0) {
    // There is no way to go down - you climb the stairs only upwards.
    // Also if you're standing on the ground floor that you don't need to do any further steps.
    return 0;
  }
  if (n == 1) {
    // There is only one way to go to the first step.
    return 1;
  }
  if (n == 2) {
    // There are two ways to get to the second steps: (1 + 1) or (2).
    return 2;
  }
  // Sum up how many steps we need to take after doing one step up with the number of
  // steps we need to take after doing two steps up.
  return recursiveStaircaseBF(n - 1) + recursiveStaircaseBF(n - 2);
}
