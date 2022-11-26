import { Job } from './data';
import { projectionByPerson, medianByPerson } from './index';

interface Top {
  name: string;
  salary: number;
  projection: number;
}

export interface Tops {
  [key: string]: Top[];
}

export function tops(people: Map<string, Job[]>): Tops {
  const medianList: Top[] = [];

  for (let name of people.keys()) {
    medianList.push({
      name,
      salary: medianByPerson(name, people),
      projection: projectionByPerson(name, people)
    })
  }

  const orderedBySalary = medianList.sort((a, b) => b.salary - a.salary);
  const orderedByProjection = medianList.sort((a, b) => b.projection - a.projection);
  const tenPercent = Math.floor(medianList.length / 10);

  return {
    top10percent: orderedBySalary.slice(0, tenPercent),
    top10Salarys: orderedBySalary.slice(0, 10),
    top10Projections: orderedByProjection.slice(0, 10),
  }
}