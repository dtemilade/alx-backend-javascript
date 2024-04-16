/**
 * It returns a boolean if all elements in the array exist within the set.
 * @param {Set} set
 * @param {Array} array
 * @returns {Boolean}
 */
export default function hasValuesFromArray(set, array) {
  const newSet = new Set(array);
  for (const x of newSet) {
    if (!set.has(x)) {
      return false;
    }
  }
  return true;
}
