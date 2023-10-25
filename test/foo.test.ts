import * as rdt from 'react-dev-utils/openBrowser';
import { expect, it, vi } from 'vitest';

it('test', () => {

  const spy = vi.spyOn(rdt,'default','get');
  rdt.default('https://www.taobao.com');
  // expect(spy).toHaveBeenCalledTimes(1);
});
