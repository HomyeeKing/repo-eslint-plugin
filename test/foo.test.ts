import ob from 'react-dev-utils/openBrowser';
import { expect, it, vi } from 'vitest';

vi.mock('react-dev-utils/openBrowser', () => {
  return {
    default: vi.fn(),
  };
});

it('test', () => {
  ob('https://www.google.com');
  expect(ob).toHaveBeenCalledTimes(1);
  expect(ob).toHaveBeenCalledWith('https://www.google.com');
});
