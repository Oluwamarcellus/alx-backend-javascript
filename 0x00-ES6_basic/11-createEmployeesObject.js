export default function createEmployeesObject(departmentName, employees) {
  const newArr = [];
  for (const emp of employees) {
    newArr.push(`$${emp}`);
  }
  return {
    [`$${departmentName}`]: newArr,
  };
}
