import { describe, expect, it } from 'vitest';
import { isPair } from '../index';
import { list, oddList } from './fixtures';

describe('isPair', () => {
  it('Should return a boolean value', () => {
    expect(isPair(list)).toBeTypeOf('boolean');
  });

  it('Should return true', () => {
    expect(isPair(list)).toBe(true);
  });

  it('Should return false', () => {
    expect(isPair(oddList)).toBe(false);
  })
})