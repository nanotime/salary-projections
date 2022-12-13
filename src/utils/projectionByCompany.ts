import { calcMedian, calcPercentualProjection } from './index';
import { CompanyData } from './data';

export function projectionByCompany(data: CompanyData): number {
  // Get the current company keys and map over the years data to calc median
  const medianSalarysByYear = Object.keys(data).map(y => {
    return calcMedian(data[y].salarys);
  });

  const lastMedian = medianSalarysByYear[medianSalarysByYear.length - 1];
  const percentualGrow = calcPercentualProjection({
    medians: medianSalarysByYear,
  });
  const percentualMedianGrow = calcMedian(percentualGrow);
  const rise = lastMedian * percentualMedianGrow;
  return lastMedian + rise;
}
