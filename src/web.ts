import { WebPlugin } from '@capacitor/core';
import { BatteryInfoPlugin, BatteryInfoResult } from './definitions';

export class BatteryInfoWeb extends WebPlugin implements BatteryInfoPlugin {
  async getBatteryInfo(): Promise<BatteryInfoResult> {
    if ('getBattery' in navigator) {
      const battery: any = await (navigator as any).getBattery();
      return {
        batteryLevel: Math.round(battery.level * 100),
        isCharging: battery.charging,
      };
    }
    return {
      batteryLevel: -1,
      isCharging: false,
    };
  }

}