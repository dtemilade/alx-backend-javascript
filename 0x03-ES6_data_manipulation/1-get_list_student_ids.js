// Create a function that returns an array of ids from a list of iect.
export default function getListStudentIds(i) {
  if (!(i instanceof Array)) {
    return [];
  }
  return i.map((item) => item.id);
}
