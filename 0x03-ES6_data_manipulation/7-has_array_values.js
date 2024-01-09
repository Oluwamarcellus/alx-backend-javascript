export default function hasValuesFromArray(set, arr) {
  return arr.every((obj) => set.has(obj));
}
