import { describe, expect, it } from 'vitest';
import { generalMedianOfPersons } from '../index';
import { peopleTest } from './fixtures';

describe('generalMedianOfPersons', () => {
  it('Should return a number', () => {
    expect(generalMedianOfPersons(peopleTest)).toBeTypeOf('number');
  });

  it('Should be 1250 as general median', () => {
    expect(generalMedianOfPersons(peopleTest)).toBe(1250);
  });
});
