const rdt = require('react-dev-utils');
import { expect, it, vi } from 'vitest';

const openBrowserSpy = vi.spyOn(rdt, 'openBrowser');
rdt.openBrowser();
it('test', () => {
  expect(openBrowserSpy).toHaveBeenCalledOnce();
});
