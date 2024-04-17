// Create a function that returns objects located in a specific city.
export default function getStudentsByLocation(i, city) {
  if (typeof i !== 'object') {
    return [];
  }
  return i.filter((item) => item.location === city);
}
