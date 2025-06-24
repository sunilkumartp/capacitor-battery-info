export interface BatteryInfoPlugin {
  getBatteryInfo(): Promise<BatteryInfoResult>;
}

export interface BatteryInfoResult {
  batteryLevel: number;
  isCharging: boolean;
}