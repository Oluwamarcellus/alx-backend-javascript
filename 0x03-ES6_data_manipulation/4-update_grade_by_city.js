export default function updateStudentGradeByCity(list, city, grades) {
  const filtered = list.filter((obj) => obj.location === city);
  return filtered.map((object) => {
    const obj = object;
    const student = grades.find((grade) => obj.id === grade.studentId);
    obj.grade = (student ? student.grade : 'N/A');
    return obj;
  });
}
