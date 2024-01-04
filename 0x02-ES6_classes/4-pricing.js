export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(val) {
    this._amount = val;
  }

  get currency() {
    return this._currency;
  }

  set currency(val) {
    this._currency = val;
  }

  displayFullPrice() {
    const { amount, currency } = this;
    const { code, name } = currency;
    return `${amount} ${name} (${code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
