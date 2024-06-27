import { testFn } from '@/index';
import { expect, it, vi } from 'vitest';



it('test', () => {
  testFn()
  expect(true).toBe(true);
});
