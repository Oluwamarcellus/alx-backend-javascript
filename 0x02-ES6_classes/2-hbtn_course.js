export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(val) {
    if (typeof (val) === 'string') {
      this._name = val;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get name() {
    return this._name;
  }

  set length(val) {
    if (typeof (val) === 'number') {
      this._length = val;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get length() {
    return this._length;
  }

  set students(val) {
    if (Array.isArray(val)) {
      this._students = val;
    } else {
      throw new TypeError('Students must be an array');
    }
  }

  get students() {
    return this._students;
  }
}
