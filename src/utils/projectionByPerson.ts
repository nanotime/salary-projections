import { Job } from './data';
import { calcMedian, calcPercentualProjection } from './index';
export function projectionByPerson(
  personName: string,
  people: Map<string, Job[]>
): number {
  const jobs = people.get(personName) || [];
  const lastSalary = jobs[jobs.length - 1].salary;
  const percentualGrow = calcPercentualProjection({ jobs });
  const percentualMedianGrow = calcMedian(percentualGrow);
  const salaryRise = lastSalary * percentualMedianGrow;
  return lastSalary + salaryRise;
}
