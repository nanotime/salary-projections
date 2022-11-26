import { Job } from './data';
import { medianByPerson, calcMedian } from './index';

export function generalMedianOfPersons(people: Map<string, Job[]>): number {
  const medianList: number[] = [];

  for (let name of people.keys()) {
    medianList.push(medianByPerson(name, people));
  }

  return calcMedian(medianList);
}
