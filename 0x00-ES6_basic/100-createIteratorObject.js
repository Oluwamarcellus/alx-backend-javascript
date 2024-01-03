export default function createIteratorObject(report) {
  const reVal = [];
  for (const object of Object.values(report)) {
    for (const obj of Object.values(object)) {
      for (const each of obj) {
        reVal.push(each);
      }
    }
  }
  return reVal;
}
