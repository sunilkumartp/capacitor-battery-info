import { WebPlugin } from '@capacitor/core';

import type { BatteryInfoPlugin } from './definitions';

export class BatteryInfoWeb extends WebPlugin implements BatteryInfoPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    return options;
  }
  }
