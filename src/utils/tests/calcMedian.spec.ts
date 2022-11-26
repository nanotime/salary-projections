import { describe, expect, it } from 'vitest';
import { calcMedian } from '../index';
import { list, oddList } from './fixtures';

describe('calcMedian', () => {
  it('Should return a number', () => {
    expect(calcMedian(list)).toBeTypeOf('number');
  });

  it('Should return 10 on a pairList', () => {
    expect(calcMedian(list)).toBe(10);
  });

  it('Should return 10 on a odd list', () => {
    expect(calcMedian(oddList)).toBe(10);
  });
});
