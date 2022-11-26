import { isPair, calcPromedy } from './index';

/**
 * Calculates the median of a number array
 *
 * @export
 * @param {number[]} list
 * @return {*}  {number}
 */
 export function calcMedian(list: number[]): number {
  const ordered = list.sort((a, b) => a - b);
  const listPair = isPair(ordered);

  if (listPair) {
    // Get the two mid items in the list
    const indexes = {
      mid1: ordered.length / 2 - 1,
      mid2: ordered.length / 2,
    };
    const promedyPosition = Math.ceil(
      calcPromedy([indexes.mid1, indexes.mid2])
    );
    return ordered[promedyPosition];
  } else {
    return ordered[Math.ceil(ordered.length / 2)];
  }
}