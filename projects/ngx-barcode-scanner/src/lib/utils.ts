export class Utils {
  /* eslint-disable */
  static setOrDefault(object: any, path: string, value: any): void {
    if (typeof object[path] === 'undefined') {
      object[path] = value;
    }
  }
}
