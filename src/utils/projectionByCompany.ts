import { calcMedian, calcPercentualProjection } from './index';
import { CompanyData } from './data';

export function projectionByCompany(
  company: string,
  companies: Map<string, CompanyData>
): number {
  const data: CompanyData = companies.get(company) || {};

  // Get the current company keys and map over the years data to calc median
  const medianSalarysByYear = Object.keys(data).map(y => {
    const yr = Number(y);
    return calcMedian(data[yr].salarys);
  });

  const lastMedian = medianSalarysByYear[medianSalarysByYear.length - 1];
  const percentualGrow = calcPercentualProjection({
    medians: medianSalarysByYear,
  });
  const percentualMedianGrow = calcMedian(percentualGrow);
  const rise = lastMedian * percentualMedianGrow;
  return lastMedian + rise;
}
