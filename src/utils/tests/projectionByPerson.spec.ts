import { describe, expect, it } from 'vitest';
import { projectionByPerson } from '../index';
import { peopleTest } from './fixtures';

describe('projectionByPerson', () => {
  it('Should return a number', () => {
    expect(projectionByPerson('Pancha', peopleTest)).toBeTypeOf('number');
  });

  it('Should return the correct result', () => {
    const correct = 1488.095238095238;
    expect(projectionByPerson('Pancha', peopleTest)).toBe(correct);
  });
});
