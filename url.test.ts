import { expect, test } from 'vitest';

export const joinArg = (o, separator = '&') => {
  if (typeof o === 'string') return o;
  if (Object.keys(o).length > 0) {
    return `${Object.keys(o)
      .map((k) => `${k}=${o[k]}`)
      .join(separator)}`;
  } else {
    return '';
  }
};
test('url', () => {
  const url = new URL('https://www.google.com');
  url.search = joinArg({ a: 1 });
  expect(url.toString()).toBe('https://www.google.com/?a=1');
});
