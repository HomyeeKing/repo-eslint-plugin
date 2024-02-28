import { testFn } from '@/index';
import { expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => {
  import.meta.a = 1;
  global.ddd = 2
  return {
    rdt: vi.fn(),
  };
});

it('test', () => {
  expect(testFn()).toBe(true);
});
