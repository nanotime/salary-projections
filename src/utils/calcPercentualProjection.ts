import { Job } from './data';

export function calcPercentualProjection({
  jobs,
  medians,
}: {
  jobs?: Job[],
  medians?: number[]
}): number[] | [] {
  if (jobs) {
    return jobs.map((job, idx) => {
      // First salary doesn't have any past salary on list
      if (idx === 0) return 0;
      const pastJob = jobs[idx - 1];
      const grow = job.salary - pastJob.salary;
      return grow / pastJob.salary;
    });
  }

  if (medians) {
    return medians.map((med, idx) => {
      if (idx === 0) return 0;
      const pastMed = medians[idx - 1];
      const grow = med - pastMed;
      return grow / pastMed;
    })
  }

  return [];
};