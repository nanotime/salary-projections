import { describe, expect, it } from 'vitest';
import { calcPromedy } from '../index';
import { list } from './fixtures';

describe('calcPromedy', () => {
  it('Should return a number', () => {
    expect(calcPromedy(list)).toBeTypeOf('number');
  });

  it('Should return 10 as result', () => {
    expect(calcPromedy(list)).toBe(10);
  });
});
