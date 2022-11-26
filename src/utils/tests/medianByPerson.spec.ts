import { describe, expect, it } from 'vitest';
import { medianByPerson } from '../index';
import { peopleTest } from './fixtures';

describe('medianByPerson', () => {
  it('Should return a number', () => {
    expect(medianByPerson('Pancha', peopleTest)).toBeTypeOf('number');
  });

  it('Should return 1050, 1150 and 1250 as median', () => {
    expect(medianByPerson('Pancha', peopleTest)).toBe(1050);
    expect(medianByPerson('Panchita', peopleTest)).toBe(1150);
    expect(medianByPerson('Panchota', peopleTest)).toBe(1250);
  });
});
