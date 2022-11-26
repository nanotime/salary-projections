import { describe, expect, it } from 'vitest';
import {
  calcPercentualProjection,
  getData,
  CompanyData,
  calcMedian,
} from '../index';
import { peopleTest } from './fixtures';

// TODO: make this betah
describe('calcPercentualProjection', () => {
  it('On flat Job array, should return an array', () => {
    const jobs = peopleTest.get('Pancha');
    const result = calcPercentualProjection({ jobs });
    expect(result).toBeTypeOf('object');
    expect(Array.isArray(result)).toBeTruthy();
  });

  it('On Job array should return the correct calcs', () => {
    const jobs = peopleTest.get('Pancha'),
      correct = [0, 0, 2.4, 0.23529411764705882, 0.19047619047619047, 0],
      result = calcPercentualProjection({ jobs });

    expect(result).toStrictEqual(correct);
  });

  it('On median array should return the correct calcs', () => {
    const companies = getData().company_data,
      testCompany: CompanyData = companies.get('freelance') || {},
      correct = [0, 0.1, 0.045454545454545456, 0.4782608695652174, 0, 0];

    const medianSalarysByYear = Object.keys(testCompany).map(y => {
      const yr = Number(y);
      return calcMedian(testCompany[yr].salarys);
    });

    const result = calcPercentualProjection({ medians: medianSalarysByYear });
    expect(result).toStrictEqual(correct);
  });
});
