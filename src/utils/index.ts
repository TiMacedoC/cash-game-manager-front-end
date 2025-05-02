export class Utils {
  public static getInitials(name: string): string {
    const [first = '', second = ''] = name.trim().split(' ');
    return ((first[0] ?? '') + (second[0] ?? '')).toLocaleUpperCase();
  }
}
