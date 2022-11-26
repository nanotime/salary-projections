import { describe, expectTypeOf, it } from 'vitest';
import { tops } from '../index';
import { Tops } from '../tops';
import { peopleTest } from './fixtures'

describe('tops', () => {
  it('Should return the correct structure', () => {
    const result: Tops = tops(peopleTest);
    expectTypeOf(result).toEqualTypeOf<Tops>();
  });
});
