import { registerPlugin } from '@capacitor/core';

import type { BatteryInfoPlugin } from './definitions';

const BatteryInfo = registerPlugin<BatteryInfoPlugin>('BatteryInfo', {
  web: () => import('./web').then((m) => new m.BatteryInfoWeb()),
});

export * from './definitions';
export { BatteryInfo };
