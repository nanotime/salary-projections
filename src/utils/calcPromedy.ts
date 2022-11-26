/**
 * Calculate the promedy of a list
 *
 * @export
 * @param {number[]} list
 */
export function calcPromedy(list: number[]): number {
  return list.reduce((prev, item) => prev + item, 0) / list.length;
}