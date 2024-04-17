// Create a function that returns the sum of all the student ids.
export default function getStudentIdSum(i) {
  if (typeof i !== 'object') {
    return [];
  }
  return i.reduce((prev, curr) => prev + curr.id, 0);
}
