/**
 * Typed Arrays function
 * @param {Number} length - length of buffer
 * @param {Number} position - position to change
 * @param {Number} value - value to store in position
 * @returns {DataView}
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw new Error('Position outside range');
  const retval = new DataView(new ArrayBuffer(length), 0, length);
  retval.setInt8(position, value);
  return retval;
}
