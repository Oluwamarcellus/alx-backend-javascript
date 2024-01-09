export default function cleanSet(set, ss) {
  return !ss ? '' : [...set].filter((o) => o.startsWith(ss)).map((obj) => obj.split(ss)[1]).join('-');
}
