export default class Currency {
  constructor(code, name) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    this._name = val;
  }

  get code() {
    return this._code;
  }

  set code(val) {
    this._code = val;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
