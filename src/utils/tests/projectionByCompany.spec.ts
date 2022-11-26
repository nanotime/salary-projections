import { describe, expect, it } from 'vitest';
import { projectionByCompany, getData } from '../index';

const companies = getData().company_data;

describe('projectionByCompany', () => {
  it('Should return a number', () => {
    expect(projectionByCompany('freelance', companies)).toBeTypeOf('number');
  });

  it('Should return the correct result', () => {
    const correct = 888.6363636363636;
    expect(projectionByCompany('freelance', companies)).toBe(correct);
  });
});
