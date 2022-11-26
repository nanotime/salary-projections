import { Job } from './data';
import { calcMedian } from './index';

/**
 * Calculates the median salary from a people list
 *
 * @param {string} personName
 * @param {Map<string, Job[]>} people
 * @return {*}  {number}
 */
export function medianByPerson(personName: string, people: Map<string, Job[]>): number {
  const salarys = people.get(personName)?.map(({ salary }) => salary);
  return calcMedian(salarys || []);
}