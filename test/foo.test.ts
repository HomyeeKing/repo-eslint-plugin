import { testFn } from '@/index';
import { expect, it, vi } from 'vitest';

// uncomment this to make test pass.  but mock @ice/appear not works
// vi.mock('rax-compat',()=>{
//   return {
//     default:vi.fn()
//   }
// })
it('test', () => {
  testFn()
  expect(true).toBe(true);
});
