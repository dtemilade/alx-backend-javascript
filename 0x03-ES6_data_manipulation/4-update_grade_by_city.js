// Create a function that returns with new grade objects located in a specific city.
export default function updateStudentGradeByCity(list, city, newGrade) {
  const defaultGrade = { grade: 'N/A' };
  if (!(list instanceof Array)) return [];
  return list
    .filter((item) => item.location === city)
    .map((item) => ({
      ...item,
      grade: (
        newGrade.filter((grade) => grade.studentId === item.id)
          .pop() || defaultGrade).grade,
    }));
}
