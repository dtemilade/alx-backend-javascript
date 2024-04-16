/**
 * function that returns string in set values of a specific string
 * with a specific string (startString).
 * @param {Set} set
 * @param {String} startString
 * @returns {String}
 */
export default function cleanSet(set, startString) {
  if (
    !startString || !(set instanceof Set)
    || typeof startString !== 'string'
    || !set
  ) {
    return '';
  }
  const result = [];
  for (const x of set) {
    if (x && x.startsWith(startString) && typeof x === 'string') {
      const value = x.slice(startString.length);

      if (value && value !== x) result.push(value);
    }
  }
  return result.join('-');
}
