export default class Validator {
  validateUsername(name) {
    this.name = name;
    const regex1 = /^[a-z][a-z\d\-_]+[a-z]$/i.test(this.name);
    const regex2 = !/\d{4}/.test(this.name);
    return regex1 && regex2;
  }
}
